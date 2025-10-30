# 🚀 Samir Sharif - Interactive Portfolio

Modern, animated portfolio built with **React + TypeScript** featuring auto-playing sliders and smooth animations.

## ✨ Key Features

### 🎨 Hero Section
- Animated gradient background with floating particles
- Typing animation rotating through roles
- 3D avatar with glow effect
- Sparkle animations

### 📸 Projects with Auto-Slider
- **Swiper.js slider** with 4-5 images per project
- Auto-play (3s intervals)
- Dot pagination
- Navigation arrows on hover

### 📊 Animated Skills
- Progress bars with percentages (90%, 85%...)
- Smooth fill animations on scroll
- Glowing effects
- 3D card hover effects

### 🌟 Interactions
- Scroll animations (fade-in, slide-in)
- 3D hover effects on cards
- Animated timeline with pulsing dots
- Interactive contact buttons

## 🛠 Tech Stack

- React 19 + TypeScript 5.9
- Framer Motion - Animations
- Swiper.js - Image sliders
- Tailwind CSS + Shadcn UI
- Lucide React - Icons

## 🚀 Quick Start

```bash
yarn install
yarn start
```

## 📝 Customize Your Portfolio

### Edit `/src/mockData.ts`

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    avatar: "avatar-url"
  },
  
  skills: [
    { name: "React", level: 90 }  // 0-100
  ],
  
  projects: [
    {
      title: "Project Name",
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"  // 3-5 images
      ],
      technologies: ["React", "TS"],
      github: "url",
      live: "url",
      status: "completed"
    }
  ]
};
```

### Add Images

**Local images**: Place in `/public/images/projects/`
```typescript
const img = (p: string) => `${process.env.PUBLIC_URL}/${p}`;
images: [img("images/projects/screenshot1.png")]
```

**External URLs**: Use directly
```typescript
images: ["https://..."]
```

## 🎨 Customization

### Colors (`/src/App.css`)
```css
:root {
  --accent-purple: #8b5cf6;
  --accent-blue: #6366f1;
}
```

### Slider Speed (`/src/sections/Projects.tsx`)
```typescript
autoplay={{ delay: 3000 }}  // milliseconds
```

### Typing Animation (`/src/sections/Hero.tsx`)
```typescript
sequence={['Text 1', 2000, 'Text 2', 2000]}
```

## 📁 Structure

```
/src
  /components/ui/    # Shadcn components (TS)
  /sections/         # Page sections (TS)
  /types/           # TypeScript types
  mockData.ts       # YOUR DATA HERE
  App.tsx
```

## 📱 Responsive

- Mobile: Hamburger menu
- Tablet: Optimized layouts
- Desktop: Full animations

## 🐛 Issues?

- **Images not showing**: Check paths in `mockData.ts`
- **Animations broken**: Clear cache, restart server
- **TS errors**: Run `yarn tsc --noEmit`

---

**Built with ❤️ using React + TypeScript**
