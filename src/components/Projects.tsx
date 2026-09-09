import { useReveal } from "../hooks/useReveal";
import reservaHubShot from "../assets/reserva-hub.png";

const DEMO_URL = "https://brunotaveiradasilva.github.io/reserva-hub/";
const REPO_URL = "https://github.com/brunotaveiradasilva/reserva-hub";

export function Projects() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="section section--dark" id="projetos">
      <div className="container">
        <div ref={ref} className={`project ${className}`}>
          <div className="project__info">
            <p className="eyebrow">Projeto em destaque</p>
            <h2 className="project__title">Reserva Hub</h2>
            <p className="project__subtitle">Almoxarifado em Agenda</p>
            <p className="project__desc">
              Sistema de agendamento de materiais: cadastro de itens, retiradas
              e devoluções, com responsável e cliente por reserva e controle de
              atrasos. A API valida a disponibilidade por período — não deixa
              reservar mais unidades do que existem em estoque para datas que se
              sobrepõem.
            </p>
            <div className="project__tags">
              {[
                "React",
                "TypeScript",
                "Vite",
                ".NET 8",
                "Minimal APIs",
                "EF Core",
                "SQLite",
              ].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project__actions">
              <a
                className="btn"
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
              >
                Ver demo
              </a>
              <a
                className="btn btn--ghost"
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
              >
                Código ›
              </a>
            </div>
          </div>

          <a
            className="browser"
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir o Reserva Hub em uma nova aba"
          >
            <div className="browser__bar">
              <span className="browser__dot" />
              <span className="browser__dot" />
              <span className="browser__dot" />
              <span className="browser__url">{DEMO_URL}</span>
            </div>
            <img
              className="browser__shot"
              src={reservaHubShot}
              alt="Tela do Reserva Hub: painel de agendamentos com contadores de retiradas, devoluções e atrasos"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
