import { Project } from '../entities/Project';

export interface ProjectGateway {
  accessProjects: () => Promise<Project[]>;
}
