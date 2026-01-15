import { ArrowUpRight, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  notes: string;
  github: string;
}

export const ProjectCard = ({
  index,
  project,
}: {
  index: number;
  project: ProjectProps;
}) => {
  return (
    <div
      className="group glass rounded-2xl overflow-hidden animation-fade-in md:row-span-1"
      key={index}
      style={{
        animationDelay: `${(index + 1) * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[0.8px]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.link !== "" && (
            <a
              href={project.link}
              target="_blank"
              className="p-3 rounded-full bg-secondary/50 border border-primary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
          {project.github !== "" && (
            <a
              href={project.github}
              target="_blank"
              className="p-3 rounded-full bg-secondary/50 border border-primary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-200 rotate-90 group-hover:rotate-0" />
          </div>
          <h6 className="italic text-sm text-primary">{project.notes}</h6>
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
