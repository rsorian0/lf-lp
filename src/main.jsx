import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

// HashRouter (URLs tipo /#/politica-de-privacidade) em vez de BrowserRouter:
// funciona no GitHub Pages sem nenhuma configuração extra no servidor, e abrir
// o link direto ou dar F5 na página nunca dá 404.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
