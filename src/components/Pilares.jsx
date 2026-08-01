import useReveal from '../hooks/useReveal';

const PILLARS = [
  {
    photo: '/photos/pilar-branding.webp',
    title: 'Branding de Luxo',
    text: 'Presença de marca para hotéis, resorts e espaços que vivem da primeira impressão, de exposições de design a escritórios de arquitetura.',
  },
  {
    photo: '/photos/pilar-cx.webp',
    title: 'Treinamentos em CX',
    text: 'Formação de equipes de casas de temporada e hotéis para um atendimento à altura de cada hóspede.',
  },
  {
    photo: '/photos/pilar-hospitalidade.webp',
    title: 'Hospitalidade',
    text: '16 anos de hotelaria aplicados a casas de temporada entregues em destinos como Milagres, Alagoas.',
    objectPosition: 'top',
  },
];

function Card({ photo, title, text, objectPosition }) {
  const [ref, inView] = useReveal();

  return (
    <div ref={ref} className={`card${inView ? ' in-view' : ''}`}>
      <img
        className="photo"
        src={photo}
        alt=""
        style={objectPosition ? { objectPosition } : undefined}
        loading="lazy"
        decoding="async"
      />
      <div className="c-inner">
        <img className="num" src="/symbol-mark.svg" alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function Pilares() {
  return (
    <section className="pilares" id="servicos">
      <div className="head">
        <div className="eyebrow-flanked">
          <span className="line"></span>
          <span className="eyebrow">O que fazemos</span>
          <span className="line"></span>
        </div>
        <h2>Três pilares</h2>
      </div>
      <div className="cards">
        {PILLARS.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
