import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Onda from './Onda';
import Numeros from './Numeros';
import Sobre from './Sobre';
import Pilares from './Pilares';
import Clientes from './Clientes';
import Depoimentos from './Depoimentos';
import Galeria from './Galeria';
import Cta from './Cta';
import scrollToId from '../lib/scrollToId';

export default function Home() {
  const location = useLocation();

  // Quando se chega em "/" vindo de outra rota (ex.: clicou em "Sobre" no
  // rodapé estando na Política de Privacidade), rola até a seção pedida
  // depois que a página montar.
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    const timer = setTimeout(() => scrollToId(id), 80);
    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <>
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
    </>
  );
}
