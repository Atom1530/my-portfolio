import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = ({ data }) => {
  return (
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
                <span>{data.personal.email}</span>
              </div>
            </div>

            <div className="social-links">
              <a href={data.social.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="social-btn">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="social-btn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="social-btn">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};