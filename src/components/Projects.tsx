import type { CSSProperties } from "react";
import { useReveal } from "../hooks/useReveal";
import sulbiologicHubShot from "../assets/sulbiologic-hub.png";
import prummoShot from "../assets/prummo-engenharia.jpg";
import sauverIcon from "../assets/sauver-icon.png";
import seafarerIcon from "../assets/seafarer-icon.png";

type Project = {
  name: string;
  role: string;
  thumb: string;
  desc: string;
  linkLabel: string;
  linkUrl: string;
};

const PROJECTS: Project[] = [
  {
    name: "SulBiologic Hub",
    role: "Projeto pessoal",
    thumb: sulbiologicHubShot,
    desc: "Sistema de agendamento de materiais, com controle de estoque e atrasos por período.",
    linkLabel: "Ver demo",
    linkUrl: "https://brunotaveiradasilva.github.io/sulbiologic-hub/",
  },
  {
    name: "Prummo Engenharia",
    role: "Site institucional",
    thumb: prummoShot,
    desc: "Site de uma empresa de projetos hidrossanitários e elétricos, com portfólio de obras e serviços.",
    linkLabel: "Ver site",
    linkUrl: "https://brunotaveiradasilva.github.io/prummo-engenharia/",
  },
  {
    name: "Sauver",
    role: "Participação no desenvolvimento",
    thumb: sauverIcon,
    desc: "App de telemedicina: consultas, exames, laudos e receitas em um só lugar.",
    linkLabel: "Ver na Play Store",
    linkUrl:
      "https://play.google.com/store/apps/details?id=br.com.justworks.sauver",
  },
  {
    name: "Seafarer",
    role: "Participação no desenvolvimento",
    thumb: seafarerIcon,
    desc: "App para marítimos e profissionais offshore, com documentos e alertas de vencimento.",
    linkLabel: "Ver na Play Store",
    linkUrl: "https://play.google.com/store/apps/details?id=br.com.maritimo",
  },
];

export function Projects() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="projetos">
      <div className="container">
        <div ref={head.ref} className={`projects__head ${head.className}`}>
          <p className="eyebrow">Projetos</p>
          <h2 className="section-title">Onde já coloquei a mão.</h2>
        </div>

        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, className } = useReveal<HTMLAnchorElement>("zoom");

  return (
    <a
      ref={ref}
      className={`project-card ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      href={project.linkUrl}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="project-card__thumb"
        src={project.thumb}
        alt=""
        loading="lazy"
      />
      <div className="project-card__body">
        <p className="project-card__role">{project.role}</p>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <span className="link-arrow">{project.linkLabel}</span>
      </div>
    </a>
  );
}
