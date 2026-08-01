// Prefixa caminhos de arquivos estáticos da pasta public/ com o base path
// configurado no Vite (import.meta.env.BASE_URL). Necessário porque um
// caminho absoluto como "/symbol-mark.svg" escrito direto no JSX não é
// reescrito pelo Vite em build (só index.html e url() em CSS são) — isso
// quebra em domínio próprio: base "/" funciona igual, mas em GitHub Pages
// de projeto (usuario.github.io/repo/, base "/repo/") os arquivos ficariam
// em /repo/symbol-mark.svg e não em /symbol-mark.svg.
export default function withBase(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
