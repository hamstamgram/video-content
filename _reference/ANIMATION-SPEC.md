# Jason Bergh Animation Specification
Extracted from jasonbergh.com via Playwright.

## Tech Stack
- GSAP 3.14.2 (CustomEase, Observer, InertiaPlugin, ScrollTrigger, Draggable)
- SplitType 0.3.4 (character-level text splitting)
- jQuery 3.5.1
- Webflow IX2 (preloader only)
- Custom ProjectApp namespace (~412K JS)

## Custom Eases
```
CustomEase.create("mainEase", "0.65, 0, 0, 1");
CustomEase.create("headingHoverEase", "0.75, 0, 0.25, 1");
CustomEase.create("transitionEase", "0.75, 0, 0, 1");
```

## Critical Animation Systems

### 1. Slide Transition (BLACK WIPE)
- `.transition-wrapper`: fixed grid 50vw + 50vw, z-index 10000
- `.transition-block`: two black panels that wipe from 0% → 100% height
- On slide change: black wipe covers → content swaps → black wipe reveals
- Duration: ~1.35s with transitionEase
- Background video crossfades with `1.35s cubic-bezier(0.75, 0, 0, 1)`

### 2. Video Hover ("• PLAY VIDEO")
- `.video-hover-wrapper` full viewport overlay
- `.video-spacer` (494×310) in center column
- `.video-hover-inner` absolute center of spacer
- Contains `.text-dot` (pulsing dot, animation: fadePulse 0.6s) + "PLAY VIDEO" text
- On hover: inner shows with `transition: transform 0.3s ease-out, opacity 0.2s ease-out`
- Background video (`.background-project-video`) plays on hover
- Video is 1440×900 covering full viewport

### 3. Preview Videos (Top/Bottom)
- `.preview-block.is--top` at x=592, y=0, 256×144
- `.preview-block.is--bottom` at x=592, y=756, 256×144
- Contains actual `<video>` elements (not images)
- Video poster images as fallback
- Transition: `opacity 0.4s ease-out`

### 4. Play Block (Character Animation)
- `.play-block` at 645, 510, 149×101
- `.char-block` contains two versions of "P" (normal + italic)
- Hover: `transform 0.6s cubic-bezier(0.75, 0, 0, 1)`
- "lay" text after the animated "P"

### 5. Film Grain Noise
- `.noise-animation` fixed overlay
- `.noise-move` tiled noise PNG background
- `animation: 0.2s ease infinite noise` (jitters background-position)
- `mix-blend-mode: color-dodge`

### 6. Preloader/Intro
- Sequence of images shown during load
- Text: "Intimate, Raw Human Storytelling"
- After preload: shows site name centered, then splits into grid layout
- GSAP timeline with character-level animations via SplitType

### 7. Custom Cursor
- `.cursor-block_play` + `.cursor-text-block`
- Follows mouse with eased position
- Changes text based on hover zone (PREV, NEXT, PLAY, etc.)
- `transition: transform 0.3s ease-out, opacity 0.2s ease-out`

### 8. Decorative Elements
- `.video-decor-wrapper` around center preview (-0.3vw offset)
- Vertical ruler tick marks along center column
- `.background-decor` with opacity transitions
- Corner brackets visible at video spacer corners

### 9. Text Styling (Kerning)
- SplitType splits titles into individual characters
- Custom padding per letter: B,D,E,F,H,I,J,K,L,M,N,P,R,S = leftPadding
- X = mediumPadding, W = largePadding
- Negative margins for T,A,V,Y etc.

### 10. Mini Preview Widget (Bottom-Right)
- Small thumbnail showing current project
- Shows site name split across it
- Positioned at bottom-right corner (~1080×690, ~180×120px)

## Key Dimensions
- Viewport: 1440×900
- Grid: 470.891px | 493.906px | 470.891px
- Video spacer: 494×310
- Preview blocks: 256×144
- Play block: 149×101
- Footer: y=823, h=77
- Navbar: h=54.53

## Video URLs Pattern
- Background: https://d3b24qxei2vojx.cloudfront.net/Film%20and%20TV/[NAME].mp4
- Full quality: https://d3b24qxei2vojx.cloudfront.net/Film+and+TV+full/[NAME].mp4
- Thumbnails: https://cdn.prod.website-files.com/696e26954ee505294b4b8653/[hash]_Slider-N.webp
