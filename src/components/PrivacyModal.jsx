import { useEffect } from 'react';

export default function PrivacyModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="privacy-modal" role="dialog" aria-modal="true" aria-label="Política de Privacidade" onClick={onClose}>
      <div className="privacy-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="privacy-modal-close"
          onClick={onClose}
          aria-label="Fechar política de privacidade"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="privacy-modal-content">
          <div className="eyebrow">LF Consult</div>
          <h1>Política de Privacidade</h1>
          <p className="privacy-updated">Última atualização: julho de 2026.</p>

          <p>
            Esta página explica quais dados coletamos quando você visita o site da LF Consult,
            para que usamos essas informações e quais escolhas você tem.
          </p>

          <h2>1. Dados que coletamos</h2>
          <p>
            Não temos cadastro, login ou banco de dados de visitantes. A única forma pela qual
            coletamos informação é:
          </p>
          <ul>
            <li>
              <strong>Cookies de estatística (Google Analytics):</strong> se você aceitar no
              banner de cookies, coletamos dados de navegação de forma agregada — páginas
              visitadas, tempo no site, tipo de dispositivo e localização aproximada
              (cidade/região, nunca endereço exato). Essas informações são anônimas e usadas só
              para entendermos como o site é usado e melhorá-lo.
            </li>
          </ul>

          <h2>2. Cookies</h2>
          <p>Usamos as seguintes categorias de cookies:</p>
          <ul>
            <li>
              <strong>Necessários:</strong> essenciais para o site funcionar (ex.: lembrar sua
              escolha de cookies). Sempre ativos.
            </li>
            <li>
              <strong>Estatísticas:</strong> Google Analytics, usado apenas com sua permissão.
            </li>
          </ul>
          <p>
            Ainda não utilizamos cookies de marketing ou remarketing (ex.: Meta Pixel). Se isso
            mudar, esta política e o banner de cookies serão atualizados antes de qualquer
            ativação.
          </p>
          <p>
            Você pode mudar sua escolha a qualquer momento limpando os dados de navegação do site
            nas configurações do seu navegador, o que faz o banner de cookies aparecer de novo na
            próxima visita.
          </p>

          <h2>3. Com quem compartilhamos dados</h2>
          <p>
            Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais. Os
            únicos serviços de terceiros envolvidos são o Google Analytics (estatísticas de uso,
            só com consentimento) e o WhatsApp (para onde você é direcionado ao clicar em "Falar
            com a LF Consult", diretamente pelo seu navegador).
          </p>

          <h2>4. Seus direitos (LGPD)</h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a
            confirmar a existência de tratamento de dados, acessar, corrigir ou solicitar a
            exclusão de dados pessoais que tenha nos enviado. Para exercer esses direitos, fale
            com a gente.
          </p>

          <h2>5. Contato</h2>
          <p>
            Dúvidas sobre esta política ou sobre seus dados? Fale com a gente pelo{' '}
            <a href="https://wa.me/5582999515557" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
