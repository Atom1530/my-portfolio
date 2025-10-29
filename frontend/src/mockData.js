export const portfolioData = {
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
    { name: "Agile/Scrum", category: "methodology" }
  ],

  projects: [
    {
      id: 1,
      title: "ForceTech7 Website",
      description: "Team project where I served as Team Lead. A modern, responsive website showcasing technical solutions and services. Led a team through the full development lifecycle.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Team Lead"],
      github: "https://github.com/Atom1530/ForceTech7-Website2",
      live: "https://atom1530.github.io/ForceTech7-Website2/",
      status: "completed"
    },
    {
      id: 2,
      title: "Fishing Game",
      description: "Interactive fishing game built with Phaser 3. Features core gameplay loop: cast → tension meter → catch/fail mechanics. Planned features include shop system and multiple fishing locations.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop",
      technologies: ["Phaser 3", "JavaScript", "Game Dev"],
      github: "#",
      live: "#",
      status: "in-progress"
    },
    {
      id: 3,
      title: "NoteHub",
      description: "Modern note-taking application with full CRUD functionality. Built with Next.js and React Query for optimal performance. Features include tagging, search, and intuitive note management.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
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