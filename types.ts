export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // Icon name reference
}