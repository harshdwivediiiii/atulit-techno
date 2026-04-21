export type NavItem = {
  href: string;
  label: string;
};

export type HeroStat = {
  label: string;
  value: string;
  detail: string;
};

export type SectorCard = {
  title: string;
  description: string;
  accent: "blue" | "orange" | "mixed";
};

export type TimelineMilestone = {
  year: string;
  label: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type FeaturedProject = {
  title: string;
  vendor: string;
  tag: "Infrastructure" | "Power" | "Smelter";
  description: string;
  image: string;
};

export type RecentDelivery = {
  client: string;
  item: string;
  quantity: string;
  completedAt: string;
};

export type Benefit = {
  title: string;
  description: string;
  accent: "blue" | "orange";
};

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
};

export type TableRow = {
  label: string;
  value: string;
};

export type Director = {
  name: string;
  role: string;
  bio: string;
};

export type ContactPerson = {
  name: string;
  phone: string;
};

export const company = {
  name: "Atulit Technology Private Limited",
  shortName: "Atulit Technology",
  displayWordmark: "ATULIT TECHNOLOGY",
  tagline: "Engineering strength. Delivering precision.",
  description:
    "Atulit Technology Pvt Ltd delivers end-to-end steel fabrication for mining, agriculture, infrastructure, and heavy industrial projects with disciplined planning, quality-controlled production, and dependable dispatch execution from Bhilai.",
  location: "Bhilai, Chhattisgarh, India",
  address:
    "Mouja Jamul PHN 18/01, Near Rail Engineering Park, Shivpuri Jamul, Hathkhoj, Bhilai, Dist-Durg, Chhattisgarh 490024",
  emailPrimary: "atulittechno@gmail.com",
  emailSecondary: "atulittechno@gmail.com",
  established: "2009",
} as const;

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#team", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export const heroStats: HeroStat[] = [
  {
    label: "Years in fabrication",
    value: "15+",
    detail: "Operating since 2009 with project-led execution roots in Bhilai.",
  },
  {
    label: "Approx. turnover",
    value: "Rs 10 Cr",
    detail: "Growth backed by infrastructure setup and fabrication specialization.",
  },
  {
    label: "Monthly capacity",
    value: "100-250 MT",
    detail: "Medium and heavy structural fabrication delivered to drawing.",
  },
];

export const sectorCards: SectorCard[] = [
  {
    title: "Mining",
    description:
      "Heavy-duty fabricated structures, conveyors, platforms, and supports engineered for demanding mining environments.",
    accent: "blue",
  },
  {
    title: "Agriculture",
    description:
      "Precision steel solutions for sheds, storage systems, and industrial agricultural infrastructure.",
    accent: "orange",
  },
  {
    title: "Infrastructure",
    description:
      "Plant structures, industrial frameworks, and project steel packages supplied through execution-focused fabrication.",
    accent: "mixed",
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2009",
    label: "Fabrication journey begins",
    description:
      "The group expanded from manpower support work into fabrication projects with a workshop-led operating model.",
  },
  {
    year: "2014",
    label: "Major plant-linked orders",
    description:
      "Execution matured through larger industrial supply requirements and tighter project coordination.",
  },
  {
    year: "2019",
    label: "Multi-sector expansion",
    description:
      "Fabrication capability broadened across mining, agriculture, infrastructure, and related industrial scopes.",
  },
  {
    year: "2024",
    label: "5-acre facility strength",
    description:
      "The company profile highlights a developed fabrication base and production capacity of up to 250 MT per month.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Design preparation",
    description:
      "Drawings, bill of materials, fabrication intent, and project constraints are aligned before production release.",
  },
  {
    step: "02",
    title: "Material acquisition",
    description:
      "Steel and supporting inputs are sourced against project specifications, mill availability, and delivery priorities.",
  },
  {
    step: "03",
    title: "Cutting and drilling",
    description:
      "Members are prepared through precision cutting, hole-making, fit-up preparation, and fabrication sequencing.",
  },
  {
    step: "04",
    title: "Bending and welding",
    description:
      "Skilled fabrication teams shape and join steel components into assembly-ready structural elements.",
  },
  {
    step: "05",
    title: "Quality checks",
    description:
      "Dimensional checks, weld review, and stage-wise inspection help maintain drawing compliance throughout production.",
  },
  {
    step: "06",
    title: "Finishing",
    description:
      "Grinding, blasting, priming, painting, and surface preparation are completed to project-specific requirements.",
  },
  {
    step: "07",
    title: "Delivery and installation support",
    description:
      "Dispatch planning and execution support are coordinated to help fabricated packages move smoothly to site.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "S G F Infra Private Limited",
    vendor: "Zetfab India Private Limited",
    tag: "Infrastructure",
    description:
      "Fabricated structural steelwork for large-scale civil infrastructure delivery packages.",
    image: "/assets/atulit/project-sgf.jpg",
  },
  {
    title: "NTPC Simhadri",
    vendor: "Zetfab India Private Limited",
    tag: "Power",
    description:
      "Heavy steel structures supplied for the NTPC Simhadri thermal power station.",
    image: "/assets/atulit/project-ntpc.jpg",
  },
  {
    title: "NTPC Sipat",
    vendor: "Zetfab India Private Limited",
    tag: "Power",
    description:
      "Plant-grade fabrication support for the NTPC Sipat super thermal power project.",
    image: "/assets/atulit/project-ntpc.jpg",
  },
  {
    title: "BALCO 410 kt/a Aluminium Smelter",
    vendor: "Vrinda Engineering / Larsen & Toubro Ltd.",
    tag: "Smelter",
    description:
      "Structural fabrication for the aluminium smelter expansion package at BALCO.",
    image: "/assets/atulit/project-balco.jpg",
  },
];

