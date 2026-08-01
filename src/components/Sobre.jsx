import useReveal from '../hooks/useReveal';

export default function Sobre() {
  const [photoRef, photoIn] = useReveal();
  const [textRef, textIn] = useReveal();

  return (
    <section className="split" id="sobre">
      <img
        ref={photoRef}
        className={`photo reveal reveal-left${photoIn ? ' in-view' : ''}`}
        src="/photos/lf-retrato.webp"
        alt="Luiz Felipe, fundador da LF Consult"
        style={{ objectPosition: 'top' }}
        loading="lazy"
        decoding="async"
      />
      <div ref={textRef} className={`text reveal reveal-right${textIn ? ' in-view' : ''}`}>
        <div className="symbol-loose" style={{ margin: '0 0 18px', filter: 'none' }}>
          <img src="/symbol-mark.svg" alt="" style={{ filter: 'none' }} />
        </div>
        <h2>
          O amigo dos
          <br />
          arquitetos
        </h2>
        <div className="divider"></div>
        <p>
          Luiz Felipe, mais conhecido como "LF", começou sua trajetória profissional em uma
          multinacional francesa, onde construiu uma sólida base no setor hoteleiro. Com essa
          expertise, fundou a LF Consult, uma empresa que transforma a hospitalidade em uma
          experiência singular, levando o toque acolhedor dos hotéis para clínicas, lojas e
          escritórios de arquitetura.
        </p>
        <p>
          Conhecido como o "amigo dos arquitetos", LF se destaca por conectar pessoas e aplicar seu
          conhecimento de forma prática em cada projeto, indo além do atendimento comercial para
          criar conexões afetivas e duradouras, valorizando sempre o papel essencial dos
          arquitetos.
        </p>
      </div>
    </section>
  );
}
