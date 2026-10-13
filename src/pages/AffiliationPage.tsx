const AffiliationPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Programme d’affiliation</h1>
          <p>Partagez votre code et gagnez des commissions sur les commandes validées.</p>
        </div>
      </div>

      <div className="page-body general-grid">
        <div className="info-card">
          <h3>Votre code</h3>
          <p style={{ fontSize: '1.8rem', fontWeight: 800 }}>GWD-HT-204</p>
          <p className="muted">Lien de partage : https://guillaume-shop-boutique.lovable.app/?ref=GWD-HT-204</p>
        </div>
        <div className="info-card">
          <h3>Statistiques</h3>
          <p className="muted">Clics enregistrés : 184</p>
          <p className="muted">Commandes attribuées : 8</p>
          <p className="muted">Commissions en attente : 800 HTG</p>
        </div>
        <div className="info-card">
          <h3>Retraits</h3>
          <p className="muted">Solde disponible : 1200 HTG</p>
          <p className="muted">Seuil minimal : 500 HTG</p>
        </div>
      </div>
    </>
  );
};

export default AffiliationPage;
