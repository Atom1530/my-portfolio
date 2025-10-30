import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Briefcase, Github, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PortfolioData } from "../types/portfolio";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Projects.css";

interface ProjectsProps {
  data: PortfolioData;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
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
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="project-card">
                {/* Image Slider */}
                <div className="project-slider-container">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    navigation={true}
                    loop={true}
                    className="project-swiper"
                  >
                    {project.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="project-image-wrapper">
                          <img 
                            src={image} 
                            alt={`${project.title} - Screenshot ${idx + 1}`}
                            className="project-image"
                            loading="lazy"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Status Badge */}
                  <div className="project-status">
                    <Badge 
                      variant={project.status === "completed" ? "default" : "secondary"}
                      className="status-badge"
                    >
                      {project.status === "completed" ? "Completed" : 
                       project.status === "in-progress" ? "In Progress" : "In Development"}
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
                    {project.technologies.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="tech-badge">
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
                        <Button variant="outline" size="sm" className="project-link-btn">
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
                        <Button size="sm" className="project-link-btn-primary">
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