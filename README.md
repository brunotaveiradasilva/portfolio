# Portfólio — Bruno Taveira

Site pessoal em **React + TypeScript** (Vite), com design inspirado nas páginas
de produto da Apple: tipografia grande, bastante respiro e seções que revelam
ao rolar.

## Seções

- **Hero** — nome, função e chamada para ação
- **Sobre** — como trabalho
- **Skills** — TypeScript, C# e Flutter
- **Projetos** — Reserva Hub (Almoxarifado em Agenda), com prévia ao vivo
  em `<iframe>` e links para demo e código
- **Contato** — e-mail e GitHub

## Rodar local

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build

```bash
npm run build      # gera dist/
npm run preview    # serve o build local
```

## Publicar no GitHub Pages

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`):
todo push na `main` faz build e publica.

Passo a passo (uma vez):

1. Crie um repositório no GitHub chamado **`brunotaveiradasilva.github.io`**
   (vazio, sem README).
2. No terminal, dentro desta pasta:
   ```bash
   git remote add origin https://github.com/brunotaveiradasilva/brunotaveiradasilva.github.io.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Aguarde a Action terminar. O site fica em
   **https://brunotaveiradasilva.github.io/**.

Dá também para rodar o deploy manualmente na aba **Actions → Deploy to GitHub
Pages → Run workflow**.

> O `vite.config.ts` usa `base: './'` (caminhos relativos), então o mesmo build
> funciona tanto na raiz quanto em subpasta (`/portfolio/`).

## Estrutura

```
src/
  components/   Nav, Hero, About, Skills, Projects, Contact, Footer
  hooks/
    useReveal.ts   IntersectionObserver para a animação de entrada
  index.css     tokens de design + estilos das seções
  App.tsx       composição da página
```

## Onde editar

- Textos e links: cada componente em `src/components/`
- Projeto em destaque: `src/components/Projects.tsx` (`DEMO_URL`, `REPO_URL`)
- Skills: array `SKILLS` em `src/components/Skills.tsx`
- Cores, espaçamentos e tipografia: `:root` em `src/index.css`
