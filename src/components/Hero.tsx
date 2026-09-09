export function Hero() {
  return (
    <header className="hero" id="top">
      <h1 className="hero__title">Bruno Taveira</h1>
      <p className="hero__subtitle">Desenvolvedor de software.</p>
      <p className="hero__tagline">
        Construo aplicações web e mobile com TypeScript, C# e Flutter — do
        back-end ao produto final.
      </p>
      <div className="hero__actions">
        <a className="btn" href="#projetos">
          Ver projetos
        </a>
        <a className="btn btn--ghost" href="#contato">
          Entrar em contato ›
        </a>
      </div>
      <div className="hero__scroll">Role para baixo</div>
    </header>
  );
}
