# ANTIGRAVITY INTEGRATION PROMPT
# Portfolio: Sahil Sharma — Design Engineer
# Purpose: Add this prompt to your existing codebase to integrate the redesigned sections

---

## CONTEXT

You are integrating a redesigned portfolio into an existing Next.js/React codebase.
The design reference is a fully functional HTML file (ss_portfolio_v2.html).
The goal is to translate the HTML prototype into production React components,
preserving every design decision exactly.

---

## DESIGN SYSTEM — IMPLEMENT FIRST

Before writing any components, create `styles/tokens.css` (or inject into your global CSS):

```css
:root {
  /* Dark mode (default) */
  --bg:     #0A0A0A;
  --bg1:    #0F0F0F;
  --bg2:    #141414;
  --bg3:    #1A1A1A;
  --b0:     rgba(255,255,255,0.04);
  --b1:     rgba(255,255,255,0.08);
  --b2:     rgba(255,255,255,0.14);
  --b3:     rgba(255,255,255,0.24);
  --t0:     #F2EFE6;
  --t1:     rgba(242,239,230,0.60);
  --t2:     rgba(242,239,230,0.30);
  --t3:     rgba(242,239,230,0.14);
  --acid:   #CAFF00;
  --acid2:  rgba(202,255,0,0.10);
  --acid3:  rgba(202,255,0,0.06);
  --red:    #FF4444;
  --blue:   #4488FF;
  --grid:   rgba(255,255,255,0.025);
}

[data-theme="light"] {
  --bg:    #EDEAE2;
  --bg1:   #E7E4DC;
  --bg2:   #DEDAD1;
  --bg3:   #D5D2C9;
  --b0:    rgba(0,0,0,0.04);
  --b1:    rgba(0,0,0,0.08);
  --b2:    rgba(0,0,0,0.14);
  --b3:    rgba(0,0,0,0.22);
  --t0:    #0D0D0D;
  --t1:    rgba(13,13,13,0.60);
  --t2:    rgba(13,13,13,0.38);
  --t3:    rgba(13,13,13,0.20);
  --acid:  #4B6B00;
  --acid2: rgba(75,107,0,0.10);
  --acid3: rgba(75,107,0,0.06);
  --grid:  rgba(0,0,0,0.03);
}
```

Typography setup in your `_app.tsx` or `layout.tsx`:
```
Fonts: Bebas Neue (display) · DM Mono (labels/code/nav) · Syne 700-800 (body headings)
Import via Google Fonts or next/font
```

---

## LAYOUT ARCHITECTURE

Replace your existing navbar with this layout shell:

```
┌─────────────────────────────────────────────────────┐
│ [52px sidebar] │ [TOP STATUS BAR — 40px height]      │
│                │─────────────────────────────────────│
│  SS.portfolio  │  HERO (split grid: left + right)    │
│                │─────────────────────────────────────│
│  · (hero)      │  TICKER BAR (full bleed)            │
│  · (approach)  │─────────────────────────────────────│
│  · (projects)  │  APPROACH (left label + 2×2 cards)  │
│  · (tech)      │─────────────────────────────────────│
│  · (connect)   │  PROJECTS (featured + table)        │
│                │─────────────────────────────────────│
│  [live clock]  │  TECH STACK (left label + pills)    │
│                │─────────────────────────────────────│
│                │  CONNECT (split: left + right info) │
│                │─────────────────────────────────────│
│                │  FOOTER (3-col: copy · socs · loc)  │
└────────────────┴─────────────────────────────────────┘
```

---

## COMPONENTS TO BUILD

### 1. `<SideNav />` — replaces your top navbar
```
- position: fixed, left: 0, width: 52px, full height
- border-right: 1px solid var(--b1)
- logo (vertical, writing-mode: vertical-rl, rotated 180deg)
- 5 dot buttons — active dot tracks scroll position via IntersectionObserver
- live time display at bottom (updates every 10s, DM Mono, vertical)
- backdrop-filter: blur(20px)
```

### 2. `<TopBar />` — slim status bar
```
- position: fixed, top: 0, left: 52px, right: 0, height: 40px
- nav links (DM Mono, 10px, letter-spacing 0.14em, uppercase)
- right: availability pill (green pulse dot) + theme toggle button
- theme toggle: sets data-theme="light" on <html> or <body>
```

