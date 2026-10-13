const ContactPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Parlez à l’équipe Guillaume-Shop.</p>
        </div>
      </div>

      <div className="page-body checkout-grid">
        <div className="form-card">
          <div className="form-grid">
            <div className="form-field"><label>Nom</label><input defaultValue="Guillaume" /></div>
            <div className="form-field"><label>Email</label><input defaultValue="bonjour@guillaume-shop.ht" /></div>
            <div className="form-field full"><label>Objet</label><input defaultValue="Question sur un produit" /></div>
            <div className="form-field full"><label>Message</label><textarea rows={6} defaultValue="Bonjour, je souhaiterais plus d’informations sur la livraison à Gonaïves." /></div>
          </div>
          <div style={{ marginTop: 16 }}><button className="primary-button" type="button">Envoyer</button></div>
        </div>

        <div className="summary-card">
          <h3>Coordonnées</h3>
          <p className="muted">📍 Port-au-Prince, Haïti</p>
          <p className="muted">📞 +509 00 00 00 00</p>
          <p className="muted">✉️ contact@guillaume-shop.ht</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
