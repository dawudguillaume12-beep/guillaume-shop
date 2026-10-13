import { useParams } from 'react-router-dom';
import { getProductBySlug } from '../context/StoreContext';
import { useStore } from '../context/StoreContext';
import { formatCurrency } from '../utils/format';

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug ?? '');
  const { addToCart, toggleWishlist, wishlist } = useStore();

  if (!product) {
    return <div className="page-body"><div className="info-card">Produit introuvable.</div></div>;
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{product.name}</h1>
          <p>{product.category}</p>
        </div>
      </div>

      <div className="page-body product-detail">
        <div>
          <div className="gallery-main">
            <img src={product.images[0]?.url} alt={product.images[0]?.alt ?? product.name} />
          </div>
          <div className="gallery-thumbs">
            {product.images.map((image) => (
              <img key={image.url} src={image.url} alt={image.alt} className="active" />
            ))}
          </div>
        </div>

        <div className="product-summary">
          <div className="price-block">
            <span className="big-price">{formatCurrency(product.promoPrice ?? product.price)}</span>
            {product.promoPrice && <span className="old-price">{formatCurrency(product.price)}</span>}
          </div>

          <div className="meta-row">
            <span>SKU: {product.sku}</span>
            <span>Stock: {product.stock}</span>
          </div>

          <p>{product.description}</p>

          <div className="variant-row">
            <strong>Couleurs</strong>
            <div className="swatch-list">
              {product.colors.map((color) => (
                <button key={color} className="swatch active" type="button">{color}</button>
              ))}
            </div>
          </div>

          <div className="variant-row">
            <strong>Tailles</strong>
            <div className="swatch-list">
              {product.sizes.map((size) => (
                <button key={size} className="swatch" type="button">{size}</button>
              ))}
            </div>
          </div>

          <div className="hero-actions" style={{ marginTop: 18 }}>
            <button className="primary-button" type="button" onClick={() => addToCart(product, product.sizes[0], product.colors[0])}>
              Ajouter au panier
            </button>
            <button className="secondary-button" type="button" onClick={() => toggleWishlist(product.id)}>
              {wishlist.includes(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
