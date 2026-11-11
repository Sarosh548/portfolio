// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all portfolio content.
// Every fact here is sourced from Sarosh's CV and GitHub repos.
// To update the site, edit this file — nothing else.
// Items marked TODO need input before launch.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sarosh Qaiser",
  title: "AI Engineer",
  location: "Lahore, Pakistan",
  email: "sarosh548548@gmail.com",
  phone: "0339-2233548",
  github: "https://github.com/Sarosh548",
  linkedin: "https://www.linkedin.com/in/saroshqaiser",
  resumeUrl: "/Sarosh-Qaiser-AI-Engineer-CV.docx",
  summary:
    "AI Engineer with hands-on experience building agentic workflows, RAG pipelines, and multi-agent systems with LangGraph and React, and shipping production-ready ML models with Python, PyTorch, and TensorFlow. Skilled in designing end-to-end data pipelines, applying NLP and deep learning techniques, and deploying AI solutions across computer vision, forecasting, and full-stack platforms.",
};

// Hero stat readout — every number sourced directly from the CV / repos.
export const heroStats = [
  { value: "8", label: "specialized agents in one crisis-response graph" },
  { value: "13,000+", label: "text chunks indexed across 6 technical books" },
  { value: "0.745", label: "mAP50 on a 3-iteration YOLOv8 model" },
  { value: "6", label: "microservices in one full-stack platform" },
];

export const education = {
  degree: "BS in Artificial Intelligence",
  school: "University of Management and Technology (UMT)",
  location: "Lahore, Pakistan",
  period: "Sep 2019 – May 2024",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Data Structures & Algorithms",
    "Linear Algebra",
    "Statistics for AI",
    "Computer Vision",
    "Database Systems",
    "Software Engineering",
  ],
};

