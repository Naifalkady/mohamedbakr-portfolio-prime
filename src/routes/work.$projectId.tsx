import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { Reveal, SectionTitle } from "@/components/SectionTitle";
import { getAdjacent, getProject } from "@/data/projects";

export const Route = createFileRoute("/work/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — Mohamed Bakr" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${project.category}, ${project.year} | Mohamed Bakr`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description.slice(0, 155) },
        { property: "og:image", content: project.heroImage },
        { name: "twitter:image", content: project.heroImage },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="container-cine flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="display-cine text-4xl">PROJECT NOT FOUND</h1>
      <Link to="/work" className="label-cine mt-6 hover:text-foreground">
        BACK TO WORK
      </Link>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const { prev, next } = getAdjacent(project.id);

  return (
    <div className="pb-24">
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden md:h-[92vh]">
        <motion.img
          src={project.heroImage}
          alt={`${project.title} — hero still`}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.75 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 scrim-bottom" />
        <div className="container-cine absolute inset-x-0 bottom-10 md:bottom-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="label-cine text-foreground/70"
          >
            {project.category} / {project.year}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="display-cine mt-4 text-[13vw] leading-[0.86] md:text-[7.5vw]"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      <div className="container-cine mt-16 md:mt-28">
        <SectionTitle index="01" title="PROJECT DETAILS" />
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-5 md:gap-8">
          {project.credits.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <p className="label-cine">{c.label}</p>
              <p className="mt-2 text-sm tracking-wide text-foreground md:text-base">{c.value}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-cine mt-20 md:mt-32">
        <SectionTitle index="02" title="DESCRIPTION" />
        <Reveal className="mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-2xl md:leading-[1.55]">
            {project.description}
          </p>
        </Reveal>
      </div>

      <div className="container-cine mt-20 md:mt-32">
        <SectionTitle index="03" title="FILM" />
        <div className="mt-8">
          <VideoPlaceholder
            poster={project.gallery[0] ?? project.heroImage}
            title={project.title}
            videoUrl={project.videoUrl || undefined}
          />
        </div>
      </div>

      <div className="container-cine mt-20 md:mt-32">
        <SectionTitle index="04" title="GALLERY" />
        <div className="mt-8">
          <ProjectGallery images={project.gallery} title={project.title} />
        </div>
      </div>

      <div className="container-cine mt-24 md:mt-36">
        <div className="grid grid-cols-1 gap-px border-t border-border md:grid-cols-2">
          {prev ? (
            <Link
              to="/work/$projectId"
              params={{ projectId: prev.id }}
              data-cursor="VIEW"
              className="group py-10 md:py-16"
            >
              <p className="label-cine">PREVIOUS PROJECT</p>
              <p className="display-cine mt-3 text-3xl transition-opacity duration-500 group-hover:opacity-60 md:text-5xl">
                {prev.title}
              </p>
            </Link>
          ) : null}
          {next ? (
            <Link
              to="/work/$projectId"
              params={{ projectId: next.id }}
              data-cursor="VIEW"
              className="group border-t border-border py-10 md:border-l md:border-t-0 md:py-16 md:pl-10 md:text-right"
            >
              <p className="label-cine">NEXT PROJECT</p>
              <p className="display-cine mt-3 text-3xl transition-opacity duration-500 group-hover:opacity-60 md:text-5xl">
                {next.title}
              </p>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
