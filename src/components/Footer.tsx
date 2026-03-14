import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const quickLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Proof", href: "#proof" },
  { label: "Model", href: "#model" },
  { label: "Calculator", href: "#calculator" },
  { label: "Join", href: "#join" },
];

const legalContent = {
  "Private Placement": `THIS INVESTMENT OPPORTUNITY IS BEING MADE AVAILABLE ONLY TO ACCREDITED INVESTORS PURSUANT TO EXEMPTIONS FROM REGISTRATION UNDER THE SECURITIES REGULATION CODE OF THE PHILIPPINES. THE SHARES REPRESENTED BY 'PEBBLES' HAVE NOT BEEN REGISTERED WITH THE SECURITIES AND EXCHANGE COMMISSION (SEC) AND ARE BEING OFFERED IN A PRIVATE PLACEMENT EXEMPT FROM REGISTRATION. NO SECURITIES COMMISSION OR OTHER REGULATORY AUTHORITY HAS PASSED UPON THE MERITS OF THIS OFFERING OR THE ACCURACY OR ADEQUACY OF THIS PRESENTATION. ANY REPRESENTATION TO THE CONTRARY IS UNLAWFUL.

THE OFFERING IS LIMITED TO A MAXIMUM OF 20 NON-ACCREDITED INVESTORS IN THE TIER 1 KICKSTARTER CIRCLE, AND AN UNLIMITED NUMBER OF ACCREDITED INVESTORS IN SUBSEQUENT TIERS, IN COMPLIANCE WITH SECTION 10.2 OF THE SECURITIES REGULATION CODE AND ITS IMPLEMENTING RULES AND REGULATIONS.`,
  "Terms of Use": `ACCESS TO AND USE OF THIS WEBSITE AND THE INFORMATION CONTAINED HEREIN IS SUBJECT TO THE FOLLOWING TERMS AND CONDITIONS. BY ACCESSING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.

This website and its contents are operated by AMUMA Holding, a corporation organized under the laws of the Republic of the Philippines. All information presented herein is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.

The information contained on this website is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation.

NO REPRESENTATION OR WARRANTY IS MADE AS TO THE ACCURACY, COMPLETENESS, OR TIMELINESS OF THE INFORMATION CONTAINED HEREIN. ALL INFORMATION IS PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.`,
  "Privacy Policy": `AMUMA Holding respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit applications through our platform.

INFORMATION WE COLLECT: We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our offerings, submit an application form, or otherwise contact us.

USE OF INFORMATION: We use the information we collect to evaluate your eligibility as an investor, communicate with you regarding investment opportunities, comply with applicable legal and regulatory requirements, and maintain records of interested parties.

DATA SECURITY: We implement appropriate technical and organizational security measures designed to protect your personal information.

YOUR RIGHTS: Under the Data Privacy Act of 2012 (Republic Act No. 10173) of the Philippines, you have the right to access, correct, or request the deletion of your personal information. Contact us at privacy@amuma.ph.`,
};

const disclaimers = `RESTRICTIONS ON OFFERING: The securities offered are not being offered or sold in the United States or to U.S. persons.

FORWARD-LOOKING STATEMENTS: This website contains forward-looking statements regarding future events, financial projections, and business strategies. Past performance of Baia is not necessarily indicative of future results.

RISK FACTORS: An investment in AMUMA properties involves significant risks, including construction delays, market conditions, regulatory changes, operational challenges, and liquidity limitations.

INTELLECTUAL PROPERTY: All content on this website is the property of AMUMA Holding and is protected by Philippine and international copyright laws.`;

type LegalKey = keyof typeof legalContent;

const Footer = () => {
  const [openLegal, setOpenLegal] = useState<LegalKey | null>(null);
  const legalRef = useRef<HTMLDivElement>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLegalClick = (key: LegalKey) => {
    setOpenLegal((prev) => (prev === key ? null : key));
    setTimeout(() => {
      legalRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="py-16 border-b border-primary-foreground/10">
        <div className="container px-6">
          <p className="font-display text-2xl font-bold uppercase tracking-[0.2em] mb-10">AMUMA</p>

          <div className="grid sm:grid-cols-3 gap-10 max-w-lg sm:max-w-2xl">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">Links</p>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <button onClick={() => scrollTo(l.href)} className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l.label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">Legal</p>
              <ul className="space-y-2">
                {(Object.keys(legalContent) as LegalKey[]).map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => handleLegalClick(key)}
                      className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {key === "Terms of Use" ? "Terms" : key === "Privacy Policy" ? "Privacy" : key}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">Contact</p>
              <a href="mailto:hello@amuma.ph" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">hello@amuma.ph</a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal content area — shown when a legal link is clicked */}
      <div ref={legalRef}>
        {openLegal && (
          <div className="py-10 border-b border-primary-foreground/10">
            <div className="container px-6 max-w-2xl">
              <div className="flex items-center justify-between mb-6">
                <p className="font-body text-sm text-primary-foreground/80 uppercase tracking-[0.15em]">{openLegal}</p>
                <button onClick={() => setOpenLegal(null)} className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                  Close
                </button>
              </div>
              {legalContent[openLegal].split("\n\n").map((p, i) => (
                <p key={i} className="font-body text-xs text-primary-foreground/50 leading-relaxed mb-3 last:mb-0">{p}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-primary-foreground/10 py-8">
        <div className="container px-6 max-w-2xl">
          {disclaimers.split("\n\n").map((p, i) => (
            <p key={i} className="font-body text-[11px] text-primary-foreground/30 leading-relaxed mb-2 last:mb-0">{p}</p>
          ))}
          <p className="font-body text-[11px] text-primary-foreground/30 leading-relaxed mt-4">
            This website and its contents shall be governed by the laws of the Republic of the Philippines. Any disputes shall be submitted to the exclusive jurisdiction of the courts of Makati City, Philippines.
          </p>
          <p className="font-body text-xs text-primary-foreground/40 mt-6">AMUMA Holding · legal@amuma.ph</p>
          <p className="font-body text-xs text-primary-foreground/20 mt-3">© 2026 AMUMA Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
