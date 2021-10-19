import Link from 'next/link';

import styles from './header.module.css';

const Header: React.FC = () => (
  <header id="home" className={styles.header}>
    <Link href="/">
      <a>
        <h1>Bopzor.me</h1>
      </a>
    </Link>

    <nav className={styles.nav}>
      <Link href="#bio">
        <a>À propos de moi</a>
      </Link>

      <Link href="#projects">
        <a>Mes projets</a>
      </Link>

      <Link href="#footer">
        <a>Contact</a>
      </Link>
    </nav>
  </header>
);

export default Header;
