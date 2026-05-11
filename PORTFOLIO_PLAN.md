# Wai Lin Htet — Portfolio Website Plan

> A modern, dark, glassmorphic portfolio for a senior software engineer.
> **Stack:** Vite + React 18 + Framer Motion + Tailwind CSS + Lucide Icons

---

## 1. Design Philosophy

A **dark, premium, animated** portfolio that feels like a product — not a CV.
The vibe should sit somewhere between **Linear**, **Vercel**, and a senior dev's personal site:
restrained color, generous whitespace, micro-interactions, and content-first layout.

### Visual Language
- **Theme:** Dark base (`#0A0A0F`) with an aurora gradient backdrop (violet → cyan).
- **Accent:** Electric violet `#7C3AED` + Cyan `#22D3EE` gradient text on hero / section titles.
- **Glass cards:** `backdrop-blur-xl` over translucent white at 4–6% opacity, 1px hairline border `rgba(255,255,255,0.08)`.
- **Typography:** `Inter` for body, `Space Grotesk` for headings, `JetBrains Mono` for code/labels.
- **Motion:** Framer Motion — fade + slide on scroll, spring transitions, magnetic buttons.
- **Cursor feel:** Sticky-soft hover states, project cards lift `translateY(-6px)` with glow shadow.

### Responsive Breakpoints
| Device  | Width      | Layout                                    |
|---------|------------|-------------------------------------------|
| Mobile  | < 640px    | Single column, hamburger nav, stacked     |
| Tablet  | 640–1024px | 2-col project grid, condensed timeline    |
| Desktop | > 1024px   | 3-col project grid, full timeline         |

---

## 2. Site Structure

```
┌─ Navbar (sticky, glass)                        Home · About · Experience · Projects · Contact
├─ Hero                                          Name + role + CTA buttons + scroll indicator
├─ About                                         Photo placeholder + bio + skills cloud
├─ Experience                                    Vertical timeline with company cards
├─ Education                                     Two clean cards side-by-side
├─ Projects (Featured)                           Filterable grid (All / Mobile / Web / IoT / POS)
├─ Other Internal Projects                       Compact list of internal-only apps
└─ Footer                                        Email, GitHub, LinkedIn, "Built with…"
```

---

## 3. Section-by-Section Content

### 3.1 Navbar
- Logo: `WL.` (monogram, gradient)
- Links: Home / About / Experience / Projects / Contact
- Right-side: "Hire me" button (gradient pill)
- Mobile: slide-down panel

### 3.2 Hero
- **Eyebrow:** `> Available for senior roles`
- **H1:** `Hi, I'm Wai Lin Htet.` then gradient line `I build mobile & web products that ship.`
- **Subtext:** "Senior software engineer with 5+ years and 20+ apps shipped across banking, IoT, e-commerce, hospitality, energy, and transportation."
- **CTAs:** `View Projects` (primary) · `Download CV` (ghost) · `Contact` (ghost)
- **Stat row:** `5+ years` · `20+ apps shipped` · `4 countries` · `Lead engineer`
- Background: animated aurora blobs + grid SVG.

### 3.3 About
- Left: avatar placeholder (circle, gradient ring).
- Right:
  - Heading: `About Me`
  - 2 short paragraphs based on resume profile.
  - **Skill chips** grouped:
    - **Frontend:** React, React Native, JavaScript, TypeScript, CSS, HTML
    - **Backend:** Java, Node, Express, Spring Boot, MySQL, MongoDB, Hibernate, Sequelize, GraphQL
    - **DevOps & Tools:** AWS, Digital Ocean, Nginx, Firebase, Git, Postman, IntelliJ
    - **Languages:** English (Intermediate), Burmese (Native), Japanese (N5)

### 3.4 Experience — Vertical Timeline
Each entry: company badge · role · date · location · bullets.

