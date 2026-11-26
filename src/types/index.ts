export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  available: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Familiar' | 'Working Knowledge' | 'Intermediate' | 'Experienced';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  tools: string[];
  process: string[];
  insights: string[];
  outcome: string;
  githubUrl?: string;
  colabUrl?: string;
  liveUrl?: string;
  pdfUrl?: string;
  pbixUrl?: string;
  image?: string;
  tags: string[];
  gradient: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  badge: string;
  color: string;
  verifyUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'internship' | 'job';
  responsibilities: string[];
  tools: string[];
}

export interface Profile {
  platform: string;
  url: string;
  description: string;
  icon: string;
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Metric {
  label: string;
  value: number;
  unit: string;
  icon: string;
  color: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  tools: string[];
}
