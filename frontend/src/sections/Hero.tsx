import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { PortfolioData } from "../types/portfolio";
import "./Hero.css";

interface HeroProps {
  data: PortfolioData;
  scrollToSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ data, scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      {/* Animated Gradient Background */}
      <div className="hero-gradient-bg"></div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Avatar with 3D Effect */}
        <motion.div 
          className="hero-avatar"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          whileHover={{ 
            scale: 1.1,
            rotateY: 15,
            rotateX: 15,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="avatar-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <img src={data.personal.avatar} alt={data.personal.name} />
        </motion.div>

        {/* Animated Name */}
        <motion.h1 
          className="hero-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {data.personal.name}
          <motion.span
            className="sparkle-icon"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="inline ml-2" size={32} />
          </motion.span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="hero-subtitle typing-container">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'React Specialist',
                2000,
                'Team Leader',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>
          <p className="hero-subtitle-secondary">{data.personal.subtitle}</p>
        </motion.div>

        {/* Bio with Fade In */}
        <motion.p 
          className="hero-bio"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {data.personal.bio}
        </motion.p>

        {/* Animated Buttons */}
        <motion.div 
          className="hero-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection("projects")} 
              className="btn-primary"
            >
              View Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection("contact")} 
              variant="outline" 
              className="btn-secondary"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};