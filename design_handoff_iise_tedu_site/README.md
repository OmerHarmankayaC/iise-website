# Handoff: IISE TEDU Student Chapter Website

## Overview
A bilingual (English / Turkish) marketing website for the newly-forming IISE (Institute of Industrial and Systems Engineers) Student Chapter at TED University, Ankara. It introduces the chapter, showcases upcoming events, the founding board, and drives prospective founding members to apply.

## About the Design Files
The files bundled here are **design references created in HTML** — a prototype showing the intended look, copy, interactions, and behavior. They are **not production code to copy directly**. The task is to **recreate these designs in the target codebase's environment** (React + Next.js, Astro, Vue, etc.) using the team's established patterns, i18n library, and form/email stack. If no codebase yet exists, pick the framework that best fits a small marketing/events site — Next.js (App Router) or Astro are both strong choices.

## Fidelity
**High-fidelity.** All colors, typography, spacing, radii, and interactive states are final. Recreate pixel-accurately using the codebase's existing libraries and patterns. Placeholder content (team photos, exact dates, founder names) is explicitly marked — swap it when real data arrives.

## Aesthetic direction
**"Campus bulletin board / zine."** Warm cream paper (`#faf5e6`), dark ink, IISE blue dominant with TED red as a sharp accent, handwritten margin notes (Caveat), rubber-stamp rotated elements, slight rotations on cards, dashed tear-off stubs, ledger-style event rows, polaroid-pinned team cards. Deliberately not a slick portfolio/SaaS look — it should feel collective and student-run.

## Design Tokens

### Colors
```
--iise-blue:       #1a3a8f   (primary, IISE-inspired)
--iise-blue-deep:  #0d2563
--iise-blue-ink:   #08153d
--ted-red:         #c8102e   (accent, sparing)
--ted-red-warm:    #d93f3a
--cream:           #f3ecd9   (card surfaces)
--cream-2:         #e8dfc6
--cream-3:         #ddd1b0
--paper:           #faf5e6   (body bg)
--ink:             #1a1a1a   (text, borders)
--ink-soft:        #3a3a3a   (secondary text)
--rule:            #1a1a1a   (borders, 1-2px)
```

5 additional colorways are available through the Tweaks panel (see `app.jsx` → `COLORS` array).

### Typography
```
--serif:  "Instrument Serif"  — display, section titles, pillar titles, pull quotes
--sans:   "Inter Tight"       — body, buttons, form fields
--mono:   "JetBrains Mono"    — kickers, meta, labels, technical accents (11–13px uppercase w/ letter-spacing)
--script: "Caveat"            — handwritten margin notes, pull-quote signatures, tear-off annotations
```

Loaded from Google Fonts:
```
Instrument Serif (400 + italic)
Inter Tight (400/500/600/700)
JetBrains Mono (400/500/600)
Caveat (500/600)
```

Display type sizes use `clamp()` for fluidity. Hero title peaks at ~172px; section titles ~86px.

### Spacing / layout
- Max container width: `1320px`, horizontal padding `32px` (20px on tablet, 16px mobile).
- Section vertical padding: `100px` desktop, `70px` mobile.
- Card gap: `28px` (pillars), `44px × 28px` (team polaroids).
- Ledger row padding: `24px 8px`; hover: `padding-left: 20px`.

### Borders & shadows
- Standard border: `1.5px solid var(--ink)` (crisp, inky, not rounded).
- Radius: buttons `999px` (pill); cards `0–2px`; no large rounded cards.
- Hover shadow on buttons/faq/pillar: `3px 3px 0 var(--ink)` (hard offset "printed" shadow, no blur).

### Rotations
- Pillar cards: `-0.8deg / 0.8deg / -0.4deg` alternating.
- Polaroids: `-2deg / 1.4deg / -0.8deg / 2deg` alternating by nth-child(4n).
- Stamp: `-14deg`.
- About pull-quote: `-0.8deg`.
- Join stub: `-1deg`.
- On hover, rotation resets to `0` and the card lifts.

## Screens / Views

### 1. Global chrome
- **Top marquee bar** — black bg, red bottom border, uppercase mono 11px, scrolls left infinitely (`animation: marquee 60s linear infinite`). Honors `data-motion="off"` by pausing.
- **Nav** — sticky, cream bg, 1px ink border-bottom. Three-column grid: brand (left) / links (center) / language pill (right). Links use serif 18px with red underline that scales in on hover/current. Brand has a blue circular seal with dashed inner ring, lowercase italic "i" inside.
- **Language pill** — top-right, round, 1.5px ink border. EN | TR. Active: ink fill, cream text. Persists to `localStorage` key `iise_lang`. **Default:** auto-detect from `navigator.language` — Turkish if it starts with `tr`, else English.

