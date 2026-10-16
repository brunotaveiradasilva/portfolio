import { useScrollProgress } from "../hooks/useScrollProgress";
import { Logo } from "./Logo";

/**
 * Hero preso na tela: ao rolar, o texto encolhe e some enquanto o monograma
 * ao fundo cresce — o "zoom através" das páginas de produto da Apple.
 */
export function Hero() {
  const ref = useScrollProgress<HTMLElement>("sticky");

  return (
    <header ref={ref} className="hero" id="top">
      <div className="hero__sticky">
        <div className="hero__mark" aria-hidden="true">
          <Logo />
        </div>
        <div className="hero__inner">
          <p className="hero__eyebrow">Desenvolvedor de software</p>
          <h1 className="hero__title">Bruno Taveira.</h1>
          <p className="hero__subtitle">
            Aplicações web e mobile com TypeScript, Java e Flutter.
            <br className="hide-sm" /> Do back-end ao produto final.
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
        <div className="hero__scroll" aria-hidden="true">
          <span />
        </div>
      </div>
    </header>
  );
}
