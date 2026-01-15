import { projects } from "../static/static";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden cursor-default"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-right md:text-center lg:text-right mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Highlighted Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            Delivering solutions for{" "}
            <span className="font-serif italic font-normal text-white">
              real-world impact.
            </span>
          </h2>
          <p className="text-muted-foreground animation-fade-in animation-delay-200">
            A showcase of my recent projects, built with an emphasis on
            scalability, maintainability, and real-world application
            requirements.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
