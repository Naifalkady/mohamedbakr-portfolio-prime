import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohamed Bakr, Director of Photography" },
      {
        name: "description",
        content:
          "Enquire about commercial productions, films, television and creative collaborations with cinematographer Mohamed Bakr.",
      },
      { property: "og:title", content: "Contact — Mohamed Bakr, Director of Photography" },
      {
        property: "og:description",
        content: "For commercial productions, films, television and creative collaborations.",
      },
    ],
  }),
  component: ContactPage,
});

const projectTypes = [
  "COMMERCIAL",
  "FILM",
  "TV SERIES",
  "DOCUMENTARY",
  "MUSIC VIDEO",
  "OTHER",
];

const fieldClass =
  "w-full border-b border-input bg-transparent py-4 text-base tracking-wide text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-foreground";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]!);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pb-24 pt-32 md:pt-44">
      <div className="container-cine">
        <Reveal>
          <p className="label-cine">CONTACT</p>
          <h1 className="display-cine mt-5 text-[12vw] leading-[0.86] md:text-[6.5vw]">
            LET&rsquo;S WORK
            <br />
            TOGETHER
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            For commercial productions, films, television and creative collaborations.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-14 border-t border-border pt-10 md:mt-24 md:grid-cols-12 md:gap-12">
          <div className="space-y-10 md:col-span-4">
            <Reveal>
              <p className="label-cine">EMAIL</p>
              <a href={`mailto:${site.email}`} className="link-underline mt-2 inline-block text-base">
                {site.email}
              </a>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="label-cine">PHONE</p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="link-underline mt-2 inline-block text-base"
              >
                {site.phone}
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="label-cine">INSTAGRAM</p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
                className="link-underline mt-2 inline-block text-base"
              >
                @mohamedbakr.dop
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="label-cine">VIMEO</p>
              <a
                href={site.vimeo}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
                className="link-underline mt-2 inline-block text-base"
              >
                vimeo.com/mohamedbakr
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="label-cine">BASED</p>
              <p className="mt-2 text-base">{site.based}</p>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:pl-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[420px] flex-col justify-center border border-border bg-surface px-8 py-16 film-grain md:px-14"
                >
                  <p className="label-cine">INQUIRY RECEIVED</p>
                  <p className="display-cine mt-6 text-3xl leading-[1.05] md:text-5xl">
                    THANK YOU{name ? `, ${name.split(" ")[0]}` : ""} —
                    <br />
                    YOUR INQUIRY HAS
                    <br />
                    BEEN RECEIVED.
                  </p>
                  <p className="mt-6 max-w-md text-sm text-muted-foreground">
                    A reply usually follows within two working days. For urgent production dates,
                    call directly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-10 w-fit border border-border-strong px-8 py-3 text-[11px] tracking-[0.24em] transition-colors duration-500 hover:bg-foreground hover:text-background"
                  >
                    SEND ANOTHER
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="label-cine">
                        NAME
                      </label>
                      <input
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label-cine">
                        EMAIL
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@studio.com"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="label-cine">
                        COMPANY
                      </label>
                      <input id="company" placeholder="Production company" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="type" className="label-cine">
                        PROJECT TYPE
                      </label>
                      <select id="type" defaultValue={projectTypes[0]} className={fieldClass}>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-background">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="label-cine">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell me about the project, dates and format."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full border border-border-strong px-10 py-5 text-[11px] font-medium tracking-[0.28em] transition-colors duration-500 hover:bg-foreground hover:text-background md:w-auto"
                  >
                    SEND INQUIRY
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
