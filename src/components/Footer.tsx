import { useState } from "react";
import { ChevronDown } from "lucide-react";

const quickLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Proof", href: "#proof" },
  { label: "Model", href: "#model" },
  { label: "Calculator", href: "#calculator" },
  { label: "Join", href: "#join" },
];

const legalLinks = ["Private Placement", "Terms", "Privacy"];

const legalSections = [
  {
    title: "Private Placement",
    defaultOpen: true,
    content: `THIS INVESTMENT OPPORTUNITY IS BEING MADE AVAILABLE ONLY TO ACCREDITED INVESTORS PURSUANT TO EXEMPTIONS FROM REGISTRATION UNDER THE SECURITIES REGULATION CODE OF THE PHILIPPINES. THE SHARES REPRESENTED BY 'PEBBLES' HAVE NOT BEEN REGISTERED WITH THE SECURITIES AND EXCHANGE COMMISSION (SEC) AND ARE BEING OFFERED IN A PRIVATE PLACEMENT EXEMPT FROM REGISTRATION. NO SECURITIES COMMISSION OR OTHER REGULATORY AUTHORITY HAS PASSED UPON THE MERITS OF THIS OFFERING OR THE ACCURACY OR ADEQUACY OF THIS PRESENTATION. ANY REPRESENTATION TO THE CONTRARY IS UNLAWFUL.

THE OFFERING IS LIMITED TO A MAXIMUM OF 20 NON-ACCREDITED INVESTORS IN THE TIER 1 KICKSTARTER CIRCLE, AND AN UNLIMITED NUMBER OF ACCREDITED INVESTORS IN SUBSEQUENT TIERS, IN COMPLIANCE WITH SECTION 10.2 OF THE SECURITIES REGULATION CODE AND ITS IMPLEMENTING RULES AND REGULATIONS.`,
  },
  {
    title: "Terms of Use",
    defaultOpen: false,
    content: `ACCESS TO AND USE OF THIS WEBSITE AND THE INFORMATION CONTAINED HEREIN IS SUBJECT TO THE FOLLOWING TERMS AND CONDITIONS. BY ACCESSING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.

This website and its contents are operated by AMUMA Holding, a corporation organized under the laws of the Republic of the Philippines. All information presented herein is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Such offers will only be made pursuant to a definitive private placement memorandum and related subscription documents.

The information contained on this website is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. It is the responsibility of any person accessing this website to comply with all applicable laws and regulations of their jurisdiction.

NO REPRESENTATION OR WARRANTY IS MADE AS TO THE ACCURACY, COMPLETENESS, OR TIMELINESS OF THE INFORMATION CONTAINED HEREIN. ALL INFORMATION IS PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.`,
  },
  {
    title: "Privacy Policy",
    defaultOpen: false,
    content: `AMUMA Holding respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit applications through our platform.

INFORMATION WE COLLECT: We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our offerings, submit an application form, or otherwise contact us. The personal information we collect may include your name, email address, phone number, country of residence, and any other information you choose to provide.

USE OF INFORMATION: We use the information we collect to evaluate your eligibility as an investor, communicate with you regarding investment opportunities, comply with applicable legal and regulatory requirements, and maintain records of interested parties.

DATA SECURITY: We implement appropriate technical and organizational security measures designed to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.

DISCLOSURE OF INFORMATION: We do not sell, trade, or rent your personal information to third parties. We may share your information with our legal advisors, blockchain developers, and other service providers who assist in the operation of our business and the offering.

DATA RETENTION: We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting, or reporting requirements.

YOUR RIGHTS: Under the Data Privacy Act of 2012 (Republic Act No. 10173) of the Philippines, you have the right to access, correct, or request the deletion of your personal information. To exercise these rights, please contact us at privacy@amuma.ph.

CONTACT US: If you have questions about this Privacy Policy, please contact us at privacy@amuma.ph.`,
  },
];

const disclaimers = `RESTRICTIONS ON OFFERING: The securities offered are not being offered or sold in the United States or to U.S. persons. This website is not intended for access by any person in the United States or any U.S. person.

FORWARD-LOOKING STATEMENTS: This website contains forward-looking statements regarding future events, financial projections, and business strategies. These statements involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially. Past performance of Baia is not necessarily indicative of future results for AMUMA properties.

RISK FACTORS: An investment in AMUMA properties involves significant risks, including but not limited to construction delays, market conditions, regulatory changes, operational challenges, and liquidity limitations.

INTELLECTUAL PROPERTY: All content on this website is the property of AMUMA Holding and is protected by Philippine and international copyright laws.`;

const LegalAccordion = ({
  title,
  defaultOpen,
  content,
}: {
  title: string;
  defaultOpen: boolean;
  content: string;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-primary-foreground/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-body text-sm font-semibold text-primary-foreground/90 uppercase tracking-wider">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-primary-foreground/50 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[2000px] opacity-100 pb-5" : "max-h-0 opacity-0"}`}
      >
        {content.split("\n\n").map((p, i) => (
          <p
            key={i}
            className="font-body text-xs text-primary-foreground/60 leading-relaxed mb-3 last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="py-20 border-b border-primary-foreground/10">
        <div className="container px-6">
          <h2 className="font-display text-3xl font-bold mb-12 text-center tracking-wide">
            AMUMA Collection
          </h2>

          <div className="grid sm:grid-cols-3 gap-10 max-w-lg sm:max-w-2xl mx-auto">
            <div>
              <h3 className="font-body text-sm font-semibold mb-4 opacity-60 uppercase tracking-wider">
                Quick Links
              </h3>
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
              <h3 className="font-body text-sm font-semibold mb-4 opacity-60 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((l) => (
                  <li key={l}>
                    <span className="font-body text-base opacity-80">{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-body text-sm font-semibold mb-4 opacity-60 uppercase tracking-wider">
                Contact
              </h3>
              <a
                href="mailto:hello@amuma.ph"
                className="font-body text-base opacity-80 hover:opacity-100 transition-opacity block"
              >
                hello@amuma.ph
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal accordion */}
      <div className="py-12">
        <div className="container px-6 max-w-2xl mx-auto">
          {legalSections.map((s) => (
            <LegalAccordion key={s.title} {...s} />
          ))}
        </div>
      </div>

      {/* Disclaimers */}
      <div className="border-t border-primary-foreground/10 py-10">
        <div className="container px-6 max-w-2xl mx-auto">
          {disclaimers.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="font-body text-[11px] text-primary-foreground/40 leading-relaxed mb-3 last:mb-0"
            >
              {p}
            </p>
          ))}

          <p className="font-body text-[11px] text-primary-foreground/40 leading-relaxed mt-6">
            This website and its contents shall be governed by the laws of the Republic of the
            Philippines. Any disputes shall be submitted to the exclusive jurisdiction of the courts
            of Makati City, Philippines.
          </p>

          <p className="font-body text-xs text-primary-foreground/50 mt-8 text-center">
            AMUMA Holding · legal@amuma.ph
          </p>

          <p className="font-body text-xs text-primary-foreground/30 mt-4 text-center">
            © 2026 AMUMA Collection. All rights reserved. Dream high, fly low.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
