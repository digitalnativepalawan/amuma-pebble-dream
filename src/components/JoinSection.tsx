import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const benefits = [
  "Name on founding plaque at San Vicente Retreat",
  "Early access to future AMUMA retreats",
  "First access to future share offerings",
  "Annual private video update from James",
  "Invitation to annual Founders' Dinner",
  "Listed as Founding Circle member on website",
];

const countries = [
  "Philippines", "Germany", "United Kingdom", "United States", "Spain",
  "France", "Japan", "Australia", "Singapore", "Other",
];

const JoinSection = () => {
  const headingRef = useScrollReveal();
  const formRef = useScrollReveal();
  const { toast } = useToast();

  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", phone: "", country: "", referral_source: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first_name.trim() || !form.last_name.trim() || !form.email.trim() || !form.phone.trim() || !form.country) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("applications").insert({
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        country: form.country,
        referral_source: form.referral_source.trim() || null,
        message: form.message.trim() || null,
      });
      if (error) throw error;
      toast({ title: "Application submitted", description: "We'll be in touch soon." });
      setForm({ first_name: "", last_name: "", email: "", phone: "", country: "", referral_source: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-none";

  return (
    <section id="join" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Join the Founding Circle
          </h2>
          <p className="font-body text-base text-muted-foreground">20 exclusive Nova spots at ₱500,000</p>
        </div>

        <div className="max-w-lg">
          {/* Offer */}
          <div className="mb-12">
            <div className="space-y-2 font-body text-base text-foreground/70 mb-6">
              <p>— ₱500,000 investment (Nova tier)</p>
              <p>— 50 Membership Stakes</p>
              <p>— 1,000 Annual Pebbles</p>
              <p>— Early access to future AMUMA retreats</p>
            </div>
            <p className="font-body text-sm text-muted-foreground">20 spots remaining</p>
          </div>

          <div className="divider mb-12" />

          {/* Benefits */}
          <div className="mb-12">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">Founding Circle Benefits</p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <p key={b} className="font-body text-base text-foreground/70">— {b}</p>
              ))}
            </div>
          </div>

          <div className="divider mb-12" />

          {/* Form */}
          <div ref={formRef} className="scroll-reveal">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-8">Apply Now</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="First Name *" value={form.first_name} onChange={(e) => update("first_name", e.target.value)} className={inputClass} maxLength={100} />
              <input type="text" placeholder="Last Name *" value={form.last_name} onChange={(e) => update("last_name", e.target.value)} className={inputClass} maxLength={100} />
              <input type="email" placeholder="Email *" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} maxLength={255} />
              <input type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} maxLength={30} />
              <select value={form.country} onChange={(e) => update("country", e.target.value)} className={inputClass}>
                <option value="">Country *</option>
                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <input type="text" placeholder="How did you hear about us?" value={form.referral_source} onChange={(e) => update("referral_source", e.target.value)} className={inputClass} maxLength={200} />
              <textarea placeholder="Message (optional)" value={form.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} min-h-[100px] resize-y`} maxLength={1000} />
              <button
                type="submit"
                disabled={submitting}
                className="font-body text-sm tracking-wide text-primary border border-primary rounded-full px-10 py-4 hover:bg-primary/5 transition-all duration-300 disabled:opacity-50 mt-4"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          <AdminMediaBlock section="join" slotKey="after_body" className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
