import { useEffect, useRef } from "react";

/**
 * Escreve em `--progress` (0 → 1) o quanto o elemento já rolou.
 *
 * - "sticky": pra seções mais altas que a tela com conteúdo `position: sticky`
 *   — vai de 0 quando o topo encosta no topo da tela a 1 quando o fim encosta
 *   no fim da tela.
 * - "pass": do momento em que o elemento entra por baixo até sair por cima.
 *
 * Atualiza direto no style (sem re-render), uma vez por frame.
 */
export function useScrollProgress<T extends HTMLElement = HTMLElement>(
  mode: "sticky" | "pass" = "sticky"
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--progress", mode === "sticky" ? "0" : "1");
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw =
        mode === "sticky"
          ? -top / Math.max(1, height - vh)
          : (vh - top) / (vh + height);
      const p = Math.min(1, Math.max(0, raw));
      el.style.setProperty("--progress", p.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [mode]);

  return ref;
}
