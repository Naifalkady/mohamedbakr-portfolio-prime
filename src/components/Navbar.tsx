import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/data/site";

const links = [
  { to: "/work", label: "WORK" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "border-b border-border bg-background/80 py-4 backdrop-blur-md"
            : "border-b border-transparent py-6 md:py-8"
        }`}
      >
        <nav className="container-cine flex items-center justify-between">
          <Link to="/" className="group">
            <span
              className={`display-cine block transition-all duration-500 ${
                scrolled ? "text-sm md:text-base" : "text-base md:text-xl"
              }`}
            >
              {site.name}
            </span>
            <span
              className={`label-cine mt-1 hidden transition-opacity duration-500 md:block ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              {site.title}
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="label-cine link-underline transition-colors duration-300 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <span className="h-3 w-px bg-border-strong" />
            <a
              href={site.vimeo}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              className="label-cine hover:text-foreground"
            >
              VIMEO
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              className="label-cine hover:text-foreground"
            >
              INSTAGRAM
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 flex-col items-end justify-center gap-[6px] md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 3.5, width: 22 } : { rotate: 0, y: 0, width: 22 }}
              className="block h-px bg-foreground"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3.5, width: 22 } : { rotate: 0, y: 0, width: 14 }}
              className="block h-px bg-foreground"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>{open ? <MobileMenu onClose={() => setOpen(false)} /> : null}</AnimatePresence>
    </>
  );
}

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[79] flex flex-col justify-between bg-background px-5 pb-10 pt-28 md:hidden"
    >
      <div className="flex flex-col">
        {links.map((l, i) => (
          <motion.div
            key={l.to}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={l.to}
              onClick={onClose}
              className="display-cine block border-b border-border py-6 text-4xl"
            >
              {l.label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-8">
        <a href={site.vimeo} target="_blank" rel="noreferrer" className="label-cine">
          VIMEO
        </a>
        <a href={site.instagram} target="_blank" rel="noreferrer" className="label-cine">
          INSTAGRAM
        </a>
      </div>
    </motion.div>
  );
}
