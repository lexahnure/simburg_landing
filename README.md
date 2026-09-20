# Simburg — eSIM & SIM Lifecycle Management Platform

Official landing page and website for **Simburg**, an independent software infrastructure platform for the full SIM and eSIM lifecycle.

---

## 📌 Overview

Simburg provides standards-based software components for telecom operators, MVNOs, IoT providers, and smart card manufacturers.

### Key Products
- **RSP Solution**: Consumer and IoT remote SIM provisioning (GSMA SGP.22, SGP.31, SGP.32, TS.43, SAS-SM).
- **SIM/eSIM Operating System**: Native card OS deployed on certified secure microcontrollers (3GPP Release 15 & Release 9 legacy estates).
- **OTA Platform**: Campaign-scale over-the-air card management via SMS (SCP80) and PSK-TLS (SCP81).
- **Electronic Documents Solution**: Government-grade chip software for ePassports, driving licences, and identity (SCOSTA, ICAO Doc 9303).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Graphics**: Custom 3D interactive Canvas globe with Goldberg polyhedra honeycomb mesh (`CanvasHoneycomb.jsx`)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG product logos
- **Styling**: Modern vanilla CSS with design tokens, responsive breakpoints, and smooth scroll reveals

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/lexahnure/simburg_landing.git
cd simburg_landing
npm install
```

### 2. Development Mode
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Build & Deployment Instructions

### Production Build
To create an optimized production build:
```bash
npm run build
```

This command:
1. Compiles and minifies the React application into the `dist/` directory via Vite.
2. Runs `node scripts/generate-routes.js` to pre-generate static HTML files for all client-side routes (`/about`, `/contact`, `/privacy-policy`, `/product-rsp`, `/product-sim-os`, `/product-ota`, `/product-edoc`) alongside `404.html`.
3. Copies deployment configuration files (`_redirects`, `vercel.json`, `netlify.toml`, `.htaccess`) to ensure SPA direct-link routing works across all hosting providers:
   - **Vercel**
   - **Netlify**
   - **GitHub Pages**
   - **Apache Web Server** (`.htaccess`)
   - **Nginx / Static Web Servers**

### Preview Production Build
To test the built production application locally:
```bash
npm run preview
```
Or start the custom Node.js server:
```bash
npm start
```
The server will run at `http://localhost:3000`.

---

## 📂 Project Structure

```
├── public/                 # Static assets served at root (favicons, manifests, etc.)
├── scripts/
│   └── generate-routes.js  # Static route generator for SPA deployment
├── src/
│   ├── components/         # Reusable UI components (Header, Footer, CanvasHoneycomb, etc.)
│   ├── pages/              # Page views (Home, About, Contact, Product pages, Privacy)
│   ├── styles/             # Global and responsive CSS styles
│   ├── App.jsx             # Root application & routing setup
│   └── main.jsx            # React DOM entry point
├── uploads/                # Brand SVGs, partner logos, and graphic assets
├── index.html              # HTML entry template
├── package.json            # Project dependencies and npm scripts
├── server.js               # Node.js production server fallback
└── vite.config.js          # Vite configuration
```

---

## 📄 License

All rights reserved © 2026 Simburg.
