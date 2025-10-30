import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";

interface FooterProps {
  personalName: string;
  githubUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ personalName, githubUrl }) => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <motion.p 
          className="footer-text"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} {personalName}. Built with 
          <motion.span
            className="inline-flex items-center mx-1"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Heart className="inline h-4 w-4 text-red-500 fill-current" />
          </motion.span>
          and React + TypeScript.
        </motion.p>
        <motion.div 
          className="footer-links"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};