import { AboutGrid } from "../components/AboutGrid";

export const Abouts = () => {
  return (
    <section className="pb-24 md:pb-32 relative overflow-hidden cursor-default pt-24 lg:pt-0">
      <div
        className="absolute top-0 sm:-top-10 md:-top-10 lg:-top-40 xl:-top-70"
        id="about"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center lg:text-left mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            Designing systems with{" "}
            <span className="font-serif italic font-normal text-white">
              clarity and purpose.
            </span>
          </h2>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <AboutGrid />
        </div>
      </div>
    </section>
  );
};
