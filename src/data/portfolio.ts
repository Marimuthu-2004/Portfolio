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
    id: 'global-superstore-sales-analysis',
    title: 'Global Superstore 2016 – Sales Data Analysis',
    category: 'Python Data Analysis',
    description: 'Analyzed Global Superstore 2016 retail data using Python to understand sales trends, profitability, regional performance, product performance, discounts and customer orders.',
    problem: 'Understanding sales performance, profitability and discount patterns across different product categories and regions.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Google Colab'],
    process: ['KPI Analysis', 'Monthly Sales Trend', 'Region-wise Sales & Profit Analysis', 'Category-wise Sales & Profit Analysis', 'Discount vs Profit Analysis', 'Product Profitability Analysis', 'Returned Orders Analysis', 'Shipping Duration Analysis'],
    insights: [
      'Performed KPI analysis to track overall sales, profit and order volume across the dataset',
      'Identified monthly sales trends to understand seasonal patterns and revenue fluctuations',
      'Analysed region-wise and category-wise sales and profit to surface high and low performing segments',
      'Explored discount vs profit relationship to understand the impact of discounting on profitability',
      'Conducted product profitability analysis to identify best and worst performing products',
      'Investigated returned orders and shipping duration patterns to highlight operational inefficiencies',
    ],
    outcome: 'Created a consolidated business dashboard and visualizations to identify sales patterns, profitability differences and opportunities for better business decisions.',
    githubUrl: 'https://github.com/Marimuthu-2004/Portfolio/tree/main/Global-Superstore-Sales-Analysis',
    colabUrl: 'https://colab.research.google.com/drive/16hbFMDSiY8r6kK1Y8UlUyAfqtNlhtjtG?usp=sharing',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Sales Analytics', 'Google Colab'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'customer-churn-analysis',
    title: 'Telecom Customer Churn Analysis',
    category: 'Python Data Analysis',
    description: 'End-to-end EDA on a Telco dataset of 7,043 customers to uncover churn drivers — covering contract type, tenure, payment method, and service usage — with a logistic regression baseline model.',
    problem: 'High customer churn in the telecom sector results in significant revenue loss. Identifying the key behavioral and demographic drivers of churn enables targeted, data-driven retention strategies.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    process: ['Data Loading', 'Data Cleaning', 'EDA', 'Feature Engineering', 'Visualization', 'Model Building'],
    insights: [
      'Analyzed 7,043 customer records across 21 features including contract type, tenure, and payment method',
      'Month-to-month contract customers showed significantly higher churn rates than annual contract holders',
      'Electronic check payment method correlated with higher churn compared to automatic payment options',
      'Customers with shorter tenure and no online security or tech support services churned more frequently',
      'Applied logistic regression baseline model achieving ~82% classification accuracy on the test set',
    ],
    outcome: 'A well-documented EDA notebook and PDF report with visualizations pinpointing key churn drivers across contract, payment, and service dimensions — providing an actionable foundation for a retention strategy.',
    githubUrl: 'https://github.com/Marimuthu-2004/Portfolio/tree/main/Telecom-Customer-Churn-Analysis',
    colabUrl: 'https://colab.research.google.com/drive/15F7dH95ORyM4I8jhDDOyQZOPh-vyxJCY?usp=sharing',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'EDA', 'Machine Learning', 'Telecom Analytics'],
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
