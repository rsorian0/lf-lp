import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PrivacyPage from './components/PrivacyPage';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  // A página é revelada de imediato (não esperamos mais as fontes carregarem
  // para evitar atrasar o first paint / LCP no Lighthouse). O @font-face usa
  // font-display:swap, então o texto aparece com a fonte de sistema e troca
  // suavemente assim que a fonte da marca chega — sem travar a página toda.
  return (
    <div className="site ready">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App
