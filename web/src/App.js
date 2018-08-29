import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './css/style.css';
import './css/reset.css';
import { isAdmin } from './utilities';

import AdminContext from './adminContext.js';
import Header from './components/header.js';


import Blog from './blog.js';
import Site from './site.js';
import LoginPage from './pages/loginPage.js';

class App extends Component {
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

export default App;
