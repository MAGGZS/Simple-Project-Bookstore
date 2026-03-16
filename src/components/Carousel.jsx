import { useRef } from 'react';
import MiniCard from './MiniCard';
import './Carousel.css';

export default function Carousel({ title, icon, category, products, onProductClick }) {
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: direction * 420, behavior: 'smooth' });
    }
  };

  return (
    <div className="section reveal" style={{ paddingBottom: 0 }}>
      <div className="carousel-wrap">
        <div className="cat-header">
          <span className="cat-header-title">{icon} {title}</span>
          <div className="cat-nav">
            <button className="cat-btn" onClick={() => handleScroll(-1)}>‹</button>
            <button className="cat-btn" onClick={() => handleScroll(1)}>›</button>
          </div>
        </div>
        <div className="carousel-track" ref={trackRef}>
          {products.filter(p => p.cat === category).map(product => (
            <MiniCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
