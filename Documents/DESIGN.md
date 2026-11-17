# Design System: Cakra Syafiq Portfolio
**Source:** Custom Editorial Portfolio Reference  
**Target Platform:** Responsive Web (Next.js / React deployed on Vercel)

---

## 1. Visual Theme & Atmosphere

This portfolio embodies a **bold, modern editorial-magazine aesthetic** fused with **atmospheric dark-mode depth**. Inspired by contemporary creative director and AI technologist showcases, the interface pairs monumental, poster-scale condensed typography with rich, tactile lighting and intentional foreground-background layering.

* **Mood & Character:** Confident, creative, technically sharp, and human-centric. Rather than feeling like a sterile developer template, it feels like an interactive digital editorial cover—balancing engineering precision with creative media flair.
* **Texture & Surface Quality:** Smooth, velvety dark surfaces contrasted against a luminous, fine-grain noisy mesh gradient in the hero container. A subtle film-grain stipple overlay softens digital harshness and gives the teal-to-navy gradients a printed-poster warmth.
* **Depth & Dimensionality:** Achieved primarily through **z-axis typographic overlapping** (subject cutouts layered in front of giant display headlines), translucent frosted-glass navigation pills, and soft tonal transitions rather than heavy drop shadows.

---

## 2. Color Palette & Roles

The color system is anchored by four signature brand colors that balance deep oceanic stability, energetic emerald luminance, warm editorial cream, and sharp amber-gold focal points.

### Core Brand Palette
* **Deep Abyssal Navy-Teal (`#001822`)**
  * **Role:** Primary brand foundation, hero gradient shadow anchor, duotone portrait shadow tone, and dark container surface. Establishes high contrast and an immersive, tech-forward midnight atmosphere.
* **Vibrant Emerald Teal (`#02B08D`)**
  * **Role:** Primary atmospheric glow and energetic accent. Used as the dominant left-side radial bloom in the hero mesh gradient, hover/focus highlights, and subtle ambient backlights behind featured media.
* **Electric Amber Gold (`#FFBC03`)**
  * **Role:** Primary focal accent and hierarchy beacon. Reserved strictly for high-attention markers: the brand monogram badge, active navigation link (`Home`), editorial sub-headings (`A Brief Introduction`, `Meet Syafiq`, `Career Focus`, `Education`), signature script accent, and key display callouts (`ENTHUSIAST`).
* **Warm Parchment Cream (`#FBF4DA`)**
  * **Role:** Primary display ink and high-comfort readable text. Replaces harsh pure white (`#FFFFFF`) for monumental headlines (`PORTFOLIO`, `ABOUT ME`), brand wordmarks (`CAKRA SYAFIQ`), and body copy—giving the dark palette an editorial, high-craft warmth.

### Supporting Surface & Opacity Tokens
* **Obsidian Canvas (`#0B1014` — a darkened derivative of `#001822`)**
  * **Role:** Full-page outer background and lower section backdrop (`About Me`, `Tools`, `Projects`, `Contacts`). Provides clear visual separation beneath the rounded hero card.
* **Frosted Glass Slate (`rgba(255, 255, 255, 0.08)` to `rgba(0, 24, 34, 0.45)` with backdrop blur)**
  * **Role:** Translucent fill for floating navigation pills and compact skill/role badges, allowing underlying gradient hues to bleed gently through.
* **Soft Cream Mist (`rgba(251, 244, 218, 0.72)`)**
  * **Role:** Secondary text, inactive navigation items, and italicized date metadata (`2023 - Now`).
* **Hairline Glass Border (`rgba(251, 244, 218, 0.14)`)**
  * **Role:** Ultra-subtle edge definition for translucent pill tags, glassmorphic navigation bars, and dark-mode cards.

---

## 3. Typography Rules

The typographic pairing relies on extreme contrast in proportion: **towering, ultra-condensed display letters** set against **clean, geometric humanist body text**.

### Display Font: **Humane**
* **Character:** Ultra-condensed, tall, tightly tracked architectural sans-serif that commands immediate vertical presence like a magazine masthead.
* **Usage:**
  * **Hero Masthead (`PORTFOLIO`):** Uppercase, extra-bold/heavy weight, ultra-tight letter spacing (`-0.02em` to `0em`), fluid monumental sizing (`clamp(5.5rem, 18vw, 15rem)`), line-height `0.85`, colored in Warm Parchment Cream (`#FBF4DA`).
  * **Section Headers (`ABOUT ME`, `PROJECTS`, `TOOLS`, `CONTACTS`):** Uppercase, condensed display sizing (`clamp(3.5rem, 8vw, 6.5rem)`), line-height `0.9`, colored in Warm Parchment Cream (`#FBF4DA`).
  * **Hero Callout (`ENTHUSIAST`) & Brand Name (`CAKRA SYAFIQ`):** Uppercase condensed accents colored in Electric Amber Gold (`#FFBC03`) or Warm Parchment Cream (`#FBF4DA`).
