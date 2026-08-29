import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorLabel = "" | "VIEW" | "PLAY" | "OPEN";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<CursorLabel>("");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.35 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      const next = (el?.getAttribute("data-cursor") ?? "") as CursorLabel;
      setLabel(next);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-foreground/70 bg-foreground/5 backdrop-blur-[2px]"
        animate={{
          width: label ? 84 : 14,
          height: label ? 84 : 14,
          x: label ? -42 : -7,
          y: label ? -42 : -7,
          opacity: visible ? 1 : 0,
          backgroundColor: label ? "rgba(245,245,245,0.1)" : "rgba(245,245,245,0.05)",
        }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        {label ? (
          <span className="text-[10px] font-medium tracking-[0.24em] text-foreground">{label}</span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
