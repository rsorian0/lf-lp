import KunlatekMark from './icons/KunlatekMark';

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="/logo-horizontal.svg" alt="LF Consult" className="foot-logo" />
            <p>Servir, desenvolver talentos<br />e conectar pessoas.</p>
          </div>

          <div className="foot-col">
            <div className="foot-col-title">Menu</div>
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="foot-col">
            <div className="foot-col-title">Contato</div>
            <div className="foot-icons">
              <a
                href="https://wa.me/5582999515557"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 21l1.65-4.95A9 9 0 1 1 8.05 19.35L3 21Z" />
                  <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .5 0 1-.5 1-1v-1l-2.2-1-1 1c-1-.5-2.3-1.8-2.8-2.8l1-1-1-2.2h-1c-.5 0-1 .5-1 1Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lf.consult/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="foot-legal">
            <div className="foot-copy">© {year} LF Consult. Todos os direitos reservados.</div>
            <div className="foot-legal-links">
              <a href="/politica-de-privacidade.html" className="foot-legal-link">
                Política de Privacidade
              </a>
            </div>
          </div>
          <a
            href="https://kunlatek.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="made-by"
          >
            Feito por
            <KunlatekMark />
          </a>
        </div>
      </div>
    </footer>
  );
}
