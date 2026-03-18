import './InfoSection.css';

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="project-header">
        <h1 className="project-title">RootRPG</h1>
        <p className="project-subtitle">A Aventura Épica Te Aguarda</p>
        <p className="project-description">
          Embarque em uma experiência de RPG imersiva onde suas escolhas moldam o mundo.
          Batalhe criaturas míticas, resolva mistérios antigos e se torne uma lenda no reino de RootRPG.
        </p>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Narrativa imersiva e construção de mundo</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Combate dinâmico e progressão de habilidades</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot"></div>
            <span>Junte-se a milhares de aventureiros</span>
          </div>
        </div>
      </div>
    </div>
  );
}