export const recentDeliveries: RecentDelivery[] = [
  { client: "ADANI", item: "Fabrication structure", quantity: "116.911 MT", completedAt: "March 2026" },
  { client: "IOCL", item: "Fabrication structure", quantity: "469 MT", completedAt: "March 2026" },
  { client: "KEC", item: "Fabrication structure", quantity: "122 MT", completedAt: "February 2026" },
  { client: "JSSL", item: "Fabrication structure", quantity: "245 MT", completedAt: "January 2026" },
  { client: "NMDC", item: "Fabrication structure", quantity: "321 MT", completedAt: "October 2025" },
  { client: "NMDC", item: "Fabrication structure", quantity: "114 MT", completedAt: "October 2025" },
];

export const benefits: Benefit[] = [
  {
    title: "Durability",
    description:
      "Engineered steel sections and fabrication workflows are built for long-term industrial service conditions.",
    accent: "blue",
  },
  {
    title: "Cost-effective execution",
    description:
      "Material planning, fabrication sequencing, and facility utilization help control avoidable project cost.",
    accent: "orange",
  },
  {
    title: "Sustainability",
    description:
      "Steel remains highly recyclable, supporting practical environmental and lifecycle benefits across projects.",
    accent: "blue",
  },
  {
    title: "Safety-focused delivery",
    description:
      "Structured fabrication processes and trained manpower support safer production and dispatch operations.",
    accent: "orange",
  },
];

export const infrastructureMetrics: Metric[] = [
  {
    value: 5,
    suffix: " Acre",
    label: "Production land",
    description:
      "Open land with developed fabrication, utility, blasting, painting, and raw material handling areas.",
  },
  {
    value: 250,
    prefix: "100-",
    suffix: " MT",
    label: "Monthly output",
    description:
      "Production capacity of 100 to 250 metric tonnes per month according to drawing specification.",
  },
  {
    value: 60,
    prefix: "30-",
    label: "Operating manpower",
    description:
      "Core workforce strength supported by subcontractor teams based on project load and execution intensity.",
  },
];

export const infrastructure: TableRow[] = [
  { label: "Ownership", value: "Atulit Technology Private Limited" },
  { label: "Location", value: company.address },
  { label: "Total area", value: "5 acre open land area, approximately 2,17,800 sq. ft" },
  {
    label: "Fabrication area",
    value: "3 acre developed land area, approximately 1,30,680 sq. ft with 1000 sqm shed area",
  },
  {
    label: "Blasting and painting area",
    value: "1 acre from the site area, approximately 43,500 sq. ft",
  },
  {
    label: "Raw material yard",
    value: "1 acre from the site area, approximately 43,500 sq. ft",
  },
  { label: "Production capacity", value: "100-250 MT per month as per drawing specification" },
  { label: "Manpower", value: "30-60 personnel including subcontractor support" },
  {
    label: "Manufacturing capability",
    value: "Medium and heavy structural fabrication with raw material support",
  },
  { label: "Power source", value: "150 HP" },
];

export const directors: Director[] = [
  {
    name: "Ashish Sharma",
    role: "Director, Operations and Finance",
    bio: "Mechanical engineering graduate with honors and around seven years of experience in steel fabrication, quality control, and deputation exposure with Tata Projects Ltd. Actively involved in infrastructure setup and operational leadership.",
  },
  {
    name: "Rajat Kumar Singh",
    role: "Director, Marketing and Product Understanding",
    bio: "Science graduate with extensive marketing experience in metal products and practical understanding of jigs and fixtures manufacturing activities.",
  },
  {
    name: "Santosh Singh",
    role: "Director, Project and Operational Management",
    bio: "Engineering graduate with about 15 years of experience in technical projects, technological structures, and industrial infrastructure execution.",
  },
];

export const workforceStrengths = [
  "Structural fitters",
  "Professional engineers",
  "Certified welders",
  "Painters",
  "Loaders",
  "Shop manpower",
  "Certified welding supervisors",
  "Quality inspectors",
];

export const contactPeople: ContactPerson[] = [
  { name: "Ashish Sharma", phone: "+91-7999670177" },
  { name: "Santosh Singh", phone: "+91-8827679894" },
  { name: "Ashwin Rathor", phone: "+91-6261219070" },
];
