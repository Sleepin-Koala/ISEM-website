# ISEM Website — UI / UX / Art Direction Audit

**Date:** 2026-10-16
**Scope:** `/` (home: Hero, Pourquoi ISEM, Spécialisations, Contact, Footer) and `/projects`, current working copy on `main` (including the uncommitted refactor into `src/shared/` and `src/showcase/components/`).

## Method and limitations

- **Observed directly:** I ran the site locally (Vite dev server) and looked at it at 1440×900, 1280×800 and 375×812 (mobile emulation), in both dark and light themes. I measured layout, contrast, focus order and hit-testing in the live DOM, read the console, and ran a production build to get bundle sizes.
- **Read in code:** I read all the React components and the CSS files (`index.css`, `theme.css`, `style.css`, `anim.css`).
- **Not tested:**
  - Real iOS or Android devices: mobile is emulation only.
  - Tablet widths between 768 and 1023px.
  - A screen reader.
  - The deployed production host. I don't know where it's hosted, so routing and caching findings are marked as hypotheses.
  - Lighthouse or Core Web Vitals.
  - Hover states of the project cards on a touch device.
- **Capture problem:** screenshots in my browser pane sometimes timed out or came back stale while the canvas animation was running. Where that happened, I used DOM measurements instead of pictures.

Severity scale: **Critical** means something is broken, unreadable or blocks a task. **High** means it clearly hurts credibility or usability. **Medium** means a noticeable quality loss. **Low** means polish.

---

## 1. Overall impression

On first load you see a dark navy screen with a faint grid of equations (Black-Scholes, gradient descent, a neural-net diagram), a cyan particle network drifting on the right, an orange-on-white "ISEM" wordmark, and a short white-and-cyan headline: *"Comprendre le monde / par les modèles."*

**The concept is right.** A school of exact sciences and modelling that shows its equations and a living network is on-message, and the palette (deep navy, cyan for science, amber for action) is sound and appropriate. The copy is the best thing on the site. It is confident, specific ("Espaces de Banach", "Solvency II, Bâle III", "PINNs") and it sounds like a real institution.

**The execution doesn't live up to the concept.** The site reads as a talented student template, not as an institution:

- The headline is set in the **operating system's default font** (Segoe UI on Windows, San Francisco on Mac), even though four Google font families are loaded. The single most important line on the site has no typographic identity.
- The decorative background image is **painted on top of the headline**, so the hero text is literally behind a semi-transparent layer. In light mode this washes the headline into grey.
- The hero text is squeezed into a **384px column** at 1440px wide. The headline breaks as "Comprendre le / monde", leaving an orphan word.
- The two CTAs are different widths, stacked, with different typography and hover logic.
- Below the hero, the page becomes a sequence of near-identical dark rectangles. There is no imagery, no people, no campus, no numbers, no proof.
- The contact form **does nothing** and the footer links point to `#`.

**What it communicates:** "a promising project that nobody has finished." For a school, whose whole job is to earn the trust of students and parents, that's the critical gap. Trust is the product, and right now the site doesn't build it.

**Strongest:** the subject-specific copy, the coherent dark science palette, the idea of math glyphs as icons, and a reasonable section order.
**Weakest:** typography, broken layering in the hero, non-functional contact, accessibility (contrast, keyboard access, tiny labels), and no content proving the school is real (no admissions, faculty, campus, outcomes or dates).

---

## 2. UI audit

### 2.1 Layout and composition

**No shared container or gutter system.** Each section uses its own padding:

| Section | Padding | Max width |
|---|---|---|
| Hero | `p-16` (64px) | none |
| Why / Skills | `p-5 md:p-10` | `max-w-7xl` |
| Contact | `p-10` | none |
| Footer | `p-3` | none |
| Projects grid | `p-5` | none |

At 1280px these happen to look similar. At 1440px and above, the Hero, Contact and Footer content stays pinned left while Why and Skills center in 1280px, so **left edges stop lining up section to section**. On mobile, the hero keeps 64px gutters on a 375px screen, so the text column is only **266px**.

**Hero composition.**
- `.hero-left` is 384px wide, and the canvas takes the remaining ~900px.
- The visual weight sits in the right two-thirds (particles) while all the meaning sits in a narrow left strip, so the composition feels lopsided rather than deliberately asymmetric.
- The "Explorer" scroll hint is positioned at `left-1/2` without `-translate-x-1/2`, so it's off-center by half its own width.

**Why ISEM (6 items).**
- The grid uses `gap-0.5` but there's no background behind the grid, so the gaps are invisible. The cells don't read as cards or as a ruled table; they just float.
- The glyph sits centered in a 64px box (`.why-icon w-16 h-16 … justify-center`), but the box has no border (`border-border` only sets a color, not a width). The result is that **each icon is indented about 20px from its title**. You can see the misalignment in all six cells.

**Spécialisations.**
- The 8-cell grid (`auto-fill, minmax(260px,1fr)`, 1px gaps over `--color-border`) is the best-composed part of the page.
- But the cell titles are Syne 800 uppercase with 0.08em tracking, so most of them wrap onto two lines ("ANALYSE / MATHÉMATIQUE").
- Cells with a glyph icon (∂, ∇) and cells with an SVG icon have different icon heights, so **titles don't share a baseline across a row**. In the first row, "Modélisation EDO/EDP" and "Optimisation" sit about 3px lower than their neighbours.
- "Applications réelles" is a boxed tag cloud that repeats the same treatment as the cards, so the section has two stacked bordered rectangles and no change of rhythm.

**Contact.**
- On desktop the info column (~350px) and the form (~400px) sit at opposite edges with about 450px of empty space between them. The empty middle isn't intentional whitespace; it's the side effect of `justify-between` without widths.
- On mobile the first-name and last-name fields stay in **two 138px columns**, which is too narrow to type comfortably.

**Footer.**
- It's 63px tall, has three randomly sized flex children (`flex-1` on the links), and uses 8–9px text.
- It reads as an afterthought, not as the closing of an institutional page. It has no address block, no social links, no legal notice and no real navigation.

