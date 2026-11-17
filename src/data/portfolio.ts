export type ProjectCategory = "all" | "ai-vision" | "product-ux" | "web-dev";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  categoryLabel: string;
  role: string;
  keywords: string[];
  summary: string;
  details: string;
  image: string;
  imageAspect: "portrait" | "landscape";
  link: string;
  linkLabel: string;
}

export interface ToolDomain {
  id: string;
  title: string;
  subtitle: string;
  tools: ToolItem[];
}

/**
 * `tone` corrects marks that disappear on the dark canvas:
 * - "invert": pure black marks (GitHub, ChatGPT) flip to light.
 * - "invert-hue": dark marks with brand color keep their hue while lightening.
 */
export interface ToolItem {
  name: string;
  focus: string;
  logo: string;
  tone?: "invert" | "invert-hue";
}

export interface ExperienceItem {
  id: string;
  type: "Work" | "Organization" | "Achievement";
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About Me", href: "#about" },
  { id: "tools", label: "Tools", href: "#tools" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contacts", label: "Contacts", href: "#contacts" },
] as const;

export const HERO_SPECIALTIES = [
  "Artificial Intelligence",
  "Software Development",
  "Creative Media",
] as const;

export const CAREER_FOCUS = [
  "AI & Automation Engineer",
  "Software Engineer",
  "Graphic Designer",
  "Video Editor",
] as const;

export const CORE_SKILLS = [
  "AI & Machine Learning",
  "Computer Vision",
  "Product Management",
  "UI/UX Design",
  "Graphic Design",
  "Videography & Editing",
  "Software Development",
] as const;

export const EDUCATION_HISTORY = [
  {
    institution: "Universitas Brawijaya",
    program: "Informatics Engineering",
    period: "2023 – Present",
  },
  {
    institution: "SMAN 61 Jakarta",
    program: "61st Jakarta State Senior High School",
    period: "2020 – 2023",
  },
] as const;

export const ABOUT_BIO =
  "Syafiq is an Informatics Engineering student at Universitas Brawijaya with a strong focus on Artificial Intelligence and Machine Learning. Equipped with practical experience in product management, UI/UX, and creative media, he actively builds impactful technology projects and leads collaborative teams.";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "infomedia",
    type: "Work",
    role: "AI Automation Intern",
    organization: "PT Infomedia Nusantara",
    period: "February 2026 – Present",
    description:
      "Partnered with the engineering team to build a model management platform and an LLM gateway, gaining hands-on experience in agentic AI, automation workflows, and production software engineering.",
  },
  {
    id: "hmdtif",
    type: "Organization",
    role: "Head of Information & Communication Department",
    organization: "Himpunan Mahasiswa Departemen Teknik Informatika",
    period: "2024 – 2025",
    description:
      "Served across two cabinets: began as a staff member in the Creative Media Division before leading the Information and Communication Department.",
  },
  {
    id: "raion",
    type: "Organization",
    role: "Product Management & Project Officer (Raion Hackjam)",
    organization: "Raion Community",
    period: "2024 – 2025",
    description:
      "Contributed to the Product Management division and led execution as Project Officer for the 2025 Raion Hackjam program.",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "hitech-7",
    award: "3rd Place UI/UX Design",
    event: "Hitech-7",
    year: "2025",
  },
  {
    id: "dekat-cup",
    award: "1st Place PKM-PI",
    event: "Dekat Cup FILKOM UB",
    year: "2023",
  },
] as const;

