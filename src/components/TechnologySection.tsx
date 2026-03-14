import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link as LinkIcon, Cpu, ShieldCheck, Gem, Palmtree } from "lucide-react";

/* ─── Helpers ─── */
const ComparisonTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow className="border-border">
          {headers.map((h) => (
            <TableHead key={h} className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">{h}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i} className="border-border hover:bg-transparent">
            {row.map((cell, j) => (
              <TableCell key={j} className={`font-body text-sm leading-relaxed ${j === 0 ? "text-foreground font-medium" : "text-foreground/70"}`}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-wide mb-6">{children}</h3>
);

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="font-mono text-xs sm:text-sm leading-relaxed text-foreground/70 bg-muted/40 p-6 overflow-x-auto rounded-sm border border-border">{children}</pre>
);

const TechnologySection = () => {
  const overviewRef = useScrollReveal();
  const ledgerRef = useScrollReveal();
  const smartRef = useScrollReveal();
  const whitelistRef = useScrollReveal();
  const economicsRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const securityRef = useScrollReveal();
  const roadmapRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const stepsRef = useScrollReveal();

  return (
    <>
      {/* ── SECTION 1: OVERVIEW ── */}
      <section id="technology" className="section-padding bg-background">
        <div ref={overviewRef} className="scroll-reveal container px-6">
          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Investment Technology</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-primary uppercase tracking-[0.08em] mb-8 leading-tight max-w-2xl">
            Built on Blockchain, Backed by Real Assets in Palawan
          </h2>
          <p className="font-body text-base text-foreground/70 leading-relaxed max-w-xl mb-10">
            The Palawan Hidden Gems Project combines physical real estate development with blockchain technology. Every property — from{" "}
            <span className="text-foreground font-medium">Amuha Long Beach (2,000 sqm, 9 keys)</span> to future developments in{" "}
            <span className="text-foreground font-medium">Balabac, Port Barton, and El Nido</span> — is represented as digital{" "}
            <span className="text-primary font-medium">PEBBLES</span> on an immutable ledger.
          </p>
          <div className="flex flex-wrap items-center gap-3 font-body text-sm text-foreground/60">
            {[
              { icon: ShieldCheck, label: "KYC" },
              { icon: LinkIcon, label: "Whitelist" },
              { icon: Cpu, label: "Smart Contract" },
              { icon: Gem, label: "Pebbles" },
              { icon: Palmtree, label: "Property" },
            ].map((step, i) => (
              <span key={step.label} className="flex items-center gap-1.5">
                <step.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span>{step.label}</span>
                {i < 4 && <span className="text-border ml-2">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 2: BLOCKCHAIN LEDGER ── */}
      <section id="ledger" className="section-padding bg-background">
        <div ref={ledgerRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">Blockchain Ledger</h2>
          <p className="font-body text-base text-muted-foreground mb-12">The permanent record of ownership.</p>

          <SubHeading>What It Is</SubHeading>
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-12 max-w-xl">
            A blockchain ledger is a decentralised digital database that records all ownership and transaction data across a network of computers. Unlike traditional databases controlled by a single entity, blockchain creates a shared source of truth that cannot be altered retroactively.
          </p>

          <SubHeading>How It Applies to Your Pebbles</SubHeading>
          <ComparisonTable
            headers={["Aspect", "Traditional Real Estate", "Blockchain-Powered"]}
            rows={[
              ["Ownership Record", "Paper deeds, local registry", "Digital Pebbles on immutable ledger"],
              ["Transaction History", "Difficult to trace", "Complete audit trail from day one"],
              ["Transfer of Ownership", "Weeks of paperwork", "Instant Pebble transfer"],
              ["Transparency", "Limited visibility", "All verified investors see verified history"],
            ]}
          />

          <div className="divider my-12" />

          <SubHeading>Your Data on the Ledger</SubHeading>
          <p className="font-body text-sm text-foreground/70 mb-4 max-w-lg">
            For <span className="text-foreground font-medium">Amuha Long Beach (San Vicente, 2,000 sqm)</span>, the ledger permanently records:
          </p>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg">
            <p>— Total Pebbles issued representing 9 total keys (1 Villa ₱18,000 · 1 Suite ₱12,000 · 5 Deluxe Rooms ₱5,500)</p>
            <p>— Property boundaries: verified coordinates (10.5277° N, 119.2569° E)</p>
            <p>— Development milestones: Phase 1a groundbreaking 2026, Phase 1b launches 2027–2030</p>
            <p>— Rental income history: monthly distributions in Pebbles</p>
            <p>— Investor governance votes: every decision on property improvements</p>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-lg">
            For future properties across the 6 kickstarter spots and 10 hidden gems, each will have its own transparent ledger.
          </p>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 3: SMART CONTRACTS ── */}
      <section id="smart-contracts" className="section-padding bg-background">
        <div ref={smartRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">Smart Contracts</h2>
          <p className="font-body text-base text-muted-foreground mb-12">The automation engine.</p>

          <SubHeading>What They Are</SubHeading>
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-12 max-w-xl">
            Smart contracts are self-executing agreements written in code that live on the blockchain. When predetermined conditions are met, they automatically execute specified actions — no intermediaries required.
          </p>

          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">A. Pebble Creation &amp; Distribution</p>
          <p className="font-body text-sm text-foreground/70 mb-4">When you invest in Phase 1a (2026):</p>
          <CodeBlock>{`IF investor completes KYC
  AND investor is whitelisted
  AND payment received
THEN
  automatically mint property PEBBLES to investor's wallet
  AND record ownership on blockchain permanently`}</CodeBlock>

          <div className="divider my-12" />

          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">B. Rental Income Distribution</p>
          <p className="font-body text-sm text-foreground/70 mb-4">For Amuha Long Beach's 9 keys (Villa ₱18,000 · Suite ₱12,000 · 5 Deluxe ₱5,500):</p>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg mb-8">
            <p>1 — Receives all booking revenue</p>
            <p>2 — Deducts operating expenses</p>
            <p>3 — Calculates each holder's share based on Pebbles owned</p>
            <p>4 — Distributes profits directly to wallets monthly</p>
            <p>5 — Records every distribution on the ledger</p>
          </div>

          <div className="divider my-12" />

          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">C. Governance Voting</p>
          <p className="font-body text-sm text-foreground/70 mb-4">Pebble holders vote on major decisions — 1 Pebble = 1 vote:</p>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg mb-4">
            <p>— Approving renovations</p>
            <p>— Selecting property managers</p>
            <p>— Setting rental rate strategies</p>
            <p>— Approving new property acquisitions</p>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-lg">The smart contract tallies votes, enforces majority decisions, and records outcomes permanently.</p>

          <div className="divider my-12" />

          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">D. Secondary Market Trading</p>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg">
            <p>— List Pebbles on integrated secondary market</p>
            <p>— Smart contract automatically transfers Pebbles to buyer</p>
            <p>— Ledger updates instantly</p>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 4: WHITELIST ── */}
      <section id="whitelist" className="section-padding bg-background">
        <div ref={whitelistRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">Whitelist Access</h2>
          <p className="font-body text-base text-muted-foreground mb-12">Curated investor gateway.</p>

          <SubHeading>What It Is</SubHeading>
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-12 max-w-xl">
            A whitelist is a curated list of approved wallet addresses that have permission to interact with our investment smart contracts. Only whitelisted addresses can purchase Pebbles, receive distributions, or vote on governance.
          </p>

          <SubHeading>Why Whitelist?</SubHeading>
          <ComparisonTable
            headers={["Reason", "How It Protects You"]}
            rows={[
              ["Regulatory Compliance", "Ensures only qualified, verified investors participate"],
              ["Exclusivity", "Limited Pebbles for vetted investors only"],
              ["Security", "Prevents unauthorised access"],
              ["Priority Access", "Whitelisted investors get first access to new offerings"],
              ["Reduced Gas Fees", "Whitelist status reduces transaction costs"],
            ]}
          />

          <div className="divider my-12" />

          <SubHeading>How to Get Whitelisted</SubHeading>
          <div className="space-y-8 max-w-lg">
            {[
              { step: "01", title: "Complete KYC Verification", desc: "Submit government ID, proof of address, and accredited investor verification (if applicable)." },
              { step: "02", title: "Wallet Address Submission", desc: "Provide your blockchain wallet address (MetaMask, Trust Wallet, etc.)." },
              { step: "03", title: "Smart Contract Addition", desc: "Your address is added to the whitelist contract with permissions to purchase Pebbles, receive distributions, vote, and access the investor dashboard." },
              { step: "04", title: "Confirmation", desc: "You receive verification and can immediately participate." },
            ].map((s) => (
              <div key={s.step} className="flex gap-6">
                <span className="font-display text-4xl font-normal text-primary leading-none">{s.step}</span>
                <div>
                  <p className="font-body text-sm font-medium text-foreground mb-1">{s.title}</p>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="divider my-12" />

          <SubHeading>Whitelist Tiers</SubHeading>
          <ComparisonTable
            headers={["Tier", "Requirement", "Pebble Benefits"]}
            rows={[
              ["Kickstarter Tier", "Early commitment", "Priority pricing, first access to Phase 1a, reduced fees"],
              ["Founders Tier", "Higher commitment", "All above + governance super-voting (1 Pebble = 2 votes), exclusive updates"],
              ["Institutional Tier", "Major commitment", "All above + direct board observation rights"],
            ]}
          />
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 5: PEBBLE-ONOMICS ── */}
      <section id="pebble-onomics" className="section-padding bg-background">
        <div ref={economicsRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">Pebble-onomics</h2>
          <p className="font-body text-base text-muted-foreground mb-12">How your investment is structured.</p>

          <SubHeading>Property — Amuha Long Beach (San Vicente)</SubHeading>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg mb-12">
            <p>— Total Area: 2,000 sqm</p>
            <p>— Total Keys: 9 (1 Villa, 1 Suite, 5 Deluxe Rooms + future expansion)</p>
            <p>— Total Pebble Supply: TBA</p>
            <p>— Pebble Price: ₱XX per Pebble (minimum varies by tier)</p>
          </div>

          <SubHeading>Pebble Utility</SubHeading>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg mb-12">
            <p>— Ownership share of the property</p>
            <p>— Rental income entitlement (proportional monthly profits)</p>
            <p>— Voting power in governance decisions (1 Pebble = 1 vote)</p>
            <p>— Future rights in subsequent phases</p>
          </div>

          <SubHeading>Distribution Schedule</SubHeading>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg">
            <p>— Phase 1a (2026): 40% of Pebbles released</p>
            <p>— Phase 1b (2027): 30% released</p>
            <p>— Reserved for future development: 20%</p>
            <p>— Team / Advisors: 10% (vested over 4 years)</p>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 6: WHY PEBBLES ── */}
      <section id="why-pebbles" className="section-padding bg-background">
        <div ref={whyRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">Why Pebbles for Palawan Real Estate?</h2>
          <p className="font-body text-base text-muted-foreground mb-12">Solving traditional challenges.</p>

          <ComparisonTable
            headers={["Challenge", "Pebbles Solution"]}
            rows={[
              ["Title complexity", "Pebbles represent beneficial ownership through compliant legal structure"],
              ["Foreign investment restrictions", "Structured under Philippine law with blockchain as record layer"],
              ["Transparency", "Every Pebble transaction visible to verified investors"],
              ["Liquidity", "Pebbles can be traded on compliant secondary markets"],
            ]}
          />
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 7: SECURITY ── */}
      <section id="tech-security" className="section-padding bg-background">
        <div ref={securityRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">Security &amp; Compliance</h2>
          <p className="font-body text-base text-muted-foreground mb-12">Your investment, protected.</p>

          <SubHeading>Regulatory Framework</SubHeading>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg mb-12">
            <p>— All Pebble offerings structured under Philippine SEC guidelines</p>
            <p>— KYC / AML procedures enforced before whitelisting</p>
            <p>— Smart contracts audited by third-party security firms</p>
            <p>— Legal opinions confirming Pebble structure compliance</p>
          </div>

          <SubHeading>Data Privacy</SubHeading>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed max-w-lg">
            <p>— KYC documents stored encrypted off-chain</p>
            <p>— Only proof of verification stored on-chain</p>
            <p>— Wallet addresses pseudonymous</p>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 8: ROADMAP INTEGRATION ── */}
      <section id="tech-roadmap" className="section-padding bg-background">
        <div ref={roadmapRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">Roadmap Integration</h2>
          <p className="font-body text-base text-muted-foreground mb-12">Pebbles across the timeline.</p>

          <ComparisonTable
            headers={["Year", "Milestone", "Pebbles Implementation"]}
            rows={[
              ["2026", "Phase 1a Begins", "Pebble generation event, whitelist opens, first smart contracts deployed"],
              ["2027", "Phase 1b Launches", "Rental distribution active, governance voting begins"],
              ["2028–2030", "Expansion", "New property Pebbles issued to existing holders first"],
              ["2031+", "Secondary Market", "Pebbles tradable on compliant exchanges"],
            ]}
          />
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 9: TECH FAQ ── */}
      <section id="tech-faq" className="section-padding bg-background">
        <div ref={faqRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-12">Technology FAQ</h2>

          <div className="max-w-lg">
            <Accordion type="single" collapsible>
              {[
                { q: "Why do you call them Pebbles?", a: "Just as pebbles on a beach are small pieces of something beautiful and enduring, our Pebbles represent small, valuable pieces of Palawan's most stunning properties — fractional ownership that's accessible, transparent, and built to last." },
                { q: "Do I need to be a blockchain expert to invest?", a: "No. Our team handles all technical aspects. You simply complete KYC, get whitelisted, and receive Pebbles. The dashboard shows everything in simple terms." },
                { q: "What if I lose access to my wallet?", a: "Multi-signature recovery options are built into the smart contracts, with legal fallbacks." },
                { q: "Can I see my rental income in pesos?", a: "Yes. The dashboard converts all Pebble activity to PHP (or your preferred currency)." },
                { q: "How are taxes handled on distributions?", a: "You receive detailed reports of all distributions; you're responsible for your own tax compliance." },
                { q: "Are Pebbles considered securities?", a: "Yes, Pebbles are structured as security tokens compliant with Philippine regulations." },
                { q: "What's the minimum investment?", a: "Varies by tier, starting at approximately ₱500,000 for Kickstarter tier." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`tech-faq-${i}`} className="border-0 border-b border-border">
                  <AccordionTrigger className="font-body text-base text-foreground hover:text-primary py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="font-body text-base text-muted-foreground pb-5 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 10: NEXT STEPS ── */}
      <section id="next-steps" className="section-padding bg-background">
        <div ref={stepsRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-12">Next Steps</h2>

          <div className="space-y-8 max-w-lg mb-16">
            {[
              "Review Amuha Long Beach (2,000 sqm, 9 keys)",
              "Complete preliminary interest form",
              "Schedule consultation with James San Vicente or team",
              "Complete KYC verification",
              "Get whitelisted for Phase 1a (2026) Pebble offering",
              "Participate in Pebble generation event",
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-baseline">
                <span className="font-display text-4xl font-normal text-primary leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-body text-base text-foreground/70 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <a
            href="#join"
            className="inline-flex items-center font-body text-sm border border-primary text-primary rounded-full px-8 py-3 hover:bg-primary/5 transition-colors"
          >
            Apply Now
          </a>

          <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-xl mt-12">
            This information is for qualified investors only. Pebbles represent fractional ownership in specific properties and involve risk, including possible loss of principal. Blockchain technology involves technical risks. Consult with advisors before investing.
          </p>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;
