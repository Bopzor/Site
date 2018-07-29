const { Switch, Route } = ReactRouterDOM;

class App extends React.Component {
  state = {
    categories: [],
    articles: [],
    admin: false,
  };


  componentDidMount() {
    getCategories((result) => this.setState({categories: result}));
    getArticlesList((result) => this.setState({articles: result}));
    isAdmin((result) => this.setState({admin: result}));
  }

  handleRemoveArticle(articleId) {
    removeArticle(articleId, (result) => this.onRemoveArticle(result));
  }

  onRemoveArticle(articleId) {
    let articles = this.state.articles.slice();
    const idx = articles.findIndex(a => a.id === ~~articleId);
    
    articles.splice(idx, 1);

    this.setState({articles});
  }

  onCreateArticle(article) {
    let articles = this.state.articles.slice();

    articles.splice(0, 0, article);

    this.setState({articles});
  }

  onUpdateArticle(article) {
    let articles = this.state.articles.slice();
    const idx = articles.findIndex(a => a.id === ~~article.id);

    articles.splice(idx, 1, article);

    this.setState({articles});
  }

  onSubmitLogin() {
    isAdmin((result) => this.setState({admin: result}));
  }

  filterArticlesByCategory(categoryId) {
    const displayArticles = this.state.articles.filter(a => a.category_id.split(',').includes(categoryId));

    return displayArticles;
  }

  render() {
    const findArticle = (id) => this.state.articles.find(a => a.id === ~~id);

    return (
      <AdminContext.Provider value={this.state.admin}>
        <Header />

        <div className="page">
          <Aside
            categories={this.state.categories}
            onCategoryClick={(categoryId) => this.handleCategoryClick(categoryId)}
            onAllArticlesClick={() => this.handleAllArticlesClick()}
            displayCategory={this.state.displayCategory}
          />

          <main>

            <Switch>
              <Route exact path='/' render={() => (
                <ArticlesListPage
                  articles={this.state.articles}
                  onRemoveArticle={(articleId) => this.handleRemoveArticle(articleId)}
                />
              )} />

              <Route exact path='/articles/:categoryId' render={(props) => (
                <ArticlesListPage
                  articles={this.filterArticlesByCategory(props.match.params.categoryId)}
                  onRemoveArticle={(articleId) => this.handleRemoveArticle(articleId)}
                />
              )} />

              <Route exact path='/article/:id' render={(props) => (
                <ArticlePage
                  onRemoveArticle={(articleId) => this.handleRemoveArticle(articleId)}
                  article={findArticle(props.match.params.id)}
                />
              )} />

              <Route exact path='/article/edit/:id' render={(props) => (
                <ArticleForm
                  article={findArticle(props.match.params.id)}
                  categories={this.state.categories}
                  onSaveArticle={(article) => this.onUpdateArticle(article)}
                />
              )} />

              <Route exact path='/add' render={() => (
                <ArticleForm
                  article={null}
                  categories={this.state.categories}
                  onSaveArticle={(article) => this.onCreateArticle(article)}
                />    
              )} />

              <Route exact path='/login' render={() => (
                <LoginPage onSubmitLogin={(result) => this.onSubmitLogin(result)} />
              )} />
            </Switch>

          </main>
        </div>

      </AdminContext.Provider>
    );
  }
}
