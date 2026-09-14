function OrbitGraphic() {
  return (
    <svg
      className="orbit"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        className="orbit__ring orbit__ring--spin"
        cx="200"
        cy="200"
        r="150"
        strokeDasharray="2 10"
      />
      <ellipse
        className="orbit__ring orbit__ring--spin-rev"
        cx="200"
        cy="200"
        rx="180"
        ry="90"
        transform="rotate(-18 200 200)"
      />
      <ellipse
        className="orbit__ring orbit__ring--spin"
        cx="200"
        cy="200"
        rx="120"
        ry="190"
        transform="rotate(24 200 200)"
      />
      <circle className="orbit__ring" cx="200" cy="200" r="60" opacity="0.5" />
      {[
        [40, 60],
        [370, 40],
        [20, 260],
        [360, 300],
        [120, 20],
        [300, 370],
        [60, 350],
        [380, 180],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          className="orbit__dot"
          cx={cx}
          cy={cy}
          r={i % 2 === 0 ? 2.5 : 1.5}
          opacity={0.7}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <OrbitGraphic />
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
