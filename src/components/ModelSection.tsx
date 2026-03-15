import { useScrollReveal } from "@/hooks/useScrollReveal";
import EditableField from "@/components/EditableField";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const ModelSection = () => {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="model" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            <EditableField section="model" field="title" fallback="The AMUMA Experience" />
          </h2>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg">
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-8">
            <EditableField
              section="model"
              field="body"
              fallback="Experiences include:"
            />
          </p>

          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed mb-8">
            <p>— Island exploration</p>
            <p>— Culinary journeys</p>
            <p>— Boat adventures</p>
            <p>— Wellness rituals</p>
          </div>

          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="model"
              field="closing"
              fallback="Every moment is designed to feel personal and unhurried."
            />
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-12 max-w-lg">
          <ImagePlaceholder section="model" imageKey="image_1" label="Experience" />
          <ImagePlaceholder section="model" imageKey="image_2" label="Experience" />
        </div>

        <AdminMediaBlock section="model" slotKey="after_experiences" className="mt-8 max-w-lg" aspectRatio="3/2" maxItems={4} />
      </div>
    </section>
  );
};

export default ModelSection;
