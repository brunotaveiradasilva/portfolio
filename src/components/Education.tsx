const ACADEMIC = {
  school: "UCDB",
  course: "Análise e Desenvolvimento de Sistemas",
  period: "2026 — 2028",
  status: "Em andamento",
  desc: "Graduação em Análise e Desenvolvimento de Sistemas, com foco em algoritmos, banco de dados, engenharia de software e desenvolvimento web.",
};

export function Education() {
  return (
    <section className="section section--light" id="educacao">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Educação</p>
          <h2 className="section-title">Formação acadêmica.</h2>
        </div>

        <div className="edu">
          <div className="edu-card">
            <span className="edu-card__period">
              {ACADEMIC.period} · {ACADEMIC.status}
            </span>
            <h3 className="edu-card__school">{ACADEMIC.school}</h3>
            <p className="edu-card__course">{ACADEMIC.course}</p>
            <p className="edu-card__desc">{ACADEMIC.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