**Projects page.**
- There's no heading, no intro and no context: just three cards under a nav whose only item is "REVENIR".
- At 1280×800, the bottom 60% of the screen is empty.
- On mobile the grid starts at `top: 0`, under the 72px fixed nav, so **the first card's image is hidden behind the nav** (`lg:mt-15` only applies from 1024px).

### 2.2 Typography

Loaded fonts: DM Serif Display, Syne (4 weights), JetBrains Mono (3), Crimson Pro (3), plus the system default. That's **five type voices**, used like this:

| Element | Font in use |
|---|---|
| H1 hero, H2 "Deux voies d'excellence", section labels, nav, body, buttons, skill descriptions | **System UI** (no `font-family` set) |
| Why titles, skill names, app tags, form inputs, contact values | Syne |
| Why descriptions | Crimson Pro (serif, 16px) |
| Contact H2 "Travaillez avec Nous" | DM Serif Display (used **once** on the whole site) |
| Form labels, method labels, footer, "Applications réelles" | JetBrains Mono at 8–9.6px |

Problems:

1. **No typographic system.** Five voices with no hierarchy logic behind them. The serif display face only appears in Contact, the serif body face only in Why, and the most prominent text (the H1) uses the fallback. Every section feels like a different template.
2. **Syne in all-caps** is a very wide, quirky display face. Used for 16px uppercase card titles with tracking, it wraps constantly and becomes hard to read at a glance.
3. **Body copy that's too big next to a heading that's too small.** `.section-body` is `text-2xl` (24px) with `leading-6` (24px), so the **line-height is 1.0**. Lines touch, and the paragraph under "Deux voies d'excellence" is visually heavier than the 30px heading above it. That inverts the hierarchy.
4. **Text below the legibility floor.** These are all well under the 12px minimum for functional text:
   - Footer subtitle: 8px.
   - Footer copy and links: 9.28px.
   - Form labels: 9.6px.
   - Contact method labels: 9.28px.
   - "Applications réelles": 9.6px.
5. **The H1 line-height is 1.0** at 48px, and the colored second line is a `<p>` inside the `<h1>`, which is invalid HTML (see section 7).
6. **Inconsistent capitalisation.** In the nav, "PROJETS" is typed in caps in the data while the other links are styled caps. Other headings mix Title Case ("Travaillez avec Nous") with sentence case.

### 2.3 Colors and contrast

The palette tokens in `theme.css` are a good start: `bg/bg2/bg3/navy`, `cyan`, `amber`, `white/off/dim`, `border`, with light and custom variants. The problems are in how they're applied.

Contrast measured in the live DOM, dark theme:

