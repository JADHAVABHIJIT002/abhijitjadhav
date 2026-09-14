export const LINKS = {
  linkedin: "https://www.linkedin.com/in/abhijit-jadhav-133833227",
  github: "https://github.com/JADHAVABHIJIT002",
  email: "jadhavabhijeet002@gmail.com",
  phone: "+91 87667 27652",
};

export const RESUME_URL = "/abhijit-jadhav-resume.html";

export const experience = [
  {
    role: "Manager – Product Management | AI/ML & Generative AI",
    company: "Masai School",
    location: "Bengaluru, India",
    current: true,
    points: [
      "Leading 5 major LMS product initiatives focused on transforming user experience, resulting in improved engagement and learning outcomes.",
      "Managing a 48-member cross-functional team across product, engineering, operations and business functions.",
      "Contributed to ₹6 Cr revenue through strategic product decisions, feature prioritization and GTM.",
      "CRM–LMS integrations streamlined sales operations and improved conversion rates by 30%.",
      "AI and automation initiatives reduced manual workflows by 40%.",
      "Conducting Product Discovery workshops, roadmap planning and data-driven decision making using analytics.",
    ],
  },
  {
    role: "Associate Product Manager",
    company: "Duroflex",
    location: "Bengaluru, India",
    points: [
      "Supported the end-to-end product lifecycle from ideation to launch.",
      "Collaborated with design, engineering and marketing teams.",
      "Used data-driven decision making for roadmap and GTM activities.",
      "Conducted user research and created feedback loops.",
    ],
  },
  {
    role: "MERN Stack Developer & Business Analyst",
    company: "Cognizant",
    location: "India",
    points: [
      "Built full-stack MERN applications.",
      "Converted stakeholder requirements into technical solutions.",
      "Worked within Agile delivery processes and QA cycles.",
      "Bridged technical and business teams.",
    ],
  },
  {
    role: "Junior Scientist",
    company: "DRDO",
    location: "India",
    points: [
      "Worked on research and defence projects in a high-security environment.",
      "Applied analytical thinking and structured problem solving.",
      "Created technical documentation.",
      "Worked with mission-critical systems requiring precision, compliance and quality.",
    ],
  },
  {
    role: "Intern",
    company: "HAL",
    location: "India",
    points: [
      "Worked with aerospace systems and engineering processes.",
      "Created and maintained technical documentation.",
      "Worked with experienced engineers on complex technical systems.",
      "Developed engineering rigor, safety awareness and structured problem solving.",
    ],
  },
];

export const journey = [
  {
    org: "HAL",
    role: "Aeronautical Engineer — Internship",
    note: "Aerospace systems & engineering rigor",
    dates: "Jul 2020 – Apr 2021",
  },
  {
    org: "DRDO",
    role: "Junior Scientist",
    note: "Defence R&D, mission-critical systems",
    dates: "Jul 2021 – Jun 2022",
  },
  {
    org: "Cognizant",
    role: "Software Engineer",
    note: "Full-stack development & delivery",
    dates: "Jul 2022 – Sep 2022",
  },
  {
    org: "Cognizant",
    role: "Business Analyst",
    note: "Enterprise IT, stakeholder requirements",
    dates: "Sep 2022 – Jun 2023",
  },
  {
    org: "Duroflex",
    role: "Assistant Manager – Sales Operations",
    note: "Sales operations & processes",
    dates: "Jul 2023 – Jul 2024",
  },
  {
    org: "Masai",
    role: "Manager – Product Management",
    note: "AI/ML, GenAI, LMS at scale",
    dates: "Aug 2024 – Present",
  },
];

export type Project = {
  no: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  techLabel: string;
  tech: string[];
  impactLabel: string;
  impact: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    no: "01",
    name: "AI Lead Conversion Engine",
    category: "AI Product",
    problem: "Sales teams struggled to prioritize leads effectively.",
    solution:
      "An AI/SOP-based lead prioritization and conversion framework that scores and routes leads.",
    techLabel: "AI / Logic",
    tech: ["Engagement scoring", "Intent scoring", "SOP nudges", "Automated follow-up triggers"],
    impactLabel: "Impact",
    impact: ["Improved lead-to-enrollment conversion and reduced manual lead triage."],
    tags: ["AI Lead Scoring", "Automation", "Conversion", "SOP Framework"],
  },
  {
    no: "02",
    name: "Incentive Management Platform",
    category: "Internal Product",
    problem: "Manual and error-prone incentive calculations created low transparency.",
    solution:
      "Centralized weekly, spot, kicker and retention incentives with automated calculations and leaderboards.",
    techLabel: "Technology / Logic",
    tech: ["Rules engine", "Automated calculations", "Real-time leaderboards", "Retention tracking"],
    impactLabel: "Impact",
    impact: [
      "Improved visibility and motivation while reducing manual operational overhead.",
    ],
    tags: ["Incentives", "Leaderboards", "Automation", "Analytics"],
  },
  {
    no: "03",
    name: "Counselling Analytics Platform",
    category: "Data Product",
    problem:
      "Counselling conversations contained valuable signals but were largely unstructured.",
    solution:
      "Analytics platform for understanding intent, conversion probability and follow-up opportunities.",
    techLabel: "AI / Technology",
    tech: [
      "NLP-driven interaction analysis",
      "Intent analysis",
      "Conversion probability",
      "Coaching insights",
    ],
    impactLabel: "Impact",
    impact: ["Improved coaching, follow-up prioritization and management visibility."],
    tags: ["NLP", "Analytics", "Conversion Probability", "Coaching"],
  },
  {
    no: "04",
    name: "AI-Powered Learning Automation",
    category: "AI Product",
    problem: "Manual learning workflows and lack of personalization.",
    solution: "Intelligent recommendations, automated grading and predictive analytics.",
    techLabel: "AI / Technology",
    tech: [
      "ML recommendations",
      "Predictive analytics",
      "Personalized learning paths",
      "Workflow automation",
    ],
    impactLabel: "Impact",
    impact: ["Reduced manual workflows by 40% and improved engagement."],
    tags: ["AI/ML", "Recommendations", "Predictive Analytics", "Automation"],
  },
  {
    no: "05",
    name: "CRM–LMS Integration Platform",
    category: "Integration Product",
    problem: "Sales and learning systems operated in silos.",
    solution: "Automated synchronization and workflow orchestration between CRM and LMS.",
    techLabel: "Technology",
    tech: ["API integration", "Data pipelines", "Workflow automation"],
    impactLabel: "Impact",
    impact: [
      "60% reduction in manual data entry",
      "30% improvement in conversion",
      "₹6 Cr revenue contribution",
    ],
    tags: ["CRM Integration", "Automation", "Revenue Impact"],
  },
  {
    no: "06",
    name: "Modern Farming Platform",
    category: "Startup Vision",
    problem:
      "Urban consumers lack transparent access to sustainable farming, while farmers lack data-driven guidance.",
    solution:
      "A B2C AgriTech platform connecting consumers and farmers through farm-to-table traceability, subscriptions and community.",
    techLabel: "Technology",
    tech: ["AI insights", "IoT monitoring", "Data-driven farming guidance"],
    impactLabel: "Status",
    impact: ["Product Discovery & Planning Phase"],
    tags: ["AgriTech", "AI Insights", "IoT", "Product Vision"],
  },
];

