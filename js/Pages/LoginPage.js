class LoginPage extends React.Component {
  state = {
    value: '',
    redirect: null,
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleLogin(e) {
    e.preventDefault();

    sha256(this.state.value);

    let hash = sha256.create();
    hash.update(this.state.value);
    hash.hex();

    localStorage.setItem('token', hash);

    this.props.onSubmitLogin();
  }

  handleLogout(e) {
    e.preventDefault();

    localStorage.clear();

    this.setState({value: '', redirect: '/'});
    isAdmin(this.props.onSubmitLogin);
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
