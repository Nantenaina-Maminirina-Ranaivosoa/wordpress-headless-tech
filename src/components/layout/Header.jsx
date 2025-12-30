import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-container">
        <div className="logo">
          <span>Tech</span>Estate
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Marketing Digital</a>
          </li>
          <li>
            <a href="#">Immobilier</a>
          </li>
          <li>
            <a href="#">Compétences</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button
          className="burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              className="close"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>

            <ul>
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">Marketing Digital</a>
              </li>
              <li>
                <a href="#">Immobilier</a>
              </li>
              <li>
                <a href="#">Compétences</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
