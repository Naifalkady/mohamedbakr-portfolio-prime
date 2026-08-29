import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/SectionTitle";
import { categories, filterProjects, type CategoryFilter } from "@/data/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Mohamed Bakr, Director of Photography" },
      {
        name: "description",
        content:
          "Selected cinematography by Mohamed Bakr: commercials, films and television series, filterable by category.",
      },
      { property: "og:title", content: "Work — Mohamed Bakr, Director of Photography" },
      {
        property: "og:description",
        content: "Commercials, films and television photographed by Mohamed Bakr.",
      },
    ],
  }),
  component: WorkPage,
});

const PAGE = 6;

function WorkPage() {
  const [filter, setFilter] = useState<CategoryFilter>("ALL");
  const [visible, setVisible] = useState(PAGE);

  const filtered = useMemo(() => filterProjects(filter), [filter]);
  const shown = filtered.slice(0, visible);

  return (
    <div className="pb-28 pt-32 md:pt-44">
      <div className="container-cine">
        <Reveal>
          <p className="label-cine">SELECTED PROJECTS — 2020 / 2026</p>
          <h1 className="display-cine mt-5 text-[16vw] leading-[0.85] md:text-[9vw]">WORK</h1>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border py-5 md:mt-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                setVisible(PAGE);
              }}
              className={`label-cine transition-colors duration-300 hover:text-foreground ${
                filter === c ? "text-foreground" : ""
              }`}
            >
              {c}
              <span className="ml-2 text-[9px] opacity-50">
                {filterProjects(c).length.toString().padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectGrid projects={shown} />
            </motion.div>
          </AnimatePresence>
        </div>

        {visible < filtered.length ? (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + PAGE)}
              className="group border border-border-strong px-10 py-4 text-[11px] font-medium tracking-[0.24em] transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              LOAD MORE
              <span className="ml-3 opacity-50">
                {filtered.length - visible} REMAINING
              </span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
