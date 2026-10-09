export type TabId =
  | "about"
  | "experience"
  | "projects"
  | "education"
  | "skills"
  | "certificates"
  | "contact";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Web Application" | "AI & NLP" | "UI/UX & Design" | "Tool & Utility";
  description: string;
  tags: string[];
  url: string;
  isExternal: boolean;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Venture" | "Operations" | "Internship" | "Freelance";
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  status?: "current" | "expanding";
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  badge?: string;
  details?: string;
}

export interface PortfolioData {
  name: string;
  identity: string;
  location: string;
  bioIntro: string;
  bioExtended: string;
  availableStatus: string;
  socials: {
    github?: string;
    linkedin?: string;
    email: string;
    qdelta: string;
  };
  typewriterRoles: string[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  languages: { language: string; level: string }[];
  skillCategories: SkillCategory[];
  certificates: CertificateItem[];
}
