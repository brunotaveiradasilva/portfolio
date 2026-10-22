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
    icon: SiOpenjdk,
    name: "Back-end",
    desc: "APIs RESTful e regras de negócio com Java e Spring Boot, com foco em código limpo, testado e bem estruturado.",
    stack: [SiOpenjdk, SiSpringboot, SiRubyonrails],
    tags: ["Java", "Spring Boot", "APIs REST", "Ruby on Rails"],
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
    icon: SiMysql,
    name: "Dados",
    desc: "Modelagem, consultas e dashboards para indicadores de negócio.",
    stack: [SiMysql],
    tags: ["MySQL", "Power BI", "Excel avançado"],
    dark: true,
  },
  {
    icon: SiFlutter,
    name: "Mobile",
    desc: "Apps multiplataforma para Android e iOS.",
    stack: [SiFlutter, SiDart],
    tags: ["Flutter", "Dart"],
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
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">
            As ferramentas
            <br />
            que uso todo dia.
          </h2>
        </div>

        <div className="bento">
          {SKILLS.map((skill) => (
            <SkillTile key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTile({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <article
      className={[
        "tile",
        skill.dark ? "tile--dark" : "",
        skill.wide ? "tile--wide" : "",
      ].join(" ")}
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