### 3. `<Hero />` — split layout
```
LEFT SIDE (flex column, justify-content: space-between):
  - Eyebrow: "// Design Engineering" with extending line
  - Name: Bebas Neue, clamp(68px, 8.5vw, 132px), line-height 0.9
    · "SAHIL" on line 1
    · "SHARMA" on line 2 — prepend a small acid-colored block before the S
  - Role badge inline with bio paragraph
  - Metric strip (3 metrics, right-bordered dividers, Bebas Neue nums)
  - CTA row: btn-acid + btn-line

RIGHT SIDE (border-left: 1px solid var(--b1)):
  TOP PANEL — "System processes" widget:
    · 5 rows, each row = filename + sub-label + animated progress bar
    · Bars animate randomly every 2.4s (simulate live activity)
    · "What I'm not" section: 3 strikethrough rows with checkmarks

  BOTTOM ROW — social icons:
    · 5 equal-width cells, 1px gaps between (background: var(--b1))
    · GitHub, X, LinkedIn, Instagram, Dribbble
```

### 4. `<TickerBar />` — acid background strip
```
- background: var(--acid), color: #000
- DM Mono, 10px, letter-spacing 0.18em, uppercase
- Animation: CSS keyframe translateX(-50%) over 35s linear infinite
- Items: Frontend Systems · Interaction Design · Full-Stack Deployment ·
         Neo-Brutalism · Design Engineering · Production Architecture ·
         RAG Systems · Design Systems · Concept → Shipped
- Duplicate all items so loop is seamless
```

### 5. `<Approach />` — process section
```
- Grid: 280px sidebar | 1fr right
- Sidebar: eyebrow · section-h "THE PROCESS." · description · large ghost number "04"
- Right: 2×2 card grid, each card:
    · number (DM Mono, t3) with extending line
    · card title (Syne 700)
    · role label (acid color, DM Mono, uppercase)
    · bullet list with → prefix in acid
    · ghost background letter (Bebas Neue, 120px, text-stroke outline only)
    · hover: background shifts to var(--bg2)
```

### 6. `<Projects />` — featured + table
```
HEADER: section eyebrow + "Selected Projects." + "View All ↗" right-aligned

FEATURED PROJECT BLOCK (grid: 1fr 1fr):
  LEFT — code window mock:
    · Decorative code editor with syntax highlighting
    · Show miryn/rag_pipeline.py code
    · Highlighted lines 03-04 (acid background tint)
    · "Live → Production" tag top-left
    · Radial glow behind the window
  RIGHT — project info:
    · proj num · category label · name (Bebas Neue 80px) · tagline
    · Metrics strip (3 metrics in acid)
    · Detail rows (key-value pairs)
    · Tech tags · CTA link

TABLE (remaining projects):
  · Each row: num | name+cat | description | tags | link
  · Hover: background var(--bg2)
  · border-bottom between rows
```

### 7. `<TechStack />` — stack + proficiency
```
- Grid: 280px sidebar | 1fr right
- Sidebar: eyebrow · "THE STACK." · description
  + Proficiency bars (5 bars, animated on scroll):
    Frontend 95% · Product Design 90% · Backend 80% · AI/ML 72% · DevOps 68%
    → Bars start at 0%, animate to target width on IntersectionObserver trigger
    → Bar color: var(--acid), height: 2px, track: var(--b1)

- Right: 4 categories × pill lists
    Frontend & UI: React/Next.js · TypeScript · Tailwind · Framer Motion · CSS Animations · Vue.js
    Design Tooling: Figma · Design Tokens · Prototyping · Lottie · Rive
    Backend & APIs: FastAPI · Node.js · Supabase · PostgreSQL · pgvector · Redis
    AI / Infrastructure: OpenAI APIs · Gemini · RAG Architecture · Cloudflare Workers · Vercel Edge · Render
  
  Pill states: default (border var(--b1), bg var(--bg2)) → hover (border var(--acid), bg var(--acid3), color var(--acid))
  Dot colors: acid = frontend/design, blue = backend/infra, gray = secondary tools
```

### 8. `<Connect />` — contact section
```
- position: relative, overflow: hidden, min-height: 100vh
- Watermark: "CONNECT." — Bebas Neue, clamp(120px, 18vw, 280px)
  text-stroke only (color: transparent, -webkit-text-stroke: 1px rgba(255,255,255,0.04))
  position: absolute, bottom: -40px, right: -40px, pointer-events: none

- Grid: 1fr | 420px (border-left)

LEFT:
  · eyebrow · headline · "No agency markup. No handoff delays. Just product." witty badge
  · sub-paragraph · CTA buttons

RIGHT (info blocks, stacked, 1px gap between, bg var(--b1)):
  Each block (bg var(--bg1)):
    · tiny label (DM Mono 8px, t3) · main value (14px, t0, weight 600) · sub (DM Mono 10px, t2)
  Blocks: Currently Based · Response Time · Typical Engagement · Availability · Contact
```

### 9. `<Footer />` — 3-column
```
- 3 columns: copyright left · social icons centered · location pill right
- Social icons: 40×40px each, 1px gaps, bg var(--bg)
- Location: green pulse dot + "Delhi, India · Open to opportunities"
```

