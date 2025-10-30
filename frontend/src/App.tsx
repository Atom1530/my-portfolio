import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';
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
      
      <main>
        <HeroSection 
          data={portfolioData.personal} 
          onNavigate={scrollToSection}
        />
        
        <AboutSection data={portfolioData} />
        
        <ProjectsSection />
        
        <ExperienceSection />
        
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
