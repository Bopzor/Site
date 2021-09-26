import { Action, AppState } from '../types';

const initialState: AppState['projects'] = {
  items: [],
};

export const projectReducer = (state: AppState['projects'] = initialState, action: Action): AppState['projects'] => {
  switch (action.type) {
    case 'set-projects':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
