import { useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#educacao", label: "Educação" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          Bruno Taveira
        </a>
        <ul className={`nav__links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
