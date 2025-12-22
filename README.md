# TK Advocates Website

A professional, modern website for **Thiong'o Kiragu & Co. Advocates**, a law firm providing reliable, client-focused legal services in Nairobi.

## About the Firm

Thiong'o Kiragu & Co. Advocates offers comprehensive legal representation across multiple practice areas:

- **Family Law** - Compassionate representation in divorce and custody matters
- **Business Law** - Clear guidance for contracts, compliance, and commercial matters
- **Trust & Estates** - Estate planning that secures your legacy and your loved ones
- **Civil Litigation** - Resolving disputes effectively through negotiation or the courts
- **Conveyancing** - Guiding you through property purchases, sales, and transfers
- **Personal Injury** - Helping victims of accidents obtain fair compensation

## Contact Information

- **Phone:** 0711 422 510 / +254 711 422 510
- **Email:** itkadvocates@gmail.com / iankthiongo@gmail.com
- **Location:** Desoto Square, Kimbo, 2nd Floor, Suite SF2
- **Postal:** P.O. Box 55341-00200 Nairobi

## Project Structure

This project follows a **modular, component-based architecture** for maintainability and scalability:

```
itk-advocates/
├── public/
│   ├── index.html
│   └── assets/
│       ├── logo/
│       └── illustrators/
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles and CSS variables
│   ├── index.js            # React entry point
│   └── components/         # Modular components
│       ├── Navbar/         # Navigation bar
│       ├── Hero/           # Landing section
│       ├── InfoStrip/      # Info boxes
│       ├── Services/       # Practice areas
│       ├── BusinessQuestions/  # Business law section
│       ├── About/          # Company information
│       ├── Clients/        # Trust signals
│       ├── Contact/        # Contact cards
│       └── Footer/         # Site footer
├── build/                  # Production build
├── package.json
├── REFACTORING_SUMMARY.md  # Architecture documentation
└── COMPONENT_TREE.md       # Component hierarchy
```

### Component Architecture

Each component follows a consistent pattern:
```
ComponentName/
├── index.js              # Barrel export
├── ComponentName.jsx     # Component logic
└── ComponentName.css     # Component styles
```

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
# or
npm run dev
```

Opens the development server at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

### Deployment

The site can be deployed to various platforms:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Technologies

- **React 18** - Component-based UI library
- **CSS3** - Modern responsive styling
- **CSS Variables** - Theming system
- **Mobile-first Design** - Responsive across all devices
- **Modular Architecture** - Component-based structure

## Features

### 🎨 Design
- Professional navy blue and gold color scheme
- Smooth animations and transitions
- Responsive design with mobile hamburger menu
- Scroll indicator on hero section
- Wave SVG dividers

### 📱 Responsive
- Mobile-first approach
- Hamburger navigation on small screens
- Optimized layouts for all device sizes
- Touch-friendly interface

### 🧩 Components
- **Navbar** - Sticky navigation with mobile menu
- **Hero** - Compelling landing with CTAs
- **InfoStrip** - Key value propositions
- **Services** - Interactive practice area cards
- **BusinessQuestions** - Engaging business law section
- **About** - Firm introduction
- **Clients** - Trust signals
- **Contact** - Easy-to-find contact information
- **Footer** - Company details and copyright

### ⚡ Performance
- Component-based code splitting ready
- Optimized asset loading
- Clean, maintainable code structure
- Fast build times

## Code Quality

- **Modular Components** - Each component is self-contained
- **Separation of Concerns** - Logic, styles, and markup separated
- **Reusable Code** - DRY principles applied
- **Consistent Patterns** - Standard structure across components
- **Maintainable** - Easy to locate and modify features

## Documentation

- **README.md** - This file
- **REFACTORING_SUMMARY.md** - Detailed refactoring documentation
- **COMPONENT_TREE.md** - Visual component hierarchy
- **src/components/README.md** - Component usage guide

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

© 2025 Thiong'o Kiragu & Co. Advocates. All rights reserved.
