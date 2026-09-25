// Single source of truth for portfolio content.
// Components should import from here — never hardcode content in JSX.

export const profile = {
    name: "Anbarasu",
    role: "Full Stack Developer",
    email: "anbuarasu2017@gmail.com",
    phone: "+916380144865",
    github: "https://github.com/Anbarasu2410",
    linkedin: "https://www.linkedin.com/in/anbarasu24/",
    currentPortfolio: "https://anbarasu-fullstack.vercel.app/",
    summary:
        "Full Stack Developer with experience building responsive web applications, REST APIs, scalable backend systems, authentication workflows, database-driven applications, and developer tools using JavaScript and TypeScript technologies.",
};

export const skills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frontend: ["Next.js 14", "React.js", "React Native", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT"],
    database: ["MongoDB", "PostgreSQL", "SQL", "Prisma ORM"],
    realtime: ["Socket.IO", "WebSockets"],
    aiml: ["Groq API", "OpenAI API"],
    tools: ["Git", "GitHub", "Postman", "VS Code"],
    core: ["Data Structures", "OOP", "Problem Solving"],
};

export const skillCategories: {
    key: keyof typeof skills;
    label: string;
    icon: string;
}[] = [
        { key: "languages", label: "Languages", icon: "Code2" },
        { key: "frontend", label: "Frontend", icon: "Layout" },
        { key: "backend", label: "Backend", icon: "Server" },
        { key: "database", label: "Database", icon: "Database" },
        { key: "realtime", label: "Real-Time", icon: "Radio" },
        { key: "aiml", label: "AI / ML", icon: "Brain" },
        { key: "tools", label: "Tools", icon: "Wrench" },
        { key: "core", label: "Core", icon: "Puzzle" },
    ];

export const education = [
    {
        school: "NPR College of Engineering",
        degree: "B.E Computer Science",
        detail: "CGPA: 7.7",
    },
    {
        school: "St. John's Matric Hr. Sec School, Madurai",
        degree: "Higher Secondary Education",
        detail: "",
    },
];

export const certifications = [
    {
        title: "Full Stack Generative and Agentic AI with Python",
        issuer: "Udemy — Hitesh Choudhary & Piyush Garg",
    },
    {
        title: "SQL Fundamentals",
        issuer: "HackerRank",
    },
];

export const experience = [
    {
        role: "Software Developer",
        company: "Spiritminetech, Madurai — Remote",
        period: "Oct 2025 – Present",
        bullets: [
            "Developed and maintained REST APIs for scalable web applications",
            "Implemented JWT authentication and optimized MongoDB queries",
            "Integrated backend APIs with frontend and production workflows",
        ],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Cavin Infotech",
        period: "Jul 2024 – Sep 2024",
        bullets: [
            "Developed frontend applications and reusable components using React JS",
            "Built and integrated backend APIs using Spring Boot",
            "Implemented JWT authentication and full stack integration",
        ],
    },
];

export const projects = [
    {
        title: "BreakPoint — VS Code Extension",
        description:
            "A developer productivity extension published on the VS Code Marketplace with working checkpoints, file hashing, and diff view.",
        stack: ["TypeScript", "VS Code APIs", "File Hashing"],
        liveUrl:
            "https://marketplace.visualstudio.com/items?itemName=Anbarasu24.breakpoint",
        repoUrl: "",
        bullets: [
            "Built and published a developer productivity extension on the VS Code Marketplace",
            "Implemented working checkpoints using file hashing to detect modified files",
            "Added side-by-side Diff View, Activity Bar, and Status Bar integration",
        ],
    },
    {
        title: "AI Codebase Assistant",
        description:
            "An AI-powered assistant for analyzing GitHub repositories with semantic code search and intelligent analysis.",
        stack: ["FastAPI", "Next.js 14", "TypeScript", "MongoDB"],
        liveUrl: "",
        repoUrl: "https://github.com/Anbarasu2410/CodeAssist-AI",
        bullets: [
            "Built an AI-powered assistant for analyzing GitHub repositories",
            "Implemented semantic code search and repository analysis",
            "Developed FastAPI backend APIs and Next.js frontend integration",
        ],
    },
    {
        title: "AI Meeting Assistant",
        description:
            "A real-time transcription and meeting chat application with live API integration and responsive design.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl:
            "https://live-suggestion-ol3og9l5m-anbuarasu2017-gmailcoms-projects.vercel.app/",
        repoUrl: "",
        bullets: [
            "Built a real-time transcription and meeting chat application",
            "Integrated APIs for live transcription and interactive communication",
            "Developed a responsive frontend using Next.js and TypeScript",
        ],
    },
];

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
