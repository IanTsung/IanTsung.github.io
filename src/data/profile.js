// Single source of truth for portfolio content.
// Rendered by the section components AND fed to the AI twin (worker/) as
// its knowledge base — update here and both stay in sync.

export const education = {
  degree: "Master of Computing",
  school: "Australian National University",
  location: "Canberra, Australia",
  period: "2023 — 2024",
};

export const certifications = [
  { title: "AWS Certified Developer", level: "Associate", issuer: "Amazon Web Services" },
  { title: "AWS Solutions Architect", level: "Professional", issuer: "Amazon Web Services" },
];

export const experiences = [
  {
    title: "Back End Developer",
    company: "Viva Leisure",
    companyIcon: "/work/viva_leisure.jpg",
    duration: "Oct 2024 — Present",
    description:
      "Serverless backend engineering with AWS CDK and TypeScript. Building the platform behind Australia's fastest-growing health clubs.",
    skills: ["AWS CDK", "TypeScript", "Serverless", "DynamoDB"],
  },
  {
    title: "Research Assistant",
    company: "Mandala Partners",
    companyIcon: "/work/mandala_partners.jpg",
    duration: "Feb 2024 — Jun 2024",
    description:
      "Built a zero-shot learning tool for economic analysis of corporate documents on AWS SageMaker.",
    skills: ["AWS SageMaker", "Python", "NLP", "Zero-shot Learning"],
  },
];

export const techStack = {
  Frontend: [
    { title: "HTML", color: "#E34F26", icon: "html5-plain" },
    { title: "CSS", color: "#1572B6", icon: "css3-plain" },
    { title: "TypeScript", color: "#3178C6", icon: "typescript-plain" },
    { title: "React", color: "#61DAFB", icon: "react-original" },
    { title: "React Native", color: "#61DAFB", icon: "react-original" },
    { title: "Expo", color: "#4630EB", icon: "expo-original" },
    { title: "Redux", color: "#764ABC", icon: "redux-original" },
    { title: "Tailwind", color: "#06B6D4", icon: "tailwindcss-original" },
    { title: "SASS", color: "#CC6699", icon: "sass-original" },
    { title: "Flutter", color: "#02569B", icon: "flutter-plain" },
    { title: "Phoenix", color: "#FD4F00", icon: "phoenix-plain" },
  ],
  Backend: [
    { title: "Node.JS", color: "#339933", icon: "nodejs-plain-wordmark" },
    { title: "Express", color: "#CCCCCC", icon: "express-original" },
    { title: "Python", color: "#3776AB", icon: "python-plain" },
    { title: "FastAPI", color: "#009688", icon: "fastapi-plain" },
    { title: "SQLAlchemy", color: "#D71F00", icon: "sqlalchemy-plain" },
    { title: "Django", color: "#44B78B", icon: "django-plain" },
    { title: "ASP.NET", color: "#8A63FF", icon: "dotnetcore-plain" },
    { title: "GraphQL", color: "#E10098", icon: "graphql-plain" },
    { title: "Dart", color: "#0175C2", icon: "dart-plain" },
    { title: "Rust", color: "#F74C00", icon: "rust-original" },
    { title: "Golang", color: "#00ADD8", icon: "go-original-wordmark" },
    { title: "Elixir", color: "#8B5CF6", icon: "elixir-plain" },
  ],
  Cloud: [
    { title: "AWS", color: "#FF9900", icon: "amazonwebservices-plain-wordmark" },
    { title: "Azure", color: "#0089D6", icon: "azure-plain" },
    { title: "GCP", color: "#4285F4", icon: "googlecloud-plain" },
  ],
  Database: [
    { title: "MongoDB", color: "#47A248", icon: "mongodb-plain" },
    { title: "DynamoDB", color: "#4053D6", icon: "dynamodb-plain" },
    { title: "PostgreSQL", color: "#4479A1", icon: "postgresql-plain" },
    { title: "MySQL", color: "#4479A1", icon: "mysql-original" },
    { title: "Redis", color: "#DC382D", icon: "redis-plain" },
  ],
  DevOps: [
    { title: "Docker", color: "#2496ED", icon: "docker-plain" },
    { title: "Kubernetes", color: "#326CE5", icon: "kubernetes-plain" },
  ],
};

// Facts that only the AI twin uses (not rendered on the page). Keep these
// strictly true — the twin is told to never go beyond what's written here.
export const twinNotes = {
  name: "Ian Cong",
  headline: "Full-stack software engineer based in Australia",
  summary:
    "A full-stack engineer who cares about product craft, scalability, and code that ages well — whether it's a serverless backend, a React interface, or the seams in between.",
  careerStart: 2022,
  github: "https://github.com/IanTsung",
  contact: "Use the contact form at the bottom of this site, or email zhaoyan.ian.cong@gmail.com.",
  languages: ["English", "Mandarin Chinese"],
};
