# Shroomy Website — Design & Style Guide

## Overview

Shroomy is a mental health app focused on anxiety relief through CBT and evidence-based exercises. The website is a marketing landing page built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The design is friendly, rounded, and approachable — reflecting the app's personality.

## Tech Stack

- **Framework:** Next.js 14, App Router (`src/app/`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.1 (utility-first, no CSS modules)
- **Images:** `next/image` component for all images (except review stars which use `<img>`)
- **Deployment:** Static site / Vercel

## Page Structure

The landing page renders sections in this order:

```
Header → Hero → Habits → Exercises → Insights → Reviews → CTA → Footer
```

Components live in `src/components/`. The page is assembled in `src/app/page.tsx`.

## Typography

### Fonts

| Role     | Font              | CSS Variable          | Tailwind Class |
|----------|-------------------|-----------------------|----------------|
| Headings | Dela Gothic One   | `--font-dela-gothic`  | `font-display` |
| Body     | Manjari (400/700) | `--font-manjari`      | `font-body`    |

Fonts are loaded via Google Fonts in `globals.css`.

### Heading Color

All headings (`h1`–`h4`) use a muted indigo: **`#5C6193`**. This is set globally in `globals.css`, not via Tailwind classes.

### Heading Sizes

| Context          | Classes                                          |
|------------------|--------------------------------------------------|
| Hero (h1)        | `text-5xl md:text-7xl lg:text-8xl`               |
| CTA (h2)         | `text-4xl md:text-6xl lg:text-7xl`               |
| Section titles   | `text-3xl md:text-4xl lg:text-5xl`               |

### Tight Line Spacing for Display Titles

The Dela Gothic One font does not respond well to `line-height` / `leading-*` for tightening. Instead, tight title line spacing is achieved with **block `<span>` elements and negative top margins**:

```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-display">
  <span className="block">A new kind</span>
  <span className="block -mt-2 md:-mt-4 lg:-mt-5.5">of mental</span>
  <span className="block -mt-2 md:-mt-4 lg:-mt-5.5">health app</span>
</h1>
```

This pattern is used in `Hero.tsx` and `CTA.tsx`. Section titles in `Habits.tsx`, `Exercises.tsx`, and `Insights.tsx` use simple `<br />` tags and `leading-tight` since they are smaller and don't need as much tightening.

### Body Text

Body text is black (`#000000`) on white. Review cards, footer links, and nav items all use `text-black`.

## Colors

### Palette

| Name           | Hex       | Usage                                        |
|----------------|-----------|----------------------------------------------|
| Lavender       | `#D7D0FB` | Primary brand color, backgrounds, buttons    |
| Lavender Light | `#F3E8F8` | Scrollbar track                              |
| Lavender Dark  | `#A89BD6` | Scrollbar thumb hover                        |
| Heading Indigo | `#5C6193` | All heading text                             |
| Black          | `#000000` | Body text, borders                           |
| White          | `#FFFFFF` | Page background, card backgrounds            |
| Success        | `#6BCE70` | (Available, not currently prominent)         |
| Highlight      | `#FFF7CC` | (Available, not currently prominent)         |
| Coral          | `#FF6B6B` | (Available, not currently prominent)         |

### Theme Color

The HTML meta theme color is `#D7D0FB` (lavender).

## Spacing & Layout

### Container Pattern

All sections use this responsive padding pattern:

```
px-8 md:px-12 lg:px-16
```

Content is constrained with `max-w-6xl mx-auto` (or `max-w-5xl` for Hero/CTA).

### Section Vertical Spacing

- Standard sections: `py-16 md:py-24`
- Hero: `pt-32 pb-8` (extra top padding for fixed header)
- CTA: `py-24`

## Border Radius

### Custom Tailwind Values

| Token   | Value  | Usage                              |
|---------|--------|------------------------------------|
| `pill`  | `50px` | Buttons, nav links                 |
| `card`  | `24px` | Review cards                       |

### Lavender Containers

The Habits and Insights sections use a lavender pill-shaped container with `rounded-[300px]`. This creates semi-circular ends on the rectangle.

**Important architectural note:** The lavender background is an `absolute inset-0` div with `overflow-hidden` to clip to the rounded shape, while the content sits in a `relative z-10` div that is *not* clipped — allowing phone mockups to visually overflow the container bounds.

```tsx
<div className="relative">
  {/* Background — clipped */}
  <div className="absolute inset-0 rounded-[300px] overflow-hidden">
    <Image src="/gradients/lavender.png" fill className="object-cover" />
  </div>
  {/* Content — can overflow */}
  <div className="relative z-10 ...">
    {/* Phone mockups with translate to extend beyond container */}
  </div>
</div>
```

## Buttons

### Pill Button Style

All buttons share this base pattern:

```
px-5 py-2.5 rounded-pill text-sm font-body font-normal border border-black
shadow-[0_3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity
```

### Variants

| Variant    | Background       | Text Color  | Usage                    |
|------------|------------------|-------------|--------------------------|
| Primary    | `bg-lavender`    | `text-black`| Download buttons         |
| Secondary  | `bg-white`       | `text-black`| Blog, Support nav links  |

### Card Style

Cards (review cards, exercise tiles) use the same border/shadow treatment:

```
border border-black shadow-[0_3px_0_rgba(0,0,0,0.1)]
```

This gives a subtle raised/3D appearance consistent across all interactive elements.

## Components

### Header

- Fixed position with blur background: `fixed top-0 z-50 bg-white/80 backdrop-blur-md`
- Logo (app icon + wordmark) on the left
- Navigation pills on the right: Blog, Support (hidden on mobile), Download (iOS), Download (Android)

### Hero

- Center-aligned title with overlapping mascot image
- Shroomy waving mascot (350x350) overlaps the bottom of the title via negative margin (`-mt-10 md:-mt-16`)
- No CTA buttons in this section

### Habits (Lavender Container)

- Two-column grid: phone mockups left, title right
- Phone mockups extend beyond the lavender pill container:
  - `my-plan.png` (280x570) — emerges upward via `lg:-translate-y-32`
  - `task-complete.png` (240x490) — emerges downward via `lg:translate-y-32`
- Subtle parallax scroll effect (see Animations section)

### Exercises

- White background section
- Two-column asymmetric grid: `lg:grid-cols-[1fr_1.5fr]`
- Left: section title
- Right: 4x2 grid of exercise type cards
- Each card has a 64x64 icon and label
- Cards have `hover:scale-110` transform on hover

### Insights (Lavender Container)

- Same lavender pill container pattern as Habits
- Two phone mockups with overlapping z-index:
  - `insight-unlocked.png` (230x470) — z-20, in front, shifted right and down
  - `progress-insights.png` (420x850) — z-10, behind, shifted up and left
- Subtle parallax scroll effect (see Animations section)

### Reviews

- Client component with scroll-linked horizontal carousel
- Review cards auto-scroll left as the user scrolls down the page
- Each card shows: five-star image, quoted review text, author attribution
- Cards use `rounded-card` (24px) with the standard border/shadow

### CTA

- Full-width lavender background (using `/gradients/lavender.png` fill image)
- Center-aligned title with overlapping celebrating mascot (160x160)
- No buttons — just the title and mascot

### Footer

- White background with top border
- Logo on the left, Privacy/Terms links on the right
- Copyright line centered below a divider

## Animations & Interactions

### Parallax Scroll (Habits & Insights)

Phone mockups in lavender containers have a subtle parallax effect. The pattern uses:

1. `'use client'` directive
2. `useRef` for the section element and each image wrapper
3. `useEffect` with a passive scroll listener
4. Progress calculation: `(viewportHeight - rect.top) / (viewportHeight + rect.height)`
5. Offset centered around midpoint: `(clampedProgress - 0.5) * 2` gives a -1 to 1 range
6. Max shift of **±20px** — deliberately subtle

Direction rules:
- Images that emerge **upward** from the container parallax **downward** (positive offset)
- Images that emerge **downward** from the container parallax **upward** (negative offset)

The parallax transform is applied to an inner `div` wrapper (separate from the Tailwind positioning div) with `will-change-transform transition-none`.

### Scroll-Linked Carousel (Reviews)

The reviews carousel translates horizontally based on scroll position through the section. Uses the same progress calculation pattern as parallax. The track element receives `translateX(-${progress * maxScroll}px)`.

### Hover Effects

- Buttons: `hover:opacity-90 transition-opacity`
- Exercise tiles: `hover:scale-110` with `transition-transform`
- Footer links: `hover:text-gray-700 transition-colors`

### Available Keyframe Animations (Tailwind Config)

| Animation       | Duration | Description                     |
|-----------------|----------|---------------------------------|
| `float`         | 6s       | Gentle up/down bob              |
| `float-delayed` | 6s       | Same, with 2s delay             |
| `scroll-left`   | 30s      | Continuous leftward scroll      |
| `scroll-right`  | 30s      | Continuous rightward scroll     |
| `fade-in-up`    | 0.6s     | Fade in from 30px below         |

## Images & Assets

### Directories

| Path               | Contents                                          |
|--------------------|---------------------------------------------------|
| `/public/images/`  | Logo, app icon, mascots, stars, badges             |
| `/public/mockups/` | Phone screen mockup PNGs                           |
| `/public/icons/`   | Exercise type icon PNGs                            |
| `/public/gradients/`| Background gradient images (lavender, night-sky)  |

### Mascot Images

- `shroomy-waving.png` — Used in Hero (350x350)
- `shroomy-celebrating.png` — Used in CTA (160x160)

### Phone Mockups

| File                    | Dimensions | Section  |
|-------------------------|------------|----------|
| `my-plan.png`           | 280x570    | Habits   |
| `task-complete.png`     | 240x490    | Habits   |
| `insight-unlocked.png`  | 230x470    | Insights |
| `progress-insights.png` | 420x850    | Insights |

All phone mockups use `drop-shadow-2xl` for depth.

### Exercise Icons

8 icons at 64x64 (`w-16 h-16`): heart, magnifying-glass, signpost, cloud, pointing-hand, shoe, envelope, puzzle.

## Client vs Server Components

Most components are server components (default in Next.js App Router). Only components that need browser APIs use `'use client'`:

| Component     | Type   | Reason                                |
|---------------|--------|---------------------------------------|
| `Habits.tsx`  | Client | Parallax scroll effect                |
| `Insights.tsx`| Client | Parallax scroll effect                |
| `Reviews.tsx` | Client | Scroll-linked carousel                |
| All others    | Server | No client-side interactivity needed   |

## Conventions

- **No trailing periods** on heading text (e.g., "Simple habits to reduce anxiety" not "Simple habits to reduce anxiety.")
- **`next/image`** is used for all images except the five-star rating PNG in review cards (which uses `<img>` for simplicity)
- **Drop shadows** (`drop-shadow-2xl`) are used on all phone mockups and mascot images for depth
- **`overflow-hidden`** is only on the background clip div of lavender containers, never on the content wrapper
- **Section padding** is consistent: `px-8 md:px-12 lg:px-16` horizontally, `py-16 md:py-24` vertically
- **Image priority**: Only the hero mascot uses `priority` prop for LCP optimization
