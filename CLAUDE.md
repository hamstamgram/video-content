# Video Content — Animation Rebuild

## What This Is
A rebranded clone of jasonbergh.com. Layout is ~85% done. Animations are the gap.

## Reference Material
- `_reference/ANIMATION-SPEC.md` — Full animation specification
- `_reference/jasonbergh-source.js` — 412K of original inline JS (ProjectApp namespace)
- `_reference/jasonbergh-styles.css` — 158K of original CSS
- Original site: https://www.jasonbergh.com/

## Priority Animation Fixes (in order)

### P0 — Live Video Playback in Center Preview
The center preview box currently shows a static thumbnail. Original plays LIVE VIDEO from the `h` field (hover video URL) on mouseenter, with "• PLAY VIDEO" text overlay.
- Replace static `<img>` with `<video>` in `.video-preview-box`
- On mouseenter: play video. On mouseleave: pause
- Show "• PLAY VIDEO" text with pulsing dot on hover
- Reference: `ProjectApp.swiperModule` in source

### P1 — Slide Transition (Black Wipe)
When navigating between slides, original does a black curtain wipe:
- Two `.transition-block` divs (left/right) animate height 0→100% covering screen
- Content swaps underneath
- Blocks animate height back to 0% revealing new slide
- Duration: ~1.35s, ease: `cubic-bezier(0.75, 0, 0, 1)`
- Reference: `ProjectApp.transitionModule` in source

### P2 — Preloader/Intro Animation
On first load, shows "Video Content" centered in large serif, then the grid expands:
- Show brand name centered on black
- Animate split into left/right columns
- Fade in background video
- Reference: `ProjectApp.modeSwitchModule`, preloader sequence in source

### P3 — Film Grain Noise Overlay
- Tiled noise PNG with mix-blend-mode: color-dodge
- Jittering animation: background-position shift every 0.2s
- Noise URL: https://s3-us-west-2.amazonaws.com/s.cdpn.io/1295275/background-noise.png

### P4 — Preview Videos (Top/Bottom)
- Replace static images with `<video>` elements for prev/next project previews
- Size: 256×144 at x=592
- Show poster image, play video on slide approach
- Reference: `.preview-block` in source

### P5 — Custom Cursor
- Hide default cursor
- Follow mouse with eased position tracking
- Change text: "PREV" on left edge, "NEXT" on right edge, "PLAY" on center
- Reference: cursor-related code in source

### P6 — Mini Preview Widget (Bottom-Right)
- Small ~120×80px thumbnail in bottom-right
- Shows current project name split across it
- Acts as a mini-map

## Technical Notes
- GSAP 3.14.2 is already loaded via CDN
- CustomEase is used: `mainEase = "0.65, 0, 0, 1"`
- Project data is in `const P = [...]` with fields: n, t, c, tp, cat, f (full video), h (hover video), th (thumbnail)
- Branding: "Video Content" not "Jason Bergh"
- Push to GitHub after changes (auto-deploys to GitHub Pages)

## DO NOT
- Change the branding from "Video Content"
- Remove existing functionality
- Add new npm dependencies (everything must work as a single HTML file)
