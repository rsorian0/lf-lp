import useReveal from '../hooks/useReveal';
import useCountUp from '../hooks/useCountUp';

function NumItem({ target, label }) {
  const [ref, inView] = useReveal();
  const value = useCountUp(target, inView);

  return (
    <div ref={ref} className={`num-item reveal reveal-scale${inView ? ' in-view' : ''}`}>
      <div className="n">{value}</div>
      <div className="l">{label}</div>
    </div>
  );
}

export default function Numeros() {
  return (
    <div className="numeros">
      <NumItem target={16} label="Anos de hotelaria" />
      <NumItem target={8} label="Anos de LF Consult" />
    </div>
  );
}
