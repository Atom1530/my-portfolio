import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Briefcase, Github, ExternalLink } from "lucide-react";

export const Projects = ({ data }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <Briefcase className="section-icon" />
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {data.projects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-status">
                  <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                    {project.status === "completed" ? "Completed" : "In Progress"}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="project-title">{project.title}</CardTitle>
                <CardDescription className="project-description">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="project-links">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="project-link-btn">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="project-link-btn-primary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};