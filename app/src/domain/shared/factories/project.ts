import { Project } from 'src/domain/entities/Project';

export const createProject = (project: Partial<Project> = {}): Project => ({
  id: 'project-1',
  name: 'Project 1 name',
  content: 'Project 1 content',
  tags: [],
  image: 'https://http.cat/200',
  githubLink: 'https://github.com/bopzor',
  ...project,
});
