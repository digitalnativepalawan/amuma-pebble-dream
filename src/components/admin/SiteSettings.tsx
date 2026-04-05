import { useState, useEffect, useCallback } from "react";
import { useBlocks } from "@/contexts/BlockContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { hexToHsl, hslToHex, applyTheme, DEFAULT_THEME } from "@/lib/themeUtils";

const COLOR_ROLES = [
  { key: "background", label: "Page Background", description: "Main background color of the entire site" },
  { key: "foreground", label: "Text Color", description: "Body text and general content color" },
  { key: "primary", label: "Primary Color", description: "Buttons, active states, and key highlights" },
  { key: "secondary", label: "Accent Color", description: "Secondary highlights and decorative elements" },
  { key: "border", label: "Border Color", description: "Lines, dividers, and input borders" },
];

interface ColorRowProps {
  label: string;
  description: string;
  hex: string;
  onChange: (hex: string) => void;
}

const ColorRow = ({ label, description, hex, onChange }: ColorRowProps) => {
  const [inputVal, setInputVal] = useState(hex);
  useEffect(() => { setInputVal(hex); }, [hex]);
  const handleTextChange = (val: string) => {
    setInputVal(val);
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) onChange(val);
  };
  return (
    <div className="flex items-center gap-4 py-3 border-b border-border last:border-0">
      <div className="relative flex-shrink-0">
        <div className="w-10 h-10 rounded border border-border shadow-sm overflow-hidden cursor-pointer" style={{ backgroundColor: hex }}>
          <input
            type="color"
            value={hex}
            onChange={(e) => { onChange(e.target.value); setInputVal(e.target.value); }}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body text-sm font-medium text-foreground">{label}</p>
        <p className="font-body text-xs text-muted-foreground">{description}</p>
      </div>
      <Input
        value={inputVal}
        onChange={(e) => handleTextChange(e.target.value)}
        className="w-28 font-mono text-xs uppercase"
        maxLength={7}
        placeholder="#000000"
      />
    </div>
  );
};

const SiteSettings = () => {
  const { settings, updateSetting } = useBlocks();
  const [themeHex, setThemeHex] = useState<Record<string, string>>({});
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [privacyUrl, setPrivacyUrl] = useState("");
  const [termsUrl, setTermsUrl] = useState("");

  useEffect(() => {
    const saved = settings.theme || {};
    const hexMap: Record<string, string> = {};
    COLOR_ROLES.forEach(({ key }) => {
      const hsl = saved[key] || DEFAULT_THEME[key];
      hexMap[key] = hslToHex(hsl);
    });
    setThemeHex(hexMap);
  }, [settings.theme]);

  useEffect(() => {
    const c = settings.contact || {};
    setContactEmail(c.email || "");
    setContactPhone(c.phone || "");
    const s = settings.social || {};
    setInstagram(s.instagram || "");
    setFacebook(s.facebook || "");
    const l = settings.legal || {};
    setPrivacyUrl(l.privacy || "");
    setTermsUrl(l.terms || "");
  }, [settings]);

  const handleColorChange = useCallback((key: string, hex: string) => {
    setThemeHex((prev) => ({ ...prev, [key]: hex }));
  }, []);

  const saveTheme = async () => {
    const hslMap: Record<string, string> = {};
    COLOR_ROLES.forEach(({ key }) => {
      if (themeHex[key]) hslMap[key] = hexToHsl(themeHex[key]);
    });
    await updateSetting("theme", hslMap);
    applyTheme(hslMap);
    toast({ title: "Theme saved", description: "Colors applied to your site." });
  };

  const resetTheme = async () => {
    const hexMap: Record<string, string> = {};
    COLOR_ROLES.forEach(({ key }) => { hexMap[key] = hslToHex(DEFAULT_THEME[key]); });
    setThemeHex(hexMap);
    await updateSetting("theme", DEFAULT_THEME);
    applyTheme(DEFAULT_THEME);
    toast({ title: "Theme reset", description: "Default colors restored." });
  };

  const saveInfo = async () => {
    await Promise.all([
      updateSetting("contact", { email: contactEmail, phone: contactPhone }),
      updateSetting("social", { instagram, facebook }),
      updateSetting("legal", { privacy: privacyUrl, terms: termsUrl }),
    ]);
    toast({ title: "Settings saved" });
  };

  return (
    <div className="space-y-10">
      <h2 className="font-display text-xl font-bold text-foreground">Site Settings</h2>

      <div className="space-y-4">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Theme Colors</p>
          <p className="font-body text-xs text-muted-foreground mt-1">Click a swatch or type a hex code. Changes apply site-wide.</p>
        </div>
        <div className="flex rounded overflow-hidden border border-border h-6">
          {COLOR_ROLES.map(({ key, label }) => (
            <div key={key} className="flex-1" style={{ backgroundColor: themeHex[key] || "#ccc" }} title={label} />
          ))}
        </div>
        <div className="rounded border border-border bg-card px-4 py-1">
          {COLOR_ROLES.map(({ key, label, description }) => (
            <ColorRow key={key} label={label} description={description} hex={themeHex[key] || "#ffffff"} onChange={(hex) => handleColorChange(key, hex)} />
          ))}
        </div>
        <div className="flex gap-2">
          <Button onClick={saveTheme}>Save Theme</Button>
          <Button variant="outline" onClick={resetTheme}>Reset to Default</Button>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Contact</p>
        <div className="grid gap-3">
          <div>
            <Label className="font-body text-xs">Email</Label>
            <Input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="hello@amuma.ph" />
          </div>
          <div>
            <Label className="font-body text-xs">Phone</Label>
            <Input value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="+63 XXX XXX XXXX" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Social Links</p>
        <div className="grid gap-3">
          <div>
            <Label className="font-body text-xs">Instagram</Label>
            <Input value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="@amuma" />
          </div>
          <div>
            <Label className="font-body text-xs">Facebook</Label>
            <Input value={facebook} onChange={(e) => setFacebook(e.target.value)} placeholder="/amuma.retreats" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Legal</p>
        <div className="grid gap-3">
          <div>
            <Label className="font-body text-xs">Privacy Policy URL</Label>
            <Input value={privacyUrl} onChange={(e) => setPrivacyUrl(e.target.value)} />
          </div>
          <div>
            <Label className="font-body text-xs">Terms URL</Label>
            <Input value={termsUrl} onChange={(e) => setTermsUrl(e.target.value)} />
          </div>
        </div>
      </div>

      <Button onClick={saveInfo}>Save Settings</Button>
    </div>
  );
};

export default SiteSettings;
