// Replace null with real, absolute https:// URLs. Never use guessed profile links.
export const links = {
  github: 'https://github.com/TechySuryansh' as string | null, // Supplied GitHub profile.
  linkedin: 'https://www.linkedin.com/in/suryansh-singh-7ba737363/' as string | null, // Supplied LinkedIn profile.
  leetcode: 'https://leetcode.com/u/suryanshsingh55/' as string | null, // Supplied LeetCode profile.
  codeforces: null as string | null, // TODO: Codeforces profile URL
  resume: '/resume.pdf' as string | null, // Generated from supplied facts; review before sharing.
};
export const email = 'suryansh.singh2024@nst.rishihood.edu.in';
export type Project = {
  number: string; name: string; category: string; theme: string;
  description: string; features: string; tags: string[];
  github: string; demo: string; workflow: string[]; tryIt: string;
  caseStudy?: string;
};
export const projects: Project[] = [
  {
    number: '01', name: 'ChurnGuard AI', category: 'CUSTOMER ANALYTICS · AGENTIC AI', theme: 'churn',
    description: 'A customer analytics application that connects churn prediction with retrieval-assisted retention planning.',
    features: 'Compare customer risk, generate a retention strategy, ask follow-up questions, and export the plan as a PDF.',
    tags: ['Python', 'Scikit-Learn', 'LangGraph', 'LangChain', 'ChromaDB', 'Groq'],
    github: 'https://github.com/TechySuryansh/GenAI',
    demo: 'https://fomzrnb9gaaa7ivk4nmzog.streamlit.app/',
    workflow: ['Customer profile', 'Churn prediction', 'Retrieve strategies', 'Retention plan'],
    tryIt: 'Enter a sample customer profile, then explore the prediction and retention strategy.',
    caseStudy: '/projects/churnguard/',
  },
  {
    number: '02', name: 'Mental Health Tracker', category: 'MACHINE LEARNING · WELLNESS', theme: 'mental',
    description: 'A wellness assessment project exploring the relationship between student habits, social-media use, and a predicted mental-health score.',
    features: 'A web assessment interface paired with a Python prediction API. Inputs include sleep, activity, study time, social-media usage, and self-reported stress.',
    tags: ['Python', 'React', 'TypeScript', 'Pandas'],
    github: 'https://github.com/TechySuryansh/Mental_Health_Tracker',
    demo: 'https://mental-health-tracker-eosin.vercel.app/',
    workflow: ['Daily habits', 'Validated inputs', 'Prediction model', 'Estimated score'],
    tryIt: 'Explore the assessment with sample inputs. This is an educational prototype, not a clinical assessment.',
  },
  {
    number: '03', name: 'Chat Bot', category: 'CONVERSATIONAL AI · TOOL USE', theme: 'chat',
    description: 'A conversational AI project with thread-based memory and tools for searching the web and uploaded documents.',
    features: 'The current repository implements a LangGraph agent, persistent conversation checkpoints, configurable personas, and document-source citation instructions.',
    tags: ['Python', 'LangChain', 'LangGraph', 'LLMs'],
    github: 'https://github.com/TechySuryansh/Chat_Bot',
    demo: 'https://chatbot-ciryx8htupviy7cm5eshqn.streamlit.app/',
    workflow: ['Question', 'Agent + memory', 'Search tools', 'Contextual response'],
    tryIt: 'Start a conversation in the hosted demo; explore the repository for the current tool-enabled implementation.',
  },
];
export const skillGroups = [
  ['Programming', ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']],
  ['Frontend', ['React', 'Redux Toolkit', 'Tailwind CSS']],
  ['Backend', ['Node.js', 'Express.js', 'Prisma ORM']],
  ['AI & Machine Learning', ['Machine Learning', 'LangChain', 'LangGraph', 'LLMs', 'Pandas', 'Matplotlib']],
  ['Databases', ['MongoDB', 'MySQL']],
  ['Tools & Other', ['Git', 'GitHub', 'Figma', 'n8n', 'OAuth 2.0']],
] as const;
export const education = [
  { school: 'Newton School of Technology, Rishihood University', degree: 'B.Tech in Artificial Intelligence', dates: '2024–2028', result: '8.0 / 10 CGPA' },
  { school: 'South City Public School', degree: 'Class XII', dates: '2022–2023', result: '84%' },
  { school: 'South City Public School', degree: 'Class X', dates: '2020–2021', result: '90%' },
];
