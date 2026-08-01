# LF Consult — Landing Page (React + Vite)

Projeto React da landing page da LF Consult, convertido a partir do mockup estático.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Gera a pasta `dist/` pronta para deploy em qualquer hospedagem estática (Vercel, Netlify, etc).

## Estrutura

- `src/App.jsx` — monta as seções da página.
- `src/components/` — um componente por seção (Nav, Hero, Onda, Numeros, Sobre, Pilares, Clientes, Depoimentos, Galeria, Cta, Footer, CookieConsent).
- `src/hooks/useReveal.js` — hook de scroll-reveal via IntersectionObserver.
- `src/hooks/useCountUp.js` — hook de contagem animada dos números.
- `src/App.css` — estilos globais (paleta, tipografia, animações).
- `public/` — logos, símbolo da marca, fotos/vídeo e a página estática `politica-de-privacidade.html`.

## Cookies e privacidade

O banner de cookies (`src/components/CookieConsent.jsx`) segue o padrão usado nos outros projetos: aceitar/rejeitar tudo, personalizar por categoria (Necessários/Estatísticas) e um botão flutuante para reabrir as preferências depois. A escolha fica salva no `localStorage`.

- O carregamento do Google Analytics só é ativado se a categoria "Estatísticas" for aceita.
- **Pendência:** o `GA_ID` em `CookieConsent.jsx` está vazio — precisa do ID real do Google Analytics da LF Consult para o rastreamento funcionar.
- A Política de Privacidade é a página estática `public/politica-de-privacidade.html` (não faz parte do app React, então não depende de configuração de rotas no servidor).

## Pendências de conteúdo

Os 3 depoimentos em `src/components/Depoimentos.jsx` estão como placeholder — falta receber os textos reais e os nomes/empresas dos clientes.
