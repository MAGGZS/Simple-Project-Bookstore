import { useState } from 'react';
import heroImg from '../assets/hero.png';
import './LoginBox.css';

export default function LoginBox() {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    alert('Login iniciado com: ' + email);
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setGoogleLoading(false);
    alert('Redirecionando para autenticação do Google...');
  };

  const handleBack = () => {
    history.back();
  };

  return (
    <div className="form-section">
      <div className="login-box">
        <button className="back-btn" onClick={handleBack}>
          <span>← Voltar</span>
        </button>

        <div className="login-content">
          <div className="title-container">
            <img src={heroImg} alt="RootRPG" className="login-logo" />
            <div className="welcome-text">Bem-vindo de volta!</div>
            <div className="title-main">Faça o login</div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Seu email</label>
              <input type="email" id="email" name="email" placeholder="email@gmail.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" placeholder="••••••••" required />
            </div>

            <button type="submit" className="signin-btn" disabled={loading}>
              {loading ? 'Entrando no reino...' : 'Entrar'}
            </button>
          </form>

          <div className="links-container">
            <div className="divider"></div>
            <p className="signup-link">
              Primeira vez aqui? <a href="#">Crie sua conta</a>
            </p>
            <button type="button" className="google-btn" onClick={handleGoogleLogin} disabled={googleLoading}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/>
              </svg>
              {googleLoading ? 'Conectando ao Google...' : 'Continuar com Google'}
            </button>
          </div>

          <div className="footer-info">
            Você reconhece que leu e concorda com nossos<br />
            <a href="#">Termos de Serviço</a> e nossa <a href="#">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </div>
  );
}
