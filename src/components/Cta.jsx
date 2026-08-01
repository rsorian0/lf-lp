import useReveal from '../hooks/useReveal';

// Objeto estável (fora do componente) para não recriar o IntersectionObserver
// a cada render — useReveal recria o observer sempre que "options" muda de
// referência.
const NEAR_VIEWPORT_OPTIONS = { rootMargin: '400px 0px', threshold: 0 };

export default function Cta() {
  const [ref, inView] = useReveal();
  // O vídeo só recebe "src" quando a seção se aproxima da tela — evita baixar
  // o arquivo inteiro no carregamento inicial da página (impacto no LCP/peso
  // de rede no Lighthouse), já que ele fica bem abaixo da dobra.
  const [sectionRef, sectionNear] = useReveal(NEAR_VIEWPORT_OPTIONS);

  return (
    <section className="cta" id="contato" ref={sectionRef}>
      {sectionNear && (
        <video className="cta-video" src="/photos/cta-video.mp4" autoPlay muted loop playsInline />
      )}
      <div ref={ref} className={`cta-inner${inView ? ' in-view' : ''}`}>
        <div className="symbol-loose">
          <img src="/symbol-mark.svg" alt="" />
        </div>
        <div className="eyebrow-flanked">
          <span className="line" style={{ background: 'rgba(250,248,244,0.4)' }}></span>
          <span className="eyebrow" style={{ color: 'rgba(250,248,244,0.7)' }}>
            Contato
          </span>
          <span className="line" style={{ background: 'rgba(250,248,244,0.4)' }}></span>
        </div>
        <h2>Fale com a LF Consult</h2>
        <a href="https://wa.me/5582999515557" className="btn btn-light">
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
