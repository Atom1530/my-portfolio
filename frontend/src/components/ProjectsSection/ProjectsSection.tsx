import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { portfolioData } from "../../data";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ProjectsSection.module.css";

// относительный путь ок для CRA/Vite
const FALLBACK_IMAGE = "/images/projects/placeholder.png";

const isNonEmpty = (v?: string) => Boolean(v && v.trim() && v.trim() !== "#");

const normalizeImages = (project: any) => {
  if (!Array.isArray(project?.images) || project.images.length === 0) {
    return [FALLBACK_IMAGE];
  }
  const imgs = project.images.filter((img: string) => isNonEmpty(img));
  return imgs.length ? imgs : [FALLBACK_IMAGE];
};

const normalizeTechs = (project: any) =>
  Array.isArray(project?.technologies)
    ? project.technologies.filter((t: string) => isNonEmpty(t))
    : [];

const normalizeStatus = (status: string) => {
  const map: Record<string, { label: string; emoji: string }> = {
    completed: { label: "Completed", emoji: "✓" },
    "in-progress": { label: "In Progress", emoji: "⚙" },
    "in-development": { label: "In Dev", emoji: "🔨" },
  };
  return map[status] || { label: "Unknown", emoji: "?" };
};

export const ProjectsSection = () => {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className={styles.section}>
      {/* ambient background layers */}
      <div className={styles.backdrop} />
      <div className={styles.beams} />
      <div className={styles.noise} />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projects</h2>
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
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* status */}
                <div className={styles.status}>
                  <span className={styles.statusBadge}>
                    {status.emoji} {status.label}
                  </span>
                </div>

                {/* media */}
                <div className={styles.imageContainer}>
                  {mounted && (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      slidesPerView={1}
                      loop={hasMultipleImages}
                      pagination={
                        hasMultipleImages ? { clickable: true } : false
                      }
                      autoplay={
                        hasMultipleImages && !reduce
                          ? { delay: 3000, disableOnInteraction: false }
                          : false
                      }
                      className={styles.swiper}
                    >
                      {images.map((image: string, i: number) => (
                        <SwiperSlide key={i}>
                          <img
                            src={image}
                            alt={`${project.title} ${i + 1}`}
                            className={styles.image}
                            loading="lazy"
                          />
                          <div className={styles.imageOverlay} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>

                {/* body */}
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>

                <div className={styles.cardContent}>
                  <p className={styles.description}>{project.description}</p>

                  {!!techs.length && (
                    <div className={styles.techList}>
                      {techs.map((t: string) => (
                        <span key={t} className={styles.techBadge}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.actions}>
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.githubButton}`}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg
                          className={styles.icon16}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.6-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.83 1.1.83 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0Z" />
                        </svg>
                        GitHub
                      </a>
                    )}

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.buttonPrimary}`}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <svg
                          className={styles.icon16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
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
