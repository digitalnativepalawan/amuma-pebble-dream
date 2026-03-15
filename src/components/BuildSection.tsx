import { useScrollReveal } from "@/hooks/useScrollReveal";
import EditableField from "@/components/EditableField";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const BuildSection = () => {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="build" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            <EditableField section="build" field="title" fallback="First Chapter: Palawan" />
          </h2>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg space-y-6">
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="build"
              field="body"
              fallback="The journey begins in Palawan, one of the most extraordinary natural environments in the world. The first retreat will rise along the pristine coastline of San Vicente – Long Beach. The second retreat will follow in Balabac, where AMUMA already owns beachfront land."
              multiline
            />
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="build"
              field="closing"
              fallback="Palawan will establish the foundation of the AMUMA ecosystem."
            />
          </p>
        </div>

        <ImagePlaceholder
          section="build"
          imageKey="image_1"
          className="mt-12 max-w-lg"
          label="Palawan"
        />
      </div>
    </section>
  );
};

export default BuildSection;
