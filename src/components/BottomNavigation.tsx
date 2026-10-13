import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency } from '../utils/format';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.images[0]?.url} alt={product.images[0]?.alt ?? product.name} />
      </div>
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-price-row">
          <span className="current-price">{formatCurrency(product.promoPrice ?? product.price)}</span>
          {product.promoPrice && <span className="old-price">{formatCurrency(product.price)}</span>}
        </div>
        <div className="product-meta">
          <span>{product.stock} en stock</span>
          <span>{product.colors.length} couleurs</span>
        </div>
        <Link to={`/product/${product.slug}`} className="primary-button small-button">Voir le produit</Link>
      </div>
    </article>
  );
};

export default ProductCard;
