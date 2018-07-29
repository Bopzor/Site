const { Switch, Route } = ReactRouterDOM;

class Site extends React.Component {
  state = {
    projects: [
      {
        id: 0,
        title: 'Blog', 
        content: 'Blog with article and comments',
      },
      {
        id: 1,
        title: 'Hanoi', 
        content: 'Hanoi',
      },
    ],
  };

  render() {
    const findProject = (id) => this.state.projects.find(p => p.id === ~~id);

    return (
      <div className="page">
        <Aside
          projects={this.state.projects}
        />

        <main>

          <Switch>
            <Route exact path='/' render={() => (
              <ProjectsListPage
                projects={this.state.projects}
              />
            )} />

            <Route eaxct path='/project/:id' render={(props) => (
              <ProjectPage
                project={findProject(props.match.params.id)}
              />
            )} />
          </Switch>

        </main>
      </div>

    );
  }
}
