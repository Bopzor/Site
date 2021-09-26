import { Tag } from './Tag';

export type Project = {
  id: string;
  name: string;
  content: string;
  tags: Tag[];
  image: string;
  githubLink: string;
  websiteLink?: string;
};
