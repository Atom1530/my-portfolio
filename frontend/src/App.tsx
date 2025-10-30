import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { portfolioData } from './data';

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
    <div>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        personalName={portfolioData.personal.name}
      />
      
      <HeroSection 
        data={portfolioData.personal} 
        onNavigate={scrollToSection}
      />
      
      <AboutSection data={portfolioData} />
      
      {/* Projects - Coming soon */}
      <section id="projects" style={{ minHeight: '100vh', padding: '6rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Projects section with Swiper - adding now...</p>
        </div>
      </section>
      
      {/* Experience */}
      <section id="experience" style={{ minHeight: '100vh', padding: '6rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)' }}>
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Experience timeline - adding now...</p>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" style={{ minHeight: '100vh', padding: '6rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="section-container">
          <h2 className="section-title">Contact</h2>
          <p style={{ color: 'var(--text-secondary)' }}>{portfolioData.personal.email}</p>
        </div>
      </section>
    </div>
  );
};
