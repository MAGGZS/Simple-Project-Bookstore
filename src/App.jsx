import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import ProductCard from './components/ProductCard';
import Carousel from './components/Carousel';
import Blog from './components/Blog';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import Modal from './components/Modal';
import LoginModal from './components/LoginModal';
import { products } from './data/products';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenModal = (id) => {
    const product = products.find(p => p.id === id);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const featuredProducts = [products[1], products[6], products[12]];

  return (
    <>
      <Navbar onLoginClick={handleOpenLogin} />
      <Hero />
      
      <div className="ht-strip ht"></div>

      <QuickLinks />

      <section className="section reveal" style={{ borderTop: 'var(--border)', marginTop: '2rem' }}>
        <div className="sec-title">
          <span>Destaques <span>da semana</span></span>
          <a href="catalog.html">Ver todos ↗</a>
        </div>
        <div className="bc-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={handleOpenModal} />
          ))}
        </div>
      </section>

      <div className="ht-strip ht"></div>

      <Carousel 
        title="Mangá Shonen" 
        icon="⚔️" 
        category="shonen" 
        products={products} 
        onProductClick={handleOpenModal} 
      />

      <Carousel 
        title="Mangá Seinen" 
        icon="🗡️" 
        category="seinen" 
        products={products} 
        onProductClick={handleOpenModal} 
      />

      <Carousel 
        title="Mangá Shojo" 
        icon="🌸" 
        category="shojo" 
        products={products} 
        onProductClick={handleOpenModal} 
      />

      <div className="ht-strip ht" style={{ marginTop: '2rem' }}></div>

      <Blog />

      <div className="ht-strip ht"></div>

      <Manifesto />

      <Footer />

      {selectedProduct && <Modal product={selectedProduct} onClose={handleCloseModal} />}
      {showLogin && <LoginModal onClose={handleCloseLogin} />}
    </>
  );
}

export default App;
