# Alim Maknojia - Portfolio

A motorsport-inspired single-page portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark/Light mode with custom tweakcn color system
- ⚡ Fast, snappy animations using Framer Motion
- 📱 Fully responsive design
- 🎯 Clean, technical aesthetic inspired by motorsport telemetry
- 🚀 Built with Next.js 14 App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React + react-icons
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Social Links**: Edit `components/SocialIcons.tsx` - update URLs for GitHub, LinkedIn, YouTube, LeetCode
2. **Email**: Edit `components/Contact.tsx` - replace `alim.maknojia@example.com` with your actual email
3. **Projects**: Edit `components/Projects.tsx` - add your actual projects and GitHub URLs
4. **Bio**: Edit `components/About.tsx` - customize your bio text
5. **Profile Photo**: Replace the placeholder avatar in `components/About.tsx` with an actual image

### Theme Colors

The color system is defined in `app/globals.css` using oklch colors. The primary color is a coral/red inspired by University of Houston branding.

## Project Structure

```
pfolio/
├── app/
│   ├── layout.tsx       # Root layout with fonts and theme provider
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and theme
├── components/
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects grid
│   ├── ProjectCard.tsx  # Individual project card
│   ├── Contact.tsx      # Contact section
│   ├── Footer.tsx       # Footer
│   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   └── SocialIcons.tsx  # Social media icons
└── public/              # Static assets
```

## License

© 2025 Alim Maknojia
