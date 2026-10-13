import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/format';

const OrderConfirmationPage = () => {
  return (
    <div className="page-body" style={{ paddingTop: 50 }}>
      <div className="auth-box">
        <div className="badge-box">Commande confirmée</div>
        <h2 style={{ marginTop: 0 }}>Merci pour votre achat !</h2>
        <p>Votre commande a bien été enregistrée et est en attente de vérification du paiement NatCash.</p>
        <div className="summary-line"><span>Référence</span><strong>GS-20261013-001</strong></div>
        <div className="summary-line"><span>Montant</span><strong>{formatCurrency(7520)}</strong></div>
        <div className="summary-line"><span>Statut</span><strong>Preuve de paiement soumise</strong></div>
        <div style={{ marginTop: 20 }}>
          <Link to="/track-order" className="primary-button">Suivre la commande</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
