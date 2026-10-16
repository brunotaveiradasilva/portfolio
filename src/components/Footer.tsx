import { Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#top" className="footer__brand" aria-label="Voltar ao topo">
          <Wordmark />
        </a>
        <span>Copyright © {new Date().getFullYear()} Bruno Taveira.</span>
        <span className="footer__made">Feito com React + TypeScript</span>
      </div>
    </footer>
  );
}
