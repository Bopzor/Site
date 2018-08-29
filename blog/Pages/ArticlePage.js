const ArticlePage = (props) => {
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

      <Comments articleId={props.article.id} />

    </div>
  )
};
