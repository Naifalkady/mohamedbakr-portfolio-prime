import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function VideoPlaceholder({
  poster,
  title,
  videoUrl,
}: {
  poster: string;
  title: string;
  videoUrl?: string | undefined;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="PLAY"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="group relative block w-full overflow-hidden bg-surface aspect-[21/9]"
      >
        <img
          src={poster}
          alt={`${title} — film still`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-55 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:opacity-70"
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/60 text-[10px] font-medium tracking-[0.24em] transition-all duration-500 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background md:h-20 md:w-20">
            PLAY
          </span>
          <span className="label-cine text-foreground/80">PROJECT FILM</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 p-5 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 label-cine hover:text-foreground md:right-10 md:top-10"
            >
              CLOSE
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {videoUrl ? (
                <div className="aspect-video w-full bg-surface">
                  <iframe
                    src={videoUrl}
                    title={`${title} film`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="h-full w-full"
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 border border-border bg-surface film-grain">
                  <p className="display-cine text-2xl md:text-4xl">{title}</p>
                  <p className="label-cine">FILM PLAYER — PROTOTYPE PLACEHOLDER</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
