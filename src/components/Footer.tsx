import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-cine py-16 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-cine">AVAILABLE FOR COMMISSIONS</p>
            <Link to="/contact" data-cursor="VIEW" className="group mt-4 block">
              <span className="display-cine text-[10vw] leading-[0.9] transition-opacity duration-500 group-hover:opacity-60 md:text-[5.5vw]">
                LET&rsquo;S WORK
                <br />
                TOGETHER
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={`mailto:${site.email}`} className="link-underline text-sm tracking-wide">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline text-sm tracking-wide">
              {site.phone}
            </a>
            <div className="mt-4 flex gap-6">
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
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="label-cine">
            {site.name} — {site.title}
          </p>
          <p className="label-cine">{site.based}</p>
          <p className="label-cine">© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
