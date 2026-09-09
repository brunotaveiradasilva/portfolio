export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Bruno Taveira</span>
        <span>Feito com React + TypeScript</span>
      </div>
    </footer>
  );
}
