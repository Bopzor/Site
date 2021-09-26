import { Project } from 'src/domain/entities/Project';
import { ProjectGateway } from 'src/domain/gateways/ProjectGateway';

export class InMemoryProjectGateway implements ProjectGateway {
  projects: Project[] = [];

  async accessProjects() {
    return this.projects;
  }
}
