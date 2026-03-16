import './ProductCard.css';

export default function ProductCard({ product, onClick }) {
  const bg = `linear-gradient(135deg,${product.c[0]},${product.c[1]})`;
  const CAT = { shonen: "Shonen", seinen: "Seinen", shojo: "Shojo", livros: "Livros" };

  return (
    <div className="browser-card" onClick={() => onClick(product.id)}>
      <div className="bc-bar">
        <div className="bc-dot"></div>
        <div className="bc-dot"></div>
        <span className="bc-url">{String(product.id).padStart(4, '0')}-produto.html</span>
      </div>
      <div className="bc-cover" style={{ background: bg }}>{product.e}</div>
      <div className="bc-body">
        <span className="bc-cat">{CAT[product.cat]}</span>
        <div className="bc-title">{product.title}</div>
        <p className="bc-desc">{product.syn}</p>
        <div className="bc-footer">
          <span className="bc-price">R$ {product.price}</span>
          <span className="bc-cond">{product.cond}</span>
        </div>
        <button className="bc-btn">Ver produto ↗</button>
      </div>
    </div>
  );
}
