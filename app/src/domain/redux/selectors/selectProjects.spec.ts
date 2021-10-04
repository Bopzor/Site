import { expect } from 'earljs';

import { createProject } from '../../shared/factories/project';
import { InMemoryProjectGateway } from '../../shared/gateways/InMemoryProjectGateway';
import { setProjects } from '../actions/project';
import { AppStore, createStore } from '../store';

import { selectProjects } from './selectProjects';

describe('selectProjects', () => {
  let store: AppStore;
  let projectGateway: InMemoryProjectGateway;

  beforeEach(() => {
    projectGateway = new InMemoryProjectGateway();
    store = createStore({ projectGateway });
  });

  it('selects projects items', () => {
    const projects = [createProject()];
    store.dispatch(setProjects(projects));

    const state = store.getState();
    expect(selectProjects(state)).toBeAnArrayOfLength(1);
    expect(selectProjects(state)[0]).toBeAnObjectWith({ id: 'project-1' });
  });
});
