import { motion } from 'framer-motion';
import { portfolioData } from '../../data';
import styles from './ExperienceSection.module.css';

export const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-container">
        <div className="section-header">
          <svg
            className="section-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className={styles.timeline}>
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.marker}></div>
              
              <div className={`${styles.cardHeader} card-header`}>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.organization}>{item.organization}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>
              </div>

              <div className={`${styles.cardContent} card-content`}>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
