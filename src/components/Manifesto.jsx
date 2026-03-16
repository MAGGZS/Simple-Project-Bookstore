import './Manifesto.css';

export default function Manifesto() {
  return (
    <section className="manifesto reveal" id="manifesto">
      <div className="man-left">
        <span className="man-tag">// sobre o projeto</span>
        <h2 className="man-h">Por que a <em>NeoLivraria</em><br />existe?</h2>
        <p className="man-lead">
          Cada mangá encostado numa estante é uma história esperando um novo leitor.
          Cada livro no fundo de uma caixa é um universo dormindo.
        </p>
        <p className="man-body">
          Fundada por leitores frustrados com sebos caros e plataformas genéricas,
          a NeoLivraria nasceu para dar à cultura impressa o tratamento que ela merece:
          uma plataforma dedicada, com comunidade real e preços honestos.<br /><br />
          O mercado de livros usados no Brasil movimenta mais de R$ 800 milhões por ano,
          mas continua fragmentado. Estamos mudando isso — conectando vendedor e comprador
          diretamente, sem intermediários e com zero taxa nas primeiras 10 transações.
        </p>
      </div>

      <div className="man-right">
        <span className="man-tag">// 4 razões para entrar</span>
        <div className="reasons" style={{ marginBottom: '1.5rem' }}>
          <div className="reason">
            <span className="r-icon">♻️</span>
            <div className="r-title">Economia circular</div>
            <p className="r-text">Livros circulam entre leitores, democratizando o acesso à cultura.</p>
          </div>
          <div className="reason">
            <span className="r-icon">💸</span>
            <div className="r-title">Preços justos</div>
            <p className="r-text">Sem intermediários. O vendedor recebe 100% do valor acordado.</p>
          </div>
          <div className="reason">
            <span className="r-icon">🔐</span>
            <div className="r-title">Segurança</div>
            <p className="r-text">Reputação verificada, avaliações reais e suporte humano em cada disputa.</p>
          </div>
          <div className="reason">
            <span className="r-icon">🌐</span>
            <div className="r-title">Comunidade</div>
            <p className="r-text">18.000+ trocas realizadas. Uma rede apaixonada por livros em todo o Brasil.</p>
          </div>
        </div>
        <button className="man-cta" onClick={() => window.location.href = 'catalog.html'}>
          ↗ Começar a explorar agora
        </button>
      </div>
    </section>
  );
}
