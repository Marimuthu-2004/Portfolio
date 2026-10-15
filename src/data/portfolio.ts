import type {
  PersonalInfo, SkillCategory, Project, Education,
  Certification, Experience, Profile, Achievement, Metric, WorkflowStep
} from '../types';

export const personal: PersonalInfo = {
  name: 'Mari Muthu M',
  title: 'Data Analyst',
  tagline: 'Transforming raw data into actionable business insights.',
  location: 'Chennai, Velachery',
  email: 'marimuthumariappan122004@gmail.com',
  phone: '+91-6382933945',
  linkedin: 'https://www.linkedin.com/in/mari-muthu-m-a58a01255',
  github: 'https://github.com/Marimuthu-2004',
  available: true,
};

export const typingTitles: string[] = [
  'Data Analyst',
  'SQL & Python Developer',
  'Data Visualization Enthusiast',
  'Business Intelligence Analyst',
  'Power BI Dashboard Builder',
];

export const about = {
  summary: `I'm a Computer Science Engineering student (2026) with a deep passion for data analytics and business intelligence. Based in Chennai, I enjoy working at the intersection of technology and business—turning complex datasets into clear, actionable insights that drive smarter decisions.

My analytical journey began with a curiosity about why things work the way they do. That curiosity evolved into hands-on skills: writing SQL queries to extract meaningful patterns, building interactive Power BI dashboards, and using Python with Pandas and Seaborn to explore data stories end-to-end.

I believe good data analysis is not just about numbers—it's about communicating insights in a way that resonates with any audience, technical or not. My goal is to grow into a data professional who bridges the gap between raw data and real-world business value.`,
  highlights: [
    'Analytical thinker who finds patterns where others see noise',
    'Passionate about data-driven decision making',
    'Skilled at communicating insights to non-technical stakeholders',
    'Continuous learner, always expanding my analytics toolkit',
  ],
};

