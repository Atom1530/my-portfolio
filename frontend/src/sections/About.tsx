import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { User, Zap, Target } from "lucide-react";
import { PortfolioData } from "../types/portfolio";
import "./About.css";

interface AboutProps {
  data: PortfolioData;
}

const SkillProgressBar = ({ skill, index }: { skill: { name: string; level?: number }; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      className="skill-progress-item"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="skill-progress-header">
        <span className="skill-name">{skill.name}</span>
        <motion.span 
          className="skill-percentage"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level || 85}%
        </motion.span>
      </div>
      <div className="skill-progress-bar">
        <motion.div
          className="skill-progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level || 85}%` } : {}}
          transition={{ 
            delay: index * 0.1 + 0.3, 
            duration: 1, 
            ease: "easeOut" 
          }}
        >
          <motion.div
            className="skill-progress-glow"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

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
          {/* Core Strengths Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="about-card strength-card">
              <CardHeader>
                <CardTitle className="card-title">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Zap className="card-icon" />
                  </motion.div>
                  Core Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="strengths-grid">
                  {data.strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
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

          {/* Technical Skills Card with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="about-card skills-card">
              <CardHeader>
                <CardTitle className="card-title">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Target className="card-icon" />
                  </motion.div>
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="skills-progress-container">
                  {data.skills.slice(0, 8).map((skill, index) => (
                    <SkillProgressBar key={index} skill={skill} index={index} />
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