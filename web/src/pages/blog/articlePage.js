import React from 'react';
import { Link } from 'react-router-dom';

import Article from '../../components//blog/article.js';
import Comments from '../../components/blog/comments.js';

const getPreviousArticleLink = (articleId, articles) => {
  const articleIdx = articles.indexOf(articleId);

  if (articleIdx <= 0) {
    return null;
  }

  return (
    <Link
      to={{ pathname: `/blog/article/${articles[articleIdx - 1]}` }}
      className="link prev"
    >
      <i className="fas fa-caret-left fa-3x"></i><span>Précédent</span>
    </Link>
  );

}

const getNextArticleLink = (articleId, articles) => {
  const articleIdx = articles.indexOf(articleId);

  if (articleIdx === articles.length - 1) {
    return null;
  }

  return (
    <Link
      to={{ pathname: `/blog/article/${articles[articleIdx + 1]}` }}
      className="link next"
    >
      <span>Suivant</span><i className="fas fa-caret-right fa-3x"></i>
    </Link>
  );

}

const getActualIndex = (articleId, articles) => {
  const articleIdx = articles.indexOf(articleId);

  return `${articleIdx + 1}/${articles.length}`;

}


const ArticlePage = (props) => {
  window.scrollTo(0,0);

  if (!props.article) {
    return null;
  }

  return (
    <div className="articlePage">

      <Article
        article={props.article}
        onRemoveArticle={() => props.onRemoveArticle(props.article.id)}
        showAll={true}
      />

      <div className="pagination">
        {getPreviousArticleLink(props.article.id, props.articlesId)}

        <span className="index">{getActualIndex(props.article.id, props.articlesId)}</span>

        {getNextArticleLink(props.article.id, props.articlesId)}

      </div>

      <Comments articleId={props.article.id} />

    </div>
  )
};

export default ArticlePage;