### 2. Hero (`Hero` component)
- Tri-column ruled header: issue number (`№ 01 · Charter Edition`) / center est. label / right stamp note. Top + bottom 1px ink rules.
- Giant faded cream number `01/2026` in the top-right corner (pointer-events:none).
- Three-line headline, Instrument Serif:
  - Line 1 (regular, ink)
  - Line 2 (italic, IISE blue)
  - Line 3 (red bar: ted-red background, cream text, tiny `-1.5deg` rotation, italic)
- Rotated red "FOUNDING CHAPTER · 2025" rubber stamp: 190×190 circle, 3.5px red border, double-ring with inner dashed, rotated `-14deg`.
- Two-column meta row: large serif lede (with `highlight` span that has a low-opacity red background-clip underline) + mono side rail with blue left border.
- CTA row: red primary "Become a founding member", ghost "See what's on", and a small Caveat-script "p.s. — first 25 members get named on the charter ✦" in red.

### 3. About (`About` component)
- `§ Kicker` (mono, red with blue serif `§` before).
- Section title with italic blue `em` fragment.
- Two-column: copy paragraphs (ink-soft, 17px/1.6) + rotated cream "pull-quote" card in Caveat script with two small red tape strips at corners and a red script signature.
- **Pillars grid** — 3 columns (2 on tablet, 1 on mobile). Each card:
  - Cream bg (alternating cream-2 on every 3rd), 1.5px ink border.
  - Red pushpin (`::before`) at top center.
  - Mono tag `01 · Learn`, serif 34px title with italic red em, 14px ink-soft description.
  - Min-height 240px; hover → rotation 0, 4px translate up, 4×4 ink hard shadow.

### 4. Events (`Events` component)
- Cream-washed section (top+bottom 1.5px ink borders).
- Ledger: 5-column grid (index / date-box / info / tag / arrow).
  - Date box: 1.5px ink border, paper fill, serif day + red mono month.
  - Info: serif 26px title + mono uppercase where with `✦` prefix.
  - Tag: 1.5px blue border, blue mono text, 2px radius.
  - Arrow: appears from left on hover; row also adds `padding-left: 20px` and paper bg.
- Dashed rules between rows.
- Note card at bottom: paper bg, 1px ink dashed border, mono 12px.

### 5. Team (`Team` component)
- Polaroid board — 4 cols desktop, 2 cols tablet, 1 col mobile. Gap `44px 28px` (vertical loose so they feel pinned).
- Each polaroid: paper bg, 1px rgba ink border, `14px 14px 18px` padding, `2px 3px 0` soft shadow, alternating tilt. Hover: 0 rotation, -6px Y, z-index 2.
- `::before` pseudo = a cream-3 "scotch tape" strip at top center, tilted -3°.
- Photo: aspect `1 / 1.15`, cream-2 bg, 45° striped pattern overlay (blue for filled, red for `.open` recruiting state), giant serif italic initial letter, tiny mono "photo / 2025" or "recruiting" caption pill bottom-left.
- Role (red mono 10px), Name (Caveat 28px), Bio (ink-soft 12px/1.5).
- A rotated red "✦ Board applications open Fall 2025..." note above the grid.

### 6. Join CTA (`JoinCTA` component)
- Full-bleed IISE blue section, 3px ink top+bottom borders. Cream text.
- Giant faded "JOIN·KATIL·JOIN·KATIL·" wordmark running along the bottom at 6% opacity.
- Two columns: title + body + red "Apply to join" + ghost-cream "Ask a question" / tear-off membership stub.
- **Tear-off stub**: paper fill, 2px dashed cream border, rotated -1°, red mono 10px heading, numbered dashed perks list, Caveat "— detach and keep! ✂" at bottom right, scissors icon in a blue chip peeking over the top-left corner.

### 7. FAQ (`FAQ` component)
- Stack of cream 1.5px-ink-bordered cards with `3px 3px 0` hover shadow.
- Each row: 3-col grid — serif italic red number / serif question text (clamp 19–24px) / blue `+` that rotates 45° to red when open.
- Expansion via `max-height` transition; answer body ink-soft 15px/1.6, left-indented to `94px` to align under the question.
- Only one open at a time (single state `const [open, setOpen] = useState(0)`).

### 8. Contact (`Contact` component)
- Two columns: info card + form.
- Info card: cream bg, ink border; rows with dashed rules, mono 10px key + serif 17px value.
- Form: 2-col grid on desktop, 1-col mobile. Fields are paper-filled with 1.5px ink borders. Focus state = blue border + `3px 3px 0` blue hard shadow.
- Submit: blue solid button. Success state = mono blue "✓ Got it — we'll reply within a few days." fading in, auto-clears after 4s.
- Form is decorative in the prototype; developer should wire to Formspree / Resend / Mailgun / the backend of choice.

