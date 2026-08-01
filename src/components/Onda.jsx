import useReveal from '../hooks/useReveal';

// Faixa gráfica do calçadão (Copacabana), com fluxo contínuo via <animateTransform>.
export default function Onda({ id }) {
  const [ref, inView] = useReveal();

  return (
    <svg
      ref={ref}
      className={`calcada calcada-overlap${inView ? ' in-view' : ''}`}
      viewBox="0 0 240 40"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={id} width="60" height="40" patternUnits="userSpaceOnUse">
          <animateTransform
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to="60 0"
            dur="5s"
            repeatCount="indefinite"
          />
          <path
            d="M-10,26 Q5,10 20,26 T50,26 T80,26"
            stroke="#141414"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-10,14 Q5,-2 20,14 T50,14 T80,14"
            stroke="#141414"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            opacity="0.35"
          />
        </pattern>
      </defs>
      <rect width="240" height="40" fill={`url(#${id})`} />
    </svg>
  );
}
