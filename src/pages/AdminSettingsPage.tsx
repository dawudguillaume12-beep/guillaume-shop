const AdminSettingsPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Paramètres</h1>
          <p>Configuration de la boutique et du commerce.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="form-card">
          <h3>Informations générales</h3>
          <div className="form-grid">
            <div className="form-field"><label>Nom de la boutique</label><input defaultValue="Guillaume-Shop" /></div>
            <div className="form-field"><label>Numéro NatCash</label><input defaultValue="43367217" /></div>
            <div className="form-field full"><label>Message d’annonce</label><textarea rows={3} defaultValue="Livraison rapide en Haïti et paiements sécurisés." /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettingsPage;
