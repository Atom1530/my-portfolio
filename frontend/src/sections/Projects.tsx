import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Briefcase, Github, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { PortfolioData } from "../types/portfolio";
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectsProps {
  data: PortfolioData;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="section-icon" />
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="project-card">
                <div className="project-images">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={project.images.length > 1}
                    className="image-slider"
                  >
                    {project.images.map((image, i) => (
                      <SwiperSlide key={i}>
                        <img src={image} alt={`${project.title} ${i + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="status-badge">
                    <Badge>
                      {project.status === "completed" ? "✓ Completed" : 
                       project.status === "in-progress" ? "⚙ In Progress" : "🔨 In Dev"}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="tech-list">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4 mr-2" />GitHub
                        </Button>
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="btn-live">
                          <ExternalLink className="h-4 w-4 mr-2" />Live
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};