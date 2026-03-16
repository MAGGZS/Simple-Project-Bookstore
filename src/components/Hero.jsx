import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Troque o<br />
          que você<br />
          <span className="hl"><em>já leu.</em></span>
        </h1>
        <p className="hero-sub">
          Plataforma de negociação de
          <a href="catalog.html?cat=livros"> livros</a> e
          <a href="catalog.html?cat=shonen"> mangás</a> usados.
          Feita por leitores,<br />para leitores.
          Preços honestos, sem intermediários.
        </p>
        <div className="hero-btns">
          <a href="catalog.html" className="btn btn-solid">↗ Explorar catálogo</a>
          <a href="#" className="btn">+ Anunciar item</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-n">2.4K</span>
            <span className="hero-stat-l">Anúncios</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-n">847</span>
            <span className="hero-stat-l">Online</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-n">18K</span>
            <span className="hero-stat-l">Trocas</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-n">94%</span>
            <span className="hero-stat-l">Positivos</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <svg className="hero-mascot" viewBox="0 0 380 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="55" y="50" width="260" height="210" rx="10" fill="white" stroke="#0d0d0d" strokeWidth="4"/>
          <rect x="76" y="70" width="218" height="162" fill="#f0efec" stroke="#0d0d0d" strokeWidth="2.5"/>
          <circle cx="185" cy="151" r="54" fill="white" stroke="#0d0d0d" strokeWidth="4"/>
          <circle cx="185" cy="151" r="30" fill="#0d0d0d"/>
          <circle cx="198" cy="138" r="9" fill="white"/>
          <circle cx="202" cy="140" r="3" fill="#0d0d0d"/>
          <path d="M160 198 Q185 218 210 198" stroke="#0d0d0d" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <rect x="22" y="100" width="33" height="22" rx="5" fill="white" stroke="#0d0d0d" strokeWidth="3"/>
          <rect x="315" y="100" width="33" height="22" rx="5" fill="white" stroke="#0d0d0d" strokeWidth="3"/>
          <rect x="157" y="260" width="56" height="22" fill="white" stroke="#0d0d0d" strokeWidth="3"/>
          <rect x="120" y="280" width="130" height="15" rx="4" fill="white" stroke="#0d0d0d" strokeWidth="3"/>
          <ellipse cx="298" cy="255" rx="16" ry="16" fill="white" stroke="#0d0d0d" strokeWidth="3"/>
          <rect x="290" y="268" width="16" height="78" rx="7" fill="white" stroke="#0d0d0d" strokeWidth="3" transform="rotate(-18 298 268)"/>
          <polygon points="287,340 295,350 303,340" fill="#0d0d0d"/>
          <circle cx="100" cy="312" r="18" fill="white" stroke="#0d0d0d" strokeWidth="3"/>
          <circle cx="100" cy="312" r="5" fill="#0d0d0d"/>
          <circle cx="275" cy="312" r="18" fill="white" stroke="#0d0d0d" strokeWidth="3"/>
          <circle cx="275" cy="312" r="5" fill="#0d0d0d"/>
          <circle cx="65" cy="45" r="6" fill="#0d0d0d"/>
          <circle cx="308" cy="38" r="9" fill="#0d0d0d"/>
          <circle cx="330" cy="58" r="5" fill="#0d0d0d"/>
          <circle cx="42" cy="75" r="4" fill="#0d0d0d"/>
        </svg>
      </div>
    </section>
  );
}
