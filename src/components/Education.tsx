import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const ACADEMIC = {
  school: "UCDB",
  course: "Análise e Desenvolvimento de Sistemas",
  period: "2026 — 2028",
  status: "Em andamento",
  desc: "Graduação em Análise e Desenvolvimento de Sistemas, com foco em algoritmos, banco de dados, engenharia de software e desenvolvimento web e mobile.",
};

const TABS = [
  { id: "academica", label: "Formação acadêmica" },
  { id: "cursos", label: "Cursos e certificados" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function Education() {
  const head = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>("zoom");
  const [tab, setTab] = useState<TabId>("academica");
  const activeIndex = TABS.findIndex((t) => t.id === tab);

  return (
    <section className="section section--light" id="educacao">
      <div className="container">
        <div ref={head.ref} className={`section-head section-head--center ${head.className}`}>
          <p className="eyebrow">Educação</p>
          <h2 className="section-title">Aprendendo sempre.</h2>
        </div>

        <div ref={body.ref} className={`edu ${body.className}`}>
          <div className="segmented" role="tablist">
            <span
              className="segmented__thumb"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
              aria-hidden="true"
            />
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                className={tab === t.id ? "is-active" : ""}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "academica" ? (
            <div key="academica" className="edu-card">
              <span className="edu-card__period">
                {ACADEMIC.period} · {ACADEMIC.status}
              </span>
              <h3 className="edu-card__school">{ACADEMIC.school}</h3>
              <p className="edu-card__course">{ACADEMIC.course}</p>
              <p className="edu-card__desc">{ACADEMIC.desc}</p>
            </div>
          ) : (
            <div key="cursos" className="edu-card edu-card--empty">
              <p>Em breve.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
