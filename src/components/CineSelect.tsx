import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function CineSelect({
  id,
  label,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <span id={`${id}-label`} className="label-cine">
        {label}
      </span>
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between border-b border-input py-4 text-left text-base tracking-wide text-foreground transition-colors duration-300 hover:border-border-strong focus:border-foreground focus:outline-none"
      >
        <span>{value}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="label-cine text-foreground/70"
        >
          &darr;
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            aria-labelledby={`${id}-label`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full z-30 mt-2 border border-border bg-surface/95 backdrop-blur-md"
          >
            {options.map((o) => {
              const selected = o === value;
              return (
                <li key={o} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(o);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-5 py-4 text-left text-[11px] tracking-[0.22em] transition-colors duration-300 hover:bg-foreground hover:text-background ${
                      selected ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {o}
                    {selected ? <span className="text-[9px]">SELECTED</span> : null}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
