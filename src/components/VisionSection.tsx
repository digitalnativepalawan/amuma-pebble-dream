import { useScrollReveal } from "@/hooks/useScrollReveal";
import EditableField from "@/components/EditableField";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const VisionSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="vision" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={revealRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            <EditableField section="vision" field="title" fallback="The AMUMA Circle" />
          </h2>
        </div>

        <div className="max-w-lg space-y-6">
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="vision"
              field="body"
              fallback="AMUMA is not simply a collection of hotels. It is a circle of travelers who share a way of exploring the world. Members return to the retreats not only as guests but as part of a living community. They discover new places together, host friends and family, and move across destinations connected by the same spirit of hospitality."
              multiline
            />
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="vision"
              field="closing"
              fallback="Each retreat becomes both a sanctuary in nature and a meeting point for the community."
              multiline
            />
          </p>
        </div>

        <ImagePlaceholder
          section="vision"
          imageKey="image_1"
          className="mt-12 max-w-lg"
          label="Circle"
        />

        <AdminMediaBlock section="vision" slotKey="after_body" className="mt-8 max-w-lg" />
      </div>
    </section>
  );
};

export default VisionSection;
