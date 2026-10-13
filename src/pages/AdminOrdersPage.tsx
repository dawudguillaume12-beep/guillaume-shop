const AdminOrdersPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Commandes</h1>
          <p>Gestion des commandes et paiements.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Liste des commandes</h3>
          <div className="table-list">
            <div className="table-row"><span>GS-20261013-001</span><span>Guillaume</span><span>7520 HTG</span><span className="tag">Confirmé</span></div>
            <div className="table-row"><span>GS-20261010-112</span><span>Luc</span><span>4300 HTG</span><span className="tag warning">En vérification</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrdersPage;
