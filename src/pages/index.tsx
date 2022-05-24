import { GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '../components/layout';
import Project from '../components/project';
import LinkIcon from '../icons/link.svg';
import { getBiographyData } from '../lib/biography';
import { copyToClipboard } from '../lib/copyToClipboard';
import { getSortedProjectsData } from '../lib/projects';
import styles from '../styles/home.module.css';
import { Project as ProjectType } from '../types';

type HomeProps = {
  biography: { contentHtml: string };
  projects: ({ id: string; contentHtml: string } & ProjectType)[];
};

const Home: React.FC<HomeProps> = ({ biography, projects }) => {
  return (
    <Layout projects={projects}>
      <section id="bio" className={`${styles.headingMd} ${styles.bio}`}>
        <div dangerouslySetInnerHTML={{ __html: biography.contentHtml }} />
      </section>

      <section id="projects" className={styles.projects}>
        <span className={styles.headingWrapper}>
          <Link href="#projects">
            <a onClick={() => copyToClipboard('#projects')} title="Copier le lien" className={styles.anchorLink}>
              <LinkIcon width={24} height={24} />
            </a>
          </Link>
          <h2 className={styles.heading}>Mes projets</h2>
        </span>

        {projects.map((project, index) => (
          <Project key={project.id} projectData={project} reverse={index % 2 === 0} skipAnimation={index === 0} />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getSortedProjectsData();
  const biography = await getBiographyData();

  return {
    props: {
      biography,
      projects,
    },
  };
};

export default Home;
