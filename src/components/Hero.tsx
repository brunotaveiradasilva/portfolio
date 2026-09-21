function ComputerGraphic() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle className="hero-art__glow" cx="230" cy="180" r="150" />
      <circle
        className="hero-art__glow hero-art__glow--soft"
        cx="150"
        cy="250"
        r="100"
      />

      <g className="hero-art__group">
        {/* Monitor */}
        <rect
          className="hero-art__monitor"
          x="95"
          y="80"
          width="210"
          height="140"
          rx="16"
        />
        <rect
          className="hero-art__screen"
          x="116"
          y="101"
          width="168"
          height="98"
          rx="8"
        />
        {/* Linhas de código */}
        <rect className="hero-art__line" x="132" y="120" width="80" height="7" rx="3.5" />
        <rect
          className="hero-art__line--dim"
          x="132"
          y="138"
          width="120"
          height="7"
          rx="3.5"
        />
        <rect className="hero-art__line" x="132" y="156" width="60" height="7" rx="3.5" />
        <rect
          className="hero-art__line--dim"
          x="132"
          y="174"
          width="95"
          height="7"
          rx="3.5"
        />
        <rect
          className="hero-art__cursor"
          x="235"
          y="174"
          width="7"
          height="7"
          rx="1.5"
        />

        {/* Pé do monitor */}
        <path className="hero-art__stand" d="M175 220 L225 220 L214 248 L186 248 Z" />
        <rect
          className="hero-art__stand"
          x="155"
          y="248"
          width="90"
          height="13"
          rx="6.5"
        />

        {/* Luzinha de "ligado" */}
        <circle className="hero-art__power" cx="110" cy="94" r="5" />
      </g>

      <circle className="hero-art__dot" cx="345" cy="70" r="3" />
      <circle className="hero-art__dot--dim" cx="58" cy="110" r="2.5" />
      <circle className="hero-art__dot" cx="335" cy="292" r="2.5" />
      <circle className="hero-art__dot--dim" cx="50" cy="300" r="2" />
      <path
        className="hero-art__spark"
        d="M320 140 L324 150 L334 154 L324 158 L320 168 L316 158 L306 154 L316 150 Z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <ComputerGraphic />
      <div className="hero__inner">
        <p className="hero__eyebrow">Olá, eu sou</p>
        <h1 className="hero__title">
          Bruno
          <br />
          Taveira
        </h1>
        <p className="hero__subtitle">Desenvolvedor de software.</p>
        <p className="hero__tagline">
          Construo aplicações web e mobile com TypeScript, Java e Flutter —
          do back-end ao produto final.
        </p>
        <div className="hero__badges">
          <span className="tag">TypeScript</span>
          <span className="tag">Java</span>
          <span className="tag">Flutter</span>
        </div>
        <div className="hero__actions">
          <a className="btn" href="#projetos">
            Ver projetos
          </a>
          <a className="btn btn--ghost" href="#contato">
            Entrar em contato
          </a>
        </div>
        <div className="hero__scroll">Role para baixo</div>
      </div>
    </header>
  );
}
