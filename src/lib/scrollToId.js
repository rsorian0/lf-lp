// Scroll manual até uma seção da página (em vez de href="#id" puro), com
// compensação da nav fixa. Necessário porque o site agora usa HashRouter
// (react-router) — deixar o navegador mudar location.hash diretamente para
// "#sobre" etc. seria interpretado pelo HashRouter como uma troca de rota.
export default function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 68,
    behavior: 'smooth',
  });
}
