import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal, SectionTitle } from "@/components/SectionTitle";
import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Bakr — Director of Photography" },
      {
        name: "description",
        content:
          "Mohamed Bakr, Director of Photography and visual storyteller. Selected cinematography across commercials, films and television.",
      },
      { property: "og:title", content: "Mohamed Bakr — Director of Photography" },
      {
        property: "og:description",
        content: "Cinematic visual storytelling across commercials, films and television.",
      },
    ],
  }),
  component: Home,
});

const heroImage = "https://picsum.photos/seed/cine-hero-frame/2400/1400";

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <motion.img
            src={heroImage}
            alt="Cinematic frame from a night exterior shoot"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 scrim-bottom" />
        <div className="absolute inset-0 film-grain" />

        <motion.div
          style={{ opacity: fade }}
          className="container-cine absolute inset-x-0 bottom-14 md:bottom-20"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="display-cine text-[15vw] leading-[0.84] md:text-[8.5vw]"
            >
              {site.name}
            </motion.h1>
          </div>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] tracking-[0.28em] text-foreground/80 md:text-sm"
              >
                {site.title}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-4 border border-border-strong px-8 py-4 text-[11px] font-medium tracking-[0.24em] transition-colors duration-500 hover:bg-foreground hover:text-background"
              >
                VIEW SELECTED WORK
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: fade }}
          className="absolute bottom-14 right-5 hidden md:block xl:right-16"
        >
          <p className="label-cine [writing-mode:vertical-rl]">SCROLL</p>
        </motion.div>
      </section>

      <section className="container-cine py-20 md:py-32">
        <Reveal>
          <p className="max-w-4xl text-2xl leading-[1.35] tracking-tight md:text-[2.6vw]">
            {site.descriptor.replace(" / ", " — ")}. Building images around light, texture and
            restraint for commercials, features and television.
          </p>
        </Reveal>
      </section>

      <section className="container-cine pb-20 md:pb-32">
        <SectionTitle
          index="01"
          title="SELECTED WORK"
          action={
            <Link to="/work" className="label-cine link-underline hover:text-foreground">
              ALL PROJECTS
            </Link>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          {featuredProjects.map((p, i) => {
            const span = [7, 5, 5, 7, 6, 6][i] ?? 6;
            const shape = [1, 2].includes(i) ? "tall" : "wide";
            const offset = i % 2 === 1 ? "md:pt-16" : "";
            return (
              <div key={p.id} className={`md:col-span-${span} ${offset}`}>
                <ProjectCard
                  project={p}
                  shape={shape as "tall" | "wide"}
                  index={i}
                  priority={i < 2}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-cine pb-24 md:pb-36">
        <SectionTitle index="02" title="APPROACH" />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{site.bio}</p>
            <Link to="/about" className="label-cine link-underline mt-8 inline-block hover:text-foreground">
              MORE ABOUT MOHAMED
            </Link>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-y-10">
              {site.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <p className="display-cine text-4xl md:text-6xl">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="label-cine mt-3">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
