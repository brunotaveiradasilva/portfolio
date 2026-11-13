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
  SiNextdotjs,
  SiOpenjdk,
  SiReact,
  SiRubyonrails,
  SiSpringboot,
  SiVuedotjs,
} from "react-icons/si";
import type { CSSProperties } from "react";
import { useReveal } from "../hooks/useReveal";

type Skill = {
  name: string;
  desc: string;
  /** Logos das tecnologias principais, discretos ao lado do nome. */
  stack: IconType[];
  tags: string[];
};

const SKILLS: Skill[] = [
  {
    name: "Back-end",
    desc: "APIs RESTful e regras de negócio com Java e Spring Boot, com foco em código limpo, testado e bem estruturado.",
    stack: [SiOpenjdk, SiSpringboot, SiRubyonrails],
    tags: ["Java", "Spring Boot", "APIs REST", "Ruby on Rails"],
  },
  {
    name: "Front-end",
    desc: "Interfaces web modernas, consumindo APIs RESTful.",
    stack: [SiReact, SiNextdotjs, SiVuedotjs, SiJavascript, SiHtml5, SiCss],
    tags: ["React", "Next.js", "Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Dados",
    desc: "Modelagem, consultas e dashboards para indicadores de negócio.",
    stack: [SiMysql],
    tags: ["MySQL", "Power BI", "Excel avançado"],
  },
  {
    name: "Mobile",
    desc: "Apps multiplataforma para Android e iOS.",
    stack: [SiFlutter, SiDart],
    tags: ["Flutter", "Dart"],
  },
  {
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
          <h2 className="section-title">Ferramentas.</h2>
        </div>

        <ul className="specs">
          {SKILLS.map((skill, i) => (
            <SkillItem key={skill.name} skill={skill} delay={(i % 3) * 70} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function SkillItem({ skill, delay }: { skill: Skill; delay: number }) {
  const { ref, className } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`spec ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <h3 className="spec__name">{skill.name}</h3>
      <p className="spec__desc">{skill.desc}</p>
      <span className="spec__stack" aria-hidden="true">
        {skill.stack.map((Icon, j) => (
          <Icon key={j} />
        ))}
      </span>
      <p className="spec__tags">{skill.tags.join(" · ")}</p>
    </li>
  );
}
