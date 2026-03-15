import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const TechnologySection = () => {
  const ownershipRef = useScrollReveal();
  const tiersRef = useScrollReveal();
  const pebbleUsageRef = useScrollReveal();
  const revenueRef = useScrollReveal();
  const returnsRef = useScrollReveal();
  const expansionRef = useScrollReveal();
  const flywheelRef = useScrollReveal();

  return (
    <>
      {/* ── SECTION 1: MEMBERSHIP SHARES ── */}
      <section id="technology" className="section-padding bg-background">
        <div ref={ownershipRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Membership Shares
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">How ownership works.</p>

          <div className="max-w-lg space-y-6">
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Ownership in each retreat is represented by Membership Shares.
            </p>
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              These shares allow members to:
            </p>
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Participate in the rental income of the retreat</p>
              <p>— Receive annual stay credits called Pebbles</p>
              <p>— Gain priority access to future AMUMA destinations</p>
            </div>
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Pebbles function as experience credits used for accommodation and curated experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 2: INVESTMENT TIERS ── */}
      <section id="tiers" className="section-padding bg-background">
        <div ref={tiersRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Investment Tiers
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">Choose your level of participation.</p>

          <ComparisonTable
            headers={["Tier", "Investment", "Shares", "Annual Pebbles"]}
            rows={[
              ["Nova", "₱500,000", "50", "1,000"],
              ["Aurora", "₱1,200,000", "120", "2,400"],
              ["Orion", "₱2,000,000", "210", "4,200"],
              ["Polaris", "₱4,000,000", "440", "8,800"],
            ]}
          />

          <p className="font-body text-sm text-muted-foreground mt-8 max-w-lg">
            The first 20 Nova investors form the Founding Circle and receive early access to future AMUMA retreats.
          </p>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 3: PEBBLE USAGE ── */}
      <section id="pebble-usage" className="section-padding bg-background">
        <div ref={pebbleUsageRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Pebble Usage
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">How to use your experience credits.</p>

          <div className="max-w-lg space-y-12">
            <div>
              <SubHeading>Suites</SubHeading>
              <ComparisonTable
                headers={["Season", "Pebbles per Night"]}
                rows={[
                  ["Low Season", "150"],
                  ["High Season", "250"],
                  ["Peak Season", "300"],
                ]}
              />
            </div>

            <div>
              <SubHeading>Villas</SubHeading>
              <ComparisonTable
                headers={["Season", "Pebbles per Night"]}
                rows={[
                  ["Low Season", "275"],
                  ["High Season", "420"],
                  ["Peak Season", "500"],
                ]}
              />
            </div>

            <p className="font-body text-sm text-muted-foreground">
              Pebbles renew annually and encourage members to return and continue their journey.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 4: REVENUE MODEL ── */}
      <section id="revenue" className="section-padding bg-background">
        <div ref={revenueRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Revenue Model
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">How income is distributed.</p>

          <div className="max-w-lg space-y-8">
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Accommodation revenue enters a shared rental pool.
            </p>

            <div>
              <SubHeading>Distribution</SubHeading>
              <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
                <p>— 60% → Membership Shareholders</p>
                <p>— 40% → AMUMA Operator</p>
              </div>
            </div>

            <div>
              <SubHeading>Additional Revenues (AMUMA)</SubHeading>
              <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
                <p>— Restaurant</p>
                <p>— Spa</p>
                <p>— Excursions</p>
                <p>— Curated experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 5: EXPECTED RETURNS ── */}
      <section id="returns" className="section-padding bg-background">
        <div ref={returnsRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Expected Returns
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">Conservative assumptions.</p>

          <div className="max-w-lg space-y-6">
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Occupancy: 55%</p>
              <p>— Positioning: Boutique luxury</p>
              <p>— Tourism tax: TIEZA 5%</p>
            </div>

            <div className="mt-8">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Projected Investor Return</p>
              <p className="font-display text-4xl sm:text-5xl font-normal text-primary leading-none">
                17% – 20%
              </p>
              <p className="font-body text-sm text-muted-foreground mt-3">
                Annual ROI depending on occupancy growth and operational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 6: EXPANSION VISION ── */}
      <section id="expansion" className="section-padding bg-background">
        <div ref={expansionRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Expansion
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">A growing constellation of retreats.</p>

          <div className="max-w-lg">
            <p className="font-body text-base text-foreground/70 leading-relaxed mb-10">
              AMUMA is designed as a growing constellation of retreats. Future destinations include:
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <SubHeading>Philippines</SubHeading>
                <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
                  <p>— Sagada</p>
                  <p>— Siquijor</p>
                  <p>— Sibuyan Island</p>
                  <p>— Bukidnon</p>
                  <p>— Batanes</p>
                </div>
              </div>
              <div>
                <SubHeading>Southeast Asia</SubHeading>
                <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
                  <p>— Laos</p>
                  <p>— Indonesia</p>
                  <p>— Timor</p>
                </div>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-10">
              Members joining early participate in the growth of the entire network.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 7: FLYWHEEL ── */}
      <section id="flywheel" className="section-padding bg-background">
        <div ref={flywheelRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-12">
            The AMUMA Flywheel
          </h2>

          <div className="max-w-lg">
            <div className="space-y-4 font-body text-base text-foreground/70 leading-relaxed">
              <p>Members join</p>
              <p className="text-muted-foreground">→</p>
              <p>Retreats are built</p>
              <p className="text-muted-foreground">→</p>
              <p>Experiences generate revenue</p>
              <p className="text-muted-foreground">→</p>
              <p>Returns fund expansion</p>
              <p className="text-muted-foreground">→</p>
              <p>New destinations appear</p>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-10">
              This cycle continuously expands the AMUMA ecosystem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;
