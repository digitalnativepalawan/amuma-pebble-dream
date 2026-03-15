import { useScrollReveal } from "@/hooks/useScrollReveal";
import EditableField from "@/components/EditableField";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AdminMediaBlock from "@/components/AdminMediaBlock";
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
            <EditableField section="longbeach" field="title" fallback="The Retreat" />
          </h2>
          <p className="font-body text-base text-muted-foreground">
            San Vicente, Palawan
          </p>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg mb-16">
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-8">
            <EditableField
              section="longbeach"
              field="body"
              fallback="The San Vicente retreat is intentionally small. This scale ensures space, quiet, and genuine connection with nature."
              multiline
            />
          </p>

          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">Accommodation Units</p>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
            <p>— 4 Suites</p>
            <p>— 2 Villas</p>
          </div>
        </div>

        <ImagePlaceholder
          section="longbeach"
          imageKey="image_1"
          className="max-w-lg mb-16"
          label="Retreat"
        />

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
                  <TableCell className="font-body text-sm text-foreground font-medium">Suite (×4)</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">600 each → 2,400</TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-transparent">
                  <TableCell className="font-body text-sm text-foreground font-medium">Villa (×2)</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">1,000 each → 2,000</TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-transparent">
                  <TableCell className="font-body text-sm text-foreground font-medium">Total</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">4,400</TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-transparent">
                  <TableCell className="font-body text-sm text-foreground font-medium">AMUMA Holding</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">1,600</TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-transparent">
                  <TableCell className="font-body text-sm text-foreground font-medium">Members</TableCell>
                  <TableCell className="font-body text-sm text-foreground/70">2,800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <AdminMediaBlock section="longbeach" slotKey="after_body" className="mt-8 max-w-lg" />
      </div>
    </section>
  );
};

export default LongBeachSection;
