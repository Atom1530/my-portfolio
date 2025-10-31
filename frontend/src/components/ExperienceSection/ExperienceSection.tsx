import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "../../data";
import styles from "./ExperienceSection.module.css";

export const ExperienceSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      {/* ambient фон без швов */}
      <div className={styles.fadeTop} />
      <div className={styles.backdrop} />
      <div className={styles.beams} />
      <div className={styles.noise} />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 id="experience-title" className={styles.sectionTitle}>
            Experience
          </h2>
        </div>

        <div className={styles.timeline} role="list">
          {portfolioData.experience.map((item, index) => (
            <motion.article
              key={item.id}
              className={styles.card}
              role="listitem"
              initial={reduce ? false : { opacity: 0, x: -40 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.marker} aria-hidden="true" />

              <header className={styles.cardHeader}>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.organization}>
                    {item.organization}
                  </span>
                  <span className={styles.period}>{item.period}</span>
                </div>
              </header>

              <div className={styles.cardContent}>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
