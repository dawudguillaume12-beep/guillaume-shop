const AdminProductsPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Produits</h1>
          <p>Créer, modifier et archiver les articles.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Catalogue</h3>
          <div className="table-list">
            <div className="table-row"><span>Sac Étoile Citadelle</span><span>Accessoires</span><span>18</span><span className="tag">Actif</span></div>
            <div className="table-row"><span>Robe Riviera</span><span>Femmes</span><span>7</span><span className="tag warning">Stock faible</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductsPage;
