import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { GraduationCap } from "lucide-react";

export const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <GraduationCap className="section-icon" />
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="timeline">
          {data.experience.map((item) => (
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
  );
};