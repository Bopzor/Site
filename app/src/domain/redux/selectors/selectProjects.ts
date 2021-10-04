import { Project } from 'src/domain/entities/Project';

import { AppState } from '../types';

export const selectProjects = (state: AppState): Project[] => state.projects.items;
