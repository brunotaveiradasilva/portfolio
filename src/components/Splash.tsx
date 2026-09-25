import { useEffect, useState, type CSSProperties } from "react";

const LINES = ["Bruno", "Taveira"];
const STORAGE_KEY = "splash-seen";

// Tempo até começar a saída e até desmontar (precisa bater com o CSS).
const EXIT_AT = 2300;
const DONE_AT = 3400;

function shouldShow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}

/** Tela de abertura com o nome, exibida uma vez por sessão. */
export function Splash() {
  const [phase, setPhase] = useState<"in" | "out" | "done">(() =>
    shouldShow() ? "in" : "done"
  );

  useEffect(() => {
    if (phase === "done") return;

    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Sem storage: a splash só volta a aparecer na próxima carga.
    }

    document.documentElement.classList.add("is-splashing");
    const exit = window.setTimeout(() => setPhase("out"), EXIT_AT);
    const done = window.setTimeout(() => setPhase("done"), DONE_AT);

    return () => {
      window.clearTimeout(exit);
      window.clearTimeout(done);
      document.documentElement.classList.remove("is-splashing");
    };
    // Só roda na montagem; a troca de fase é controlada pelos timers.
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.documentElement.classList.remove("is-splashing");
    }
  }, [phase]);

  if (phase === "done") return null;

  let letterIndex = 0;

  return (
    <div
      className={`splash ${phase === "out" ? "is-leaving" : ""}`}
      onClick={() => setPhase("done")}
      role="presentation"
    >
      <div className="splash__curtain" />
      <div className="splash__panel">
        <div className="splash__content">
          <h1 className="splash__name" aria-label="Bruno Taveira">
            {LINES.map((line) => (
              <span key={line} className="splash__line" aria-hidden="true">
                {[...line].map((char) => {
                  const i = letterIndex++;
                  return (
                    <span
                      key={i}
                      className="splash__char"
                      style={{ "--i": i } as CSSProperties}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          <span className="splash__bar" />
          <p className="splash__role">Desenvolvedor de software</p>
        </div>
      </div>
    </div>
  );
}
