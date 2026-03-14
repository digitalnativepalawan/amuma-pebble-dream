const HeroSection = () => {
  const scrollToJoin = () => {
    const el = document.querySelector("#join");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/50" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 container text-center px-6 py-20">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6 max-w-3xl mx-auto">
          AMUMA Collection.{" "}
          <span className="block mt-2">Barefoot Boutique Resorts in Hidden Gems.</span>
        </h1>
        <p className="font-body text-lg sm:text-xl text-primary-foreground/80 mb-10 tracking-wide italic">
          Dream high, fly low.
        </p>
        <button
          onClick={scrollToJoin}
          className="bg-primary text-primary-foreground font-body font-semibold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
        >
          Become a Founding Pebble Holder
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
