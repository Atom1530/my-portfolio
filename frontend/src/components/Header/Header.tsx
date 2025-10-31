import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  personalName: string;
}

export const Header = ({
  activeSection,
  onNavigate,
  personalName,
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [now, setNow] = useState(() => new Date());
  const reduce = useReducedMotion();

  const navLinks = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  // Прокрутка: тень/компакт и прогресс-бар
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 4);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Часы/дата – обновляем раз в минуту
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const dateLabel = useMemo(() => {
    // пример: Thu, Oct 30 • 15:12
    return new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(now);
  }, [now]);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={reduce ? false : { y: -100, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      role="banner"
    >
      {/* Прогресс-бар прокрутки */}
      <span
        className={styles.progress}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className={styles.headerContent}>
        {/* Логотип + дата */}
        <button
          className={styles.logo}
          onClick={() => handleNavClick("home")}
          aria-label="Go to home"
        >
          <Code2 className={styles.logoIcon} aria-hidden="true" />
          <span className={styles.logoText}>{personalName}</span>
          <span className={styles.dateChip} aria-label="Current date and time">
            {dateLabel}
          </span>
        </button>

        {/* Desktop nav */}
        <nav className={styles.navDesktop} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`${styles.navLink} ${
                activeSection === link.id ? styles.active : ""
              }`}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.label}
              <span className={styles.navUnderline} />
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-nav"
            className={styles.navMobile}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`${styles.navLinkMobile} ${
                  activeSection === link.id ? styles.active : ""
                }`}
                initial={reduce ? false : { x: -24, opacity: 0 }}
                animate={reduce ? undefined : { x: 0, opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: reduce ? 0 : index * 0.06,
                }}
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
