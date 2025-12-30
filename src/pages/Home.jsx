import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Solutions Digitales & Immobilières
            <span> modernes et performantes</span>
          </h1>

          <p>
            Stratégie digitale, développement web et mise en valeur de projets
            immobiliers grâce à des technologies modernes.
          </p>

          <div className="hero-actions">
            <a href="#" className="btn primary">Découvrir</a>
            <a href="#" className="btn secondary">Contact</a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
