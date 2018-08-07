const { Switch, Route } = ReactRouterDOM;

class App extends React.Component {
  state = {
    admin: false,
  };

  componentDidMount() {
    isAdmin((result) => this.setState({admin: result}));
  }

  onSubmitLogin() {
    isAdmin((result) => this.setState({admin: result}));
  }

  render() {
    return (
      <AdminContext.Provider value={this.state.admin}>
        <Header />

        <Switch>
          <Route path='/blog' component={Blog} />
          
          <Route path='/login' render={() => (
              <LoginPage onSubmitLogin={(result) => this.onSubmitLogin(result)} />
          )} />

          <Route path='/' component={Site} />

        </Switch>


      </AdminContext.Provider>
    );
  }
}
