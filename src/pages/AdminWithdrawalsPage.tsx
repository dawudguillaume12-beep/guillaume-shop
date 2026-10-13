const AdminWithdrawalsPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Retraits</h1>
          <p>Validation des demandes de retrait.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Demandes en attente</h3>
          <div className="table-list">
            <div className="table-row"><span>500 HTG</span><span>Guillaume</span><span>43367217</span><span className="tag warning">En attente</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWithdrawalsPage;
