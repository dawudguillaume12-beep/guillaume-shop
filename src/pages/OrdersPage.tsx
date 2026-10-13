import { formatCurrency } from '../utils/format';

const OrdersPage = () => {
  const orders = [
    { ref: 'GS-20261013-001', total: 7520, status: 'En préparation', date: '13/10/2026' },
    { ref: 'GS-20260908-221', total: 5400, status: 'Livrée', date: '08/09/2026' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Historique des commandes</h1>
          <p>Consultez vos achats passés.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Commandes</h3>
          <div className="table-list">
            {orders.map((order) => (
              <div key={order.ref} className="table-row">
                <span>{order.ref}</span>
                <span>{order.date}</span>
                <span>{formatCurrency(order.total)}</span>
                <span className="tag">{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
