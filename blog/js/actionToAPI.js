function buildParams(body) {
  let params = '';

  Object.keys(body).forEach(key => {
    params += `${key}=${body[key]}&`
  });

  return params;
}

function queryToServer(url, callback, opts) {
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

function getCategories(callback) {
  const url = '/blog/php/routes/category.php';

  queryToServer(url, callback);
}

function getArticlesList(callback) {
  const url = '/blog/php/routes/article.php';

  queryToServer(url, callback);
}

function getComments(articleId, callback) {
  const url = `/blog/php/routes/comment.php?article_id=${articleId}`;

  queryToServer(url, callback);
}

function postComment(data, callback) {
  const url = '/blog/php/routes/comment.php';
  const opts = {
    method: 'POST',
    body: {
      nick: data.nick,
      content: data.content,
      articleId: data.articleId,
    }
  }

  queryToServer(url, callback, opts)
}

function postArticle(data, callback) {
  const url = '/blog/php/routes/article.php';
  const opts = {
    method: 'POST',
    body: {
      title: data.title,
      content: data.content,
      categoriesId: data.categoriesId,
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts)
}

function removeArticle(articleId, callback) {
  const url = `/blog/php/routes/article.php?article_id=${articleId}`;
  const opts = {
    method: 'DELETE',
    body: {
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}

function updateArticle(data, callback) {
  const url = `/blog/php/routes/article.php?`;
  const opts = {
    method: 'POST',
    body: {
      id: data.id,
      title: data.title,
      content: data.content,
      categoriesId: data.categoriesId,
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}

function isAdmin(callback) {
  const url = '/blog/php/routes/isAdmin.php'
  const opts = {
    method: 'POST',
    body: {
      token: localStorage.getItem('token'),
    },
  };

  queryToServer(url, callback, opts);

}
