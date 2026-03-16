import './QuickLinks.css';

export default function QuickLinks() {
  return (
    <div className="quick-wrap">
      <p className="quick-label">Acesso rápido</p>
      <div className="quick-row">
        <a href="catalog.html?cat=shonen" className="quick-item">Shonen <span className="quick-arrow">↗</span></a>
        <a href="catalog.html?cat=seinen" className="quick-item">Seinen <span className="quick-arrow">↗</span></a>
        <a href="catalog.html?cat=livros" className="quick-item">Livros <span className="quick-arrow">↗</span></a>
        <a href="#" className="quick-item">Anunciar<span className="quick-arrow">↗</span></a>
      </div>
    </div>
  );
}
