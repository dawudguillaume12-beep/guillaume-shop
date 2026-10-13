import { useState } from 'react';

const AuthPage = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="page-body" style={{ paddingTop: 50 }}>
      <div className="auth-box">
        <div className="auth-tabs">
          <button type="button" className={`auth-tab ${mode === 'login' ? 'active' : ''}`} onClick={() => setMode('login')}>Connexion</button>
          <button type="button" className={`auth-tab ${mode === 'register' ? 'active' : ''}`} onClick={() => setMode('register')}>Inscription</button>
        </div>

        {mode === 'login' ? (
          <div className="form-grid">
            <div className="form-field full"><label>Email</label><input defaultValue="dawudguillaume12@gmail.com" /></div>
            <div className="form-field full"><label>Mot de passe</label><input type="password" defaultValue="********" /></div>
            <button type="button" className="primary-button">Se connecter</button>
          </div>
        ) : (
          <div className="form-grid">
            <div className="form-field"><label>Nom</label><input defaultValue="Guillaume" /></div>
            <div className="form-field"><label>Prénom</label><input defaultValue="Dawudson" /></div>
            <div className="form-field full"><label>Email</label><input defaultValue="dawudguillaume12@gmail.com" /></div>
            <div className="form-field full"><label>Mot de passe</label><input type="password" defaultValue="********" /></div>
            <button type="button" className="primary-button">Créer mon compte</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
