import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { formatCurrency, NATCASH_NUMBER, createOrderReference } from '../lib/orders';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useStore();
  const [form, setForm] = useState({
    fullName: 'Guillaume Dawudson',
    phone: '+509 33 00 00 00',
    department: 'Ouest',
    commune: 'Port-au-Prince',
    address: 'Rue de la boutique, quartier commercial, près du marché central.',
    landmark: 'À côté de la pharmacie centrale',
    paymentReference: 'NATCASH-REF-001',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length ? 250 : 0;
  const total = subtotal + shipping;
  const reference = createOrderReference();

  const onSubmit = () => {
    if (cart.length === 0) {
      return;
    }

    const payload = {
      reference,
      total,
      shipping,
      customer: {
        ...form,
      },
      items: cart,
      paidVia: 'NatCash',
      status: 'payment_submitted',
    };

    localStorage.setItem('guillaume-shop-last-order', JSON.stringify(payload));
    navigate('/order-confirmation', { state: { order: payload } });
  };

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
            <div className="form-field">
              <label>Nom complet</label>
              <input value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} />
            </div>
            <div className="form-field">
              <label>Téléphone principal</label>
              <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
            </div>
            <div className="form-field">
              <label>Département</label>
              <input value={form.department} onChange={(event) => setForm({ ...form, department: event.target.value })} />
            </div>
            <div className="form-field">
              <label>Commune</label>
              <input value={form.commune} onChange={(event) => setForm({ ...form, commune: event.target.value })} />
            </div>
            <div className="form-field full">
              <label>Adresse détaillée</label>
              <textarea rows={4} value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} />
            </div>
            <div className="form-field full">
              <label>Point de repère</label>
              <input value={form.landmark} onChange={(event) => setForm({ ...form, landmark: event.target.value })} />
            </div>
          </div>
        </div>

        <div className="summary-card">
          <h3>Paiement NatCash</h3>
          <div className="notice-box">
            Numéro NatCash du destinataire : <strong>{NATCASH_NUMBER}</strong>
          </div>
          <div className="summary-line"><span>Sous-total</span><strong>{formatCurrency(subtotal)}</strong></div>
          <div className="summary-line"><span>Livraison</span><strong>{formatCurrency(shipping)}</strong></div>
          <div className="summary-line"><span>Montant total</span><strong>{formatCurrency(total)}</strong></div>
          <div className="summary-line"><span>Référence</span><strong>{reference}</strong></div>
          <div className="form-field" style={{ marginTop: 14 }}>
            <label>Référence NatCash</label>
            <input value={form.paymentReference} onChange={(event) => setForm({ ...form, paymentReference: event.target.value })} />
          </div>
          <div style={{ marginTop: 18 }}>
            <button type="button" className="primary-button" style={{ width: '100%' }} onClick={onSubmit}>
              Soumettre la preuve
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
