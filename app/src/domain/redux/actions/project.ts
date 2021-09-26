import { Project } from 'src/domain/entities/Project';

import { createAction } from '.';

export const setProjects = (projects: Project[]) => createAction('set-projects', projects);
