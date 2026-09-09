import { useReveal } from "../hooks/useReveal";

export function About() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="sobre">
      <div className="container">
        <div ref={ref} className={className}>
          <p className="eyebrow">Sobre</p>
          <div className="about__body">
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
        </div>
      </div>
    </section>
  );
}
