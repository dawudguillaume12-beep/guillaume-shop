const WishlistPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Favoris</h1>
          <p>Vos produits enregistrés pour plus tard.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="notice-box">Aucun favori pour le moment. Ajoutez quelques produits pour créer votre liste.</div>
      </div>
    </>
  );
};

export default WishlistPage;
