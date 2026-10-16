import type { CSSProperties } from "react";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const head = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();

  return (
    <section className="section section--light" id="sobre">
      <div className="container">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <p className="eyebrow">Sobre</p>
          <h2 className="section-title">
            Do Flutter ao front-end.
            <br />
            <span className="muted">E de volta ao código.</span>
          </h2>
        </div>

        <div
          ref={body.ref}
          className={`about__body ${body.className}`}
          style={{ "--reveal-delay": "120ms" } as CSSProperties}
        >
          <p>
            Cerca de 2 anos construindo aplicações mobile e web. Atuei com
            Flutter, integração de APIs RESTful e banco de dados MySQL.
          </p>
          <p>
            Hoje trabalho com análise de dados, o que reforçou minha visão de
            negócio e de indicadores — e estou voltando a focar em
            desenvolvimento, aprofundando React, Java e Spring. Sou graduando em
            Análise e Desenvolvimento de Sistemas na UCDB.
          </p>
        </div>
      </div>
    </section>
  );
}
