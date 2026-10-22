const TEXT =
  "APIs bem estruturadas, código limpo e testado. Interfaces simples para quem usa. E uma visão de negócio que vem dos dados.";

/** Frase grande que resume o jeito de trabalhar. */
export function Statement() {
  return (
    <section className="statement">
      <p className="statement__text">{TEXT}</p>
    </section>
  );
}
