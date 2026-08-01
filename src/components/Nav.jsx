import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);

      const pos = window.scrollY + window.innerHeight * 0.35;
      let current = null;
      LINKS.forEach((link, i) => {
        const sec = document.querySelector(link.href);
        if (sec && sec.offsetTop <= pos) current = i;
      });
      setActiveIndex(current);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const closeNav = () => setOpen(false);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="logo">
          <img className="logo-symbol" src="/symbol-mark.svg" alt="LF Consult" />
        </div>
        <ul>
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a href={link.href} className={activeIndex === i ? 'active' : ''}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobileNav"
          onClick={() => setOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      <div className={`mobile-nav${open ? ' open' : ''}`} id="mobileNav">
        <button
          type="button"
          className="mobile-nav-close"
          aria-label="Fechar menu"
          onClick={closeNav}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <img className="mobile-nav-symbol" src="/symbol-mark.svg" alt="" />
        <nav className="mobile-nav-links">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={activeIndex === i ? 'active' : ''}
              onClick={closeNav}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5582999515557"
          className="btn btn-light"
          onClick={closeNav}
        >
          Falar com a LF Consult
        </a>
      </div>
    </>
  );
}
