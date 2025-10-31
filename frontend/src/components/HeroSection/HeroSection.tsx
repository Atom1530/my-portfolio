import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { PersonalInfo } from "../../types";
import styles from "./HeroSection.module.css";

interface HeroProps {
  data: PersonalInfo;
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ data, onNavigate }: HeroProps) => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.gradientBg}></div>

      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1080),
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1080),
              transition: {
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.avatar}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileHover={{ scale: 1.1, rotateY: 15, rotateX: 15 }}
        >
          <motion.div
            className={styles.avatarGlow}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <img src={data.avatar} alt={data.name} />
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {data.name}
          <motion.span
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className={styles.sparkle} />
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className={styles.subtitle}>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Specialist",
                2000,
                "Team Leader",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={styles.typing}
            />
          </div>
          <p className={styles.subtitleSecondary}>{data.subtitle}</p>
        </motion.div>

        <motion.p
          className={styles.bio}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {data.bio}
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className={styles.btnPrimary}
            onClick={() => onNavigate("projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ChevronRight className={styles.btnIcon} />
          </motion.button>

          <motion.button
            className={styles.btnSecondary}
            onClick={() => onNavigate("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
