import { Link, useParams } from 'react-router-dom';
import { products } from '../data/mockData';

const CategoryPage = () => {
  const { slug } = useParams();
  const filtered = products.filter((product) => product.category === slug || product.slug.includes(String(slug)));

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{slug ? slug.replace('-', ' ') : 'Catégorie'}</h1>
          <p>Produits sélectionnés pour cette collection.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="products-grid">
          {filtered.length ? filtered.map((product) => (
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
          )) : <div className="info-card">Aucun produit trouvé pour cette catégorie.</div>}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
