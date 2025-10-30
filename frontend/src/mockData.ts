import { PortfolioData } from './types/portfolio';

const img = (p: string) => `${process.env.PUBLIC_URL}/${p}`;

export const portfolioData: PortfolioData = {
  personal: {
    name: "Samir Sharif",
    title: "Frontend Developer",
    subtitle: "JavaScript | React | HTML5 | CSS3 | GoIT Student",
    bio: "Hi, I'm Samir — a GoIT student and three-time team lead. I build clean, user-focused web apps with React/Next.js and develop a Phaser-based fishing game. I care about readable code, thoughtful UX, and shipping features that matter.",
    email: "samir.sharif@example.com",
    phone: "+1 (555) 123-4567",
    location: "Remote",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samir"
  },

  skills: [
    { name: "React", category: "frontend", level: 90 },
    { name: "Next.js", category: "frontend", level: 85 },
    { name: "TypeScript", category: "frontend", level: 80 },
    { name: "JavaScript", category: "frontend", level: 95 },
    { name: "HTML5", category: "frontend", level: 95 },
    { name: "CSS3", category: "frontend", level: 90 },
    { name: "Phaser 3", category: "game", level: 75 },
    { name: "React Query", category: "frontend", level: 85 },
    { name: "Git/GitHub", category: "tools", level: 90 },
    { name: "Team Leadership", category: "soft", level: 95 },
    { name: "UI/UX Design", category: "design", level: 80 },
    { name: "Agile/Scrum", category: "methodology", level: 85 }
  ],

  projects: [
    {
      id: 1,
      title: "ForceTech7 Website",
      description: "Team project where I served as Team Lead. A modern, responsive website showcasing technical solutions and services. Led a team through the full development lifecycle.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Team Lead"],
      github: "https://github.com/Atom1530/ForceTech7-Website2",
      live: "https://atom1530.github.io/ForceTech7-Website2/",
      status: "completed"
    },
    {
      id: 2,
      title: "Fishing Game",
      description: "Interactive fishing game built with Phaser 3. Features core gameplay loop: cast → tension meter → catch/fail mechanics. Planned features include shop system and multiple fishing locations.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop"
      ],
      technologies: ["Phaser 3", "JavaScript", "Game Dev"],
      github: "#",
      live: "#",
      status: "in-progress"
    },
    {
      id: 3,
      title: "NoteHub",
      description: "Modern note-taking application with full CRUD functionality. Built with Next.js and React Query for optimal performance. Features include tagging, search, and intuitive note management.",
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop"
      ],
      technologies: ["Next.js", "React Query", "TypeScript"],
      github: "#",
      live: "#",
      status: "in-development"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Team Lead",
      organization: "GoIT - Study Projects",
      period: "2023 - Present",
      description: "Led three successful team projects, coordinating developers, managing timelines, and ensuring quality deliverables. Facilitated daily standups, code reviews, and sprint planning.",
      type: "leadership"
    },
    {
      id: 2,
      title: "Frontend Development Student",
      organization: "GoIT",
      period: "2023 - Present",
      description: "Intensive full-stack development program focusing on modern JavaScript, React, and web technologies. Completed multiple real-world projects with emphasis on best practices.",
      type: "education"
    }
  ],

  strengths: [
    "Leadership & Teamwork",
    "React/Next.js/TypeScript",
    "Phaser 3 Game Development",
    "Clean UI/UX Design",
    "GitHub Workflow",
    "Clear Communication",
    "Reliable Delivery"
  ],

  social: {
    github: "https://github.com/Atom1530",
    linkedin: "#",
    twitter: "#"
  }
};