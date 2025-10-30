import { useEffect, useState } from "react";
import "./App.css";
import { portfolioData } from "./mockData";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "contact"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="portfolio-container">
        <Header 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          personalName={portfolioData.personal.name}
        />
        <Hero data={portfolioData} scrollToSection={scrollToSection} />
        <About data={portfolioData} />
        <Projects data={portfolioData} />
        <Experience data={portfolioData} />
        <Contact data={portfolioData} />
        <Footer 
          personalName={portfolioData.personal.name} 
          githubUrl={portfolioData.social.github}
        />
      </div>
    </div>
  );
}

export default App;
