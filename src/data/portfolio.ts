/**
 * Source of truth for portfolio content. All entries are derived directly
 * from Vaishnavi's LinkedIn-exported resume (Profile.pdf).
 */

export const profile = {
  name: "Vaishnavi A",
  role: "Cloud Engineer III",
  company: "Mortgage365",
  location: "Englewood, Colorado, United States",
  email: "avaishnavi2404@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaishnavia24",
  github: "https://github.com/vaishnavia4",
  // Drop your photo at public/profile.jpg — it's referenced relatively so the
  // Vite base path (/Vaishnavi-Portfolio/) is applied automatically.
  photo: "profile.jpg",
  tagline:
    "Cloud & DevOps Engineer building reliable, automated infrastructure on AWS and Azure.",
  summary:
    "5+ years of comprehensive experience in the IT industry as a Cloud / DevOps Engineer, with a major focus on Cloud Infrastructure Providers, Data Center Migration, Containerization Technologies, Configuration Management, CI/CD Pipelines, and Virtualization — using a broad set of tools across AWS and Azure.",
};

export const topSkills = ["Bicep", "Azure SQL", "Azure Cosmos DB"];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Cloud Platforms",
    items: ["Microsoft Azure", "AWS", "Azure SQL", "Azure Cosmos DB"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Bicep", "ARM Templates", "Terraform", "Configuration Management"],
  },
  {
    title: "CI / CD & DevOps",
    items: [
      "Azure DevOps",
      "CI/CD Pipelines",
      "Build & Release Engineering",
      "Git",
    ],
  },
  {
    title: "Containers & Virtualization",
    items: ["Containerization", "Virtualization", "Orchestration"],
  },
  {
    title: "Migration & Operations",
    items: ["Data Center Migration", "Cloud Infrastructure Design", "Monitoring"],
  },
  {
    title: "Programming",
    items: ["Python", "C", "HTML & CSS"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Mortgage365",
    role: "Cloud Engineer III",
    period: "April 2024 — Present",
    location: "Colorado, United States",
    highlights: [
      "Owning cloud infrastructure and platform engineering initiatives on Azure.",
      "Driving automation across provisioning, deployments, and operational tooling.",
    ],
  },
  {
    company: "MetLife",
    role: "Cloud DevOps Engineer",
    period: "August 2023 — February 2024",
    highlights: [
      "Cloud DevOps engineering across enterprise application platforms.",
      "Worked on CI/CD pipelines, infrastructure automation, and release workflows.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "DevOps Engineer",
    period: "November 2020 — April 2023",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "DevOps engineering for enterprise clients across multi-cloud environments.",
      "Built and maintained CI/CD pipelines, configuration management, and release tooling.",
    ],
  },
  {
    company: "Fusion Software Technologies",
    role: "Build and Release Engineer",
    period: "June 2018 — October 2020",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Build and release engineering, supporting deployment pipelines and environments.",
      "Foundational experience with source control, automation, and release coordination.",
    ],
  },
];

export const education = {
  school: "Osmania University",
  degree: "Bachelor of Engineering (BE), Computer Science",
};

export const certifications: string[] = [
  "Problem solving through programming in C",
  "Python 101 for Data Science",
  "MTA: Introduction to Programming Using HTML and CSS",
  "IT Academy: Software Defined Storage Concepts",
  "The fundamentals of digital marketing",
];

export const honors: string[] = [
  "On the Spot Award",
  "Internship on Machine Learning",
];

export const languages: { name: string; level: string }[] = [
  { name: "Telugu", level: "Native or Bilingual" },
  { name: "Hindi", level: "Full Professional" },
  { name: "English", level: "Professional Working" },
];

/**
 * Project cards reflect the *real* domains called out in the resume summary.
 * Replace these with specific named projects whenever you're ready.
 */
export type Project = {
  title: string;
  domain: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Cloud Infrastructure Platform",
    domain: "Azure / AWS",
    description:
      "Design and operation of cloud infrastructure across AWS and Azure — networking, identity, storage, and compute foundations supporting production workloads.",
    stack: ["Azure", "AWS", "Bicep", "Networking"],
  },
  {
    title: "Data Center Migration",
    domain: "On-prem → Cloud",
    description:
      "Migration of workloads from on-premises data centers into the cloud, including assessment, rehosting, and replatforming patterns at enterprise scale.",
    stack: ["Azure Migrate", "Lift & Shift", "Replatform"],
  },
  {
    title: "CI/CD Pipeline Automation",
    domain: "DevOps",
    description:
      "End-to-end build, test, and release pipelines for application teams — covering source control workflows, artifact management, and environment promotion.",
    stack: ["Azure DevOps", "Pipelines", "Git"],
  },
  {
    title: "Containerization & Orchestration",
    domain: "Platform Engineering",
    description:
      "Containerizing applications and operating orchestrated workloads — image lifecycle, deployment manifests, and runtime configuration.",
    stack: ["Containers", "Orchestration", "Runtime"],
  },
  {
    title: "Configuration Management",
    domain: "Infrastructure as Code",
    description:
      "Declarative infrastructure with Bicep and ARM templates, drift detection, and reusable modules for repeatable environment provisioning.",
    stack: ["Bicep", "ARM", "IaC"],
  },
  {
    title: "Database Platforms on Azure",
    domain: "Data Services",
    description:
      "Operating Azure SQL and Cosmos DB — provisioning, scaling, backup/restore, and integration with application workloads.",
    stack: ["Azure SQL", "Cosmos DB", "Backups"],
  },
];
