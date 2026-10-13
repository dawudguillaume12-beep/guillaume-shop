import { useState } from 'react';
import { createDemoSession, getStoredSession, isExplicitAdminEmail } from '../lib/auth';

const AuthPage = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('dawudguillaume12@gmail.com');
  const [fullName, setFullName] = useState('Guillaume Dawudson');

  const onContinue = () => {
    const normalized = email.trim();
    if (!normalized) return;

    const session = createDemoSession(normalized, fullName || 'Client');
    localStorage.setItem('guillaume-shop-demo-session', JSON.stringify(session));
    window.location.href = isExplicitAdminEmail(normalized) ? '/admin' : '/account';
  };

  const session = getStoredSession();

  return (
    <div className="page-body" style={{ paddingTop: 50 }}>
      <div className="auth-box">
        <div className="auth-tabs">
          <button type="button" className={`auth-tab ${mode === 'login' ? 'active' : ''}`} onClick={() => setMode('login')}>Connexion</button>
          <button type="button" className={`auth-tab ${mode === 'register' ? 'active' : ''}`} onClick={() => setMode('register')}>Inscription</button>
        </div>

        {session ? (
          <div className="notice-box">Vous êtes déjà connecté en mode démonstration. Vous pouvez continuer votre navigation.</div>
        ) : null}

        {mode === 'login' ? (
          <div className="form-grid">
            <div className="form-field full">
              <label>Email</label>
              <input value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="form-field full">
              <label>Mot de passe</label>
              <input type="password" defaultValue="********" />
            </div>
            <button type="button" className="primary-button" onClick={onContinue}>Se connecter</button>
          </div>
        ) : (
          <div className="form-grid">
            <div className="form-field"><label>Nom</label><input value={fullName} onChange={(event) => setFullName(event.target.value)} /></div>
            <div className="form-field"><label>Prénom</label><input defaultValue="" /></div>
            <div className="form-field full"><label>Email</label><input value={email} onChange={(event) => setEmail(event.target.value)} /></div>
            <div className="form-field full"><label>Mot de passe</label><input type="password" defaultValue="********" /></div>
            <button type="button" className="primary-button" onClick={onContinue}>Créer mon compte</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
