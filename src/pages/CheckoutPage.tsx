import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/format';

const CheckoutPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Finaliser la commande</h1>
          <p>Entrer les détails de livraison puis payer par NatCash.</p>
        </div>
      </div>

      <div className="page-body checkout-grid">
        <div className="form-card">
          <h3>Informations de livraison</h3>
          <div className="form-grid">
            <div className="form-field"><label>Nom complet</label><input defaultValue="Guillaume Dawudson" /></div>
            <div className="form-field"><label>Téléphone principal</label><input defaultValue="+509 33 00 00 00" /></div>
            <div className="form-field"><label>Département</label><input defaultValue="Ouest" /></div>
            <div className="form-field"><label>Commune</label><input defaultValue="Port-au-Prince" /></div>
            <div className="form-field full"><label>Adresse détaillée</label><textarea rows={4} defaultValue="Rue de la boutique, quartier commercial, près du marché central." /></div>
            <div className="form-field full"><label>Point de repère</label><input defaultValue="À côté de la pharmacie centrale" /></div>
          </div>
        </div>

        <div className="summary-card">
          <h3>Paiement NatCash</h3>
          <div className="notice-box">
            Numéro NatCash du destinataire : <strong>43367217</strong>
          </div>
          <div className="summary-line"><span>Montant total</span><strong>{formatCurrency(7520)}</strong></div>
          <div className="summary-line"><span>Référence</span><strong>GS-20261013-001</strong></div>
          <div style={{ marginTop: 18 }}>
            <Link to="/order-confirmation" className="primary-button" style={{ width: '100%' }}>Soumettre la preuve</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
