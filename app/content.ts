export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TableRow = {
  label: string;
  value: string;
};

export type EquipmentGroup = {
  title: string;
  items: string[];
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
  tagline: "Steel fabrication built for demanding industrial projects.",
  description:
    "Atulit Technology Pvt Ltd delivers end-to-end steel fabrication solutions for mining, agriculture, infrastructure, and heavy industrial applications with a strong focus on quality, competitive costing, and dependable delivery.",
  location: "Bhilai, Chhattisgarh, India",
  address:
    "Mouja Jamul PHN 18/01, Near Rail Engineering Park, Shivpuri Jamul, Hathkhoj, Bhilai, Dist-Durg, Chhattisgarh 490024",
  emailPrimary: "atulittechnology@yahoo.com",
  emailSecondary: "atulittechno@gmail.com",
} as const;

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#team", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export const heroStats: Stat[] = [
  {
    label: "Production capacity",
    value: "100-250 MT/month",
    detail: "Delivered as per drawing specifications.",
  },
  {
    label: "Site footprint",
    value: "5 acres",
    detail: "Open land with developed fabrication and utility areas.",
  },
  {
    label: "Operating strength",
    value: "30-60 people",
    detail: "Core team plus subcontractor support based on project load.",
  },
];

export const whyAtulit: Highlight[] = [
  {
    title: "Central India execution advantage",
    description:
      "The Bhilai location helps the team dispatch fabricated structures quickly across project sites with shorter turnaround times.",
  },
  {
    title: "Raw material access close to source",
    description:
      "The facility benefits from proximity to Bhilai Steel Plant and Jindal Steel Plant, supporting procurement agility and manufacturing continuity.",
  },
  {
    title: "Custom fabrication experience",
    description:
      "The company works across structural steel products for mining, agriculture, infrastructure, and adjacent industrial requirements.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Design preparation",
    description:
      "Review project intent, fabrication drawings, and dimensional requirements before production begins.",
  },
  {
    step: "02",
    title: "Material acquisition",
    description:
      "Source raw steel and supporting inputs based on specification, availability, and project schedule.",
  },
  {
    step: "03",
    title: "Cutting and drilling",
    description:
      "Prepare members through precision cutting, hole-making, and core fabrication operations.",
  },
  {
    step: "04",
    title: "Bending and welding",
    description:
      "Shape and join fabricated elements using welding setups suited to the application and section size.",
  },
  {
    step: "05",
    title: "Quality checks",
    description:
      "Inspect fabrication stages to maintain fit-up accuracy, weld quality, and drawing compliance.",
  },
  {
    step: "06",
    title: "Finishing",
    description:
      "Complete grinding, blasting, painting, and final surface preparation required for delivery.",
  },
  {
    step: "07",
    title: "Delivery and installation support",
    description:
      "Coordinate dispatch and provide practical execution support through the final handover phase.",
  },
];

export const benefits: Highlight[] = [
  {
    title: "Durability",
    description:
      "Fabricated steel offers long service life, dependable structural performance, and low maintenance in demanding environments.",
  },
  {
    title: "Cost-effectiveness",
    description:
      "Stable material economics and optimized fabrication planning help control project cost without compromising utility.",
  },
  {
    title: "Sustainability",
    description:
      "Steel is highly recyclable, making it a practical choice for both environmental and economic sustainability.",
  },
  {
    title: "Safety",
    description:
      "Steel structures are easier to clean, resistant to mold, and suited to industrial environments with controlled fabrication standards.",
  },
];

export const companyStory = [
  "Atulit Technology works in fabricated steel with an unwavering dedication to quality and on-time delivery.",
  "The group originated in Bhilai as K P Fabricators, initially supplying manpower to steel and metal industries before expanding into fabrication projects in 2009.",
  "By 2024, the promoters had focused fully on fabrication, reaching an approximate turnover of Rs 10 crore while continuing to improve cost planning, design optimization, equipment balancing, and execution oversight.",
];

export const solutions: Highlight[] = [
  {
    title: "Twisted and complex steel forms",
    description:
      "Fabrication capability aimed at turning difficult product geometries into production-ready structural outcomes.",
  },
  {
    title: "Timely supply of products",
    description:
      "An execution-focused manufacturing process designed to keep delivery commitments practical and dependable.",
  },
  {
    title: "Economical manufacturing",
    description:
      "Operational planning and facility utilization are used to reduce unnecessary manufacturing cost.",
  },
  {
    title: "Consistent finished quality",
    description:
      "Inspection and finishing workflows are built around maintaining a high standard in delivered output.",
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

export const equipmentGroups: EquipmentGroup[] = [
  {
    title: "Cutting",
    items: [
      "Pug cutting with track: 10 units",
      "Hand torch cutting sets: 15 units",
    ],
  },
  {
    title: "Welding",
    items: [
      "Arc machine 200 amp: 5 units",
      "Arc machine 300 amp: 5 units",
      "Arc machine 400 amp: 5 units",
      "MIG machine: 12 units",
    ],
  },
  {
    title: "Drilling",
    items: [
      "Magnetic core cutter drill: 10 units",
      "Radial drill: 2 units",
    ],
  },
  {
    title: "Material handling and finishing",
    items: [
      "ACE Hydra 15 MT capacity: 2 units",
      "Grinding machine AG7: 15 units",
      "Grinding machine AG5: 10 units",
      "Grinding machine AG4: 5 units",
      "Pencil grinder machine: 2 units",
    ],
  },
  {
    title: "Blasting and painting",
    items: [
      "Atlas Marg 40 HP screw compressor with hopper and receiver: 1 set",
      "Port gun and pneumatic airless spray gun: 1 set",
    ],
  },
];

export const marketChallenges: Highlight[] = [
  {
    title: "Inflation pressure",
    description:
      "Metal fabricators must balance cost increases with quality, customer retention, and commercial viability.",
  },
  {
    title: "Supply uncertainty",
    description:
      "Import volatility and delayed inputs make in-stock machinery and dependable sourcing more important.",
  },
  {
    title: "Staffing and skills",
    description:
      "Industrial growth depends on attracting trained operators, technical talent, and reliable fabrication crews.",
  },
  {
    title: "Customization and delivery",
    description:
      "Customers still expect tailored parts and fast turnaround, even when supply chains remain under pressure.",
  },
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

export const projectStatement =
  "The company profile highlights ongoing project capability, but no named case studies or client references are provided. The website presents this as readiness for project-based execution rather than inventing a portfolio.";

export const contactPeople: ContactPerson[] = [
  { name: "Ashish Sharma", phone: "+91-7999670177" },
  { name: "Santosh Singh", phone: "+91-8827679894" },
  { name: "Ashwin Rathor", phone: "+91-6261219070" },
];
