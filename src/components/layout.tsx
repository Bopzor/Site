import { Project } from '../types';

import Footer from './footer';
import GoHomeButton from './goHomeButton';
import Header from './header';
import styles from './layout.module.css';

type LayoutProps = {
  projects: (Project & { id: string })[];
};

const Layout: React.FC<LayoutProps> = ({ children, projects }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
        <GoHomeButton />
        <Footer projects={projects} />
      </div>
    </>
  );
};

export default Layout;
