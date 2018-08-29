import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Admin } from './Admin.js';

function renderProjectLink(project) {
  if (project.url.match(/^(https?:\/\/)/)) {
    return (
      <p
        key={project.id}
      >
        <a href={project.url} className="link">
          {project.title}
        </a>
      </p>
    );    
  }

  return (
    <p
      key={project.id}
    >
      <NavLink exact to={{ pathname: `/${project.url}`}} className="link" activeClassName="selected">
        {project.title}
      </NavLink>
    </p>
  );
}

const Aside = (props) => {
  return (
    <div className="aside-flex-wrapper">
      <aside>
        <p>
          <NavLink exact to={{ pathname: `/`}} className="link" activeClassName="selected">
            All
          </NavLink>
        </p>

        {props.projects.map((p) => renderProjectLink(p))}

        <Admin>
            <Link
              className="link"
              to={{ pathname: `/add`}}
            >
              <i className="fas fa-plus fa-5x" />
            </Link>
        </Admin>
      
      </aside>
    </div>
)};

export { Aside };
