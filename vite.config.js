import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// - Repositório de projeto (usuario.github.io/REPO/): base = "/REPO/" — o
//   workflow do GitHub Actions injeta via VITE_BASE
// - Local (dev/preview) e domínio próprio: base = "/"
const base = process.env.VITE_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
