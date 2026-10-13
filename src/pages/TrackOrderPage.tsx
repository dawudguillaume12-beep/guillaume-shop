import { Link } from 'react-router-dom';
import { formatCurrency } from '../lib/orders';

const TrackOrderPage = () => {
  const order = JSON.parse(localStorage.getItem('guillaume-shop-last-order') || '{}');
  const reference = order.reference ?? 'GS-ORDER-UNKNOWN';
  const total = Number(order.total ?? 0);
  const status = order.status ?? 'payment_submitted';

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
            <div className="table-row"><span>Référence</span><span>{reference}</span><span>Date</span><span>{new Date().toLocaleDateString('fr-FR')}</span></div>
            <div className="table-row"><span>Paiement</span><span className="tag">{status === 'payment_submitted' ? 'Preuve soumise' : 'Confirmé'}</span><span>Préparation</span><span className="tag warning">En cours</span></div>
            <div className="table-row"><span>Expédition</span><span>Non lancée</span><span>Livraison</span><span>Est. 2-5 jours</span></div>
          </div>
        </div>

        <div className="summary-card">
          <h3>Résumé</h3>
          <div className="summary-line"><span>Montant</span><strong>{formatCurrency(total)}</strong></div>
          <div className="summary-line"><span>Dernière mise à jour</span><strong>À l’instant</strong></div>
          <div style={{ marginTop: 20 }}>
            <Link to="/orders" className="primary-button" style={{ width: '100%' }}>Voir mes commandes</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderPage;
