import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const { ref, className } = useReveal<HTMLDivElement>();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="section" id="sobre">
      <div className="container">
        <div ref={ref} className={`about ${className}`}>
          <div className="about__body">
            <p className="eyebrow">Sobre</p>
            <p>
              Gosto de transformar problemas confusos em software simples de
              usar.
            </p>
            <p>
              Trabalho o produto de ponta a ponta: modelo os dados e a API,
              cuido das regras de negócio e entrego uma interface limpa e
              rápida. Sou pragmático com a stack — escolho a ferramenta certa
              para cada camada e mantenho o código legível para quem vem
              depois.
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
