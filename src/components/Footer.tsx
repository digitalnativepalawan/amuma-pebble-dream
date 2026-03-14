const quickLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Proof", href: "#proof" },
  { label: "Model", href: "#model" },
  { label: "Calculator", href: "#calculator" },
  { label: "Join", href: "#join" },
];

const legalLinks = ["Private Placement", "Terms", "Privacy"];

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container px-6">
        <h2 className="font-display text-3xl font-bold mb-12 text-center tracking-wide">
          AMUMA Collection
        </h2>

        <div className="grid sm:grid-cols-3 gap-10 max-w-lg sm:max-w-2xl mx-auto mb-14">
          <div>
            <h3 className="font-body text-sm font-semibold mb-4 opacity-60 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-body text-base opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-sm font-semibold mb-4 opacity-60 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l}>
                  <span className="font-body text-base opacity-80">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-sm font-semibold mb-4 opacity-60 uppercase tracking-wider">Contact</h3>
            <a
              href="mailto:hello@amuma.ph"
              className="font-body text-base opacity-80 hover:opacity-100 transition-opacity"
            >
              hello@amuma.ph
            </a>
          </div>
        </div>

        <div className="bg-primary-foreground/10 rounded-2xl p-6 max-w-lg mx-auto mb-10">
          <p className="font-body text-sm opacity-70 text-center leading-relaxed">
            This is a private offering. Not available to US persons. KYC/AML required.
            Past performance (Baia) does not guarantee future results. All investments involve risk.
          </p>
        </div>

        <p className="font-body text-sm opacity-40 text-center">
          © 2026 AMUMA Collection. Dream high, fly low.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
