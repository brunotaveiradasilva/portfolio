import { useReveal } from "../hooks/useReveal";

const CV_URL = "./curriculo-bruno-taveira.pdf";

export function Resume() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="section section--alt resume" id="curriculo">
      <div className="container">
        <div ref={ref} className={className}>
          <p className="eyebrow">Currículo</p>
          <h2 className="section-title">Quer ver tudo em um PDF?</h2>
          <p
            className="section-lead"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Experiências, formação e competências técnicas, tudo em um único
            documento.
          </p>
          <div className="resume__actions">
            <a className="btn" href={CV_URL} download>
              Baixar currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
