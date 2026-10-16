import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import sulbiologicHubShot from "../assets/sulbiologic-hub.png";
import prummoShot from "../assets/prummo-engenharia.jpg";
import sauverIcon from "../assets/sauver-icon.png";
import seafarerIcon from "../assets/seafarer-icon.png";

type Project = {
  name: string;
  role: string;
  /** "shot" = print da tela, ocupa o card; "icon" = ícone de app, centralizado. */
  kind: "shot" | "icon";
  image: string;
  desc: string;
  linkLabel: string;
  linkUrl: string;
};

const PROJECTS: Project[] = [
  {
    name: "SulBiologic Hub",
    role: "Projeto pessoal",
    kind: "shot",
    image: sulbiologicHubShot,
    desc: "Sistema de agendamento de materiais, com controle de estoque e atrasos por período.",
    linkLabel: "Ver demo",
    linkUrl: "https://brunotaveiradasilva.github.io/sulbiologic-hub/",
  },
  {
    name: "Prummo Engenharia",
    role: "Site institucional",
    kind: "shot",
    image: prummoShot,
    desc: "Site de uma empresa de projetos hidrossanitários e elétricos, com portfólio de obras e serviços.",
    linkLabel: "Ver site",
    linkUrl: "https://brunotaveiradasilva.github.io/prummo-engenharia/",
  },
  {
    name: "Sauver",
    role: "Participação no desenvolvimento",
    kind: "icon",
    image: sauverIcon,
    desc: "App de telemedicina: consultas, exames, laudos e receitas em um só lugar.",
    linkLabel: "Ver na Play Store",
    linkUrl:
      "https://play.google.com/store/apps/details?id=br.com.justworks.sauver",
  },
  {
    name: "Seafarer",
    role: "Participação no desenvolvimento",
    kind: "icon",
    image: seafarerIcon,
    desc: "App para marítimos e profissionais offshore, com documentos e alertas de vencimento.",
    linkLabel: "Ver na Play Store",
    linkUrl: "https://play.google.com/store/apps/details?id=br.com.maritimo",
  },
];

/** Galeria horizontal com snap, setas e paginação — o "Get the highlights". */
export function Projects() {
  const head = useReveal<HTMLDivElement>();
  const rail = useReveal<HTMLDivElement>("right");
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { root: track, threshold: 0.6 }
    );

    track.querySelectorAll("li").forEach((li) => observer.observe(li));
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const item = track?.children[index] as HTMLElement | undefined;
    if (!track || !item) return;
    track.scrollTo({
      left: item.offsetLeft - track.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft),
      behavior: "smooth",
    });
  };

  return (
    <section className="section section--dark projects" id="projetos">
      <div className="container">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <p className="eyebrow">Projetos</p>
          <h2 className="section-title">Onde já coloquei a mão.</h2>
        </div>
      </div>

      <div ref={rail.ref} className={rail.className}>
        <ul ref={trackRef} className="gallery">
          {PROJECTS.map((project, i) => (
            <li key={project.name} data-index={i}>
              <ProjectCard project={project} active={i === active} />
            </li>
          ))}
        </ul>
      </div>

      <div className="container gallery__controls">
        <div className="gallery__dots" role="tablist" aria-label="Projetos">
          {PROJECTS.map((project, i) => (
            <button
              key={project.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={project.name}
              className={i === active ? "is-active" : ""}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="gallery__arrows">
          <button
            type="button"
            aria-label="Projeto anterior"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 6 8.5 12l6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            disabled={active === PROJECTS.length - 1}
            onClick={() => goTo(active + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9.5 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  return (
    <a
      className={`project ${project.kind === "icon" ? "project--icon" : ""} ${
        active ? "is-active" : ""
      }`}
      href={project.linkUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project__media">
        <img src={project.image} alt="" loading="lazy" />
      </div>
      <div className="project__body">
        <p className="project__role">{project.role}</p>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__desc">{project.desc}</p>
        <span className="link-arrow">{project.linkLabel}</span>
      </div>
    </a>
  );
}
