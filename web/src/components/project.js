import React from 'react';
import { Link } from 'react-router-dom';
import { markdown } from 'markdown';


import Admin from './admin.js';

const createMarkeup = (content) => {
  const html_content = markdown.toHTML(content, 'Maruku')
  
  return {__html: html_content};
}

const Project = (props) => {
  let contentClassName = 'a-content';

  if (!props.showAll) {
    contentClassName += ' a-content-overflow';
  } 

  return (
    <article className="article">

      <header className="a-header">

        <Link
          to={{ pathname: `/project/${props.project.id}` }}
          className="link a-title"
        >
          <h2>{props.project.title}</h2>
        </Link>

      <Admin>
          <Link
            to={{ pathname: `/` }}
            className="link"
          > 
            <i
              className="fas fa-minus link a-admin-tools"
              onClick={() => props.onRemoveProject()}
            ></i>
          </Link>

          <Link
            to={{ pathname: `/edit/${props.project.id}` }}
            className="link"
          >
            <i className="fas fa-pencil-alt a-admin-tools"></i>
          </Link>
        </Admin>

      </header>

      <div className="a-details-wrapper">      

        <div className={contentClassName} dangerouslySetInnerHTML={createMarkeup(props.project.content)} />

      </div>

    </article>
  );
}

export default Project;
