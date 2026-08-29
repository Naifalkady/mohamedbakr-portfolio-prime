import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal, SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";
import { featuredProjects } from "@/data/projects";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mohamed Bakr, Director of Photography" },
      {
        name: "description",
        content:
          "Mohamed Bakr is a Director of Photography working across commercials, films and television, building images around light, texture and restraint.",
      },
      { property: "og:title", content: "About — Mohamed Bakr, Director of Photography" },
      {
        name: "og:description",
        content: "Cinematographer and visual storyteller working across commercials, films and TV.",
      },
    ],
  }),
  component: AboutPage,
});

const portrait = "https://picsum.photos/seed/cine-portrait/1600/2000?grayscale";

function AboutPage() {
  return (
    <div className="pb-24 pt-32 md:pt-44">
      <div className="container-cine">
        <Reveal>
          <p className="label-cine">ABOUT</p>
          <h1 className="display-cine mt-5 text-[13vw] leading-[0.86] md:text-[7vw]">
            {site.name}
          </h1>
          <p className="label-cine mt-4">{site.title} — {site.descriptor}</p>
        </Reveal>
      </div>

      <div className="container-cine mt-14 md:mt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-surface aspect-[4/5] md:col-span-7"
          >
            <img
              src={portrait}
              alt="Portrait of Mohamed Bakr on set"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-90"
            />
          </motion.div>
          <div className="md:col-span-5 md:pt-10">
            <Reveal>
              <p className="text-xl leading-relaxed md:text-2xl md:leading-[1.5]">{site.bio}</p>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                {site.bioSecondary}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <p className="label-cine">DISCIPLINES</p>
              <ul className="mt-4 space-y-2">
                {site.services.map((s) => (
                  <li
                    key={s}
                    className="border-b border-border py-2 text-[11px] tracking-[0.2em] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container-cine mt-24 md:mt-36">
        <SectionTitle index="01" title="IN NUMBERS" />
        <div className="mt-10 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label}>
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <p className="label-cine mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-cine mt-24 md:mt-36">
        <SectionTitle
          index="02"
          title="SELECTED WORK"
          action={
            <Link to="/work" className="label-cine link-underline hover:text-foreground">
              ALL PROJECTS
            </Link>
          }
        />
        <div className="mt-6">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <Link
                to="/work/$projectId"
                params={{ projectId: p.id }}
                data-cursor="VIEW"
                className="group grid grid-cols-12 items-center gap-4 border-b border-border py-6 md:py-8"
              >
                <span className="label-cine col-span-2 md:col-span-1">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="display-cine col-span-10 text-2xl transition-opacity duration-500 group-hover:opacity-60 md:col-span-5 md:text-4xl">
                  {p.title}
                </span>
                <span className="label-cine col-span-6 col-start-3 md:col-span-3 md:col-start-auto">
                  {p.category}
                </span>
                <span className="label-cine col-span-3 md:col-span-2">{p.year}</span>
                <span className="label-cine col-span-3 text-right opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:col-span-1">
                  VIEW
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
