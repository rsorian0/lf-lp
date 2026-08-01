import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Onda from './components/Onda';
import Numeros from './components/Numeros';
import Sobre from './components/Sobre';
import Pilares from './components/Pilares';
import Clientes from './components/Clientes';
import Depoimentos from './components/Depoimentos';
import Galeria from './components/Galeria';
import Cta from './components/Cta';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  // A página é revelada de imediato (não esperamos mais as fontes carregarem
  // para evitar atrasar o first paint / LCP no Lighthouse). O @font-face usa
  // font-display:swap, então o texto aparece com a fonte de sistema e troca
  // suavemente assim que a fonte da marca chega — sem travar a página toda.
  return (
    <div className="site ready">
      <Nav />
      <Hero start />
      <Onda id="onda1" />
      <Numeros />
      <Sobre />
      <Pilares />
      <Clientes />
      <Onda id="onda2" />
      <Galeria />
      <Depoimentos />
      <Cta />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App
