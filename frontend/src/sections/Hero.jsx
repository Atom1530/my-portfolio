import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";

export const Hero = ({ data, scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src={data.personal.avatar} alt={data.personal.name} />
        </div>
        <h1 className="hero-title">{data.personal.name}</h1>
        <p className="hero-subtitle">{data.personal.title}</p>
        <p className="hero-subtitle-secondary">{data.personal.subtitle}</p>
        <p className="hero-bio">{data.personal.bio}</p>
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
  );
};