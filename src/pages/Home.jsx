import { motion } from "framer-motion";

const skills = [
  {
    name: "PHP",
    description: "Développement backend et WordPress headless.",
  },
  {
    name: "HTML",
    description: "Structure sémantique, accessibilité et SEO.",
  },
  {
    name: "CSS",
    description: "Design moderne, responsive et animations CSS.",
  },
  {
    name: "JavaScript",
    description: "Logique front-end moderne et applications dynamiques.",
  },
];

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
            <a href="#" className="btn primary">
              Découvrir
            </a>
            <a href="#" className="btn secondary">
              Contact
            </a>
          </div>
        </motion.div>
      </section>

      <section className="skills">
        <header className="section-header">
          <h2>Mes Compétences</h2>
          <p>Technologies que je maîtrise pour créer des solutions modernes.</p>
        </header>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
