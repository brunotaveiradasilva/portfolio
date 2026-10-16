import { useEffect, useState, type CSSProperties } from "react";
import { Wordmark } from "./Logo";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#educacao", label: "Educação" },
  { href: "#contato", label: "Contato" },
  { href: "#curriculo", label: "Currículo" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const [dark, setDark] = useState(true);

  // Menu mobile aberto: trava a rolagem da página por trás.
  useEffect(() => {
    document.documentElement.classList.toggle("is-menu-open", open);
  }, [open]);

  // Fica escura enquanto estiver por cima de uma seção preta, como na Apple.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = 48;
      const sections = document.querySelectorAll<HTMLElement>(".hero, .section--dark");
      setDark(
        [...sections].some((s) => {
          const { top, bottom } = s.getBoundingClientRect();
          return top <= y && bottom > y;
        })
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <nav className={`nav ${dark ? "nav--dark" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav__inner">
        <a
          href="#top"
          className="nav__brand"
          aria-label="Bruno Taveira — início"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </a>
        <ul className="nav__links">
          {LINKS.map((link, i) => (
            <li key={link.href} style={{ "--i": i } as CSSProperties}>
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
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
