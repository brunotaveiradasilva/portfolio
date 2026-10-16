import type { IconType } from "react-icons";
import {
  SiCss,
  SiDart,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiOpenjdk,
  SiReact,
  SiRubyonrails,
  SiSpringboot,
  SiVuedotjs,
} from "react-icons/si";
import type { CSSProperties } from "react";
import { useReveal } from "../hooks/useReveal";

type Skill = {
  icon: IconType;
  name: string;
  desc: string;
  stack: IconType[];
  tags: string[];
  /** Tile escuro no bento, pra dar ritmo ao grid. */
  dark?: boolean;
  wide?: boolean;
};

const SKILLS: Skill[] = [
  {
    icon: SiFlutter,
    name: "Mobile",
    desc: "Apps multiplataforma, Android e iOS, a partir de uma única base de código.",
    stack: [SiFlutter, SiDart],
    tags: ["Flutter", "Dart"],
    dark: true,
    wide: true,
  },
  {
    icon: SiReact,
    name: "Front-end",
    desc: "Interfaces web modernas, consumindo APIs RESTful.",
    stack: [SiReact, SiVuedotjs, SiJavascript, SiHtml5, SiCss],
    tags: ["React", "Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: SiSpringboot,
    name: "Back-end",
    desc: "APIs e regras de negócio, com foco em código limpo e testado.",
    stack: [SiOpenjdk, SiSpringboot, SiRubyonrails],
    tags: ["Java", "Spring Boot", "Ruby on Rails", "REST"],
  },
  {
    icon: SiMysql,
    name: "Dados",
    desc: "Modelagem, consultas e dashboards para indicadores de negócio.",
    stack: [SiMysql],
    tags: ["MySQL", "Power BI", "Excel avançado"],
    dark: true,
  },
  {
    icon: SiGit,
    name: "Ferramentas",
    desc: "Versionamento e organização de trabalho em times ágeis.",
    stack: [SiGit, SiGithub],
    tags: ["Git", "GitHub", "Scrum", "Kanban"],
  },
];

export function Skills() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="skills">
      <div className="container">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">
            As ferramentas
            <br />
            que uso todo dia.
          </h2>
        </div>

        <div className="bento">
          {SKILLS.map((skill, i) => (
            <SkillTile key={skill.name} skill={skill} delay={(i % 3) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTile({ skill, delay }: { skill: Skill; delay: number }) {
  const { ref, className } = useReveal<HTMLDivElement>("zoom");
  const Icon = skill.icon;

  return (
    <article
      ref={ref}
      className={[
        "tile",
        skill.dark ? "tile--dark" : "",
        skill.wide ? "tile--wide" : "",
        className,
      ].join(" ")}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <Icon className="tile__icon" aria-hidden="true" />
      <h3 className="tile__name">{skill.name}</h3>
      <p className="tile__desc">{skill.desc}</p>
      <p className="tile__tags">{skill.tags.join(" · ")}</p>
      {skill.wide ? (
        <div className="tile__stack" aria-hidden="true">
          {skill.stack.map((StackIcon, j) => (
            <StackIcon key={j} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
