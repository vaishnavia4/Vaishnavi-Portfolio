/**
 * Source of truth for portfolio content. Every fact here comes from
 * Vaishnavi's master resume; nothing is invented.
 */

export const profile = {
  name: "Vaishnavi Akki",
  shortName: "Vaishnavi",
  title: "Senior Cloud & DevOps Engineer",
  specialties: ["Azure Platform", "SRE", "Cloud Security"],
  currentRole: "Cloud Engineer III",
  company: "Mortgage365",
  location: "Denver, Colorado",
  email: "avaishnavi2404@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaishnavia24",
  github: "https://github.com/vaishnavia4",
  resume: "Vaishnavi_Akki_Resume.pdf",
  photo: "profile.jpg",
  years: "6+",
  tagline:
    "I build secure, automated Azure platforms — from hub-and-spoke networks and Bicep to CI/CD, incident response and ISO 27001.",
  summary: [
    "Cloud and DevOps engineer with 6+ years building secure, automated platforms on Azure, AWS and GCP.",
    "Today I own the end-to-end Azure platform behind two mortgage-technology products used by enterprise lenders, including Navy Federal Credit Union and Lennar Mortgage — architecture, networking, CI/CD, security, monitoring and production support.",
    "I care about removing toil: infrastructure as code, self-service automation, least-privilege security, and AI-assisted engineering with Claude Code and MCP.",
  ],
};

export const metrics: { value: string; label: string }[] = [
  { value: "30–40%", label: "Azure cost reduction" },
  { value: "Week → minutes", label: "Customer provisioning" },
  { value: "ISO 27001", label: "Led technical certification" },
];

export const highlights: { value: string; label: string }[] = [
  { value: "2–3 days → <1 day", label: "Infrastructure deployments with modular Bicep" },
  { value: "20+", label: "Enterprise apps on CI/CD pipelines (MetLife)" },
  { value: "−30%", label: "Operating cost after on-prem → GCP migration" },
  { value: "24×7", label: "Primary incident responder and on-call lead" },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Cloud",
    items: ["Microsoft Azure", "AWS", "Google Cloud", "App Service & Functions", "Logic Apps", "Service Bus", "Cosmos DB", "Azure SQL", "Azure OpenAI"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Bicep", "ARM Templates", "Terraform", "Ansible", "Reusable module libraries"],
  },
  {
    title: "CI/CD & DevSecOps",
    items: ["Azure DevOps", "GitHub Actions (OIDC)", "Jenkins", "Git", "Snyk", "SonarQube", "Playwright test pipelines"],
  },
  {
    title: "Containers",
    items: ["Docker", "Kubernetes", "Amazon EKS / ECS", "GKE", "Cloud Run"],
  },
  {
    title: "Networking & Security",
    items: ["Hub-and-spoke", "Private Endpoints & DNS", "Azure Firewall", "Application Gateway / WAF", "VPN", "Entra ID & RBAC", "Managed Identities", "Key Vault / HashiCorp Vault", "Azure Policy", "Microsoft Defender"],
  },
  {
    title: "Reliability & Compliance",
    items: ["Azure Monitor & App Insights", "Log Analytics", "Prometheus & Grafana", "Splunk", "PagerDuty", "Incident management", "Disaster recovery", "ISO 27001"],
  },
  {
    title: "Code & AI Automation",
    items: ["PowerShell", "Python", "Bash", ".NET / C#", "Claude Code", "MCP servers", "AI agents for infrastructure automation"],
  },
];

