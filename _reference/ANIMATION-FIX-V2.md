# Animation Fix V2 - Precision Spec from Playwright + Ba's Screenshots

## CRITICAL ARCHITECTURE DIFFERENCE (Our rebuild vs Original)

### The Background Video System
**Original:** `.background-project-video` is a `<video>` element that covers the ENTIRE VIEWPORT (1440×900, position:absolute, top:0, left:0, z-index:2, object-fit:cover). There are TWO of these for crossfading between slides. The video plays when hovering the center spacer zone.

**Our rebuild:** Has a small video contained within the center preview box. THIS IS WRONG.

**Fix:** The background video must be a full-viewport `<video>` behind everything. The center preview box (`.video-spacer`, 494×310) is just a transparent clickable zone where "• PLAY VIDEO" text appears on hover.

### The Transition System
**Original:** `.transition-wrapper` = fixed, z-index 10000, CSS grid with 2 columns (720px each).
- `.transition-block` #1: `align-self: flex-start; background: rgb(0,0,0)` - grows FROM TOP
- `.transition-block` #2: `align-self: flex-end; background: rgb(0,0,0)` - grows FROM BOTTOM
- Animation: GSAP animates height 0% → 100% (covering screen), then swaps align-self and animates 100% → 0% (revealing)
- Duration: ~1.35s, ease: cubic-bezier(0.75, 0, 0, 1)

**During transition:** The center column stays visible with tick marks. Title text ("Jason" left, "Bergh" right) is visible against the black panels. After the wipe reveals, the new project's background fades in.

### The Intro Animation (Preloader)
**Original:** Shows "JasonBergh" (or "VideoContent" in our case) as ONE CONNECTED WORD centered on pure black background. Then:
1. Name splits: left part goes left, right part goes right
2. Background video fades in between the split
3. UI elements (nav, footer, previews) fade in

### Mini Preview Widget (Bottom-Right)
**Original:** `.screensaver-item` - 400×267px actual size (scaled down visually), z-index 10002, position absolute. Contains current project thumbnail + split name overlay. Visible in bottom-right corner at all times.

### Decorative Tick Marks (Center Column Edges)
**Original:** `.decor-numbers.is--left` at x=478 (7.2px wide) and `.decor-numbers.is--right` at x=955 (7.2px wide). These are vertical rulers with small tick marks/numbers running the full height. They sit at the edges of the center column and are visible during the intro and transitions.

### Running Timer
Bottom-right area shows a running timer in format "00:09:03" (hours:minutes:seconds since page load).

### The "• PLAY VIDEO" Hover
**Original:** `.video-hover-inner` is 61×14px, positioned at center of the spacer (top:155px, left:247px relative to spacer, with transform centering). Contains:
- `.text-dot` (pulsing dot, fadePulse animation)
- "PLAY VIDEO" text in `.text-medium` class (split into individual characters via SplitType, each revealed with translateY animation)
- Text appears on hover with character-by-character reveal
- Font: Monumentgrotesk, uppercase, ~10-11px

## IMPLEMENTATION PRIORITY

### 1. Full-Viewport Background Video (CRITICAL)
- Add `<video>` element behind grid, absolute positioned, 100vw × 100vh
- On slide change, load project's hover video URL (`.h` field from data)  
- On center hover: ensure video plays
- Two video elements for crossfading between slides

### 2. Proper Transition (Black Wipe)
- Add `.transition-wrapper` as fixed overlay, z-index 10000
- Two child divs (left/right columns, 50vw each)
- GSAP timeline: height 0→100% covering, swap, 100%→0% revealing
- Title stays visible during transition (it's above the wipe)

### 3. Intro Animation
- Start with "VideoContent" centered on black (full viewport overlay)
- After 2s delay: name splits left/right
- Background video fades in
- UI fades in
- Use GSAP timeline

### 4. Mini Preview Widget
- 120×80px (visual) in bottom-right corner
- Shows current project thumbnail
- Overlay: project name split left/right

### 5. Running Timer
- Bottom-right, monospace font
- Format: HH:MM:SS
- Counts from page load
- Update every second

### 6. Center Column Tick Marks
- Thin vertical rules at x=478 and x=955 (edges of center column)
- Small horizontal tick marks every ~20px
- Numbers at intervals
- Color: rgba(255,238,200,0.15) 
- z-index above background, below content

## DO NOT CHANGE
- Existing grid layout (1fr 34.3% 1fr)
- Font choices and sizes
- Color scheme
- Navigation structure
- Footer structure
- Existing corner brackets on video spacer
