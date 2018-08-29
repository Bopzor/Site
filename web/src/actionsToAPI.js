import { queryToServer } from './utilities.js';

const BASE_API_URL = 'http://localhost/api/routes';

export function getProjectsList(callback) {
  const url = `${BASE_API_URL}/project.php`;

  queryToServer(url, callback);
}


export function postProject(data, callback) {
  const url = `${BASE_API_URL}/project.php`;

  const opts = {
    method: 'POST',
    body: {
      title: data.title,
      content: data.content,
      repo: data.repoValue,
      url: data.urlValue,
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts)
}

export function removeProject(projectId, callback) {
  const url = `${BASE_API_URL}/project.php?project_id=${projectId}`;
  const opts = {
    method: 'DELETE',
    body: {
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}

export function updateProject(data, callback) {
  const url = `${BASE_API_URL}/project.php?`;
  const opts = {
    method: 'POST',
    body: {
      id: data.id,
      title: data.title,
      content: data.content,
      repo: data.repoValue,
      url: data.urlValue,
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}