### 9. Footer
- Ink bg, cream text.
- Giant `IISE TEDU` wordmark (serif, `TEDU` italic red), clamp 72–200px, line-height 0.85, paired with 1px rgba cream rule underneath.
- 4-column link grid (About blurb / Explore / Connect / More). Red-accented mono h5 labels.
- Bottom row: copy, "Made with care in Ankara" — mono 10px uppercase.

## Interactions & Behavior

### Navigation
- Single-page React app with `page` state (home / events / team / contact). Home is a long-scroll page; the other three are individual section views.
- Nav links either switch page or (on home) switch page + scroll to anchor.
- `localStorage` keys: `iise_lang`, `iise_page`. Page is restored on reload.
- Recommended production equivalent: real routed pages (`/`, `/events`, `/team`, `/contact`) with Next.js `app/` router or Astro pages.

### i18n
- Two locales: `en`, `tr`. Default = `tr` if browser locale starts with `tr`, else `en`.
- All copy lives in `i18n.js`. Titles and pillar headings use an `[em]...[/em]` inline marker, lede uses `[hl]...[/hl]`. A `rich(str)` helper in `app.jsx` parses these into `<em>` and `<span class="highlight">`.
- Production: lift into your i18n library (`next-intl`, `@formatjs/intl`, `i18next`). Keep the inline markers or replace with ICU-style message with rich text support.

### Animations
- CSS marquee for top bar and any additional tickers.
- Hover transforms on pillar cards, polaroids, FAQ cards, buttons — `transform` + `box-shadow`, 0.15–0.25s.
- `body[data-motion="off"]` disables the marquee. Respect `prefers-reduced-motion` in production by mapping to the same attribute.

### Forms
- Client-side required fields only in prototype. Real implementation should validate email shape, rate-limit, and have proper success/error toasts.

### Tweaks panel
- Prototype-only. The Tweaks panel (bottom-right floating, activated via host toolbar) exposes `bgTexture` (grid/dots/plain), `motion` (on/off), and `colorway` (5 presets). **Do not port the Tweaks panel to production** — it was for design exploration. Freeze the selected values before shipping.

## State Management
Minimal. The production version only needs:
- Locale (Cookie / i18n library state).
- Form submission state (pending / success / error).
- FAQ accordion open-index (local to component).

No server state beyond form POST target and (optionally) a newsletter mailing-list API.

## Responsive behavior
Breakpoints used:
- `max-width: 1024px` — collapse nav links (you'll want a proper mobile menu in production), single-col hero meta, 2-col pillars/team, hide event tag/arrow columns, hide hero-no corner number.
- `max-width: 640px` — single-col everything, 70px section padding, full-width tweaks panel.

Mobile menu is NOT built in the prototype — design and build one for production (suggest a slide-in drawer matching the cream/ink aesthetic).

## Accessibility to audit
- Button/link semantics are mostly right; double-check in production.
- Color contrast is strong (ink on cream; cream on blue; cream on ink). Red on cream passes AA for large text; audit for small text.
- Add proper `aria-expanded` to FAQ buttons.
- Add `aria-label` to the language pill group.
- Provide `alt` text when real team photos land.

## Assets to source
- Real team member photos (8 roles listed — expect some to stay "Open position" placeholders at launch).
- Real event dates/venues once the charter lands.
- Final chapter email, Instagram handle, LinkedIn URL.
- Optional: a hand-drawn chapter seal / logomark to replace the lowercase-i seal in the nav.
- Favicon + social share image.

## Files in this bundle
- `IISE TEDU.html` — entry HTML. Loads Google Fonts, React + Babel, then `i18n.js` + `app.jsx`.
- `styles.css` — all styling.
- `app.jsx` — React app (Nav, Hero, About, Events, Team, JoinCTA, FAQ, Contact, Footer, Tweaks, i18n/page hooks).
- `i18n.js` — EN + TR translation dictionary. All copy lives here.
- `README.md` — this file.

## Implementation checklist
1. Bootstrap your framework of choice (recommend Next.js App Router + `next-intl`).
2. Port color tokens and typography to your tokens file / Tailwind config.
3. Import the four Google Fonts (Instrument Serif, Inter Tight, JetBrains Mono, Caveat).
4. Rebuild each section as a proper component, reading copy from the i18n dictionary.
5. Replace the JS page-switcher with real routes.
6. Replace Tweaks with a frozen token set.
7. Wire the contact form to your email/backend.
8. Add mobile nav drawer, SEO metadata (OpenGraph per-locale), favicons, sitemap.
9. Swap placeholder team photos and event data when real assets land.
10. Run Lighthouse, axe, and verify contrast + keyboard nav.
