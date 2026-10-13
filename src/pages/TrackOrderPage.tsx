import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/format';

const TrackOrderPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Suivi de commande</h1>
          <p>Suivez votre commande en temps réel.</p>
        </div>
      </div>

      <div className="page-body checkout-grid">
        <div className="form-card">
          <h3>Historique</h3>
          <div className="table-list">
            <div className="table-row"><span>Référence</span><span>GS-20261013-001</span><span>Date</span><span>13/10/2026</span></div>
            <div className="table-row"><span>Paiement</span><span className="tag">Confirmé</span><span>Préparation</span><span className="tag warning">En cours</span></div>
            <div className="table-row"><span>Expédition</span><span>Non lancée</span><span>Livraison</span><span>Est. 20/10</span></div>
          </div>
        </div>

        <div className="summary-card">
          <h3>Résumé</h3>
          <div className="summary-line"><span>Montant</span><strong>{formatCurrency(7520)}</strong></div>
          <div className="summary-line"><span>Dernière mise à jour</span><strong>Hier</strong></div>
          <div style={{ marginTop: 20 }}>
            <Link to="/orders" className="primary-button" style={{ width: '100%' }}>Voir mes commandes</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderPage;
