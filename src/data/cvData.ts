export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isLatest?: boolean;
  responsibilities: string[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period?: string;
  status?: string;
  notes?: string;
}

export interface LanguageItem {
  name: string;
  proficiency: 'Native' | 'Professional' | 'Basic' | 'Elementary';
  levelPercentage: number;
  badge: string;
}

export interface OperationalPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metricsLabel: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: 'Amit Halder',
  title: 'Data Entry Executive & Operations Professional',
  location: 'Kolkata, West Bengal, India',
  phone: '(+91) 7003660883',
  phoneClean: '+917003660883',
  email: 'askfor.amithalder@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amit-halder-/',
  linkedinDisplay: 'https://www.linkedin.com/in/amit-halder-/',
  summary:
    'Detail-oriented Data Entry Executive and Operations Professional experienced in data entry, data processing, data verification, data validation, ERP data management, record maintenance, documentation, inventory tracking, order tracking, dispatch coordination, and report preparation. Skilled in maintaining accurate operational records, updating ERP information, verifying data, organizing documentation, and preparing reports. Proficient in Microsoft Excel, ERP systems, Power BI, and data analysis, with a strong focus on data accuracy, attention to detail, organization, and meeting deadlines.',
  supportingStatement:
    'Specialized in high-precision data processing, ERP management, operational record keeping, inventory/dispatch tracking, and analytical reporting with Microsoft Excel and Power BI.',
  resumeFileName: 'Amit_Halder (Data Entry Executive).pdf',
  resumeUrl: `${import.meta.env.BASE_URL}Amit_Halder%20(Data%20Entry%20Executive).pdf`,
} as const;

