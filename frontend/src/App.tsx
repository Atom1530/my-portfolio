import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { portfolioData } from './data';
import styles from './App.module.css';

export const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.app}>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        personalName={portfolioData.personal.name}
      />

      {/* Hero Section Placeholder */}
      <section id="home" className={styles.section}>
        <div className="section-container">
          <h1>Hero Section</h1>
          <p>Portfolio for {portfolioData.personal.name}</p>
        </div>
      </section>

      {/* About Section Placeholder */}
      <section id="about" className={styles.section}>
        <div className="section-container">
          <h2>About Me</h2>
          <p>{portfolioData.skills.length} skills</p>
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section id="projects" className={styles.section}>
        <div className="section-container">
          <h2>Projects</h2>
          <p>{portfolioData.projects.length} projects</p>
        </div>
      </section>

      {/* Experience Section Placeholder */}
      <section id="experience" className={styles.section}>
        <div className="section-container">
          <h2>Experience</h2>
          <p>{portfolioData.experience.length} experiences</p>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className={styles.section}>
        <div className="section-container">
          <h2>Contact</h2>
          <p>{portfolioData.personal.email}</p>
        </div>
      </section>
    </div>
  );
};
