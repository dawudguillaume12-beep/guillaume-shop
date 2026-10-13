const FAQPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>FAQ</h1>
          <p>Réponses aux questions fréquentes.</p>
        </div>
      </div>

      <div className="page-body general-grid">
        <div className="info-card">
          <h3>Comment payer ?</h3>
          <p className="muted">Le paiement se fait via NatCash, avec vérification manuelle par l’équipe.</p>
        </div>
        <div className="info-card">
          <h3>Quels sont les délais ?</h3>
          <p className="muted">Les délais varient selon la zone, mais l’équipe fournit des estimations et des mises à jour.</p>
        </div>
        <div className="info-card">
          <h3>Peut-on modifier une commande ?</h3>
          <p className="muted">Les modifications se font uniquement avant validation ou selon les conditions de l’admin.</p>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
