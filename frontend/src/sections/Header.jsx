import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

export const Header = ({ activeSection, scrollToSection, personalName }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <Code2 className="logo-icon" />
          <span className="logo-text">{personalName}</span>
        </div>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link-mobile ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};