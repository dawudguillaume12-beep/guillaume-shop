import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Guillaume-Shop</h3>
          <p>Votre boutique en ligne pensée pour le marché haïtien.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/categories">Catégories</Link></li>
            <li><Link to="/flash-sales">Ventes flash</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>À propos</h4>
          <ul>
            <li><Link to="/shipping-policy">Livraison</Link></li>
            <li><Link to="/returns-policy">Retours</Link></li>
            <li><Link to="/privacy-policy">Confidentialité</Link></li>
            <li><Link to="/terms">Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>📍 Port-au-Prince, Haïti</li>
            <li>📞 +509 XX XX XX XX</li>
            <li>✉️ contact@guillaume-shop.ht</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Guillaume-Shop — Tous droits réservés.</div>
    </footer>
  );
};

export default Footer;
