import { useState, useEffect } from 'react';
import './Modal.css';

export default function Modal({ product, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const CAT = { shonen: "Shonen", seinen: "Seinen", shojo: "Shojo", livros: "Livros" };

  if (!product) return null;

  const gradients = [
    `linear-gradient(135deg,${product.c[0]},${product.c[1]})`,
    `linear-gradient(225deg,${product.c[1]},${product.c[2] || product.c[0]})`,
    `linear-gradient(45deg,${product.c[2] || product.c[0]},${product.c[0]})`
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + 3) % 3);
  };

  const handleWhatsApp = () => {
    alert(`Conectando com ${product.seller}...`);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && onClose()}>
      <div className="modal">
        <div className="m-bar">
          <div className="m-bar-l">
            <div className="m-dot"></div>
            <div className="m-dot"></div>
            <span className="m-url">{String(product.id).padStart(4, '0')}-produto.html</span>
          </div>
          <button className="m-close" onClick={onClose}>✕ fechar</button>
        </div>
        <div className="m-img">
          <div className="m-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {gradients.map((g, i) => (
              <div key={i} className="m-slide" style={{ background: g }}>{product.e}</div>
            ))}
          </div>
          <button className="m-arrow prev" onClick={() => handleSlide(-1)}>‹</button>
          <button className="m-arrow next" onClick={() => handleSlide(1)}>›</button>
          <div className="m-dots">
            {gradients.map((_, i) => (
              <div key={i} className={`m-di ${i === currentSlide ? 'on' : ''}`} onClick={() => setCurrentSlide(i)}></div>
            ))}
          </div>
        </div>
        <div className="m-body">
          <div className="m-meta">
            <span className="m-badge">{CAT[product.cat]}</span>
          </div>
          <h3 className="m-title">{product.title}</h3>
          <p className="m-author">✍ {product.author}</p>
          <div className="m-price-row">
            <span className="m-price">R$ {product.price}</span>
            <span className="bc-cond">{product.cond}</span>
          </div>
          <span className="m-syn-lbl">Sinopse</span>
          <p className="m-syn">{product.syn}</p>
          <div className="m-seller">
            <div className="s-av">👤</div>
            <div>
              <div className="s-name">{product.seller}</div>
              <div className="s-city">📍 {product.city}</div>
            </div>
          </div>
          <button className="m-whats" onClick={handleWhatsApp}>💬 Falar com o Vendedor</button>
        </div>
      </div>
    </div>
  );
}
