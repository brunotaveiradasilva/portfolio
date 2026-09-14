import { useReveal } from "../hooks/useReveal";

const EMAIL = "brunotaveiradasilva@gmail.com";
const GITHUB = "https://github.com/brunotaveiradasilva";
const LINKEDIN = "https://www.linkedin.com/in/bruno-taveira/";

export function Contact() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="section contact" id="contato">
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
          </div>
          <div className="contact__socials">
            <a
              className="contact__social"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5Z" />
              </svg>
            </a>
            <a
              className="contact__social"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
