const BASE_API_URL = 'http://localhost/api/routes';

function buildParams(body) {
  let params = '';


  Object.keys(body).forEach(key => {
    params += `${key}=${body[key]}&`
  });

  return params;
}

export function queryToServer(url, callback, opts) {
  opts = opts || {};
  opts.method = opts.method || 'GET';
  opts.body = opts.body || null;
  opts.token = opts.token || '';

  let params = undefined;

  const xhr = new XMLHttpRequest();

  xhr.open(opts.method, url);
  
  xhr.setRequestHeader('Authorization', opts.token);

  if (opts.body) {
    params = buildParams(opts.body);

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

      if (xhr.getResponseHeader('Content-Type').startsWith('application/json')) {
        callback(JSON.parse(xhr.response));

      } else {
        callback(xhr.response);

      }
      
    }
  }
  xhr.send(params);
}

export function isAdmin(callback) {
  const url = `${BASE_API_URL}/isAdmin.php`;
  const opts = {
    method: 'POST',
    body: {
      token: localStorage.getItem('token'),
    },
  };

  queryToServer(url, callback, opts);

}
