import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { portfolioData } from '../../data';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ProjectsSection.module.css';

// Normalization functions
const BASE_URL = window.location.origin;
const FALLBACK_IMAGE = `${BASE_URL}/images/projects/placeholder.png`;

const normalizeImages = (project: any) => {
  if (!project.images || !Array.isArray(project.images) || project.images.length === 0) {
    return [FALLBACK_IMAGE];
  }
  return project.images.filter((img: string) => img && img.trim());
};

const normalizeTechs = (project: any) => {
  if (!project.technologies || !Array.isArray(project.technologies)) {
    return [];
  }
  return project.technologies.filter((tech: string) => tech && tech.trim());
};

const normalizeStatus = (status: string) => {
  const statusMap: { [key: string]: { label: string; emoji: string } } = {
    'completed': { label: 'Completed', emoji: '✓' },
    'in-progress': { label: 'In Progress', emoji: '⚙' },
    'in-development': { label: 'In Dev', emoji: '🔨' },
  };
  return statusMap[status] || { label: 'Unknown', emoji: '?' };
};

export const ProjectsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className="section-container">
        <div className="section-header">
          <svg
            className="section-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className={styles.grid}>
          {portfolioData.projects.map((project, index) => {
            const images = normalizeImages(project);
            const techs = normalizeTechs(project);
            const status = normalizeStatus(project.status);
            const hasMultipleImages = images.length > 1;

            return (
              <motion.div
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Status badge */}
                <div className={styles.status}>
                  <span className={styles.statusBadge}>
                    {status.emoji} {status.label}
                  </span>
                </div>

                {/* Image slider */}
                <div className={styles.imageContainer}>
                  {mounted && (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      slidesPerView={1}
                      loop={hasMultipleImages}
                      pagination={hasMultipleImages ? { clickable: true } : false}
                      autoplay={hasMultipleImages ? { delay: 3000, disableOnInteraction: false } : false}
                      className={styles.swiper}
                    >
                      {images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <img
                            src={image}
                            alt={`${project.title} ${imgIndex + 1}`}
                            className={styles.image}
                            loading="lazy"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>

                {/* Card content */}
                <div className={`${styles.cardHeader} card-header`}>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>

                <div className={`${styles.cardContent} card-content`}>
                  <p className={styles.description}>{project.description}</p>

                  {/* Technologies */}
                  {techs.length > 0 && (
                    <div className={styles.techList}>
                      {techs.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className={styles.actions}>
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg
                          className={styles.icon16}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.buttonPrimary}`}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <svg
                          className={styles.icon16}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
