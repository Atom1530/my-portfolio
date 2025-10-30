import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { User, Zap, Code2 } from "lucide-react";
import { PortfolioData } from "../types/portfolio";
import "./About.css";

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <User className="section-icon" />
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="about-grid">
          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="about-card">
              <CardHeader>
                <CardTitle className="card-title">
                  <Zap className="card-icon" />
                  Core Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="badges-grid">
                  {data.strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="strength-badge">
                        {strength}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="about-card">
              <CardHeader>
                <CardTitle className="card-title">
                  <Code2 className="card-icon" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="badges-grid">
                  {data.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge className="skill-badge">
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};