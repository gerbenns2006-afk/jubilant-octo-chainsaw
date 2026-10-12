type SitePage =
  | "prototype"
  | "research"
  | "modeling"
  | "about"
  | "neuro"
  | "cellwork"
  | "work";

const links = [
  { label: "Survivorship", href: "/#research-note", section: "research" },
  { label: "Prototype", href: "/#prototype", section: "prototype" },
  { label: "Neurodegeneration", href: "/neurodegeneration", section: "neuro" },
  { label: "Cell work", href: "/cell-work", section: "cellwork" },
  { label: "Other work", href: "/work", section: "work" },
  { label: "Methods", href: "/modeling", section: "modeling" },
  { label: "Founder", href: "/about", section: "about" },
] as const;

export default function SiteNav({ active }: { active: SitePage }) {
  return (
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="/#top" aria-label="ONQIVA home">
        <span aria-hidden="true">O</span> ONQIVA
      </a>
      <div className="navlinks">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={link.section === active ? "active-link" : undefined}
            aria-current={link.section === active ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a className="nav-cta" href="/#collaborate">
        Collaborate
      </a>
    </nav>
  );
}
