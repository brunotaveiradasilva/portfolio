/**
 * Símbolo "</>": dois chevrons e a barra, em traço. Usa currentColor, então
 * herda a cor do texto. Cada traço tem pathLength=1 pra animar o desenho.
 */
export function Logo({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={`logo ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path className="logo__stroke" pathLength={1} d="M10 9.5 3.5 16l6.5 6.5" />
      <path className="logo__stroke" pathLength={1} d="M18.5 6.5l-5 19" />
      <path className="logo__stroke" pathLength={1} d="M22 9.5l6.5 6.5-6.5 6.5" />
    </svg>
  );
}

/** Logotipo com o nome: <Bruno Taveira />, com os sinais de tag apagados. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`} aria-label="Bruno Taveira">
      <span className="wordmark__tag" aria-hidden="true">
        &lt;
      </span>
      <span aria-hidden="true">Bruno</span>
      <span className="wordmark__last" aria-hidden="true">
        Taveira
      </span>
      <span className="wordmark__tag" aria-hidden="true">
        {" "}/&gt;
      </span>
    </span>
  );
}
