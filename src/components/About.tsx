import desenho from "../assets/bruno-desenho.png";

export function About() {
  return (
    <section className="section section--light" id="sobre">
      <div className="container about">
        <div className="about__body">
          <p>
            Sou desenvolvedor full stack, com cerca de 2 anos de experiência em
            aplicações web e mobile. Trabalhei com back-end em Ruby on Rails,
            integração de APIs RESTful, banco de dados MySQL e apps em Flutter.
          </p>
          <p>
            Hoje atuo com análise de dados, o que fortaleceu minha visão de
            negócio, e curso Análise e Desenvolvimento de Sistemas na UCDB. Meu
            objetivo é atuar com foco em back-end Java, criando APIs com Spring
            Boot, com regras de negócio bem modeladas e código testado.
          </p>
        </div>
        <img
          className="about__portrait"
          src={desenho}
          alt="Desenho do rosto de Bruno Taveira, sorrindo"
          width={800}
          height={776}
          loading="lazy"
        />
      </div>
    </section>
  );
}
