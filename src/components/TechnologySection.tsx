import { useScrollReveal } from "@/hooks/useScrollReveal";
import EditableField from "@/components/EditableField";
import AdminMediaBlock from "@/components/AdminMediaBlock";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <>
    {/* Desktop table */}
    <div className="hidden sm:block">
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

    {/* Mobile stacked cards */}
    <div className="sm:hidden space-y-4">
      {rows.map((row, i) => (
        <div key={i} className="border border-border rounded-lg p-4 space-y-2">
          {row.map((cell, j) => (
            <div key={j} className="flex justify-between items-baseline">
              <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">{headers[j]}</span>
              <span className={`font-body text-sm ${j === 0 ? "text-foreground font-medium" : "text-foreground/70"}`}>{cell}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-wide mb-6">{children}</h3>
);

const TechnologySection = () => {
  const pebblesRef = useScrollReveal();
  const stakesRef = useScrollReveal();
  const tiersRef = useScrollReveal();
  const usageRef = useScrollReveal();
  const revenueRef = useScrollReveal();
  const returnsRef = useScrollReveal();
  const expansionRef = useScrollReveal();
  const flywheelRef = useScrollReveal();

  return (
    <>
      {/* ── SECTION 1: PEBBLES SYSTEM ── */}
      <section id="technology" className="section-padding bg-background">
        <div ref={pebblesRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            <EditableField section="pebbles" field="title" fallback="Pebbles" />
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">Annual experience credits.</p>

          <div className="max-w-lg space-y-6">
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              <EditableField
                section="pebbles"
                field="body"
                fallback="Pebbles are annual experience credits. They can be used for:"
              />
            </p>
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Accommodation</p>
              <p>— Dining</p>
              <p>— Excursions</p>
              <p>— Boat trips</p>
              <p>— Spa treatments</p>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Pebbles renew every year.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 2: MEMBERSHIP STAKES ── */}
      <section id="stakes" className="section-padding bg-background">
        <div ref={stakesRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            <EditableField section="stakes" field="title" fallback="Membership Stakes" />
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">Ownership and lifestyle.</p>

          <div className="max-w-lg space-y-6">
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              <EditableField
                section="stakes"
                field="body"
                fallback="Members participate in the creation of each retreat through Membership Stakes. Members therefore become both:"
                multiline
              />
            </p>
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Participants in the lifestyle</p>
              <p>— Partners in the economic success of the retreats</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 3: INVESTMENT TIERS ── */}
      <section id="tiers" className="section-padding bg-background">
        <div ref={tiersRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Investment Tiers
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">Choose your level of participation.</p>

          <ComparisonTable
            headers={["Tier", "Investment", "Shares", "Pebbles"]}
            rows={[
              ["Nova", "₱500,000", "50", "1,000"],
              ["Aurora", "₱1,200,000", "120", "2,200"],
              ["Orion", "₱2,000,000", "210", "4,000"],
              ["Polaris", "₱4,000,000", "440", "8,000"],
            ]}
          />

          <p className="font-body text-sm text-muted-foreground mt-8 max-w-lg">
            The first 20 Nova investors become the Founding Circle.
          </p>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 4: ACCOMMODATION USAGE ── */}
      <section id="accommodation" className="section-padding bg-background">
        <div ref={usageRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Accommodation Usage
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">Pebbles per night.</p>

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
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 5: REVENUE MODEL ── */}
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

      {/* ── SECTION 6: PROJECTED RETURNS ── */}
      <section id="returns" className="section-padding bg-background">
        <div ref={returnsRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Projected Returns
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">Conservative assumptions.</p>

          <div className="max-w-lg space-y-6">
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Occupancy: 55%</p>
              <p>— Positioning: Boutique luxury</p>
              <p>— Tourism tax: TIEZA 5%</p>
            </div>

            <div className="mt-8">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Projected Annual ROI</p>
              <p className="font-display text-4xl sm:text-5xl font-normal text-primary leading-none">
                17–20%
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 7: FUTURE DESTINATIONS ── */}
      <section id="expansion" className="section-padding bg-background">
        <div ref={expansionRef} className="scroll-reveal container px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Future Destinations
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12">A growing constellation of retreats.</p>

          <div className="max-w-lg">
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
          </div>
        </div>
      </section>

      <div className="container px-6"><div className="divider" /></div>

      {/* ── SECTION 8: FLYWHEEL ── */}
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

          <AdminMediaBlock section="technology" slotKey="after_body" className="mt-8 max-w-lg" />
        </div>
      </section>
    </>
  );
};

export default TechnologySection;
