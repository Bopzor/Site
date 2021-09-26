import { expect } from 'earljs';

import { AppStore, createStore } from '../redux/store';
import { createProject } from '../shared/factories/project';
import { InMemoryProjectGateway } from '../shared/gateways/InMemoryProjectGateway';

import accessProjects from './access-projects';

describe('access-projects', () => {
  let store: AppStore;
  let projectGateway: InMemoryProjectGateway;

  beforeEach(() => {
    projectGateway = new InMemoryProjectGateway();
    store = createStore({ projectGateway });
  });

  it('accesses the initials projects', async () => {
    await store.dispatch(accessProjects());

    expect(store.getState().projects.items).toBeAnArrayOfLength(0);
  });

  it('accesses the existing projects', async () => {
    projectGateway.projects = [createProject()];

    await store.dispatch(accessProjects());

    const state = store.getState();
    expect(state.projects.items).toBeAnArrayOfLength(1);
    expect(state.projects.items[0]).toBeAnObjectWith({ id: 'project-1' });
  });
});
