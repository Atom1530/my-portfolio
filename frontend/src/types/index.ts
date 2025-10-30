export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  avatar: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  live: string;
  status: 'completed' | 'in-progress' | 'in-development';
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  strengths: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
