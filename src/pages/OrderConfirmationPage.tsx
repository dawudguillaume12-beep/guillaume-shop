import { Link, useLocation } from 'react-router-dom';
import { formatCurrency } from '../lib/orders';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const order = (location.state as { order?: { reference?: string; total?: number; status?: string } } | null)?.order ?? {
    reference: 'GS-ORDER-UNKNOWN',
    total: 0,
    status: 'payment_submitted',
  };

  return (
    <div className="page-body" style={{ paddingTop: 50 }}>
      <div className="auth-box">
        <div className="badge-box">Commande confirmée</div>
        <h2 style={{ marginTop: 0 }}>Merci pour votre achat !</h2>
        <p>Votre commande a été enregistrée et est en attente de vérification du paiement NatCash.</p>
        <div className="summary-line"><span>Référence</span><strong>{order.reference}</strong></div>
        <div className="summary-line"><span>Montant</span><strong>{formatCurrency(order.total ?? 0)}</strong></div>
        <div className="summary-line"><span>Statut</span><strong>Preuve de paiement soumise</strong></div>
        <div style={{ marginTop: 20 }}>
          <Link to="/track-order" className="primary-button">Suivre la commande</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
