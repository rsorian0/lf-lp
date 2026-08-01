import useReveal from '../hooks/useReveal';

// Placeholder: aqui entram os SVGs de cada marca cliente. Até lá, repete
// "Label" no lugar dos nomes reais.
const CLIENTS = Array(10).fill('Label');

export default function Clientes() {
  const [ref, inView] = useReveal();
  // duplica a lista para o loop contínuo do carrossel (CSS translateX -50%)
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="clientes" id="clientes">
      <div className="eyebrow-flanked" style={{ marginBottom: 34 }}>
        <span className="line"></span>
        <span className="eyebrow">Marcas que confiam</span>
        <span className="line"></span>
      </div>
      <div ref={ref} className={`logos${inView ? ' in-view' : ''}`}>
        <div className="logos-track">
          {track.map((c, i) => (
            <span key={i} className="logo-label">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
