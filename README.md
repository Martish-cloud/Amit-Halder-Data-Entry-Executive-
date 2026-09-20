# Amit Halder — Premium Personal Portfolio

A high-end, responsive, and animated personal portfolio website for **Amit Halder**, strictly grounded in the official curriculum vitae as the single source of truth.

Developed for modern browsers with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

---

## 🚀 Live Demo & Repository

- **Repository**: [https://github.com/Martish-cloud/Amit-Halder-Data-Entry-Executive-.git](https://github.com/Martish-cloud/Amit-Halder-Data-Entry-Executive-.git)
- **Role**: Data Entry Executive & Operations Professional
- **Location**: Kolkata, West Bengal, India

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript 5.8+
- **Styling**: Tailwind CSS v4 (Obsidian & Electric Cyan Theme)
- **Motion & Interactions**: Framer Motion (`framer-motion`), `canvas-confetti`
- **Icons**: Lucide React (`lucide-react`) + Custom SVG Monograms
- **Quality & Linting**: Oxlint + TypeScript strict mode
- **SEO & Accessibility**: Schema.org `Person` JSON-LD, OpenGraph, Twitter Cards, WCAG 2.1 AA compliant, `prefers-reduced-motion` support

---

## 📋 Features & Sections

1. **Floating Glassmorphic Navigation**:
   - Scroll-spy indicator highlighting active sections
   - Responsive mobile animated drawer with backdrop blur
   - Quick one-click CV download action

2. **Hero Section**:
   - Bold editorial typography with smooth staggered reveals
   - Professional identity badge & interactive SVG Operations & Data Pipeline Graphic
   - Primary CTAs: View Experience, Explore Skills, Contact Me, Download CV

3. **About & Operations Philosophy**:
   - Faithful representation of Amit Halder's professional summary
   - 4 verified operational pillars: Data Accuracy, ERP & Inventory, Order & Dispatch, Analytics & Reporting
   - 4 verified CV metric indicators (3 Industrial Roles, 22 Technical Skills, 6 Languages, 100% Data Accuracy Focus)

4. **Experience Timeline**:
   - Interactive vertical timeline with glowing scroll progress indicator
   - Expandable/collapsible responsibility cards with custom bullet indicators
   - Roles at **Pioneer Mega Printers**, **Jay Boxes**, and **York Print Pvt. Ltd.**

5. **Skills Dashboard**:
   - Categorized filter tabs: *All*, *Data & Operations*, *Analytics & Business Tools*, *ERP & Planning*
   - Interactive search bar to filter across all 22 verified skills
   - Visual category cards without arbitrary fake percentage bars

6. **Education**:
   - Indira Gandhi National Open University (IGNOU) — B.A. (Pursuing 2026–2029)
   - West Bengal Council of Higher Secondary Education (WBCHSE) — Higher Secondary (Arts)

7. **Languages**:
   - Bengali (Native), English (Professional), Hindi (Professional), Assamese (Basic), French (Elementary), Japanese (Elementary)
   - Clean fluency meter badges

8. **Contact Hub**:
   - Direct 1-click clipboard copy with toast feedback for Email (`askfor.amithalder@gmail.com`) and Phone (`(+91) 7003660883`)
   - Interactive mailto composer with pre-filled inquiry template
   - LinkedIn profile link

9. **Resume Asset**:
   - Downloadable official CV document (`Amit_Halder_Resume.pdf`) in `public/` directory
   - Modal preview with print / download actions and celebratory feedback

---

## 💻 Local Development Setup

### Prerequisites

- Node.js 18+ (tested on Node v24.20.0)
- npm 9+ (tested on npm 11.19.0)

### Installation

```bash
# Clone the repository
git clone https://github.com/Martish-cloud/Amit-Halder-Data-Entry-Executive-.git

# Navigate into the project folder
cd Amit-Halder-Data-Entry-Executive-

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🏗️ Build & Production

```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview

# Run linting check
npm run lint
```

Production output will be generated inside the `dist/` directory.

---

## 🚢 Deployment Instructions

### Deploying to GitHub Pages

1. In `vite.config.ts`, add the repository base path:
   ```ts
   export default defineConfig({
     base: '/Amit-Halder-Data-Entry-Executive-/',
     // ...
   })
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to GitHub Pages using `gh-pages` or a GitHub Actions workflow.

### Deploying to Vercel / Netlify / Cloudflare Pages

Simply import the repository in Vercel or Netlify:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or 20.x

---

## 📄 License & Content Integrity

All personal, academic, and occupational data presented in this application is strictly sourced from the curriculum vitae of Amit Halder.
