import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="fc">
        <span className="f-logo">NeoLivraria</span>
        <p className="f-tag">Plataforma de troca de livros e mangás usados.<br />Feito por leitores, para leitores.</p>
        <span className="f-copy">© 2025 · open source</span>
      </div>
      <div className="fc">
        <h4>Navegação</h4>
        <ul>
          <li><a href="index.html">↗ Home</a></li>
          <li><a href="catalog.html">↗ Catálogo</a></li>
          <li><a href="#">↗ Anunciar</a></li>
          <li><a href="#">↗ Blog</a></li>
        </ul>
      </div>
      <div className="fc">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">↗ Termos de uso</a></li>
          <li><a href="#">↗ Privacidade</a></li>
          <li><a href="#">↗ Contato</a></li>
        </ul>
      </div>
    </footer>
  );
}
