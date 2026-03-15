import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ContentItem {
  section_id: string;
  field_key: string;
  text_value: string | null;
  image_url: string | null;
}

interface AdminContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
  getContent: (section: string, key: string, fallback: string) => string;
  getImage: (section: string, key: string) => string | null;
  updateContent: (section: string, key: string, value: string) => Promise<void>;
  uploadImage: (section: string, key: string, file: File) => Promise<string | null>;
  saving: boolean;
}

const AdminContext = createContext<AdminContextType | null>(null);

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used inside AdminProvider");
  return ctx;
};

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdminMode, setIsAdminMode] = useState(() => localStorage.getItem("amuma_admin") === "true");
  const [content, setContent] = useState<Record<string, Record<string, ContentItem>>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const { data } = await (supabase as any).from("site_content").select("*");
      if (data) {
        const map: Record<string, Record<string, ContentItem>> = {};
        data.forEach((item: any) => {
          if (!map[item.section_id]) map[item.section_id] = {};
          map[item.section_id][item.field_key] = item;
        });
        setContent(map);
      }
    } catch (e) {
      console.log("Could not load site content", e);
    }
  };

  const toggleAdminMode = useCallback(() => {
    setIsAdminMode((prev) => {
      const next = !prev;
      localStorage.setItem("amuma_admin", String(next));
      return next;
    });
  }, []);

  const getContent = useCallback(
    (section: string, key: string, fallback: string): string => {
      return content[section]?.[key]?.text_value || fallback;
    },
    [content]
  );

  const getImage = useCallback(
    (section: string, key: string): string | null => {
      return content[section]?.[key]?.image_url || null;
    },
    [content]
  );

  const updateContent = useCallback(async (section: string, key: string, value: string) => {
    setSaving(true);
    try {
      await (supabase as any).from("site_content").upsert(
        { section_id: section, field_key: key, text_value: value, updated_at: new Date().toISOString() },
        { onConflict: "section_id,field_key" }
      );
      setContent((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: {
            section_id: section,
            field_key: key,
            text_value: value,
            image_url: prev[section]?.[key]?.image_url || null,
          },
        },
      }));
    } catch (e) {
      console.error("Failed to save content", e);
    }
    setSaving(false);
  }, []);

  const uploadImage = useCallback(async (section: string, key: string, file: File) => {
    setSaving(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${section}/${key}-${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from("site-images").upload(path, file);
      if (error) throw error;
      const { data: urlData } = supabase.storage.from("site-images").getPublicUrl(path);
      const publicUrl = urlData.publicUrl;

      await (supabase as any).from("site_content").upsert(
        { section_id: section, field_key: key, image_url: publicUrl, updated_at: new Date().toISOString() },
        { onConflict: "section_id,field_key" }
      );

      setContent((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: {
            section_id: section,
            field_key: key,
            text_value: prev[section]?.[key]?.text_value || null,
            image_url: publicUrl,
          },
        },
      }));
      setSaving(false);
      return publicUrl;
    } catch (e) {
      console.error("Failed to upload image", e);
      setSaving(false);
      return null;
    }
  }, []);

  return (
    <AdminContext.Provider
      value={{ isAdminMode, toggleAdminMode, getContent, getImage, updateContent, uploadImage, saving }}
    >
      {children}
    </AdminContext.Provider>
  );
};
