const AdminStaffPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Équipe</h1>
          <p>Gestion des membres de l’équipe et rôles.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Membres</h3>
          <div className="table-list">
            <div className="table-row"><span>Guillaume Dawudson</span><span>Super admin</span><span>Actif</span><span className="tag">Validé</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminStaffPage;
