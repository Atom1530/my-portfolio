import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { User, Zap, Target } from "lucide-react";

export const About = ({ data }) => {
  return (
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
                {data.strengths.map((strength, index) => (
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
                {data.skills.map((skill, index) => (
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
  );
};