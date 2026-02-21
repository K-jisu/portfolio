export interface Project {
  id: number;
  title: string;
  skills: string[];
  period: string;
  description: string;
  thumbnail: string;
  images: string[];
  company: string;
  contibution: string;
  role: string;
  members?: string;
  url: string;
  github?: string;
  details: string[];
}
