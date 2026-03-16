import { useState } from 'react';
import './LoginModal.css';

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    
    if (!email || !password) return;

    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);

    if (password !== '123456') {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 350);
      return;
    }

    alert('✓ Autenticado!');
    setTimeout(() => {
      onClose();
    }, 800);
  };

  const handleGoogleLogin = () => {
    alert('Login com Google em desenvolviment');
  };

  return (
    <div className="login-overlay" onClick={(e) => e.target.className === 'login-overlay' && onClose()}>
      <div className="login-modal">
        <button className="login-close" onClick={onClose}>✕</button>
        
        <h2 className="login-title">Entrar na DeskLibre</h2>
        <p className="login-subtitle">Acesse sua conta para continuar</p>

        {error && (
          <div className="error-msg show">
            E-mail ou senha incorretos. Tente novamente.
          </div>
        )}

        <form className={`form ${shake ? 'shake' : ''}`} onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label className="field-label" htmlFor="email">E-mail</label>
            <div className="field-input-wrap">
              <span className="field-icon">✉</span>
              <input
                type="email"
                id="email"
                className="field-input"
                placeholder="seu@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="field-label" htmlFor="password">Senha</label>
            <div className="field-input-wrap">
              <span className="field-icon">◉</span>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="field-input"
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-wrap">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Lembrar de mim
            </label>
            <a href="#" className="forgot-link">Esqueci a senha</a>
          </div>

          <button type="submit" className={`btn-login ${loading ? 'loading' : ''}`}>
            <span className="btn-text">Entrar na plataforma →</span>
            <div className="spinner"></div>
          </button>

          <div className="divider">ou continue com</div>

          <button type="button" className="btn-social" onClick={handleGoogleLogin}>
            <span style={{ fontWeight: 800, fontSize: '1rem' }}>G</span>
            Continuar com Google
          </button>

          <p className="signup-prompt">
            Novo por aqui? <a href="#">Crie sua conta gratuita</a>
          </p>
        </form>
      </div>
    </div>
  );
}
