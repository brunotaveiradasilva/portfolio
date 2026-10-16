import type { CSSProperties } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

const TEXT =
  "Código limpo, versionado e bem testado. Interfaces simples para quem usa. E uma visão de negócio que vem dos dados.";

/** Frase grande que vai "acendendo" palavra por palavra conforme a rolagem. */
export function Statement() {
  const ref = useScrollProgress<HTMLElement>("sticky");
  const words = TEXT.split(" ");

  return (
    <section ref={ref} className="statement" aria-label={TEXT}>
      <div className="statement__sticky">
        <p className="statement__text" aria-hidden="true">
          {words.map((word, i) => (
            <span
              key={i}
              className="statement__word"
              style={{ "--w": i / words.length } as CSSProperties}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
