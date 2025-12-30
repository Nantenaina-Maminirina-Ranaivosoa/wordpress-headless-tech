const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Branding */}
        <section className="footer-brand">
          <h2>TechEstate</h2>
          <p>
            Solutions digitales et immobilières modernes,
            pensées pour la performance et la croissance.
          </p>
        </section>

        {/* Navigation */}
        <nav className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Marketing Digital</a></li>
            <li><a href="#">Immobilier</a></li>
            <li><a href="#">Compétences</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="footer-contact">
          <h3>Contact</h3>
          <p>Email : contact@nantenaina.com</p>
          <p>Téléphone : +261 32 000 000</p>
        </section>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Nantenaina — Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
