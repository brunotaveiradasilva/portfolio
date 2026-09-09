import { useEffect, useRef, useState } from "react";

/**
 * Revela um elemento quando ele entra na viewport (efeito das páginas da Apple).
 * Retorna a ref pro elemento e o className a aplicar.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    // Failsafe: se o observer não disparar (aba em segundo plano na carga,
    // ambientes headless, etc.), garante que o conteúdo apareça mesmo assim.
    const failsafe = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return { ref, className: visible ? "reveal is-visible" : "reveal" };
}
