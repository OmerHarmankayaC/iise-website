# Design System Document: The Academic Vanguard

## 1. Overview & Creative North Star
This design system is engineered to bridge the gap between rigorous institutional credibility and high-end technical innovation. Designed for the IISE Student Chapter at TED University, it moves beyond the "standard university portal" to create a premium, conference-grade digital experience.

**Creative North Star: "The Architectural Intellectual"**
The system is built on the concept of structured transparency. We treat the digital interface as an architectural blueprint: precise, layered, and authoritative. By utilizing intentional asymmetry, oversized editorial typography, and high-contrast tonal shifts, we break the traditional "grid-boxed" mold. The result is a layout that feels curated rather than templated, emphasizing IISE’s role as a leader in systems engineering and industrial innovation.

---

## 2. Colors
Our palette is anchored by the deep, intellectual weight of Navy and the vibrant energy of Academic Yellow.

### The "No-Line" Rule
To achieve a high-end feel, **do not use 1px solid borders for sectioning.** Structural boundaries must be defined solely through background color shifts. For example, a section using `surface_container_low` (#f3f2ff) should sit directly against a `background` (#faf8ff) section. The shift in tone provides a sophisticated edge that lines cannot replicate.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
- **Base Level:** `background` (#faf8ff).
- **Secondary Level:** `surface_container_low` (#f3f2ff) for large content blocks.
- **Top Level/Interactive:** `surface_container_lowest` (#ffffff) for cards and modals.
This nesting creates natural depth and directs the eye toward the most interactive content.

### The "Glass & Gradient" Rule
For floating elements (like navigation bars or hovering info-cards), utilize **Glassmorphism**. Apply a semi-transparent `surface` color with a `backdrop-filter: blur(20px)`. This allows the vibrant TED University yellow (`secondary_container`) or IISE Navy (`primary`) to bleed through the UI, softening the experience.

### Signature Textures
Avoid flat primary blocks for major CTAs. Use subtle linear gradients:
- **Primary Gradient:** `primary` (#001881) to `primary_container` (#0027ba) at a 135° angle.
- **Accent Glow:** Use a soft glow of `tertiary_fixed_dim` (#feb2c0) behind key industrial icons to add a "tech-future" warmth.

---

## 3. Typography
We use a high-contrast pairing of **Space Grotesk** (Display/Headlines) and **Inter** (Body/UI) to signal both modern tech-conference vibes and academic clarity.

- **Display (Space Grotesk):** Set with tight letter-spacing (-0.02em). These are the "Editorial" moments. Use `display-lg` (3.5rem) for hero statements to convey institutional power.
- **Headline (Space Grotesk):** Use `headline-lg` (2rem) for section titles. These should often be intentionally offset to the left or right to create a "custom layout" feel.
- **Body (Inter):** Set `body-lg` (1rem) for readability. Inter’s neutral, geometric nature balances the expressive personality of Space Grotesk.
- **Labels (Inter):** Use `label-md` in all-caps with increased letter-spacing (+0.1em) for category tags or small metadata, always paired with `primary` or `secondary` color tokens.

---

## 4. Elevation & Depth
In this system, depth is achieved through **Tonal Layering** rather than heavy drop shadows.

- **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` section. This provides a "soft lift" that feels architectural and clean.
- **Ambient Shadows:** For high-importance floating elements (like a Join Us modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(13, 25, 63, 0.06);`. The shadow uses a tint of `on_surface` (#0d193f) to ensure it feels like a natural part of the environment.
- **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use `outline_variant` at 15% opacity. Never use a 100% opaque border.
- **Glassmorphism:** Navigation menus should use a `surface` background at 80% opacity with a blur, creating an integrated, high-end technical feel as the user scrolls through color-blocked sections.

---

## 5. Components

### Hero Sections
Avoid center-aligned defaults. Use an asymmetrical layout: `display-lg` headline on the left, with a floating `surface_container_highest` card containing event details overlapping the image or background gradient on the right.

### Buttons
- **Primary:** Background `primary_container` (#0027ba), Text `on_primary` (#ffffff). Apply `border-radius: DEFAULT` (0.25rem) for a crisp, "engineered" look.
- **Secondary:** Background `secondary_container` (#fdd000), Text `on_secondary_container` (#6e5900). This is used for the "Apply Now" or "Join" actions to leverage the TED University yellow.

### Feature Grids
Do not use dividers. Separate features using the **Spacing Scale** and subtle background shifts. Each feature "tile" should be a `surface_container_lowest` (#ffffff) card with a "Ghost Border" that only appears on hover.

### Application Forms
- **Input Fields:** Use `surface_container_lowest` with a bottom-only `outline_variant` (20% opacity). On focus, the bottom border transitions to `primary` (#001881) at 2px.
- **Labels:** Always use `label-md` in `on_surface_variant` (#444654) positioned above the field.

### Chips (Selection/Status)
Small, pill-shaped (`radius: full`) elements using `secondary_fixed` (#ffe07c) with `on_secondary_fixed` (#231b00) text for high-visibility status indicators (e.g., "Open Now", "Workshop").

---

## 6. Do's and Don'ts

### Do
- **Use White Space as a Tool:** Treat vertical rhythm as a way to separate "thoughts" or "chapters" of the page.
- **Overlap Elements:** Let a headline partially overlap a container or image to break the "boxed" feel of standard web design.
- **Respect the Navy:** Use `primary` (#001881) for the most important text to maintain academic authority.

### Don't
- **No Heavy Shadows:** Never use high-contrast, dark black shadows. It cheapens the "academic" feel.
- **No Rigid Boxes:** Avoid wrapping every single section in a visible box. Let the content breathe on the `background` and `surface` colors.
- **No Default Roundedness:** Do not use large, bubbly corners. Stick to `DEFAULT` (4px) or `md` (6px) for a professional, precise engineering aesthetic.
- **No Divider Lines:** Avoid 1px lines across the screen. If you need to separate content, use a 80px-120px vertical gap instead.