const { BrowserRouter } = ReactRouterDOM;

ReactDOM.render((
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
), document.getElementById('root'));
