import { motion } from "framer-motion";
import { User, Zap, Code2 } from "lucide-react";
import { PortfolioData } from "../../types";
import styles from "./AboutSection.module.css";

interface AboutProps {
  data: PortfolioData;
}

export const AboutSection = ({ data }: AboutProps) => {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      {/* ambient + fade — в едином стиле с Hero/Contact */}
      <div className={styles.fadeTop} aria-hidden="true" />
      <div className={styles.gradientBg} aria-hidden="true" />
      <div className={styles.beams} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <User className={styles.sectionIcon} />
          <h2 id="about-title" className={styles.sectionTitle}>
            About Me
          </h2>
        </div>

        <div className={styles.grid}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardHeader}>
              <Zap className={styles.icon} />
              <h3 className={styles.cardTitle}>Core Strengths</h3>
            </div>
            <ul className={styles.badges} role="list">
              {data.strengths.map((s, i) => (
                <li key={i} className={styles.badge}>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className={styles.cardHeader}>
              <Code2 className={styles.icon} />
              <h3 className={styles.cardTitle}>Technical Skills</h3>
            </div>
            <ul className={styles.badges} role="list">
              {data.skills.map((skill, i) => (
                <li key={i} className={styles.badgeSkill}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
