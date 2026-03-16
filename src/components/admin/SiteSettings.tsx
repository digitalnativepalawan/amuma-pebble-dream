import { useState, useEffect } from "react";
import { useBlocks } from "@/contexts/BlockContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const SiteSettings = () => {
  const { settings, updateSetting } = useBlocks();
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [privacyUrl, setPrivacyUrl] = useState("");
  const [termsUrl, setTermsUrl] = useState("");

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

  const save = async () => {
    await Promise.all([
      updateSetting("contact", { email: contactEmail, phone: contactPhone }),
      updateSetting("social", { instagram, facebook }),
      updateSetting("legal", { privacy: privacyUrl, terms: termsUrl }),
    ]);
    toast({ title: "Settings saved" });
  };

  return (
    <div className="space-y-8">
      <h2 className="font-display text-xl font-bold text-foreground">Site Settings</h2>

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

      <Button onClick={save}>Save Settings</Button>
    </div>
  );
};

export default SiteSettings;
