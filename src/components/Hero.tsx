import type { CSSProperties } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { CV_URL, GITHUB, LINKEDIN } from "../links";
import portrait from "../assets/bruno-taveira.webp";

const TITLE = "Bruno Taveira, desenvolvedor full stack.";

/**
 * Abertura dividida: texto à esquerda e foto à direita. O título entra letra
 * por letra e a foto abre a partir da borda. Ao rolar, o texto some e a foto
 * cresce devagar enquanto o bloco fica preso na tela.
 */
export function Hero() {
  const ref = useScrollProgress<HTMLElement>("sticky");
  let index = 0;

  return (
    <header ref={ref} className="hero" id="top">
      <div className="hero__sticky">
        <div className="hero__panel">
          <div className="hero__inner">
            <p className="hero__status">
              <span className="hero__dot" aria-hidden="true" />
              Aberto a oportunidades
            </p>

            <h1 className="hero__title" aria-label={TITLE}>
              {TITLE.split(" ").map((word, w) => (
                <span key={w} aria-hidden="true">
                  <span className="hero__word">
                    {[...word].map((char, c) => (
                      <span
                        key={c}
                        className="hero__char"
                        style={{ "--c": index++ } as CSSProperties}
                      >
                        {char}
                      </span>
                    ))}
                  </span>{" "}
                </span>
              ))}
            </h1>

            <div className="hero__body">
              <a className="btn" href="#projetos">
                Ver projetos
              </a>
            </div>

            <p className="hero__links">
              Me encontre no{" "}
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              e no{" "}
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              .
              <br />
              Baixe meu{" "}
              <a href={CV_URL} download>
                currículo
              </a>{" "}
              (PDF, 84 KB).
            </p>
          </div>
        </div>

        <div className="hero__photo">
          <img
            src={portrait}
            alt="Bruno Taveira sorrindo, de camisa preta"
            width={1360}
            height={1700}
            fetchPriority="high"
          />
        </div>
      </div>
    </header>
  );
}
