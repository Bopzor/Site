import CSS from '../icons/CSS.svg';
import Dart from '../icons/Dart.svg';
import Docker from '../icons/Docker.svg';
import Flutter from '../icons/Flutter.svg';
import HTML from '../icons/HTML.svg';
import JavaScript from '../icons/JavaScript.svg';
import JQuery from '../icons/jQuery.svg';
import MaterialUi from '../icons/Material-ui.svg';
import NodeJS from '../icons/NodeJS.svg';
import ReactIcon from '../icons/React.svg';
import Redux from '../icons/Redux.svg';
import TypeScript from '../icons/TypeScript.svg';

import styles from './techno.module.css';

const technoMap: Record<string, React.ReactNode> = {
  CSS: <CSS />,
  Dart: <Dart />,
  Docker: <Docker />,
  Flutter: <Flutter />,
  HTML: <HTML />,
  JavaScript: <JavaScript />,
  jQuery: <JQuery />,
  MaterialUi: <MaterialUi />,
  NodeJs: <NodeJS />,
  React: <ReactIcon />,
  Redux: <Redux />,
  TypeScript: <TypeScript />,
};

type TechnoProps = {
  techno: string;
};

const Techno: React.FC<TechnoProps> = ({ techno }) => {
  const icon = technoMap[techno] ?? '';

  return (
    <span className={styles.techno}>
      {icon && <span className={styles.logo}>{icon}</span>}
      {techno}
    </span>
  );
};

export default Techno;
