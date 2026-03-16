import './Navbar.css';
import { useState } from 'react';

export default function Navbar({ onLoginClick }) {
  const toggleMenu = () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  };

  return (
    <>
      <nav className="navbar">
        <a href="index.html" className="nav-logo" aria-label="NeoLivraria">📚</a>
        <ul className="nav-links">
          <li><a href="index.html" className="nav-link active">Home</a></li>
          <li><a href="catalog.html" className="nav-link">Catálogo</a></li>
          <li><a href="catalog.html?cat=shonen" className="nav-link">Mangás</a></li>
          <li><a href="catalog.html?cat=livros" className="nav-link">Livros</a></li>
          <li><a href="#manifesto" className="nav-link">Sobre nós</a></li>
        </ul>
        <div className="nav-actions">
          <button className="nav-btn" onClick={onLoginClick}>Entrar</button>
          <button className="nav-btn filled">Cadastrar</button>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className="mobile-menu" id="mobileMenu">
        <a href="index.html" className="mobile-menu-link">Home <span>↗</span></a>
        <a href="catalog.html" className="mobile-menu-link">Catálogo <span>↗</span></a>
        <a href="catalog.html?cat=shonen" className="mobile-menu-link">Mangás <span>↗</span></a>
        <a href="catalog.html?cat=livros" className="mobile-menu-link">Livros <span>↗</span></a>
        <a href="#manifesto" className="mobile-menu-link">Sobre nós <span>↗</span></a>
      </div>
    </>
  );
}
