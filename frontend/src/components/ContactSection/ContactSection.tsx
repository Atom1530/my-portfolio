import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "../../data";
import styles from "./ContactSection.module.css";

const isGood = (v?: string) => Boolean(v && v.trim() && v.trim() !== "#");

type Seed = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  s: number;
  dur: number;
};

export const ContactSection = () => {
  const reduce = useReducedMotion();

  const socials = [
    {
      key: "github",
      href: portfolioData?.social?.github,
      label: "GitHub profile",
      text: "GitHub",
      svg: (
        <svg className={styles.icon16} aria-hidden="true" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.558 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0z"
          />
        </svg>
      ),
    },
    {
      key: "linkedin",
      href: portfolioData?.social?.linkedin,
      label: "LinkedIn profile",
      text: "LinkedIn",
      svg: (
        <svg className={styles.icon16} aria-hidden="true" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
          />
        </svg>
      ),
    },
    {
      key: "twitter",
      href: portfolioData?.social?.twitter,
      label: "Twitter profile",
      text: "Twitter",
      svg: (
        <svg className={styles.icon16} aria-hidden="true" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"
          />
        </svg>
      ),
    },
  ].filter((s) => isGood(s.href));

  const W = typeof window !== "undefined" ? window.innerWidth : 1920;
  const H = typeof window !== "undefined" ? window.innerHeight : 1080;

  // генерим сиды один раз
  const seeds = useMemo<Seed[]>(() => {
    const n = reduce ? 40 : 20;
    return Array.from({ length: n }).map(() => ({
      x0: Math.random() * W,
      y0: Math.random() * H,
      x1: Math.random() * W,
      y1: Math.random() * H,
      x2: Math.random() * W,
      y2: Math.random() * H,
      s: Math.random() * 0.5 + 0.5,
      dur: Math.random() * 15 + 25, // 20..30s
    }));
  }, [reduce, W, H]);

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.gradientBg} aria-hidden="true" />

      {/* Звёзды */}
      <div className={styles.particles} aria-hidden="true">
        {seeds.map((p, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            initial={{ x: p.x0, y: p.y0, scale: p.s, opacity: 0.6 }}
            animate={{
              x: [p.x0, p.x1, p.x2],
              y: [p.y0, p.y1, p.y2],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: p.dur,
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 id="contact-title" className={styles.sectionTitle}>
            Contact
          </h2>
        </div>

        <motion.div
          className={styles.wrapper}
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>Get In Touch</h3>
              <p className={styles.subtitle}>
                Feel free to reach out for collaborations, projects, or just to
                say hi!
              </p>
            </div>

            <div className={styles.cardContent}>
              <address className={styles.address}>
                <a
                  href={`mailto:${portfolioData?.personal?.email ?? ""}`}
                  className={styles.emailLink}
                  aria-label="Send an email"
                >
                  <svg
                    className={styles.icon16}
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {portfolioData?.personal?.email}
                </a>
              </address>

              {socials.length > 0 && (
                <ul className={styles.socialLinks} role="list">
                  {socials.map(({ key, href, label, text, svg }) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                        aria-label={label}
                      >
                        {svg}
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
