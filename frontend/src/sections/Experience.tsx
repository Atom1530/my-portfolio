import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { GraduationCap } from "lucide-react";
import { PortfolioData } from "../types/portfolio";
import "./Experience.css";

interface ExperienceProps {
  data: PortfolioData;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap className="section-icon" />
          <h2 className="section-title">Experience & Education</h2>
        </motion.div>

        <div className="timeline">
          {data.experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                x: 12,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="timeline-card">
                {/* Timeline Dot */}
                <div className="timeline-dot">
                  <div className="timeline-dot-inner" />
                </div>

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
                  <p className="timeline-description">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};