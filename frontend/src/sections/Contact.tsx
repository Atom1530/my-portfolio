import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { PortfolioData } from "../types/portfolio";
import "./Contact.css";

interface ContactProps {
  data: PortfolioData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="section-icon" />
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
                  <Button 
                    size="sm" 
                    className="send-btn"
                    onClick={() => window.location.href = `mailto:${data.personal.email}`}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
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
        </motion.div>
      </div>
    </section>
  );
};