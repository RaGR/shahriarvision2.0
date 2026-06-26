# شهریار ویژن (Shahriar Vision) — Business Consulting Website v2.0

**Live Site:** https://shahriarvision.com/  
**Framework:** React 19 + TypeScript + Vite + Tailwind CSS v4 + Express  
**Language:** Persian (Farsi) — RTL  
**Design System:** Pastel Orange + Sky Blue

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
# → Output in /dist

# 4. Run production server
npm start
```

---

## 📁 Project Structure

```
shahriarvision2.0-main/
├── public/
│   └── assets/
│       └── final/                  # ✅ All production images (local only)
│           ├── brand/              # logo-primary.png, brand-script-white.png
│           ├── hero/               # home-hero-shahriar-vision.webp (+ mobile, 1280 variants)
│           ├── people/             # 4 founder portraits (webp)
│           ├── articles/           # 4 square cropped portraits for blog cards
│           ├── backgrounds/        # footer-contact-background.webp
│           ├── vectors/            # 6 SVG vector graphics
│           └── source-copies/      # Original source images (not for production)
├── src/
│   ├── main.tsx                    # React entry point
│   ├── App.tsx                     # Main app + routing
│   ├── index.css                   # Tailwind config + custom animations
│   ├── types.ts                    # TypeScript interfaces
│   ├── components/
│   │   ├── Navbar.tsx              # Top navigation with services dropdown
│   │   ├── Footer.tsx              # Dark footer with service links
│   │   ├── HomeView.tsx            # Homepage (hero, services, stats, blog, CTA)
│   │   ├── AboutView.tsx           # About page with founder story
│   │   ├── ServicesOverviewView.tsx # Catalog of all 21 services
│   │   ├── ServiceDetailView.tsx   # Individual service page (renders any of 21)
│   │   ├── BlogView.tsx            # Blog listing + single post view
│   │   ├── ContactView.tsx         # Contact form + info
│   │   ├── ConsultationRequestView.tsx # Consultation booking form
│   │   ├── PremiumVisualFrame.tsx  # Image component with local fallbacks
│   │   ├── SkyBlueAbstractGraphic.tsx # SVG abstract graphics per service
│   │   └── StrategicSimulator.tsx # Interactive diagnostic tool widget
│   └── data/
│       ├── servicesData.ts         # 21 service records (full Persian content)
│       ├── blogData.ts             # 7 blog posts with SEO metadata
│       └── legacyPages.ts          # 29 legacy page records from old website
├── server.ts                       # Express server (port 3000) with API routes
├── vite.config.ts                  # Vite + React + Tailwind config
├── tsconfig.json                   # TypeScript config
├── index.html                      # HTML entry (RTL, Persian)
├── package.json                    # Dependencies & scripts
├── metadata.json                   # App metadata
├── FINAL-REPORT.md                 # Implementation report
└── ARCHITECTURE.md                 # Full architecture documentation
```

---

## 🖼️ Design System

| Token | Value | Usage |
|---|---|---|
| Sky 50 | `#f0f7ff` | Lightest sky wash |
| Sky 100 | `#e0effe` | Background wash |
| Sky 200 | `#b9dffd` | Borders, dividers |
| Sky 300 | `#7cc3fc` | Accents |
| Sky 400 | `#38a5f8` | Icons |
| Sky 500 | `#29b6f6` | Primary sky blue (links, active nav) |
| Sky 600 | `#039be5` | Darker sky |
| Sky 700 | `#0288d1` | Darkest sky |
| Orange 50 | `#fff6f0` | Lightest orange wash |
| Orange 100 | `#ffe8db` | Soft cards |
| Orange 400 | `#ff915c` | Badges, highlighs |
| Orange 500 | `#ff7d3e` | Primary orange (CTA, emphasis) |
| Orange 600 | `#e66425` | Darker orange |
| Surface | `#fcfdfd` | Page background |
| Ink | `#0f172a` | Main text |
| Body | `#475569` | Body copy |

**Typography:** Vazirmatn (Persian web font via Google Fonts)