| Element | Ratio | WCAG AA (4.5:1 normal text) |
|---|---|---|
| **Primary CTA "Découvrir le programme"** (#f0f2f5 on #f59e3f) | **1.9 : 1** | **Fails badly** |
| Form labels (`--color-dim` #3a4a6e) | 2.28 : 1 | Fails |
| Contact method labels | 2.15 : 1 | Fails |
| Footer copy and links | 2.28 : 1 | Fails |
| Nav links, skill descriptions, body (`--color-off`) | 6.87 : 1 | Passes |
| Submit button (dark text on amber) | 9.43 : 1 | Passes |

- **The two amber buttons use opposite text colors**: white on the hero CTA, dark on the submit button. The dark version is the correct one.
- **`--color-dim` is used as a text color**, but at #3a4a6e on #05070f it's only suitable for borders and decoration.
- **The accent color isn't from the system.** The hero accent "par les modèles." and some hovers use Tailwind's built-in `cyan-400`, `cyan-600` and `cyan-300`, not the `--color-cyan` token. Three slightly different cyans appear on one screen. In light mode, `cyan-400` (#00d3f2-ish) on cream (#f5f4f0) is about 1.7:1, so the accent line becomes almost invisible.
- **The light theme is incomplete.**
  - Particles are still drawn in dark-mode cyan (`#55d9ff` is hard-coded in `Neural.jsx`).
  - The background image is inverted and doubled to 20% opacity, so the equations become loud brown marks competing with the headline.
  - Toggling the theme doesn't update the canvas lines until a full reload, because `theme` is captured once in a `useEffect([])`.
- **Token naming is a trap.** `--color-white` becomes near-black in light mode, so `text-white` means "foreground". It works, but it's a maintenance hazard: the next developer will reach for `text-white` expecting white. Rename it to `--color-fg` (and `off` → `fg-muted`, `dim` → `fg-subtle`).

### 2.4 Components

| Component | Problems |
|---|---|
| **Primary CTA** | Fails contrast (1.9:1). No hover, focus or active state. Padding `px-2 py-3` is horizontally cramped (8px). It has different tracking from the secondary CTA. |
| **Secondary CTA** | Hover goes to `cyan-600`, not the token. It uses `tracking-widest` while the primary doesn't. It wraps to two lines on mobile ("EXPLORER LES / SPÉCIALISATIONS"). |
| **Nav** | The hamburger is a `<div>` with a 16px-wide tap target (below the 44px minimum). It has no `aria-expanded` or `aria-label`. The mobile menu **stays open after you tap a link**: measured, the nav stays 304px tall and covers the section you jumped to. "PROJETS" and the theme toggle are `<a>` without `href`, so they're **not keyboard-focusable**. The theme toggle has no accessible name. There's no active-section indicator. |
| **Tabs (Spécialisations)** | The active tab only changes color (off → white), with no underline or indicator bar, so you can barely tell which one is selected. There's no `role="tablist"`, `aria-selected` or arrow-key support. Every click **throws `TypeError: Cannot read properties of null`** (see 7.1). The hover uses `text-shadow-amber-50`, which is an odd effect and isn't visible on dark. |
| **Why / skill cells** | They have a hover background change but aren't interactive, which suggests a click that doesn't exist. |
| **App tags** | They have hover color change plus `cursor-default` but aren't interactive. Same false affordance. |
| **Contact methods** | The "Localisation" card is a link to `#`, so it does nothing. The email icon is missing `method-icon`, so it's a different size from the phone and location icons. |
| **Form** | There's no `<form>`, no `name`s, no `type="submit"`, no action, no validation, no success or error state. Labels have no `htmlFor`/`id` (5 orphan labels). Inputs use `outline: none`, and focus is shown only by a 1px border color change. Placeholder text ("Ibrahim", "Diallo") is 50% white and looks like pre-filled values. |
| **Project cards** | Each card is a `<div onClick={window.open}>`, so it's not focusable, has no link semantics, and doesn't use `noopener`. On hover, the whole card blurs and gets covered with "Voir sur GitHub", which **hides the content the user was reading** and doesn't work on touch. The image has a 12px top radius inside a card with 12px padding, so the inner and outer radii don't nest. |
| **Footer links** | `href="#"`, so they just jump to the top. |

**Shape language is inconsistent.** Square corners on all home components (CTAs, cells, form, contact cards), but `rounded-xl` cards and pill tags on Projects. The two pages look like different sites.

### 2.5 Visual hierarchy

- **Hero.** The intended order is headline → CTA → particles. The actual order is (1) particles, which are the only moving and bright element and take 70% of the width, (2) the orange wordmark subtitle in the nav, (3) the headline, which sits behind a translucent overlay, (4) the CTA. **The amber nav subtitle competes with the amber CTA**: both are the brightest warm color on screen.
- **Spécialisations.** The 24px body paragraph outweighs the 30px heading, and the tab bar (12px, low-weight) is the least visible thing in the section even though it's the main control.
- **Contact.** The large DM Serif heading is the loudest element, but the most important element (the form) has the faintest labels on the page.
- **Missing focal points.** There's no admissions CTA ("Candidater", "Dates d'admission", "Brochure"). For a school, the main conversion action doesn't exist.

---

## 3. UX audit

| # | What the user experiences | Why it's a problem | Impact | Fix |
|---|---|---|---|---|
| UX1 | They fill in the contact form, press **"Envoyer le message"**, and nothing happens. | No `<form>` and no handler. Silent failure is the worst kind of feedback. | **Lost leads. Users assume the school is unreachable or the site is broken.** | Wrap it in `<form onSubmit>`, add `name`/`required`/`type`, and send to a real backend (Formspree, Getform, an EmailJS endpoint, or the school's own API). Show loading, success and error states. If there's no backend yet, replace the form with a prominent `mailto:` button rather than a fake form. |
| UX2 | They click "Programme" and the section title is hidden under the fixed nav. | No `scroll-margin-top` on the anchors. | The user lands on content without its heading and loses context. | Add `section[id]{scroll-margin-top: 5rem}` (nav height plus breathing room). |
| UX3 | On mobile, they open the menu, tap "Spécialisations", and the menu stays open covering the top 300px. | `showMore` is never reset on link click. | They have to close the menu by hand after every jump. | Call `setShowMore(false)` in each link's `onClick`, and close on `Escape` and on outside click. |
| UX4 | They want to know **how to apply, costs, entry requirements, duration, diploma, dates**. | That content doesn't exist anywhere. | **This is the main task for a school website's audience** (prospective students and parents). They leave for a competitor's site. | Add an "Admissions" section and nav item: requirements, calendar, fees or scholarship, and a "Candidater" CTA. Also add "Débouchés / Carrières". |
| UX5 | The title says "Deux voies d'excellence" but there are three tabs. | "Tronc Commun" is a shared foundation presented as a peer of the two tracks. | Momentary confusion about the program's structure. | Present the foundation as a separate block above the tabs ("Années 1–2 : Tronc commun"), then show the two tracks as tabs. Or use a timeline: Foundation → Specialisation. |
| UX6 | The "PROJETS" nav item leads to a page with three student repos and no explanation. | No heading, no intro, no author names, no year, no link back to the program. | Visitors don't understand who made these or why they matter. It feels like a personal portfolio grafted onto the school site. | Add a page H1 ("Projets étudiants"), a one-line intro, author, year and track per card. Keep the main nav on this page, not just "REVENIR". |
| UX7 | They hover over a project card and the content blurs out. On touch, there's no hover at all. | The hover overlay hides the content. | Reading is interrupted, and on mobile there's no visible way to know the card is a link. | Make the card a real `<a href target="_blank" rel="noopener">`. Show a persistent "GitHub ↗" affordance in the card footer. Use hover for a subtle lift and border only. |
| UX8 | Keyboard users can't reach "PROJETS" or the theme toggle. Tab focus is barely visible. | `<a>` elements without `href`. `outline: none` on inputs. | The site is unusable for keyboard and switch users in key places. | Use `<Link to="/projects">` and `<button aria-label="Basculer le thème">`. Add a global `:focus-visible { outline: 2px solid var(--color-cyan); outline-offset: 3px }`. |
| UX9 | Clicking "Localisation" does nothing, and the footer links go to the top. | Dead `#` links. | Erodes trust ("is this site finished?"). | Link to Google Maps (`https://maps.google.com/?q=…`) or remove the link wrapper. Point the footer links to real anchors. |
| UX10 | Tapping the hamburger is fiddly. | The tap target is 16px wide. | Missed taps. | Make it a `<button>` that's at least 44×44px. |
| UX11 | The page is French, but the browser says English (`<html lang="en">`). | Screen readers pronounce French with English rules, and browsers offer translation. | Poor screen-reader experience. Unwanted "Translate this page?" prompt. | Set `<html lang="fr">`. |
| UX12 | Hover effects on non-clickable cells and tags. | False affordance. | Users click and nothing happens. | Remove the hover on non-interactive cells, or make them interactive (for example, open a detail drawer per course). |

---

## 4. Aesthetic and art-direction audit

**Is there an art direction?** There's a *theme* (dark sci-fi science) but no *direction*. A direction would decide one display face, one rhythm, one surface language and one signature move. Right now each section has its own:

| Section | Its own aesthetic |
|---|---|
| Hero | Atmospheric, cinematic: background image plus particles |
| Why | Editorial: serif body copy, glyph icons |
| Skills | Technical grid: Syne caps, hairline borders |
| Contact | Classic serif headline plus terminal-style mono labels |
| Projects | Generic rounded-card SaaS gallery with pills |

**Specific aesthetic diagnoses:**

1. **Over-decorated hero, under-designed everything else.** Three layers of decoration (gradient, 10% equation image, glowing canvas) all fight for the same empty space, and each one dilutes the others. Below the fold, the design drops to flat dark rectangles with no depth, imagery or variation. The energy is badly distributed: everything is spent in the first viewport.
2. **The equation background is literal and low-resolution in spirit.** It's a stretched 1536×1024 bitmap (non-uniform scaling, because `width:100%;height:100%` has no `object-fit`). At 10% opacity it reads as noise, not as content. In light mode, inverted at 20%, it looks like a dirty photocopy. The cyan particle network already says "models and networks"; the bitmap says it again, less well.
3. **Glow (`shadowBlur: 10`) on every particle** gives a slightly "2016 sci-fi template" feel, and it's the main cue that makes the hero feel generic instead of rigorous. Rigor reads as precision: thin lines, exact geometry, restrained motion.
4. **Rhythm is monotonous.** Every section has the same structure: small orange label → white heading → dark grid. The values are close but not systematic: `bg2` for Why, `bg` for Skills, `bg` for Contact, with almost invisible changes (#05070f vs #080c18), so sections don't read as distinct. There's no full-bleed moment, no image, no large number, no quote.
5. **The icon language is mixed.** Unicode math glyphs (∑, ∂, ∇, λ) are a **great, distinctive idea**. They're the closest thing the site has to a signature. But in Spécialisations they're mixed with generic Font Awesome pictograms (brain, rocket, robot, money bill), with an **acorn for linear algebra**, and with **`FaPooStorm` (a storm cloud made of poo) for "Deep Learning"**. That last one is a real credibility risk if anyone notices.
6. **Shapes don't belong together.** Square, hairline-bordered cells on the home page versus `rounded-xl` cards with pill tags and backdrop blur on Projects. The ANN preview has a white background in the middle of a dark gallery, and the "Ce Site Web" preview is a raw screenshot that includes the **browser's bookmark toolbar**.
7. **Proportions.** The H1 at 48px is timid for a hero at 1440px, while the section body at 24px is oversized. Type sizes don't follow a scale.

**Problem types:**
- **Functional:** the form doesn't work, dead links, a tab click error, the mobile menu doesn't close, the nav overlaps anchors.
- **Visual design:** contrast failures, inconsistent gutters, baseline misalignment, tiny labels, icon indentation.
- **Aesthetic and art direction:** five type voices, a stretched decorative bitmap, decoration concentrated in the hero, a mixed icon language, rounded vs square shape language.
- **Both usability and aesthetics:** the overlay painted above the headline, the hero CTA contrast, a weak tab indicator, oversized body vs undersized headings.

---

## 5. Layout patterns and design language

- **Hero.** Keep the asymmetric split, but make it deliberate:
  - A 12-column grid with the text block spanning about 6 columns (around 560–620px), so the headline can be set in two lines at about 64–72px.
  - The canvas spans the remaining columns and stops behind the text, not above it.
- **Pourquoi ISEM.** A 3×2 grid is fine. Turn it into a proper **ruled table**: 1px gaps over a border-colored background, as in Spécialisations, with the icon left-aligned to the title. Or use an editorial list (big glyph on the left, text on the right) for variety from the next section. A bento layout isn't justified here; the six items have equal weight.
- **Spécialisations.** The ruled grid is right for a curriculum, so keep it.
  - Change the structure: foundation first, then the two tracks.
  - Replace the "Applications réelles" boxed tag cloud with an unboxed inline line (`Applications — Simulation climatique · Optimisation logistique · …`) so the section doesn't end in a second rectangle.
- **Missing sections, which matter more than any layout change:**
  - **Chiffres clés**: a full-bleed band with 3–4 big numbers (years, students, partners, placement rate).
  - **Admissions**: steps as a numbered horizontal sequence.
  - **Débouchés / Carrières**.
  - **Équipe pédagogique**.
  - **Campus or student photos.**

  These give the long dark page the visual variety it lacks, using content instead of decoration.
- **Contact.** Use a two-column split with defined proportions (5/7): info on the left with address, hours and a map thumbnail; the form on the right with a full-width submit. Stack to one column under 640px, including first and last name.
- **Projects.** Cards are appropriate for a gallery, but they should share the home page's square, hairline language. Add a page header and filters by track (IA, Actuariat, Tronc commun) once there are more than six projects.

---

## 6. Interaction design and motion

**Observed:**
- `fadeUp` 1.2s on the hero text.
- Smooth scroll.
- `animate-bounce` on the scroll line.
- A canvas particle network with mouse attraction.
- Card hovers: 700ms translate on Projects, background swap on cells.
- A 500ms fade-up on the skills grid on first render.

**Problems:**
1. **The particle mouse interaction never fires.** I hit-tested the canvas center: the topmost element there is the background `<img>`, not the canvas, so `mousemove` on the canvas never fires and the main interactive gimmick is dead.
2. **The hero fade is 1.2s with no delay curve.** For about a second the user sees a mostly empty screen (captured in my first screenshot). 500–700ms is enough.
3. **The scroll indicator bounces forever** (`animate-bounce`). Continuous motion near the fold is distracting. Use a single subtle loop, or stop after 3 iterations.
4. **The project card lift lasts 700ms**, so it feels sluggish. Hover feedback should take 150–250ms.
5. **Tab switch.** The panel content is swapped instantly, and the `fadeUp` on `.skills-cards` only plays on mount because the element is reused. There's no transition between tracks, so the change is jarring and easy to miss.
6. **No `prefers-reduced-motion` handling anywhere.** I checked all stylesheets. The canvas, the bounce, the fade-up and smooth scroll all run regardless. Add a `@media (prefers-reduced-motion: reduce)` block, and skip the `requestAnimationFrame` loop in that case.
7. **No feedback on the submit button** (see UX1).
8. The **theme toggle has no transition**, and the canvas doesn't follow the theme.

**Not tested:** touch behaviour of the particle canvas (it's hidden under 1024px anyway), and real-device animation smoothness.

---

## 7. Technical frontend quality

### 7.1 Verified bugs (observed at runtime or proven in code)

| Bug | Evidence |
|---|---|
| **Leftover imperative tab code throws on every tab click** | `src/showcase/main.jsx:17-33` attaches DOM listeners that call `document.getElementById('panel-' + tab.dataset.tab).classList`. There's no `data-tab` and no `panel-*` element, so the console logs `TypeError: Cannot read properties of null (reading 'classList')` at `main.jsx:25`. A `console.log` is also left in. The React state in `Skills.jsx` already handles the tabs, so the whole `useEffect` should be deleted. |
| **Background image paints above the hero text and the canvas** | `Hero.jsx:8`: the `absolute inset-0` wrapper with `opacity` is positioned, while `.hero-left` and the canvas aren't, so the image stacks above them. `elementFromPoint` on the canvas returns the `IMG`. Fix: `relative` on the section, `pointer-events-none -z-0` on the image wrapper, and `relative z-10` on the content. |
| **Canvas animation loop is never cancelled** | `Neural.jsx:120`: `requestAnimationFrame` has no `cancelAnimationFrame` in cleanup. Each visit to `/` → `/projects` → `/` starts another loop on a detached canvas, so CPU use grows over the session. |
| **Canvas ignores theme changes** | `Neural.jsx:154`: the effect has `[]` deps, so `theme` is stale. Node color is hard-coded `#55d9ff`. |
| **Canvas doesn't handle devicePixelRatio** | `canvas.width = offsetWidth`, so it's blurry on retina and HiDPI screens. |
| **Invalid HTML: `<p>` inside `<h1>`** | `Hero.jsx:14-17`. Use `<span class="block">`. |
| **Heading outline is broken** | The live DOM has H1 → H3 ×6 → H2 → H2. "Ingénierie de la complexité" is a `<div>`. The Projects page has no headings at all. |
| **5 `<label>`s not associated with their inputs**, and **0 `<form>` elements** | DOM query. |
| **`<a>` without `href`** for the Projects link and the theme toggle | DOM query: they're absent from the tab order. |
| **Nav reaches into the DOM** | `Nav.jsx:11-14` uses `getElementById('drop').classList.replace`. Use conditional `className` from state instead. If two `Nav`s ever mount, the `id` collides. |
| **Theme hook can produce `null`** | `useTheme.jsx:15` returns `null` for any value other than light or dark, including the `custom` theme defined in `theme.css`. It also doesn't follow the OS `prefers-color-scheme` on first visit. |
| **Light theme flashes on load (FOUC)** | `index.html` hard-codes `class="dark"`, and React swaps to light only after mount. Put a 3-line inline script in `<head>` to apply the stored theme before paint. |
| **Missing favicon** | `<link rel="icon" href="./favicon.ico">`, but there's no `favicon.ico` in `public/`, so you get a 404 and a blank tab icon. |
| **Invalid Tailwind class** | `font-['Syne', sans-serif]` in `Nav.jsx:21` contains a space, so it doesn't compile. The wordmark falls back to the system font. Use `font-['Syne']` or define `--font-display` in `@theme`. |
| **Unused import** | `StrictMode` is imported in `main.jsx` but not used, so StrictMode is off. Turning it back on would have surfaced the rAF leak. |

### 7.2 Performance (measured)

- **`public/bg2.png` is 2.1 MB**, displayed at 10% opacity. It's the heaviest asset on the site by far: about 20× the JS bundle after gzip. Convert it to WebP or AVIF at about 1600px (likely 100–200 KB), or replace it with an inline SVG of a few equations (a few KB, sharp at any size, recolorable per theme).
- **Fonts:** 4 families and 11 weights are requested from Google Fonts, and DM Serif and Crimson Pro are each used for a single element. That's render-blocking CSS plus several font files. Cut to 2 families.
- **JS:** 270 KB raw, 87 KB gzip. That's acceptable. `react-icons` tree-shakes correctly here.
- **CSS:** 25.9 KB, 5.7 KB gzip. That's fine. Tailwind is imported three times (`index.css`, `theme.css`, `style.css`), but I checked the build output and it's de-duplicated. Still, keep a single `@import "tailwindcss"` for clarity.
- `public/bg.jpg` (141 KB) and `public/images.png` are not referenced in the current code, so they're dead assets.

### 7.3 Hypotheses (not verifiable without the deploy target)

- If the site is deployed to static hosting such as GitHub Pages without an SPA fallback, **refreshing `/projects` will 404**, because of `BrowserRouter` with no rewrite rule. Use a `404.html` redirect, `HashRouter`, or the host's rewrite config.
- The image paths are relative (`./1.webp`). They work on `/projects`, but they'd break on any nested route such as `/projects/` or `/projects/x`. Use absolute paths (`/1.webp`).
- There's no `<meta name="description">`, no Open Graph tags and no `theme-color`, so link previews on WhatsApp, LinkedIn and Facebook will be bare. For a school, those shares matter.

---

## 8. Detailed issue report

### Critical

**C1 — Contact form is non-functional**
- **Location:** Home → Contact.
- **Category:** UX / technical.
- **Evidence:** There are 0 `<form>` elements, the button has no handler, the inputs have no `name`, and clicking does nothing.
- **Why it matters:** This is the main conversion point. Leads are lost silently.
- **Fix:**
  - Use a real `<form>` with `name`, `required` and `type="email"`.
  - Connect a submission service.
  - Disable the button while sending and show "Envoi…".
  - Show an inline success message ("Merci, nous vous répondrons sous 48 h") and an error message with a `mailto:` fallback.
  - Validate on blur.
- **Expected improvement:** The site can actually generate enquiries, and trust stops being broken at the last step.

**C2 — Primary CTA text fails contrast (1.9:1)**
- **Location:** Hero, "Découvrir le programme".
- **Category:** Accessibility / UI.
- **Evidence:** Computed color #f0f2f5 on #f59e3f.
- **Fix:** Set the text to `text-bg` (as the submit button already does, 9.4:1). Add hover (`bg` 8% darker) and `:focus-visible` states, and padding `px-6 py-3.5`.
- **Expected improvement:** The main CTA becomes readable and clearly the primary action.

**C3 — Decorative image is layered above the headline and canvas**
- **Location:** Hero.
- **Category:** UI / technical / aesthetics.
- **Evidence:** `elementFromPoint` hit-test returns the `IMG`; the light mode headline is visibly washed out (screenshot).
- **Fix:** `section.relative isolate`, image wrapper `absolute inset-0 -z-10 pointer-events-none`, image `object-cover`. Content gets `relative`.
- **Expected improvement:** The headline gets full contrast, the particle interaction works, and the image is no longer distorted.

### High

**H1 — No typographic system, and the H1 uses the system font**
- **Location:** Global.
- **Category:** Aesthetics / UI.
- **Evidence:** The computed `font-family` of H1, H2, body and nav is `-apple-system…`. Five type voices are in use (see 2.2).
- **Fix:** Define `--font-display` and `--font-sans` (plus an optional `--font-mono`) in `@theme` and apply them to `html` and `h1–h3`. Remove Crimson Pro and either DM Serif or Syne (see section 10).
- **Expected improvement:** The site gets an instant identity, a real hierarchy and a consistent voice across sections.

**H2 — Sub-legible text and failing contrast on labels and footer**
- **Location:** Contact labels, method labels, footer, "Applications réelles".
- **Category:** Accessibility.
- **Evidence:** 8–9.6px text; 2.15–2.28:1 contrast.
- **Fix:** Use at least 12px (0.75rem) for these labels with tracking ≤ 0.12em, and color `--color-off`, not `--color-dim`. Reserve `dim` for borders.
- **Expected improvement:** The form and footer become usable, and the site passes WCAG AA for these elements.

**H3 — Tab click throws a runtime error**
- **Location:** Spécialisations.
- **Category:** Technical.
- **Evidence:** Console `TypeError` at `main.jsx:25`.
- **Fix:** Delete the `useEffect` in `src/showcase/main.jsx` and the `.skills-panel` CSS.
- **Expected improvement:** A clean console, and no risk of future breakage when the code is touched.

**H4 — Keyboard and screen-reader access to the nav**
- **Location:** Nav, on both pages.
- **Category:** Accessibility.
- **Evidence:** `<a>` without `href` for Projects and the theme toggle; the hamburger is a `<div>` with a 16px target; there's no `aria-*`.
- **Fix:**
  - `<Link to="/projects">`.
  - `<button aria-label aria-pressed>` for the theme toggle.
  - `<button aria-expanded aria-controls="drop" class="p-3">` for the menu.
  - A global `:focus-visible` ring.
- **Expected improvement:** Full keyboard operability and an accessible name for each control.

**H5 — Mobile menu doesn't close; anchors land under the nav**
- **Location:** Nav on mobile; all anchor targets.
- **Category:** UX / responsive.
- **Evidence:** After tapping a link, the nav is measured at 304px tall and stays open. On desktop, the "Pourquoi ISEM" label is hidden under the nav after jumping to it.
- **Fix:** Close the menu on link click and on `Escape`, and add `scroll-margin-top: 5rem` to sections.
- **Expected improvement:** In-page navigation lands the user on the heading they asked for.

**H6 — Missing core institutional content (admissions, outcomes, people, proof)**
- **Location:** IA (information architecture).
- **Category:** UX.
- **Why it matters:** Without it, the site can't answer "should I apply, and how?".
- **Fix:** See section 5 and the roadmap.
- **Expected improvement:** The site serves its real audience.

**H7 — Embarrassing or arbitrary icons**
- **Location:** Spécialisations.
- **Category:** Aesthetics / credibility.
- **Evidence:** `FaPooStorm` for Deep Learning, `PiAcorn` for Algèbre Linéaire, plus a mix of glyphs and pictograms.
- **Fix:** Use **math glyphs only**, in one font and one size, for all 24 items (for example Deep Learning `∘σ`, NLP `⟨w⟩`, Vision `∗` for convolution, Finance `dS`, Risque `VaR`, Stochastique `dW`). Or use one consistent line-icon set (Lucide or Phosphor, regular weight), but never mix the two.
- **Expected improvement:** A distinctive signature, with no credibility hit.

**H8 — Projects page lacks context and is broken on mobile**
- **Location:** `/projects`.
- **Category:** UX / responsive / aesthetics.
- **Evidence:** No headings; the grid starts under the nav on mobile; cards are `div onClick`; the preview includes a browser toolbar.
- **Fix:** `pt-24` on all breakpoints, an H1 and intro, cards as `<a>`, the shared square card style, re-captured clean previews at 16:10 with `object-cover`, and author, year and track metadata.
- **Expected improvement:** The page feels like part of the school site, not a separate portfolio.

### Medium

| ID | Issue | Location | Fix |
|---|---|---|---|
| M1 | Inconsistent gutters and max widths, so left edges drift above 1280px | All sections | One `Container` component: `mx-auto max-w-7xl px-5 md:px-10 lg:px-16`. Use it everywhere, including the Hero, Contact and Footer. |
| M2 | Hero text column 384px; orphaned "monde"; H1 too small | Hero | Text block `max-w-[36rem]`. H1 `clamp(2.5rem, 5vw, 4.5rem)`, `leading-[1.05]`, `text-balance`. On mobile, gutters `px-5`. |
| M3 | `.section-body` 24px with 1.0 line-height, heavier than the H2 | Skills, global | Body 18px / 1.6, `max-w-[60ch]`. H2 `clamp(2rem, 3.5vw, 3rem)`. |
| M4 | Why icons indented and not aligned with titles | Why | `.why-icon { justify-content:flex-start; width:auto; height:auto; margin-bottom:1rem }`. |
| M5 | Skill titles wrap onto two lines and their baselines don't match | Skills | Fixed icon box `h-8`, title in sentence case at 15–16px semibold, no wide tracking. |
| M6 | Weak active-tab indicator; no tab semantics | Skills | 2px `--color-amber` bottom bar on the active tab, a 1px border under the tab list, `role="tablist"/"tab"/"tabpanel"`, `aria-selected`, arrow keys. |
| M7 | Light theme half-implemented: canvas colors, loud bitmap, `cyan-400` accent | Global | Read the token colors from CSS variables in the canvas, re-read them on theme change, and use `--color-cyan` everywhere. Hide or replace the bitmap in light mode. |
| M8 | 2.1 MB background PNG | Hero | Convert to SVG or WebP under 200 KB, or remove it. |
| M9 | Two-column name row on mobile | Contact | `grid-cols-1 sm:grid-cols-2`. |
| M10 | Dead `#` links (location, footer) | Contact, Footer | Real targets, or plain text. |
| M11 | Shape language split between home (square) and Projects (rounded, pills, blur) | Projects | Pick one, preferably square with hairline borders: it's more "engineering", and it's what most of the site uses already. |
| M12 | rAF leak; no DPR handling; canvas ignores theme | Neural | `cancelAnimationFrame` in cleanup, scale by `devicePixelRatio`, `theme` in deps (or read CSS vars each frame). |
| M13 | `lang="en"`, missing favicon, no meta description or OG tags | `index.html` | Fix all three. |

### Low

| ID | Issue | Fix |
|---|---|---|
| L1 | Scroll hint off-center and bouncing forever | `-translate-x-1/2`, and limit or remove the bounce. |
| L2 | 700ms hover on project cards | 200ms `ease-out`, 4px lift. |
| L3 | False hover affordance on non-clickable cells and tags | Remove the hover background or make them interactive. |
| L4 | Placeholders look like values | Neutral placeholders ("Votre prénom") at `--color-off` 60%. |
| L5 | Email icon size differs from the other contact icons | Add `method-icon`. |
| L6 | "PROJETS" in caps in the data; Title Case in "Travaillez avec Nous" | Normalise to sentence case in the data and let CSS do the uppercase. |
| L7 | Heading copy "Travaillez avec Nous" sounds like a hiring agency | "Contactez-nous" or "Une question sur le programme ?". |
| L8 | Inner and outer radii not nested on project card images | Inner radius = outer radius − padding, or square corners. |
| L9 | Unused `bg.jpg`, `images.png`, `StrictMode`, `useState` imports, duplicated CSS rules (`.contact-method:hover` twice), and Contact.jsx imports 11 unused icons | Delete them. |

---

## 9. Prioritized roadmap

### Priority 1: Essential fixes (≈ 1–2 days)

Benefit: removes everything that's broken, unreadable or embarrassing, and restores basic credibility and accessibility.

1. Make the contact form work, or replace it with a clear `mailto:` CTA (C1). *Effort: S–M.*
2. Primary CTA text color plus button states (C2). *Effort: XS.*
3. Fix the hero stacking order and `object-cover` (C3). *Effort: XS.*
4. Delete the leftover tab `useEffect` (H3). *Effort: XS.*
5. Nav semantics: `<Link>`, buttons, aria, close-on-click, `scroll-margin-top`, 44px targets (H4, H5). *Effort: S.*
6. Raise every label and footer text to at least 12px using `--color-off` (H2). *Effort: XS.*
7. Replace `FaPooStorm` and `PiAcorn` (H7, minimal version). *Effort: XS.*
8. `lang="fr"`, favicon, meta description and OG tags (M13). *Effort: XS.*
9. Projects: top padding on mobile, H1, cards as `<a rel="noopener">` (H8, minimal version). *Effort: S.*
10. `cancelAnimationFrame` cleanup (M12, partial). *Effort: XS.*

### Priority 2: Major design improvements (≈ 1–2 weeks)

Benefit: the site goes from "template" to "institution". This is where the perceived quality jumps.

1. **Type system:** 2 families, a modular scale, fonts as tokens (H1, M2, M3). *Effort: M.*
2. **Layout system:** a shared `Container`, a 12-column grid, a consistent vertical rhythm of `py-24 md:py-32` per section (M1). *Effort: M.*
3. **Content and IA:** Admissions, Débouchés, Chiffres clés, Équipe, campus or student photography (H6). *Effort: L, mostly content, not code.*
4. **Hero redesign:** wider text block, larger H1, the canvas as the only decorative layer, no bitmap (M2, M8). *Effort: M.*
5. **Spécialisations:** foundation shown separately from the two tracks, a strong tab indicator with ARIA, a single icon language (UX5, M5, M6, H7). *Effort: M.*
6. **Unify the shape language** across Home and Projects (M11). *Effort: S.*
7. **Complete the light theme** (M7). *Effort: S–M.*

### Priority 3: Refinement and polish (≈ 2–4 days)

Benefit: the site feels considered and smooth.

1. A motion pass: durations of 150–250ms for hovers and 500ms for reveals, a cross-fade on tab change, scroll-triggered reveals (the `.reveal` class already exists in CSS and is unused), and `prefers-reduced-motion`. *Effort: S.*
2. Canvas refinement: DPR, theme-aware colors from CSS vars, a fixed `--glow`, fewer and thinner lines. *Effort: S.*
3. Footer redesign as a proper closing block: wordmark, address, hours, nav columns, social, legal. *Effort: S.*
4. Microcopy pass (L4, L6, L7). Inline form validation messages in French. *Effort: XS.*
5. No-flash theme script in `<head>`; follow the OS theme on first visit. *Effort: XS.*
6. Clean up dead assets and imports (L9). *Effort: XS.*

---

## 10. Redesign direction

**Philosophy: "precision, not spectacle."** ISEM sells rigor. The design should feel like a well-typeset mathematics paper crossed with an engineering instrument: exact alignment, hairline rules, generous whitespace, one signature visual element, and calm motion. Keep the dark scientific mood; remove the sci-fi glow.

**Personality:** serious, confident, quietly ambitious, and African-rooted ("Excellence africaine" is a strong, distinctive claim; give it room). Sophistication comes from restraint and exactness, not from effects.

**Typography (two families):**
- **Display: a serif with mathematical gravitas.** Keep **DM Serif Display**, already loaded, for H1 and H2, sentence case, `leading-[1.05]`, slight negative tracking (−0.01em). Its italic is a ready-made accent ("par les *modèles*"), which you already hint at with `<em>excellence</em>`.
- **Text and UI: one neutral grotesk** such as **Inter**, **IBM Plex Sans** or **Manrope**, at 16–18px for body (1.6 line-height) and 12–13px semibold with 0.12em tracking for uppercase labels.
- **Mono (optional, tiny doses):** keep JetBrains Mono **only** for formula-like accents such as numeric data in "Chiffres clés", never for form labels.
- **Drop** Syne (too wide and quirky for long uppercase titles) and Crimson Pro (a third serif voice).
- **Scale:** 12 / 14 / 16 / 18 / 24 / 32 / 48 / 72px (roughly a 1.333 ratio), with `clamp()` for H1 and H2.

**Color strategy:**
- Keep the tokens, rename them semantically: `bg`, `surface`, `surface-2`, `fg`, `fg-muted`, `fg-subtle`, `border`, `accent` (cyan), `action` (amber).
- **Amber means action only:** CTAs and the active tab indicator. Remove it from the nav subtitle and section labels (use `fg-muted` or cyan there) so the CTA becomes the single warm focal point.
- **Cyan means science and information:** links, focus rings, the canvas, data highlights. Use only the token, never `cyan-400`.
- Text on amber is always `bg` (dark).
- Make the section background steps visible: alternate `bg` (#05070f) with `surface` (#0b1020), or separate sections with a full-width hairline.

**Spacing and sizing:**
- A 4px base unit.
- Section padding of 96–128px vertical on desktop and 64px on mobile.
- One container width (1280px), with gutters of 20 / 40 / 64px at sm / md / lg.
- Card padding of 32px.
- Minimum tap target 44px.
- Text measure capped at 60–70ch.

**Components and surfaces:**
- **Square corners plus 1px hairline borders** everywhere (what most of the home page already does). It reads as engineered and is the most coherent option for this brand.
- Two surface levels only.
- No backdrop blur and no glow.
- Buttons: a primary (amber fill, dark text) and a secondary (1px `fg` border at 20%, hover border `accent`). Same height (48px), same padding, same tracking.
- One visible `:focus-visible` style: a 2px cyan outline with offset.

**Layout patterns:**
- An asymmetric split hero (6/6 or 5/7).
- Ruled grids for curriculum content (Why, Skills).
- A full-bleed numbers band.
- An editorial two-column block for "Excellence africaine" or a quote from the director.
- A numbered step sequence for Admissions.
- A 5/7 split for Contact.
- A rich footer.

That gives a consistent system with real variety between sections.

**Imagery, depth, motion:**
- **Imagery:** real photos of students, campus and Yamoussoukro, treated consistently (desaturated, navy duotone or cool grade) so they sit in the dark palette. This is the biggest missing ingredient.
- **Depth:** from layering and contrast, not shadows. Hairlines plus two surface tones are enough.
- **Gradients:** keep the subtle 160° hero gradient. Nothing else.
- **Motion:** keep the particle network as the **one signature element**, refined:
  - No glow, 1px lines.
  - Nodes in `--color-accent`.
  - About 40 nodes.
  - Responds to the mouse once the stacking is fixed.
  - Paused when off-screen (IntersectionObserver).
  - Disabled under reduced motion.

  Everything else gets short, functional transitions.

**Preserve / redesign / simplify / remove:**

| Preserve | Redesign | Simplify | Remove |
|---|---|---|---|
| Dark navy palette and tokens | Hero (width, type, layering) | Particle canvas (no glow, fewer nodes) | Equation bitmap `bg2.png` |
| Copywriting and curriculum detail | Typography system | Section label style | Syne, Crimson Pro |
| Math-glyph icon idea, extended to all items | Spécialisations structure (foundation → tracks) | Footer markup | Font Awesome pictograms in the curriculum, especially `FaPooStorm` |
| Ruled 1px-gap grid in Spécialisations | Contact (working form, split layout) | Hover effects on static content | Leftover imperative tab code |
| Light and dark theme concept | Projects page (header, metadata, shared style) | | Dead `#` links, unused assets |

---

## 11. Final evaluation

**Overall:** a strong idea and excellent subject-matter copy, built on a reasonable token foundation, but let down by having no typography system, broken layering in the hero, a contact path that doesn't work, accessibility failures, and missing institutional content. It's about one focused week of fixes away from credible, and two to three weeks away from distinctive.

**Three strongest qualities**
1. **Specific, credible copywriting** that makes the curriculum feel real and demanding.
2. **An appropriate, coherent dark palette** with well-structured theme tokens.
3. **A distinctive brand seed:** math glyphs as icons and a living network as the hero motif.

**Five most important problems**
1. The contact form doesn't work, and there are dead links (C1, M10).
2. The hero is broken: the image sits above the text and canvas, the CTA fails contrast, and the column is too narrow (C2, C3, M2).
3. There's no typographic system, and the H1 falls back to the system font (H1).
4. Accessibility: 1.9–2.3:1 contrast, 8–9px labels, controls that can't be reached by keyboard, `lang="en"` (H2, H4, UX11).
5. The core information for prospective students (admissions, outcomes, people, proof) is missing (H6).

**Three changes with the greatest impact**
1. **Fix the hero:** stacking, CTA contrast, a 2-line H1 in DM Serif at about 64px, a wider text column, no bitmap.
2. **Set a 2-family type scale and a shared container,** then apply them to every section.
3. **Make contact work and add an Admissions section** with a "Candidater" CTA.

**Scorecard**

| Area | Score | Justification |
|---|---|---|
| Visual design | **5 / 10** | Good palette and a decent Spécialisations grid, undermined by misalignments, inconsistent gutters and the hero composition. |
| Aesthetics and art direction | **5 / 10** | A promising theme and a glyph motif, but five type voices, glow-heavy decoration in the hero and flatness everywhere else. |
| UX | **4 / 10** | Clear section order, but a non-functional form, a mobile menu that doesn't close, anchors hidden under the nav, and missing admissions info. |
| Consistency | **4 / 10** | Two shape languages, three cyans, two opposite CTA text colors, and section paddings that each do their own thing. |
| Accessibility | **2.5 / 10** | The primary CTA is at 1.9:1, labels are 8–9px at about 2.2:1, the nav can't be reached by keyboard, labels aren't associated, `lang` is wrong, and there's no reduced-motion handling. |
| Overall polish | **3.5 / 10** | A console error, a dead form, dead links, a missing favicon, and a project preview with a browser toolbar in it. The details signal "unfinished". |
