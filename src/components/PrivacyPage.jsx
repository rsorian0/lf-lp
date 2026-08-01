import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import withBase from '../lib/withBase';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-page-topbar">
        <div className="privacy-page-wrap">
          <Link to="/" aria-label="LF Consult">
            <img src={withBase('/logo-horizontal.svg')} alt="LF Consult" />
          </Link>
          <Link to="/" className="privacy-page-back">
            ← Voltar para o site
          </Link>
        </div>
      </div>

      <main className="privacy-page-main">
        <div className="privacy-page-wrap privacy-page-content">
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
      </main>
    </div>
  );
}
