import { Link } from 'react-router-dom';

const MessagesPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Messagerie</h1>
          <p>Contactez le support ou l’assistant IA.</p>
        </div>
      </div>

      <div className="page-body checkout-grid">
        <div className="form-card">
          <h3>Conversations récentes</h3>
          <div className="message-list">
            <div className="cart-item"><span>Assistant IA</span><span className="tag">En ligne</span></div>
            <div className="cart-item"><span>Support client</span><span className="tag warning">3 messages</span></div>
          </div>
        </div>

        <div className="summary-card">
          <h3>Nouvelle demande</h3>
          <textarea rows={5} placeholder="Décrivez votre besoin ici..." style={{ width: '100%', marginBottom: 14 }} />
          <button className="primary-button" type="button">Envoyer</button>
          <div style={{ marginTop: 14 }}>
            <Link to="/contact" className="secondary-button" style={{ width: '100%' }}>Contacter un conseiller</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
