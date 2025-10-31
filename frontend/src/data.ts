import { PortfolioData } from "./types/portfolio";

const withBase = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

export const portfolioData: PortfolioData = {
  personal: {
    name: "Samir Sharif",
    title: "Frontend Developer",
    subtitle: "JavaScript | React | Next.js | TypeScript | GoIT Student",
    roles: [
      "Frontend Developer (React/Next.js)",
      "TypeScript Advocate",
      "Game Developer",
      "Team Lead",
      "UI/UX & Motion",
      "Performance & Accessibility",
    ],
    typingDelayMs: 2000, //для задержки
    bio: "Frontend developer focused on React/Next.js. Team lead on three GoIT projects—sprint planning, task allocation, code reviews, and delivery oversight. I also maintain a small Phaser side project to improve my logic and UI skills.",
    email: "samirsharif6969@gmail.com",
    phone: "+1 (470) 861-4937",
    location: "GA Atlanta",
    avatar: withBase("images/avatar/samir-sharif.jpg"),
  },

  skills: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Phaser 3", category: "game" },
    { name: "React Query", category: "frontend" },
    { name: "Git/GitHub", category: "tools" },
    { name: "Team Leadership", category: "soft" },
    { name: "UI/UX Design", category: "design" },
    { name: "Agile/Scrum", category: "methodology" },
  ],

  projects: [
    {
      id: 1,
      title: "ArtistHub",
      description:
        "ArtistHub helps you find new artists and listen without leaving the site. Each track links to YouTube but plays inline via an embedded player. The project includes an artist list, per-artist pages, and a fully responsive UI.",
      images: [
        withBase("images/projects/project-1-1.png"),
        withBase("images/projects/project-1-2.png"),
        withBase("images/projects/project-1-3.png"),
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Team Lead"],
      github: "https://github.com/Atom1530/ForceTech7-Website2",
      live: "https://atom1530.github.io/ForceTech7-Website2/",
      status: "completed",
    },
    {
      id: 2,
      title: "Fishing Game",
      description:
        "A Phaser 3 fishing game with a full progression loop: cast → control tension → land the catch → sell → upgrade. Quests guide early goals, tournaments push skill checks, and new locations unlock with better rods, lines, and lures. Features in-game shop, readable HUD, and responsive UI.",
      images: [
        withBase("images/projects/project-2-1.png"),
        withBase("images/projects/project-2-2.png"),
        withBase("images/projects/project-2-3.png"),
        withBase("images/projects/project-2-4.png"),
        withBase("images/projects/project-2-5.png"),
      ],
      technologies: ["Phaser 3", "JavaScript", "Game Dev"],
      github: "#",
      live: "#",
      status: "in-progress",
    },
    {
      id: 3,
      title: "NoteHub",

      description:
        "A clean note-taking app for ideas, tasks, and quick drafts. Create, edit, and delete notes; tag them for context and find anything fast with search.",

      images: [
        withBase("images/projects/project-4-1.jpg"),
        withBase("images/projects/project-4-2.png"),
        withBase("images/projects/project-4-3.png"),
        withBase("images/projects/project-4-4.png"),
      ],
      technologies: ["Next.js", "React Query", "TypeScript"],
      github: "#",
      live: "#",
      status: "in-development",
    },
    {
      id: 4,
      title: "AnonStories Telegram Bot",
      description:
        "Telegram bot for anonymous story sharing and mini-games. Users submit short personal stories that go to a private review channel; the community discusses them and awards karma points. Includes several lightweight mini-games (quizzes, word/reaction games) to keep engagement high. I designed the flow, built moderation and anti-spam, and handled basic ops.",
      images: [
        "/images/projects/project-4-1.jpg",
        // "/images/projects/project-4-2.png",
        // "/images/projects/project-4-3.png",
        // "/images/projects/project-4-4.png",
      ],
      technologies: ["JavaScript", "Telegram Bot API", "Node.js"],
      github: "#",
      live: "#",
      status: "in-progress",
    },
  ],

  experience: [
    {
      id: 1,
      title: "Team Lead",
      organization: "GoIT - Study Projects",
      period: "2025 - Present",
      description:
        "Led three successful team projects, coordinating developers, managing timelines, and ensuring quality deliverables. Facilitated daily standups, code reviews, and sprint planning.",
    },
    {
      id: 2,
      title: "Frontend Development Student",
      organization: "GoIT",
      period: "2025 - Present",
      description:
        "Intensive full-stack development program focusing on modern JavaScript, React, and web technologies. Completed multiple real-world projects with emphasis on best practices.",
    },
    {
      id: 3,
      title: "Creator — Telegram Bot with Mini-Games",
      organization: "Independent",
      period: "2024 – Present",
      description:
        "Built and maintained a Telegram bot that lets users share stories anonymously to a private channel, where the community discusses them and awards karma. Implemented moderation queue, rate-limits/anti-spam, and a set of mini-games to boost engagement. Responsibilities: product flow, bot logic, lightweight data storage, and day-to-day ops.",
    },
  ],

  strengths: [
    "Leadership & Teamwork",
    "React/Next.js/TypeScript",
    "Phaser 3 Game Development",
    "Clean UI/UX Design",
    "GitHub Workflow",
    "Clear Communication",
    "Reliable Delivery",
  ],

  social: {
    github: "https://github.com/Atom1530",
    linkedin: "https://www.linkedin.com/in/samir-sharif-a32b3a37b/",
    twitter: "#",
  },
};
