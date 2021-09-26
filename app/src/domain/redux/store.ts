import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { projectReducer } from './reducers/project';
import type { AppThunkMiddleware, Dependencies } from './types';

export const createStore = (dependencies: Dependencies) =>
  reduxCreateStore(
    combineReducers({
      projects: projectReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(dependencies) as AppThunkMiddleware)),
  );

export type AppStore = ReturnType<typeof createStore>;
