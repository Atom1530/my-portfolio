import styles from "./Footer.module.css";
import { portfolioData } from "../../data";

export const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { key: "github", href: portfolioData?.social?.github, label: "GitHub" },
    {
      key: "linkedin",
      href: portfolioData?.social?.linkedin,
      label: "LinkedIn",
    },
    { key: "twitter", href: portfolioData?.social?.twitter, label: "Twitter" },
  ].filter((s) => s.href && s.href !== "#");

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copy}>
            © {year} {portfolioData.personal.name}. All rights reserved.
          </p>

          {socials.length > 0 && (
            <ul className={styles.links} role="list" aria-label="Social links">
              {socials.map(({ key, href, label }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.subline}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.small}>
            Built for the web •{" "}
            <a
              className={styles.mail}
              href={`mailto:${portfolioData.personal.email}`}
            >
              {portfolioData.personal.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
