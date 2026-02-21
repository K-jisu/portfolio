export interface Project {
  id: number;
  title: string;
  skills: string[];
  period: string;
  description: string;
  thumbnail: string;
  desktopImages?: string[];
  mobileImages?: string[];
  company: string;
  contribution: string;
  role: string;
  members?: string;
  url: string;
  github?: string;
  details: string[];
}
