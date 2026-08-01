import { useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';

// Cada depoimento aponta para um vídeo real do cliente. Enquanto o vídeo não
// chega, "src" fica null e o card mostra um placeholder — nunca um vídeo falso.
// TODO: os 3 abaixo usam cta-video.mp4 só como teste visual — trocar pelos
// vídeos reais de depoimento assim que o cliente enviar.
const TESTIMONIALS = [
  { name: '[Nome, Empresa]', src: '/photos/cta-video.mp4' },
  { name: '[Nome, Empresa]', src: '/photos/cta-video.mp4' },
  { name: '[Nome, Empresa]', src: '/photos/cta-video.mp4' },
];

function VideoCard({ name, src, onOpen }) {
  const [ref, inView] = useReveal();

  return (
    <div ref={ref} className={`quote-card${inView ? ' in-view' : ''}`}>
      <div className="quote-video-frame">
        {src ? (
          <>
            <video src={src} muted playsInline preload="metadata" onClick={onOpen} />
            <button
              type="button"
              className="quote-play"
              onClick={onOpen}
              aria-label="Reproduzir depoimento"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7-11-7Z" />
              </svg>
            </button>
          </>
        ) : (
          <div className="quote-video-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M8 5v14l11-7-11-7Z" />
            </svg>
            <span>Vídeo a receber</span>
          </div>
        )}
      </div>
      <div className="author ph">{name}</div>
    </div>
  );
}

function VideoModal({ testimonial, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  return (
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="video-modal-close"
          onClick={onClose}
          aria-label="Fechar vídeo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <video ref={videoRef} src={testimonial.src} controls playsInline />
      </div>
    </div>
  );
}

export default function Depoimentos() {
  const [active, setActive] = useState(null);

  return (
    <section className="quote">
      <div className="quote-head">
        <div className="eyebrow-flanked">
          <span className="line" style={{ background: 'rgba(255,255,255,0.4)' }}></span>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Depoimentos
          </span>
          <span className="line" style={{ background: 'rgba(255,255,255,0.4)' }}></span>
        </div>
      </div>
      <div className="quote-grid">
        {TESTIMONIALS.map((t, i) => (
          <VideoCard key={i} {...t} onOpen={() => setActive(i)} />
        ))}
      </div>
      {active !== null && (
        <VideoModal testimonial={TESTIMONIALS[active]} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