export type Experience = {
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Mortgage365",
    role: "Cloud Engineer III",
    period: "Apr 2024 — Present",
    location: "Colorado, USA",
    highlights: [
      "Own the Azure platform for two multi-tenant mortgage products used by enterprise lenders including Navy Federal Credit Union, Lennar Mortgage, Planet Home Lending and Carrington.",
      "Cut customer environment provisioning from over a week to minutes with a self-service onboarding platform, built with .NET, Bicep, Azure DevOps and Claude Code.",
      "Reduced Azure costs by 30–40% through right-sizing and cleanup automation, and cut deployments from 2–3 days to under a day by introducing modular Bicep company-wide.",
      "Led the technical implementation of ISO 27001 certification; primary incident responder with 24×7 on-call, owning the incident management policy and the detection-to-remediation path.",
    ],
    stack: ["Azure", "Bicep", "Azure DevOps", "Entra ID", "Defender", "Claude Code"],
  },
  {
    company: "Vel True Technologies",
    client: "MetLife",
    role: "Cloud DevOps Engineer",
    period: "Jun 2023 — Feb 2024",
    location: "Remote",
    highlights: [
      "Built Azure DevOps CI/CD pipelines supporting 20+ enterprise applications across development, test and higher environments.",
      "Provisioned Azure infrastructure with Terraform and deployed containerized applications with Docker and Kubernetes.",
      "Automated configuration with Ansible, PowerShell, Bash and Python, and added security and quality gates to the pipelines.",
    ],
    stack: ["Azure DevOps", "Terraform", "Kubernetes", "Ansible"],
  },
  {
    company: "Tata Consultancy Services",
    client: "HSBC",
    role: "DevOps Engineer",
    period: "Nov 2020 — Apr 2023",
    location: "Hyderabad, India",
    highlights: [
      "Migrated data-center applications to Amazon EKS and ECS, improving scalability and reducing infrastructure costs.",
      "Managed AWS infrastructure (EC2, IAM, CloudWatch) with Terraform, Ansible and Jenkins CI/CD for microservices.",
      "Ran monitoring and alerting with Prometheus, Grafana, CloudWatch, Splunk and PagerDuty; added Vault secrets management and Snyk/SonarQube scanning.",
    ],
    stack: ["AWS", "EKS / ECS", "Terraform", "Jenkins", "Prometheus"],
  },
  {
    company: "Fusion Software Technologies",
    role: "Build & Release / Jr. DevOps Engineer",
    period: "Jun 2018 — Oct 2020",
    location: "Hyderabad, India",
    highlights: [
      "Migrated on-premises infrastructure to Google Cloud, reducing operational costs by 30%.",
      "Built high-availability workloads on GKE, Cloud Functions and Cloud Run, provisioned with Terraform.",
      "Automated UAT and production deployments with Jenkins pipelines.",
    ],
    stack: ["GCP", "GKE", "Terraform", "Jenkins"],
  },
];

export const certifications: { name: string; issuer: string; code?: string; status?: string }[] = [
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft", code: "AZ-305", status: "In progress" },
  { name: "Azure Administrator Associate", issuer: "Microsoft", code: "AZ-104" },
  { name: "Solutions Architect – Associate", issuer: "AWS" },
  { name: "Professional Cloud Architect", issuer: "Google Cloud" },
  { name: "Cloud Practitioner", issuer: "AWS" },
  { name: "Power Platform Functional Consultant Associate", issuer: "Microsoft" },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  url: string;
};

export const projects: Project[] = [
  {
    title: "job-hunter",
    description:
      "Open-source Claude Code plugin with a Python MCP server: searches company job boards (Greenhouse, Lever, Ashby, Workday), tailors truthful resumes with an automated truth check, and verifies application forms against a learned answer bank before submission.",
    stack: ["Python", "MCP", "Claude Code", "Playwright"],
    url: "https://github.com/vaishnavia4/job-hunter",
  },
  {
    title: "azure-landing-zone-bicep",
    description:
      "Private-by-default Azure hub-and-spoke landing zone in modular Bicep: private endpoints and DNS, RBAC Key Vault, Azure Policy guardrails and central diagnostics, deployed by GitHub Actions with OIDC and approval-gated environments.",
    stack: ["Bicep", "Azure", "GitHub Actions", "OIDC"],
    url: "https://github.com/vaishnavia4/azure-landing-zone-bicep",
  },
];

export const focusAreas: { title: string; description: string }[] = [
  {
    title: "Azure platform & networking",
    description: "Hub-and-spoke VNets, private endpoints, firewall and WAF, subscription and tenant boundaries following the Cloud Adoption Framework.",
  },
  {
    title: "Infrastructure as Code",
    description: "Reusable Bicep and Terraform modules that turn days of manual provisioning into repeatable, reviewed deployments.",
  },
  {
    title: "CI/CD & DevSecOps",
    description: "Pipelines with tests, Playwright runs and Snyk/SonarQube scanning across DEV, QA, UAT and production.",
  },
  {
    title: "Security, compliance & reliability",
    description: "ISO 27001 controls and evidence, least-privilege identity, incident response and disaster recovery.",
  },
];

export const education = {
  school: "Osmania University",
  degree: "Bachelor of Engineering, Computer Science",
};

export const languages = ["English", "Hindi", "Telugu"];
