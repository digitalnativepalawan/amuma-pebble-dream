const HeroSection = () => {
  const scrollToJoin = () => {
    const el = document.querySelector("#join");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="relative z-10 text-center px-6 py-20">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary uppercase tracking-wide leading-none mb-6">
          AMUMA
        </h1>
        <p className="font-body text-lg sm:text-xl text-muted-foreground mb-3 tracking-wide">
          Boutique Retreats in Hidden Destinations
        </p>
        <p className="font-body text-base text-muted-foreground italic mb-12">
          Dream high, fly low.
        </p>
        <button
          onClick={scrollToJoin}
          className="font-body text-sm tracking-wide text-primary border border-primary rounded-full px-10 py-4 hover:bg-primary/5 transition-all duration-300"
        >
          Join the Founding Circle
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
