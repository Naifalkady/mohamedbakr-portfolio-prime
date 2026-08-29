import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/**
 * Art-directed editorial grid. Repeats a 6-slot rhythm so no two rows
 * look identical: large + pair, full-width, two-column.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 5) rows.push(projects.slice(i, i + 5));

  let counter = 0;
  return (
    <div className="space-y-12 md:space-y-20">
      {rows.map((row, r) => {
        const [a, b, c, d, e] = row;
        const flip = r % 2 === 1;
        return (
          <div key={r} className="space-y-12 md:space-y-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
              {a ? (
                <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                  <ProjectCard project={a} shape="wide" index={counter++} priority={r === 0} />
                </div>
              ) : null}
              {b ? (
                <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                  <ProjectCard project={b} shape="tall" index={counter++} priority={r === 0} />
                </div>
              ) : null}
            </div>

            {c ? (
              <div>
                <ProjectCard project={c} shape="cinema" index={counter++} />
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {d ? <ProjectCard project={d} shape="square" index={counter++} /> : null}
              {e ? (
                <div className="md:pt-16">
                  <ProjectCard project={e} shape="square" index={counter++} />
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
