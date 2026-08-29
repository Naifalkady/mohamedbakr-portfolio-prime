import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

const ratioClass: Record<string, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  square: "aspect-[4/5]",
  cinema: "aspect-[21/9]",
};

export function ProjectCard({
  project,
  shape = "tall",
  priority = false,
  index = 0,
}: {
  project: Project;
  shape?: keyof typeof ratioClass;
  priority?: boolean;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: Math.min(index, 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link
        to="/work/$projectId"
        params={{ projectId: project.id }}
        data-cursor="VIEW"
        className="block"
      >
        <div className={`relative overflow-hidden bg-surface ${ratioClass[shape]}`}>
          <img
            src={project.thumbnail}
            alt={`${project.title} — ${project.category}, ${project.year}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover opacity-90 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.045] group-hover:opacity-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-background/25 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 scrim-bottom opacity-70" />
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between md:bottom-6 md:left-6 md:right-6">
            <h3 className="display-cine text-lg text-foreground md:text-2xl">{project.title}</h3>
            <span className="translate-y-2 text-[10px] font-medium tracking-[0.24em] text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              VIEW PROJECT
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="label-cine transition-colors group-hover:text-foreground">
            {project.category}
          </span>
          <span className="label-cine">{project.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}
