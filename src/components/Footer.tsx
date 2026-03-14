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
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-6">
        <h2 className="font-display text-2xl font-bold mb-10 text-center">AMUMA Collection</h2>

        <div className="grid sm:grid-cols-3 gap-8 max-w-lg sm:max-w-2xl mx-auto mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-body text-sm font-semibold mb-3 opacity-70">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-body text-sm font-semibold mb-3 opacity-70">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l}>
                  <span className="font-body text-sm opacity-80">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-sm font-semibold mb-3 opacity-70">Contact</h3>
            <a
              href="mailto:hello@amuma.ph"
              className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              hello@amuma.ph
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-primary-foreground/10 rounded-2xl p-5 max-w-lg mx-auto mb-8">
          <p className="font-body text-xs opacity-70 text-center leading-relaxed">
            This is a private offering. Not available to US persons. KYC/AML required.
            Past performance (Baia) does not guarantee future results. All investments involve risk.
          </p>
        </div>

        <p className="font-body text-xs opacity-50 text-center">
          © 2026 AMUMA Collection. Dream high, fly low.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
