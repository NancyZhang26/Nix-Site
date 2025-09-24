# NIX Website

A Next.js-powered website for NIX, a personalized time management app designed to help students reduce excessive smartphone use and optimize productivity.

## Overview

NIX is a time management application that offers structured solutions to break the cycle of excessive smartphone use, optimize time management, and strike a perfect balance between productivity and well-being using advanced Screen Time reducing methodologies.

## Tech Stack

- **Framework**: Next.js 14.2.5
- **Runtime**: React 18.3.1
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Google Fonts (Bungee, Montserrat)
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Development**: ESLint configuration

## Project Structure

```
nix-site/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable React components
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   └── Footer.tsx       # Site footer
│   │   ├── hooks/               # Custom React hooks
│   │   │   └── IntersectionObserver.tsx
│   │   └── styles/              # CSS Module files
│   │       ├── globals.css      # Global styles
│   │       ├── Header.module.css
│   │       ├── Footer.module.css
│   │       └── [page].module.css
│   └── pages/                   # Next.js pages
│       ├── index.tsx            # Home page
│       ├── menu.tsx             # Main navigation
│       ├── getStartedNew.tsx    # Onboarding flow
│       ├── signUp.tsx           # User registration
│       ├── contact.tsx          # Contact form
│       ├── exploreNix.tsx       # Product information
│       ├── whyNix.tsx           # Feature comparison
│       ├── meetTheTeam.tsx      # Team profiles
│       ├── faq.tsx              # Frequently asked questions
│       └── _app.tsx             # App wrapper
├── public/                      # Static assets
│   └── images/                  # Image assets
└── package.json
```

## Key Features

### Pages
- **Home**: Landing page with hero section and call-to-action
- **Get Started**: Interactive onboarding with pricing tiers
- **Menu**: Central navigation hub
- **Sign Up**: User registration with form validation
- **Contact**: Contact form for user inquiries
- **Explore NIX**: Detailed product information
- **Why NIX**: Feature comparison with competitors
- **Meet the Team**: Team member profiles
- **FAQ**: Frequently asked questions

### Components
- **Responsive Design**: Mobile-first approach with breakpoints
- **Intersection Observer**: Custom hook for scroll-triggered animations
- **Form Validation**: Client-side validation for user inputs
- **Interactive Elements**: Hover effects and smooth transitions

### Styling
- **CSS Modules**: Scoped styling for components
- **Custom Animations**: Fade-in and slide animations
- **Responsive Typography**: Fluid font sizing using `calc()`
- **Color Scheme**: Blue (#9FC4E8), Green (#A4CFAD), Yellow (#F8D851) themed

## Getting Started

### Prerequisites
- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nix-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Dependencies

### Core Dependencies
- `next`: ^14.2.5 - React framework
- `react`: ^18.3.1 - UI library
- `react-dom`: ^18.3.1 - DOM renderer
- `three`: ^0.165.0 - 3D graphics library
- `@react-three/fiber`: ^8.16.8 - React renderer for Three.js
- `@react-three/drei`: ^9.107.1 - Useful helpers for React Three Fiber

### Development Dependencies
- `typescript`: 5.5.4 - Type checking
- `eslint`: ^8.37.0 - Code linting
- `eslint-config-next`: ^13.4.4 - Next.js ESLint configuration
- `@types/react`: 18.3.3 - React type definitions
- `@types/react-dom`: ^18.0.11 - React DOM type definitions

## Configuration

### TypeScript
The project uses TypeScript with custom path mapping for cleaner imports:
- `@components/*` → `src/app/components/*`
- `@styles/*` → `src/app/styles/*`
- `@pages/*` → `src/pages/*`

### Next.js
- React Strict Mode enabled
- Support for multiple file extensions (tsx, ts, jsx, js)
- Custom page extensions configuration

## Design System

### Colors
- Primary Blue: #9FC4E8
- Primary Green: #A4CFAD
- Accent Yellow: #F8D851
- Accent Orange: #fc9c70

### Typography
- Display Font: Bungee (Google Fonts)
- Body Font: Montserrat (Google Fonts)
- Responsive sizing with viewport-based units

### Layout
- Mobile-first responsive design
- Flexible grid system
- Consistent spacing and typography scale

## Contributing

1. Follow the existing code structure and naming conventions
2. Use TypeScript for all new components
3. Implement responsive design for all new features
4. Test across different screen sizes and devices
5. Maintain accessibility standards

## License

This project is private and proprietary to the NIX team.

## Team

Made by the NIX team:
- Su Lei Yadanar
- Zarah Sadeq  
- Grace Yang
- Nancy Zhang
- Olive Thin

## Contact

For questions or support, please contact:
- Email: huayizhang@brandeis.edu
- Phone: 617-678-4891
- Instagram: @nix_productivity