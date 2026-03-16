import './MiniCard.css';

export default function MiniCard({ product, onClick }) {
  const bg = `linear-gradient(135deg,${product.c[0]},${product.c[1]})`;
  const CAT = { shonen: "Shonen", seinen: "Seinen", shojo: "Shojo", livros: "Livros" };

  return (
    <div className="mini-card" onClick={() => onClick(product.id)}>
      <div className="mc-bar">
        <div className="mc-dot"></div>
        <div className="mc-dot"></div>
        <span className="mc-url">{String(product.id).padStart(4, '0')}.html</span>
      </div>
      <div className="mc-cover" style={{ background: bg }}>{product.e}</div>
      <div className="mc-body">
        <span className="mc-cat">{CAT[product.cat]}</span>
        <div className="mc-title">{product.title}</div>
        <div className="mc-price">R$ {product.price}</div>
      </div>
    </div>
  );
}