---

## INTERACTIONS TO IMPLEMENT

### Custom cursor
```javascript
// Dot (10px, acid, mix-blend-mode: difference) follows mouse instantly
// Ring (36px, acid border, 40% opacity) follows with lerp factor 0.12
// On hover of links/buttons/cards: dot → 18px, ring → 56px
// Use requestAnimationFrame loop for ring animation
```

### Scroll spy
```javascript
// IntersectionObserver on each section
// When section enters viewport: activate corresponding sidenav dot
// Dots scroll to section on click
```

### Reveal animations
```javascript
// IntersectionObserver on elements with class "reveal"
// On intersect: opacity 0→1, translateY 20px→0
// transition: 0.6s ease
// rootMargin: "0px 0px -60px 0px"
```

### Process bar pulse
```javascript
// setInterval every 2400ms
// Each bar gets random delta: ±(0–8)%
// Clamped: min 30%, max 100%
// Simulates "live system activity"
```

### Proficiency bar animation
```javascript
// IntersectionObserver on tech sidebar
// On intersect: all .prof-fill elements animate from 0% to data-w value
// transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1)
```

---

## COPY DECISIONS — DO NOT CHANGE

These are intentional witty/direct lines. Keep them verbatim:

- Hero badge: "Not a designer who codes. Not a developer who designs. Both, fully."
- "What I'm not" rows:
  · "A designer who hands off to devs" → strikethrough → "I ship it myself"
  · "A dev who ignores UX" → strikethrough → "Design is the product"  
  · "Available in 6 months" → strikethrough → "Let's scope it this week"
- Connect witty: "No agency markup. No handoff delays. Just product."
- Connect sub: "...I usually respond within 24 hours with a scoped first step — not a pitch deck."
- Metric: "0x Rewrites Needed" (this is the most VC-resonant stat on the page)
- Footer: "Designed & built with intent."

---

## CRITICAL IMPLEMENTATION NOTES

1. SIDEBAR NAV replaces ALL existing navbar code. Remove top navbar entirely.
2. All sections need `margin-left: 52px` and `padding-top: 40px` (for sidebar + topbar offsets).
3. Grid system: 64px grid, 0.025 opacity — apply via body::before pseudo-element.
4. Noise texture: apply via body::after with inline SVG data URI (see HTML reference).
5. Light mode: ALL accent-colored elements (ticker, btn-acid, acid text) need separate light-mode overrides — do not share one token for both modes.
6. The code window in the featured project is purely decorative HTML — no actual syntax highlighting library needed, just span classes.
7. DO NOT add any animation libraries (GSAP, etc.) — all animations are CSS-only or vanilla JS requestAnimationFrame.
8. Typography hierarchy is strict:
   - Display headings: Bebas Neue only
   - Section headings: Bebas Neue
   - Body copy: Syne 400-600
   - ALL labels, tags, nav, time, code: DM Mono only
9. Line weights: 1px borders at var(--b1) default, var(--b2) on hover, var(--b3) for strong emphasis. Never 0.5px.
10. The "SHARMA" line2 has a small acid block prepended via ::before — implement this carefully, it's the strongest visual signature of the hero.

---

## FILES TO CREATE / MODIFY

```
components/
  SideNav.tsx          ← new
  TopBar.tsx           ← replaces existing Navbar
  Hero.tsx             ← replace existing Hero
  TickerBar.tsx        ← new
  Approach.tsx         ← new (was "Skills")
  Projects.tsx         ← replace existing
  TechStack.tsx        ← new
  Connect.tsx          ← replace existing Contact
  Footer.tsx           ← replace existing

styles/
  tokens.css           ← new (design system vars)
  globals.css          ← add: grid overlay, noise, cursor, reset

hooks/
  useScrollSpy.ts      ← new
  useReveal.ts         ← new (IntersectionObserver)
  useCursor.ts         ← new

app/
  layout.tsx           ← add font imports + token.css
  page.tsx             ← assemble sections
```

---

## VALIDATION CHECKLIST

Before shipping, verify:
- [ ] Sidebar dots correctly track scroll position
- [ ] Process bars pulse every 2.4s
- [ ] Proficiency bars animate on scroll into view
- [ ] Custom cursor: dot follows mouse, ring lags with lerp
- [ ] Cursor expands on hover of interactive elements
- [ ] Theme toggle works: dark ↔ light, all acid colors swap correctly
- [ ] Ticker loops seamlessly (no jump)
- [ ] Code window syntax highlighting renders in both themes
- [ ] Watermark "CONNECT." renders as outline text only (not filled)
- [ ] All reveal animations fire once on scroll
- [ ] Footer social icons open correct links
- [ ] No console errors on load
- [ ] Passes Lighthouse accessibility score > 80
