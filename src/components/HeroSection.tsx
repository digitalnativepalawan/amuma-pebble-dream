const HeroSection = () => {
  const scrollToJoin = () => {
    const el = document.querySelector("#join");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/40" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-foreground/40" />

      <div className="relative z-10 container text-center px-6 py-20">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8 max-w-4xl mx-auto tracking-tight">
          AMUMA Collection.{" "}
          <span className="block mt-3">Barefoot Boutique Resorts in Hidden Gems.</span>
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-secondary mb-12 tracking-wider italic font-light">
          Dream high, fly low.
        </p>
        <button
          onClick={scrollToJoin}
          className="btn-primary text-sm sm:text-base px-10 py-4 shadow-lg shadow-primary/20"
        >
          Become a Founding Pebble Holder
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
