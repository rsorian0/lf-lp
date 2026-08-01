import { useEffect, useState } from 'react';

const CONSENT_KEY = 'lf-consult-cookie-consent';
// TODO: preencher com o ID real do Google Analytics da LF Consult quando disponível.
const GA_ID = '';

function loadGoogleAnalytics() {
  if (!GA_ID || window.__lfGaLoaded) return;
  window.__lfGaLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

function applyConsent(prefs) {
  if (prefs.statistics) loadGoogleAnalytics();
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [decided, setDecided] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (saved) {
      try {
        const prefs = JSON.parse(saved);
        setStatistics(!!prefs.statistics);
        applyConsent(prefs);
        setDecided(true);
      } catch {
        setVisible(true);
      }
    } else {
      setVisible(true);
    }
  }, []);

  function persist(prefs) {
    // A escolha (aceitar ou recusar) é guardada de forma permanente.
    // Quem quiser mudar de ideia depois pode usar o botão flutuante
    // de cookies (canto inferior esquerdo), que reabre este banner.
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    applyConsent(prefs);
    setVisible(false);
    setDecided(true);
  }

  function acceptAll() {
    setStatistics(true);
    persist({ statistics: true });
  }

  function rejectAll() {
    setStatistics(false);
    persist({ statistics: false });
  }

  function saveChoices() {
    persist({ statistics });
  }

  function openSettings() {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved) {
      try {
        setStatistics(!!JSON.parse(saved).statistics);
      } catch {
        /* noop */
      }
    }
    setExpanded(true);
    setVisible(true);
  }

  if (!visible) {
    if (!decided) return null;
    return (
      <button
        type="button"
        className="cookie-fab"
        onClick={openSettings}
        aria-label="Gerenciar cookies"
        title="Gerenciar cookies"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M12 3 5 6v5.5c0 4.8 3 8.6 7 10 4-1.4 7-5.2 7-10V6l-7-3Z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Usamos cookies para melhorar sua experiência. Veja a{' '}
        <a href="/politica-de-privacidade.html">Política de Privacidade</a>.
      </p>

      {expanded && (
        <div className="cookie-cats">
          <div className="cookie-cat">
            <span>Necessários</span>
            <div className="cookie-toggle on locked" aria-disabled="true">
              <span className="knob" />
            </div>
          </div>
          <div className="cookie-cat">
            <span>Estatísticas</span>
            <button
              type="button"
              className={`cookie-toggle${statistics ? ' on' : ''}`}
              role="switch"
              aria-checked={statistics}
              aria-label="Ativar cookies de estatísticas"
              onClick={() => setStatistics((v) => !v)}
            >
              <span className="knob" />
            </button>
          </div>
        </div>
      )}

      <div className="cookie-actions">
        <button
          type="button"
          className="cookie-link"
          onClick={expanded ? saveChoices : () => setExpanded(true)}
        >
          Personalizar
        </button>
        <div className="cookie-actions-main">
          <button type="button" className="cookie-btn cookie-btn-ghost" onClick={rejectAll}>
            Rejeitar
          </button>
          <button type="button" className="cookie-btn cookie-btn-solid" onClick={acceptAll}>
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
