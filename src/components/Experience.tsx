import { useEffect, useState, type CSSProperties } from "react";
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

const STATS = [
  { value: 2, suffix: " anos", label: "desenvolvendo apps web e mobile" },
  { value: 4, suffix: "", label: "projetos publicados" },
  { value: 2, suffix: "", label: "apps na Play Store" },
];

export function Experience() {
  const head = useReveal<HTMLDivElement>();
  const stats = useReveal<HTMLDivElement>();
  const counting = stats.className.includes("is-visible");

  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <p className="eyebrow">Experiência</p>
          <h2 className="section-title">Trajetória profissional.</h2>
        </div>

        <div ref={stats.ref} className={`stats ${stats.className}`}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stat"
              style={{ "--reveal-delay": `${i * 120}ms` } as CSSProperties}
            >
              <p className="stat__value">
                <CountUp to={stat.value} run={counting} />
                {stat.suffix}
              </p>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
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

function CountUp({ to, run }: { to: number; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const duration = 1200;
    let frame = requestAnimationFrame(function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [run, to]);

  return <>{value}</>;
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
