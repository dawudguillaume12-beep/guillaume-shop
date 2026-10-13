import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/mockData';
import { formatCurrency } from '../utils/format';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const flashProducts = products.filter((product) => product.isFlash || product.promoPrice).slice(0, 4);

  return (
    <>
      <section className="container section hero">
        <div className="hero-copy">
          <div className="badge-box">Nouvelle collection</div>
          <h1>Style haïtien, qualité mondiale.</h1>
          <p>
            Découvrez des produits modernes pour le quotidien, les cadeaux, la mode, les accessoires et les essentiels de beauté.
          </p>
          <div className="hero-actions">
            <Link to="/categories" className="primary-button">Voir les catégories</Link>
            <Link to="/flash-sales" className="secondary-button">Ventes flash</Link>
          </div>
        </div>

        <div className="hero-panel">
          <span className="feature-tag">Livraison rapide</span>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
            alt="Modèle mode"
          />
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Catégories populaires</h2>
          <Link to="/categories" className="section-link">Tout voir</Link>
        </div>
        <div className="category-pills">
          {categories.slice(0, 8).map((category) => (
            <Link key={category.id} to={`/category/${category.slug}`} className="category-pill">
              <span className="category-dot" style={{ background: category.accent }} />
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Nouveautés</h2>
          <Link to="/categories" className="section-link">Découvrir</Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Meilleures ventes</h2>
          <Link to="/search" className="section-link">Explorer</Link>
        </div>
        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Promotions</h2>
          <Link to="/flash-sales" className="section-link">Tout afficher</Link>
        </div>
        <div className="general-grid">
          {flashProducts.map((product) => (
            <div key={product.id} className="info-card">
              <div className="badge-box">-{Math.round(((product.price - (product.promoPrice ?? product.price)) / product.price) * 100)}%</div>
              <h3>{product.name}</h3>
              <p className="muted">À partir de {formatCurrency(product.promoPrice ?? product.price)}</p>
              <Link to={`/product/${product.slug}`} className="primary-button small-button">Voir l'offre</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Ventes flash</h2>
          <Link to="/flash-sales" className="section-link">Accéder</Link>
        </div>
        <div className="products-grid">
          {flashProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Produits recommandés</h2>
          <Link to="/search" className="section-link">Voir plus</Link>
        </div>
        <div className="products-grid">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Suggestions personnalisées</h2>
          <span className="section-link">Pour vous</span>
        </div>
        <div className="hero-mini-grid">
          <div className="mini-card">
            <strong>Style femme</strong>
            <span className="muted">Robe légère, sac chic, sandales et bijoux.</span>
          </div>
          <div className="mini-card">
            <strong>Style homme</strong>
            <span className="muted">Ensembles premium, accessoires et chaussures.</span>
          </div>
          <div className="mini-card">
            <strong>Beauté</strong>
            <span className="muted">Parfums, soins et articles de routine.</span>
          </div>
          <div className="mini-card">
            <strong>Maison & accessoires</strong>
            <span className="muted">Sacs, petits essentiels et détails pratiques.</span>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Avantages de la boutique</h2>
        </div>
        <div className="general-grid">
          <div className="info-card">
            <h3>Livraison en Haïti</h3>
            <p className="muted">Suivi simple, délais clairs et frais adaptés selon la destination.</p>
          </div>
          <div className="info-card">
            <h3>Paiement NatCash</h3>
            <p className="muted">Paiement manuel simple et sécurisé, avec vérification avant confirmation.</p>
          </div>
          <div className="info-card">
            <h3>Programme ambassadeur</h3>
            <p className="muted">Gagnez de la commission sur les commandes validées.</p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Questions fréquentes</h2>
          <Link to="/faq" className="section-link">Voir FAQ</Link>
        </div>
        <div className="general-grid">
          <div className="info-card">
            <h3>Quels sont les délais de livraison ?</h3>
            <p className="muted">En général, de 2 à 7 jours ouvrés selon la zone.</p>
          </div>
          <div className="info-card">
            <h3>Comment payer ?</h3>
            <p className="muted">Par transfert NatCash, suivi d’une preuve de paiement.</p>
          </div>
          <div className="info-card">
            <h3>Peut-on retourner un article ?</h3>
            <p className="muted">Oui, selon les règles définies dans la politique de retour.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