export const caseStudies = [
  {
    no: "01",
    title: "AI Lead Conversion Engine",
    blocks: [
      { label: "Problem", items: ["High lead volume with no effective prioritization."] },
      { label: "Users", items: ["Sales counsellors", "Team leads", "Revenue operations"] },
      {
        label: "Discovery",
        items: ["Engagement", "Response times", "Historical conversion patterns"],
        intro: "Analyzed:",
      },
      { label: "Solution", items: ["AI/SOP-based prioritization, scoring, routing and nudging."] },
      {
        label: "AI / Technology",
        items: ["Engagement data", "Intent data", "Automated SOP follow-ups", "Lead routing"],
      },
      {
        label: "Product Decision",
        items: [
          "Prioritized transparency and explainability over a completely black-box model.",
        ],
      },
      {
        label: "Outcome",
        items: ["More consistent follow-ups", "Higher conversion", "Reduced manual triage"],
      },
    ],
  },
  {
    no: "02",
    title: "CRM–LMS Integration",
    blocks: [
      { label: "Problem", items: ["Sales and learning systems were siloed."] },
      { label: "Users", items: ["Sales", "Operations", "Product", "Finance"] },
      {
        label: "Discovery",
        items: ["Mapped the complete lead-to-learning journey and identified manual handoffs."],
      },
      { label: "Solution", items: ["Automated synchronization and workflow orchestration."] },
      { label: "AI / Technology", items: ["API integrations", "Data pipelines", "Workflow automation"] },
      {
        label: "Outcome",
        items: [
          "60% less manual data entry",
          "30% improvement in conversion",
          "₹6 Cr revenue contribution",
        ],
      },
      {
        label: "Product Decision",
        items: ["Used incremental automation instead of a risky big-bang migration."],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Product Management",
    items: [
      "Product Strategy",
      "Roadmap Planning",
      "OKRs & Metrics",
      "User Research",
      "Feature Prioritization",
      "Go-to-Market",
    ],
  },
  {
    title: "Program Management",
    items: [
      "Agile/Scrum",
      "Stakeholder Management",
      "Cross-functional Leadership",
      "Process Optimization",
      "Risk Management",
      "Team Coordination",
    ],
  },
  {
    title: "Business & Analysis",
    items: [
      "Business Analysis",
      "Requirements Gathering",
      "Data Analysis",
      "Market Research",
      "Competitive Analysis",
      "Business Cases",
    ],
  },
  {
    title: "Technical Skills",
    items: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "Full-Stack Development"],
  },
  {
    title: "AI & Automation",
    items: [
      "AI Product Development",
      "Automation Tools",
      "Data-Driven Products",
      "ML Integration",
      "Product Analytics",
      "AI Strategy",
    ],
  },
  {
    title: "Collaboration & Tools",
    items: ["Jira", "Confluence", "Figma", "Miro", "SQL", "Product Analytics Tools"],
  },
];

export const education = [
  { title: "MBA — Distance Learning", org: "IIM Mumbai" },
  { title: "Product Management with Generative & Agentic AI", org: "BITSoM — 2024" },
  { title: "Minor in AI & Data Science", org: "IIT Mandi — 2023–2024" },
  { title: "Foundations in AI & ML Program", org: "IIT Patna — Vishlesan i-Hub — 2025" },
  {
    title: "B.E. Aeronautical Engineering",
    org: "Priyadarshini College of Engineering, Nagpur — 2017–2021",
  },
];

export const awards = [
  { year: "2023", title: "Best Employee Award" },
  { year: "2024", title: "Best Employee Award" },
  { year: "2025", title: "Emerging Manager Award" },
];
