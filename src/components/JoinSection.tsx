import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const benefits = [
  "Name on founding plaque at AMUMA Long Beach",
  "20% lifetime discount at all AMUMA properties",
  "First access to future Pebble offerings",
  "Annual private video update from James",
  "Invitation to annual Founders' Dinner",
  "Listed as Founding Pebble Holder on website",
];

const timelineItems = [
  { label: "Applications Open", value: "Q2 2026" },
  { label: "Closing", value: "When 20 spots filled" },
  { label: "Ground Breaking", value: "Q4 2026" },
  { label: "Completion", value: "Q2 2027" },
];

const countries = [
  "Philippines", "Germany", "United Kingdom", "United States", "Spain",
  "France", "Japan", "Australia", "Singapore", "Other",
];

const JoinSection = () => {
  const headingRef = useScrollReveal();
  const offerRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const formRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  const { toast } = useToast();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    referral_source: "",
    message: "",
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
      toast({ title: "Application submitted!", description: "We'll be in touch soon." });
      setForm({ first_name: "", last_name: "", email: "", phone: "", country: "", referral_source: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-full border border-border bg-background px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section id="join" className="py-20 bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            Join the Kickstarter Circle
          </h2>
          <p className="font-body text-muted-foreground">20 exclusive spots at ₱500,000</p>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          {/* Offer summary */}
          <div ref={offerRef} className="scroll-reveal bg-card rounded-2xl p-6 shadow-sm border-l-4 border-secondary">
            <div className="space-y-2 font-body text-sm text-foreground/80 mb-4">
              <p>₱500,000 investment</p>
              <p>5,000 Pebbles (1.54% ownership)</p>
              <p>~₱79,000 annual distribution</p>
            </div>
            <p className="font-body text-sm font-semibold text-primary mb-2">20 spots remaining</p>
            <Progress value={0} className="h-2" />
          </div>

          {/* Benefits */}
          <div ref={benefitsRef} className="scroll-reveal bg-card rounded-2xl p-6 shadow-sm border border-border/30">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Founder Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application form */}
          <div ref={formRef} className="scroll-reveal bg-card rounded-2xl p-6 shadow-sm border border-border/30">
            <h3 className="font-display text-lg font-bold text-foreground mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="First Name *"
                value={form.first_name}
                onChange={(e) => update("first_name", e.target.value)}
                className={inputClass}
                maxLength={100}
              />
              <input
                type="text"
                placeholder="Last Name *"
                value={form.last_name}
                onChange={(e) => update("last_name", e.target.value)}
                className={inputClass}
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
                maxLength={255}
              />
              <input
                type="tel"
                placeholder="Phone *"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClass}
                maxLength={30}
              />
              <select
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                className={inputClass}
              >
                <option value="">Country *</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="How did you hear about us?"
                value={form.referral_source}
                onChange={(e) => update("referral_source", e.target.value)}
                className={inputClass}
                maxLength={200}
              />
              <textarea
                placeholder="Message (optional)"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full rounded-2xl border border-border bg-background px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px] resize-y"
                maxLength={1000}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-body font-semibold text-sm px-8 py-4 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="scroll-reveal bg-muted/40 rounded-2xl p-6">
            {timelineItems.map((t) => (
              <div key={t.label} className="flex justify-between py-2 border-b border-border/30 last:border-0">
                <span className="font-body text-sm text-muted-foreground">{t.label}</span>
                <span className="font-body text-sm font-semibold text-foreground">{t.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
