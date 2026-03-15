import { useScrollReveal } from "@/hooks/useScrollReveal";
import EditableField from "@/components/EditableField";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const ProofSection = () => {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="proof" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-2">
            <EditableField section="proof" field="title" fallback="Hidden Destinations" />
          </h2>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg space-y-6">
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="proof"
              field="body"
              fallback="AMUMA retreats are created only in places that still feel undiscovered. Not where tourism already dominates. But where nature, culture, and simplicity still define the landscape."
              multiline
            />
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="proof"
              field="closing"
              fallback="These are destinations where a small retreat can coexist with the environment while preserving the beauty that makes the place special."
              multiline
            />
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3 mt-12 max-w-lg">
          <ImagePlaceholder section="proof" imageKey="image_1" label="Destination" />
          <ImagePlaceholder section="proof" imageKey="image_2" label="Destination" />
          <ImagePlaceholder section="proof" imageKey="image_3" label="Landscape" />
          <ImagePlaceholder section="proof" imageKey="image_4" label="Landscape" />
        </div>

        <AdminMediaBlock section="proof" slotKey="gallery" className="mt-8 max-w-lg" aspectRatio="3/2" maxItems={8} />
      </div>
    </section>
  );
};

export default ProofSection;
