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

const marketingServices = [
  {
    title: "Stratégie Digitale",
    description:
      "Analyse, planification et mise en place de stratégies digitales efficaces.",
  },
  {
    title: "SEO & Visibilité",
    description:
      "Optimisation pour les moteurs de recherche afin d’augmenter la visibilité.",
  },
  {
    title: "Branding & Image",
    description: "Création d’une identité digitale forte et cohérente.",
  },
  {
    title: "Développement Web",
    description: "Sites modernes, performants et adaptés aux besoins métiers.",
  },
];

const realEstateProjects = [
  {
    title: "Résidence Moderne",
    location: "Antananarivo",
    description: "Projet résidentiel moderne avec design contemporain."
  },
  {
    title: "Immeuble Professionnel",
    location: "Centre-ville",
    description: "Espaces professionnels adaptés aux entreprises modernes."
  },
  {
    title: "Complexe Immobilier",
    location: "Zone urbaine",
    description: "Projet immobilier à usage mixte, résidentiel et commercial."
  }
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

      <section className="marketing">
        <header className="section-header">
          <h2>Marketing Digital</h2>
          <p>
            Des solutions digitales pensées pour la performance et la
            croissance.
          </p>
        </header>

        <div className="marketing-grid">
          {marketingServices.map((service, index) => (
            <motion.article
              key={service.title}
              className="marketing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="real-estate">
        <header className="section-header">
          <h2>Immobilier</h2>
          <p>
            Des projets immobiliers pensés pour la valeur, la modernité et la
            performance.
          </p>
        </header>

        <div className="real-estate-grid">
          {realEstateProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="real-estate-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="real-estate-content">
                <h3>{project.title}</h3>
                <span>{project.location}</span>
                <p>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
