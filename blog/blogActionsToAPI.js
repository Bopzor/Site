function getCategories(callback) {
  const url = '/api/routes/category.php';

  queryToServer(url, callback);
}

function getArticlesList(callback) {
  const url = '/api/routes/article.php';

  queryToServer(url, callback);
}

function getComments(articleId, callback) {
  const url = `/api/routes/comment.php?article_id=${articleId}`;

  queryToServer(url, callback);
}

function postComment(data, callback) {
  const url = '/api/routes/comment.php';
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
  const url = '/api/routes/article.php';
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
  const url = `/api/routes/article.php?article_id=${articleId}`;
  const opts = {
    method: 'DELETE',
    body: {
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}

function updateArticle(data, callback) {
  const url = `/api/routes/article.php?`;
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
