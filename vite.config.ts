import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Caminhos relativos para o site funcionar tanto local quanto publicado
// em qualquer subpasta (ex.: GitHub Pages em /portfolio/).
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})
