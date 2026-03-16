import './Blog.css';

export default function Blog() {
  const blogPosts = [
    { date: '2025-04-07', type: 'artigo', title: 'Como negociar mangás com segurança em 2025', emoji: '📖', bg: '#e8e5df' },
    { date: '2025-04-06', type: 'dica', title: 'Os 10 mangás mais trocados de 2025', emoji: '🔖', bg: '#ddd' },
    { date: '2025-04-05', type: 'guia', title: 'Como precificar seu livro usado', emoji: '📚', bg: '#ccc' },
    { date: '2025-04-04', type: 'comunidade', title: 'Colecionadores: quem são eles?', emoji: '✍️', bg: '#bbb' }
  ];

  return (
    <section className="section reveal">
      <div className="blog-grid">
        <div>
          <div className="stack">
            {blogPosts.map((post, index) => (
              <div key={index} className="stack-card">
                <div className="sk-bar">
                  <div className="sk-dot"></div>
                  <div className="sk-dot"></div>
                  <span className="sk-url">{post.date}-blog.pdf</span>
                </div>
                <div className="sk-cover" style={{ background: post.bg }}>{post.emoji}</div>
                <div className="sk-body">
                  <span className="sk-date">{post.date} · {post.type}</span>
                  <div className="sk-title">{post.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-text">
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '.4rem' }}>Do nosso blog</h2>
          <a href="#" className="blog-view-all">Ver todos os posts ↗</a>
          <p>Toda semana publicamos guias, dicas de negociação e histórias da nossa comunidade de leitores. Do mangá raríssimo ao clássico de literatura.</p>
          <p>Aprenda a fotografar bem seu item, escrever uma descrição que vende e fazer trocas seguras em qualquer cidade do Brasil.</p>
          <a href="#" className="btn btn-solid">Ler o blog ↗</a>
        </div>
      </div>
    </section>
  );
}
