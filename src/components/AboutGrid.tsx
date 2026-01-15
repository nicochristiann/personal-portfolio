import { aboutParagraphs } from "../static/static";

export const AboutGrid = () => {
  return (
    <>
      {aboutParagraphs.map((p, index) => (
        <div
          className="glass-strong p-6 md:p-8 rounded-2xl border border-primary/30 shadow-lg shadow-primary/25 animation-fade-in animation-delay-200"
          key={index}
        >
          <h3 className="mb-4 text-xl text-primary font-semibold">{p.title}</h3>
          <p className="text-sm md:text-[16px]">{p.paragraph}</p>
        </div>
      ))}
    </>
  );
};
