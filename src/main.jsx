import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// BrowserRouter: URL limpa (/politica-de-privacidade, sem #). No GitHub Pages
// isso só funciona porque o build também gera um dist/404.html idêntico ao
// index.html (ver script "build" no package.json) — o GitHub Pages serve esse
// 404.html pra qualquer rota que não exista fisicamente, e o React Router
// assume a partir daí. `basename` usa o mesmo base do Vite (ver vite.config.js)
// pra funcionar tanto em domínio próprio quanto em usuario.github.io/repo/.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
