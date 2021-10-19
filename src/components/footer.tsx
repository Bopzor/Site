import Link from 'next/link';

import Github from '../icons/github.svg';
import Linkedin from '../icons/linkedin.svg';
import Mail from '../icons/mail.svg';
import { Project } from '../types';

import styles from './footer.module.css';

type FooterProps = {
  projects: (Project & { id: string })[];
};

const Footer: React.FC<FooterProps> = ({ projects }) => (
  <footer id="footer" className={styles.footer}>
    <section>
      <h3>Liens du sites</h3>

      <Link href="#bio">
        <a>
          <h4>À propos de moi</h4>
        </a>
      </Link>

      <Link href="#projects">
        <a>
          <h4>Mes projets</h4>
        </a>
      </Link>
      <ul className={styles.websiteLinks}>
        {projects.map((project) => (
          <li key={project.title}>
            <Link href={`#projects/${project.id}`}>
              <a>{project.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <h3>Autres liens / me contacter</h3>

      <ul>
        <li>
          <a href="https://github.com/bopzor" target="_blank" rel="noreferrer" className={styles.externalLink}>
            <span className={styles.icon}>
              <Github />
            </span>{' '}
            github.com/bopzor
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bopzor" target="_blank" rel="noreferrer" className={styles.externalLink}>
            <span className={styles.icon}>
              <Linkedin />
            </span>{' '}
            linkedin.com/in/bopzor
          </a>
        </li>
        <li>
          <a
            href="mailto:contact@bopzor.me?body=Bonjour, je suis à l'aise avec le tutoiement :)"
            target="_blank"
            rel="noreferrer"
            className={styles.externalLink}
          >
            <span className={styles.icon}>
              <Mail />
            </span>{' '}
            M&apos;envoyer un mail
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h3>Copyrights</h3>

      <ul>
        <li>
          Illustration{' '}
          <a href="http://www.freepik.com" target="_blank" rel="noreferrer">
            Designed by stories / Freepik
          </a>
        </li>
        <li>
          Mockups{' '}
          <a href="http://www.freepik.com" target="_blank" rel="noreferrer">
            by sylfa5610, Ebhy, freepik, rawpixel.com / Freepik
          </a>
        </li>
        <li>
          Website made by{' '}
          <a href="http://bopzor.me" target="_blank" rel="noreferrer">
            Bopzor
          </a>{' '}
          with 🧡, React and Next.js
        </li>
      </ul>
    </section>
  </footer>
);

export default Footer;
