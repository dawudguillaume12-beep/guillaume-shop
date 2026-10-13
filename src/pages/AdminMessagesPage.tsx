const AdminMessagesPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Messages</h1>
          <p>Support client et conversations en attente.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="table-card">
          <h3>Conversations</h3>
          <div className="table-list">
            <div className="table-row"><span>Client 01</span><span>Commande</span><span>3 messages</span><span className="tag">Ouvert</span></div>
            <div className="table-row"><span>Client 02</span><span>Retard</span><span>1 message</span><span className="tag warning">En attente</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMessagesPage;
