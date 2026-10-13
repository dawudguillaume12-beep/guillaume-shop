import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Header = () => {
  const navigate = useNavigate();
  const { cart, user } = useStore();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Accueil Guillaume-Shop">
          <div className="brand-mark">G</div>
          <div>
            <strong>Guillaume-Shop</strong>
            <small>Haïti</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Navigation principale">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/categories">Catégories</NavLink>
          <NavLink to="/flash-sales">Vente Flash</NavLink>
          <NavLink to="/affiliation">Affiliation</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Rechercher un produit"
              aria-label="Recherche"
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  const value = (event.target as HTMLInputElement).value.trim();
                  if (value) navigate(`/search?q=${encodeURIComponent(value)}`);
                }
              }}
            />
          </div>
          <Link to="/wishlist" className="icon-link" aria-label="Favoris">❤</Link>
          <Link to="/cart" className="icon-link cart-link" aria-label="Panier">
            🛒 <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          </Link>
          <Link to={user ? '/account' : '/auth'} className="header-button">
            {user ? user.name : 'Connexion'}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
