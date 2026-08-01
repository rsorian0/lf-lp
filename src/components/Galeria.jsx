import useReveal from '../hooks/useReveal';

const IMAGES = [
  { src: '/photos/galeria-1.webp', pos: 'center 20%' },
  { src: '/photos/galeria-2.webp' },
  { src: '/photos/galeria-3.webp' },
  { src: '/photos/galeria-4.webp', pos: 'center 25%' },
  { src: '/photos/galeria-6-ilhadoferro.webp', pos: 'center 30%' },
  { src: '/photos/galeria-7-hibarbie.webp', pos: 'center 15%' },
];

export default function Galeria() {
  const [ref, inView] = useReveal();
  // duplica a lista para o loop contínuo do carrossel (CSS translateX -50%)
  const track = [...IMAGES, ...IMAGES];

  return (
    <div ref={ref} className={`galeria${inView ? ' in-view' : ''}`}>
      <div className="galeria-track">
        {track.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            style={img.pos ? { objectPosition: img.pos } : undefined}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