**Animations:** `fadeIn` (0.4s), `slideDownStartup` (1.2s)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS v4 |
| Build | Vite 6 |
| Server | Express 4 + tsx |
| Icons | Lucide React |
| Animations | Motion (Framer Motion) |
| Fonts | Google Fonts (Vazirmatn) |

---

## 📊 Content Data

### Services (21 total)
All defined in `src/data/servicesData.ts`. Each service includes:
- `id`, `title`, `subtitle`, `description`
- `problemStatement`, `whyItMatters`
- `benefits` (5 items)
- `process` (5 steps with descriptions)
- `deliverables` (3-4 items)
- `faqs` (2 items each)
- `iconName` (Lucide icon)

### Blog Posts (7 total)
All defined in `src/data/blogData.ts`. Each post includes:
- `id`, `title`, `excerpt`, `content`
- `category`, `date`, `readTime`
- `image` (local path)
- `tags`, `author`
- `seoTitle`, `seoDescription`

### Legacy Pages (29 total)
All defined in `src/data/legacyPages.ts`. Each record includes:
- `id`, `legacySlug`, `title`
- `category` (service | article | archive | support | legacy-other)
- `sourceFile`, `summary`
- `showInNavigation`, `relatedServiceIds`

---

## 🔌 API Routes

| Method | Path | Description |
|---|---|---|
| POST | `/api/contact` | Submit contact message → saves to `data/messages.json` |
| POST | `/api/consultation` | Submit consultation request → saves to `data/consultations.json` |
| GET | `/api/consultation/:code` | Query consultation by booking code |
| GET | `/api/admin/all-submissions` | List all messages and consultations |

---

## 🖌️ Asset Map

All production images are in `public/assets/final/`:

| File | Dimensions/Format | Used In |
|---|---|---|
| `brand/logo-primary.png` | Transparent PNG | Navbar |
| `brand/logo-primary@2x.png` | HiDPI PNG | Retina displays |
| `brand/brand-script-white.png` | White transparent PNG | Footer, dark sections |
| `hero/home-hero-shahriar-vision.webp` | 1920x1080 | Home hero |
| `hero/home-hero-shahriar-vision-1280.webp` | 1280w | Tablet hero |
| `hero/home-hero-shahriar-vision-mobile.webp` | Mobile crop | Mobile hero |
| `people/founder-desk-consultation.webp` | Portrait | About, CRM, articles |
| `people/founder-standing-cactus-dark-suit.webp` | Portrait | Services, org chart |
| `people/founder-lounge-strategy.webp` | Portrait | SWOT, strategy |
| `people/founder-standing-cactus-light-shirt.webp` | Portrait | Contact, about |
| `articles/*-square.webp` | 1:1 square | Blog post cards |
| `backgrounds/footer-contact-background.webp` | Wide | Footer background |
| `vectors/*.svg` | Vector | Decorative accents |

**Zero external/WordPress image dependencies in production.**

---

## 🧭 Routing

| Route | Component | Description |
|---|---|---|
| `home` | `HomeView` | Homepage |
| `about` | `AboutView` | About page |
| `services_overview` | `ServicesOverviewView` | Service catalog (21 services) |
| `branding` → `video_lessons` | `ServiceDetailView` | Individual service pages (21 routes) |
| `blog_list` | `BlogView` | Blog listing |
| `blog_single` | `BlogView` | Single blog post (fallback) |
| `contact` | `ContactView` | Contact page |
| `consultation_request` | `ConsultationRequestView` | Booking form |

**Route ID format:** Underscores in URL state (`business_plan`) map to hyphens in data IDs (`business-plan`) via regex replace.

---

## 📦 Build Output

```
dist/
├── index.html              1.05 kB
├── assets/
│   ├── index-D8v4B7n-.css  79.96 kB (12.33 kB gzip)
│   └── index-FlmdMrXF.js   597.15 kB (166.60 kB gzip)
└── server.cjs              9.4 kB
```

Build time: ~6s

---

## 📝 License

SPDX-License-Identifier: Apache-2.0

© 2026 شرکت مشاوره مدیریت همگامان ایده نوآفرین (شهریار ویژن). تمامی حقوق محفوظ.
