import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionTitle({
  index,
  title,
  action,
}: {
  index?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-end justify-between gap-6 border-t border-border pt-5"
    >
      <div className="flex items-baseline gap-4 md:gap-6">
        {index ? <span className="label-cine">{index}</span> : null}
        <h2 className="display-cine text-2xl md:text-4xl">{title}</h2>
      </div>
      {action}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
