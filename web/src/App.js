import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { isAdmin } from './utilities';

import AdminContext from './adminContext.js';
import Header from './components/header.js';

import Blog from './blog.js';
import Site from './site.js';
import LoginPage from './pages/loginPage.js';

const RedirectExternal = ({ url }) => {
  window.location = url;

  return null;
}

class App extends Component {
  state = {
    admin: false,
  };

  componentDidMount() {
    isAdmin((result) => this.setState({admin: result}));
  }

  onSubmitLog() {
    isAdmin((result) => this.setState({admin: result}));
  }

  render() {
    return (
      <AdminContext.Provider value={this.state.admin}>
        <Header />

        <Switch>

          <Route path='/snaque' render={() => <RedirectExternal url="https://bopzor.me/__snaque" />} />
          <Route path='/hanoi' render={() => <RedirectExternal url="https://bopzor.me/__hanoi" />} />

          <Route path='/blog' component={Blog} />

          <Route path='/login' render={() => (
              <LoginPage
                admin={this.state.admin}
                onSubmitLog={(result) => this.onSubmitLog(result)}
              />
          )} />

          <Route path='/' component={Site} />

        </Switch>


      </AdminContext.Provider>
    );
  }
}

export default App;