* **Editorial Layering Rule:** Large `Humane` headlines are designed to sit *behind* foreground portrait cutouts on the z-axis (`z-index: 1` for text, `z-index: 2` for subject cutout), keeping key characters legible while creating poster-like depth.

### Sub-titles & Body Font: **Plus Jakarta Sans**
* **Character:** Clean, modern geometric sans-serif with generous x-height and friendly, legible proportions—ideal for scanning UI labels and multi-line bios.
* **Hierarchy & Weights:**
  * **Section Sub-headings (`Meet Syafiq`, `Career Focus`, `Education`):** SemiBold to Bold (`600–700`), `1.125rem–1.25rem` (`18px–20px`), colored in Electric Amber Gold (`#FFBC03`).
  * **Eyebrow / Intro Phrases (`A Brief Introduction`):** Medium (`500`), `1.25rem–1.5rem` (`20px–24px`), colored in Electric Amber Gold (`#FFBC03`).
  * **Hero Specialty Stack (`Artificial Intelligence`, `Software Development`, `Creative Media`):** Regular to Medium (`400–500`), right-aligned beside the `ENTHUSIAST` display wordmark, tight `1.25` line-height, colored in Warm Parchment Cream (`#FBF4DA`).
  * **Body Copy & Descriptions:** Regular (`400`), `0.9375rem–1rem` (`15px–16px`), comfortable `1.6` line-height, colored in Warm Parchment Cream (`#FBF4DA`) or Soft Cream Mist (`rgba(251, 244, 218, 0.85)`).
  * **Navigation Links & Pill Tags:** Medium (`500`), `0.8125rem–0.875rem` (`13px–14px`), clean tracking (`0.01em`).
  * **Timeline / Date Metadata (`2023 - Now`):** Regular Italic (`400 italic`), `0.8125rem–0.875rem` (`13px–14px`), colored in Soft Cream Mist (`rgba(251, 244, 218, 0.7)`).

### Optional Signature Accent
* **Hero Ownership Script (`Cakra Syafiq's`):** A fluid handwritten/brush script accent (e.g., custom SVG signature or expressive script typeface) in Electric Amber Gold (`#FFBC03`), angled slightly and overlapping the upper-left corner of the `PORTFOLIO` masthead to inject personal warmth.

---

## 4. Component Stylings

### Brand Monogram & Header Bar
* **Logo Mark:** A circular Electric Amber Gold (`#FFBC03`) emblem (`36px–40px` diameter) housing tall condensed `CS` initials in `#FBF4DA` or `#001822`, paired immediately to the right with `CAKRA SYAFIQ` set in uppercase `Humane`.
* **Floating Navigation Pill:** Positioned top-right inside a **pill-shaped (`9999px` radius)** translucent frosted container (`backdrop-filter: blur(12px)`, `rgba(255, 255, 255, 0.10)` fill, subtle hairline border `rgba(251, 244, 218, 0.12)`).
  * Links (`Home`, `About Me`, `Tools`, `Projects`, `Contacts`) use generous horizontal padding (`16px–24px` container padding, `20px–24px` gap).
  * Active state shifts text color to Electric Amber Gold (`#FFBC03`) with medium-semibold weight; inactive items use Warm Parchment Cream (`#FBF4DA`) at `85%` opacity, brightening to `100%` or `#02B08D` / `#FFBC03` on hover.

### Hero Feature Container
* **Shape & Framing:** Framed as an elevated, full-bleed showcase card with **generously rounded bottom corners (`32px–40px` radius)** resting cleanly over the darker Obsidian Canvas (`#0B1014`).
* **Background Treatment:** Multi-point radial mesh gradient blending Vibrant Emerald Teal (`#02B08D`) on the upper-left, Deep Abyssal Navy-Teal (`#001822`) across the center-bottom, and a soft cool luminous highlight on the upper-right, unified by a `4%–8%` monochrome SVG/CSS film-grain noise overlay.
* **Portrait Treatment:** High-contrast cutout treated with a dark navy-teal (`#001822`) shadow tint so the subject integrates seamlessly into the atmospheric hero gradient without harsh cutout edges.

