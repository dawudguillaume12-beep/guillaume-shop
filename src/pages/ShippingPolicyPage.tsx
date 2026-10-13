const ShippingPolicyPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Politique de livraison</h1>
          <p>Informations sur la livraison en Haïti.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="info-card">
          <p className="muted">Les commandes sont préparées dans les meilleurs délais. Les coûts de livraison varient selon la commune et le département. En cas de destination non configurée, le système affichera des frais à confirmer avant validation définitive.</p>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicyPage;
