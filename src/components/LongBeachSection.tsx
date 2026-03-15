import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LongBeachSection = () => {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const sharesRef = useScrollReveal();

  return (
    <section id="longbeach" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-2">
            San Vicente Retreat
          </h2>
          <p className="font-body text-base text-muted-foreground">
            San Vicente, Palawan
          </p>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg mb-16">
          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">Accommodation Units</p>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
            <p>— 4 Suites</p>
            <p>— 2 Villas</p>
          </div>
        </div>

        <div className="divider mb-16" />

        <div ref={sharesRef} className="scroll-reveal max-w-lg">
          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">Share Allocation</p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Category</TableHead>
                  <TableHead className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Shares</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border hover:bg-transparent">
                  <TableCell className="font-body text-sm text-foreground font-medium">AMUMA Holding</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">1,600</TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-transparent">
                  <TableCell className="font-body text-sm text-foreground font-medium">Members</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">2,800</TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-transparent">
                  <TableCell className="font-body text-sm text-foreground font-medium">Total</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">4,400</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-6">
            Members purchase shares which help unlock the construction of the retreat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LongBeachSection;
