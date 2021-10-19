import Image from 'next/image';
import Link from 'next/link';

import { useDisableScrollOnEnterIframe } from '../hooks/useDisabledScrollOnEnterIframe';
import LinkIcon from '../icons/link.svg';
import { copyToClipboard } from '../lib/copyToClipboard';
import type { Project as ProjectType } from '../types';

import styles from './project.module.css';
import Techno from './techno';

type ProjectProps = {
  projectData: ProjectType & { id: string; contentHtml: string };
  reverse: boolean;
};

const Project: React.FC<ProjectProps> = ({ projectData, reverse }) => {
  useDisableScrollOnEnterIframe(`#${projectData.title}-iframe`);

  const media = projectData.media.iframe ? (
    <>
      <iframe
        id={`#${projectData.title}-iframe`}
        src={projectData.media.iframe}
        width={650}
        height={400}
        frameBorder="0"
        className={styles.iframe}
      />
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={`/images/${projectData.media.image}`} alt={projectData.title} className={styles.replacementImage} />
    </>
  ) : (
    <Image src={`/images/${projectData.media.image}`} alt={projectData.title} width={555} height={380} />
  );

  return (
    <section id={`projects/${projectData.id}`} className={reverse ? styles.reverse : ''}>
      <article className={styles.project}>
        <div>
          <div className={styles.heading}>
            <span className={styles.headingWrapper}>
              <Link href={`#projects/${projectData.id}`}>
                <a
                  onClick={() => copyToClipboard(`#projects/${projectData.id}`)}
                  title="Copier le lien"
                  className={styles.anchorLink}
                >
                  <LinkIcon width={20} height={20} />
                </a>
              </Link>
              <h1 className={styles.headingXl}>{projectData.title}</h1>
            </span>
            <div className={styles.lightText}>{projectData.description}</div>
          </div>

          <div className={styles.media}>{media}</div>
        </div>

        <div className={styles.content}>
          <div className={styles.technos}>
            {projectData.techno.map((techno) => (
              <Techno key={techno} techno={techno} />
            ))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </div>
      </article>
    </section>
  );
};

export default Project;
