import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { formatCurrency } from '../utils/format';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = cart.length ? 250 : 0;
  const total = subtotal + delivery;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Panier</h1>
          <p>Vérifiez vos articles avant le paiement.</p>
        </div>
      </div>

      <div className="page-body checkout-grid">
        <div className="form-card">
          <h3>Articles</h3>
          {cart.length === 0 ? (
            <div className="notice-box">Votre panier est vide. Ajoutez des produits pour commencer.</div>
          ) : (
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <strong>{item.name}</strong>
                    <div className="muted">{item.size} • {item.color}</div>
                  </div>
                  <div>
                    <div className="qty-controls">
                      <button type="button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span style={{ padding: '0 12px' }}>{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div>
                    <strong>{formatCurrency(item.price * item.quantity)}</strong>
                    <div style={{ textAlign: 'right' }}>
                      <button className="ghost-button small-button" type="button" onClick={() => removeFromCart(item.id)}>Supprimer</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="summary-card">
          <h3>Résumé</h3>
          <div className="summary-line"><span>Sous-total</span><strong>{formatCurrency(subtotal)}</strong></div>
          <div className="summary-line"><span>Livraison</span><strong>{formatCurrency(delivery)}</strong></div>
          <div className="summary-line total"><span>Total</span><strong>{formatCurrency(total)}</strong></div>
          <div style={{ marginTop: 18 }}>
            <Link to="/checkout" className="primary-button" style={{ width: '100%' }}>Procéder au paiement</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
