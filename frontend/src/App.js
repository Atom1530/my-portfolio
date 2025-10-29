import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { portfolioData } from "./mockData";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { 
  Menu, 
  X, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  ChevronRight,
  User,
  Zap,
  Target
} from "lucide-react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-logo">
            <Code2 className="logo-icon" />
            <span className="logo-text">{portfolioData.personal.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link-mobile ${activeSection === link.id ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-avatar">
            <img src={portfolioData.personal.avatar} alt={portfolioData.personal.name} />
          </div>
          <h1 className="hero-title">{portfolioData.personal.name}</h1>
          <p className="hero-subtitle">{portfolioData.personal.title}</p>
          <p className="hero-subtitle-secondary">{portfolioData.personal.subtitle}</p>
          <p className="hero-bio">{portfolioData.personal.bio}</p>
          <div className="hero-buttons">
            <Button onClick={() => scrollToSection("projects")} className="btn-primary">
              View Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" className="btn-secondary">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <User className="section-icon" />
            <h2 className="section-title">About Me</h2>
          </div>
          
          <div className="about-grid">
            <Card className="about-card">
              <CardHeader>
                <CardTitle className="card-title">
                  <Zap className="card-icon" />
                  Core Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="strengths-grid">
                  {portfolioData.strengths.map((strength, index) => (
                    <Badge key={index} variant="secondary" className="strength-badge">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="about-card">
              <CardHeader>
                <CardTitle className="card-title">
                  <Target className="card-icon" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="skills-grid">
                  {portfolioData.skills.map((skill, index) => (
                    <Badge key={index} className="skill-badge">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <Briefcase className="section-icon" />
            <h2 className="section-title">Projects</h2>
          </div>

          <div className="projects-grid">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-status">
                    <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="project-title">{project.title}</CardTitle>
                  <CardDescription className="project-description">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="project-link-btn">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="project-link-btn-primary">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <GraduationCap className="section-icon" />
            <h2 className="section-title">Experience & Education</h2>
          </div>

          <div className="timeline">
            {portfolioData.experience.map((item) => (
              <Card key={item.id} className="timeline-card">
                <CardHeader>
                  <div className="timeline-header">
                    <div>
                      <CardTitle className="timeline-title">{item.title}</CardTitle>
                      <p className="timeline-organization">{item.organization}</p>
                    </div>
                    <Badge variant="secondary" className="timeline-period">
                      {item.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="timeline-description">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <Mail className="section-icon" />
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <Card className="contact-card">
            <CardContent className="contact-content">
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <Separator className="contact-separator" />

              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>{portfolioData.personal.email}</span>
                </div>
              </div>

              <div className="social-links">
                <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="social-btn">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="social-btn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="social-btn">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React.
          </p>
          <div className="footer-links">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;