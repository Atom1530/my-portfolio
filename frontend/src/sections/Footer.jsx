import { Github } from "lucide-react";

export const Footer = ({ personalName, githubUrl }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} {personalName}. Built with React.
        </p>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};