import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const ACADEMIC = {
  school: "UCDB",
  course: "Análise e Desenvolvimento de Sistemas",
  period: "2026 — 2028",
  status: "Em andamento",
  desc: "Graduação em Análise e Desenvolvimento de Sistemas, com foco em algoritmos, banco de dados, engenharia de software e desenvolvimento web e mobile.",
};

export function Education() {
  const head = useReveal<HTMLDivElement>();
  const [tab, setTab] = useState<"academica" | "cursos">("academica");

  return (
    <section className="section section--alt" id="educacao">
      <div className="container">
        <div ref={head.ref} className={`edu__head ${head.className}`}>
          <p className="eyebrow">Educação</p>
          <h2 className="section-title">Formação e aprendizado contínuo.</h2>
        </div>

        <div className="edu__tabs">
          <button
            type="button"
            className={`edu__tab ${tab === "academica" ? "is-active" : ""}`}
            onClick={() => setTab("academica")}
          >
            Formação acadêmica
          </button>
          <button
            type="button"
            className={`edu__tab ${tab === "cursos" ? "is-active" : ""}`}
            onClick={() => setTab("cursos")}
          >
            Cursos e certificados
          </button>
        </div>

        {tab === "academica" ? (
          <div className="edu-card">
            <h3 className="edu-card__school">{ACADEMIC.school}</h3>
            <p className="edu-card__course">{ACADEMIC.course}</p>
            <span className="edu-card__period">
              {ACADEMIC.period} · {ACADEMIC.status}
            </span>
            <p className="edu-card__desc">{ACADEMIC.desc}</p>
          </div>
        ) : (
          <p className="edu-empty">Em breve.</p>
        )}
      </div>
    </section>
  );
}
