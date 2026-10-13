import { Link } from 'react-router-dom';
import { categories, products } from '../data/mockData';

const CategoriesPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Catégories</h1>
          <p>Parcourez les collections de la boutique.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="category-pills">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.slug}`} className="category-pill">
              <span className="category-dot" style={{ background: category.accent }} />
              {category.name}
            </Link>
          ))}
        </div>

        <div className="products-grid" style={{ marginTop: 24 }}>
          {products.map((product) => (
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

export default CategoriesPage;
