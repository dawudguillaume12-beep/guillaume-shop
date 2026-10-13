import { adminOrderStatusClass, adminOrderStatusLabel, adminOrders } from '../lib/admin';

const AdminOrdersPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Commandes</h1>
          <p>Gestion des commandes et paiements NatCash.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Liste des commandes</h3>
          <div className="table-list">
            <div className="table-row">
              <span><strong>Référence</strong></span>
              <span><strong>Client</strong></span>
              <span><strong>Montant</strong></span>
              <span><strong>Statut</strong></span>
            </div>

            {adminOrders.map((order) => (
              <div key={order.id} className="table-row">
                <span>{order.reference}</span>
                <span>{order.customer}</span>
                <span>{order.total.toLocaleString('fr-FR')} HTG</span>
                <span className={`tag ${adminOrderStatusClass[order.status]}`}>{adminOrderStatusLabel[order.status]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="table-card" style={{ marginTop: 20 }}>
          <h3>Vérification de paiement</h3>
          {adminOrders.map((order) => (
            <div key={`${order.id}-detail`} style={{ padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
              <strong>{order.reference}</strong>
              <div className="muted">Client: {order.customer}</div>
              <div className="muted">Téléphone: {order.phone}</div>
              <div className="muted">Référence NatCash: {order.natcashReference}</div>
              <div className="muted">Preuve: {order.proofLabel}</div>
              <div className="muted">Note: {order.note}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                <button type="button" className="primary-button small-button">Valider</button>
                <button type="button" className="secondary-button small-button">Rejeter</button>
                <button type="button" className="ghost-button small-button">Préparer</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminOrdersPage;
