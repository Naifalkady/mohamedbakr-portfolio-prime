import { motion } from "motion/react";

function GalleryImage({
  src,
  alt,
  className,
  ratio,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`overflow-hidden bg-surface ${ratio} ${className ?? ""}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-95 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
      />
    </motion.figure>
  );
}

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [a, b, c, d, e] = images;
  return (
    <div className="space-y-6 md:space-y-8">
      {a ? <GalleryImage src={a} alt={`${title} still 1`} ratio="aspect-[16/9]" /> : null}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {b ? <GalleryImage src={b} alt={`${title} still 2`} ratio="aspect-[4/5]" /> : null}
        {c ? (
          <GalleryImage
            src={c}
            alt={`${title} still 3`}
            ratio="aspect-[4/5]"
            className="md:mt-16"
          />
        ) : null}
      </div>
      {d ? <GalleryImage src={d} alt={`${title} still 4`} ratio="aspect-[21/9]" /> : null}
      {e ? (
        <div className="md:w-2/3">
          <GalleryImage src={e} alt={`${title} still 5`} ratio="aspect-[3/2]" />
        </div>
      ) : null}
    </div>
  );
}