| Role                          | Company                              | Period            | Location              |
|-------------------------------|--------------------------------------|-------------------|-----------------------|
| Senior Developer              | IT Wizard Korea                      | Apr 2025 – Present| Korea (Remote)        |
| Mobile Developer              | Edirq Inc.                           | Nov 2024 – Dec 2025| California, USA (Remote) |
| Project Teams Leader          | AXRA Technology                      | Sep 2021 – Apr 2025| Yangon, Myanmar       |
| Team Leader                   | EzyPet                               | Aug 2024 – Feb 2025| Yangon, Myanmar       |
| Senior Software Engineer      | Smart Creative Intelligent Tech.     | Jun 2022 – Sep 2024| Philippines (Remote)  |
| Frontend Developer            | Hydro Plant                          | Nov 2020 – Jul 2021| Yangon, Myanmar       |
| Freelance Developer           | —                                    | May 2020 – Aug 2020| Yangon, Myanmar       |

### 3.5 Education
- **Bachelor of Engineering, IT** — West Yangon Technological University · 2014–2020
- **Diploma in Professional Java Programming** — India-Myanmar Center for Enhance Skills · 2019–2020

### 3.6 Featured Projects (the showcase)
Filter pills: **All** · **Mobile** · **Web** · **IoT** · **POS / Hardware** · **E-commerce**

Each card shows: cover (gradient + emoji/icon), name, tagline, tech tags, and clickable buttons.

| # | Project                         | Tagline                                                           | Tags                                       | Android | iOS |
|---|---------------------------------|-------------------------------------------------------------------|--------------------------------------------|---------|-----|
| 1 | **EzyStamp**                    | Digital stamp & rewards for businesses                            | RN, React, Next.js, Node, GraphQL, Postgres| ✅ `com.ezystamp` | ✅ `id6753874831` |
| 2 | **AMU Travel Booking**          | Hotel booking platform launched in Mongolia                       | RN, React, Spring Boot, MySQL              | ✅ `com.amullc.app` | ✅ `id6749428154` |
| 3 | **GRPOS**                       | Prepaid card POS for Golden ROC Hotel Group (NFC, Mifare)         | RN, Android POS, NFC                       | (internal) | — |
| 4 | **AMI for NMRE**                | Smart-meter & IoT system for Myeik Islands solar/hydro grid       | RN, IoT, Backend                           | ✅ `com.nmre` | ✅ `id6740324526` |
| 5 | **ORO Wallet**                  | Mobile wallet running across Manila — eKYC, biometrics, NFC       | RN, Node, Java Card (ISO 7816), eKYC       | ✅ `com.aici.orowallet` | ✅ `id1603281764` |
| 6 | **ALPHA MM**                    | Internal ERP for Alpha International — wholesale & resellers      | RN, Node, GraphQL                          | ✅ `com.axratech.alphamm` | ✅ `id6569254469` |
| 7 | **Power Play**                  | Fitness app w/ video purchases, IAP, push                         | RN, GraphQL, Firebase                      | ✅ `com.axratech.powerplay` | ✅ `id6444821979` |
| 8 | **V.Jun**                       | E-commerce w/ in-app cover customization                          | RN, GraphQL                                | ✅ `com.vjun` | ✅ `id1617216233` |
| 9 | **Pann Sine**                   | Florist & gardening e-commerce (National Kandawgyi)               | RN, Node, GraphQL                          | ✅ `com.pannsine` | ✅ `id6444821979` |
| 10| **My EV Myanmar**               | Find & navigate to nearby EV charging stations                    | RN, Express                                | ✅ `com.axratech.myev` | ✅ `id6470975492` |
| 11| **Joy My Puppy**                | Pet spa booking + multi-vendor + community                        | RN, React, Node, Postgres                  | ✅ `com.axratech.joy` | ✅ `id6475634062` |
| 12| **EzyPet**                      | Pet-owner app: spa search, hotels, medical records                | RN, Laravel, AWS, AdMob, Firebase          | ✅ `com.ezypet` | ✅ `id6504876526` |
| 13| **Shwe Padauk Taxi**            | Major Myanmar taxi app — thousands of drivers                     | RN, REST, GPS                              | ✅ `com.shwepadauktaxi.app` | — |
| 14| **NAKSport**                    | E-commerce for sportswear & shoes                                 | RN                                         | ✅ `com.naksport` | ✅ `id1616217027` |
| 15| **Go Tuk Tuk**                  | KM-based taxi metering — Mandalay region                          | RN                                         | (internal) | — |