export const OPERATIONAL_PILLARS: OperationalPillar[] = [
  {
    id: 'data-accuracy',
    title: 'Data Accuracy & Verification',
    tagline: 'Precision validation & error-free processing',
    description:
      'Rigorous cross-checking and verification workflows ensuring operational and inventory databases reflect zero-discrepancy records.',
    metricsLabel: 'Integrity First',
    highlights: [
      'Data verification & validation',
      'Quality checking & error remediation',
      'Record consistency audits',
    ],
  },
  {
    id: 'erp-operations',
    title: 'ERP & Inventory Management',
    tagline: 'End-to-end production data continuity',
    description:
      'Hands-on ERP data maintenance across manufacturing, inventory levels, production runs, and material requirements planning (MRP).',
    metricsLabel: 'Operational Continuity',
    highlights: [
      'ERP data entry & system updates',
      'Inventory data tracking',
      'Production data records',
    ],
  },
  {
    id: 'order-dispatch',
    title: 'Order & Dispatch Tracking',
    tagline: 'Timely logistics & documentation synchronization',
    description:
      'Seamless coordination between orders, delivery schedules, dispatch paperwork, and customer fulfilment tracking.',
    metricsLabel: 'Workflow Synchronization',
    highlights: [
      'Order status monitoring',
      'Dispatch documentation & delivery logs',
      'Cross-department coordination',
    ],
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    tagline: 'Actionable operational business intelligence',
    description:
      'Transforming operational logs into structured management reports using Microsoft Excel, Power BI, and analytical methodologies.',
    metricsLabel: 'Actionable Intelligence',
    highlights: [
      'Microsoft Excel & Power BI reporting',
      'Operational data extraction & cleaning',
      'Management report preparation',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'pioneer-mega-printers',
    role: 'Assistant PPC Manager / R&D Companion',
    company: 'Pioneer Mega Printers',
    period: 'Jun 2025 – Nov 2025',
    isLatest: true,
    tags: ['ERP Implementation', 'Inventory Data', 'Operational Data Tracking', 'Report Preparation'],
    responsibilities: [
      'Maintained and updated ERP inventory and operational data to support accurate record keeping.',
      'Performed data verification and record checking for inventory and operational information.',
      'Maintained accurate inventory records and supported data analysis and report preparation.',
      'Organized operational data and documentation for efficient information management.',
      'Supported ERP implementation and operational data tracking across production activities.',
    ],
  },
  {
    id: 'jay-boxes',
    role: 'Production Supervisor / Quality Executive',
    company: 'Jay Boxes',
    period: 'Mar 2024 – May 2025',
    tags: ['Quality Checking', 'Logistics Records', 'ERP Records', 'Production Reports'],
    responsibilities: [
      'Maintained and updated production, operational, and ERP records with a focus on data accuracy.',
      'Managed production and logistics information and prepared related reports.',
      'Verified operational information and maintained accurate documentation and records.',
      'Performed data checking activities to maintain reliable operational information.',
      'Supported coordination of production and logistics information while maintaining organized records.',
    ],
  },
  {
    id: 'york-print',
    role: 'PPC Assistant / Dispatch Supervisor',
    company: 'York Print Pvt. Ltd. – Unit IV, Ahmedabad',
    location: 'Ahmedabad',
    period: 'Mar 2023 – Feb 2024',
    tags: ['Order Tracking', 'Dispatch Records', 'MRP & Production Planning', 'Delivery Schedules'],
    responsibilities: [
      'Prepared and maintained dispatch records and operational documentation.',
      'Updated and verified order and dispatch information to maintain accurate records.',
      'Tracked order status and delivery schedules while maintaining related data and documentation.',
      'Supported production planning, MRP, order processing, and dispatch operations.',
      'Maintained organized records to support timely information tracking and operational coordination.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'all',
    title: 'All Skills',
    description: 'Comprehensive inventory of verified data, analytical, ERP, and operational competencies.',
    skills: [],
  },
  {
    id: 'data-operations',
    title: 'Data & Operations',
    description: 'Core competencies in high-volume processing, accuracy verification, and lifecycle record maintenance.',
    skills: [
      'Data Entry & Data Processing',
      'Data Verification & Validation',
      'Data Accuracy & Quality Checking',
      'Data Management & Record Maintenance',
      'ERP Data Entry & Management',
      'Inventory Data Management',
      'Order Tracking',
      'Dispatch Tracking',
      'Documentation & Record Keeping',
      'Production Data Management',
      'Data Cleaning',
      'Data Entry',
      'Data Management',
      'Documentation',
    ],
  },
  {
    id: 'analytics-tools',
    title: 'Analytics & Business Tools',
    description: 'Technical proficiencies for analytical modelling, data analysis, and stakeholder reporting.',
    skills: [
      'Microsoft Excel',
      'Power BI',
      'Data Analysis',
      'Report Preparation',
      'Reporting',
    ],
  },
  {
    id: 'erp-planning',
    title: 'ERP & Planning',
    description: 'Industrial systems management and manufacturing workflow coordination.',
    skills: [
      'ERP Systems',
      'MRP & Production Planning',
    ],
  },
];

export const ALL_TECHNICAL_SKILLS = [
  { name: 'Data Entry & Data Processing', category: 'Data & Operations', primary: true },
  { name: 'Data Verification & Validation', category: 'Data & Operations', primary: true },
  { name: 'Data Accuracy & Quality Checking', category: 'Data & Operations', primary: true },
  { name: 'Data Management & Record Maintenance', category: 'Data & Operations', primary: true },
  { name: 'ERP Data Entry & Management', category: 'Data & Operations', primary: true },
  { name: 'Microsoft Excel', category: 'Analytics & Business Tools', primary: true },
  { name: 'Data Cleaning', category: 'Data & Operations', primary: false },
  { name: 'Report Preparation', category: 'Analytics & Business Tools', primary: true },
  { name: 'Inventory Data Management', category: 'Data & Operations', primary: true },
  { name: 'Order Tracking', category: 'Data & Operations', primary: true },
  { name: 'Dispatch Tracking', category: 'Data & Operations', primary: true },
  { name: 'Documentation & Record Keeping', category: 'Data & Operations', primary: true },
  { name: 'Production Data Management', category: 'Data & Operations', primary: true },
  { name: 'MRP & Production Planning', category: 'ERP & Planning', primary: true },
  { name: 'Power BI', category: 'Analytics & Business Tools', primary: true },
  { name: 'Data Analysis', category: 'Analytics & Business Tools', primary: true },
  { name: 'ERP Systems', category: 'ERP & Planning', primary: true },
  { name: 'Data Entry', category: 'Data & Operations', primary: false },
  { name: 'Data Management', category: 'Data & Operations', primary: false },
  { name: 'Reporting', category: 'Analytics & Business Tools', primary: false },
  { name: 'Documentation', category: 'Data & Operations', primary: false },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'ignou',
    institution: 'Indira Gandhi National Open University',
    degree: 'Bachelor of Arts (B.A.) — Pursuing',
    period: '2026–2029',
    status: 'Currently Pursuing',
    notes: 'Undergraduate Degree Program',
  },
  {
    id: 'wbchse',
    institution: 'West Bengal Council of Higher Secondary Education (WBCHSE)',
    degree: 'Higher Secondary (Arts)',
    period: 'Completed',
    status: 'Completed',
    notes: 'Higher Secondary Arts Stream',
  },
];

export const LANGUAGE_DATA: LanguageItem[] = [
  {
    name: 'Bengali',
    proficiency: 'Native',
    levelPercentage: 100,
    badge: 'Native Language',
  },
  {
    name: 'English',
    proficiency: 'Professional',
    levelPercentage: 85,
    badge: 'Professional Working',
  },
  {
    name: 'Hindi',
    proficiency: 'Professional',
    levelPercentage: 85,
    badge: 'Professional Working',
  },
  {
    name: 'Assamese',
    proficiency: 'Basic',
    levelPercentage: 45,
    badge: 'Basic Working Knowledge',
  },
  {
    name: 'French',
    proficiency: 'Elementary',
    levelPercentage: 30,
    badge: 'Elementary Proficiency',
  },
  {
    name: 'Japanese',
    proficiency: 'Elementary',
    levelPercentage: 30,
    badge: 'Elementary Proficiency',
  },
];

export const VERIFIED_CV_METRICS = [
  {
    label: 'Industrial Roles',
    value: '3',
    detail: 'Packaging & Printing manufacturing experience',
  },
  {
    label: 'Core Competencies',
    value: '22',
    detail: 'Verified data, ERP, & analytical skills',
  },
  {
    label: 'Languages',
    value: '6',
    detail: 'Multilingual operational capability',
  },
  {
    label: 'Data Precision',
    value: '100%',
    detail: 'Strict verification & quality control',
  },
];
