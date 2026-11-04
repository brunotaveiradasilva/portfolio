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
    desc: "Back-end com Ruby on Rails e desenvolvimento mobile com Flutter, atuando em squads do time de produto de ponta a ponta.",
    tags: ["Ruby on Rails", "APIs REST", "Flutter"],
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
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <p className="eyebrow">Experiência</p>
          <h2 className="section-title">Trajetória profissional.</h2>
        </div>

        <ol className="jobs">
          {JOBS.map((job) => (
            <JobRow key={job.role + job.company} job={job} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function JobRow({ job }: { job: Job }) {
  const { ref, className } = useReveal<HTMLLIElement>();

  return (
    <li ref={ref} className={`job ${className}`}>
      <p className="job__period">{job.period}</p>
      <div className="job__main">
        <h3 className="job__role">{job.role}</h3>
        <p className="job__company">
          {job.company} · {job.duration}
        </p>
      </div>
      <div className="job__detail">
        <p className="job__desc">{job.desc}</p>
        <p className="job__tags">{job.tags.join(" · ")}</p>
      </div>
    </li>
  );
}