### 3.7 Other Internal Projects (Philippines)
Compact card list — no store links, internal apps:
- Vending Machine App (Makati shopping malls)
- Mobile POS (Sunmi P2 Pro)
- Desktop POS (Sunmi D2s Combo)
- Driver App (GPS tracking for delivery)
- Bus Ticket Validator App
- Car Parking Management System (QR + auto-fee)
- Barrier Operator App
- Task Tracking App (electricians/handymen)

### 3.8 Contact / Footer
- Heading: `Let's build something great.`
- Email: `wailinhtet.dev@gmail.com` (mailto link)
- Phone: `+95 963936613`
- LinkedIn: `wai-lin-9ab3211b5`
- GitHub: `wailin0`
- Site: `wailin.netlify.app`
- Footer caption: `© 2026 Wai Lin Htet · Built with React + Vite`

---

## 4. Technical Architecture

```
src/
├─ main.jsx                    Vite entry
├─ App.jsx                     Page composition
├─ index.css                   Tailwind layers + custom CSS vars
├─ data/
│  ├─ profile.js               Personal info, socials
│  ├─ skills.js                Skill groups
│  ├─ experience.js            Timeline entries
│  ├─ education.js
│  ├─ projects.js              Featured project list (with android/ios urls)
│  └─ internalProjects.js      Internal-only apps
├─ components/
│  ├─ Navbar.jsx
│  ├─ Hero.jsx
│  ├─ About.jsx
│  ├─ Experience.jsx
│  ├─ TimelineItem.jsx
│  ├─ Education.jsx
│  ├─ Projects.jsx
│  ├─ ProjectCard.jsx
│  ├─ InternalProjects.jsx
│  ├─ Contact.jsx
│  ├─ Footer.jsx
│  └─ ui/
│     ├─ AuroraBackground.jsx
│     ├─ GradientText.jsx
│     ├─ Pill.jsx
│     └─ SectionHeader.jsx
└─ assets/
   └─ avatar.png (placeholder)
```

### Key Dependencies
- `react`, `react-dom`
- `vite`, `@vitejs/plugin-react`
- `tailwindcss`, `postcss`, `autoprefixer`
- `framer-motion`
- `lucide-react`

### Project Card — Link Logic
```jsx
{project.android && (
  <a href={`https://play.google.com/store/apps/details?id=${project.android}`}
     target="_blank" rel="noopener noreferrer"
     className="play-btn">
    <PlayIcon /> Google Play
  </a>
)}
{project.ios && (
  <a href={`https://apps.apple.com/app/id${project.ios}`}
     target="_blank" rel="noopener noreferrer"
     className="apple-btn">
    <AppleIcon /> App Store
  </a>
)}
{project.web && (
  <a href={project.web} target="_blank" rel="noopener noreferrer">
    <GlobeIcon /> Visit Site
  </a>
)}
```

---

## 5. Animation & Interaction Details

| Element            | Effect                                                       |
|--------------------|--------------------------------------------------------------|
| Hero name          | Letter-by-letter slide-up with staggered delay               |
| Section headers    | Fade + Y-translate when 30% in viewport                      |
| Project cards      | Lift on hover, gradient border glow, image scale 1.05        |
| Skill chips        | Floating bob with sin-wave delay                             |
| Timeline           | Animated vertical line draws as user scrolls                 |
| Buttons            | Magnetic pull on cursor (Framer `whileHover` + spring)       |
| Aurora background  | Slow CSS animation over 30s — translate + opacity           |

---

## 6. Build & Deploy

```bash
npm create vite@latest wailin-portfolio -- --template react
cd wailin-portfolio
npm i framer-motion lucide-react
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev          # localhost:5173
npm run build        # → dist/
```

**Deployment targets:** Netlify (already at `wailin.netlify.app`), Vercel, or GitHub Pages.

---

## 7. What I'll Build Next

After you approve this plan, I will:
1. Scaffold the Vite + React project with Tailwind, Framer Motion, Lucide.
2. Build all data files from your resume content.
3. Implement every component listed in §4.
4. Wire up responsive behavior + animations.
5. Run `npm run dev` and confirm the site loads cleanly.

Ready to build when you give the go.