### Pill Tags & Badges (e.g., Career Focus)
* **Shape:** **Pill-shaped (`9999px` radius)** compact capsules (`padding: 6px 14px`).
* **Surface & Border:** Dark translucent charcoal-slate fill (`rgba(255, 255, 255, 0.06)`) with a whisper-thin border (`1px solid rgba(251, 244, 218, 0.12)`), no heavy shadow.
* **Behavior:** Stacked neatly in a compact vertical list or wrapping flex row; subtle hover lift (`translateY(-1px)`) with border brightening toward Vibrant Emerald Teal (`#02B08D`) or Electric Amber Gold (`#FFBC03`).

### Cards & Content Containers (For `Tools`, `Projects`, `Contacts`)
* **Corners:** **Subtly to generously rounded corners (`16px–24px` radius)** to echo the hero frame's organic geometry while preserving crisp alignment.
* **Surface & Elevation:** Flat-layered dark glass surfaces (`rgba(0, 24, 34, 0.65)` over `#0B1014`) separated by `1px` hairline borders (`rgba(251, 244, 218, 0.10)`) and soft, diffused ambient shadows (`0 20px 40px -15px rgba(0, 0, 0, 0.5)`) rather than hard borders.
* **Interactive Hover:** Subtle radial emerald glow (`rgba(2, 176, 141, 0.14)`) illuminating from behind or along the top border edge, paired with smooth `200ms–300ms` cubic-bezier transitions.

### Buttons & Inputs
* **Primary Action Buttons:** **Pill-shaped (`9999px` radius)**, solid Electric Amber Gold (`#FFBC03`) fill with high-contrast Deep Abyssal Navy-Teal (`#001822`) bold `Plus Jakarta Sans` text, transitioning to a warm luminous hover glow.
* **Secondary / Ghost Buttons:** **Pill-shaped (`9999px` radius)**, transparent or dark frosted fill with `1px solid rgba(251, 244, 218, 0.25)` border and `#FBF4DA` text; transitions border and text to `#02B08D` on hover.
* **Form Inputs (Contact Section):** **Softly rounded corners (`12px` radius)**, deep `#001822` recessed fill (`rgba(0, 24, 34, 0.7)`), `1px solid rgba(251, 244, 218, 0.14)` border, shifting to Vibrant Emerald Teal (`#02B08D`) focus ring on active input.

---

## 5. Layout Principles

* **Canvas & Max Width:** Fluid full-bleed hero frame with inner content safely bounded to a `1200px–1280px` centered container (`padding: 0 24px` on mobile, `0 48px–64px` on desktop).
* **Asymmetric Editorial Balance (About & Feature Sections):**
  * **3-Column Anchor Grid (Desktop):** Left column carries the eyebrow, `Humane` section title, and `Career Focus` pill stack; center column anchors the full-color portrait cutout rising slightly to bridge the hero and body; right column carries `Meet Syafiq` narrative copy and `Education` timeline.
  * **Responsive Collapse (Tablet & Mobile):** Stacks cleanly into a single vertical flow—portrait centered above or below the `ABOUT ME` display title—preserving generous vertical breathing room (`64px–96px` section padding) and disabling aggressive text-behind-portrait overlaps on narrow viewports where readability could suffer.
* **Whitespace & Rhythm:** Generous negative space around the hero portrait and between the 3-column blocks prevents visual crowding despite the monumental scale of `Humane` display headings. Maintain at least `80px–120px` vertical separation between major portfolio sections (`Hero`, `About Me`, `Tools`, `Projects`, `Contacts`).
* **Visual Alignment:** Left-aligned editorial copy blocks paired with tightly grouped, right-aligned accent phrases (`Artificial Intelligence / Software Development / Creative Media` abutting `ENTHUSIAST`) create intentional typographic tension.

---

## 6. Extending the System Across Portfolio Sections

To keep the full Vercel-deployed website cohesive across every navigation destination:

1. **Tools Section:** Use a clean bento or icon-pill grid on `#0B1014` with `#001822` glass cards, `#FFBC03` category headers (e.g., *AI & Automation*, *Software Engineering*, *Creative Media*), and subtle `#02B08D` hover highlights.
2. **Projects Section:** Feature editorial project cards (`20px–24px` rounded corners) combining crisp 16:9 previews, `Humane` project titles or card numbering in `#FBF4DA`, concise `Plus Jakarta Sans` summaries, and frosted pill tech-stack tags.
3. **Contacts Section & Footer:** Echo the hero card's signature **emerald-to-abyssal grainy mesh gradient (`#02B08D` → `#001822`)** inside a rounded closing banner (`32px` radius) with a bold `Humane` call-to-action, `#FFBC03` primary CTA button, and clean social pill links.
