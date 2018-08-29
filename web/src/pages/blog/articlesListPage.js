import React from 'react';
import { Link } from 'react-router-dom';

import Article from '../../components/blog/article.js';

const ArticlesListPage = (props) => (
  props.articles.map(a => (
    <div className="a-l-p-wrapper" key={a.id}>
      <Article
        article={a}
        onRemoveArticle={() => props.onRemoveArticle(a.id)}
        showAll={false}
      />

      <Link
      to={{ pathname: `/blog/article/${a.id}` }}
      className="link a-l-p-button-wrapper"
      >
        <button className="a-l-p-expend-button button">Read</button>
      </Link>
    </div>
  ))

);

export default ArticlesListPage;
