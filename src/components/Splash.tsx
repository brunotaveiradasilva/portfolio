import { useEffect, useState } from "react";
import { Logo, Wordmark } from "./Logo";

const STORAGE_KEY = "splash-seen";

// Tempo até começar a saída e até desmontar (precisa bater com o CSS).
const EXIT_AT = 2000;
const DONE_AT = 2800;

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

/** Abertura: o monograma se desenha e o nome aparece. Uma vez por sessão. */
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
    // Libera a página já na saída, pra animação do hero rodar por baixo.
    if (phase !== "in") {
      document.documentElement.classList.remove("is-splashing");
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`splash ${phase === "out" ? "is-leaving" : ""}`}
      onClick={() => setPhase("done")}
      role="presentation"
    >
      <div className="splash__content">
        <Logo className="splash__logo" />
        <Wordmark className="splash__name" />
      </div>
    </div>
  );
}
