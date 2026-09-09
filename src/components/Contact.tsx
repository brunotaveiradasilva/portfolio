import { useReveal } from "../hooks/useReveal";

const EMAIL = "sulbiologic@gmail.com";
const GITHUB = "https://github.com/brunotaveiradasilva";

export function Contact() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="section section--alt contact" id="contato">
      <div className="container">
        <div ref={ref} className={className}>
          <p className="eyebrow">Contato</p>
          <h2 className="section-title">Vamos conversar.</h2>
          <p
            className="section-lead"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Aberto a projetos, colaborações e oportunidades.
          </p>
          <div className="contact__actions">
            <a className="btn" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a
              className="btn btn--ghost"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ›
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
