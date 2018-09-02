import React from 'react';

import { Link } from 'react-router-dom';

import Project from '../components/project.js';

const ProjectsListPage = (props) => (
  props.projects.map(p => (
    <div className="a-l-p-wrapper" key={p.id}>
      <Project
        project={p}
        onRemoveProject={() => props.onRemoveProject(p.id)}
        showAll={false}
      />

      <Link
      to={{ pathname: `/project/${p.id}` }}
      className="link a-l-p-button-wrapper"
      >
        <button className="a-l-p-expend-button button">Read</button>
      </Link>
    </div>
  ))

);

export default ProjectsListPage;
