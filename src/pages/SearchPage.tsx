import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';

const SearchPage = () => {
  const [params] = useSearchParams();
  const query = (params.get('q') ?? '').toLowerCase();

  const filtered = products.filter((product) => {
    if (!query) return true;
    return product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
  });

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Résultats de recherche</h1>
          <p>{query ? `Recherche : “${query}”` : 'Tous les produits'}</p>
        </div>
      </div>

      <div className="page-body">
        <div className="products-grid">
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.images[0].url} alt={product.images[0].alt} />
              </div>
              <div className="product-body">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <div className="product-price-row">
                  <span className="current-price">{product.promoPrice ?? product.price} HTG</span>
                </div>
                <Link to={`/product/${product.slug}`} className="primary-button small-button">Voir</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
