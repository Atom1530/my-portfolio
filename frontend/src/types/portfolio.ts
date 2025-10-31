export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
}

export interface Skill {
  name: string;
  category: string;
  level?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  live: string;
  status: "completed" | "in-progress" | "in-development";
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type?: string;
}

export interface Social {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  strengths: string[];
  social: Social;
}
