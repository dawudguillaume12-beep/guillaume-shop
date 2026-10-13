import { Link } from 'react-router-dom';

const AccountPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Espace client</h1>
          <p>Gérez vos informations, commandes et suivi.</p>
        </div>
      </div>

      <div className="page-body general-grid">
        <div className="info-card">
          <h3>Profil</h3>
          <p className="muted">Nom : Guillaume Dawudson</p>
          <p className="muted">Email : dawudguillaume12@gmail.com</p>
          <p className="muted">Téléphone : +509 33 00 00 00</p>
        </div>
        <div className="info-card">
          <h3>Commandes</h3>
          <p className="muted">2 commandes récentes</p>
          <Link to="/orders" className="secondary-button small-button">Historique</Link>
        </div>
        <div className="info-card">
          <h3>Favoris</h3>
          <p className="muted">4 articles enregistrés</p>
          <Link to="/wishlist" className="secondary-button small-button">Voir</Link>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
