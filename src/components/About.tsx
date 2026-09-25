import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const { ref, className } = useReveal<HTMLDivElement>("left");
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="section" id="sobre">
      <div className="container">
        <div ref={ref} className={`about ${className}`}>
          <div className="about__body">
            <p className="eyebrow">Sobre</p>
            <p>
              Cerca de 2 anos construindo aplicações mobile e web, do Flutter
              ao front-end.
            </p>
            <p>
              Atuei com Flutter, integração de APIs RESTful e banco de dados
              MySQL. Hoje trabalho com análise de dados, o que reforçou minha
              visão de negócio e de indicadores — e estou voltando a focar em
              desenvolvimento, aprofundando React, Java e Spring, sempre com
              código limpo, versionado e bem testado. Sou graduando em Análise
              e Desenvolvimento de Sistemas na UCDB.
            </p>
          </div>

          <div className="about__photo-wrap">
            <div className="about__photo-frame" />
            <div className="about__photo">
              {photoFailed ? (
                <div className="about__photo-fallback">BT</div>
              ) : (
                <img
                  src="./profile.png"
                  alt="Bruno Taveira"
                  loading="lazy"
                  onError={() => setPhotoFailed(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
