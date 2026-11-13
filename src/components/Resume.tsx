import { useReveal } from "../hooks/useReveal";
import { CV_URL } from "../links";

export function Resume() {
  const { ref, className } = useReveal<HTMLDivElement>("zoom");

  return (
    <section className="section resume" id="curriculo">
      <div className="container">
        <div ref={ref} className={`resume__card ${className}`}>
          <div>
            <h2 className="resume__title">Tudo em um PDF.</h2>
            <p className="resume__lead">
              Experiências, formação e competências técnicas, em um único
              documento.
            </p>
          </div>
          <a className="btn" href={CV_URL} download>
            Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}
