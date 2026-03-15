import EditableField from "@/components/EditableField";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const HeroSection = () => {
  const scrollToJoin = () => {
    const el = document.querySelector("#join");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <ImagePlaceholder
        section="hero"
        imageKey="background"
        className="absolute inset-0 z-0"
        aspectRatio="auto"
        label="Hero Background"
      />
      <div className="relative z-10 text-center px-6 py-20 max-w-2xl">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">AMUMA</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary uppercase tracking-wide leading-none mb-8">
          <EditableField section="hero" field="title" fallback="A New Way of Traveling" />
        </h1>

        <div className="text-left space-y-4 font-body text-base text-foreground/70 leading-relaxed mb-12">
          <p>
            <EditableField
              section="hero"
              field="body"
              fallback="Tourism is changing. Travelers are moving away from crowded destinations and standardized resorts. They are searching for something more rare. Not bigger places — but more meaningful ones. Hidden coastlines. Untouched islands. Villages where hospitality still feels personal. Places where beauty is not manufactured, but discovered."
              multiline
            />
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            <EditableField
              section="hero"
              field="closing"
              fallback="AMUMA was created to reveal these hidden treasures — a network of intimate retreats designed for explorers who seek beauty, silence, and discovery."
              multiline
            />
          </p>
        </div>

        <button
          onClick={scrollToJoin}
          className="font-body text-sm tracking-wide text-primary border border-primary rounded-full px-10 py-4 hover:bg-primary/5 transition-all duration-300"
        >
          Join the Founding Circle
        </button>

        <AdminMediaBlock section="hero" slotKey="after_content" className="mt-12" aspectRatio="16/9" maxItems={1} />
      </div>
    </section>
  );
};

export default HeroSection;
