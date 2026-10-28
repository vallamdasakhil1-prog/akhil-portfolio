export interface NavItem { label: string; href: string }
export interface CapabilityGroup { title: string; items: string[] }
export interface PlateStep { title: string; detail?: string; highlight?: boolean }
export interface Plate { caption: string; numbered?: boolean; steps: PlateStep[] }
export interface Project {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  problem: string;
  features?: string[];
  details?: { label: string; text: string }[];
  stack: string[];
  github?: string;
  demo?: string;
  plate: Plate;
}
export interface Qualification {
  id: string;
  institution: string;
  qualification: string;
  stream?: string;
  status: "current" | "completed";
  statusLabel: string;
  scoreLabel: string;
  score: string;
  scoreNote?: string;
  notes?: string[];
}

export const profile = {
  name: "Vallamdas Akhil",
  title: "AI Engineer & Software Developer",
  location: "Bhongir, Telangana, India",
  email: "vallamdasakhil9@gmail.com",
  phone: "+91 76710 25655",
  phoneHref: "tel:+917671025655",
  github: "https://github.com/vallamdasakhil1-prog",
  linkedin: "https://www.linkedin.com/in/vallamdas-akhil-3801852b5",
  resume: "/resume/Akhil-Vallamdas-Resume.pdf",
  headline: ["Building intelligent systems.", "Engineering thoughtful software."],
  intro:
    "I am a final-year Computer Science student who builds LLM agent pipelines, Python APIs, and full-stack web applications. My main project is an AI-powered security assistant that defends its own agents against prompt injection.",
  tagline: "Computer Science student building AI systems and web software.",
};

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/** Stages of one alert through the AI SOC Assistant LangGraph workflow, as documented in its README. */
export const pipeline: PlateStep[] = [
  { title: "Untrusted alert or log" },
  { title: "Prompt-injection defense", detail: "Detect, redact, and wrap the text as data", highlight: true },
  { title: "IOC extraction" },
  { title: "Threat intelligence" },
  { title: "MITRE ATT&CK mapping" },
  { title: "CVE analysis" },
  { title: "Investigation plan" },
  { title: "Incident report" },
];

export const about: string[] = [
  "My work so far sits where AI and software engineering meet. I build Python backends with FastAPI, wire LLM agents together with LangGraph, and ship the web interfaces and REST APIs that make them usable.",
  "My most involved project is an AI-powered security operations assistant. It taught me to treat model inputs as untrusted data, measure a defense with real test data, and write the tests, Docker setup, and CI that keep it reliable.",
  "I also build full-stack applications with React, Node.js, Express, and MongoDB, and I built a Random Forest recommendation backend behind a location-aware API. I use ChatGPT and Claude daily for planning, debugging, and documentation, and I am studying prompt engineering and retrieval-augmented generation.",
];

