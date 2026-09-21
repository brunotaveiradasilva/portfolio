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
import { useReveal } from "../hooks/useReveal";

type Tag = {
  label: string;
  icon?: IconType;
};

type Skill = {
  icon: IconType;
  name: string;
  desc: string;
  tags: Tag[];
};

const SKILLS: Skill[] = [
  {
    icon: SiFlutter,
    name: "Mobile",
    desc: "Apps multiplataforma (Android e iOS) a partir de uma única base de código.",
    tags: [
      { label: "Dart", icon: SiDart },
      { label: "Flutter", icon: SiFlutter },
    ],
  },
  {
    icon: SiReact,
    name: "Front-end",
    desc: "Interfaces web modernas, consumindo APIs RESTful.",
    tags: [
      { label: "React", icon: SiReact },
      { label: "Vue.js", icon: SiVuedotjs },
      { label: "JavaScript", icon: SiJavascript },
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss },
    ],
  },
  {
    icon: SiSpringboot,
    name: "Back-end",
    desc: "APIs e regras de negócio, com foco em código limpo e testado.",
    tags: [
      { label: "Java", icon: SiOpenjdk },
      { label: "Spring Boot", icon: SiSpringboot },
      { label: "Ruby on Rails", icon: SiRubyonrails },
      { label: "REST" },
    ],
  },
  {
    icon: SiMysql,
    name: "Dados",
    desc: "Modelagem, consultas e dashboards para indicadores de negócio.",
    tags: [
      { label: "MySQL", icon: SiMysql },
      { label: "Power BI" },
      { label: "Excel avançado" },
    ],
  },
  {
    icon: SiGit,
    name: "Ferramentas",
    desc: "Versionamento e organização de trabalho em times ágeis.",
    tags: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "Scrum" },
      { label: "Kanban" },
    ],
  },
];

export function Skills() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <div ref={head.ref} className={`skills__head ${head.className}`}>
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">As ferramentas que uso todo dia.</h2>
        </div>

        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const { ref, className } = useReveal<HTMLDivElement>();
  const Icon = skill.icon;

  return (
    <article
      ref={ref}
      className={`skill-card ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="skill-card__mark">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="skill-card__name">{skill.name}</h3>
      <p className="skill-card__desc">{skill.desc}</p>
      <div className="skill-card__tags">
        {skill.tags.map((tag) => {
          const TagIcon = tag.icon;
          return (
            <span key={tag.label} className="tag">
              {TagIcon ? <TagIcon aria-hidden="true" /> : null}
              {tag.label}
            </span>
          );
        })}
      </div>
    </article>
  );
}
