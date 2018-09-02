import React from 'react';
import { Link } from 'react-router-dom';

import Project from '../components/project.js';

const getPreviousProjectLink = (projectId, projects) => {
  const projectIdx = projects.indexOf(projectId);

  if (projectIdx <= 0) {
    return null;
  }

  return (
    <Link
      to={{ pathname: `/project/${projects[projectIdx - 1]}` }}
      className="link prev"
    >
      <i className="fas fa-caret-left fa-3x"></i><span>Précédent</span>
    </Link>
  );

}

const getNextProjectLink = (projectId, projects) => {
  const projectIdx = projects.indexOf(projectId);

  if (projectIdx === projects.length - 1) {
    return null;
  }

  return (
    <Link
      to={{ pathname: `/project/${projects[projectIdx + 1]}` }}
      className="link next"
    >
      <span>Suivant</span><i className="fas fa-caret-right fa-3x"></i>
    </Link>
  );

}

const getActualIndex = (projectId, projects) => {
  const projectIdx = projects.indexOf(projectId);

  return `${projectIdx + 1}/${projects.length}`;

}

const ProjectPage = (props) => {
  if (!props.project) {
    return null;
  }

  return (
    <div className="projectPage">

      <Project
        project={props.project}
        onRemoveProject={() => props.onRemoveProject(props.project.id)}
        showAll={true}
      />

      <div className="pagination">
        {getPreviousProjectLink(props.project.id, props.projectsId)}

        <span className="index">{getActualIndex(props.project.id, props.projectsId)}</span> 

        {getNextProjectLink(props.project.id, props.projectsId)}

      </div>

    </div>
  )
};

export default ProjectPage;
