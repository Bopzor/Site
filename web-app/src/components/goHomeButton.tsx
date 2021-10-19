import Link from 'next/link';

import ArrowUp from '../icons/arrow-up.svg';

import styles from './goHomeButton.module.css';

const GoHomeButton: React.FC = () => (
  <Link href="#home">
    <a>
      <div role="button" className={styles.homeButton} title="Retourner en haut">
        <ArrowUp />
      </div>
    </a>
  </Link>
);

export default GoHomeButton;
