import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Mohammed Qaisuddin",
  identity: "AI Generalist",
  location: "Nalgonda, Telangana, India",
  bioIntro: "Building AI Solutions",
  bioExtended:
    "I'm Mohammed Qaisuddin, an AI Generalist and Founder of QDelta Technologies. I build modern web applications, intelligent automation workflows, and responsive digital products that turn ambitious ideas into dependable, real-world solutions.",
  availableStatus: "Available for Freelance / Remote Work",
  socials: {
    github: "https://github.com/mdqais29",
    linkedin: "https://linkedin.com",
    email: "mohammedqaisuddin@qdelta.in",
    qdelta: "https://www.qdelta.in/",
  },
  typewriterRoles: [
    "Designer",
    "Developer",
    "Marketer",
    "Researcher",
    "Entrepreneur",
    "AI Generalist",
  ],
  experiences: [
    {
      id: "freelance-dev",
      role: "Freelance Web Designer & Developer",
      organization: "Freelance / Self-Initiated",
      location: "Remote",
      period: "2024 – 2026",
      type: "Freelance",
      description:
        "Designed and developed websites and digital experiences, focusing on responsive layouts, modern interfaces, usability, and client requirements.",
      skills: ["Web Design", "Web Development", "UI/UX", "Responsive Layouts"],
    },
    {
      id: "gsa-intern",
      role: "Web Developer & Digital Support Intern",
      organization: "Global Safety Academy",
      location: "Nalgonda, Telangana",
      period: "October 2025 – September 2026",
      type: "Internship",
      description:
        "Developed and maintained the institute's website while supporting digital content, branding, website improvements, and internal documentation.",
      skills: ["Next.js", "Web Development", "Branding", "Internal Documentation"],
    },
    {
      id: "codtech-intern",
      role: "Artificial Intelligence Intern",
      organization: "CODTECH IT Solutions Pvt. Ltd.",
      location: "Remote",
      period: "7 January 2026 – 4 March 2026",
      type: "Internship",
      description:
        "Completed a technical internship in artificial intelligence, working with machine learning concepts and computational workflows.",
      skills: ["Artificial Intelligence", "Python", "Data Workflows"],
    },
    {
      id: "wts-nova",
      role: "Operations Manager",
      organization: "WTS Nova",
      location: "Remote",
      period: "August 2026 – Present",
      type: "Operations",
      description:
        "Supports agency operations, team coordination, project execution, and digital service delivery.",
      skills: ["Operations", "Team Coordination", "Project Execution", "Digital Delivery"],
    },
    {
      id: "qdelta-founder",
      role: "Founder & CEO",
      organization: "QDelta Technologies",
      location: "Telangana, India",
      period: "September 2026 – Present",
      type: "Venture",
      description:
        "Founded and leads a digital venture focused on website development and modern digital experiences, with plans to expand into AI-powered solutions.",
      skills: ["Venture Leadership", "Web Development", "AI Solutions"],
    },
  ],
  projects: [
    {
      id: "gsa-website",
      title: "Global Safety Academy Website",
      category: "Web Application",
      description:
        "A modern, animated website for a safety training institute. Built using Next.js.",
      tags: ["Next.js", "Web Development", "Responsive Design", "Animation"],
      url: "https://www.globalsafetyacademy.com/",
      isExternal: true,
      featured: true,
    },
    {
      id: "ai-sentiment",
      title: "AI Sentiment Analyser",
      category: "AI & NLP",
      description:
        "A text sentiment application that classifies input as positive, negative, or neutral. Utilizes VADER and lexicon-based NLP, consistency and reliability scoring, and per-model breakdowns.",
      tags: ["Python", "NLP", "VADER", "Text Classification"],
      url: "https://ai-sentiment-analyser.netlify.app/",
      isExternal: true,
      featured: true,
    },
    {
      id: "flowdesk",
      title: "FlowDesk",
      category: "Tool & Utility",
      description:
        "A client management platform project designed for managing client records and everyday workflow tasks.",
      tags: ["React", "UI/UX", "Client Management"],
      url: "https://flowdesk123.netlify.app/",
      isExternal: true,
      featured: true,
    },
    {
      id: "fresh-laundry",
      title: "Fresh Laundry — UI/UX Case Study",
      category: "UI/UX & Design",
      description:
        "A UI/UX design case study created for a modern laundry and clothing care service.",
      tags: ["Figma", "UI/UX", "Case Study", "User Flows"],
      url: "https://www.figma.com/design/s25K1h3V88yAPuYTg9zIX9/UI-UX?node-id=2002-456",
      isExternal: true,
      featured: true,
    },
    {
      id: "pretty-good-pdf",
      title: "Pretty Good PDF",
      category: "Tool & Utility",
      description:
        "A web-based PDF utility project engineered for direct document operations in the browser.",
      tags: ["JavaScript", "Web Tool", "PDF Operations"],
      url: "https://www.prettygoodpdf.site/",
      isExternal: true,
      featured: false,
    },
    {
      id: "qdelta-website",
      title: "QDelta Technologies Website",
      category: "Web Application",
      description:
        "The owner's venture and brand website for QDelta Technologies, presenting custom website development and digital experience services.",
      tags: ["Brand Website", "Web Development", "Digital Venture"],
      url: "https://www.qdelta.in/",
      isExternal: true,
      featured: true,
    },
  ],
  education: [
    {
      id: "gnit-btech",
      degree: "B.Tech in Information Technology",
      institution: "Guru Nanak Institute of Technology",
      location: "Hyderabad, Telangana",
      period: "2021 – 2025",
      grade: "CGPA 7.92 / 10",
      highlights: [
        "Curriculum covering Software Engineering, Web Technologies, Database Systems, and Network Architecture",
        "Applied exploration of Artificial Intelligence, Data Pipelines, and Systems Engineering",
      ],
    },
    {
      id: "kakatiya-ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "Kakatiya High School",
      location: "Miryalguda, Telangana",
      period: "Completed",
      grade: "GPA 9.7 / 10",
      highlights: [
        "Academic foundation in Mathematics, Science, and Computing Fundamentals",
      ],
    },
  ],
  languages: [
    { language: "English", level: "Professional Working Proficiency" },
    { language: "Hindi", level: "Full Professional Proficiency" },
    { language: "Telugu", level: "Native / Bilingual" },
  ],
  skillCategories: [
    {
      title: "Development",
      description: "Core languages and web frameworks",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Python",
        "Web Development",
        "Web Design",
        "Git",
        "GitHub",
      ],
      status: "current",
    },
    {
      title: "AI and Data",
      description: "Data analysis, machine learning and generative workflows",
      skills: [
        "Data Analysis",
        "Machine Learning",
        "Generative AI",
        "AI Orchestration",
        "AI Automation",
        "Prompt Engineering",
      ],
      status: "current",
    },
    {
      title: "Design and Content",
      description: "Visual design, prototyping and structured communication",
      skills: [
        "UI/UX",
        "Figma",
        "Canva",
        "Graphic Design",
        "Content Writing",
      ],
      status: "current",
    },
    {
      title: "Business and Operations",
      description: "Client relations, funnel strategies and operational coordination",
      skills: [
        "CRM Management",
        "Social Media Marketing",
        "Sales Funnels",
      ],
      status: "current",
    },
    {
      title: "Automation and AI Coding Tools",
      description: "AI development environments and automation orchestrators",
      skills: [
        "Make",
        "n8n",
        "ChatGPT",
        "Claude Code",
        "Cursor",
        "Antigravity",
      ],
      status: "current",
    },
    {
      title: "Productivity",
      description: "Office and cloud collaboration suites",
      skills: [
        "Microsoft Office",
        "Google Workspace",
      ],
      status: "current",
    },
    {
      title: "Expanding Tools & Technologies",
      description: "Tools added to the expanding stack (learning & exploring)",
      skills: [
        "Google AI Studio",
        "Pandas",
        "NumPy",
        "Supabase",
        "REST APIs",
        "Vercel",
      ],
      status: "expanding",
    },
  ],
  certificates: [
    {
      id: "naukri-young-turks",
      title: "Naukri Campus Young Turks — Certificate of Merit",
      issuer: "Naukri Campus",
      year: "2025",
      badge: "97.14th Percentile",
      details:
        "Achieved the 97.14th percentile in Naukri Campus Young Turks 2025, India's largest skill contest.",
    },
    {
      id: "oracle-genai",
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      year: "2025",
      badge: "Certified Professional",
      details:
        "Comprehensive credential covering LLM architectures, fine-tuning methodologies, RAG frameworks, and deployment on OCI.",
    },
    {
      id: "ms-upgrad-genai",
      title: "Generative AI Foundations",
      issuer: "Microsoft & upGrad",
      year: "2024",
      badge: "Foundations",
      details:
        "Foundational mastery of prompt systems, generative model architectures, and practical enterprise AI applications.",
    },
    {
      id: "simplilearn-software",
      title: "Software Development Fundamentals",
      issuer: "Simplilearn SkillUp",
      year: "2024",
      badge: "Fundamentals",
      details:
        "Core computing principles, software life cycles, problem-solving, and structured programming fundamentals.",
    },
    {
      id: "outskill-genai",
      title: "Generative AI Mastermind — Certificate of Completion",
      issuer: "Outskill",
      year: "2024",
      badge: "Mastermind",
      details:
        "Applied training in modern AI tooling, prompt engineering, and agentic task orchestration.",
    },
    {
      id: "tutedude-uiux",
      title: "UI/UX Design Certificate",
      issuer: "Tutedude",
      year: "2024",
      badge: "Design Certificate",
      details:
        "User experience research, wireframing, high-fidelity UI design in Figma, and interactive component systems.",
    },
  ],
};
