const AdminCustomersPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Clients</h1>
          <p>Consultation des comptes et informations nécessaires au service.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Utilisateurs</h3>
          <div className="table-list">
            <div className="table-row"><span>Guillaume</span><span>Port-au-Prince</span><span>Actif</span><span className="tag">VIP</span></div>
            <div className="table-row"><span>Luc</span><span>Gonaïves</span><span>Actif</span><span className="tag warning">Nouveau</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCustomersPage;
