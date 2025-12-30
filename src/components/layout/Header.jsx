const Header = () => {
  return (
    <header className="site-header">
      <nav className="nav-container">
        <div className="logo">
          <span>Tech</span>Estate
        </div>

        <ul className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Marketing Digital</a></li>
          <li><a href="#">Immobilier</a></li>
          <li><a href="#">Compétences</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
