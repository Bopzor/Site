import { queryToServer } from '../utilities.js';

export function getCategories(callback) {
  const url = '/api/routes/category.php';

  queryToServer(url, callback);
}

export function getArticlesList(callback) {
  const url = '/api/routes/article.php';

  queryToServer(url, callback);
}

export function getComments(articleId, callback) {
  const url = `/api/routes/comment.php?article_id=${articleId}`;

  queryToServer(url, callback);
}

export function postComment(data, callback) {
  const url = '/api/routes/comment.php';
  const opts = {
    method: 'POST',
    body: {
      nick: data.nick,
      content: data.content,
      articleId: data.articleId,
    },
  };

  queryToServer(url, callback, opts)
}

export function postArticle(data, callback) {
  const url = '/api/routes/article.php';
  const opts = {
    method: 'POST',
    body: {
      title: data.title,
      content: data.content,
      categoriesId: data.categoriesId,
    },
    token: localStorage.getItem('token'),
  };

  queryToServer(url, callback, opts)
}

export function removeArticle(articleId, callback) {
  const url = `/api/routes/article.php?article_id=${articleId}`;
  const opts = {
    method: 'DELETE',
    body: {
    },
    token: localStorage.getItem('token'),
  }

  queryToServer(url, callback, opts);
}

export function updateArticle(data, callback) {
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
