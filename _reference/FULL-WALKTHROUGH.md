# Full Site Walkthrough Analysis
28 screenshots captured from jasonbergh.com via Playwright

## CRITICAL CORRECTIONS (Ba was right)

### 1. NO MINI PREVIEW WIDGET
Ba explicitly said "the widget is not on the website". REMOVE IT. There is no mini-preview in the bottom-right corner.

### 2. Navigation is SCROLL/WHEEL, not CLICK
Slides change via mouse WHEEL or trackpad swipe (GSAP Observer plugin), NOT by clicking left/right thirds. Clicking the center area opens the VIDEO PLAYER.

### 3. Preloader is a NUMBER COUNTER with scattered thumbnails
NOT a centered brand name that splits. The preloader shows:
- A serif italic number counting up (e.g., "99") centered on screen
- Random project thumbnails appearing at 4 corners (~210x120px each)
- Two vertical tick mark columns visible throughout (at ~33% and ~67% viewport)
- Pure black background
- Sequence: count 01→42 (fast), then reveal site

## SITE STATES

### STATE 1: Preloader
- Black screen with tick mark columns visible
- Center: number counter in serif italic (Editorialnew), counting project count
- 4 corners: random thumbnails appearing/disappearing
- Duration: ~4s

### STATE 2: Site Loaded (Slider View)
- Full-viewport background video (NOT thumbnail, actual video)
- 3-column grid layout
- Title split left/right in large Editorialnew serif italic
- Center: dark semi-transparent preview box (494×310) with corner brackets
- Top center: previous project thumbnail/video (256×144)
- Bottom center: next project thumbnail/video (256×144)
- "Play" text block at bottom of center column
- Metadata row below center: "01.  AMAZON ORIGINALS & ARTISTS EQUITY  .42"
- GSAP Observer: scroll/wheel changes slides
- NO play text visible unless hovering center

### STATE 3: Hover Center
- "• PLAY VIDEO" text appears centered in preview box
- Text style: small sans-serif (Monumentgrotesk), uppercase, ~10px
- Dot (•) pulses with fadePulse animation
- Background video remains visible through semi-transparent center

### STATE 4: Slide Transition (via scroll/wheel)
- Title text merges to center and splits to new title
- Background video crossfades to new project
- Preview thumbnails (top/bottom) update
- Metadata row updates
- Transition ease: cubic-bezier(0.75, 0, 0, 1)
- Duration: ~1.35s

### STATE 5: Video Player (click center)
- Center preview box EXPANDS to full screen (playerOpen animation)
- Full-screen video player with controls:
  - Top: BACK (left), INFO (center)
  - Sides: PREV (left edge), NEXT (right edge)
  - Bottom: Title (left serif italic), Category+Type (right)
  - Footer: MUTE | progress bar "00:01 • 02:19" | PAUSE | FULLSCREEN
- CDN video URL from project's `f` field (full quality)
- Close: click BACK returns to slider

### STATE 6: List View
- Grid list of all projects
- Each row: index number | Title (serif italic) | center thumbnail | category
- Rows separated by thin horizontal lines
- Background video still visible behind list (dimmed)
- Hover on row: video preview plays in center area
- Footer: SLIDER / **LIST** (active highlighted)

### STATE 7: Sub-pages (Archive, About, Contact)
- Transition to these pages: black wipe (the transition-block system)
- Pages appear to have their own layouts (not captured well due to timing)
- Archive: likely a grid of older work
- About: biography/info
- Contact: contact form or info
- Only the tick marks remain visible during transition
- Return via nav link click

## ELEMENTS TO FIX IN REBUILD

### REMOVE:
- [x] Mini preview widget (bottom-right) - DOES NOT EXIST
- [x] Black wipe transition on slide change - navigation is scroll-based, not click-based

### ADD:
- [ ] GSAP Observer for scroll/wheel slide navigation
- [ ] Preloader: number counter + scattered corner thumbnails
- [ ] Video player: full-screen expand from center box (playerOpen keyframes)
- [ ] Video player controls: BACK, INFO, PREV, NEXT, MUTE, PAUSE, FULLSCREEN
- [ ] Video player progress bar
- [ ] Sub-page transitions for ARCHIVE, ABOUT, CONTACT

### FIX:
- [ ] Background video: must be FULL viewport, plays on hover
- [ ] Center preview: transparent box, not containing a video/image
- [ ] Slide transition via scroll/wheel, not click
- [ ] Title animation: merge→split on slide change
