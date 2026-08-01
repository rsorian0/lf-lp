import useReveal from '../hooks/useReveal';

const CLIENTS = [
  'Nakka Exclusive',
  'Ibratin',
  'Casa Believe',
  'Para Quartier',
  'Rede Brisa',
  'Duna Paraíso',
  'Luciana Amaral',
];

export default function Clientes() {
  const [ref, inView] = useReveal();

  return (
    <section className="clientes" id="clientes">
      <div className="eyebrow-flanked" style={{ marginBottom: 34 }}>
        <span className="line"></span>
        <span className="eyebrow">Marcas que confiam</span>
        <span className="line"></span>
      </div>
      <div ref={ref} className={`logos${inView ? ' in-view' : ''}`}>
        {CLIENTS.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </section>
  );
}
