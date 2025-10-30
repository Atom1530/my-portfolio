import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { User, Zap, Target } from "lucide-react";
import { PortfolioData } from "../types/portfolio";
import "./About.css";

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  // Top 6 skills only
  const topSkills = data.skills.slice(0, 6);

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
                <div className="strengths-grid">
                  {data.strengths.map((strength, index) => (
                    <Badge key={index} variant="secondary" className="strength-badge">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="about-card">
              <CardHeader>
                <CardTitle className="card-title">
                  <Target className="card-icon" />
                  Top Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="skills-progress-container">
                  {topSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        />
                      </div>
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