export type Project = {
  title: string;
  description: string;
  date: string;
  techno: string[];
  media: Media;
};

type Media = {
  image: string;
  iframe?: string;
};
