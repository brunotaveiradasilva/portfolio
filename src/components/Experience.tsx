import { useReveal } from "../hooks/useReveal";

type Job = {
  role: string;
  company: string;
  period: string;
  duration: string;
  desc: string;
  tags: string[];
};

const JOBS: Job[] = [
  {
    role: "Data Analyst",
    company: "SulBiologic",
    period: "Jul 2025 — Atual",
    duration: "Campo Grande, MS",
    desc: "Análise de dados para apoiar decisões de negócio: coleta e tratamento de dados, construção de relatórios e acompanhamento de indicadores.",
    tags: ["Dados", "Relatórios"],
  },
  {
    role: "Software Developer",
    company: "Jera",
    period: "Mar 2023 — Fev 2025",
    duration: "2 anos · Campo Grande, MS · Híbrido",
    desc: "Desenvolvimento mobile com Flutter e back-end com Ruby on Rails, atuando em squads do time de produto de ponta a ponta.",
    tags: ["Flutter", "Ruby on Rails"],
  },
  {
    role: "Seller",
    company: "Pia Sociedade de São Paulo",
    period: "Jun 2021 — Mar 2023",
    duration: "1 ano e 10 meses",
    desc: "Atendimento e vendas, com foco em relacionamento com clientes.",
    tags: ["Vendas", "Atendimento"],
  },
];

export function Experience() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div ref={head.ref} className={`timeline__head ${head.className}`}>
          <p className="eyebrow">Experiência</p>
          <h2 className="section-title">Trajetória profissional.</h2>
        </div>

        <div className="timeline">
          {JOBS.map((job, i) => (
            <JobItem key={job.role + job.company} job={job} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobItem({ job, delay }: { job: Job; delay: number }) {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`timeline-item ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="timeline-item__dot" />
      <p className="timeline-item__period">{job.period}</p>
      <div className="timeline-item__card">
        <h3 className="timeline-item__role">{job.role}</h3>
        <p className="timeline-item__company">
          {job.company} · {job.duration}
        </p>
        <p className="timeline-item__desc">{job.desc}</p>
        <div className="timeline-item__tags">
          {job.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
