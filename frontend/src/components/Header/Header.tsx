import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  personalName: string;
}

export const Header = ({ activeSection, onNavigate, personalName }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.headerContent}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Code2 className={styles.logoIcon} />
          <span className={styles.logoText}>{personalName}</span>
        </motion.div>

        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? <X key="close" /> : <Menu key="menu" />}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className={styles.navMobile}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`${styles.navLinkMobile} ${activeSection === link.id ? styles.active : ''}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
