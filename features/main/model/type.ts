export interface Project {
  id: number;
  title: string;
  skills: string[];
  period: string;
  description: string;
  imageUrl: string;
  members?: string;
  link: string;
  github?: string;
  detail: string[];
}
