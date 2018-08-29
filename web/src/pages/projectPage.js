import React from 'react';

import Project from '../components/project.js';

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

    </div>
  )
};

export default ProjectPage;