export const metrics: Metric[] = [
  { label: 'Projects Completed', value: 2, unit: 'Analytics Projects', icon: '📊', color: 'cyan' },
  { label: 'Certifications', value: 2, unit: 'HackerRank Certified', icon: '🏅', color: 'violet' },
  { label: 'Technologies', value: 15, unit: 'Tools & Languages', icon: '⚙️', color: 'emerald' },
  { label: 'Academic CGPA', value: 8.1, unit: '/ 10.0', icon: '🎓', color: 'amber' },
  { label: 'Records Analyzed', value: 50000, unit: 'Retail Transactions', icon: '🗄️', color: 'cyan' },
  { label: 'Internship', value: 1, unit: 'Professional Experience', icon: '💼', color: 'violet' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: '💻',
    color: 'cyan',
    skills: [
      { name: 'Python', level: 'Intermediate' },
    ],
  },
  {
    category: 'Data Analysis',
    icon: '📊',
    color: 'violet',
    skills: [
      { name: 'Pandas', level: 'Intermediate' },
      { name: 'NumPy', level: 'Intermediate' },
      { name: 'Data Cleaning', level: 'Intermediate' },
      { name: 'Data Preprocessing', level: 'Intermediate' },
      { name: 'Exploratory Data Analysis', level: 'Intermediate' },
    ],
  },
  {
    category: 'Data Visualization',
    icon: '📈',
    color: 'emerald',
    skills: [
      { name: 'Power BI', level: 'Intermediate' },
      { name: 'Tableau', level: 'Working Knowledge' },
      { name: 'Matplotlib', level: 'Intermediate' },
      { name: 'Seaborn', level: 'Intermediate' },
    ],
  },
  {
    category: 'SQL & Databases',
    icon: '🗄️',
    color: 'amber',
    skills: [
      { name: 'SQL', level: 'Experienced' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'Joins & Subqueries', level: 'Intermediate' },
      { name: 'Window Functions', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'Business Intelligence',
    icon: '🧠',
    color: 'cyan',
    skills: [
      { name: 'KPI Reporting', level: 'Intermediate' },
      { name: 'Dashboard Development', level: 'Intermediate' },
      { name: 'Business Insights', level: 'Intermediate' },
      { name: 'Power Query', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'Microsoft Excel',
    icon: '📋',
    color: 'emerald',
    skills: [
      { name: 'Pivot Tables', level: 'Intermediate' },
      { name: 'VLOOKUP / XLOOKUP', level: 'Intermediate' },
      { name: 'Charts & Dashboards', level: 'Intermediate' },
      { name: 'Conditional Formatting', level: 'Intermediate' },
      { name: 'Excel Macros', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'Statistics',
    icon: '📐',
    color: 'violet',
    skills: [
      { name: 'Descriptive Statistics', level: 'Intermediate' },
      { name: 'Probability', level: 'Intermediate' },
      { name: 'Correlation', level: 'Intermediate' },
      { name: 'Hypothesis Testing', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'ETL & Tools',
    icon: '🔧',
    color: 'amber',
    skills: [
      { name: 'Data Transformation', level: 'Intermediate' },
      { name: 'Data Validation', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Working Knowledge' },
      { name: 'Scikit-learn', level: 'Familiar' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'retail-sales-dashboard',
    title: 'Retail Sales Performance Dashboard',
    category: 'Business Intelligence',
    description: 'An interactive Power BI dashboard analyzing 50,000+ retail transaction records to surface sales trends, profitability, and customer segments across regions.',
    problem: 'Retail operations lacked a unified view of revenue, profit margins, and customer segments, making it difficult to identify high-performing regions and optimize inventory planning.',
    tools: ['Power BI', 'SQL', 'Excel'],
    process: ['Data Extraction', 'SQL Querying', 'Data Aggregation', 'KPI Design', 'Dashboard Build', 'Insight Reporting'],
    insights: [
      'Identified key sales trends across regions and product categories from 50,000+ records',
      'Built KPI cards tracking revenue, profit margin, and customer segmentation',
      'Optimized SQL queries using joins, subqueries, and window functions for efficient data extraction',
      'Insights could support a 12% improvement in inventory planning accuracy',
    ],
    outcome: 'An interactive Power BI dashboard providing stakeholders with real-time visibility into retail performance, supporting data-driven inventory and marketing decisions.',
    tags: ['Power BI', 'SQL', 'Excel', 'KPI', 'Dashboard', 'Sales Analytics'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'customer-churn-analysis',
    title: 'Customer Churn Analysis',
    category: 'Python Data Analysis',
    description: 'Exploratory data analysis and predictive modeling on a telecom customer dataset to identify churn drivers and build a baseline classification model.',
    problem: 'High customer churn in the telecom sector results in revenue loss. Understanding the key drivers of churn enables targeted retention strategies.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    process: ['Data Loading', 'Data Cleaning', 'EDA', 'Feature Engineering', 'Visualization', 'Model Building'],
    insights: [
      'Performed comprehensive EDA on telecom customer dataset to identify churn patterns',
      'Handled missing values, outliers, and categorical encoding for clean model input',
      'Built data visualizations communicating key churn drivers to non-technical audiences',
      'Applied logistic regression baseline model achieving 82% classification accuracy',
    ],
    outcome: 'A well-documented EDA report with visualizations highlighting churn drivers, plus a logistic regression baseline achieving 82% accuracy, providing a foundation for retention strategy.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'EDA', 'Machine Learning', 'Customer Analytics'],
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
];

export const education: Education[] = [
  {
    degree: 'B.E. in Computer Science And Engineering',
    institution: 'Adhiparasakthi College of Engineering',
    period: '2022 – 2026',
    score: '8.1 / 10',
    scoreLabel: 'CGPA',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Certificate (12th Grade)',
    institution: 'Meenakshi Matric Higher Secondary School',
    period: '2020 – 2022',
    score: '80%',
    scoreLabel: 'Percentage',
    icon: '📚',
  },
];

export const certifications: Certification[] = [
  {
    name: 'SQL – 5 Star Badge',
    issuer: 'HackerRank',
    badge: '⭐⭐⭐⭐⭐',
    color: 'emerald',
    verifyUrl: 'https://www.hackerrank.com/certificates',
  },
  {
    name: 'Python – 2 Star Badge',
    issuer: 'HackerRank',
    badge: '⭐⭐',
    color: 'cyan',
    verifyUrl: 'https://www.hackerrank.com/certificates',
  },
];

export const experience: Experience[] = [
  {
    company: 'Login360',
    role: 'Data Analyst Intern',
    period: 'Jun 2026 – Nov 2026',
    location: 'Chennai',
    type: 'internship',
    responsibilities: [
      'Assisted in preparing weekly MIS reports using Excel and SQL for the operations team',
      'Automated repetitive reporting tasks using Excel macros, reducing manual effort by 30%',
      'Supported the analytics team in building ad-hoc dashboards for stakeholder review',
    ],
    tools: ['Excel', 'SQL', 'Excel Macros', 'Dashboard Development'],
  },
];

export const profiles: Profile[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Marimuthu-2004',
    description: 'Data analytics projects, Python scripts, and SQL practice repos.',
    icon: 'github',
    color: 'gray',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mari-muthu-m-a58a01255',
    description: 'Professional network, career updates, and analytics insights.',
    icon: 'linkedin',
    color: 'blue',
  },
  {
    platform: 'HackerRank',
    url: 'https://www.hackerrank.com',
    description: '5-Star SQL badge and 2-Star Python badge holder.',
    icon: 'hackerrank',
    color: 'green',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'HackerRank SQL – 5 Star',
    description: 'Achieved the top 5-star SQL badge on HackerRank, demonstrating advanced proficiency in SQL queries, joins, subqueries, and window functions.',
    icon: '⭐',
    color: 'amber',
  },
  {
    title: 'Analytics / Coding Club Member',
    description: 'Active member of the college Analytics and Coding Club, participating in data challenges, workshops, and collaborative problem-solving sessions.',
    icon: '🏆',
    color: 'cyan',
  },
  {
    title: '30% Reporting Automation',
    description: 'During internship at Login360, automated repetitive Excel reporting tasks using macros, reducing manual effort by 30% for the operations team.',
    icon: '⚡',
    color: 'emerald',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: 'Understand',
    description: 'Define the business problem and success criteria before touching any data.',
    icon: '🔍',
    tools: ['Stakeholder Interviews', 'KPI Definition'],
  },
  {
    step: 2,
    title: 'Collect',
    description: 'Gather data from relevant sources — databases, spreadsheets, or APIs.',
    icon: '📥',
    tools: ['SQL', 'Excel', 'CSV'],
  },
  {
    step: 3,
    title: 'Clean',
    description: 'Handle missing values, remove duplicates, fix outliers, and validate data quality.',
    icon: '🧹',
    tools: ['Pandas', 'Excel', 'Power Query'],
  },
  {
    step: 4,
    title: 'Explore',
    description: 'Perform EDA to uncover patterns, distributions, and correlations in the data.',
    icon: '📊',
    tools: ['Python', 'Statistics', 'Matplotlib'],
  },
  {
    step: 5,
    title: 'Analyze',
    description: 'Apply statistical methods and SQL to extract meaningful insights.',
    icon: '🔬',
    tools: ['SQL', 'Python', 'Statistics'],
  },
  {
    step: 6,
    title: 'Visualize',
    description: 'Create clear, compelling charts and interactive dashboards.',
    icon: '📈',
    tools: ['Power BI', 'Tableau', 'Seaborn'],
  },
  {
    step: 7,
    title: 'Communicate',
    description: 'Present findings and recommendations in business-friendly language.',
    icon: '💡',
    tools: ['Storytelling', 'Reports', 'Dashboards'],
  },
];

export const softSkills: string[] = [
  'Client Interaction & Stakeholder Management',
  'Meeting Tight Deadlines',
  'Cross-Functional Collaboration',
  'Effective Communication',
  'Problem-Solving & Critical Thinking',
  'Time Management & Prioritization',
  'Adaptability & Continuous Learning',
  'Analytical Thinking',
  'Attention to Detail',
  'Training & Knowledge Sharing',
];
