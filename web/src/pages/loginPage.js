import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { sha256 } from 'js-sha256';

import Admin from '../components/admin.js';

class LoginPage extends Component {
  state = {
      value: '',
      redirect: null,
      admin: this.props.admin,
  };

  static getDerivedStateFromProps(props, state) {
    if(state.admin !== props.admin) {
      return {redirect: '/'};
    }
    
    return null;
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  formValidator() {
    if (this.state.value !== undefined && this.state.value !== '') {
      return true;
    }

    return false;
  }

  handleLogin(e) {
    e.preventDefault();

    try {
      if (!this.formValidator()) {
        throw 'error';
      }

      sha256(this.state.value);

      let hash = sha256.create();
      hash.update(this.state.value);
      hash.hex();

      localStorage.setItem('token', hash);

      this.setState({value: ''});
      this.props.onSubmitLog();

    } catch (err) {
      this.handleErrors(err);
    }

  }

  handleLogout(e) {
    e.preventDefault();

    localStorage.clear();

    this.setState({value: ''});
    this.props.onSubmitLog();
  }

  handleErrors(e) {
    this.setState({valueState: e});
  }

  handleRedirect() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
  }

  render() {
    return (
      <div>
      
        <Admin>
          <div className="login-page">
            <button
              className="l-submit button"
              onClick={(e) => this.handleLogout(e)}
            > 
              Go out
            </button>
          </div>
        </Admin>

        <Admin isAdmin={false}>
          <div className="login-page">

            <h2>Connexion</h2>

            <div className="l-label-wrapper">
              <label>Login: </label>

              <input
                className={this.state.valueState}
                type="password"
                value={this.state.value}
                required
                onChange={(e) => this.handleChange(e)}
              />
            </div>

            <button
              className="l-submit button"
              onClick={(e) => this.handleLogin(e)}
            > 
              Go in
            </button>

          </div>
        </Admin>

        {this.handleRedirect()}

      </div>
    )
  }

}

export default LoginPage;