export const experience = [
  {
    org: "Netsol Technologies",
    role: "AI/ML Engineer Intern",
    location: "Lahore, Pakistan",
    period: "Feb 2026 – June 2026",
    points: [
      "Web-scraped and structured product and service data from the Netsol Technologies website using Python, building a clean, query-ready knowledge base for an internal AI assistant, and designed the end-to-end RAG pipeline for accurate, company-specific responses.",
      "Deployed and hosted the LangGraph chatbot backend on AWS (EC2 + Docker), keeping API performance reliable and low-latency in production.",
      "Built an automated document-processing pipeline for the marketing department that ingests multi-format files and uses LLM-based parsing to convert unstructured content into clean, structured data — cutting manual data-entry time for the team.",
    ],
    tech: ["Python", "LangGraph", "AWS EC2", "Docker", "RAG", "Web Scraping"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "ML & AI",
    items: ["LLMs", "LangChain", "LangGraph", "RAG", "Agentic AI", "NLP"],
  },
  {
    category: "ML architectures",
    items: ["Transformers", "CNNs", "RNNs", "GRU", "LSTMs"],
  },
  {
    category: "Computer vision",
    items: ["YOLOv8", "OpenCV"],
  },
  {
    category: "Vector search",
    items: ["FAISS", "ChromaDB", "Vector similarity search", "Embedding models"],
  },
  {
    category: "Web & APIs",
    items: ["React", "Flask", "FastAPI", "REST APIs", "Web scraping (Playwright)"],
  },
  {
    category: "Data & infra",
    items: ["PostgreSQL", "Redis", "Docker", "AWS (EC2)", "Google Cloud Run", "Vercel"],
  },
  {
    category: "Dev tools",
    items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "Cursor", "Claude Code"],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS
// Order = display order. `featured: true` gets the large treatment.
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: "nova-ai-personal-assistant",
    featured: true,
    name: "NOVA — AI Personal Assistant",
    subtitle: "A voice-enabled, memory-aware personal AI companion",
    context: "Personal project",
    duration: "2026 — Present",
    oneLiner: "A JARVIS-inspired AI companion combining natural conversation, real-time voice, persistent memory, and permission-aware tools in one personal assistant.",
    problem: "Everyday AI workflows are fragmented across separate chat, search, calendar, email, and task applications. A useful personal assistant needs continuity across conversations, the ability to retrieve relevant context, and clear permission boundaries before it acts.",
    solution: "NOVA brings these workflows together through a modular FastAPI backend and LangGraph orchestration. It supports text and real-time voice conversations, persistent semantic memory, document-grounded context, and tool routing for connected workflows, with approval gates for consequential actions.",
    myContribution: "Designed and developed the application architecture, backend APIs, conversation and agent workflows, memory/retrieval layer, voice integration, and deployment/testing workflow.",
    architecture: {
      description: "A React frontend communicates with a FastAPI backend. LangGraph coordinates conversation and tool workflows; PostgreSQL with pgvector stores persistent context and semantic embeddings; LiveKit/WebSockets support real-time voice and streaming interactions.",
      flow: [
        "User input through chat or real-time voice",
        "Conversation understanding and intent routing",
        "LangGraph orchestration and context retrieval",
        "Persistent memory and document-grounded RAG",
        "Permission checks and approval for sensitive actions",
        "Tool execution, verification, and activity history"
      ]
    },
    features: [
      "Text conversation and real-time voice interaction with streaming responses",
      "Persistent semantic memory using PostgreSQL, pgvector, and Sentence-Transformers",
      "PDF and DOCX ingestion for context-aware, document-grounded answers",
      "LangGraph-based tool routing and task-oriented workflows",
      "Permission-aware integrations for web research, email, calendar, and desktop workflows",
      "JWT authentication, Argon2 password hashing, database migrations, and automated tests",
      "Cloud deployment workflow with health checks and GitHub Actions CI"
    ],
    challenges: [
      {
        challenge: "Maintaining useful context across separate conversations",
        solution: "Added persistent memory and semantic retrieval so relevant facts and prior context can be retrieved instead of relying only on the active chat."
      },
      {
        challenge: "Keeping real-world actions safe and auditable",
        solution: "Designed permission-aware workflows that separate planning from execution and require approval for consequential actions."
      },
      {
        challenge: "Supporting natural voice interaction without losing conversation continuity",
        solution: "Integrated real-time voice transport and streaming conversation handling alongside the text conversation workflow."
      }
    ],
    futureImprovements: [
      "Continue hardening cloud reliability and reconnect behavior under real-world network conditions",
      "Expand end-to-end verification for email, calendar, reminders, and voice-driven workflows",
      "Improve proactive planning and user-controlled memory refinement"
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "pgvector",
      "Sentence-Transformers",
      "React",
      "LiveKit",
      "WebSockets",
      "Docker",
      "pytest",
      "GitHub Actions"
    ],
    links: {
      github: "https://github.com/Sarosh548/NOVA-AI-Personal-Assistant",
      demo: "https://sarosh548.github.io/NOVA-AI-Personal-Assistant/#/conversation"
    }
  },
  {
    slug: "amaan-ciro",
    featured: true,
    name: "Amaan CIRO",
    subtitle: "Multi-agent crisis intelligence & response orchestrator",
    context: "Google AI Seekho Hackathon — team project",
    duration: "Built in 2026",
    oneLiner:
      "A real-time, 8-agent system that classifies urban crises, allocates emergency resources, and briefs stakeholders in seconds — built for Islamabad on a stateful, cyclic LangGraph topology.",
    problem:
      "Pakistan loses billions of rupees and hundreds of lives annually to reactive, fragmented emergency management. The 2022 Karachi floods caused 36 deaths and PKR 14 billion in damage — not because the crisis was unforeseeable, but because emergency services had no unified way to weigh conflicting signals or split limited resources across competing emergencies.",
    solution:
      "Amaan CIRO ingests live signals from weather, traffic, and news APIs plus citizen reports, then runs them through 8 specialized agents that classify the crisis type, predict severity, allocate resources fairly, simulate outcomes, and draft bilingual alerts for five stakeholder groups — all through a cyclic LangGraph graph that can loop back and reclassify when it detects contradictory signals.",
    myContribution:
      "Co-built the multi-agent system as part of a hackathon team: the LangGraph agent pipeline, the verification-reflection loop, and the React + MapLibre command dashboard.",
    architecture: {
      description:
        "A React SPA (Vite, MapLibre WebGL, Zustand) talks to a FastAPI backend on Cloud Run, which runs a LangGraph StateGraph across 8 agents pulling from 5 live data sources.",
      flow: [
        "Signal ingestion (weather, traffic, news, citizen reports)",
        "Crisis classification (with contradiction detection)",
        "Severity prediction",
        "Resource allocation (with fairness weighting)",
        "Outcome simulation",
        "Stakeholder communications (bilingual)",
      ],
    },
    features: [
      "8 independent agents, each typed with Pydantic input/output and logging structured reasoning traces",
      "A verification-reflection loop that re-classifies a crisis when it detects contradictory signals, up to 2 cycles",
      "A 15% fairness bonus applied to low-income sectors during resource allocation, to prevent systematic deprioritization",
      "Bilingual (English + Urdu) stakeholder messaging across 5 audiences: government command, rescue services, hospitals, citizens, and media",
      "A command dashboard with 7 interactive map layers on MapLibre WebGL",
      "3-tier graceful degradation: live APIs → cache → static fallback, so API failures never block the pipeline",
      "A single-codebase Android app (4.7 MB APK) built from the same React frontend via Ionic Capacitor",
    ],
    challenges: [
      {
        challenge: "Detecting and resolving contradictory signals in real time",
        solution:
          "Built a verification-reflection loop that compares timestamps, credibility scores, and staleness flags before a crisis is confirmed or retracted.",
      },
      {
        challenge: "Fair resource allocation across simultaneous crises",
        solution:
          "Applied a 15% fairness bonus to low-income sectors during allocation scoring, so higher-visibility crises don't automatically starve lower-income areas of resources.",
      },
    ],
    futureImprovements: [
      "Expand live data sources beyond the current 5 APIs",
      "Extend fairness-weighted allocation logic to additional resource types",
    ],
    tech: [
      "LangGraph",
      "FastAPI",
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "MapLibre GL JS",
      "Zustand",
      "Google Cloud Run",
      "Vercel",
      "Gemini 2.0 Flash",
      "Groq",
      "Firestore",
      "Ionic Capacitor",
    ],
    links: {
      github: "https://github.com/hammadqaiser/amaan-ciro",
      githubNote: "Team repository — hosted on a teammate's account",
      demo: "https://amaan-ciro-web.vercel.app",
      apiDocs: "https://amaan-ciro-485623882730.asia-south1.run.app/docs",
    },
  },
  {
    slug: "waste-management-chatbot",
    featured: true,
    name: "Waste-Management RAG Chatbot",
    subtitle: "Production-grade retrieval-augmented generation system",
    context: "Contribution project",
    duration: "Built in 2026",
    oneLiner:
      "A citation-backed RAG chatbot that retrieves accurate technical answers from 6 full engineering textbooks — 3,765 pages, 13,000+ chunks — for a government-level waste management simulator.",
    problem:
      "A government-level waste management simulator needed a way for users to ask technical questions and get accurate answers grounded in real engineering references, with citations back to the exact book, chapter, and page — not generic LLM output.",
    solution:
      "Built an end-to-end RAG pipeline: documents are processed and chunked, embedded, and stored in ChromaDB; a hybrid retrieval pipeline combining ChromaDB with Sentence-Transformers pulls the most relevant chunks; and a provider-agnostic LLM gateway generates the final answer with book, chapter, and page citations.",
    myContribution:
      "Built the full RAG pipeline end to end: document processing and chunking, the hybrid retrieval layer, the citation system, the provider-agnostic LLM gateway, and the automated test suite.",
    architecture: {
      description:
        "Documents flow through processing and chunking, get embedded and stored in ChromaDB, and are retrieved through a hybrid (vector + lexical) pipeline before being passed to a swappable LLM backend for the final, citation-backed answer.",
      flow: [
        "Documents (6 engineering textbooks, 3,765 pages)",
        "Text processing",
        "Chunking (13,000+ chunks)",
        "Embeddings",
        "ChromaDB vector store",
        "Hybrid retrieval (ChromaDB + Sentence-Transformers)",
        "LLM gateway (5 swappable providers)",
        "Citation-backed answer",
      ],
    },
    features: [
      "Hybrid retrieval pipeline combining ChromaDB vector search with Sentence-Transformers",
      "Citation-backed answers referencing book, chapter, and page",
      "Provider-agnostic LLM gateway supporting 5 providers, swappable via a single config change",
      "160 automated tests (pytest) across all 5 modules",
      "Built on 3,765 pages and 13,000+ chunks across 6 engineering textbooks",
    ],
    challenges: [
      {
        challenge: "Keeping answers grounded and citable rather than hallucinated",
        solution:
          "Engineered a hybrid retrieval layer and required every generated answer to carry a book/chapter/page citation trail back to source material.",
      },
      {
        challenge: "Avoiding lock-in to a single LLM provider",
        solution:
          "Built a provider-agnostic gateway abstraction so the underlying LLM can be swapped via a single config change across 5 supported providers.",
      },
    ],
    futureImprovements: [
      // TODO: confirm if there are specific planned improvements to list
    ],
    tech: ["Python", "ChromaDB", "Sentence-Transformers", "FastAPI", "pytest", "HTML/CSS/JS"],
    links: {
      github: "https://github.com/Sarosh548/Waste-management-chatbot",
      // TODO: no live demo currently available for this project
      demo: null,
    },
  },
  {
    slug: "swos",
    featured: true,
    name: "SWOS — Smart Waste Operating System",
    subtitle: "Full-stack AI-powered civic waste management platform",
    context: "Civic tech project — Lahore Municipal Corporation",
    duration: "Feb 2026 – present",
    oneLiner:
      "A 6-module full-stack platform combining real-time waste detection, predictive collection scheduling, and dynamic routing — architected end to end for a municipal-scale smart city initiative.",
    problem:
      "Municipal waste systems typically operate with no real-time visibility into bin status, inefficient fixed-route truck collection regardless of actual need, low recycling participation, and no data to plan ahead — problems SWOS was built to address for Lahore Municipal Corporation.",
    solution:
      "Architected a 6-module platform: real-time computer-vision waste detection and bin monitoring, a citizen rewards PWA, VRP-based dynamic truck routing, Prophet-based demand forecasting, a B2B recycling marketplace, and a government analytics dashboard — all sharing one PostgreSQL/Redis backend across FastAPI microservices.",
    myContribution:
      "Architected and built the full 6-module platform end to end, including training the YOLOv8 detection model, building the forecasting and routing engines, and designing the shared database and microservice architecture.",
    architecture: {
      description:
        "Six FastAPI microservices (one per module) share a PostgreSQL database and Redis cache. A React government dashboard aggregates all modules; a separate React PWA serves citizens directly.",
      flow: [
        "Module 1 — waste detection (YOLOv8, edge inference)",
        "Module 2 — citizen segregation & rewards (PWA)",
        "Module 3 — collection routing (OR-Tools VRP)",
        "Module 4 — demand prediction (Facebook Prophet)",
        "Module 5 — recycling marketplace (B2B auctions)",
        "Module 6 — government analytics dashboard (PDF export)",
      ],
    },
    features: [
      "YOLOv8 object detection trained across 3 iterations (up to 0.745 mAP50) on 29,235 images spanning 9 datasets, detecting 5 waste classes plus hazardous material",
      "Facebook Prophet time-series forecasting engine for per-zone predictive collection scheduling",
      "OR-Tools VRP-based dynamic routing engine to cut unnecessary truck trips and fuel use",
      "Citizen-facing PWA with AI waste scanning, points, badges, and a city-wide leaderboard",
      "B2B recycling marketplace with real-time bidding and automated settlement across 3 user roles",
      "Government dashboard with 8 KPIs, a live bin map, forecasts, marketplace activity, carbon tracking, and one-click PDF export",
      "Deployed via a single launch script across Docker, PostgreSQL, and Redis",
    ],
    challenges: [
      {
        challenge: "Organic-waste detection stuck at 0.011 mAP",
        solution:
          "Traced it to a dataset of cardboard/paper mislabeled as organic; replaced it with a real food-waste image dataset, which fixed detection accuracy for that class.",
      },
      {
        challenge: "Almost no hazardous-material training data available",
        solution: "Sourced and merged additional hazardous-waste image datasets to build a usable training set.",
      },
      {
        challenge: "GPU training failed locally due to Windows/CUDA driver conflicts",
        solution: "Moved training to Google Colab's free T4 GPU runtime, with checkpointing to survive session limits.",
      },
    ],
    futureImprovements: [
      "Train a v4 detection model on 50k+ images per class",
      "Integrate real IoT hardware (Raspberry Pi + ultrasonic sensors) for bin sensing",
      "Build a React Native mobile app for iOS and Android",
      "Add Kafka streaming for high-frequency telemetry",
      "Deploy to AWS/GCP and extend to multiple cities",
    ],
    tech: [
      "Python",
      "FastAPI",
      "YOLOv8",
      "Facebook Prophet",
      "OR-Tools",
      "React 18",
      "PostgreSQL",
      "Redis",
      "Docker",
      "SQLAlchemy",
      "Leaflet.js",
    ],
    links: {
      github: "https://github.com/Sarosh548/Smart-Waste-Operating-System",
      demo: null,
    },
    metrics: [
      { label: "Detection accuracy", value: "0.745 mAP50" },
      { label: "Training images", value: "29,235" },
      { label: "Platform modules", value: "6" },
    ],
  },
];

export const services = [
  {
    title: "RAG chatbots & retrieval systems",
    description:
      "End-to-end retrieval-augmented generation pipelines — document processing, chunking, embeddings, vector search, and citation-backed answers.",
  },
  {
    title: "Agentic AI systems",
    description:
      "Multi-agent workflows built on LangGraph, including stateful graphs, reflection loops, and multi-provider LLM orchestration.",
  },
  {
    title: "Computer vision",
    description:
      "Object detection and classification pipelines with YOLOv8, from dataset curation through training to production inference.",
  },
  {
    title: "Forecasting & optimization",
    description: "Time-series forecasting with Facebook Prophet and route/resource optimization with OR-Tools.",
  },
  {
    title: "Full-stack AI platforms",
    description: "FastAPI microservices, React frontends, and the data infrastructure (PostgreSQL, Redis, Docker) to ship them.",
  },
  {
    title: "AI API integration",
    description: "Integrating LLM providers, vector databases, and third-party APIs into existing products.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
