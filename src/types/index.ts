export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string[];
  architecture: string[];
  features: string[];
  overview: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solution: string;
  gallery: {
    url: string;
    caption: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}
