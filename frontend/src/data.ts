import { PortfolioData } from "./types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Samir Sharif",
    title: "Frontend Developer",
    subtitle: "JavaScript | React | Next.js | TypeScript | GoIT Student",
    bio: "Frontend developer focused on React/Next.js. Led three GoIT project teams. Currently building a Phaser-based fishing game. I care about clean architecture, accessible UI, and shipping features that matter.",
    email: "samirsharif6969@gmail.com",
    phone: "+1 (470) 861-4937",
    location: "GA Atlanta",
    avatar: "/images/avatar/samir-sharif.jpg",
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
        "Team project where I served as Team Lead. A modern, responsive website showcasing technical solutions and services. Led a team through the full development lifecycle.",
      images: [
        "/images/projects/project-1-1.png",
        "/images/projects/project-1-2.png",
        "/images/projects/project-1-3.png",
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
        "Interactive fishing game built with Phaser 3. Features core gameplay loop: cast → tension meter → catch/fail mechanics. Planned features include shop system and multiple fishing locations.",
      images: [
        "/images/projects/project-2-1.png",
        "/images/projects/project-2-2.png",
        "/images/projects/project-2-3.png",
        "/images/projects/project-2-4.png",
        "/images/projects/project-2-5.png",
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
        "Modern note-taking application with full CRUD functionality. Built with Next.js and React Query for optimal performance. Features include tagging, search, and intuitive note management.",
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
      ],
      technologies: ["Next.js", "React Query", "TypeScript"],
      github: "#",
      live: "#",
      status: "in-development",
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
