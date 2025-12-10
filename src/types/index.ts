export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  techType: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export type FilterType = 'all' | 'featured' | 'Python' | 'AI/ML' | 'FinTech' | 'DevOps' | 'Go' | 'Rust' | 'TypeScript' | 'Gaming';
