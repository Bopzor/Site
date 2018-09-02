import React from 'react';
import { Link } from 'react-router-dom';

import { State } from 'markup-it';
import markdown from 'markup-it/lib/markdown';
import html from 'markup-it/lib/html';

import '../css/post.css'

import Admin from './admin.js';

const createMarkeup = (content) => {
  const stateMarkdown = State.create(markdown);
  const document = stateMarkdown.deserializeToDocument(content);

  const stateHTML = State.create(html);

  const html_content = stateHTML.serializeDocument(document);

  return {__html: html_content};
}


const createLinks = (project) => {
  return (
    <div className="ressources">

      <div className="tooltip">
        <span className="tooltip-text">Site</span>
        <a href={project.url} target="_blank" className="link">
          <i className="fas fa-globe fa-2x"></i>
        </a>
      </div>
      <div className="tooltip">
        <span className="tooltip-text">Github</span>
        <a href={project.repo} target="_blank" className="link">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>

    </div>
  ); 
}

const Project = (props) => {
  let header = (
    <Link
      to={{ pathname: `/project/${props.project.id}` }}
      className="link a-title"
    >
      <h2>{props.project.title}</h2>
    </Link>
  );
  let contentClassName = 'a-content';

  if (!props.showAll) {
    contentClassName += ' a-content-overflow';
  } else {
    header = (
      <div className="header-project-full a-title">
        <h2>{props.project.title}</h2>

          {createLinks(props.project)}          

      </div>
    );
  }

  return (
    <article className="article">

      <header className="a-header">

        {header}

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
