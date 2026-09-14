import { useReveal } from "../hooks/useReveal";

type Skill = {
  mark: string;
  name: string;
  desc: string;
  tags: string[];
};

const SKILLS: Skill[] = [
  {
    mark: "TS",
    name: "TypeScript",
    desc: "Front-ends em React e APIs em Node com tipagem forte de ponta a ponta. Tooling moderno com Vite.",
    tags: ["React", "Vite", "Node", "REST"],
  },
  {
    mark: "J",
    name: "Java",
    desc: "APIs com Spring Boot: regras de negócio, persistência e integrações seguindo boas práticas de orientação a objetos.",
    tags: ["Spring Boot", "Maven", "REST", "JPA"],
  },
  {
    mark: "F",
    name: "Flutter",
    desc: "Apps mobile multiplataforma a partir de uma única base de código, com foco em UI fluida e responsiva.",
    tags: ["Dart", "iOS", "Android", "Material"],
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

  return (
    <article
      ref={ref}
      className={`skill-card ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="skill-card__mark">{skill.mark}</span>
      <h3 className="skill-card__name">{skill.name}</h3>
      <p className="skill-card__desc">{skill.desc}</p>
      <div className="skill-card__tags">
        {skill.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
