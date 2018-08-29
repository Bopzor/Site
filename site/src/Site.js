import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getProjectsList, removeProject } from './actionsToAPI'; 

import { Aside } from './Components/Aside.js';
import { ProjectPage } from './Pages/ProjectPage.js';
import { ProjectsListPage } from './Pages/ProjectsListPage.js';
import ProjectForm from './Pages/ProjectForm.js';

class Site extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    getProjectsList((result) => this.setState({projects: result}));
  }

  handleRemoveProject(projectId) {
    removeProject(projectId, (result) => this.onRemoveProject(result));
  }

  onRemoveProject(projectId) {
    let projects = this.state.projects.slice();
    const idx = projects.findIndex(p => p.id === ~~projectId);
    
    projects.splice(idx, 1);

    this.setState({projects});
  }

  onCreateProject(project) {
    let projects = this.state.projects.slice();

    projects.splice(0, 0, project);

    this.setState({projects});
  }

  onUpdateProject(project) {
    let projects = this.state.projects.slice();
    const idx = projects.findIndex(p => p.id === ~~project.id);

    projects.splice(idx, 1, project);

    this.setState({projects});
  }

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
                onRemoveProject={(projectId) => this.handleRemoveProject(projectId)}
              />
            )} />

            <Route exact path='/project/:id' render={(props) => (
              <ProjectPage
                project={findProject(props.match.params.id)}
                onRemoveProject={(projectId) => this.handleRemoveProject(projectId)}
              />
            )} />

            <Route exact path='/edit/:id' render={(props) => (
              <ProjectForm
                project={findProject(props.match.params.id)}
                onSaveProject={(project) => this.onUpdateProject(project)}
              />
            )} />

            <Route exact path='/add' render={() => (
              <ProjectForm
                project={null}
                onSaveProject={(project) => this.onCreateProject(project)}
              />    
            )} />
          </Switch>

        </main>
      </div>

    );
  }
}

export default Site;