export const TOOL_DOMAINS: ToolDomain[] = [
  {
    id: "coding",
    title: "Software Development",
    subtitle: "Backend services, data layers, and responsive web interfaces.",
    tools: [
      { name: "Python", focus: "AI & Scripting", logo: "/logos/Python.png" },
      { name: "Java", focus: "Core Engineering", logo: "/logos/Java.png" },
      { name: "JavaScript", focus: "Web & Frontend", logo: "/logos/Javascript.png" },
      { name: "CSS", focus: "Interface Styling", logo: "/logos/CSS.png" },
      { name: "Node.js", focus: "Runtime & APIs", logo: "/logos/Node.png", tone: "invert-hue" },
      { name: "MySQL", focus: "Relational Data", logo: "/logos/Mysql.png" },
      { name: "Docker", focus: "Containerization", logo: "/logos/Docker.png" },
      { name: "GitHub", focus: "Version Control", logo: "/logos/Github.png", tone: "invert" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Computer vision pipelines, model inference, and agentic workflows.",
    tools: [
      { name: "YOLO", focus: "Object Detection", logo: "/logos/Yolo.png" },
      { name: "OpenCV", focus: "Image Processing", logo: "/logos/Opencv.png" },
      { name: "Gemini", focus: "Multimodal LLMs", logo: "/logos/Gemini.png" },
      { name: "ChatGPT", focus: "Reasoning & Prototyping", logo: "/logos/ChatGPT.png", tone: "invert" },
      { name: "Antigravity", focus: "Agentic Coding", logo: "/logos/Antigravity.png" },
      { name: "Hugging Face", focus: "Model Ecosystem", logo: "/logos/Huggingface.png" },
    ],
  },
  {
    id: "creative",
    title: "Creative Media",
    subtitle: "Motion graphics, editorial video, and product interface design.",
    tools: [
      { name: "After Effects", focus: "Motion Design", logo: "/logos/AfterEffects.png" },
      { name: "Premiere Pro", focus: "Video Editing", logo: "/logos/PremierePro.png" },
      { name: "Photoshop", focus: "Photo & Compositing", logo: "/logos/Photoshop.png" },
      { name: "CapCut", focus: "Rapid Short-Form", logo: "/logos/Capcut.png" },
      { name: "Figma", focus: "UI/UX & Prototyping", logo: "/logos/Figma.png" },
      { name: "Canva", focus: "Visual Collateral", logo: "/logos/Canva.png" },
    ],
  },
];

export const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "ai-vision", label: "AI & Vision" },
  { id: "product-ux", label: "Product & UI/UX" },
  { id: "web-dev", label: "Web Development" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "coffee-roast",
    number: "01",
    title: "Coffee Roast Classifier with Computer Vision",
    category: "ai-vision",
    categoryLabel: "AI & Computer Vision",
    role: "Machine Learning Engineer",
    keywords: ["Computer Vision", "Machine Learning", "OpenCV"],
    summary:
      "Automated visual inspection pipeline classifying green, light, medium, and dark coffee bean roast levels.",
    details:
      "Developed a computer vision system to classify coffee bean roast levels (green, light, medium, dark) using GLCM and LBP texture feature extraction alongside color feature extraction. Through digital image processing, the system detects individual beans in an image and assigns roast classification labels automatically.",
    image: "/images/Coffee_Beans_Project.png",
    imageAspect: "portrait",
    link: "https://bit.ly/CoffeeBeansClassifier",
    linkLabel: "View Project",
  },
  {
    id: "number-plate",
    number: "02",
    title: "Number Plate Recognition with Computer Vision",
    category: "ai-vision",
    categoryLabel: "AI & Computer Vision",
    role: "Machine Learning Engineer",
    keywords: ["Computer Vision", "Deep Learning", "YOLOv8"],
    summary:
      "Real-time Automatic Number Plate Recognition (ANPR) pairing YOLOv8 localization with OCR character extraction.",
    details:
      "Built an Automatic Number Plate Recognition (ANPR) system using a YOLOv8 model to detect license plate bounding boxes and OCR technology to transcribe plate characters accurately, automating vehicle identification for traffic monitoring and smart parking.",
    image: "/images/Number_Plates_Project.png",
    imageAspect: "landscape",
    link: "https://github.com/cakrasyafiq/VehiclePlateDetection",
    linkLabel: "View Repository",
  },
  {
    id: "brawijaya-essay",
    number: "03",
    title: "Brawijaya Essay Competition Website",
    category: "web-dev",
    categoryLabel: "Web Development",
    role: "Frontend Designer & Developer",
    keywords: ["Web Development", "Frontend Design"],
    summary:
      "Dynamic national competition hub guiding participants from abstract registration to final paper submission.",
    details:
      "Designed and built the official landing page for Brawijaya Essay Competition 2026, unifying an interactive event timeline, document upload portals, downloadable guidebooks, and sponsorship sections into one streamlined participant journey.",
    image: "/images/Brawijaya_Essay_Competition_Project.png",
    imageAspect: "landscape",
    link: "https://brawijayaessaycompetition.site/",
    linkLabel: "Visit Live Site",
  },
  {
    id: "ruang-karir",
    number: "04",
    title: "Ruang Karir",
    category: "product-ux",
    categoryLabel: "Product & UI/UX",
    role: "Product Manager & UX Researcher",
    keywords: ["UI/UX Design", "Product Management", "Mobile"],
    summary:
      "AI-assisted mobile career preparation platform helping students and fresh graduates bridge industry readiness.",
    details:
      "Architected the product concept and UX research for Ruang Karir, a mobile career-readiness application featuring flexible learning modules, AI-graded essay assessments, CV generation, and interview practice aligned with Indonesian labor market data.",
    image: "/images/Ruang_Karir_Project.png",
    imageAspect: "portrait",
    link: "https://bit.ly/RuangKarir",
    linkLabel: "View Case Study",
  },
  {
    id: "chuanks",
    number: "05",
    title: "Chuanks",
    category: "product-ux",
    categoryLabel: "Product & UI/UX",
    role: "Product Manager & UX Researcher",
    keywords: ["UI/UX Design", "Product Management", "Mobile"],
    summary:
      "MSME growth ecosystem combining business education, merchant community feeds, and investor matchmaking.",
    details:
      "Designed Chuanks, a mobile-first support platform empowering Indonesian MSME owners with financial tracking, structured entrepreneurship education, peer community discussions, and direct connections to prospective investors.",
    image: "/images/Chuanks_Project.png",
    imageAspect: "landscape",
    link: "https://bit.ly/ChuanksPrototype",
    linkLabel: "Open Prototype",
  },
  {
    id: "coinvest",
    number: "06",
    title: "Coinvest",
    category: "product-ux",
    categoryLabel: "Product & UI/UX",
    role: "Product Manager & UX Researcher",
    keywords: ["UI/UX Design", "Product Management", "Mobile"],
    summary:
      "Digital investment learning and community mobile app with curated courses, market charts, and news discussions.",
    details:
      "Led product strategy and UX research for Coinvest, creating a safe digital investment hub where learners follow mentor-led courses, monitor market trends, read curated financial news, and collaborate on investment strategies.",
    image: "/images/Coinvest_Project.png",
    imageAspect: "landscape",
    link: "https://bit.ly/PitchingCoinvest",
    linkLabel: "View Pitch Deck",
  },
];

export const CONTACT_INFO = {
  email: "cakrawalasyafiq3@gmail.com",
  phoneDisplay: "+62 821-1223-9199",
  phoneHref: "tel:+6282112239199",
  whatsappHref: "https://wa.me/6282112239199",
  instagramHandle: "@cakra_syafiq",
  instagramHref: "https://www.instagram.com/cakra_syafiq/",
  linkedinHref: "https://www.linkedin.com/in/putra-syafiq-a601a4315",
  githubHref: "https://github.com/cakrasyafiq",
} as const;
