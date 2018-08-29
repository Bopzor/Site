const BASE_API_URL = '/api/routes';

function getProjectsList(callback) {
  const url = `${BASE_API_URL}/project.php`;

  queryToServer(url, callback);
}


function postProject(data, callback) {
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

function removeProject(projectId, callback) {
  const url = `${BASE_API_URL}/project.php?project_id=${projectId}`;
  const opts = {
    method: 'DELETE',
    body: {
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}

function updateProject(data, callback) {
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


