# Portfolio - Samir Sharif

Modern, dark-themed portfolio website showcasing projects, skills, and experience.

## Tech Stack

- **React** 19.0.0 - UI framework
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Component library (Button, Card, Badge, Separator)
- **Lucide React** - Icon library
- **Inter Font** - Typography

## Project Structure

```
/app/frontend
  /src
    /components
      /ui              # Shadcn UI components (button, card, badge, separator)
    /sections          # Page sections
      Header.jsx       # Sticky navigation header
      Hero.jsx         # Hero section with intro
      About.jsx        # Skills and strengths
      Projects.jsx     # Project showcase
      Experience.jsx   # Timeline of experience/education
      Contact.jsx      # Contact information
      Footer.jsx       # Footer with links
    mockData.js        # All portfolio data (EDIT THIS)
    App.js             # Main app component
    App.css            # Custom styles
    index.js           # Entry point
    index.css          # Global styles & Tailwind
  package.json
  tailwind.config.js
  craco.config.js
```

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## How to Customize

### Update Your Information

Edit `/src/mockData.js` to update:

- Personal info (name, title, bio, contact)
- Skills and strengths
- Projects (title, description, links, tech stack)
- Experience and education
- Social links

### Replace Placeholder Images

1. **Profile Photo**: Replace the `avatar` URL in `mockData.js` → `personal.avatar`
2. **Project Images**: Replace the `image` URLs in `mockData.js` → `projects[].image`

Recommended image sizes:
- Avatar: 200x200px (circular crop)
- Project images: 800x500px

### Color Scheme

The portfolio uses a dark theme with purple-blue accents:

```css
--bg-primary: #0a0a0a       /* Black background */
--bg-secondary: #1a1a1a     /* Dark sections */
--accent-purple: #8b5cf6    /* Purple accent */
--accent-blue: #6366f1      /* Blue accent */
```

To change colors, edit `/src/App.css` (CSS variables) and `/src/index.css` (Tailwind theme).

## Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Sticky header with active section indicator
✅ Mobile hamburger menu
✅ Hover animations on cards and buttons
✅ Project status badges (Completed/In Progress)
✅ GitHub and Live Demo links
✅ Social media integration

## Scripts

```bash
# Development
yarn start          # Start dev server on port 3000

# Production
yarn build          # Create optimized build

# Code Quality
yarn lint           # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - Feel free to use this portfolio template for your own projects.

---

**Note**: This is currently a frontend-only implementation with mock data. Backend integration can be added later if needed.