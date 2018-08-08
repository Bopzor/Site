function getProjectsList(callback) {
  const url = '/api/routes/project.php';

  queryToServer(url, callback);
}


function postProject(data, callback) {
  const url = '/api/routes/project.php';
  const opts = {
    method: 'POST',
    body: {
      title: data.title,
      content: data.content,
      github: data.github,
      url: data.url,
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts)
}

function removeProject(projectId, callback) {
  const url = `/api/routes/project.php?project_id=${projectId}`;
  const opts = {
    method: 'DELETE',
    body: {
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}

function updateProject(data, callback) {
  const url = `/api/routes/project.php?`;
  const opts = {
    method: 'POST',
    body: {
      id: data.id,
      title: data.title,
      content: data.content,
      github: data.github,
      url: data.url,
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}


