# Component Tree

```
App
│
├── Navbar
│   ├── Brand Logo
│   ├── Hamburger Menu (mobile)
│   └── Navigation Links
│       ├── Home
│       ├── About
│       ├── Services
│       └── Contact
│
├── Hero
│   ├── Hero Content
│   │   ├── Title
│   │   ├── Subtitle
│   │   └── Action Buttons
│   │       ├── Get Advice (CTA)
│   │       └── Our Services
│   ├── Hero Image
│   ├── Wave SVG
│   └── Scroll Indicator
│
├── InfoStrip
│   ├── Info Box (White) - Why Choose Us
│   ├── Info Box (Blue) - Experience
│   └── Info Box (White) - Results
│
├── Services
│   ├── Section Header
│   └── Service Cards Grid (6 cards)
│       ├── Family Law (featured)
│       ├── Business Law
│       ├── Trust & Estates (featured)
│       ├── Civil Litigation
│       ├── Conveyancing (featured)
│       └── Personal Injury
│
├── BusinessQuestions
│   ├── Background Section
│   │   ├── City Image Container
│   │   │   ├── City Image
│   │   │   └── Mirror Image
│   │   └── Left Question Bubble
│   └── Content Section
│       ├── Header Text
│       │   ├── Small Header
│       │   ├── Firm Name
│       │   └── Tagline
│       ├── Intro Text
│       └── Question Bubbles (3)
│
├── About
│   ├── Content Side
│   │   ├── Title
│   │   ├── Description
│   │   └── Contact Button
│   └── Image Side
│
├── Clients
│   ├── Header Text
│   └── Trust Signals (4)
│       ├── Integrity
│       ├── Justice
│       ├── Trust
│       └── Results
│
├── Contact
│   ├── Section Header
│   └── Contact Cards Grid (3)
│       ├── Call Us Card
│       ├── Visit Us Card (featured)
│       └── Email Us Card
│
└── Footer
    ├── Brand Section
    │   ├── Logo
    │   └── Company Info
    │       ├── Company Name
    │       ├── Tagline
    │       └── Address
    └── Copyright
```

## Component Hierarchy Summary

- **Total Components:** 9
- **Stateful Components:** 2 (Navbar, Hero)
- **Stateless Components:** 7
- **Maximum Depth:** 3 levels
- **Average Component Size:** ~35 lines

## Data Flow

```
Parent → Child Props
─────────────────────
App → Components (No props currently - self-contained)

Future Considerations:
- Pass theme/config as props
- Implement global state for user preferences
- Add event handlers for analytics tracking
```

## Component Dependencies

```
App.js
├── imports Navbar
├── imports Hero
├── imports InfoStrip
├── imports Services
├── imports BusinessQuestions
├── imports About
├── imports Clients
├── imports Contact
└── imports Footer

Each Component
├── imports React
├── imports Component.css
└── exports default Component
```
