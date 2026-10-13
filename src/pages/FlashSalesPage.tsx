import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const FlashSalesPage = () => {
  const flashItems = products.filter((product) => product.isFlash || product.promoPrice);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Ventes flash</h1>
          <p>Des promotions limitées dans le temps.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="notice-box">
          Les offres sont affichées à titre de démonstration fictive. Les prix et les ventes peuvent être configurés dans l’admin lors du déploiement réel.
        </div>
        <div className="products-grid">
          {flashItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <Link to="/" className="secondary-button">Retour à l’accueil</Link>
        </div>
      </div>
    </>
  );
};

export default FlashSalesPage;
