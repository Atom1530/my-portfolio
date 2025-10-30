import { motion } from 'framer-motion';
import { User, Zap, Code2 } from 'lucide-react';
import { PortfolioData } from '@/types';
import styles from './AboutSection.module.css';

interface AboutProps {
  data: PortfolioData;
}

export const AboutSection = ({ data }: AboutProps) => {
  return (
    <section id="about" className={styles.about}>
      <div className="section-container">
        <div className="section-header">
          <User className="section-icon" />
          <h2 className="section-title">About Me</h2>
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
              <h3>Core Strengths</h3>
            </div>
            <div className={styles.badges}>
              {data.strengths.map((strength, i) => (
                <span key={i} className={styles.badge}>{strength}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <Code2 className={styles.icon} />
              <h3>Technical Skills</h3>
            </div>
            <div className={styles.badges}>
              {data.skills.map((skill, i) => (
                <span key={i} className={styles.badgeSkill}>{skill.name}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
