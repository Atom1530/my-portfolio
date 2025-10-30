import { portfolioData } from '../../data';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="section-container">
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          
          <div className={styles.links}>
            {portfolioData.social.github && portfolioData.social.github !== '#' && (
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {portfolioData.social.linkedin && portfolioData.social.linkedin !== '#' && (
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {portfolioData.social.twitter && portfolioData.social.twitter !== '#' && (
              <a
                href={portfolioData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="Twitter"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
