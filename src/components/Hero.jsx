import { useEffect, useState } from 'react';
import withBase from '../lib/withBase';
import scrollToId from '../lib/scrollToId';

export default function Hero({ start }) {
  const [stage, setStage] = useState({
    logo: false,
    title: false,
    p: false,
    btn: false,
    cue: false,
    cueBounce: false,
  });

  useEffect(() => {
    if (!start) return undefined;
    const timers = [];

    timers.push(setTimeout(() => setStage((s) => ({ ...s, logo: true })), 400));
    timers.push(setTimeout(() => setStage((s) => ({ ...s, title: true })), 1000));
    timers.push(setTimeout(() => setStage((s) => ({ ...s, p: true })), 1700));
    timers.push(setTimeout(() => setStage((s) => ({ ...s, btn: true })), 2300));
    timers.push(
      setTimeout(() => {
        setStage((s) => ({ ...s, cue: true }));
        timers.push(setTimeout(() => setStage((s) => ({ ...s, cueBounce: true })), 1000));
      }, 2900)
    );

    return () => timers.forEach(clearTimeout);
  }, [start]);

  return (
    <section className="hero">
      <img className="hero-symbol" src={withBase('/symbol-mark.svg')} alt="" />
      <div className="hero-content">
        <img
          className={`hero-logo${stage.logo ? ' show' : ''}`}
          src={withBase('/logo-horizontal.svg')}
          alt="LF Consult"
        />
        <h1 className={stage.title ? 'show' : ''}>Servir, desenvolver talentos e conectar pessoas.</h1>
        <p className={stage.p ? 'show' : ''}>
          Branding de luxo, treinamentos em customer experience e hospitalidade para hotéis, casas
          de temporada, clínicas, lojas e escritórios de arquitetura.
        </p>
        <a
          href="#contato"
          className={`btn btn-light${stage.btn ? ' show' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToId('contato');
          }}
        >
          Falar com a LF Consult
        </a>
      </div>
      <div className={`scroll-cue${stage.cue ? ' show' : ''}${stage.cueBounce ? ' bounce' : ''}`}>
        Role para conhecer ↓
      </div>
    </section>
  );
}
