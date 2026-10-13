const AdminHomePage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Administration</h1>
          <p>Tableau de bord et gestion de la boutique.</p>
        </div>
      </div>

      <div className="page-body admin-grid">
        <div className="stat-card"><h3>Chiffre d'affaires</h3><strong>1 245 000 HTG</strong></div>
        <div className="stat-card"><h3>Commandes du jour</h3><strong>23</strong></div>
        <div className="stat-card"><h3>À vérifier</h3><strong>6</strong></div>
        <div className="stat-card"><h3>Clients</h3><strong>884</strong></div>
        <div className="stat-card"><h3>Stock faible</h3><strong>12</strong></div>
        <div className="stat-card"><h3>Produits épuisés</h3><strong>3</strong></div>
        <div className="stat-card"><h3>Commissions</h3><strong>12 000 HTG</strong></div>
        <div className="stat-card"><h3>Retraits</h3><strong>4</strong></div>
      </div>
    </>
  );
};

export default AdminHomePage;
