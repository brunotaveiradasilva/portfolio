import { Logo } from "./Logo";

/** Abertura: nome, função e chamada, com o monograma </> ao fundo. */
export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__mark" aria-hidden="true">
        <Logo />
      </div>
      <div className="hero__inner">
        <p className="hero__eyebrow">Desenvolvedor full stack</p>
        <h1 className="hero__title">Bruno Taveira.</h1>
        <p className="hero__subtitle">
          Foco em back-end com Java e Spring Boot.
          <br className="hide-sm" /> Do banco de dados à interface.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#projetos">
            Ver projetos
          </a>
          <a className="link-arrow" href="#contato">
            Entrar em contato
          </a>
        </div>
      </div>
    </header>
  );
}
