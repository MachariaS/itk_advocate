# Components Directory

This directory contains all the React components for the ITK Advocates website, organized in a modular, component-based architecture.

## Structure

Each component follows this pattern:
```
ComponentName/
├── index.js              # Barrel export for cleaner imports
├── ComponentName.jsx     # Component logic and JSX
└── ComponentName.css     # Component-specific styles
```

## Components

### Layout Components
- **Navbar** - Top navigation bar with mobile menu
- **Hero** - Landing section with call-to-action
- **Footer** - Site footer with contact info

### Content Components
- **InfoStrip** - Three-column info boxes
- **Services** - Practice areas grid with service cards
- **BusinessQuestions** - Business law section with questions
- **About** - "Who We Are" section
- **Clients** - Trust signals section
- **Contact** - Contact information cards

## Usage

Import components using the clean path syntax:
```javascript
import Navbar from './components/Navbar';
import Hero from './components/Hero';
```

## Styling

- Global styles and CSS variables are in `/src/App.css`
- Component-specific styles are co-located with each component
- All components share the same CSS variables from the root

## Best Practices

1. Keep components focused on a single responsibility
2. Use functional components with hooks
3. Co-locate styles with components
4. Use meaningful prop names and destructuring
5. Add prop validation when needed
