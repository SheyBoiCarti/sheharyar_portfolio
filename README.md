# Sheharyar Portfolio

A personal developer portfolio that presents my experience, technical skills, education, and selected projects in a responsive, cyber-inspired interface.

## Built with

- React and Vite
- Material UI and styled-components
- Framer Motion
- React Three Fiber / Three.js
- EmailJS for the contact form
- Vercel Analytics

## Run locally

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/SheyBoiCarti/sheharyar_portfolio.git
cd sheharyar_portfolio
npm install
npm run dev
```

The development server will display a local URL, usually `http://localhost:5173`.

## Available commands

```bash
npm run dev      # Start the local development server
npm run lint     # Check the code with ESLint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Deployment

The site can be deployed to any static hosting provider that supports Vite builds, such as Vercel, Netlify, or GitHub Pages. Build the project with `npm run build` and deploy the generated `dist/` directory.

## Contact form configuration

The contact form uses EmailJS, which requires client-visible identifiers to send messages from a browser. Before deploying your own version, configure EmailJS with your approved site domains and appropriate rate limits to reduce abuse.

## License

This repository currently has no license. All rights are reserved unless the owner adds a license file.
