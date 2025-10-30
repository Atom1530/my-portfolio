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
import "./Projects.css";

interface ProjectsProps {
  data: PortfolioData;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Section Header */}
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

        {/* Projects Grid */}
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-wrapper"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="project-card">
                {/* Image Slider */}
                <div className="slider-wrapper">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    loop={project.images.length > 1}
                    className="project-slider"
                  >
                    {project.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <div className="slide-image">
                          <img 
                            src={image} 
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            loading="lazy"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Status Badge */}
                  <div className="status-badge-wrapper">
                    <Badge className="status-badge">
                      {project.status === "completed" ? "✓ Completed" : 
                       project.status === "in-progress" ? "⚙ In Progress" : "🔨 In Development"}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <CardHeader>
                  <CardTitle className="project-title">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="project-description">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Technologies & Links */}
                <CardContent className="project-footer">
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="tech-tag"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="link-button"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button 
                          size="sm" 
                          className="link-button-primary"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
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