export const capabilities: CapabilityGroup[] = [
  { title: "Programming and foundations", items: ["Python", "SQL", "HTML5", "Data Structures and Algorithms", "Object-Oriented Programming"] },
  { title: "AI and LLM engineering", items: ["LangGraph", "Groq (Llama 3.3)", "Prompt-injection defense", "ChatGPT and Claude (daily use)", "Prompt engineering (studying)", "Retrieval-augmented generation (studying)"] },
  { title: "Machine learning", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Random Forest", "Deep Learning", "Computer Vision", "Data pipeline design"] },
  { title: "Backend", items: ["FastAPI", "REST API design"] },
  { title: "Frontend", items: ["React and Vite (AI SOC Assistant dashboard)", "HTML5"] },
  { title: "Cybersecurity", items: ["Cyber Security and Ethical Hacking (Edureka course)", "MITRE ATT&CK", "VirusTotal and NVD integrations"] },
  { title: "Databases", items: ["MongoDB", "SQL", "MySQL", "TinyDB"] },
  { title: "Tools and infrastructure", items: ["Git", "GitHub", "GitHub Actions (CI)", "Docker", "Linux", "pytest", "Agile and SDLC", "VS Code"] },
];

export const projects: Project[] = [
  {
    slug: "ai-soc-assistant",
    name: "AI SOC Assistant",
    kind: "Personal project",
    summary:
      "A multi-agent security assistant that investigates alerts and logs, and defends its own AI agents against prompt injection hidden in that data.",
    problem:
      "LLM agents that read logs and alerts can be steered by instructions an attacker hides in that untrusted text, for example telling the agent to downgrade an alert.",
    details: [
      {
        label: "Investigation workflow",
        text: "A LangGraph pipeline behind a FastAPI backend runs the defense layer, IOC extraction, threat-intelligence enrichment, MITRE ATT&CK mapping, CVE analysis, an investigation plan, and an incident report. A React and Vite dashboard handles incident triage, and incidents are stored with TinyDB.",
      },
      {
        label: "Prompt-injection defense",
        text: "Sits in front of every LLM agent. Pattern rules catch direct, indirect, and obfuscated attempts (three detection levels), then Unicode normalization and weighted risk scoring, redaction with an untrusted-data wrapper, and a re-check before release. The original evidence is always kept. An optional LLM classifier is off by default.",
      },
      {
        label: "Integrations",
        text: "VirusTotal for hashes, IPs, domains, and URLs; a local MITRE ATT&CK database; the NVD API for CVEs; Groq (Llama 3.3) with a Gemini fallback. Ingestion endpoints accept Wazuh, Snort, and generic alerts.",
      },
      {
        label: "Testing",
        text: "A pytest suite covers the defense layer, API, and graph wiring. The README reports 84 passed, 1 skipped, and 3 expected failures that document known detection limits. Docker and a GitHub Actions workflow are included, and the defense layer runs without API keys.",
      },
      {
        label: "Evaluation",
        text: "On 424 labeled samples (216 normal, 208 injection): precision 1.0, recall 0.952, F1 0.975, and no false positives.",
      },
      {
        label: "Limitations",
        text: "The samples are template-generated, not real production logs. Detection is pattern-based, so synonym rewording or reversed text can evade it, and the context-manipulation category is detected only 60% of the time. This is a portfolio project, not a production security tool.",
      },
    ],
    stack: ["Python", "FastAPI", "LangGraph", "React", "Vite", "TinyDB", "Groq (Llama 3.3)", "VirusTotal", "NVD", "MITRE ATT&CK", "Docker", "pytest", "GitHub Actions"],
    github: "https://github.com/vallamdasakhil1-prog/AI-SOC-Assistant",
    plate: {
      caption: "Diagram. The defense layer grades attacks by how disguised they are.",
      numbered: true,
      steps: [
        { title: "Level 1: direct", detail: "Explicit, blunt instructions hidden in a log or alert", highlight: true },
        { title: "Level 2: indirect", detail: "Realistic paraphrases and instructions disguised as analyst notes" },
        { title: "Level 3: advanced", detail: "Encoding, delimiter tricks, fake system framing, per-agent targeting" },
      ],
    },
  },
  {
    slug: "sri-venkataramana-motors",
    name: "Sri Venkataramana Motors",
    kind: "Full-stack web application for a motorcycle dealership",
    summary:
      "A web application for a motorcycle dealership, with product listings for customers and a role-based administrative side for managing inventory.",
    problem: "A dealership needs customers to browse available motorcycles, and staff to keep inventory current without editing code.",
    features: [
      "Product listings for customers.",
      "Role-based access, including an administrative side for inventory management.",
      "REST API on Node.js and Express with MongoDB, and a React frontend in a modular structure.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/vallamdasakhil1-prog/Sri-Venkataramana-Motors",
    plate: {
      caption: "Diagram. The two sides of the application.",
      steps: [
        { title: "Customers", detail: "Browse motorcycle listings" },
        { title: "Administrators", detail: "Manage inventory", highlight: true },
      ],
    },
  },
  {
    slug: "gps-tourist-recommender",
    name: "GPS-Based Tourist Place Recommender",
    kind: "Academic project",
    summary:
      "A Python machine learning backend that takes a GPS location and recommends tourist places, serving its predictions through REST APIs.",
    problem: "Travelers need suggestions that depend on where they are, not a fixed list.",
    features: [
      "Random Forest recommendation model that returns location-aware predictions over a REST API.",
      "End-to-end data pipeline built with Pandas: ingestion, preprocessing, feature extraction, and prediction.",
      "Functional, regression, and boundary test cases that check model accuracy end to end.",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "REST APIs", "SQL"],
    plate: {
      caption: "Diagram. From raw data to a recommendation.",
      numbered: true,
      steps: [
        { title: "Ingest data" },
        { title: "Preprocess" },
        { title: "Extract features" },
        { title: "Predict with Random Forest", highlight: true },
        { title: "Serve through REST API" },
      ],
    },
  },
];

/** Newest first: the current degree leads, completed qualifications follow. No completion years were supplied, so none are shown. */
export const qualifications: Qualification[] = [
  {
    id: "be",
    institution: "Keshav Memorial Engineering College",
    qualification: "Bachelor of Engineering (B.E.)",
    stream: "Computer Science Engineering",
    status: "current",
    statusLabel: "Currently pursuing",
    scoreLabel: "Current CGPA",
    score: "7.0",
    scoreNote: "Expected graduation 2027",
    notes: ["JEE Mains 2023: 90th percentile"],
  },
  {
    id: "intermediate",
    institution: "Sree Vaishnavi Junior College",
    qualification: "Intermediate (MPC)",
    stream: "Subjects: Mathematics, Physics, and Chemistry",
    status: "completed",
    statusLabel: "Completed",
    scoreLabel: "Marks",
    score: "768 / 1000",
    scoreNote: "76.8%",
  },
  {
    id: "secondary",
    institution: "Montessori High School",
    qualification: "Class 10 / SSC",
    status: "completed",
    statusLabel: "Completed",
    scoreLabel: "CGPA",
    score: "10.0 / 10.0",
  },
];

export const credentials: string[] = [
  "Post Graduate Diploma in Computer Applications (PGDCA), Grade A",
  "Cyber Security and Ethical Hacking, Edureka",
  "National Python Coding Contest: qualified Rounds 1 and 2",
];
