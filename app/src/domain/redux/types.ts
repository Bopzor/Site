import { Action as ReduxAction } from 'redux';
import { ThunkAction, ThunkMiddleware } from 'redux-thunk';

import { Project } from '../entities/Project';
import { ProjectGateway } from '../gateways/ProjectGateway';

import { setProjects } from './actions/project';
import { AppStore } from './store';

export type AppState = {
  projects: {
    items: Project[];
  };
};

export type Dependencies = {
  projectGateway: ProjectGateway;
};

export type GetState = AppStore['getState'];
export type Dispatch = AppStore['dispatch'];

export type Action = ReturnType<typeof setProjects>;

export type ThunkResult<R> = ThunkAction<R, AppState, Dependencies, ReduxAction>;
export type AppThunkMiddleware = ThunkMiddleware<AppState, Action, Dependencies>;
