import { motion } from "framer-motion";
import { User, Zap, Code2 } from "lucide-react";
import { PortfolioData } from "../../types";
import styles from "./AboutSection.module.css";

interface AboutProps {
  data: PortfolioData;
}

export const AboutSection = ({ data }: AboutProps) => {
  return (
    <section id="about" className={styles.about}>
      {/* ambient + fade, как в Hero/Projects */}
      <div className={styles.fadeTop} />
      <div className={styles.backdrop} />
      <div className={styles.beams} />
      <div className={styles.noise} />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <User className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>About Me</h2>
        </div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.card}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={styles.card}
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
