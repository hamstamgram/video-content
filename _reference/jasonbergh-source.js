
// ═══ SCRIPT #0 (181 chars) ═══
!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

// ═══ SCRIPT #1 (636 chars) ═══

(function() {
  const STORAGE_KEY = 'decorOffsets_v3';
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved.left === 'number') {
      document.documentElement.setAttribute('data-decor-continuing', '1');
      document.documentElement.style.setProperty('--decor-left-offset', saved.left + 'px');
      document.documentElement.style.setProperty('--decor-right-offset', saved.right + 'px');
    } else {
      document.documentElement.setAttribute('data-decor-continuing', '0');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-decor-continuing', '0');
  }
})();


// ═══ SCRIPT #3 (1225 chars) ═══

window.ProjectApp = window.ProjectApp || {
        state: {
            cachedItemHeight: null,
            scrollInitialized: false,
            scrollListener: null,
            swiper: null,
            isTransitioning: false,
            currentView: 'swiper',
            currentCategory: 'all',
            blockAlignmentState: 'initial',
            listTemplates: [],
            swiperTemplates: [],
            backgroundHoverHandler: null,
            totalCounts: { all: 0, editorial: 0, 'tv-film': 0, commercial: 0 },
            countsInitialized: false,
            linkHoverState: { items: [] },
            timelineState: { timers: [], visibilityHandler: null },
            switchAnim: { modeBlock: null, filterButtons: [], optionBlocks: [], listeners: [] },
            swiperBuildInProgress: false,
            isScrolling: false,
            scrollTimeout: null
        },
        utils: {},
        templateManager: {},
        listModule: {},
        slideAnimations: {},
        slidePresets: {},
        swiperModule: {},
        filterModule: {},
        animations: {},
        viewSwitcher: {},
        timeline: {},
        eventHandlers: {},
        pageAnimations: {},
        init: {}
    };


// ═══ SCRIPT #4 (2239 chars) ═══

(function () {
  const favicons = {
    light: {
      32: 'https://cdn.prod.website-files.com/68f0d57c588577c0f74716f9/69256a6759d738ccad8f1599_Favicon256.png',
      256: 'https://cdn.prod.website-files.com/68f0d57c588577c0f74716f9/69256a6995ffed749223a13d_Favicon32.png',
      512: 'https://cdn.prod.website-files.com/68f0d57c588577c0f74716f9/695291c927b8e0f645d7e078_light512.png'
    },
    dark: {
      32: 'https://cdn.prod.website-files.com/68f0d57c588577c0f74716f9/695291c93b68f2c636607c28_dark32.png',
      256: 'https://cdn.prod.website-files.com/68f0d57c588577c0f74716f9/695291c9df826ad2440fa6c0_dark256.png',
      512: 'https://cdn.prod.website-files.com/68f0d57c588577c0f74716f9/695291c985820fe8bb20463c_dark512.png'
    }
  };

  function setFavicons() {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = isDark ? 'dark' : 'light';
    
    document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach(el => el.remove());
    
    const icon32 = document.createElement('link');
    icon32.rel = 'icon';
    icon32.type = 'image/png';
    icon32.sizes = '32x32';
    icon32.href = favicons[theme][32];
    document.head.appendChild(icon32);
    
    const iconApple = document.createElement('link');
    iconApple.rel = 'apple-touch-icon';
    iconApple.sizes = '180x180';
    iconApple.href = favicons[theme][256];
    document.head.appendChild(iconApple);
    
    const icon512 = document.createElement('link');
    icon512.rel = 'icon';
    icon512.type = 'image/png';
    icon512.sizes = '512x512';
    icon512.href = favicons[theme][512];
    document.head.appendChild(icon512);
    
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = isDark ? '#1E1E1C' : '#FFEEC8';
  }

  setFavicons();

  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) {
      mq.addEventListener('change', setFavicons);
    } else if (mq.addListener) {
      mq.addListener(setFavicons);
    }
  }
})();


// ═══ SCRIPT #5 (9267 chars) ═══

				const sequence = [
            {
                order: 1,
                type: 'image',
                urls: 'https://cdn.prod.website-files.com/65e61ac90950149fdb15e419/6895e3dd991ef13ff3f166b3_V_04.png'
            },
            {
                order: 2,
                type: 'video',
                urls: [
                    'https://cdn.prod.website-files.com/65e61ac90950149fdb15e419%2F6895e7fb20825e8a37dbc051_Video%201-S-transcode.mp4',
                    'https://cdn.prod.website-files.com/65e61ac90950149fdb15e419%2F6895e7fb20825e8a37dbc051_Video%201-S-transcode.webm'
                ],
                cover: 'https://cdn.prod.website-files.com/65e61ac90950149fdb15e419%2F6895e7fb20825e8a37dbc051_Video%201-S-poster-00001.jpg'
            },
            {
                order: 3,
                type: 'image',
                urls: 'https://cdn.prod.website-files.com/65e61ac90950149fdb15e419/6895e3dd12f642e0ea537483_V_02.png'
            },
            {
                order: 4,
                type: 'image',
                urls: 'https://cdn.prod.website-files.com/65e61ac90950149fdb15e419/6895e3de01c6547e79dd29b8_V_01.png'
            },
            {
                order: 5,
                type: 'image',
                urls: 'https://cdn.prod.website-files.com/65e61ac90950149fdb15e419/6895e3ddb34fb4c7682e8113_V_03.png'
            }
        ];

sequence.sort((a, b) => a.order - b.order);

const coverCache = {};
sequence.forEach(it => {
    if (it.type === 'video' && it.cover) {
        const im = new Image();
        im.src = it.cover;
        coverCache[it.cover] = im;
    }
});

window.addEventListener('load', () => {
    const container = document.querySelector('.screensaver-container');
    const item = container?.querySelector('.screensaver-item');
    const img = item?.querySelector('#screensaver-image');
    const video = item?.querySelector('#screensaver-video');
    const canvas = container?.querySelector('#screensaver-canvas');

    if (!container || !item || !img || !video || !canvas) {
        console.warn('Screensaver: missing elements');
        return;
    }

    const ctx = canvas.getContext('2d');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    let x = 0, y = 0, speed = 2, angle = 0;
    let width = 0, height = 0, contW = 0, contH = 0;
    let savedState = null, tickerHandler = null, idleTimeout = null, active = false;
    let sequenceIndex = 0, mode = sequence[0].type;
    let lastX = null, lastY = null;
    let prevTime = 0;
    const steps = 5;
    const mobileBreakpoint = 768;

    const setX = gsap.quickSetter(item, 'x', 'px');
    const setY = gsap.quickSetter(item, 'y', 'px');
    const idleTime = parseInt(container.dataset.idleTime, 10) || 4000;

    function isMobile() {
        return window.innerWidth <= mobileBreakpoint;
    }

    function parseValue(val) {
        if (!val) return null;
        if (val.includes('-')) {
            const [min, max] = val.split('-').map(Number);
            return Math.random() * (max - min) + min;
        }
        return parseFloat(val);
    }

    function updateSize() {
        const r = container.getBoundingClientRect();
        contW = r.width;
        contH = r.height;
        const rect = item.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
    }

    function resizeCanvas() {
        const w = container.clientWidth, h = container.clientHeight;
        canvas.width = w * 2;
        canvas.height = h * 2;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(2, 2);
    }

    function getCoverSrcRect(iw, ih, boxW, boxH) {
        const scale = Math.max(boxW / iw, boxH / ih);
        const dispW = iw * scale;
        const dispH = ih * scale;
        const overflowX = Math.max(0, dispW - boxW);
        const overflowY = Math.max(0, dispH - boxH);
        const sx = (overflowX / 2) / scale;
        const sy = (overflowY / 2) / scale;
        const sw = boxW / scale;
        const sh = boxH / scale;
        return { sx, sy, sw, sh };
    }

    function showImage(url) {
        mode = 'image';
        img.style.display = '';
        img.src = url;
        video.pause();
        video.style.display = 'none';
    }

    function showVideo(urls, cover) {
        mode = 'video';
        if (cover) img.src = cover;
        img.style.display = 'none';
        video.style.display = '';
        video.innerHTML = '';
        urls.forEach(src => {
            const s = document.createElement('source');
            s.src = src;
            s.type = src.endsWith('.webm') ? 'video/webm' : 'video/mp4';
            video.appendChild(s);
        });
        const p = video.play();
        if (p && typeof p.catch === 'function') {
            p.catch(() => setTimeout(() => video.play().catch(() => {}), 50));
        }
    }

    function showSequenceItem(index) {
        const it = sequence[index];
        if (it.type === 'image') {
            showImage(it.urls);
        } else {
            showVideo(it.urls, it.cover);
        }
    }

    function nextSequenceItem() {
        sequenceIndex = (sequenceIndex + 1) % sequence.length;
        showSequenceItem(sequenceIndex);
    }

    function startScreensaver() {
        if (active || isMobile()) return;
        active = true;
        container.style.display = 'block';
        if (canvas instanceof HTMLCanvasElement) canvas.style.display = 'block';
        resizeCanvas();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lastX = null;
        lastY = null;
        updateSize();
        
        if (savedState) {
            ({ x, y, angle, speed, sequenceIndex } = savedState);
            showSequenceItem(sequenceIndex);
        } else {
            x = 0;
            y = 0;
            speed = parseValue(container.dataset.speed) || 2;
            angle = (parseValue(container.dataset.angle) || 45) * Math.PI / 180;
            sequenceIndex = 0;
            showSequenceItem(sequenceIndex);
        }
        
        prevTime = performance.now();
        tickerHandler = () => {
            const now = performance.now();
            const dt = (now - prevTime) / 60;
            prevTime = now;
            x += Math.cos(angle) * speed * dt;
            y += Math.sin(angle) * speed * dt;
            let bounced = false;
            
            if (x <= 0 || x + width >= contW) {
                angle = Math.PI - angle;
                x = Math.max(0, Math.min(x, contW - width));
                bounced = true;
            }
            
            if (y <= 0 || y + height >= contH) {
                angle = -angle;
                y = Math.max(0, Math.min(y, contH - height));
                bounced = true;
            }
            
            if (bounced) nextSequenceItem();
            setX(x);
            setY(y);
        };
        gsap.ticker.add(tickerHandler);
    }

    function stopScreensaver() {
        if (!active) return;
        active = false;
        gsap.ticker.remove(tickerHandler);
        container.style.display = 'none';
        if (canvas instanceof HTMLCanvasElement) canvas.style.display = 'none';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        savedState = { x, y, angle, speed, sequenceIndex };
        video.pause();
    }

    function resetIdleTimer() {
        clearTimeout(idleTimeout);
        stopScreensaver();
        
        if (isMobile()) return;
        
        idleTimeout = setTimeout(startScreensaver, idleTime);
    }

    if (isMobile()) return;
    
    ['mousemove', 'keydown', 'wheel', 'touchstart'].forEach(evt =>
        document.addEventListener(evt, resetIdleTimer, { passive: true })
    );

    window.addEventListener('resize', () => {
        if (isMobile()) {
            stopScreensaver();
            clearTimeout(idleTimeout);
            return;
        }
        
        resizeCanvas();
        savedState = null;
        updateSize();
        
        resetIdleTimer();
    });

    gsap.ticker.add(() => {
        if (!active) return;
        if (!img || !img.src || img.naturalWidth === 0 || img.naturalHeight === 0) return;
        
        if (lastX === null || lastY === null) {
            lastX = x;
            lastY = y;
        }
        
        const { sx, sy, sw, sh } = getCoverSrcRect(
            img.naturalWidth, img.naturalHeight, width, height
        );
        
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const ix = lastX + (x - lastX) * t;
            const iy = lastY + (y - lastY) * t;
            ctx.drawImage(img, sx, sy, sw, sh, ix, iy, width, height);
        }
        
        lastX = x;
        lastY = y;
    });

    document.addEventListener('visibilitychange', () => {
        if (!active) return;
        if (document.hidden) {
            gsap.ticker.remove(tickerHandler);
        } else {
            prevTime = performance.now();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            lastX = null;
            lastY = null;
            gsap.ticker.add(tickerHandler);
        }
    });

    if (!isMobile()) {
        resetIdleTimer();
    }
});


// ═══ SCRIPT #6 (6989 chars) ═══

ProjectApp.utils = {
     norm(str) {
         return (str || '').trim().toLowerCase();
     },

     isElementActuallyHidden(el) {
         if (!el) return true;
         const s = getComputedStyle(el);
         if (s.display === 'none' || s.visibility === 'hidden' || s.opacity === '0') return true;
         if (!el.offsetParent && s.position !== 'fixed') return true;
         return false;
     },

     withTemporarilyShown(el, fn) {
         if (!el) return;
         const prev = {
             display: el.style.display,
             visibility: el.style.visibility,
             position: el.style.position,
             left: el.style.left,
             top: el.style.top,
             pointerEvents: el.style.pointerEvents
         };
         const needsTemp = ProjectApp.utils.isElementActuallyHidden(el);
         if (needsTemp) {
             el.style.visibility = 'hidden';
             el.style.position = 'absolute';
             el.style.left = '-99999px';
             el.style.top = '-99999px';
             el.style.pointerEvents = 'none';
             el.style.display = 'block';
         }
         try {
             fn();
         } finally {
             if (needsTemp) {
                 el.style.display = prev.display;
                 el.style.visibility = prev.visibility;
                 el.style.position = prev.position;
                 el.style.left = prev.left;
                 el.style.top = prev.top;
                 el.style.pointerEvents = prev.pointerEvents;
             }
         }
     },

     measureItemHeight(templates, projectList) {
         if (!templates.length) return 0;
         const probe = templates[0].cloneNode(true);
         probe.style.position = 'absolute';
         probe.style.left = '-99999px';
         probe.style.top = '-99999px';
         probe.style.visibility = 'hidden';
         probe.style.width = '100%';
         projectList.appendChild(probe);
         const h = probe.getBoundingClientRect().height;
         probe.remove();
         return h;
     },

     waitForImages(container) {
         const images = Array.from(container.querySelectorAll('img'));
         const imgPromises = images.map(img => {
             if (img.complete && img.naturalWidth > 0) return Promise.resolve();
             return new Promise(res => {
                 const done = () => res();
                 img.addEventListener('load', done, {once: true});
                 img.addEventListener('error', done, {once: true});
                 setTimeout(done, 500);
             });
         });
         return Promise.all(imgPromises);
     },

     waitFor(testFn, timeoutMs, intervalMs) {
         return new Promise((resolve) => {
             const start = Date.now();
             const iv = setInterval(() => {
                 let ok = false;
                 try { ok = !!testFn(); } catch (e) { ok = false; }
                 if (ok) { clearInterval(iv); resolve(true); return; }
                 if (Date.now() - start > (timeoutMs || 3000)) { clearInterval(iv); resolve(false); }
             }, intervalMs || 50);
         });
     }
};



ProjectApp.pageAnimations = {
  initCreatorHover() {
    if (window.innerWidth <= 991) return;
    
    const creatorBlock = document.querySelector('.creator-block');
    const creatorLinks = document.querySelectorAll('.creator-link');
    
    if (!creatorBlock || !creatorLinks.length) return;
    
    const oldBlock = creatorBlock.cloneNode(true);
    creatorBlock.parentNode.replaceChild(oldBlock, creatorBlock);
    
    let hoverTimeout;
    
    oldBlock.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        const links = oldBlock.querySelectorAll('.creator-link');
        links.forEach((link, index) => {
          const reverseIndex = links.length - 1 - index;
          setTimeout(() => {
            link.classList.remove('animate-out');
            link.classList.add('animate-in');
          }, reverseIndex * 80);
        });
      }, 150);
    });
    
    oldBlock.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      const links = oldBlock.querySelectorAll('.creator-link');
      links.forEach((link, index) => {
        setTimeout(() => {
          link.classList.remove('animate-in');
          link.classList.add('animate-out');
        }, index * 80);
      });
    });
  },
  
  initAll() {
    ProjectApp.pageAnimations.initCreatorHover();
  }
};




ProjectApp.timeline = {
  storageKey: 'timeline_data',
  milliseconds: 0,
  element: null,
  intervalId: null,
  saveIntervalId: null,
  visibilityHandler: null,
  
  fmt(ms) {
    const t = Math.floor(ms);
    const m = Math.floor(t / 60000);
    const s = Math.floor((t % 60000) / 1000);
    const cs = Math.floor((t % 1000) / 10);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(cs).padStart(2, '0')}`;
  },
  
  initTimeline() {
    this.cleanup();
    
    this.element = document.querySelector('.timeline-block .text-mono');
    if (!this.element) return;
    
    try {
      const saved = JSON.parse(sessionStorage.getItem(this.storageKey));
      if (saved) {
        this.milliseconds = (parseFloat(saved.ms) || 0) + (Date.now() - (saved.t || Date.now()));
      }
    } catch(e) {
      this.milliseconds = 0;
    }
    
    this.element.textContent = this.fmt(this.milliseconds);
    this.start();
    
    this.saveIntervalId = setInterval(() => this.save(), 2000);
    
    const self = this;
    this.visibilityHandler = function() {
      if (document.hidden) {
        self.stop();
        self.save();
      } else {
        try {
          const saved = JSON.parse(sessionStorage.getItem(self.storageKey));
          if (saved) {
            self.milliseconds = (parseFloat(saved.ms) || 0) + (Date.now() - (saved.t || Date.now()));
          }
        } catch(e) {}
        self.start();
      }
    };
    
    document.addEventListener('visibilitychange', this.visibilityHandler);
    window.addEventListener('beforeunload', () => this.save());
  },
  
  start() {
    if (this.intervalId) return;
    let frameCount = 0;
    this.intervalId = setInterval(() => {
      this.milliseconds += 10;
      frameCount++;
      if (frameCount % 3 === 0) {
        this.element.textContent = this.fmt(this.milliseconds);
      }
    }, 10);
  },
  
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  },
  
  save() {
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify({
        ms: this.milliseconds,
        t: Date.now()
      }));
    } catch(e) {}
  },
  
  cleanup() {
    this.stop();
    if (this.saveIntervalId) {
      clearInterval(this.saveIntervalId);
      this.saveIntervalId = null;
    }
    if (this.visibilityHandler) {
      document.removeEventListener('visibilitychange', this.visibilityHandler);
      this.visibilityHandler = null;
    }
  }
};


// ═══ SCRIPT #7 (5482 chars) ═══

ProjectApp.modeSwitchModule = (function() {
    const STORAGE_KEY = 'projectapp_mode_active';
    const FIRST_VISIT_KEY = 'projectapp_first_visit';
    let videoTimeouts = [];
    let modeBlock = null;
    let clickHandler = null;

    function init() {
        cleanup();
        
        modeBlock = document.querySelector('.mode-block');
        if (!modeBlock) return;

        clickHandler = handleModeClick;
        modeBlock.addEventListener('click', clickHandler);
        
        restoreSavedState();
    }

    function getSavedState() {
        try {
            return localStorage.getItem(STORAGE_KEY) === 'true';
        } catch (e) {
            return false;
        }
    }

    function isFirstVisit() {
        try {
            const visited = localStorage.getItem(FIRST_VISIT_KEY);
            if (!visited) {
                localStorage.setItem(FIRST_VISIT_KEY, 'true');
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }

    function saveState(isActive) {
        try {
            localStorage.setItem(STORAGE_KEY, isActive ? 'true' : 'false');
        } catch (e) {
        }
    }

    function isConnectionFast() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        if (!connection) {
            return true;
        }

        if (connection.saveData === true) {
            return false;
        }

        const effectiveType = connection.effectiveType;

        if (effectiveType === '4g') {
            return true;
        }

        return false;
    }

    function restoreSavedState() {
        const isActive = getSavedState();
        const firstVisit = isFirstVisit();
        
        if (firstVisit && isConnectionFast()) {
            modeBlock.classList.add('is--active');
            saveState(true);
            applyModeState(true, false);
        }
        else if (isActive && isConnectionFast()) {
            modeBlock.classList.add('is--active');
            applyModeState(true, false);
        } 
        else {
            if (isActive && !isConnectionFast()) {
                saveState(false);
            }
            initializeVideoStates();
        }
    }

    function handleModeClick() {
        modeBlock.classList.toggle('is--active');
        const isActive = modeBlock.classList.contains('is--active');
        
        saveState(isActive);
        
        applyModeState(isActive, true);
    }

    function applyModeState(isActive, withDelay = true) {
   			const autoplayVideos = document.querySelectorAll('.background-block video:not(.background-project-video)');
				const allImageBlocks = document.querySelectorAll('.background-block img');
        const allBlocks = document.querySelectorAll('.background-block');

        clearVideoTimeouts();

        allBlocks.forEach(block => {
            block.classList.toggle('is--on', isActive);
        });

        autoplayVideos.forEach(video => {
            if (isActive) {
                video.setAttribute('autoplay', 'autoplay');
                video.setAttribute('preload', 'auto');
                video.load();
                video.play().catch(e => {});
            } else {
                if (withDelay) {
                    const timeout = setTimeout(() => {
                        video.removeAttribute('autoplay');
                        video.setAttribute('preload', 'none');
                        video.pause();
                        video.currentTime = 0;
                    }, 1200);
                    videoTimeouts.push(timeout);
                } else {
                    video.removeAttribute('autoplay');
                    video.setAttribute('preload', 'none');
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });

        allImageBlocks.forEach(img => {
            const parentBlock = img.closest('.background-block');
            if (parentBlock) {
                parentBlock.classList.toggle('is--on', isActive);
            }
        });
    }

    function initializeVideoStates() {
        const autoplayVideos = document.querySelectorAll('.background-block video:not(.background-project-video)');
        const allImageBlocks = document.querySelectorAll('.background-block img');

        autoplayVideos.forEach(video => {
            const parentBlock = video.closest('.background-block');
            if (!parentBlock || !parentBlock.classList.contains('is--on')) {
                video.removeAttribute('autoplay');
                video.setAttribute('preload', 'none');
                video.pause();
                video.currentTime = 0;
            }
        });

        allImageBlocks.forEach(img => {
            const parentBlock = img.closest('.background-block');
            if (parentBlock && !parentBlock.classList.contains('is--on')) {
                parentBlock.classList.remove('is--on');
            }
        });
		}

    function clearVideoTimeouts() {
        videoTimeouts.forEach(timeout => clearTimeout(timeout));
        videoTimeouts = [];
    }

    function cleanup() {
        clearVideoTimeouts();
        
        if (modeBlock && clickHandler) {
            modeBlock.removeEventListener('click', clickHandler);
        }
        
        modeBlock = null;
        clickHandler = null;
    }

    return {
        init,
        cleanup
    };
})();


// ═══ SCRIPT #8 (22431 chars) ═══

ProjectApp.animations = {
    activeAnimations: new Map(),
    initialized: new WeakSet(),

    initLinkHover() {
        ProjectApp.animations.cleanupLinkHover();

        document.querySelectorAll('[data-shuffle]').forEach((link) => {
            ProjectApp.animations.initShuffleHover(link);
        });

        document.querySelectorAll('[data-shuffle-plain]').forEach((element) => {
            ProjectApp.animations.initShufflePlain(element);
        });

        document.querySelectorAll('[data-shuffle-move]').forEach((element) => {
            ProjectApp.animations.initShuffleMove(element);
        });
    },

    initShuffleHover(element) {
        if (this.initialized.has(element)) return;
        this.initialized.add(element);

        const innerEl = element.querySelector('[data-inner]');
        const targetEl = innerEl || element;
        const originalText = targetEl.textContent;

        if (getComputedStyle(targetEl).position === 'static') {
            targetEl.style.position = 'relative';
        }

        const split = new SplitType(targetEl, {types: 'chars'});
        const originalChars = split.chars;
        const duplicateChars = [];
        const charPositions = [];

        originalChars.forEach((char, index) => {
            char.style.position = 'relative';
            char.style.zIndex = '2';

            const dup = char.cloneNode(true);
            dup.style.position = 'absolute';
            dup.style.zIndex = '1';

            const cr = char.getBoundingClientRect();
            const lr = targetEl.getBoundingClientRect();

            const left = cr.left - lr.left;
            const top = cr.top - lr.top;

            charPositions.push({ left, top });

            dup.style.left = left + 'px';
            dup.style.top = top + 'px';

            const cs = getComputedStyle(char);
            dup.style.width = cr.width + 'px';
            dup.style.height = cr.height + 'px';
            dup.style.fontSize = cs.fontSize;
            dup.style.fontWeight = cs.fontWeight;
            dup.style.lineHeight = cs.lineHeight;
            dup.style.letterSpacing = cs.letterSpacing;
            dup.style.textTransform = cs.textTransform;
            dup.style.fontFamily = cs.fontFamily;
            dup.style.margin = '0';
            dup.style.padding = '0';

            const fromBottom = index % 2 === 0;
            gsap.set(dup, {yPercent: fromBottom ? 100 : -100});

            targetEl.appendChild(dup);
            duplicateChars.push(dup);
        });

        let resizeTO;
        const onResize = () => {
            clearTimeout(resizeTO);
            resizeTO = setTimeout(() => {
                if (isAnimating) return;

                const lr = targetEl.getBoundingClientRect();
                originalChars.forEach((char, i) => {
                    const cr = char.getBoundingClientRect();
                    charPositions[i].left = cr.left - lr.left;
                    charPositions[i].top = cr.top - lr.top;

                    const dup = duplicateChars[i];
                    if (dup) {
                        dup.style.left = charPositions[i].left + 'px';
                        dup.style.top = charPositions[i].top + 'px';
                    }
                });
            }, 100);
        };
        window.addEventListener('resize', onResize);

        let currentTl = null;
        let isAnimating = false;

        const onEnter = (e) => {
            if (e.target !== element && !element.contains(e.target)) return;

            if (currentTl) currentTl.kill();

            duplicateChars.forEach((dup, i) => {
                if (dup) {
                    dup.style.left = charPositions[i].left + 'px';
                    dup.style.top = charPositions[i].top + 'px';
                }
            });

            isAnimating = true;
            currentTl = gsap.timeline({
                onComplete: () => { isAnimating = false; }
            });

            originalChars.forEach((char, i) => {
                const fromBottom = i % 2 === 0;
                currentTl.to(char, {
                    yPercent: fromBottom ? -100 : 100,
                    duration: 0.5,
                    ease: 'power3.inOut'
                }, 0);
                currentTl.to(duplicateChars[i], {
                    yPercent: 0,
                    duration: 0.5,
                    ease: 'power3.inOut'
                }, 0);
            });
        };

        const onLeave = (e) => {
            if (e.relatedTarget && element.contains(e.relatedTarget)) return;

            if (currentTl) currentTl.kill();

            isAnimating = true;
            currentTl = gsap.timeline({
                onComplete: () => { isAnimating = false; }
            });

            originalChars.forEach((char, i) => {
                const fromBottom = i % 2 === 0;
                currentTl.to(char, {
                    yPercent: 0,
                    duration: 0.5,
                    ease: 'power3.inOut'
                }, 0);
                currentTl.to(duplicateChars[i], {
                    yPercent: fromBottom ? 100 : -100,
                    duration: 0.5,
                    ease: 'power3.inOut'
                }, 0);
            });
        };

        element.addEventListener('mouseenter', onEnter);
        element.addEventListener('mouseleave', onLeave);

        ProjectApp.state.linkHoverState.items.push({
            link: element,
            split,
            originalText,
            originalChars,
            duplicateChars,
            onEnter,
            onLeave,
            onResize,
            timeline: currentTl
        });
    },

    initShufflePlain(element) {
        if (this.initialized.has(element)) return;
        this.initialized.add(element);

        const innerEl = element.querySelector('[data-inner]');
        const targetEl = innerEl || element;

        const text = targetEl.textContent;
        if (!text || text.trim() === '') return;

        if (window.gsap) {
            gsap.set(targetEl, {clearProps: 'all'});
        }

        targetEl.textContent = '';
        targetEl.style.position = 'relative';
        targetEl.style.display = 'inline-block';
        targetEl.style.overflow = 'hidden';

        const chars = text.split('');
        const charElements = [];

        chars.forEach((char, index) => {
            const charWrap = document.createElement('span');
            charWrap.style.position = 'relative';
            charWrap.style.display = 'inline-block';
            charWrap.style.overflow = 'hidden';
            charWrap.style.verticalAlign = 'top';

            const charInner = document.createElement('span');
            charInner.style.display = 'block';
            charInner.textContent = char;

            charInner.style.transition = 'none';
            const fromTop = index % 2 === 0;
            charInner.style.transform = fromTop ? 'translateY(-100%)' : 'translateY(100%)';

            charWrap.appendChild(charInner);
            targetEl.appendChild(charWrap);
            charElements.push({inner: charInner, fromTop});
        });

        targetEl.offsetHeight;

        let isHovered = false;
        let animationId = null;

        const animateIn = () => {
            if (animationId) cancelAnimationFrame(animationId);

            animationId = requestAnimationFrame(() => {
                charElements.forEach(({inner}) => {
                    inner.style.transition = 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)';
                    inner.style.transform = 'translateY(0)';
                });
            });
        };

        const animateOut = () => {
            if (animationId) cancelAnimationFrame(animationId);

            animationId = requestAnimationFrame(() => {
                charElements.forEach(({inner, fromTop}) => {
                    inner.style.transition = 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)';
                    inner.style.transform = fromTop ? 'translateY(-100%)' : 'translateY(100%)';
                });
            });
        };

        element.addEventListener('mouseenter', function(e) {
            if (isHovered) return;
            if (e.target !== element && !element.contains(e.target)) return;

            isHovered = true;
            animateIn();
        });

        element.addEventListener('mouseleave', function(e) {
            if (!isHovered) return;
            if (e.relatedTarget && element.contains(e.relatedTarget)) return;

            isHovered = false;
            animateOut();
        });

        this.activeAnimations.set(element, {
            charElements,
            isHovered,
            animateIn,
            animateOut
        });
    },

    initShuffleMove(element) {
        this.initShufflePlain(element);
        const wrapper = element.closest('.video-hover-wrapper');
        if (!wrapper) return;
        const inner = wrapper.querySelector('.video-hover-inner');
        if (!inner) return;
        if (this.initialized.has(wrapper)) return;
        this.initialized.add(wrapper);

        if (getComputedStyle(wrapper).position === 'static') {
            wrapper.style.position = 'relative';
        }
        wrapper.style.pointerEvents = 'auto';
        inner.style.position = 'absolute';
        inner.style.left = '50%';
        inner.style.top = '50%';
        inner.style.transform = 'translate(-50%, -50%)';
        inner.style.pointerEvents = 'none';

        let isHovering = false;
        let animationFrame = null;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const updatePosition = () => {
            if (!isHovering) {
                animationFrame = null;
                return;
            }

            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;

            inner.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;

            if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
                animationFrame = requestAnimationFrame(updatePosition);
            } else {
                animationFrame = null;
            }
        };

        wrapper.addEventListener('mouseenter', function(e) {
            isHovering = true;

            const r = wrapper.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;

            currentX = x;
            currentY = y;
            targetX = x;
            targetY = y;
            inner.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;

            if (animationFrame) cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(updatePosition);
        });

        wrapper.addEventListener('mousemove', function(e) {
            if (!isHovering) return;
            const r = wrapper.getBoundingClientRect();
            targetX = e.clientX - r.left - r.width / 2;
            targetY = e.clientY - r.top - r.height / 2;

            if (!animationFrame) {
                animationFrame = requestAnimationFrame(updatePosition);
            }
        });

        wrapper.addEventListener('mouseleave', function() {
            isHovering = false;

            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
        });
    },

    addHoverAnimationToSwiperSlides(swiper) {
        if (!swiper || !swiper.slides || !Array.isArray(swiper.slides)) return;

        swiper.slides.forEach(slide => {
            if (this.initialized.has(slide)) return;
            this.initialized.add(slide);

            slide.querySelectorAll('[data-shuffle-move]').forEach(el => {
                if (!this.initialized.has(el)) {
                    this.initShuffleMove(el);
                }
            });

            slide.querySelectorAll('[data-shuffle-plain]').forEach(el => {
                if (!this.initialized.has(el)) {
                    this.initShufflePlain(el);
                }
            });
        });
    },

    initBackgroundHoverBlock() {
        const hoverWrappers = document.querySelectorAll('.hover-wrapper');

        hoverWrappers.forEach(wrapper => {
            if (this.initialized.has(wrapper)) return;
            this.initialized.add(wrapper);

            const hoverBlock = wrapper.querySelector('.background-hover-block');
            if (!hoverBlock) return;

            const magnifiedImage = hoverBlock.querySelector('.magnified-image');
            if (!magnifiedImage) return;

            const hasPointer = window.matchMedia('(pointer: fine)').matches;
            if (!hasPointer) return;

            let hoverTrigger = wrapper.querySelector('.hover-background');
            if (!hoverTrigger) {
                hoverTrigger = wrapper.closest('.hover-background');
            }
            if (!hoverTrigger) {
                hoverTrigger = wrapper;
            }

            if (getComputedStyle(wrapper).position === 'static') {
                wrapper.style.position = 'relative';
            }
            wrapper.style.overflow = 'hidden';

            hoverBlock.style.position = 'absolute';
            hoverBlock.style.overflow = 'hidden';
            hoverBlock.style.opacity = '0';
            hoverBlock.style.pointerEvents = 'none';
            hoverBlock.style.transition = 'opacity 0.4s cubic-bezier(0.75, 0, 0.25, 1)';

            magnifiedImage.style.position = 'absolute';
            magnifiedImage.style.objectFit = 'cover';

            let isHovering = false;
            let runAnimation = false;
            let animationFrame = null;
            let containerRect = null;
            const magnification = 1.15;
            const speed = 0.08;
            let mouse = { x: 0, y: 0 };
            let current = { x: 0, y: 0 };
            let target = { x: 0, y: 0 };

            const lerp = (start, end, factor) => start + (end - start) * factor;

            const animate = () => {
                if (!containerRect) {
                    animationFrame = null;
                    return;
                }

                current.x = lerp(current.x, target.x, speed);
                current.y = lerp(current.y, target.y, speed);

                const lensRect = hoverBlock.getBoundingClientRect();
                const lensWidth = lensRect.width;
                const lensHeight = lensRect.height;

                const relativeX = current.x - containerRect.left;
                const relativeY = current.y - containerRect.top;

                hoverBlock.style.left = `${relativeX - lensWidth / 2}px`;
                hoverBlock.style.top = `${relativeY - lensHeight / 2}px`;

                const percentX = relativeX / containerRect.width;
                const percentY = relativeY / containerRect.height;

                const imgWidth = containerRect.width * magnification;
                const imgHeight = containerRect.height * magnification;

                magnifiedImage.style.width = `${imgWidth}px`;
                magnifiedImage.style.height = `${imgHeight}px`;

                const offsetX = -percentX * imgWidth + lensWidth / 2;
                const offsetY = -percentY * imgHeight + lensHeight / 2;

                magnifiedImage.style.left = `${offsetX}px`;
                magnifiedImage.style.top = `${offsetY}px`;

                const distanceToTarget = Math.abs(current.x - target.x) + Math.abs(current.y - target.y);

                if (isHovering || distanceToTarget > 1) {
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    runAnimation = false;
                    animationFrame = null;
                }
            };

            const updateMousePosition = (e) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
                if (isHovering) {
                    target.x = mouse.x;
                    target.y = mouse.y;
                }
            };

            const initializeOnWrapper = (startFromCenter = true) => {
                containerRect = wrapper.getBoundingClientRect();

                const centerX = containerRect.left + containerRect.width / 2;
                const centerY = containerRect.top + containerRect.height / 2;

                if (startFromCenter && !runAnimation) {
                    current.x = centerX;
                    current.y = centerY;
                }

                target.x = mouse.x || centerX;
                target.y = mouse.y || centerY;

                runAnimation = true;
                if (!animationFrame) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            const wrapperRect = wrapper.getBoundingClientRect();
            const isInViewport = wrapperRect.top < window.innerHeight && wrapperRect.bottom > 0;

            if (isInViewport) {
                setTimeout(() => initializeOnWrapper(true), 100);
            }

            hoverTrigger.addEventListener('mouseenter', function(e) {
                isHovering = true;
                containerRect = wrapper.getBoundingClientRect();

                current.x = e.clientX;
                current.y = e.clientY;
                target.x = e.clientX;
                target.y = e.clientY;
                mouse.x = e.clientX;
                mouse.y = e.clientY;

                hoverBlock.style.opacity = '1';

                if (!runAnimation) {
                    runAnimation = true;
                    animationFrame = requestAnimationFrame(animate);
                }
            });

            hoverTrigger.addEventListener('mousemove', updateMousePosition);

            hoverTrigger.addEventListener('mouseleave', function(e) {
                if (e.relatedTarget && hoverTrigger.contains(e.relatedTarget)) {
                    return;
                }

                isHovering = false;
                hoverBlock.style.opacity = '0';

                runAnimation = false;
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                    animationFrame = null;
                }

                setTimeout(() => {
                    if (!isHovering && containerRect) {
                        const centerX = containerRect.left + containerRect.width / 2;
                        const centerY = containerRect.top + containerRect.height / 2;
                        current.x = centerX;
                        current.y = centerY;
                        target.x = centerX;
                        target.y = centerY;
                    }
                }, 400);
            });
        });
    },
		
    addHoverAnimationToListItem(item) {
        requestAnimationFrame(() => {
            const textElements = item.querySelectorAll('.name-medium .line, .text-abs, .text-mono');

            item.querySelectorAll('[data-shuffle-move]').forEach(el => {
                if (!this.initialized.has(el)) {
                    this.initShuffleMove(el);
                }
            });

            item.querySelectorAll('[data-shuffle-plain]').forEach(el => {
                if (!this.initialized.has(el)) {
                    this.initShufflePlain(el);
                }
            });
        });
    },

    addVideoExpandToListItem(listItem) {
        const videoWrapper = listItem.querySelector('.list-video-wrapper');
        if (videoWrapper) {
            const videoBlock = videoWrapper.querySelector('.list-video-block');
            const video = videoBlock?.querySelector('video');

            if (video) {
                if (!video.dataset.originalMuted) {
                    video.dataset.originalMuted = video.muted;
                }

                if (window.innerWidth > 991) {
                    listItem.addEventListener('mouseenter', () => {
                        const source = video.querySelector('source');
                        if (source) {
                            const dataSrc = source.getAttribute('data-src');
                            if (dataSrc && !source.src) {
                                source.src = dataSrc;
                                video.load();
                            }
                        }

                        if (video.paused && !ProjectApp.playerModule?.state?.activeVideo) {
                            video.play().catch(e => {});
                        }
                    });

                    listItem.addEventListener('mouseleave', () => {
                        if (!video.paused && !ProjectApp.playerModule?.state?.activeVideo) {
                            video.pause();
                            video.currentTime = 0;
                        }
                    });
                }
            }

            const clickHandler = (e) => {
                e.stopPropagation();

                if (window.innerWidth > 991) {
                    if (video) {
                        video.pause();
                        video.currentTime = 0;
                    }
                }

                if (ProjectApp.playerModule?.expandVideo) {
                    ProjectApp.playerModule.expandVideo(video, listItem);
                }
            };

            listItem.addEventListener('click', clickHandler);
        }
    },

    cleanupLinkHover() {
        ProjectApp.state.linkHoverState.items.forEach(r => {
            try {
                r.link.removeEventListener('mouseenter', r.onEnter);
                r.link.removeEventListener('mouseleave', r.onLeave);
                window.removeEventListener('resize', r.onResize);
            } catch(e) {}

            if (r.timeline) {
                r.timeline.kill();
            }

            r.duplicateChars.forEach(d => {
                if (d && d.parentNode) {
                    d.parentNode.removeChild(d);
                }
            });

            try {
                if (r.split && r.split.revert) {
                    r.split.revert();
                }
            } catch(e) {}
        });

        ProjectApp.state.linkHoverState.items = [];
        this.activeAnimations.clear();
        this.initialized = new WeakSet();
    }
};


// ═══ SCRIPT #9 (51456 chars) ═══

ProjectApp.playerModule = {
  state: {
     isFromList: false,
     isPlayerNavigation: false,
     activeVideo: null,
     activeVideoClone: null,
     activeImageClone: null,
     originalVideo: null,
     originalImage: null,
     originalWrapper: null,
     originalListItem: null,
       elements: null,
       fixedContainer: null,
       isUpdatingPosters: false,
       overlay: null,
       hidePreviewTimeout: null,
       loadingLoopTimeline: null,
       currentMainPoster: null,
       isTransitioning: false, 
       hasPlayedVideo: false,
       hasNavigated: false,
       navButtonsDisabled: false,
       savedVideoTime: 0,
       cursorPlay: {
         isVisible: false,
         animationFrame: null,
         targetX: 0,
         targetY: 0,
         currentX: 0,
         currentY: 0
        },
        isLoadingForPlay: false,
        playPauseCooldown: false,
        isAutoPlaying: false,
    		loadingAnimationTimeout: null,
        previewHoverDisabled: false,
        controlsHideTimeout: null,
    		controlsHidden: false,
    },

    el: {
        playerMask: null,
        videoSpacer: null,
        playerVideoWrap: null,
        playerBlock: null,
        backBtn: null,
        video: null,
        playBtn: null,
        muteBtn: null,
        fullscreenBtn: null,
        progressBlock: null,
        currentTimeEl: null,
        totalTimeEl: null,
        radialGradient: null,
        infoBtn: null,
        infoCloseBtn: null,
        popupWrapper: null,
        playBlock: null,
        loadingText: null
    },

    _hasGSAP: () => typeof window.gsap !== 'undefined',

    _hasSplitType() { return !this.state.limited && typeof SplitType !== 'undefined'; },

    _formatTime: (s) => !s || isNaN(s)
        ? '00:00'
        : `${Math.floor(s / 60).toString().padStart(2, '0')}:${Math.floor(s % 60).toString().padStart(2, '0')}`,

    _animateElement(el, pos) {
        if (!el) return;
        this._hasGSAP()
            ? gsap.to(el, { yPercent: pos, duration: 0.3, ease: "power2.out" })
            : (el.style.transform = `translateY(${pos}%)`);
    },

    _setElementPosition(el, yPercent) {
        if (!el) return;
        this._hasGSAP()
            ? gsap.set(el, { yPercent })
            : (el.style.transform = `translateY(${yPercent}%)`);
    },

    _setRadialGradientOpacity(opacity) {
        const radialGradient = this.el.radialGradient;
        if (!radialGradient) return;
        this._hasGSAP()
            ? gsap.to(radialGradient, { opacity, duration: 0.3 })
            : (radialGradient.style.opacity = opacity);
    },
    
    _showControls() {
        if (this.state.controlsHideTimeout) {
            clearTimeout(this.state.controlsHideTimeout);
            this.state.controlsHideTimeout = null;
        }

        if (!this.state.controlsHidden) return;
        this.state.controlsHidden = false;

        const elements = [
            document.querySelector('.content-navigation'),
            document.querySelector('.player-navigation'),
            document.querySelector('.player-els-wrapper'),
            document.querySelector('.navbar'),
            this.el.radialGradient
        ].filter(Boolean);

        if (this._hasGSAP()) {
            gsap.to(elements, { opacity: 1, duration: 0.3, ease: 'power2.out' });
        } else {
            elements.forEach(el => {
                el.style.transition = 'opacity 0.3s ease-out';
                el.style.opacity = '1';
            });
        }
    },

    _hideControls() {
        if (this.state.controlsHidden) return;
        this.state.controlsHidden = true;

        const elements = [
            document.querySelector('.content-navigation'),
            document.querySelector('.player-navigation'),
            document.querySelector('.player-els-wrapper'),
            document.querySelector('.navbar'),
            this.el.radialGradient
        ].filter(Boolean);

        if (this._hasGSAP()) {
            gsap.to(elements, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        } else {
            elements.forEach(el => {
                el.style.transition = 'opacity 0.3s ease-out';
                el.style.opacity = '0';
            });
        }
    },

    _startControlsHideTimer() {
        if (this.state.controlsHideTimeout) {
            clearTimeout(this.state.controlsHideTimeout);
        }

        this.state.controlsHideTimeout = setTimeout(() => {
            if (this.el.playerMask?.classList.contains('is--full')) {
                this._hideControls();
            }
        }, 3000);
    },

    _resetControlsTimer() {
        this._showControls();
        this._startControlsHideTimer();
    },

    _startControlsHideTimer() {
        if (this.state.controlsHideTimeout) {
            clearTimeout(this.state.controlsHideTimeout);
        }

        this.state.controlsHideTimeout = setTimeout(() => {
            if (this.el.playerMask?.classList.contains('is--full')) {
                this._hideControls();
            }
        }, 3000);
    },

    _animatePlayerTextOut() {
        const playerTopInner = document.querySelector('.overflow-hidden .player-top-inner');
        const timelineBlock = document.querySelector('.overflow-hidden .player-timeline-block');

        if (this._hasGSAP()) {
            gsap.to([playerTopInner, timelineBlock].filter(Boolean), {
                yPercent: 100,
                duration: 0.6,
                ease: 'headingHoverEase'
            });
        } else {
            [playerTopInner, timelineBlock].forEach(el => {
                if (el) {
                    el.style.transition = 'transform 0.45s cubic-bezier(0.55, 0, 1, 0.45)';
                    el.style.transform = 'translateY(100%)';
                }
            });
        }
    },

    _animatePlayerTextIn() {
        const playerTopInner = document.querySelector('.overflow-hidden .player-top-inner');
        const timelineBlock = document.querySelector('.overflow-hidden .player-timeline-block');

        if (this._hasGSAP()) {
            gsap.to([playerTopInner, timelineBlock].filter(Boolean), {
                yPercent: 0,
                duration: 0.6,
                ease: 'headingHoverEase'
            });
        } else {
            [playerTopInner, timelineBlock].forEach(el => {
                if (el) {
                    el.style.transition = 'transform 0.9s cubic-bezier(0, 0.55, 0.45, 1)';
                    el.style.transform = 'translateY(0%)';
                }
            });
        }
    },

    _getTargetVideo() {
        const targetFromBlock = document.querySelector('.player-video-block.is--target .player-video');
        if (targetFromBlock) return targetFromBlock;

        if (this.el && this.el.video) {
            return this.el.video;
        }

        return document.querySelector('.player-video') || null;
    },

    _getPlayerLinkElement() {
        if (ProjectApp.swiperModule?.swiper) {
            const swiper = ProjectApp.swiperModule.swiper;
            const slides = ProjectApp.swiperModule._getOriginalSlides(swiper);
            const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);

            const activeSlide = slides.find(sl =>
                sl.getAttribute('data-swiper-slide-index') === String(currentIdx)
            );

            return activeSlide?.querySelector('.player-link') || null;
        }

        return null;
    },

    _loadAndAutoPlayVideo() {
        this.state.isAutoPlaying = true;
        this.state.hasPlayedVideo = true;
        this.state.savedVideoTime = 0;

        const targetVideo = this._getTargetVideo();
        const playerLink = this._getPlayerLinkElement();

        if (!targetVideo || !playerLink) {
            this.state.isAutoPlaying = false;
            return;
        }

        const newSrc = playerLink.href || playerLink.getAttribute('href') || '';
        const videoSource = targetVideo.querySelector('source');

        if (!newSrc || !videoSource) {
            this.state.isAutoPlaying = false;
            return;
        }

        this._setupAllPreviewVideos();

        this.state.isLoadingForPlay = true;
        targetVideo.pause();
        targetVideo.currentTime = 0;
        videoSource.src = newSrc;
        targetVideo.load();

        if (this.state.loadingAnimationTimeout) {
            clearTimeout(this.state.loadingAnimationTimeout);
        }
        this.state.loadingAnimationTimeout = setTimeout(() => {
            if (this.state.isLoadingForPlay) {
                this.showLoadingAnimation();
            }
        }, 500);

        const onVideoReady = () => {
            if (this.state.loadingAnimationTimeout) {
                clearTimeout(this.state.loadingAnimationTimeout);
                this.state.loadingAnimationTimeout = null;
            }

            this.state.isLoadingForPlay = false;
            this.hideLoadingAnimation();

            targetVideo.play().then(() => {
                this.hideMainPoster();
                this.state.isAutoPlaying = false;

                const playBtnInner = this.el?.playBtn?.querySelector('.player-button-inner');
                if (playBtnInner) this._animateElement(playBtnInner, 100);
            }).catch(() => {
                this.state.isAutoPlaying = false;
            });
        };

        const onVideoError = () => {
            if (this.state.loadingAnimationTimeout) {
                clearTimeout(this.state.loadingAnimationTimeout);
                this.state.loadingAnimationTimeout = null;
            }
            this.state.isLoadingForPlay = false;
            this.state.isAutoPlaying = false;
            this.hideLoadingAnimation();
        };

        targetVideo.addEventListener('canplay', onVideoReady, { once: true });
        targetVideo.addEventListener('error', onVideoError, { once: true });

        this.updateTotalTimeFromActiveSlide();
    },

    _enterPlayerCommon({ fromList = false, listItem = null, autoPlay = false } = {}) {
        const playerMask = this.el.playerMask || document.querySelector('.player-mask');
        if (!playerMask) return;
        
        const allPlayerVideos = document.querySelectorAll('.player-video');
        allPlayerVideos.forEach(v => {
            v.style.objectFit = 'contain';
        });

        this.state.isFromList = !!fromList;
        this.state.originalListItem = fromList ? listItem : null;
        this.state.isPlayerNavigation = false;
        this.state.isTransitioning = false;
        this.state.hasNavigated = false;
        this.state.hasPlayedVideo = autoPlay;

        this._stopAllBackgroundVideos(false);

        playerMask.classList.add('is--full');
        playerMask.classList.add('is--large');

        const footer = document.querySelector('.footer');
        const bgDecor = document.querySelector('.background-decor');
        if (footer) footer.style.opacity = '0';
        if (bgDecor) bgDecor.style.opacity = '0';

        const videoBlocks = document.querySelectorAll('.player-video-block');
        videoBlocks.forEach(block => block.classList.add('is--full'));

        const playBlock = this.el.playBlock || document.querySelector('.play-block');
        if (playBlock) {
            playBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
            if (autoPlay) {
                playBlock.style.transform = 'translateY(110%)';
            } else {
                const delay = fromList ? 100 : 1350;
                setTimeout(() => {
                    playBlock.style.transform = 'translateY(0%)';
                }, delay);
            }
        }
    },

    getMainPoster: () => document.querySelector('.player-video-poster:not(.is--preview-left):not(.is--preview-right)'),

  	getLeftPreviewPoster: () => document.querySelector('.player-video-poster.is--preview-left'),

 		getRightPreviewPoster: () => document.querySelector('.player-video-poster.is--preview-right'),

    _setPreviewVideoSrc(posterEl, src) {
        if (!posterEl || !src) return;

        if (posterEl.getAttribute('preload') === 'none') {
            posterEl.setAttribute('preload', 'metadata');
        }

        const source = posterEl.querySelector('source');
        if (source) {
            source.setAttribute('data-src', src);
            source.src = src;
            posterEl.load();
        } else if (posterEl.tagName === 'VIDEO') {
            posterEl.setAttribute('data-src', src);
            posterEl.src = src;
            posterEl.load();
        }
    },

    _clearPreviewVideoSrc(posterEl) {
        if (!posterEl) return;
        posterEl.pause();
        posterEl.currentTime = 0;
        const source = posterEl.querySelector('source');
        if (source) {
            source.src = '';
            source.setAttribute('data-src', '');
        } else if (posterEl.tagName === 'VIDEO') {
            posterEl.src = '';
            posterEl.setAttribute('data-src', '');
        }
    },

    _getAdjacentPreviewSrcs() {
        const result = { prev: '', next: '' };

        const isFromList = this.state.isFromList && this.state.originalListItem;

        if (isFromList) {
            const currentListItem = this.state.originalListItem;
            const allProjectItems = Array.from(document.querySelectorAll('.project-item'));
            const currentIndex = allProjectItems.indexOf(currentListItem);
            if (currentIndex === -1) return result;

            const prevIndex = (currentIndex - 1 + allProjectItems.length) % allProjectItems.length;
            const nextIndex = (currentIndex + 1) % allProjectItems.length;

            const prevItem = allProjectItems[prevIndex];
            const nextItem = allProjectItems[nextIndex];

            const prevVideo = prevItem?.querySelector('.list-video:not(.is--top)');
            const nextVideo = nextItem?.querySelector('.list-video:not(.is--top)');

            result.prev = prevVideo?.src || prevVideo?.querySelector('source')?.src || '';
            result.next = nextVideo?.src || nextVideo?.querySelector('source')?.src || '';
        } else if (ProjectApp.swiperModule?.swiper) {
            const swiper = ProjectApp.swiperModule.swiper;
            const visibleIndices = ProjectApp.swiperModule._getVisibleIndices();
            const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);
            const currentPos = visibleIndices.indexOf(currentIdx);

            if (currentPos !== -1) {
                const prevPos = (currentPos - 1 + visibleIndices.length) % visibleIndices.length;
                const nextPos = (currentPos + 1) % visibleIndices.length;
                const prevIdx = visibleIndices[prevPos];
                const nextIdx = visibleIndices[nextPos];

                const slides = ProjectApp.swiperModule._getOriginalSlides(swiper);

                const prevSlide = slides.find(sl =>
                    sl.getAttribute('data-swiper-slide-index') === String(prevIdx)
                );
                const nextSlide = slides.find(sl =>
                    sl.getAttribute('data-swiper-slide-index') === String(nextIdx)
                );

                const prevVideoLink = prevSlide?.querySelector('.video-link');
                const nextVideoLink = nextSlide?.querySelector('.video-link');

                result.prev = prevVideoLink?.href || prevVideoLink?.getAttribute('href') || '';
                result.next = nextVideoLink?.href || nextVideoLink?.getAttribute('href') || '';
            }
        }

        return result;
    },

    _getCurrentPreviewSrc() {
        const isFromList = this.state.isFromList && this.state.originalListItem;

        if (isFromList) {
            const listVideo = this.state.originalListItem?.querySelector('.list-video:not(.is--top)');
            return listVideo?.src || listVideo?.querySelector('source')?.src || '';
        } else if (ProjectApp.swiperModule?.swiper) {
            const swiper = ProjectApp.swiperModule.swiper;
            const slides = ProjectApp.swiperModule._getOriginalSlides(swiper);
            const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);

            const activeSlide = slides.find(sl =>
                sl.getAttribute('data-swiper-slide-index') === String(currentIdx)
            );

            const videoLink = activeSlide?.querySelector('.video-link');
            return videoLink?.href || videoLink?.getAttribute('href') || '';
        }

        return '';
    },
    
    _scrollListToCurrentItem() {
        if (!this.state.isFromList || !this.state.originalListItem) return;

        const projectList = document.querySelector('.project-list');
        const item = this.state.originalListItem;

        if (!projectList || !item || !item.parentElement) return;

        const listRect = projectList.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        const margin = listRect.height * 0.2;
        const isVisible = itemRect.top >= listRect.top + margin && 
                          itemRect.bottom <= listRect.bottom - margin;

        if (isVisible) return;

        const itemRelativeTop = itemRect.top - listRect.top + projectList.scrollTop;
        const targetScroll = itemRelativeTop - (listRect.height / 2) + (itemRect.height / 2);

        projectList.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    },

    _setupAllPreviewVideos() {
        const mainPoster = this.getMainPoster();
        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();

        const currentSrc = this._getCurrentPreviewSrc();
        const adjacentSrcs = this._getAdjacentPreviewSrcs();

        if (mainPoster && currentSrc) {
            this._setPreviewVideoSrc(mainPoster, currentSrc);
            mainPoster.style.display = 'block';
            mainPoster.style.zIndex = '5';
            this.state.currentMainPoster = mainPoster;
        }

        if (leftPoster && adjacentSrcs.prev) {
            this._setPreviewVideoSrc(leftPoster, adjacentSrcs.prev);
        }

        if (rightPoster && adjacentSrcs.next) {
            this._setPreviewVideoSrc(rightPoster, adjacentSrcs.next);
        }
    },

    _setupAllPreviewVideosFromList(listItem) {
        const mainPoster = this.getMainPoster();
        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();

        const listVideo = listItem.querySelector('.list-video:not(.is--top)');
				const currentSrc = listVideo?.src || listVideo?.querySelector('source')?.src || '';

        const allProjectItems = Array.from(document.querySelectorAll('.project-item'));
        const currentIndex = allProjectItems.indexOf(listItem);

        let prevSrc = '';
        let nextSrc = '';

        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + allProjectItems.length) % allProjectItems.length;
            const nextIndex = (currentIndex + 1) % allProjectItems.length;

            const prevItem = allProjectItems[prevIndex];
            const nextItem = allProjectItems[nextIndex];

            const prevVideo = prevItem?.querySelector('.list-video:not(.is--top)');
            const nextVideo = nextItem?.querySelector('.list-video:not(.is--top)');

            prevSrc = prevVideo?.src || prevVideo?.querySelector('source')?.src || '';
            nextSrc = nextVideo?.src || nextVideo?.querySelector('source')?.src || '';
        }

        if (mainPoster && currentSrc) {
            this._setPreviewVideoSrc(mainPoster, currentSrc);
            mainPoster.style.display = 'block';
            mainPoster.style.zIndex = '5';
            this.state.currentMainPoster = mainPoster;
        }

        if (leftPoster && prevSrc) {
            this._setPreviewVideoSrc(leftPoster, prevSrc);
        }

        if (rightPoster && nextSrc) {
            this._setPreviewVideoSrc(rightPoster, nextSrc);
        }
    },

    _updatePreviewVideosAfterNavigation(direction) {
    const leftPoster = this.getLeftPreviewPoster();
    const rightPoster = this.getRightPreviewPoster();
    const mainPoster = this.getMainPoster();

    const adjacentSrcs = this._getAdjacentPreviewSrcs();
    const currentSrc = this._getCurrentPreviewSrc();

    if (mainPoster && currentSrc) {
        this._setPreviewVideoSrc(mainPoster, currentSrc);
    }

    [leftPoster, rightPoster].forEach(poster => {
        if (poster) {
            poster.style.transition = 'none';
            poster.classList.remove('is--visible');
            poster.style.zIndex = '1';
            poster.pause();
            poster.currentTime = 0;
            poster.offsetHeight;
        }
    });

    requestAnimationFrame(() => {
        [leftPoster, rightPoster].forEach(poster => {
            if (poster) poster.style.transition = '';
        });

        if (leftPoster && adjacentSrcs.prev) {
            this._setPreviewVideoSrc(leftPoster, adjacentSrcs.prev);
        }

        if (rightPoster && adjacentSrcs.next) {
            this._setPreviewVideoSrc(rightPoster, adjacentSrcs.next);
        }
    });
},

    _loadAndAutoPlayAfterNavigation() {
        this.state.hasPlayedVideo = true;

        const isMobile = window.innerWidth <= 991;

        if (!isMobile) {
            const mainPoster = this.getMainPoster();

            if (mainPoster) {
                mainPoster.style.display = 'block';
                mainPoster.style.zIndex = '5';
                this.state.currentMainPoster = mainPoster;

                mainPoster.currentTime = 0;
                mainPoster.play().catch(() => {});
            }
        }

        const targetVideo = this._getTargetVideo();
        if (!targetVideo) return;

        const videoSource = targetVideo.querySelector('source');
        if (!videoSource) return;

        let newSrc = '';
        const isFromList = this.state.isFromList && this.state.originalListItem;

        if (isFromList) {
            const listPlayerLink = this.state.originalListItem.querySelector('.list-player-link');
            newSrc = listPlayerLink?.href || listPlayerLink?.getAttribute('href') || '';
        } else {
            const playerLink = this._getPlayerLinkElement()
            newSrc = playerLink?.href || playerLink?.getAttribute('href') || '';
        }

        if (!newSrc) return;

        targetVideo.pause();
        targetVideo.currentTime = 0;
        videoSource.src = newSrc;
        targetVideo.load();

        const onVideoReady = () => {
            targetVideo.play().then(() => {
                this.hideMainPoster();

                const playBtnInner = this.el?.playBtn?.querySelector('.player-button-inner');
                if (playBtnInner) this._animateElement(playBtnInner, 100);

                const playBlock = this.el.playBlock || document.querySelector('.play-block');
                if (playBlock) {
                    playBlock.style.transform = 'translateY(110%)';
                }
            }).catch(() => {});
        };

        targetVideo.addEventListener('canplay', onVideoReady, { once: true });
    },

    _loadAndAutoPlayFromList(listItem) {
        this.state.isAutoPlaying = true;
        this.state.hasPlayedVideo = true;
        this.state.savedVideoTime = 0;
        
        const playBlock = document.querySelector('.play-block');
        if (playBlock) {
            playBlock.style.transform = 'translateY(110%)';
        }

        const targetVideo = this._getTargetVideo();
        const listPlayerLink = listItem.querySelector('.list-player-link');

        if (!targetVideo || !listPlayerLink) {
            this.state.isAutoPlaying = false;
            this._hideFixedContainer();
            return;
        }

        const newSrc = listPlayerLink.href || listPlayerLink.getAttribute('href') || '';
        const videoSource = targetVideo.querySelector('source');

        if (!newSrc || !videoSource) {
            this.state.isAutoPlaying = false;
            this._hideFixedContainer();
            return;
        }

        this.state.isLoadingForPlay = true;
        targetVideo.pause();
        targetVideo.currentTime = 0;
        videoSource.src = newSrc;
        targetVideo.load();

        if (this.state.loadingAnimationTimeout) {
            clearTimeout(this.state.loadingAnimationTimeout);
        }
        this.state.loadingAnimationTimeout = setTimeout(() => {
            if (this.state.isLoadingForPlay) {
                this.showLoadingAnimation();
            }
        }, 500);

        const onVideoReady = () => {
            if (this.state.loadingAnimationTimeout) {
                clearTimeout(this.state.loadingAnimationTimeout);
                this.state.loadingAnimationTimeout = null;
            }

            this.state.isLoadingForPlay = false;
            this.hideLoadingAnimation();

            targetVideo.play().then(() => {
                this.hideMainPoster();
                this.state.isAutoPlaying = false;

                const playBlock = document.querySelector('.play-block');
                if (playBlock) {
                    playBlock.style.transform = 'translateY(110%)';
                }

                const playBtnInner = this.el?.playBtn?.querySelector('.player-button-inner');
                if (playBtnInner) this._animateElement(playBtnInner, 100);
            }).catch(() => {
                this.state.isAutoPlaying = false;
            });
        };

        const onVideoError = () => {
            if (this.state.loadingAnimationTimeout) {
                clearTimeout(this.state.loadingAnimationTimeout);
                this.state.loadingAnimationTimeout = null;
            }
            this.state.isLoadingForPlay = false;
            this.state.isAutoPlaying = false;
            this.hideLoadingAnimation();
            this._hideFixedContainer();
        };

        targetVideo.addEventListener('canplay', onVideoReady, { once: true });
        targetVideo.addEventListener('error', onVideoError, { once: true });

        this.updateTotalTimeFromActiveSlide();
    },

    _hideFixedContainer() {
        if (this.state.fixedContainer && window.gsap) {
            gsap.to(this.state.fixedContainer, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        } else if (this.state.fixedContainer) {
            this.state.fixedContainer.style.opacity = '0';
            this.state.fixedContainer.style.pointerEvents = 'none';
        }
    },

    _setupAllPreviewVideos() {
        const mainPoster = this.getMainPoster();
        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();

        const currentSrc = this._getCurrentPreviewSrc();
        const adjacentSrcs = this._getAdjacentPreviewSrcs();

        if (mainPoster && currentSrc) {
            this._setPreviewVideoSrc(mainPoster, currentSrc);
            mainPoster.style.display = 'block';
            mainPoster.style.zIndex = '5';
            this.state.currentMainPoster = mainPoster;
        }

        if (leftPoster && adjacentSrcs.prev) {
            this._setPreviewVideoSrc(leftPoster, adjacentSrcs.prev);
        }

        if (rightPoster && adjacentSrcs.next) {
            this._setPreviewVideoSrc(rightPoster, adjacentSrcs.next);
        }
    },

    _stopAllBackgroundVideos(resetTime = true) {
        const backgroundVideos = document.querySelectorAll('.background-project-video');
        backgroundVideos.forEach(video => {
            video.pause();
            if (resetTime) {
                video.currentTime = 0;
            }
        });

        const playerVideos = document.querySelectorAll('.player-video');
        playerVideos.forEach(video => {
            video.pause();
            if (resetTime) {
                video.currentTime = 0;
            }
        });
    },

    _ensurePlayerVideoMatchesActiveSlide() {
        if (!ProjectApp.swiperModule?.swiper) return;

        const swiper = ProjectApp.swiperModule.swiper;
        const slides = ProjectApp.swiperModule._getOriginalSlides(swiper);
        const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);

        const activeSlide = slides.find(sl =>
            sl.getAttribute('data-swiper-slide-index') === String(currentIdx)
        );

        if (!activeSlide) return;

        const playerLink = activeSlide.querySelector('.player-link');
        const videoLink = activeSlide.querySelector('.video-link');
        const highQualitySrc = playerLink?.href || playerLink?.getAttribute('href') || '';
        const previewSrc = videoLink?.href || videoLink?.getAttribute('href') || '';

        const targetBlock = document.querySelector('.player-video-block.is--target');
        const playerVideo = targetBlock?.querySelector('.player-video');
        const playerSource = playerVideo?.querySelector('source');

        if (playerSource && previewSrc) {
            const currentSrc = playerSource.src || '';
            const currentPath = currentSrc.split('/').pop();
            const newPath = previewSrc.split('/').pop();

            if (currentPath !== newPath) {
                playerVideo.pause();
                playerVideo.currentTime = 0;
                playerSource.src = previewSrc;
                playerVideo.load();

                this.el.video = playerVideo;
            }
        } else if (playerVideo) {
            this.el.video = playerVideo;
        }
    },

    _initCursorPlay() {
        const cursorPlay = document.querySelector('.cursor-block_play');
        if (!cursorPlay) return;
        cursorPlay.style.opacity = '0';
        cursorPlay.style.willChange = 'transform, opacity';
    },

    _updateCursorPosition() {
        const cursorPlay = document.querySelector('.cursor-block_play');
        if (!cursorPlay) return;

        const state = this.state.cursorPlay;

        if (!state.isVisible) {
            state.animationFrame = null;
            return;
        }

        state.currentX += (state.targetX - state.currentX) * 0.15;
        state.currentY += (state.targetY - state.currentY) * 0.15;

        cursorPlay.style.transform = `translate(calc(-50% + ${state.currentX}px), calc(-50% + ${state.currentY}px))`;

        state.animationFrame = requestAnimationFrame(() => this._updateCursorPosition());
    },

    _showCursorPlay() {
        const cursorPlay = document.querySelector('.cursor-block_play');
        if (!cursorPlay) return;

        this._initCursorPlay();

        if (this._hasGSAP()) {
            gsap.to(cursorPlay, { opacity: 1, duration: 0.3 });
        } else {
            cursorPlay.style.transition = 'opacity 0.3s ease';
            cursorPlay.style.opacity = '1';
        }

        if (!this.state.cursorPlay.animationFrame) {
            this.state.cursorPlay.animationFrame = requestAnimationFrame(() => this._updateCursorPosition());
        }
    },

    _hideCursorPlay() {
        const cursorPlay = document.querySelector('.cursor-block_play');
        if (!cursorPlay) return;

        this.state.cursorPlay.isVisible = false;

        if (this.state.cursorPlay.animationFrame) {
            cancelAnimationFrame(this.state.cursorPlay.animationFrame);
            this.state.cursorPlay.animationFrame = null;
        }

        if (this._hasGSAP()) {
            gsap.to(cursorPlay, { opacity: 0, duration: 0.3 });
        } else {
            cursorPlay.style.transition = 'opacity 0.3s ease';
            cursorPlay.style.opacity = '0';
        }
    },

    _ensureTargetBlockVisible() {
        const playerBlocks = document.querySelectorAll('.player-video-block');

        if (this._hasGSAP()) {
            playerBlocks.forEach(block => {
                gsap.killTweensOf(block);
                const video = block.querySelector('.player-video');
                if (video) gsap.killTweensOf(video);
            });
        }

        let blockWithSrc = null;
        let blockWithoutSrc = null;

        playerBlocks.forEach(block => {
            const video = block.querySelector('.player-video');
            const source = video?.querySelector('source');
            const hasSrc = source && source.src && source.src !== '' && !source.src.endsWith('/');

            if (hasSrc) {
                blockWithSrc = block;
            } else {
                blockWithoutSrc = block;
            }
        });

        let visibleBlock = blockWithSrc;
        let hiddenBlock = blockWithoutSrc;

        if (!visibleBlock || (blockWithSrc && blockWithoutSrc)) {
            visibleBlock = null;
            hiddenBlock = null;

            playerBlocks.forEach(block => {
                const zIndex = parseInt(block.style.zIndex) || 1;
                const clipPath = block.style.clipPath || '';
                const isVisible = zIndex >= 2 || clipPath.includes('0% 0%, 100% 0%');

                if (isVisible && !visibleBlock) {
                    visibleBlock = block;
                } else {
                    hiddenBlock = block;
                }
            });
        }

        playerBlocks.forEach(block => block.classList.remove('is--target'));

        if (visibleBlock) {
            visibleBlock.classList.add('is--target');
            visibleBlock.style.zIndex = '2';
            visibleBlock.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

            const video = visibleBlock.querySelector('.player-video');
            if (video) this.el.video = video;
        }

        if (hiddenBlock) {
            hiddenBlock.style.zIndex = '1';
            hiddenBlock.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
        }
    },

    _syncBackgroundVideosToActiveSlide() {
        if (this.state.isFromList) return;
        if (!ProjectApp.swiperModule?.swiper) return;

        const swiper = ProjectApp.swiperModule.swiper;
        const slides = ProjectApp.swiperModule._getOriginalSlides(swiper);
        const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);

        const activeSlide = slides.find(sl =>
            sl.getAttribute('data-swiper-slide-index') === String(currentIdx)
        );

        const videoLink = activeSlide?.querySelector('.video-link');
        const activeUrl = videoLink?.href || videoLink?.getAttribute('href') || '';

        if (!activeUrl) return;

        const backgroundVideos = document.querySelectorAll('.background-project-video');
        const playerBlocks = document.querySelectorAll('.player-video-block');

        const resumeTime = this.state.savedVideoTime || 0;

        backgroundVideos.forEach((video, i) => {
            const source = video.querySelector('source');
            if (i === 0) {
                video.style.zIndex = '2';
                video.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                if (source && source.src !== activeUrl) {
                    source.src = activeUrl;
                    video.load();
                    video.addEventListener('loadedmetadata', () => {
                        video.currentTime = resumeTime;
                    }, { once: true });
                } else {
                    video.currentTime = resumeTime;
                }
                video.play().catch(() => {});
            } else {
                video.style.zIndex = '1';
                video.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
                video.pause();
                video.currentTime = 0;
            }
        });

        playerBlocks.forEach((block, i) => {
            const video = block.querySelector('.player-video');
            const source = video?.querySelector('source');

            if (i === 0) {
                block.style.zIndex = '2';
                block.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                if (video) {
                    video.style.clipPath = '';
                    video.loop = true;
                    video.muted = true;
                }

                if (source && source.src !== activeUrl) {
                    source.src = activeUrl;
                    video.load();
                    video.addEventListener('loadedmetadata', () => {
                        video.currentTime = resumeTime;
                    }, { once: true });
                } else if (video) {
                    video.currentTime = resumeTime;
                }
                video?.play().catch(() => {});
            } else {
                block.style.zIndex = '1';
                block.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
                if (video) video.style.clipPath = '';

                video?.pause();
                if (video) video.currentTime = 0;
            }
        });
    },

    _updatePlayerVideoFromListItem(listItem) {
        if (!listItem) return;

        const listPlayerLink = listItem.querySelector('.list-player-link');
        const highQualitySrc = listPlayerLink?.href || listPlayerLink?.getAttribute('href') || '';

        if (!highQualitySrc) return;

        const playerBlocks = document.querySelectorAll('.player-video-block');
        if (playerBlocks.length < 2) return;

        const block1 = playerBlocks[0];
        const block2 = playerBlocks[1];
        const video1 = block1.querySelector('.player-video');
        const video2 = block2.querySelector('.player-video');

        if (!video1 || !video2) return;

        const z1 = parseInt(block1.style.zIndex) || 2;
        const z2 = parseInt(block2.style.zIndex) || 1;

        const activeBlock = z1 > z2 ? block1 : block2;
        const transitionBlock = z1 > z2 ? block2 : block1;
        const activeVideo = z1 > z2 ? video1 : video2;
        const transitionVideo = z1 > z2 ? video2 : video1;
        const transitionSource = transitionVideo.querySelector('source');

        if (transitionSource) {
            transitionVideo.pause();
            transitionVideo.currentTime = 0;
            transitionVideo.setAttribute('preload', 'metadata');
            transitionVideo.removeAttribute('loop');
            transitionVideo.removeAttribute('autoplay');
            transitionVideo.muted = false;
            transitionSource.src = highQualitySrc;
            transitionVideo.load();

            transitionVideo.addEventListener('loadeddata', () => {
                transitionVideo.pause();
            }, { once: true });

            transitionBlock.style.zIndex = '3';
            transitionBlock.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

            if (this._hasGSAP()) {
                gsap.killTweensOf(transitionBlock);
                gsap.killTweensOf(activeBlock);

                gsap.to(transitionBlock, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    duration: 1.35,
                    ease: 'transitionEase',
                    onComplete: () => {
                       transitionBlock.style.zIndex = '2';
                       activeBlock.style.zIndex = '1';
                       activeBlock.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

                        playerBlocks.forEach(b => b.classList.remove('is--target'));
                        transitionBlock.classList.add('is--target');

                        activeVideo.pause();
                        activeVideo.currentTime = 0;

                        transitionVideo.pause();
                    }
                });
            } else {
                transitionBlock.style.transition = 'clip-path 1.35s cubic-bezier(0.75, 0.00, 0.00, 1.00)';
                transitionBlock.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

                setTimeout(() => {
                    transitionBlock.style.zIndex = '2';
                    activeBlock.style.zIndex = '1';
                    activeBlock.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

                    playerBlocks.forEach(b => b.classList.remove('is--target'));
                    transitionBlock.classList.add('is--target');

                    activeVideo.pause();
                    activeVideo.currentTime = 0;
                }, 1350);
            }
        }
    },

    showPreviewVideo(direction) {
    if (this.state.previewHoverDisabled || this.state.isTransitioning) return;

    if (this.state.hidePreviewTimeout) {
        clearTimeout(this.state.hidePreviewTimeout);
        this.state.hidePreviewTimeout = null;
    }

    const leftPoster = this.getLeftPreviewPoster();
    const rightPoster = this.getRightPreviewPoster();

    if (!leftPoster || !rightPoster) return;

    const [targetPoster, otherPoster] = direction === 'prev'
        ? [leftPoster, rightPoster]
        : [rightPoster, leftPoster];

    const source = targetPoster.querySelector('source');
    const hasSrc = source?.src && source.src !== '' && !source.src.endsWith('/');

    if (hasSrc) {
        targetPoster.style.display = 'block';
        targetPoster.classList.add('is--visible');
        targetPoster.currentTime = 0;
        targetPoster.play().catch(() => {});

        setTimeout(() => {
            if (!this.state.isTransitioning) {
                targetPoster.style.zIndex = '10';
            }
        }, 50);

        otherPoster.classList.remove('is--visible');
        otherPoster.style.zIndex = '1';
        otherPoster.pause();
    }
},

    hidePreviewVideo() {
        if (this.state.hidePreviewTimeout) clearTimeout(this.state.hidePreviewTimeout);

        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();

        [leftPoster, rightPoster].forEach(p => {
            if (p) {
                p.classList.remove('is--visible');
                p.pause();
            }
        });

        this.state.hidePreviewTimeout = setTimeout(() => {
            [leftPoster, rightPoster].forEach(p => {
                if (p) {
                    p.style.zIndex = '';
                    p.currentTime = 0;
                }
            });
        }, 1250);
    },

    hideMainPoster() {
        const mainPoster = this.getMainPoster();
        if (mainPoster) {
            mainPoster.style.display = 'none';
            mainPoster.pause();
            mainPoster.currentTime = 0;
            const source = mainPoster.querySelector('source');
            if (source) source.src = '';
        }

        if (this.state.currentMainPoster && this.state.currentMainPoster !== mainPoster) {
            this.state.currentMainPoster.style.display = 'none';
            this.state.currentMainPoster.pause();
            if (this.state.currentMainPoster.currentTime) {
                this.state.currentMainPoster.currentTime = 0;
            }
        }

        this.state.currentMainPoster = null;
    },

    transitionToNewVideo(direction, callback) {
        const mainPoster = this.getMainPoster();
        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();

        if (!mainPoster || !leftPoster || !rightPoster) {
            callback?.();
            return;
        }

        if (this.state.currentMainPoster) {
            this.state.currentMainPoster.style.display = 'none';
            this.state.currentMainPoster.src = '';
        }

        const previewPoster = direction === 'prev' ? leftPoster : rightPoster;
        const otherPreview = direction === 'prev' ? rightPoster : leftPoster;

        [leftPoster, rightPoster].forEach(p => p.classList.remove('is--visible'));

        setTimeout(() => {
            mainPoster.src = previewPoster.src || '';
            mainPoster.style.display = mainPoster.src ? 'block' : 'none';
            mainPoster.style.zIndex = '5';

            previewPoster.style.display = 'none';
            this.state.currentMainPoster = mainPoster;

            otherPreview.classList.remove('is--visible');

            callback?.();
        }, 1250);
    },

    cyclePostersForPrev(immediate = false) {
        const mainPoster = this.getMainPoster();
        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();

        if (!mainPoster || !leftPoster || !rightPoster) return;
				this.state.isUpdatingPosters = true;
        if (immediate) {
            leftPoster.classList.remove('is--visible', 'is--preview-left');
            rightPoster.classList.remove('is--visible', 'is--preview-right');

            setTimeout(() => {
                rightPoster.classList.add('is--preview-left');
                mainPoster.classList.add('is--preview-right');

                rightPoster.style.zIndex = '';
                mainPoster.style.zIndex = '';
                this.state.isUpdatingPosters = false;
            }, 1250);
        } else {
            leftPoster.classList.remove('is--visible');
            rightPoster.classList.remove('is--visible');

            setTimeout(() => {
                rightPoster.classList.remove('is--preview-right');
                leftPoster.classList.remove('is--preview-left');

                rightPoster.classList.add('is--preview-left');
                mainPoster.classList.add('is--preview-right');
                this.state.isUpdatingPosters = false;
            }, 1250);
        }
    },

    cyclePostersForNext(immediate = false) {
        const mainPoster = this.getMainPoster();
        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();

        if (!mainPoster || !leftPoster || !rightPoster) return;
				this.state.isUpdatingPosters = true;
        if (immediate) {
            leftPoster.classList.remove('is--visible', 'is--preview-left');
            rightPoster.classList.remove('is--visible', 'is--preview-right');

            setTimeout(() => {
                leftPoster.classList.add('is--preview-right');
                mainPoster.classList.add('is--preview-left');

                leftPoster.style.zIndex = '';
                mainPoster.style.zIndex = '';
                this.state.isUpdatingPosters = false;
            }, 1250);
        } else {
            leftPoster.classList.remove('is--visible');
            rightPoster.classList.remove('is--visible');

            setTimeout(() => {
                leftPoster.classList.remove('is--preview-left');
                rightPoster.classList.remove('is--preview-right');

                leftPoster.classList.add('is--preview-right');
                mainPoster.classList.add('is--preview-left');
                this.state.isUpdatingPosters = false;
            }, 1250);
        }
    },

    showLoadingAnimation() {
        const loadingText = this.el.loadingText;
        if (!loadingText) return;

        if (this._hasSplitType() && this._hasGSAP()) {
            loadingText.style.opacity = '1';

            let chars = loadingText.querySelectorAll('.char');
            if (!chars.length) {
                const split = new SplitType(loadingText, { types: 'chars' });
                chars = split.chars || [];
            }

            if (chars.length) {
                chars.forEach((char, index) => {
                    const fromBottom = index % 2 === 0;
                    gsap.set(char, { yPercent: fromBottom ? 100 : -100 });
                });

                const timeline = gsap.timeline();
                chars.forEach((char, index) => {
                    timeline.to(
                        char,
                        { yPercent: 0, duration: 0.5, ease: "power2.out" },
                        index * 0.1
                    );
                });

                setTimeout(() => {
                    this.startLoadingLoop(Array.from(chars));
                }, 1800);
            }
        } else if (loadingText) {
            loadingText.style.opacity = '1';
        }
    },

    hideLoadingAnimation() {
        if (this.state.loadingLoopTimeline) {
            this.state.loadingLoopTimeline.kill();
            this.state.loadingLoopTimeline = null;
        }

        const loadingText = this.el.loadingText;
        if (!loadingText) return;

        const duplicates = loadingText.querySelectorAll('.char');
        duplicates.forEach(dup => {
            if (dup.style.position === 'absolute') {
                dup.remove();
            }
        });

        if (this._hasGSAP()) {
            gsap.to(loadingText, { opacity: 0, duration: 0.3 });
        } else {
            loadingText.style.opacity = '0';
        }
    },

    startLoadingLoop(chars) {
        if (!chars || !chars.length || !this._hasGSAP()) return;

        if (this.state.loadingLoopTimeline) {
            this.state.loadingLoopTimeline.kill();
        }

        const loadingText = this.el.loadingText;
        if (!loadingText) return;

        this.state.loadingLoopTimeline = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.8
        });

        chars.forEach((char, index) => {
            const fromBottom = index % 2 === 0;
            this.state.loadingLoopTimeline.add(() => {
                const rect = char.getBoundingClientRect();
                const parentRect = loadingText.getBoundingClientRect();
                const charLeft = rect.left - parentRect.left;
                const charWidth = rect.width;

                const duplicate = char.cloneNode(true);
                duplicate.style.position = 'absolute';
                duplicate.style.left = charLeft + 'px';
                duplicate.style.top = '0';
                duplicate.style.width = charWidth + 'px';
                loadingText.appendChild(duplicate);

                gsap.set(duplicate, { yPercent: fromBottom ? 100 : -100 });
                gsap.to(char, {
                    yPercent: fromBottom ? -100 : 100,
                    duration: 0.5,
                    ease: "power2.out"
                });
                gsap.to(duplicate, {
                    yPercent: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(char, { yPercent: 0 });
                        if (duplicate.parentElement) {
                            duplicate.remove();
                        }
                    }
                });
            }, index * 0.5);
        });
    },

    checkVideoReadyState() {
        return this.el?.video?.readyState >= 3;
    },

    isVideoBufferedEnough() {
        const video = this.el?.video;
        return video?.buffered.length && video.buffered.end(0) - video.currentTime > 5;
    },

		_disableNavButtons(duration = 1400) {
        this.state.navButtonsDisabled = true;
        this.state.previewHoverDisabled = true;

        const prevBtn = document.querySelector('[data-prev]');
        const nextBtn = document.querySelector('[data-next]');

        if (prevBtn) prevBtn.style.pointerEvents = 'none';
        if (nextBtn) nextBtn.style.pointerEvents = 'none';

        setTimeout(() => {
            this.state.navButtonsDisabled = false;
            this.state.previewHoverDisabled = false;
            if (prevBtn) prevBtn.style.pointerEvents = '';
            if (nextBtn) nextBtn.style.pointerEvents = '';
        }, duration);
    }
};


// ═══ SCRIPT #10 (37977 chars) ═══

Object.assign(ProjectApp.playerModule, {
		playVideo() {
        if (this.state.isLoadingForPlay) {
            return;
        }
        this._resetControlsTimer();
        this.state.hasPlayedVideo = true;
        const playBlock = document.querySelector('.play-block');

        if (playBlock) {
            playBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
            playBlock.style.transform = 'translateY(110%)';
        }

        this.hideMainPoster();

        const targetVideo = this._getTargetVideo();

            let playerLink;
            let newSrc = '';

            if (this.state.isFromList && this.state.originalListItem) {
                playerLink = this.state.originalListItem.querySelector('.list-player-link');
                newSrc = playerLink?.href || playerLink?.getAttribute('href') || '';
            } else {
                playerLink = this._getPlayerLinkElement();
                newSrc = playerLink?.href || playerLink?.getAttribute('href') || '';
            }

            this.updateTotalTimeFromActiveSlide();

            if (newSrc && targetVideo) {
                const videoSource = targetVideo.querySelector('source');
                const currentSrc = videoSource?.src || '';

            const applySavedTime = () => {
                if (this.state.savedVideoTime > 0 && targetVideo.duration) {
                    targetVideo.currentTime = this.state.savedVideoTime;

                    const progress = (targetVideo.currentTime / targetVideo.duration) * 100;
                    if (this.el.progressBlock) this.el.progressBlock.style.width = `${progress}%`;
                    if (this.el.currentTimeEl) {
                        this.el.currentTimeEl.textContent = this._formatTime(targetVideo.currentTime);
                    }

                    this.state.savedVideoTime = 0;
                }
            };

            const listSrc = playerLink.dataset.listSrc;
            const isListPreview =
                this.state.isFromList &&
                listSrc &&
                currentSrc &&
                currentSrc.indexOf(listSrc) !== -1;

            if (isListPreview) {
                this.state.isLoadingForPlay = true;
                targetVideo.pause();
                targetVideo.currentTime = 0;
                videoSource.src = newSrc;
                this.showLoadingAnimation();
                targetVideo.load();

                const handlers = {};
                const cleanup = () => {
                    ['canplay', 'canplaythrough', 'error'].forEach(event =>
                        targetVideo.removeEventListener(event, handlers[event])
                    );
                };
                handlers.canplay = () => {
                    this.state.isLoadingForPlay = false;
                    cleanup();
                    this.hideLoadingAnimation();
                    applySavedTime();
                    targetVideo.play().catch(() => {});
                };
                handlers.canplaythrough = () => {
                    this.state.isLoadingForPlay = false;
                    cleanup();
                    this.hideLoadingAnimation();
                    applySavedTime();
                    targetVideo.play().catch(() => {});
                };
                handlers.error = () => {
                    this.state.isLoadingForPlay = false;
                    cleanup();
                    this.hideLoadingAnimation();
                };

                Object.entries(handlers).forEach(([event, handler]) =>
                    targetVideo.addEventListener(event, handler, { once: true })
                );
            } else if (videoSource && newSrc && videoSource.src !== newSrc) {
                this.state.isLoadingForPlay = true;
                targetVideo.pause();
                targetVideo.currentTime = 0;
                videoSource.src = newSrc;
                this.showLoadingAnimation();
                targetVideo.load();
                targetVideo.addEventListener('canplay', () => {
                    this.state.isLoadingForPlay = false;
                    this.hideLoadingAnimation();
                    applySavedTime();
                    targetVideo.play().catch(() => {});
                }, { once: true });
            } else if (!this.checkVideoReadyState()) {
                this.state.isLoadingForPlay = true;
                this.showLoadingAnimation();
                targetVideo.addEventListener('canplay', () => {
                    this.state.isLoadingForPlay = false;
                    this.hideLoadingAnimation();
                    applySavedTime();
                    targetVideo.play().catch(() => {});
                }, { once: true });
                targetVideo.load();
            } else {
                applySavedTime();
                targetVideo.play().catch(() => {});
            }
        } else if (targetVideo) {
            if (this.state.savedVideoTime > 0) {
                targetVideo.currentTime = this.state.savedVideoTime;
                this.state.savedVideoTime = 0;
            }
            targetVideo.play().catch(() => {});
        }

        const playBtnInner = this.el?.playBtn?.querySelector('.player-button-inner');
        if (playBtnInner) this._animateElement(playBtnInner, 100);
    },

    pauseVideo() {
        const targetVideo = this._getTargetVideo();
        if (targetVideo) {
            targetVideo.pause();
        }

        this._resetControlsTimer();

        const playBlock = document.querySelector('.play-block');
        if (playBlock && this.el?.playerMask?.classList.contains('is--full')) {
            playBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
            playBlock.style.transform = 'translateY(0%)';
        }

        const playBtnInner = this.el?.playBtn?.querySelector('.player-button-inner');
        if (playBtnInner) this._animateElement(playBtnInner, 0);
    },

		initLoopMode() {
        const video = this.el?.video;
        if (!video) return;

        ['loop', 'muted'].forEach(attr => video.setAttribute(attr, ''));
        video.muted = true;
        video.currentTime = 0;

        const { progressBlock, currentTimeEl, totalTimeEl, playBtn, muteBtn } = this.el;
        if (progressBlock) progressBlock.style.width = '0%';
        [currentTimeEl, totalTimeEl].forEach(el => el && (el.textContent = '00:00'));

        const playBtnInner = playBtn?.querySelector('.player-button-inner');
        const muteBtnInner = muteBtn?.querySelector('.player-button-inner');
        if (playBtnInner) this._setElementPosition(playBtnInner, 0);
        if (muteBtnInner) this._setElementPosition(muteBtnInner, 100);

        video.load();

        if (!this.el.playerMask?.classList.contains('is--full')) {
            video.play().catch(() => {});
        }
    },

    initPlayerMode() {
        const backgroundVideos = document.querySelectorAll('.background-project-video');

        backgroundVideos.forEach(bgVideo => {
            const source = bgVideo.querySelector('source');
            const hasSrc = source && source.src && source.src !== '';

            if (hasSrc && !bgVideo.paused && bgVideo.currentTime > 0) {
                this.state.savedVideoTime = bgVideo.currentTime;
            }
        });

        if (this.state.savedVideoTime === 0) {
            const playerVideos = document.querySelectorAll('.player-video');
            playerVideos.forEach(pVideo => {
                const source = pVideo.querySelector('source');
                const hasSrc = source && source.src && source.src !== '';

                if (hasSrc && !pVideo.paused && pVideo.currentTime > 0) {
                    this.state.savedVideoTime = pVideo.currentTime;
                }
            });
        }

        this._stopAllBackgroundVideos(false);

        const playerBlocks = document.querySelectorAll('.player-video-block');
        if (this._hasGSAP()) {
            playerBlocks.forEach(block => {
                gsap.killTweensOf(block);
                const video = block.querySelector('.player-video');
                if (video) gsap.killTweensOf(video);
            });
        }

        let visibleBlock = null;
        let hiddenBlock = null;

        playerBlocks.forEach(block => {
            const zIndex = parseInt(block.style.zIndex) || 1;
            const clipPath = block.style.clipPath || '';

            const isVisible = zIndex >= 2 || clipPath.includes('0% 0%, 100% 0%');

            if (isVisible && !visibleBlock) {
                visibleBlock = block;
            } else {
                hiddenBlock = block;
            }
        });

        playerBlocks.forEach(block => block.classList.remove('is--target'));

        if (visibleBlock) {
            visibleBlock.classList.add('is--target');
            visibleBlock.style.zIndex = '2';
            visibleBlock.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
        }

        if (hiddenBlock) {
            hiddenBlock.style.zIndex = '1';
            hiddenBlock.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
        }

        this._ensurePlayerVideoMatchesActiveSlide();

        const video = this.el?.video;
        if (!video) return;

        ['loop', 'muted'].forEach(attr => video.removeAttribute(attr));
        video.muted = false;
        video.pause();
        video.setAttribute('preload', 'metadata');

        const { progressBlock, currentTimeEl, totalTimeEl, playBtn, muteBtn } = this.el;

        if (progressBlock) progressBlock.style.width = '0%';
        if (currentTimeEl) currentTimeEl.textContent = '00:00';
        if (totalTimeEl) totalTimeEl.textContent = '00:00';

        video.currentTime = 0;

        [playBtn, muteBtn].forEach(btn => {
            const btnInner = btn?.querySelector('.player-button-inner');
            if (btnInner) this._setElementPosition(btnInner, 0);
        });

        const setSavedTime = () => {
            if (this.state.savedVideoTime > 0 && video.duration) {
                video.currentTime = this.state.savedVideoTime;
            } else {
                video.currentTime = 0;
            }

            if (progressBlock) progressBlock.style.width = '0%';
            if (currentTimeEl) currentTimeEl.textContent = '00:00';
        };

        if (video.readyState >= 1 && video.duration) {
            setSavedTime();
        } else {
            video.addEventListener('loadedmetadata', setSavedTime, { once: true });
        }

        [playBtn, muteBtn].forEach(btn => {
            const btnInner = btn?.querySelector('.player-button-inner');
            if (btnInner) this._setElementPosition(btnInner, 0);
        });

        const targetVideo = this._getTargetVideo();
        if (targetVideo) {
            targetVideo.pause();
            this.el.video = targetVideo;
        }
    },

    updateTotalTimeFromActiveSlide() {
        let videoHref = '';

        if (this.state.isFromList && this.state.originalListItem) {
            const listPlayerLink = this.state.originalListItem.querySelector('.list-player-link');
            videoHref = listPlayerLink?.href || listPlayerLink?.getAttribute('href') || '';
        } else {
            const playerLink = this._getPlayerLinkElement();
            videoHref = playerLink?.href || playerLink?.getAttribute('href') || '';
        }

        if (!videoHref) return;

        const tempVideo = document.createElement('video');
        tempVideo.src = videoHref;

        tempVideo.addEventListener('loadedmetadata', () => {
            if (this.el?.totalTimeEl && tempVideo.duration) {
                this.el.totalTimeEl.textContent = this._formatTime(tempVideo.duration);
            }
            tempVideo.remove();
        });

        tempVideo.load();
    },

    transferContentFromActiveSlide() {
        const activeSlide = ProjectApp.swiperModule?.swiper?.slides[ProjectApp.swiperModule.swiper.activeIndex];
        if (!activeSlide) return;

        const nameFromEls = activeSlide.querySelectorAll('[data-name-from]');
        const nameToEls = document.querySelectorAll('[data-name-to]');
        if (nameFromEls.length && nameToEls.length) {
            const combinedName = nameFromEls.length >= 2
            ? `${nameFromEls[0].textContent.trim()}: ${nameFromEls[1].textContent.trim()}`
            : nameFromEls[0].textContent.trim();
            nameToEls.forEach((el, index) => {
                el.innerHTML = '';
                el.textContent = combinedName;
            });
        }

        const infoFrom = activeSlide.querySelector('[data-info-from]');
        const infoTo = document.querySelector('[data-info-to]');
        if (infoFrom && infoTo) infoTo.innerHTML = infoFrom.innerHTML;

        const categoryFrom = activeSlide.querySelector('[data-category-from]');
        const categoryToEls = document.querySelectorAll('[data-category-to]');
        if (categoryFrom && categoryToEls.length) {
            categoryToEls.forEach(el => el.textContent = categoryFrom.textContent.trim());
            const infoBtn = document.querySelector('[data-info]');
            if (infoBtn) {
                const categoryText = categoryFrom.textContent.trim().toLowerCase();
                infoBtn.style.display = ['tv & film', 'tv film', 'tv-film'].includes(categoryText) ? '' : 'none';
            }
        }

        const typeFrom = activeSlide.querySelector('[data-type-from]');
        const typeToEls = document.querySelectorAll('[data-type-to]');
        if (typeFrom && typeToEls.length > 0) {
            typeToEls.forEach(el => {
                el.textContent = typeFrom.textContent.trim();
            });
        }
        if (ProjectApp.textStyling?.italicizeFirstLetters) {
            ProjectApp.textStyling.italicizeFirstLetters(['.player-top-inner .name-large'], { lettersOnly: true });
        }
        
        const positionFrom = activeSlide.querySelector('[data-position-from]');
        const positionTo = document.querySelector('[data-position-to]');
        if (positionFrom && positionTo) {
            positionTo.textContent = positionFrom.textContent.trim();
        }

        const subFrom = activeSlide.querySelector('[data-sub-from]');
        const subTo = document.querySelector('[data-sub-to]');
        if (subFrom && subTo) {
            subTo.textContent = subFrom.textContent.trim();
        }
    },

    transferContentFromListItem: function(listItem) {
        const nameFromEls = listItem.querySelectorAll('[data-name-from]');
        const nameToEls = document.querySelectorAll('[data-name-to]');
        if (nameFromEls.length > 0 && nameToEls.length > 0) {
            const combinedName = nameFromEls.length >= 2
            ? `${nameFromEls[0].textContent.trim()}: ${nameFromEls[1].textContent.trim()}`
            : nameFromEls[0].textContent.trim();
            nameToEls.forEach((el, index) => {
                el.innerHTML = '';
                el.textContent = combinedName;
            });
        }

        const infoFrom = listItem.querySelector('[data-info-from]');
        const infoTo = document.querySelector('[data-info-to]');
        if (infoFrom && infoTo) {
            infoTo.innerHTML = infoFrom.innerHTML;
        }

        const categoryFrom = listItem.querySelector('[data-category-from]');
        const categoryToEls = document.querySelectorAll('[data-category-to]');
        if (categoryFrom && categoryToEls.length > 0) {
            categoryToEls.forEach(el => {
                el.textContent = categoryFrom.textContent.trim();
            });

            const infoBtn = document.querySelector('[data-info]');
            if (infoBtn) {
                const categoryText = categoryFrom.textContent.trim().toLowerCase();
                if (categoryText === 'tv & film' || categoryText === 'tv film' || categoryText === 'tv-film') {
                    infoBtn.style.display = '';
                } else {
                    infoBtn.style.display = 'none';
                }
            }
        }

        const typeFrom = listItem.querySelector('[data-type-from]');
        const typeToEls = document.querySelectorAll('[data-type-to]');
        if (typeFrom && typeToEls.length > 0) {
            typeToEls.forEach(el => {
                el.textContent = typeFrom.textContent.trim();
            });
        }

        const positionFrom = listItem.querySelector('[data-position-from]');
        const positionTo = document.querySelector('[data-position-to]');
        if (positionFrom && positionTo) {
            positionTo.textContent = positionFrom.textContent.trim();
        }

        const subFrom = listItem.querySelector('[data-sub-from]');
        const subTo = document.querySelector('[data-sub-to]');
        if (subFrom && subTo) {
            subTo.textContent = subFrom.textContent.trim();
        }

        if (ProjectApp.textStyling?.italicizeFirstLetters) {
            ProjectApp.textStyling.italicizeFirstLetters(['.player-top-inner .name-large'], { lettersOnly: true });
        }
    },

    updateContentForNewVideo() {
        const isFromList = this.state.isFromList && this.state.originalListItem;

        if (isFromList && this.state.originalListItem) {
            this.transferContentFromListItem(this.state.originalListItem);
        } else {
            this.transferContentFromActiveSlide();
        }

        this.updatePlayerLinkFromContext();
        this.updateTotalTimeFromActiveSlide();

        const playBtnInner = this.el?.playBtn?.querySelector('.player-button-inner');
        if (playBtnInner) this._setElementPosition(playBtnInner, 0);
    },

    updatePlayerLinkFromContext() {
        let newVideoSrc = '';

        const isFromList = this.state.isFromList && this.state.originalListItem;
        if (isFromList) {
            const currentListItem = this.state.originalListItem;
            const listPlayerLink = currentListItem?.querySelector('.list-player-link');
            newVideoSrc = listPlayerLink?.href || listPlayerLink?.getAttribute('href') || '';
        } else if (ProjectApp.swiperModule?.swiper) {
            const swiper = ProjectApp.swiperModule.swiper;
            const slides = ProjectApp.swiperModule._getOriginalSlides(swiper);
            const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);

            const activeSlide = slides.find(sl =>
                sl.getAttribute('data-swiper-slide-index') === String(currentIdx)
            );
            const playerLink = activeSlide?.querySelector('.player-link');
            newVideoSrc = playerLink?.href || playerLink?.getAttribute('href') || '';
        }

        if (!newVideoSrc) return;

        const playerLink = this._getPlayerLinkElement()
        if (playerLink) playerLink.href = newVideoSrc;

        if (ProjectApp.swiperModule?.updateBackgroundProjectVideos) {
            ProjectApp.swiperModule.updateBackgroundProjectVideos(
                { href: newVideoSrc },
                null,
                null,
                'next'
            );
        }
    },

    _stopCurrentVideo(resetImmediately = false) {
    const targetVideo = this._getTargetVideo();
    if (targetVideo) {
        targetVideo.pause();
        targetVideo.oncanplay = null;
        if (resetImmediately) {
            targetVideo.currentTime = 0;
        }
    }
    
    if (window.innerWidth >= 992) {
        const playBtnInner = this.el?.playBtn?.querySelector('.player-button-inner');
        if (playBtnInner) this._setElementPosition(playBtnInner, 0);
        
        const playBlock = document.querySelector('.play-block');
        if (playBlock) {
            playBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
            playBlock.style.transform = 'translateY(0%)';
        }
    }
    
    return targetVideo;
},

    _resetVideoAfterTransition(video, delay = 1000) {
        setTimeout(() => {
            if (video) {
                video.pause();
                video.currentTime = 0;
                if (this.el.progressBlock) this.el.progressBlock.style.width = '0%';
                if (this.el.currentTimeEl) this.el.currentTimeEl.textContent = '00:00';
            }
            this.state.isTransitioning = false;
        }, delay);
    },

    _ensurePreviewReady(direction) {
    const leftPoster = this.getLeftPreviewPoster();
    const rightPoster = this.getRightPreviewPoster();
    const mainPoster = this.getMainPoster();

    if (!leftPoster || !rightPoster) return;

    const targetPoster = direction === 'prev' ? leftPoster : rightPoster;
    const otherPoster = direction === 'prev' ? rightPoster : leftPoster;

    otherPoster.style.transition = 'none';
    otherPoster.classList.remove('is--visible');
    otherPoster.style.zIndex = '1';
    otherPoster.pause();
    otherPoster.currentTime = 0;
    otherPoster.offsetHeight;
    
    requestAnimationFrame(() => {
        otherPoster.style.transition = '';
    });

    targetPoster.style.zIndex = '10';
    targetPoster.style.display = 'block';
    targetPoster.classList.add('is--visible');
    targetPoster.currentTime = 0;
    targetPoster.play().catch(() => {});

    this.state.hasNavigated = true;
},
    navigatePrev() {
        if (this.state.isTransitioning || this.state.navButtonsDisabled) return;
        this.state.isTransitioning = true;

        this._disableNavButtons(1400);

        this.state.hasPlayedVideo = false;

        this._animatePlayerTextOut();

        const currentVideo = this._stopCurrentVideo(false);

        const isMobile = window.innerWidth <= 991;

        if (!isMobile) {
            this._ensurePreviewReady('prev');
            this.cyclePostersForPrev(true);
        }

        const isFromList = this.state.isFromList && this.state.originalListItem;

        if (isFromList) {
            const currentListItem = this.state.originalListItem;
            const allProjectItems = Array.from(document.querySelectorAll('.project-item'));
            const currentIndex = allProjectItems.indexOf(currentListItem);

            const prevIndex = currentIndex <= 0 ? allProjectItems.length - 1 : currentIndex - 1;
            const prevItem = allProjectItems[prevIndex];

            this.state.originalListItem = prevItem;
            this.state.originalVideo = prevItem.querySelector('.list-video-block video.list-video:not(.is--top)');
						this._scrollListToCurrentItem();
            setTimeout(() => {
                this.updateContentForNewVideo();
                this._animatePlayerTextIn();
                if (!isMobile) {
                    this._updatePreviewVideosAfterNavigation('prev');
                }
                this._loadAndAutoPlayAfterNavigation();
                this._resetVideoAfterTransition(currentVideo, 0);
            }, isMobile ? 0 : 1250);

        } else if (ProjectApp.swiperModule?.swiper) {
            this.state.isPlayerNavigation = true;

            const swiper = ProjectApp.swiperModule.swiper;
            const visibleIndices = ProjectApp.swiperModule._getVisibleIndices();
            if (!visibleIndices.length) {
                this.state.isPlayerNavigation = false;
                this.state.isTransitioning = false;
                return;
            }

            const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);
            const currentPos = visibleIndices.indexOf(currentIdx);
            const prevPos = (currentPos - 1 + visibleIndices.length) % visibleIndices.length;
            const prevIdx = visibleIndices[prevPos];

            swiper._lastDirection = 'prev';
            swiper.slideTo(prevIdx, 0);

            setTimeout(() => {
                if (ProjectApp.swiperModule?.updatePreviews) {
                    ProjectApp.swiperModule.updatePreviews(swiper, 'prev');
                }
                this.updateContentForNewVideo();
                this._animatePlayerTextIn();
                if (!isMobile) {
                    this._updatePreviewVideosAfterNavigation('prev');
                }
                this._loadAndAutoPlayAfterNavigation();
                this._resetVideoAfterTransition(currentVideo, 0);

                setTimeout(() => {
                    this.state.isPlayerNavigation = false;
                }, 100);
            }, isMobile ? 0 : 1250);
        }
    },

    navigateNext() {
        if (this.state.isTransitioning || this.state.navButtonsDisabled) return;
        this.state.isTransitioning = true;

        this._disableNavButtons(1400);

        this.state.hasPlayedVideo = false;
        this._animatePlayerTextOut();

        const currentVideo = this._stopCurrentVideo(false);

        const isMobile = window.innerWidth <= 991;

        if (!isMobile) {
            this._ensurePreviewReady('next');
            this.cyclePostersForNext(true);
        }

        const isFromList = this.state.isFromList && this.state.originalListItem;

        if (isFromList) {
            const currentListItem = this.state.originalListItem;
            const allProjectItems = Array.from(document.querySelectorAll('.project-item'));
            const currentIndex = allProjectItems.indexOf(currentListItem);

            const nextIndex = currentIndex >= allProjectItems.length - 1 ? 0 : currentIndex + 1;
            const nextItem = allProjectItems[nextIndex];

            this.state.originalListItem = nextItem;
            this.state.originalVideo = nextItem.querySelector('.list-video-block video.list-video:not(.is--top)');
						this._scrollListToCurrentItem();
            setTimeout(() => {
                this.updateContentForNewVideo();
                this._animatePlayerTextIn();
                if (!isMobile) {
                    this._updatePreviewVideosAfterNavigation('next');
                }
                this._loadAndAutoPlayAfterNavigation();
                this._resetVideoAfterTransition(currentVideo, 0);
            }, isMobile ? 0 : 1250);

        } else if (ProjectApp.swiperModule?.swiper) {
            this.state.isPlayerNavigation = true;

            const swiper = ProjectApp.swiperModule.swiper;
            const visibleIndices = ProjectApp.swiperModule._getVisibleIndices();
            if (!visibleIndices.length) {
                this.state.isPlayerNavigation = false;
                this.state.isTransitioning = false;
                return;
            }

            const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(swiper);
            const currentPos = visibleIndices.indexOf(currentIdx);
            const nextPos = (currentPos + 1) % visibleIndices.length;
            const nextIdx = visibleIndices[nextPos];

            swiper._lastDirection = 'next';
            swiper.slideTo(nextIdx, 0);

            setTimeout(() => {
                if (ProjectApp.swiperModule?.updatePreviews) {
                    ProjectApp.swiperModule.updatePreviews(swiper, 'next');
                }
                this.updateContentForNewVideo();
                this._animatePlayerTextIn();
                if (!isMobile) {
                    this._updatePreviewVideosAfterNavigation('next');
                }
                this._loadAndAutoPlayAfterNavigation();
                this._resetVideoAfterTransition(currentVideo, 0);

                setTimeout(() => {
                    this.state.isPlayerNavigation = false;
                }, 100);
            }, isMobile ? 0 : 1250);
        }
    },

    performPrevTransition() {
        this.transitionToNewVideo('prev', () => {
            const swiper = ProjectApp.swiperModule?.swiper;
            if (!swiper) return;

            const prevLogicalSlide = document.querySelector('.swiper-slide.is--prev-logical');
            if (prevLogicalSlide) {
                const prevIndex = Array.from(swiper.slides).indexOf(prevLogicalSlide);
                if (prevIndex !== -1) swiper.slideTo(prevIndex, 0);
            } else {
                swiper.slidePrev(0);
            }

            setTimeout(() => {
                if (ProjectApp.swiperModule?.updatePreviews) {
                    ProjectApp.swiperModule.updatePreviews(swiper, 'prev');
                }
                this.updateContentForNewVideo();
            }, 100);
        });
    },

    performNextTransition() {
        this.transitionToNewVideo('next', () => {
            const swiper = ProjectApp.swiperModule?.swiper;
            if (!swiper) return;

            swiper.slideNext(0);

            setTimeout(() => {
                if (ProjectApp.swiperModule?.updatePreviews) {
                    ProjectApp.swiperModule.updatePreviews(swiper, 'next');
                }
                this.updateContentForNewVideo();
            }, 100);
        });
    },

    initFixedContainer() {
        if (!this.state.fixedContainer) {
            this.state.fixedContainer = document.createElement('div');
            this.state.fixedContainer.className = 'video-fixed-container';
            document.body.appendChild(this.state.fixedContainer);
        }
    },

    expandVideo: function(video, listItem) {
        if (this.state.activeVideo || !listItem) {
            return;
        }

        const projectList = document.querySelector('.project-list');

        const listVideo = listItem.querySelector('.list-video-block video.list-video:not(.is--top)');
        if (!listVideo) {
            return;
        }

        const videoRect = listVideo.getBoundingClientRect();

        const playerMask = document.querySelector('.player-mask');
        if (playerMask) {
            playerMask.style.setProperty('--start-top', videoRect.top + 'px');
            playerMask.style.setProperty('--start-left', videoRect.left + 'px');
            playerMask.style.setProperty('--start-width', videoRect.width + 'px');
            playerMask.style.setProperty('--start-height', videoRect.height + 'px');
            playerMask.classList.add('is--from-list');
        }

        this.state.originalVideo = listVideo;
        this.state.activeVideo = listVideo;
        this.state.originalWrapper = listVideo.closest('.list-video-wrapper') || listVideo.closest('.list-video-block');
        this.state.originalListItem = listItem;

        if (projectList) {
            projectList.style.overflow = 'hidden';
        }

        this.initPlayerFromListItem(listItem);
    },

    initPlayerFromListItem: function(listItem) {
        if (!listItem) return;

        const playerMask = document.querySelector('.player-mask');
        if (!playerMask) return;

        this.initPlayerMode();

        this._enterPlayerCommon({ fromList: true, listItem, autoPlay: true });

        const allBlocks = document.querySelectorAll('.player-video-block');
        let targetPlayerVideoBlock = null;

        allBlocks.forEach((block, i) => {
            const video = block.querySelector('.player-video');

            if (this._hasGSAP()) {
                gsap.killTweensOf(block);
                if (video) gsap.killTweensOf(video);
            }

            if (video) {
                video.pause();
                video.currentTime = 0;
                const source = video.querySelector('source');
                if (source) {
                    source.src = '';
                }
            }

            if (i === 0) {
                block.classList.add('is--target');
                block.style.zIndex = '2';
                block.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                targetPlayerVideoBlock = block;
            } else {
                block.classList.remove('is--target');
                block.style.zIndex = '1';
                block.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
            }
        });

        targetPlayerVideoBlock?.classList.add('is--from-list');

        const listPlayerLink = listItem.querySelector('.list-player-link');

        if (listPlayerLink && targetPlayerVideoBlock) {
            const highQualitySrc = listPlayerLink.href || listPlayerLink.getAttribute('href') || '';

            const playerLink = document.querySelector('.player-link');
            if (playerLink) {
                playerLink.href = highQualitySrc;
            }

            const playerVideo = targetPlayerVideoBlock.querySelector('.player-video');
            if (playerVideo) {
                playerVideo.removeAttribute('loop');
                playerVideo.removeAttribute('muted');
                playerVideo.muted = false;
                playerVideo.currentTime = 0;

                this.el.video = playerVideo;
            }
        }

        this._setupAllPreviewVideosFromList(listItem);

        const { progressBlock, currentTimeEl, playBtn, muteBtn } = this.el;

        if (progressBlock) progressBlock.style.width = '0%';
        if (currentTimeEl) currentTimeEl.textContent = '00:00';

        const playBtnInner = playBtn?.querySelector('.player-button-inner');
        if (playBtnInner) this._setElementPosition(playBtnInner, 0);

        const muteBtnInner = muteBtn?.querySelector('.player-button-inner');
        if (muteBtnInner) this._setElementPosition(muteBtnInner, 0);

        this.transferContentFromListItem(listItem);
        this.updateTotalTimeFromActiveSlide();

        this._loadAndAutoPlayFromList(listItem);
    },

    closePlayer: function() {
        this.state.hasNavigated = false;
        this.state.hasPlayedVideo = false;
        this.state.savedVideoTime = 0;

        const playerMask = document.querySelector('.player-mask');
        const targetPlayerVideoBlock = document.querySelector('.player-video-block.is--target');
        const projectList = document.querySelector('.project-list');

        if (!this.state.activeVideo) {
            return;
        }

        if (targetPlayerVideoBlock) {
            targetPlayerVideoBlock.classList.remove('is--from-list');
        }

        const originalEl = this.state.originalVideo;
        if (originalEl && playerMask) {
            const targetRect = originalEl.getBoundingClientRect();
            playerMask.style.setProperty('--start-top', targetRect.top + 'px');
            playerMask.style.setProperty('--start-left', targetRect.left + 'px');
            playerMask.style.setProperty('--start-width', targetRect.width + 'px');
            playerMask.style.setProperty('--start-height', targetRect.height + 'px');
        }

        const mainPoster = this.getMainPoster();
        if (mainPoster) {
            mainPoster.style.display = 'none';
            mainPoster.pause?.();
            const source = mainPoster.querySelector('source');
            if (source) source.src = '';
        }
        this.state.currentMainPoster = null;

        const leftPoster = this.getLeftPreviewPoster();
        const rightPoster = this.getRightPreviewPoster();
        [leftPoster, rightPoster].forEach(poster => {
            if (poster) {
                poster.pause?.();
                poster.currentTime = 0;
                const source = poster.querySelector?.('source');
                if (source) source.src = '';
            }
        });

        const playBlock = document.querySelector('.play-block');
        if (playBlock) {
            playBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
            playBlock.style.transform = 'translateY(105%)';
        }

        if (playerMask) {
            playerMask.classList.add('is--closing');
        }

        setTimeout(() => {
            if (targetPlayerVideoBlock) {
                const playerVideo = targetPlayerVideoBlock.querySelector('.player-video');
                if (playerVideo) {
                    playerVideo.pause();
                    playerVideo.currentTime = 0;
                }
            }

            if (this.state.originalVideo) {
                if (window.gsap) {
                    gsap.set(this.state.originalVideo, { opacity: 1 });
                } else {
                    this.state.originalVideo.style.opacity = '1';
                }
                this.state.originalVideo.loop = true;
                this.state.originalVideo.muted = true;
                if (window.innerWidth > 991) {
                    this.state.originalVideo.play().catch(() => {});
                }
            }

            if (playerMask) {
                playerMask.classList.remove('is--full');
                playerMask.classList.remove('is--large');
                playerMask.classList.remove('is--from-list');
                playerMask.classList.remove('is--closing');
            }

            const footer = document.querySelector('.footer');
            const bgDecor = document.querySelector('.background-decor');
            if (footer) footer.style.opacity = '1';
            if (bgDecor) bgDecor.style.opacity = '1';

            if (projectList) {
                projectList.style.overflow = 'scroll';
            }

            document.querySelectorAll('.player-video-block').forEach(block => {
                block.classList.remove('is--full');
            });

            this.state.isFromList = false;
            this._cleanupExpandState();

            if (playerMask) {
                playerMask.style.display = 'none';

                setTimeout(() => {
                    playerMask.style.display = '';
                }, 1000);
            }
            
            const allPlayerVideos = document.querySelectorAll('.player-video');
            allPlayerVideos.forEach(v => {
                v.style.objectFit = 'cover';
            });

        }, 1250);
    },

    _cleanupExpandState() {
        this.state.activeVideo = null;
        this.state.activeVideoClone = null;
        this.state.activeImageClone = null;
        this.state.originalVideo = null;
        this.state.originalImage = null;
        this.state.originalWrapper = null;
        this.state.originalListItem = null;
    }
});


// ═══ SCRIPT #11 (23791 chars) ═══

Object.assign(ProjectApp.playerModule, {
		_attachEventListeners() {
        if (this._eventsAttached) {
            return;
        }
        this._eventsAttached = true;
        const {
            videoSpacer,
            backBtn,
            playBtn,
            muteBtn,
            fullscreenBtn,
            playerBlock,
            progressBlock,
            video,
            infoBtn,
            infoCloseBtn,
            popupWrapper,
            playerMask,
            playerVideoWrap
        } = this.el;

				videoSpacer?.addEventListener('click', () => {
            this.initPlayerMode();
            this.transferContentFromActiveSlide();
            this._enterPlayerCommon({ fromList: false, autoPlay: true });
            this._loadAndAutoPlayVideo();
        });

        backBtn?.addEventListener('click', () => {
            this.state.isPlayerNavigation = false;
            this.state.isTransitioning = false;
            this.state.hasNavigated = false;
            this.state.hasPlayedVideo = false;

            if (this.state.activeVideo) {
                this.closePlayer();
            } else {
            
            		const allPlayerVideos = document.querySelectorAll('.player-video');
                allPlayerVideos.forEach(v => {
                    v.style.objectFit = 'cover';
                });

                const playerVideo = document.querySelector('.player-video-block.is--target .player-video') || video;
                if (playerVideo && playerVideo.currentTime > 0) {
                    this.state.savedVideoTime = playerVideo.currentTime;
                }

                [playerMask].forEach(el => el && (el.classList.remove('is--full'), el.classList.remove('is--large')));
                playerVideo?.pause();
                this.initLoopMode();
                ['footer', 'background-decor'].forEach(sel => {
                    const el = document.querySelector(`.${sel}`);
                    if (el) el.style.opacity = '1';
                });
                setTimeout(() => {
                    document.querySelectorAll('.player-video-block').forEach(block => block.classList.remove('is--full'));
                }, 600);
                const playBlock = document.querySelector('.play-block');
                if (playBlock) {
                    playBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
                    playBlock.style.transform = 'translateY(105%)';
                }

                this._syncBackgroundVideosToActiveSlide();

                this.state.savedVideoTime = 0;

                setTimeout(() => {
                    if (ProjectApp.swiperModule?.swiper && ProjectApp.swiperModule.updatePreviews) {
                        ProjectApp.swiperModule.updatePreviews(ProjectApp.swiperModule.swiper, 'next');
                    }
                }, 700);
            }
        });

        const playBlock = document.querySelector('.play-block');
        [playBlock, playerBlock].forEach(block => {
            block?.addEventListener('click', (e) => {
                if (!playerMask?.classList.contains('is--full')) return;
                if (block === playerBlock && e.target.closest('[data-play], [data-mute], [data-fullscreen], [data-prev], [data-next], [data-info], .player-line-wrap, .play-block')) return;

                e.stopPropagation();

                if (this.state.playPauseCooldown || this.state.isLoadingForPlay) {
                    return;
                }

                const targetVideo = this._getTargetVideo();

                if (this.state.isLoadingForPlay) {
                    this.state.isLoadingForPlay = false;
                    this.pauseVideo();
                    return;
                }

                this.state.playPauseCooldown = true;
                setTimeout(() => { this.state.playPauseCooldown = false; }, 300);

                targetVideo?.paused ? this.playVideo() : this.pauseVideo();
            });
        });

        playBtn?.addEventListener('click', (e) => {
            e.stopPropagation();

    				if (this.state.playPauseCooldown || this.state.isLoadingForPlay) return;

            const targetVideo = this._getTargetVideo();

            this.state.playPauseCooldown = true;
            setTimeout(() => { this.state.playPauseCooldown = false; }, 300);

            targetVideo?.paused ? this.playVideo() : this.pauseVideo();
        });

       muteBtn?.addEventListener('click', () => {
    				const targetVideo = this._getTargetVideo();

            if (targetVideo) {
                targetVideo.muted = !targetVideo.muted;
                const muteBtnInner = muteBtn.querySelector('.player-button-inner');
                if (muteBtnInner) this._animateElement(muteBtnInner, targetVideo.muted ? 100 : 0);
            }
        });

        const [prevBtn, nextBtn] = ['[data-prev]', '[data-next]'].map(sel => document.querySelector(sel));

        if (prevBtn) {
            if (window.innerWidth > 991) {
                prevBtn.addEventListener('mouseenter', () => this.showPreviewVideo('prev'));
                prevBtn.addEventListener('mouseleave', () => this.hidePreviewVideo());
            }
            prevBtn.addEventListener('click', () => this.navigatePrev());
        }

        if (nextBtn) {
            if (window.innerWidth > 991) {
                nextBtn.addEventListener('mouseenter', () => this.showPreviewVideo('next'));
                nextBtn.addEventListener('mouseleave', () => this.hidePreviewVideo());
            }
            nextBtn.addEventListener('click', () => this.navigateNext());
        }

        fullscreenBtn?.addEventListener('click', () => {
            const playerWrap = document.querySelector('.player-video-wrap') || playerVideoWrap;
            const isFullscreen = !!document.fullscreenElement;
            const methods = isFullscreen
                ? ['exitFullscreen', 'webkitExitFullscreen', 'msExitFullscreen']
                : ['requestFullscreen', 'webkitRequestFullscreen', 'msRequestFullscreen'];
            const target = isFullscreen ? document : playerWrap;
            methods.find(method => target[method] && target[method]());
        });  

        playerMask?.addEventListener('mousemove', () => {
            if (playerMask.classList.contains('is--full')) {
                this._resetControlsTimer();
            }
        });

        playerMask?.addEventListener('click', () => {
            if (playerMask.classList.contains('is--full')) {
                this._resetControlsTimer();
            }
        });

        if (infoBtn && popupWrapper) {
            [infoBtn, infoCloseBtn].forEach((btn, isClose) => {
                btn?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const clipPath = isClose ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0%)';

                    if (isClose) {
                        popupWrapper.classList.remove('is--open');
                        this._hideCursorPlay();
                    } else {
                        popupWrapper.classList.add('is--open');
                        this._initCursorPlay();
                    }

                    if (this._hasGSAP()) {
                        gsap.to(popupWrapper, { clipPath, duration: 0.6, ease: "headingHoverEase" });
                    } else {
                        popupWrapper.style.transition = 'clip-path 0.6s cubic-bezier(0.75, 0, 0.25, 1)';
                        popupWrapper.style.clipPath = clipPath;
                    }
                });
            });

            document.addEventListener('mousemove', (e) => {
                if (!popupWrapper.classList.contains('is--open')) return;

                const cursorPlay = document.querySelector('.cursor-block_play');
                if (!cursorPlay) return;

                const state = this.state.cursorPlay;

                const popupRect = popupWrapper.getBoundingClientRect();
                const isOutside = e.clientX < popupRect.left || 
                                  e.clientX > popupRect.right || 
                                  e.clientY < popupRect.top || 
                                  e.clientY > popupRect.bottom;

                if (isOutside) {
                    if (!state.isVisible) {
                        state.currentX = e.clientX;
                        state.currentY = e.clientY;
                        state.targetX = e.clientX;
                        state.targetY = e.clientY;

                        cursorPlay.style.transform = `translate(calc(-50% + ${state.currentX}px), calc(-50% + ${state.currentY}px))`;

                        state.isVisible = true;
                        this._showCursorPlay();
                    } else {
                        state.targetX = e.clientX;
                        state.targetY = e.clientY;
                    }
                } else {
                    if (state.isVisible) {
                        state.isVisible = false;
                        if (this._hasGSAP()) {
                            gsap.to(cursorPlay, { opacity: 0, duration: 0.3 });
                        } else {
                            cursorPlay.style.opacity = '0';
                        }
                    }
                }
            });

            document.addEventListener('click', (e) => {
                if (!popupWrapper.classList.contains('is--open')) return;
                if (!popupWrapper.contains(e.target)) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    popupWrapper.classList.remove('is--open');
                    this._hideCursorPlay();
                    if (this._hasGSAP()) {
                        gsap.to(popupWrapper, { clipPath: 'inset(0 0 0 100%)', duration: 0.6, ease: "headingHoverEase" });
                    } else {
                        popupWrapper.style.transition = 'clip-path 0.6s cubic-bezier(0.75, 0, 0.25, 1)';
                        popupWrapper.style.clipPath = 'inset(0 0 0 100%)';
                    }
                }
            }, true);
        }

        const setupVideoEvents = (videoEl) => {
            if (!videoEl || videoEl._playerEventsAttached) return;
            videoEl._playerEventsAttached = true;

             videoEl.addEventListener('timeupdate', () => {
                const targetVideo = this._getTargetVideo();

                if (videoEl !== targetVideo) return;

                if (!this.state.hasPlayedVideo) return;

                if (!videoEl.duration) return;
                const progress = (videoEl.currentTime / videoEl.duration) * 100;
                if (this.el.progressBlock) this.el.progressBlock.style.width = `${progress}%`;
                if (this.el.currentTimeEl) {
                    this.el.currentTimeEl.textContent = this._formatTime(videoEl.currentTime);
                }
            });

            videoEl.addEventListener('loadedmetadata', () => {
                const targetVideo = this._getTargetVideo();

                if (videoEl !== targetVideo) return;
                
    						if (!this.state.hasPlayedVideo) return;

                if (this.el.totalTimeEl) {
                    this.el.totalTimeEl.textContent = this._formatTime(videoEl.duration);
                }
            });

            videoEl.addEventListener('ended', () => {
                const targetVideo = this._getTargetVideo();

                if (videoEl !== targetVideo) return;

                const playBtnInner = this.el.playBtn?.querySelector('.player-button-inner');
                if (playBtnInner) this._setElementPosition(playBtnInner, 0);

                const pBlock = document.querySelector('.play-block');
                if (pBlock) {
                    pBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
                    pBlock.style.transform = 'translateY(0%)';
                }
            });

            videoEl.addEventListener('playing', () => {
                const targetVideo = this._getTargetVideo();
                if (videoEl !== targetVideo) return;

                this.hideLoadingAnimation();
                this.hideMainPoster();
            });

            videoEl.addEventListener('play', () => {
                const targetVideo = this._getTargetVideo();
                if (videoEl !== targetVideo) return;

                const playBtnInner = this.el.playBtn?.querySelector('.player-button-inner');
                if (playBtnInner) this._animateElement(playBtnInner, 100);

                const pBlock = document.querySelector('.play-block');
                if (pBlock) {
                    pBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
                    pBlock.style.transform = 'translateY(110%)';
                }
            });

            videoEl.addEventListener('pause', () => {
                const targetVideo = this._getTargetVideo();
                if (videoEl !== targetVideo) return;

                if (this.state.isTransitioning) return;

                const playBtnInner = this.el.playBtn?.querySelector('.player-button-inner');
                if (playBtnInner) this._animateElement(playBtnInner, 0);

                const pBlock = document.querySelector('.play-block');
                if (pBlock && this.el.playerMask?.classList.contains('is--full')) {
                    pBlock.style.transition = '0.6s transform cubic-bezier(0.75,0,0,1)';
                    pBlock.style.transform = 'translateY(0%)';
                }
            });
        };

        document.querySelectorAll('.player-video').forEach(v => setupVideoEvents(v));

        const timelineWrap = progressBlock?.parentElement;
        if (timelineWrap) {
            const handleTimelineClick = (e) => {
                const targetVideo = this._getTargetVideo();

                if (!targetVideo?.duration) return;

                const rect = timelineWrap.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newTime = (clickX / rect.width) * targetVideo.duration;

                targetVideo.currentTime = Math.max(0, Math.min(newTime, targetVideo.duration));

                const progress = (targetVideo.currentTime / targetVideo.duration) * 100;
                if (this.el.progressBlock) this.el.progressBlock.style.width = `${progress}%`;
                if (this.el.currentTimeEl) this.el.currentTimeEl.textContent = this._formatTime(targetVideo.currentTime);
            };

            timelineWrap.addEventListener('click', handleTimelineClick);

            const expandedHitArea = document.createElement('div');
            expandedHitArea.style.cssText = `
                position: absolute;
                left: 0;
                right: 0;
                top: -5px;
                bottom: -5px;
                cursor: pointer;
                z-index: 5;
            `;

            const computedStyle = window.getComputedStyle(timelineWrap);
            if (computedStyle.position === 'static') {
                timelineWrap.style.position = 'relative';
            }

            timelineWrap.appendChild(expandedHitArea);

            expandedHitArea.addEventListener('click', (e) => {
                e.stopPropagation();
                const rect = timelineWrap.getBoundingClientRect();
                const clickX = e.clientX - rect.left;

                const targetVideo = this._getTargetVideo();

                if (!targetVideo?.duration) return;

                const newTime = (clickX / rect.width) * targetVideo.duration;
                targetVideo.currentTime = Math.max(0, Math.min(newTime, targetVideo.duration));

                const progress = (targetVideo.currentTime / targetVideo.duration) * 100;
                if (this.el.progressBlock) this.el.progressBlock.style.width = `${progress}%`;
                if (this.el.currentTimeEl) this.el.currentTimeEl.textContent = this._formatTime(targetVideo.currentTime);
            });
        }

        const keyMap = {
            ArrowLeft: () => prevBtn?.click(),
            ArrowRight: () => nextBtn?.click(),
            ' ': () => playBtn?.click(),
            Spacebar: () => playBtn?.click(),
            m: () => muteBtn?.click(),
            M: () => muteBtn?.click(),
            f: () => fullscreenBtn?.click(),
            F: () => fullscreenBtn?.click(),
            Escape: () => backBtn?.click()
        };

        document.addEventListener('keydown', (e) => {
            if (!playerMask?.classList.contains('is--full')) return;
            const action = keyMap[e.key];
            if (action) {
                e.preventDefault();
                action();
            }
        });
    },

    _waitForDependencies(callback) {
        let attempts = 0;
        const maxAttempts = 50;
        const check = () => {
            attempts++;
            if (typeof gsap !== 'undefined' && typeof SplitType !== 'undefined') {
                callback();
            } else if (attempts < maxAttempts) {
                setTimeout(check, 100);
            } else {
                callback(true);
            }
        };
        check();
    },

    _cacheElements() {
        this.el.playerMask = document.querySelector('.player-mask');
        this.el.videoSpacer = document.querySelector('.video-spacer');
        this.el.playerVideoWrap = document.querySelector('.player-video-wrap');
        this.el.playerBlock = document.querySelector('.player-block');
        this.el.backBtn = document.querySelector('[back]');
        this.el.video = document.querySelector('.player-video');
        this.el.playBtn = document.querySelector('[data-play]');
        this.el.muteBtn = document.querySelector('[data-mute]');
        this.el.fullscreenBtn = document.querySelector('[data-fullscreen]');
        this.el.progressBlock = document.querySelector('.player-line-block');
        this.el.currentTimeEl = document.querySelector('[data-time-current]');
        this.el.totalTimeEl = document.querySelector('[data-time-total]');
        this.el.radialGradient = document.querySelector('.radial-gradient');
        this.el.infoBtn = document.querySelector('[data-info]');
        this.el.infoCloseBtn = document.querySelector('[data-info-close]');
        this.el.popupWrapper = document.querySelector('.popup-wrapper');
        this.el.playBlock = document.querySelector('.play-block');
        this.el.loadingText = document.querySelector('.loading-text');
    },

    init() {
        this._waitForDependencies((limited) => {
            this._cacheElements();

            if (!this.el.video || !this.el.videoSpacer || !this.el.playerMask) return;

            this.state.limited = limited;

            if (this.el.popupWrapper) {
                this._hasGSAP()
                    ? gsap.set(this.el.popupWrapper, { clipPath: 'inset(0 0 0 100%)' })
                    : this.el.popupWrapper.style.clipPath = 'inset(0 0 0 100%)';
            }

            const mainPoster = this.getMainPoster();
            const leftPoster = this.getLeftPreviewPoster();
            const rightPoster = this.getRightPreviewPoster();

            [mainPoster, leftPoster, rightPoster].forEach(poster => {
                if (poster) {
                    poster.style.display = poster === mainPoster ? 'none' : '';
                    poster.pause?.();
                    if (poster.currentTime) poster.currentTime = 0;
                    const source = poster.querySelector?.('source');
                    if (source) {
                        source.src = '';
                    } else if (poster.src !== undefined) {
                        poster.src = '';
                    }
                }
            });

            if (this.el.loadingText) {
                this.el.loadingText.style.opacity = '0';
                if (this._hasSplitType() && this._hasGSAP()) {
                    const chars = new SplitType(this.el.loadingText, { types: 'chars' }).chars || [];
                    chars.forEach((char, i) => this._setElementPosition(char, i % 2 === 0 ? 100 : -100));
                }
            }

            this.initFixedContainer();
            this._attachEventListeners();
            this.initLoopMode();
        });
    },

    _initListScrollVideoChange() {
        if (window.innerWidth > 991) return;

        const projectList = document.querySelector('.project-list');
        if (!projectList) return;

        if (this._listScrollHandler) {
            projectList.removeEventListener('scroll', this._listScrollHandler);
        }

        let hasScrolled = false;

        this._listScrollHandler = () => {
            if (!hasScrolled) {
                hasScrolled = true;
                setTimeout(() => {
                    this._setupListVideoObserver();
                }, 100);
            }
        };

        projectList.addEventListener('scroll', this._listScrollHandler, { passive: true });
    },

    _setupListVideoObserver() {
        const projectList = document.querySelector('.project-list');
        const backgroundVideo = document.querySelector('.background-project-video');

        if (!projectList || !backgroundVideo) return;

        if (this._listScrollObserver) {
            this._listScrollObserver.disconnect();
        }

        this._listScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const listItem = entry.target;
                    const listVideo = listItem.querySelector('.list-video:not(.is--top)');
                    const videoSrc = listVideo?.src || listVideo?.querySelector('source')?.src || '';

                    if (!videoSrc) return;

                    const bgSource = backgroundVideo.querySelector('source');
                    const currentSrc = bgSource?.src || backgroundVideo.src || '';

                    const currentFile = currentSrc.split('/').pop()?.split('?')[0] || '';
                    const newFile = videoSrc.split('/').pop()?.split('?')[0] || '';

                    if (currentFile !== newFile) {
                        if (bgSource) {
                            bgSource.src = videoSrc;
                            backgroundVideo.load();
                        } else {
                            backgroundVideo.src = videoSrc;
                        }
                        backgroundVideo.play().catch(() => {});
                    }
                }
            });
        }, {
            root: projectList,
            rootMargin: '-50% 0px -50% 0px'
        });

        this._observeListItems();
    },

    _observeListItems() {
        if (!this._listScrollObserver) return;

        const projectItems = document.querySelectorAll('.project-list .project-item');
        projectItems.forEach(item => {
            if (!item._listVideoObserved) {
                this._listScrollObserver.observe(item);
                item._listVideoObserved = true;
            }
        });
    },

    _destroyListScrollVideoChange() {
        const projectList = document.querySelector('.project-list');

        if (this._listScrollHandler && projectList) {
            projectList.removeEventListener('scroll', this._listScrollHandler);
            this._listScrollHandler = null;
        }

        if (this._listScrollObserver) {
            this._listScrollObserver.disconnect();
            this._listScrollObserver = null;
        }

        const projectItems = document.querySelectorAll('.project-list .project-item');
        projectItems.forEach(item => {
            delete item._listVideoObserved;
        });
    }
});


// ═══ SCRIPT #12 (25089 chars) ═══

    (function () {
        const hasGSAP = () => typeof window !== 'undefined' && !!window.gsap;
        const reduceMotion = () =>
            typeof matchMedia === 'function' &&
            matchMedia('(prefers-reduced-motion: reduce)').matches;

        function collectEls(slide) {
            return {
                projectTop: slide.querySelector('.project-top'),
                projectBottom: slide.querySelector('.project-bottom'),
                previewWrapper: slide.querySelector('.preview-wrapper'),
                previewTop: Array.from(slide.querySelectorAll('.preview-block.is--top')),
                previewBottom: Array.from(slide.querySelectorAll('.preview-block.is--bottom')),
                nameRightLines: Array.from(slide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line')),
                nameLeftLines: Array.from(slide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line')),
            };
        }

        function setHiddenStates(slide, direction) {
            if (!hasGSAP() || !slide) return;
            const {
                projectTop,
                projectBottom,
                previewWrapper,
                previewTop,
                previewBottom,
                nameRightLines,
                nameLeftLines,
            } = collectEls(slide);

            const isPrevLogical = slide.classList.contains('is--prev-logical');
            const isActiveLogical = slide.classList.contains('is--active-logical');

            if (previewWrapper) gsap.set(previewWrapper, { opacity: 1 });

            if (previewBottom.length)
                gsap.set(previewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
            if (previewTop.length)
                gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });

            const textMoving = slide.querySelectorAll('.project-top .text-mono.is--moving');
            const textAbs = slide.querySelectorAll('.project-bottom .text-abs');
            const textMonoFirst = slide.querySelectorAll('.project-bottom .text-mono:first-of-type');

            const textMonoSecond = slide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
            const iconsWrapper = slide.querySelectorAll('.project-top .icons-wrapper');
            const textMobileHide = slide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
            const textStatic = slide.querySelectorAll('.project-top .text-mono.is--static');

            if (direction === 'next') {
                if (nameRightLines.length) gsap.set(nameRightLines, { y: '110%' });
                if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '-110%' });

                if (textMoving.length) gsap.set(textMoving, { y: '100%' });
                if (textAbs.length) gsap.set(textAbs, { y: '100%' });
                if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '100%' });
            } else {
                if (nameRightLines.length) gsap.set(nameRightLines, { y: '-110%' });
                if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '110%' });

                if (textMoving.length) gsap.set(textMoving, { y: '-100%' });
                if (textAbs.length) gsap.set(textAbs, { y: '-100%' });
                if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '-100%' });
            }

            if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
            if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
            if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
            if (textStatic.length) gsap.set(textStatic, { opacity: 0 });
        }
        
        function setHiddenStatesPreloader(slide, direction) {
            if (!hasGSAP() || !slide) return;
            const {
                projectTop,
                projectBottom,
                previewWrapper,
                previewTop,
                previewBottom,
                nameRightLines,
                nameLeftLines,
            } = collectEls(slide);

            const videoPlayer = document.querySelector('.player-mask');
            const backgroundBlock = document.querySelector('.background-block');
            const modeBlock = document.querySelector('.mode-block');
            const isModeActive = modeBlock && modeBlock.classList.contains('is--active');

            if (videoPlayer) gsap.set(videoPlayer, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });

            if (backgroundBlock && isModeActive) {
                gsap.set(backgroundBlock, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });
            }

            if (projectTop) gsap.set(projectTop, { y: '100%' });
            if (projectBottom) gsap.set(projectBottom, { y: '-100%' });

            if (previewWrapper) gsap.set(previewWrapper, { opacity: 0 });

            if (previewBottom.length)
                gsap.set(previewBottom, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
            if (previewTop.length)
                gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });

            if (direction === 'next') {

                if (nameRightLines.length) gsap.set(nameRightLines, { y: '110%' });
                if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '-110%' });
            } else {

                if (nameRightLines.length) gsap.set(nameRightLines, { y: '-110%' });
                if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '110%' });
            }
        }
        
        function clearProjectBlockInline(slide) {
            return;
        }
        
        function clearProjectBlockInlinePreloader(slide) {
            if (!slide) return;
            const videoPlayer = document.querySelector('.player-mask');
            const backgroundBlock = document.querySelector('.background-block');
            
            if (videoPlayer) {
                videoPlayer.style.clipPath = '';
                videoPlayer.style.webkitClipPath = '';
                videoPlayer.style.transition = '';
            }
            if (backgroundBlock) {
                backgroundBlock.style.clipPath = '';
                backgroundBlock.style.webkitClipPath = '';
                backgroundBlock.style.transition = '';
            }
            
            if (hasGSAP()) {
                if (videoPlayer) {
                    gsap.set(videoPlayer, { clearProps: 'clipPath,webkitClipPath' });
                }
                if (backgroundBlock) {
                    gsap.set(backgroundBlock, { clearProps: 'clipPath,webkitClipPath' });
                }
            }
        }

        ProjectApp.slideAnimations = {
            animateSlideIn(slideElement, options = {}) {
            console.time('innerSlideIn');
                if (!slideElement || !hasGSAP()) return Promise.resolve();

                const defaults = {
                    duration: 0.4,
                    ease: (gsap.parseEase && gsap.parseEase('power3.out')) || 'power3.out',
                    headingEase: (gsap.parseEase && gsap.parseEase('power3.out')) || 'power3.out',
                    stagger: 0.08,
                    onComplete: null,
                    direction: 'prev',
                };
                const s = { ...defaults, ...options };

                const textMoving = slideElement.querySelectorAll('.project-top .text-mono.is--moving');
                const textAbs = slideElement.querySelectorAll('.project-bottom .text-abs');
                const textMonoFirst = slideElement.querySelectorAll('.project-bottom .text-mono:first-of-type');

                const textMonoSecond = slideElement.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
                const iconsWrapper = slideElement.querySelectorAll('.project-top .icons-wrapper');
                const textMobileHide = slideElement.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
                const textStatic = slideElement.querySelectorAll('.project-top .text-mono.is--static');
                const headingDelay = window.innerWidth <= 767 ? 0.3 : 0.4;
                const headingDuration = window.innerWidth <= 767 ? 0.3 : 0.4;

                if (reduceMotion()) {
                    const {
                        projectTop,
                        projectBottom,
                        previewWrapper,
                        previewTop,
                        previewBottom,
                        nameRightLines,
                        nameLeftLines,
                    } = collectEls(slideElement);

                    if (previewWrapper) gsap.set(previewWrapper, { opacity: 1 });
                    if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
                    if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
                    if (nameRightLines.length) gsap.set(nameRightLines, { y: '0%' });
                    if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '0%' });

                    if (textMoving.length) gsap.set(textMoving, { y: '0%' });
                    if (textAbs.length) gsap.set(textAbs, { y: '0%' });
                    if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '0%' });
                    if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 1 });
                    if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 1 });
                    if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 1 });
                    if (textStatic.length) gsap.set(textStatic, { opacity: 1 });

                    clearProjectBlockInline(slideElement);
                    s.onComplete && s.onComplete();
                    return Promise.resolve();
                }

                const {
                    projectTop,
                    projectBottom,
                    previewWrapper,
                    previewTop,
                    previewBottom,
                    nameRightLines,
                    nameLeftLines,
                } = collectEls(slideElement);

                if (s.direction === 'next') {
                    if (nameRightLines.length) gsap.set(nameRightLines, { y: '110%' });
                    if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '-110%' });
                    if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
                    if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });

                    if (textMoving.length) gsap.set(textMoving, { y: '100%' });
                    if (textAbs.length) gsap.set(textAbs, { y: '100%' });
                    if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '100%' });
                } else {
                    if (nameRightLines.length) gsap.set(nameRightLines, { y: '-110%' });
                    if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '110%' });
                    if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
                    if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });

                    if (textMoving.length) gsap.set(textMoving, { y: '-100%' });
                    if (textAbs.length) gsap.set(textAbs, { y: '-100%' });
                    if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '-100%' });
                }

                if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
                if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
                if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
                if (textStatic.length) gsap.set(textStatic, { opacity: 0 });

                return new Promise((resolve) => {
                    const tl = gsap.timeline({
                        onComplete: () => {
                        console.timeEnd('innerSlideIn');
                            clearProjectBlockInline(slideElement);
                            s.onComplete && s.onComplete();
                            resolve();
                        },
                    });

                    if (nameRightLines.length)
                        tl.to(
                            nameRightLines,
                            { y: '0%', delay: headingDelay, duration: headingDuration, ease: s.headingEase, stagger: s.stagger, clearProps: 'transform' },
                            0
                        );

                    if (nameLeftLines.length)
                        tl.to(
                            nameLeftLines,
                            { y: '0%', delay: headingDelay, duration: headingDuration, ease: s.headingEase, stagger: s.stagger, clearProps: 'transform' },
                            0
                        );

                    const textDur = window.innerWidth <= 767 ? 0.8 : 1.2;
                    if (textMoving.length)
                        tl.to(textMoving, { y: '0%', duration: textDur, ease: 'mainEase', clearProps: 'transform' }, 0);
                    if (textAbs.length)
                        tl.to(textAbs, { y: '0%', duration: textDur, ease: 'mainEase', clearProps: 'transform' }, 0);
                    if (textMonoFirst.length)
                        tl.to(textMonoFirst, { y: '0%', duration: textDur, ease: 'mainEase', clearProps: 'transform' }, 0);

                    if (textMonoSecond.length) tl.set(textMonoSecond, { opacity: 1 }, 0);
                    if (iconsWrapper.length) tl.set(iconsWrapper, { opacity: 1 }, 0);
                    if (textMobileHide.length) tl.set(textMobileHide, { opacity: 1 }, 0);
                    if (textStatic.length) tl.set(textStatic, { opacity: 1 }, 0);

                    if (s.direction === 'next') {
                        if (previewBottom.length)
                            tl.to(
                                previewBottom,
                                { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: s.duration, ease: s.ease },
                                0
                            );

                        if (previewTop.length)
                            tl.to(
                                previewTop,
                                { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: s.duration, ease: s.ease },
                                0
                            );
                    }

                    if (!tl.getChildren().length) {
                        clearProjectBlockInline(slideElement);
                        resolve();
                    }
                });
            },

            setSlideHidden(slideElement, direction) {
                setHiddenStates(slideElement, direction);
            },

            animatePreloaderSlideIn(swiperEl) {
                const container = swiperEl || document.querySelector('.project-swiper.is--visible, .project-swiper.is-visible');
                if (!container) return Promise.resolve();

                return new Promise((resolve) => {
                    let tries = 0;
                    const maxTries = 20;
                    const tick = () => {
                        const active = container.querySelector('.swiper-slide-active, .is--active-logical');
                        if (active) {
                            setHiddenStatesPreloader(active, 'next');

                            const videoPlayer = document.querySelector('.player-mask');
                            const backgroundBlock = document.querySelector('.background-block');
                            const modeBlock = document.querySelector('.mode-block');
                            const isModeActive = modeBlock && modeBlock.classList.contains('is--active');

                            if (videoPlayer) {
                                videoPlayer.style.transition = 'none';
                            }
                            if (backgroundBlock && isModeActive) {
                                backgroundBlock.style.transition = 'none';
                            }

                            const tl = gsap.timeline({
                                onComplete: () => {
                                    clearProjectBlockInlinePreloader(active);
                                    resolve();
                                },
                            });

                            const {
                                projectTop,
                                projectBottom,
                                previewWrapper,
                                previewTop,
                                previewBottom,
                                nameRightLines,
                                nameLeftLines,
                            } = collectEls(active);

                            if (videoPlayer)
                                tl.fromTo(
                                    videoPlayer,
                                    { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' },
                                    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.35, ease: 'transitionEase' },
                                    0
                                );

                            if (backgroundBlock && isModeActive)
                                tl.fromTo(
                                    backgroundBlock,
                                    { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' },
                                    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.35, ease: 'transitionEase', delay: 0.1 },
                                    0
                                );

                            if (projectTop)
                                tl.fromTo(
                                    projectTop,
                                    { y: '100%' },
                                    { y: '0%', duration: 1.35, ease: 'transitionEase', clearProps: 'transform' },
                                    0
                                );

                            if (projectBottom)
                                tl.fromTo(
                                    projectBottom,
                                    { y: '-100%' },
                                    { y: '0%', duration: 1.35, ease: 'transitionEase', clearProps: 'transform' },
                                    0
                                );

                            if (nameRightLines.length)
                                tl.to(
                                    nameRightLines,
                                    { y: '0%', delay: 0.4, duration: 1, ease: 'power2.out', stagger: 0.08, clearProps: 'transform' },
                                    0
                                );

                            if (nameLeftLines.length)
                                tl.to(
                                    nameLeftLines,
                                    { y: '0%', delay: 0.4, duration: 1, ease: 'power2.out', stagger: 0.08, clearProps: 'transform' },
                                    0
                                );

                            if (previewWrapper)
                                tl.fromTo(previewWrapper, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' }, 0);

                            if (previewBottom.length)
                                tl.fromTo(
                                    previewBottom,
                                    { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
                                    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.2, ease: 'power2.out' },
                                    0
                                );

                            if (previewTop.length)
                                tl.fromTo(
                                    previewTop,
                                    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
                                    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.2, ease: 'power2.out' },
                                    0
                                );

                        } else if (tries++ < maxTries) {
                            requestAnimationFrame(tick);
                        } else {
                            resolve();
                        }
                    };
                    requestAnimationFrame(tick);
                });
            },

            hideNonActiveInContainer(container) {
                if (!container) return;
                const active = container.querySelector('.swiper-slide-active, .is--active-logical');
                container.querySelectorAll('.swiper-slide').forEach((s) => {
                    if (s !== active) setHiddenStates(s);
                });
            },

            animateActiveInContainer(container, options) {
                if (!container) return Promise.resolve();
                const active = container.querySelector('.swiper-slide-active, .is--active-logical');
                if (!active) return Promise.resolve();
                setHiddenStates(active);
                return this.animateSlideIn(active, options);
            },

            deactivateContainer(container) {
                if (!container || !hasGSAP()) return;
                const nodes = container.querySelectorAll(
                    '.swiper-slide, .project-top, .project-bottom, .preview-wrapper, .preview-block, .name-wrapper .line'
                );
                container.querySelectorAll('.swiper-slide').forEach(setHiddenStates);
            },

            bindSlideChangeForSwiper(swiper) {
                if (!swiper || swiper._paBound) return;
                swiper._paBound = true;

                swiper.on('init', () => {
                    const root = swiper.el;
                    this.hideNonActiveInContainer(root);
                    this.animateActiveInContainer(root, { duration: 0.75 });
                });

                swiper.on('slideChangeTransitionStart', () => {
                    const prev = swiper.slides?.[swiper.previousIndex];
                    const next = swiper.slides?.[swiper.activeIndex];
                    if (prev && prev !== next) setHiddenStates(prev);
                    if (next) {
                        if (hasGSAP()) {
                            const nodes = next.querySelectorAll(
                                '.project-top, .project-bottom, .preview-wrapper, .preview-block, .name-wrapper .line'
                            );
                        }
                        setHiddenStates(next);
                        this.animateSlideIn(next, { duration: 0.75 });
                    }
                });
            },
        };

        ProjectApp.slidePresets = {
            setSlideElementsHidden(slideElement) {
                ProjectApp.slideAnimations.setSlideHidden(slideElement);
            },
            setPrevSlidesHidden(slideElement) {
                if (!slideElement || !hasGSAP()) return;
                gsap.set(slideElement, {visibility: 'hidden'});
                
                const previewTop = slideElement.querySelectorAll('.preview-block.is--top');
                const previewBottom = slideElement.querySelectorAll('.preview-block.is--bottom');
                const previewWrapper = slideElement.querySelector('.preview-wrapper');
                
                if (previewWrapper) gsap.set(previewWrapper, { opacity: 1 });
                if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
                if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
            },
            setLogicalPrevHidden(slideElement) {
                this.setPrevSlidesHidden(slideElement);
            },
            resetSlideElements(slideElement) {
                ProjectApp.slideAnimations.animateSlideIn(slideElement, {duration: 0});
            },
            resetPrevSlidesVisibility(slideElement) {
                if (!slideElement || !hasGSAP()) return;
                gsap.set(slideElement, {visibility: 'visible'});
            },

            activateSwiperContainer(containerEl) {
                ProjectApp.slideAnimations.hideNonActiveInContainer(containerEl);
                return ProjectApp.slideAnimations.animateActiveInContainer(containerEl, {duration: 0.8});
            },

            deactivateSwiperContainer(containerEl) {
                ProjectApp.slideAnimations.deactivateContainer(containerEl);
            },
        };
    })();


// ═══ SCRIPT #13 (9555 chars) ═══

ProjectApp.mobileFilter = (function () {
  const BP = 991;
  let tl = null;
  let initialOrder = null;
  let expanded = false;
  let initializedForMobile = false;
  let isAnimating = false;

  function isMobile() {
    return window.innerWidth <= BP;
  }

  function getBlock() {
    return document.querySelector('.filter-block');
  }

  function getItems() {
    const block = getBlock();
    return block ? Array.from(block.querySelectorAll('.filter-item')) : [];
  }

  function captureInitialOrder() {
    if (initialOrder && initialOrder.length) return;
    const items = getItems();
    if (!items.length) return;
    initialOrder = items.slice();
  }

  function getActiveItem(items) {
    const list = items || getItems();
    if (!list.length) return null;
    let active = list.find(el => el.classList.contains('is--active')) || list[0];
    if (active && !active.classList.contains('is--active')) {
      active.classList.add('is--active');
    }
    return active;
  }

  function reset() {
    const items = getItems();
    if (!items.length) return;
    const block = getBlock();
    if (tl && tl.kill) tl.kill();

    if (block && initialOrder && initialOrder.length) {
      initialOrder.forEach(el => {
        if (el.parentElement === block) {
          block.appendChild(el);
        }
      });
    }

    items.forEach(el => {
      el.style.removeProperty('opacity');
      el.style.removeProperty('transform');
      el.style.removeProperty('transition');
      el.style.removeProperty('will-change');
      el.style.removeProperty('display');
      el.style.removeProperty('position');
      el.style.removeProperty('top');
      el.style.removeProperty('left');
      el.style.removeProperty('width');
    });

    expanded = false;
    isAnimating = false;
  }

  function collapse(immediate = false) {
    if (!isMobile()) {
      reset();
      return;
    }

    if (isAnimating) return;

    const items = getItems();
    if (!items.length) return;
    const block = getBlock();
    if (!block) return;

    captureInitialOrder();
    const active = getActiveItem(items);
    if (!active) return;

    if (tl && tl.kill) tl.kill();

    if (block.firstElementChild !== active) {
      block.insertBefore(active, block.firstElementChild);
    }

    if (immediate || !window.gsap) {
      items.forEach(el => {
        el.style.removeProperty('opacity');
        el.style.removeProperty('transform');
        el.style.removeProperty('transition');
        el.style.removeProperty('will-change');
        el.style.removeProperty('position');
        el.style.removeProperty('top');
        el.style.removeProperty('left');
        el.style.removeProperty('width');
        if (el === active) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
      expanded = false;
      return;
    }

    isAnimating = true;

    const prevRects = new Map();
    items.forEach(el => prevRects.set(el, el.getBoundingClientRect()));

    items.forEach(el => {
      el.style.display = '';
    });

    if (block.firstElementChild !== active) {
      block.insertBefore(active, block.firstElementChild);
    }

    const nextRects = new Map();
    items.forEach(el => nextRects.set(el, el.getBoundingClientRect()));

    items.forEach(el => {
      const prev = prevRects.get(el);
      const next = nextRects.get(el);
      if (!prev || !next) return;
      const dx = prev.left - next.left;
      const dy = prev.top - next.top;

      el.style.transformOrigin = 'top left';
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.opacity = 1;
    });

    const others = items.filter(el => el !== active);

    tl = gsap.timeline({
      defaults: { duration: 0.35, ease: 'power2.out' },
      onComplete() {
        items.forEach(el => {
          el.style.removeProperty('transform');
          el.style.removeProperty('will-change');
          el.style.removeProperty('transition');
          el.style.removeProperty('opacity');
          el.style.removeProperty('position');
          el.style.removeProperty('top');
          el.style.removeProperty('left');
          el.style.removeProperty('width');
          if (el !== active) {
            el.style.display = 'none';
          } else {
            el.style.display = '';
          }
        });
        expanded = false;
        isAnimating = false;
      }
    });

    tl.to(items, {
      transform: 'translate(0px, 0px)',
      willChange: 'transform,opacity'
    }, 0);

    tl.to(active, { opacity: 1 }, 0);
    if (others.length) {
      tl.to(others, { opacity: 0 }, 0.05);
    }
  }

  function expand() {
    if (!isMobile() || !window.gsap) return;
    if (isAnimating) return;

    const items = getItems();
    if (!items.length) return;
    const block = getBlock();
    if (!block) return;

    captureInitialOrder();
    const active = getActiveItem(items);
    if (!active) return;

    if (tl && tl.kill) tl.kill();

    isAnimating = true;

    if (block.firstElementChild !== active) {
      block.insertBefore(active, block.firstElementChild);
    }

    const others = items.filter(el => el !== active);

    items.forEach(el => {
      el.style.display = '';
    });

    gsap.set(active, { opacity: 1, y: 0, willChange: 'opacity,transform' });
    if (others.length) {
      gsap.set(others, { opacity: 0, y: 10, willChange: 'opacity,transform' });
    }

    tl = gsap.timeline({
      defaults: { duration: 0.25, ease: 'power2.out' },
      onComplete() {
        items.forEach(el => {
          el.style.removeProperty('will-change');
          el.style.removeProperty('transition');
          el.style.removeProperty('transform');
          el.style.removeProperty('opacity');
        });
        expanded = true;
        isAnimating = false;
      }
    });

    if (others.length) {
      tl.to(others, { opacity: 1, y: 0, stagger: 0.03 }, 0);
    }

    expanded = true;
  }

  function selectItem(newActiveEl) {
    if (!isMobile() || !window.gsap) return Promise.resolve();
    if (isAnimating) return Promise.resolve();

    const items = getItems();
    if (!items.length) return Promise.resolve();
    const block = getBlock();
    if (!block) return Promise.resolve();

    const currentActive = getActiveItem(items);
    
    if (newActiveEl === currentActive) {
      collapse();
      return Promise.resolve();
    }

    if (tl && tl.kill) tl.kill();

    isAnimating = true;

    items.forEach(el => el.classList.remove('is--active'));
    newActiveEl.classList.add('is--active');

    const firstRects = new Map();
    items.forEach(el => {
      firstRects.set(el, el.getBoundingClientRect());
    });

    block.insertBefore(newActiveEl, block.firstElementChild);

    const lastRects = new Map();
    items.forEach(el => {
      lastRects.set(el, el.getBoundingClientRect());
    });

    items.forEach(el => {
      const first = firstRects.get(el);
      const last = lastRects.get(el);
      if (!first || !last) return;
      
      const dx = first.left - last.left;
      const dy = first.top - last.top;
      
      gsap.set(el, {
        x: dx,
        y: dy,
        willChange: 'transform, opacity'
      });
    });

    const others = items.filter(el => el !== newActiveEl);

    return new Promise((resolve) => {
      tl = gsap.timeline({
        defaults: { duration: 0.35, ease: 'power2.out' },
        onComplete() {
          items.forEach(el => {
            gsap.set(el, { clearProps: 'x,y,willChange' });
          });
          
          const collapseTl = gsap.timeline({
            onComplete() {
              items.forEach(el => {
                el.style.removeProperty('transform');
                el.style.removeProperty('opacity');
                el.style.removeProperty('will-change');
                if (el !== newActiveEl) {
                  el.style.display = 'none';
                }
              });
              expanded = false;
              isAnimating = false;
              resolve();
            }
          });

          if (others.length) {
            collapseTl.to(others, { 
              opacity: 0, 
              duration: 0.25, 
              ease: 'power2.out'
            }, 0);
          }
        }
      });

      tl.to(items, {
        x: 0,
        y: 0,
        duration: 0.35,
        ease: 'power2.out'
      }, 0);
    });
  }

  function handleResize() {
    if (isMobile()) {
      if (!initializedForMobile) {
        collapse(true);
        initializedForMobile = true;
      }
    } else {
      initializedForMobile = false;
      reset();
    }
  }

  function handleDocumentClick(e) {
    if (!isMobile() || !expanded || isAnimating) return;
    const block = getBlock();
    if (!block) return;
    const target = e.target;
    if (block.contains(target)) return;
    collapse();
  }

  function init() {
    if (typeof window === 'undefined') return;
    captureInitialOrder();

    if (isMobile()) {
      collapse(true);
      initializedForMobile = true;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleDocumentClick, true);
  }

  function isExpandedState() {
    return expanded;
  }
  
  function isAnimatingState() {
    return isAnimating;
  }

  return {
    init,
    collapse,
    expand,
    selectItem,
    isExpanded: isExpandedState,
    isAnimating: isAnimatingState
  };
})();

if (ProjectApp.mobileFilter && typeof ProjectApp.mobileFilter.init === 'function') {
  ProjectApp.mobileFilter.init();
}


// ═══ SCRIPT #14 (42305 chars) ═══

		const HIDE_DELAY_MS = 100;

    if (ProjectApp.state.currentView == null) ProjectApp.state.currentView = 'list';
    if (ProjectApp.state.currentCategory == null) ProjectApp.state.currentCategory = 'all';
    if (!ProjectApp.state.switchAnim) ProjectApp.state.switchAnim = {listeners: []};

		ProjectApp.utils.norm = ProjectApp.utils.norm || function (s) {
        return String(s || '').toLowerCase().trim();
    };

    ProjectApp.utils.withTemporarilyShown = ProjectApp.utils.withTemporarilyShown || function (el, fn) {
        if (!el) return fn && fn();
        const wasNone = getComputedStyle(el).display === 'none' || el.classList.contains('is--hidden');
        const prev = { display: el.style.display, visibility: el.style.visibility, pointerEvents: el.style.pointerEvents };
        if (wasNone) {
            el.classList.remove('is--hidden');
            el.style.display = 'block';
            el.style.visibility = 'hidden';
            el.style.pointerEvents = 'none';
        }
        try { return fn && fn(); } finally {
            if (wasNone) {
                el.style.display = prev.display || '';
                el.style.visibility = prev.visibility || '';
                el.style.pointerEvents = prev.pointerEvents || '';
                el.classList.add('is--hidden');
            }
        }
    };

    ProjectApp.utils.measureItemHeight = ProjectApp.utils.measureItemHeight || function(templates, listEl){
        const tmp = document.createElement('div');
        tmp.style.position = 'absolute';
        tmp.style.left = '-99999px';
        tmp.style.top = '0';
        tmp.style.width = (listEl && listEl.clientWidth ? listEl.clientWidth : 1000) + 'px';
        document.body.appendChild(tmp);
        const first = templates && templates[0] ? templates[0].cloneNode(true) : null;
        if (!first){ document.body.removeChild(tmp); return 120; }
        tmp.appendChild(first);
        const h = Math.max(1, first.offsetHeight || 0);
        document.body.removeChild(tmp);
        return h;
    };

    ProjectApp.templateManager = (function (prev) {
        const tm = prev || {};
        tm.captureListTemplatesOnce = tm.captureListTemplatesOnce || function () {
            if (ProjectApp.state.listTemplates && ProjectApp.state.listTemplates.length) return;
            const projectList = document.querySelector('.project-list');
            if (!projectList) return;
            if (!ProjectApp.state.listTemplates) ProjectApp.state.listTemplates = [];
            ProjectApp.utils.withTemporarilyShown(projectList, () => {
                const originals = Array.from(projectList.querySelectorAll('.project-item'));
                ProjectApp.state.listTemplates = originals.map(n => n.cloneNode(true));
            });
        };
        tm.getItemCategory = tm.getItemCategory || function (el) {
            const raw = el.getAttribute('filter') ?? el.getAttribute('data-filter') ?? '';
            return ProjectApp.utils.norm(raw || 'all');
        };
        tm.matchesCurrentCategory = function (el, category) {
            const current = ProjectApp.utils.norm(category != null ? category : (ProjectApp.state.currentCategory || 'all'));
            if (current === 'all') return true;
            return ProjectApp.templateManager.getItemCategory(el) === current;
        };
        tm.getFilteredListTemplates = function (category) {
            this.captureListTemplatesOnce();
            const list = ProjectApp.state.listTemplates || [];
            return list.filter(el => this.matchesCurrentCategory(el, category));
        };
        tm.getAllListTemplates = tm.getAllListTemplates || function () {
            this.captureListTemplatesOnce();
            return (ProjectApp.state.listTemplates || []).slice();
        };
        return tm;
    })(ProjectApp.templateManager);

    ProjectApp.uiLock = (() => {
        let depth = 0;
        function setDisabled(disabled) {
            const nodes = document.querySelectorAll('.filter-item, .option-item, .mode-block');
            nodes.forEach((el) => {
                el.classList.toggle('is--disabled', disabled);
                el.style.pointerEvents = disabled ? 'none' : '';
                el.setAttribute('aria-disabled', disabled ? 'true' : 'false');
                if (disabled) {
                    el.dataset._tabindex = el.getAttribute('tabindex') ?? '';
                    el.setAttribute('tabindex', '-1');
                } else {
                    const prev = el.dataset._tabindex;
                    if (prev !== undefined) {
                        if (prev === '') el.removeAttribute('tabindex');
                        else el.setAttribute('tabindex', prev);
                        delete el.dataset._tabindex;
                    }
                }
            });
        }
        return {
            lock()   { if (++depth === 1) setDisabled(true); },
            unlock() { depth = Math.max(0, depth - 1); if (depth === 0) setDisabled(false); },
            isLocked(){ return depth > 0; }
        };
    })();

    ProjectApp.filterCooldown = (() => {
        let until = 0, timer = null;
        function applyDisabled(disabled) {
            const btns = document.querySelectorAll('.filter-item');
            btns.forEach(b => {
                b.classList.toggle('is--disabled', disabled);
                b.setAttribute('aria-disabled', disabled ? 'true' : 'false');
                b.style.pointerEvents = disabled ? 'none' : '';
                if (disabled) {
                    b.dataset._tabindex = b.getAttribute('tabindex') ?? '';
                    b.setAttribute('tabindex', '-1');
                } else {
                    const prev = b.dataset._tabindex;
                    if (prev !== undefined) {
                        if (prev === '') b.removeAttribute('tabindex'); else b.setAttribute('tabindex', prev);
                        delete b.dataset._tabindex;
                    }
                }
            });
        }
        function isActive() { return Date.now() < until; }
        function start(ms = 50) {
            until = Date.now() + ms;
            clearTimeout(timer);
            applyDisabled(true);
            timer = setTimeout(() => { if (!isActive()) applyDisabled(false); }, ms + 5);
        }
        function cancel() { until = 0; clearTimeout(timer); applyDisabled(false); }
        return { isActive, start, cancel };
    })();

    ProjectApp.slideHelpers = {
        _CLIP_FULL: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        _CLIP_BASE: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
        _CLIP_TOP:  'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)',
        _CLIP_BOT:  'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',

        setSlideBaseline(slide) {
            if (!slide || !window.gsap) return;
            if (!slide.classList.contains('swiper-slide-active') && !slide.classList.contains('is--active-logical')) return;
            const gs = gsap;
            const playerMask = document.querySelector('.player-mask');
            the_bg = slide.querySelectorAll('.background-block');
            const previewBottom = slide.querySelectorAll('.preview-block.is--bottom');
            const previewTop    = slide.querySelectorAll('.preview-block.is--top');
            const projectTop    = slide.querySelectorAll('.project-top');
            const projectBottom = slide.querySelectorAll('.project-bottom');
            const nameLeftLines = slide.querySelectorAll('.name-wrapper.has--align-left .line');
            const nameRightLines= slide.querySelectorAll('.name-wrapper.has--align-right .line');

            if (playerMask) playerMask.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
            if (the_bg.length)        gs.set(the_bg,        { clipPath: this._CLIP_BASE });
            if (previewTop.length)    gs.set(previewTop,    { clipPath: this._CLIP_TOP  });
            if (previewBottom.length) gs.set(previewBottom, { clipPath: this._CLIP_BOT  });
            if (projectTop.length)    gs.set(projectTop,    { y: '100%' });
            if (projectBottom.length) gs.set(projectBottom, { y: '100%' });

            if (nameLeftLines.length)  gs.set(nameLeftLines,  { y: '100%' });
            if (nameRightLines.length) gs.set(nameRightLines, { y: '100%' });
        },

        revealSlide(slide, duration = 0.8) {
            if (!slide || !window.gsap) return Promise.resolve();
            if (!slide.classList.contains('swiper-slide-active') && !slide.classList.contains('is--active-logical')) return Promise.resolve();
            const ez = 'headingHoverEase';
            const tl = gsap.timeline();
            const playerMask    = document.querySelector('.player-mask');
            const the_bg        = slide.querySelectorAll('.background-video-block');
            const previewBottom = slide.querySelectorAll('.preview-block.is--bottom');
            const previewTop    = slide.querySelectorAll('.preview-block.is--top');
            const projectTop    = slide.querySelectorAll('.project-top');
            const projectBottom = slide.querySelectorAll('.project-bottom');
            const nameLeftLines = slide.querySelectorAll('.name-wrapper.has--align-left .line');
            const nameRightLines= slide.querySelectorAll('.name-wrapper.has--align-right .line');

            if (playerMask) playerMask.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            if (the_bg.length)         tl.to(the_bg,        { clipPath: this._CLIP_FULL, duration, ease: ez }, 0);
            if (previewBottom.length)  tl.to(previewBottom, { clipPath: this._CLIP_FULL, duration, ease: ez }, 0);
            if (previewTop.length)     tl.to(previewTop,    { clipPath: this._CLIP_FULL, duration, ease: ez }, 0);
            if (projectTop.length)     tl.to(projectTop,    { y: '0%', duration, ease: ez, willChange: 'transform' }, 0);
            if (projectBottom.length)  tl.to(projectBottom, { y: '0%', duration, ease: ez, willChange: 'transform' }, 0);

            if (nameLeftLines.length)  tl.to(nameLeftLines,  { y: '0%', duration, ease: ez, willChange: 'transform' }, 0);
            if (nameRightLines.length) tl.to(nameRightLines, { y: '0%', duration, ease: ez, willChange: 'transform' }, 0);

            tl.add(() => {
                const clearTargets = [...the_bg, ...previewBottom, ...previewTop, ...projectTop, ...projectBottom, ...nameLeftLines, ...nameRightLines];
                if (clearTargets.length && window.gsap) {
                    gsap.set(clearTargets, { clearProps: 'clipPath,transform,opacity,filter,willChange,transition' });
                }
                clearTargets.forEach(el => {
                    el.style.removeProperty('clip-path');
                    el.style.removeProperty('transform');
                    el.style.removeProperty('opacity');
                    el.style.removeProperty('filter');
                    el.style.removeProperty('will-change');
                    el.style.removeProperty('transition');
                    if ((el.getAttribute('style') || '').trim() === '') el.removeAttribute('style');
                });
            }, '+=0.01');

            return new Promise(r => tl.eventCallback('onComplete', r));
        },

        hideToBaseline(slide, duration = 0.8, ease = 'headingHoverEase') {
            if (!slide || !window.gsap) return Promise.resolve();
            if (!slide.classList.contains('swiper-slide-active') && !slide.classList.contains('is--active-logical')) return Promise.resolve();

            const tl = gsap.timeline({ defaults: { ease } });
            const playerMask = document.querySelector('.player-mask');

            const the_bg        = slide.querySelectorAll('.background-video-block');
            const previewTop    = slide.querySelectorAll('.preview-block.is--top');
            const previewBottom = slide.querySelectorAll('.preview-block.is--bottom');
            const projectTop    = slide.querySelectorAll('.project-top');
            const projectBottom = slide.querySelectorAll('.project-bottom');
            const nameLeftLines = slide.querySelectorAll('.name-wrapper.has--align-left .line');
            const nameRightLines= slide.querySelectorAll('.name-wrapper.has--align-right .line');

            const allTargets = [...the_bg, ...previewTop, ...previewBottom, ...projectTop, ...projectBottom, ...nameLeftLines, ...nameRightLines];

            if (allTargets.length) {
                gsap.killTweensOf(allTargets);
                gsap.set(allTargets, { transition: 'none' });
            }

            if (previewTop.length)    gsap.set(previewTop,    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
            if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });

            tl.addLabel('go', 0);

            if (playerMask) playerMask.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
            if (the_bg.length)         tl.to(the_bg,        { clipPath: this._CLIP_BASE, duration, ease, lazy: false, overwrite: 'auto', willChange: 'clip-path' }, 'go');
            if (previewTop.length)     tl.to(previewTop,    { clipPath: this._CLIP_TOP,  duration, ease, lazy: false, overwrite: 'auto', willChange: 'clip-path' }, 'go');
            if (previewBottom.length)  tl.to(previewBottom, { clipPath: this._CLIP_BOT,  duration, ease, lazy: false, overwrite: 'auto', willChange: 'clip-path' }, 'go');
            if (projectTop.length)     tl.to(projectTop,    { y: '100%', duration, ease, lazy: false, overwrite: 'auto', willChange: 'transform' }, 'go');
            if (projectBottom.length)  tl.to(projectBottom, { y: '100%', duration, ease, lazy: false, overwrite: 'auto', willChange: 'transform' }, 'go');

            if (nameLeftLines.length)  tl.to(nameLeftLines,  { y: '100%', duration, ease, lazy: false, overwrite: 'auto', willChange: 'transform' }, 'go');
            if (nameRightLines.length) tl.to(nameRightLines, { y: '100%', duration, ease, lazy: false, overwrite: 'auto', willChange: 'transform' }, 'go');

            tl.add(() => {
                if (allTargets.length) gsap.set(allTargets, { clearProps: 'transition,willChange' });
            }, 'go+=' + duration);

            return new Promise(r => tl.eventCallback('onComplete', r));
        }
    };

    ProjectApp.visibleCleaner = (function () {
        const SELECTORS = [
            '.player-mask',
            '.background-video-block',
            '.preview-block.is--top',
            '.preview-block.is--bottom',
            '.project-top',
            '.project-bottom',
            '.name-wrapper.has--align-left .line',
            '.name-wrapper.has--align-right .line'
        ];
        const cleaned = new WeakSet();

        function clearInline(el) {
            if (window.gsap) gsap.set(el, { clearProps: 'clipPath,transform,opacity,filter,willChange,transition' });
            el.style.removeProperty('clip-path');
            el.style.removeProperty('transform');
            el.style.removeProperty('opacity');
            el.style.removeProperty('filter');
            el.style.removeProperty('will-change');
            el.style.removeProperty('transition');
            if ((el.getAttribute('style') || '').trim() === '') el.removeAttribute('style');
        }

        function runFor(swiperEl) {
            if (!swiperEl || cleaned.has(swiperEl)) return;
            const activeSlide = swiperEl.querySelector('.swiper-slide-active, .swiper-slide.is--active-logical');
            if (!activeSlide) return;
            const nodes = SELECTORS.flatMap(sel => Array.from(activeSlide.querySelectorAll(sel)));
            nodes.forEach(clearInline);
            cleaned.add(swiperEl);
        }

        function scheduleFor(swiperEl, ms = 50) {
            if (!swiperEl || cleaned.has(swiperEl)) return;
            setTimeout(() => runFor(swiperEl), ms);
        }

        function reset(swiperEl) {
            if (swiperEl && cleaned.has(swiperEl)) cleaned.delete(swiperEl);
        }

        return {runFor, scheduleFor, reset};
    })();

    ProjectApp._revealedActive = ProjectApp._revealedActive || new WeakMap();

    ProjectApp.eventHandlers = {
        setupSharedListeners() {
            const form = document.querySelector('#email-form');
            if (form && !form._catHandlerInstalled) {
                form.addEventListener('change', ProjectApp.eventHandlers.handleRadioChange, true);
                form._catHandlerInstalled = true;
            }
            document.addEventListener('click', ProjectApp.eventHandlers.handleClearClick, true);
            if (!ProjectApp._filterGuardInstalled) {
                document.addEventListener('click', (e) => {
                    const el = e.target.closest('.filter-item, .option-item, .mode-block');
                    if (!el) return;
                    if (ProjectApp.uiLock?.isLocked()) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                    if (el.matches('.filter-item') && ProjectApp.filterCooldown.isActive()) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                }, true);
                ProjectApp._filterGuardInstalled = true;
            }
        },

        cleanupSharedListeners() {
            const form = document.querySelector('#email-form');
            if (form && form._catHandlerInstalled) {
                form.removeEventListener('change', ProjectApp.eventHandlers.handleRadioChange, true);
                delete form._catHandlerInstalled;
            }
            document.removeEventListener('click', ProjectApp.eventHandlers.handleClearClick, true);
        },

        handleRadioChange(e) {
            if (ProjectApp.uiLock?.isLocked() || ProjectApp.filterCooldown.isActive()) return;
            const input = e.target && e.target.matches ? e.target : null;
            if (!input || !input.matches('input[type="radio"][name="radio"]')) return;
            const val = String(input.value || 'all').trim().toLowerCase();
            const labels = Array.from(document.querySelectorAll('.filter-item'));
            labels.forEach(l => {
                const i = l.querySelector('input[type="radio"][name="radio"]');
                l.classList.toggle('is--active', i && i.checked);
            });
            if (ProjectApp.filterModule?.setCategory) {
                ProjectApp.filterModule.setCategory(val);
                ProjectApp.filterCooldown.start(50);
            }

            if (window.innerWidth <= 991 && ProjectApp.mobileFilter && typeof ProjectApp.mobileFilter.collapse === 'function') {
                if (!ProjectApp.mobileFilter._skipNextCollapse) {
                    ProjectApp.mobileFilter.collapse();
                }
            }
        },

        handleClearClick(e) {
            if (ProjectApp.uiLock?.isLocked() || ProjectApp.filterCooldown.isActive()) return;
            const btn = e.target.closest('[fs-list-element="clear"]');
            if (!btn) return;
            e.preventDefault();
            e.stopPropagation();
            const form = document.querySelector('#email-form');
            const all = form ? form.querySelector('input[type="radio"][name="radio"][value="all"]') : null;
            if (all) {
                all.checked = true;
                all.dispatchEvent(new Event('change', {bubbles: true}));
            }
        }
    };

    ProjectApp.swiperFx = {
        getAll() {
            return Array.from(document.querySelectorAll('.swipers-container .project-swiper'));
        },
        getVisible() {
            return document.querySelector('.swipers-container .project-swiper');
        },
        getActiveSlide(swiperEl) {
            const inst = swiperEl && swiperEl.swiper;
            return inst ? inst.slides[inst.activeIndex] : swiperEl?.querySelector('.swiper-slide-active, .is--active-logical');
        },
        hide(swiperEl) {
            if (!swiperEl) return;
            swiperEl.classList.remove('is--visible');
            ProjectApp.visibleCleaner.reset(swiperEl);
            ProjectApp._revealedActive.delete(swiperEl);
        },
        hideAll() {
            this.getAll().forEach(el => this.hide(el));
        },
        setVisible(swiperEl) {
            if (!swiperEl) return;
            this.hideAll();
            swiperEl.classList.add('is--visible');
        },
        async animateOut(swiperEl) {
            if (!swiperEl || !window.gsap) return;
            const slide = this.getActiveSlide(swiperEl);
            if (!slide) return;
            await ProjectApp.slideHelpers.hideToBaseline(slide, .8, 'headingHoverEase');
        }
    };

    ProjectApp.viewSwitcher = {
        _getListHoverBlock() {
            return document.querySelector('.background-block');
        },
        _fade(el, toVisible) {
            if (!el) return;
            if (window.gsap) {
                gsap.killTweensOf(el);
                gsap.to(el, {opacity: toVisible ? 1 : 0, duration: 0.6, ease: 'power2.out'});
            } else {
                el.style.opacity = toVisible ? '1' : '0';
            }
        },
			  _resetPlayerAfterViewSwitch() {
            const pm = ProjectApp.playerModule;
            if (!pm || !pm.state) return;

            if (typeof pm.state.isTransitioning !== 'undefined') {
                pm.state.isTransitioning = false;
            }

            if (typeof pm.state.isFromList !== 'undefined') {
                pm.state.isFromList = false;
            }

            if (pm.el && pm.el.playerMask) {
                const targetVideo =
                    document.querySelector('.player-video-block.is--target .player-video') ||
                    document.querySelector('.player-video');
                if (targetVideo) {
                    pm.el.video = targetVideo;
                }
            }
        },

        async _revealVisibleSwiperOnce(swiperEl) {
            const active = ProjectApp.swiperFx.getActiveSlide(swiperEl);
            if (!active) {
                return;
            }
            const last = ProjectApp._revealedActive.get(swiperEl);
            if (last === active) {
                return;
            }
            if (window.gsap) {
                const t = active.querySelectorAll('.background-video-block, .preview-block.is--top, .preview-block.is--bottom, .project-top, .project-bottom');
                gsap.killTweensOf(t);
            }
            ProjectApp.slideHelpers.setSlideBaseline(active);
            await ProjectApp.slideHelpers.revealSlide(active, 0.8);
            ProjectApp._revealedActive.set(swiperEl, active);
            ProjectApp.visibleCleaner.runFor(swiperEl);
        },

        async switchView(mode) {
    if (mode === ProjectApp.state?.currentView) return;
    if (ProjectApp.uiLock?.isLocked()) return;
            if (ProjectApp.swiperModule?.swiper?.touch) {
    }
    
    ProjectApp.uiLock?.lock();
            try {
                const swipersContainer = document.querySelector('.swipers-container');
                const projectCollection = document.querySelector('.project-collection');
                const projectList = document.querySelector('.project-list');
                const LHB = this._getListHoverBlock();

                if (mode === 'list') {
                    if (ProjectApp.state?.currentView === 'swiper') {
                        const vis = ProjectApp.swiperFx.getVisible();
                        if (vis) {
                            const prevSlides = vis.querySelectorAll('.swiper-slide-prev, .is--prev-logical');
                            prevSlides.forEach(slide => {
                                const previewWrapper = slide.querySelector('.preview-wrapper');
                                if (previewWrapper) {
                                    previewWrapper.style.visibility = 'hidden';
                                }
                            });
                            
                            await ProjectApp.swiperFx.animateOut(vis);
                            await new Promise(r => setTimeout(r, HIDE_DELAY_MS));
                            ProjectApp.swiperFx.hide(vis);
                        }
                    }
                    if (projectCollection) projectCollection.classList.remove('is--hidden');
                    if (swipersContainer) swipersContainer.classList.add('is--hidden');
                    if (projectList) {
                        projectList.classList.remove('hide');
                        projectList.removeAttribute('aria-hidden');
                    }
											
                    this._fade(LHB, true);
                    ProjectApp.swiperFx.hideAll();
                    ProjectApp.eventHandlers.cleanupSharedListeners();
                    ProjectApp.state._switchingToList = true;
                    if (ProjectApp.listModule?.ensureListInit) ProjectApp.listModule.ensureListInit();
                    ProjectApp.eventHandlers.setupSharedListeners();
                    ProjectApp.state.currentView = 'list';
                    this._resetPlayerAfterViewSwitch();

                    if (window.innerWidth <= 991 && ProjectApp.playerModule?._initListScrollVideoChange) {
                        ProjectApp.playerModule._initListScrollVideoChange();
                    }
                                } else {
                    if (ProjectApp.state?.currentView === 'list') {
                        if (ProjectApp.listModule?.animateOutCurrentItems) {
                            await ProjectApp.listModule.animateOutCurrentItems(true);
                            await new Promise(r => setTimeout(r, 100));
                        }
                    }

                    if (projectCollection) projectCollection.classList.add('is--hidden');
                    if (swipersContainer) swipersContainer.classList.remove('is--hidden');
                    if (projectList) {
                        projectList.classList.add('hide');
                        projectList.setAttribute('aria-hidden', 'true');
                    }
                    if (ProjectApp.listModule?.cleanupInfiniteScroll) ProjectApp.listModule.cleanupInfiniteScroll();

                    const category = ProjectApp.state?.currentCategory || 'all';

                    if (ProjectApp.swiperModule?._applyFilter) {
                        ProjectApp.swiperModule._applyFilter(category);
                        if (ProjectApp.swiperModule?.swiper) {
                            const visibleIndices = ProjectApp.swiperModule._getVisibleIndices();
                            const currentIdx = ProjectApp.swiperModule._getActiveDataIndex(ProjectApp.swiperModule.swiper);

                            if (visibleIndices.length && !visibleIndices.includes(currentIdx)) {
                                const newIdx = visibleIndices[0];
                                ProjectApp.swiperModule.swiper.activeIndex = newIdx;
                                ProjectApp.swiperModule.swiper.realIndex = newIdx;
                                ProjectApp.swiperModule.swiper.updateSlidesClasses();
                            }
                            ProjectApp.swiperModule.applyLogicalPrevNextClasses(ProjectApp.swiperModule.swiper);
                        }
                    }

                    if (ProjectApp.swiperModule?.forceVideoSync) {
                        ProjectApp.swiperModule.forceVideoSync();
                    }

                    const currentSwiper =
                        document.querySelector('.swipers-container .project-swiper.is--visible, .swipers-container .project-swiper[data-active="1"]')
                        || document.querySelector(`.swipers-container .swiper[data-category="${category}"]`)
                        || document.querySelector('.swipers-container .project-swiper');

                    if (currentSwiper) {
                        ProjectApp.swiperFx.setVisible(currentSwiper);

                        const activeSlide = currentSwiper.querySelector('.swiper-slide-active, .swiper-slide.is--active-logical');
                        const prevSlides = currentSwiper.querySelectorAll('.swiper-slide-prev, .is--prev-logical');

                        if (activeSlide && window.gsap) {
                            const projectTop = activeSlide.querySelectorAll('.project-top');
                            const projectBottom = activeSlide.querySelectorAll('.project-bottom');
                            const bgBlocks = activeSlide.querySelectorAll('.background-video-block, .video-wrapper, .video-spacer');
                            const previewTop = activeSlide.querySelectorAll('.preview-block.is--top');
                            const previewBottom = activeSlide.querySelectorAll('.preview-block.is--bottom');
                            const previewWrapper = activeSlide.querySelector('.preview-wrapper');
                            const nameLeftLines = activeSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                            const nameRightLines = activeSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');

                            const playerMask = document.querySelector('.player-mask');
                            if (playerMask) {
                                playerMask.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
                            }

                            if (projectTop.length) gsap.set(projectTop, { y: '100%' });
                            if (projectBottom.length) gsap.set(projectBottom, { y: '100%' });
                            if (bgBlocks.length) gsap.set(bgBlocks, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });
                            if (previewWrapper) gsap.set(previewWrapper, { opacity: 0 });
                            if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)' });
                            if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' });
                            if (nameLeftLines.length) gsap.set(nameLeftLines, { y: '100%' });
                            if (nameRightLines.length) gsap.set(nameRightLines, { y: '100%' });

                            const tl = gsap.timeline();
                            const duration = 0.8;
                            const ease = 'power2.out';
                            const headingEase = 'power2.out';
                            const stagger = 0.08;

                            if (playerMask) {
                                tl.set(playerMask, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, 0);
                            }

                            if (projectTop.length) {
                                tl.to(projectTop, { 
                                    y: '0%', 
                                    duration, 
                                    ease,
                                    clearProps: 'transform'
                                }, 0);
                            }

                            if (projectBottom.length) {
                                tl.to(projectBottom, { 
                                    y: '0%', 
                                    duration, 
                                    ease,
                                    clearProps: 'transform'
                                }, 0);
                            }

                            if (bgBlocks.length) {
                                tl.to(bgBlocks, { 
                                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
                                    duration: duration * 0.8, 
                                    ease 
                                }, 0);
                            }

                            if (previewWrapper) {
                                tl.to(previewWrapper, { 
                                    opacity: 1, 
                                    duration: duration * 0.8, 
                                    ease 
                                }, 0);
                            }

                            if (previewTop.length) {
                                tl.to(previewTop, { 
                                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
                                    duration, 
                                    ease 
                                }, 0);
                            }

                            if (previewBottom.length) {
                                tl.to(previewBottom, { 
                                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
                                    duration, 
                                    ease 
                                }, 0);
                            }

                            if (nameLeftLines.length) {
                                tl.to(nameLeftLines, { 
                                    y: '0%', 
                                    delay: 0.2, 
                                    duration, 
                                    ease: headingEase, 
                                    stagger,
                                    clearProps: 'transform'
                                }, 0);
                            }

                            if (nameRightLines.length) {
                                tl.to(nameRightLines, { 
                                    y: '0%', 
                                    delay: 0.2, 
                                    duration, 
                                    ease: headingEase, 
                                    stagger,
                                    clearProps: 'transform'
                                }, 0);
                            }

                            await tl;

                            prevSlides.forEach(slide => {
                                const prevPreviewWrapper = slide.querySelector('.preview-wrapper');
                                if (prevPreviewWrapper) {
                                    prevPreviewWrapper.style.removeProperty('visibility');
                                }
                            });

                            ProjectApp._revealedActive.set(currentSwiper, activeSlide);
                            if (ProjectApp.swiperModule?.updatePreviews && ProjectApp.swiperModule.swiper) {
                                ProjectApp.swiperModule.updatePreviews(ProjectApp.swiperModule.swiper, 'next');
                                ProjectApp.swiperModule._resetHeadingPositions(currentSwiper);
                            }
                        }

                        ProjectApp.visibleCleaner.scheduleFor(currentSwiper, 0);
                    }

                    this.bindRevealOnSwipers();
                    ProjectApp.eventHandlers.setupSharedListeners();
                    ProjectApp.state.currentView = 'swiper';
                    this._resetPlayerAfterViewSwitch();

                    if (ProjectApp.playerModule?._destroyListScrollVideoChange) {
                        ProjectApp.playerModule._destroyListScrollVideoChange();
                    }
                }
            } finally {
                ProjectApp.uiLock?.unlock();
            }
        },

        bindRevealOnSwipers() {
            const containers = Array.from(document.querySelectorAll('.swipers-container .project-swiper'));
            containers.forEach(swiperEl => {
                const inst = swiperEl && swiperEl.swiper;
                if (!inst || inst._revealBound) return;
                inst._revealBound = true;
                inst.on('init', () => {
                });
                inst.on('slideChangeTransitionStart', () => {
                });
            });
        },

        revealCurrentActive(forceReset = false) {
            const visibleSwiper = document.querySelector('.project-swiper.is--visible') || document.querySelector('.swipers-container .project-swiper');
            if (!visibleSwiper) return Promise.resolve();
            const inst = visibleSwiper.swiper;
            const active = inst ? inst.slides[inst.activeIndex] : visibleSwiper.querySelector('.swiper-slide-active, .is--active-logical');
            if (!active) return Promise.resolve();
            if (forceReset) ProjectApp.slideHelpers.setSlideBaseline(active);
            return ProjectApp.slideHelpers.revealSlide(active, 0.8);
        },

        animateOutListBackground() {
            return Promise.resolve();
        },
        animateInListBackground() {
            return Promise.resolve();
        },
        animateOutSwiperToBaseline() {
            const vis = ProjectApp.swiperFx.getVisible();
            return vis ? ProjectApp.swiperFx.animateOut(vis) : Promise.resolve();
        },

        initSwitchAnimation() {
            ProjectApp.viewSwitcher.cleanupSwitchAnimation();
            ProjectApp.state.switchAnim.filterButtons = Array.from(document.querySelectorAll('.filter-item'));
            ProjectApp.state.switchAnim.optionBlocks = Array.from(document.querySelectorAll('.option-item'));

            if (ProjectApp.modeSwitchModule?.init) {
                ProjectApp.modeSwitchModule.init();
            }

            ProjectApp.state.switchAnim.filterButtons.forEach((btn) => {
                const onFilterClick = async (e) => {
                    const isMobile = window.innerWidth <= 991;
                    const mobileFilter = ProjectApp.mobileFilter;

                    if (isMobile && mobileFilter && typeof mobileFilter.isAnimating === 'function' && mobileFilter.isAnimating()) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }

                    const isExpanded = mobileFilter && typeof mobileFilter.isExpanded === 'function'
                      ? mobileFilter.isExpanded()
                      : false;
                    const isAlreadyActive = btn.classList.contains('is--active');

                    if (isMobile && mobileFilter) {
                        if (!isExpanded && isAlreadyActive && typeof mobileFilter.expand === 'function') {
                            e.preventDefault();
                            e.stopPropagation();
                            mobileFilter.expand();
                            return;
                        }

                        if (isExpanded && isAlreadyActive) {
                            e.preventDefault();
                            e.stopPropagation();
                            mobileFilter.collapse();
                            return;
                        }

                        if (isExpanded && !isAlreadyActive && typeof mobileFilter.selectItem === 'function') {
                            e.preventDefault();
                            e.stopPropagation();

                            await mobileFilter.selectItem(btn);

                            const input = btn.querySelector('input[type="radio"][name="radio"]');
                            if (input && !input.checked) {
                                input.checked = true;
                                const originalCollapse = mobileFilter.collapse;
                                mobileFilter._skipNextCollapse = true;
                                input.dispatchEvent(new Event('change', { bubbles: true }));
                                mobileFilter._skipNextCollapse = false;
                            }
                            return;
                        }
                    }

                    if (!btn.classList.contains('is--active')) {
                        ProjectApp.state.switchAnim.filterButtons.forEach(b => b.classList.remove('is--active'));
                        btn.classList.add('is--active');
                    }

                    const input = btn.querySelector('input[type="radio"][name="radio"]');
                    if (input && !input.checked) {
                        input.checked = true;
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                };

                ProjectApp.viewSwitcher.addTrackedListener(btn, 'click', onFilterClick);
            });

            ProjectApp.state.switchAnim.optionBlocks.forEach((opt) => {
                const onOptionClick = () => {
                    if (!opt.classList.contains('is--active')) {
                        ProjectApp.state.switchAnim.optionBlocks.forEach(b => b.classList.remove('is--active'));
                        opt.classList.add('is--active');
                        if (opt.hasAttribute('data-list')) {
                            ProjectApp.viewSwitcher.switchView('list');
                        } else {
                            ProjectApp.viewSwitcher.switchView('swiper');
                        }
                    }
                };
                ProjectApp.viewSwitcher.addTrackedListener(opt, 'click', onOptionClick);
            });
        },

        cleanupSwitchAnimation() {
            if (ProjectApp.modeSwitchModule?.cleanup) {
                ProjectApp.modeSwitchModule.cleanup();
            }

            ProjectApp.state.switchAnim.listeners.forEach(({target, type, handler, options}) => {
                try { target.removeEventListener(type, handler, options); } catch(e) {}
            });
            ProjectApp.state.switchAnim.listeners = [];
            ProjectApp.state.switchAnim.filterButtons = [];
            ProjectApp.state.switchAnim.optionBlocks = [];
        },

        addTrackedListener(target, type, handler, options) {
            target.addEventListener(type, handler, options || false);
            ProjectApp.state.switchAnim.listeners.push({ target, type, handler, options: options || false });
        }
    };


// ═══ SCRIPT #15 (9263 chars) ═══

(function() {    
    const hasGSAP = () => typeof window.gsap !== 'undefined';
    const twoDigit = (n) => (Number(n) || 0) < 10 ? '0' + n : String(n);
    
    let isFilterAnimating = false;
    let pendingCategory = null;
    
    function normalizeCategory(v) {
        const s = String(v || 'all').trim().toLowerCase();
        const map = {
            'tv & film': 'tv-film',
            'tv film': 'tv-film',
            'tvfilm': 'tv-film',
            'tv_and_film': 'tv-film',
            'editorials': 'editorial',
            'ads': 'commercial',
            'ad': 'commercial'
        };
        return map[s] || s || 'all';
    }

    function getVisibleSwiper() {
        return document.querySelector('.project-swiper.is--all.is--visible');
    }

    function getListRoot() {
        return document.querySelector('.project-list');
    }

    function countSlidesByFilter(swiperEl, filterValue) {
        if (!swiperEl) return 0;
        const slides = Array.from(swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide'));
        
        if (!filterValue || filterValue === 'all') return slides.length;
        
        const normalized = normalizeCategory(filterValue);
        return slides.filter(slide => 
            normalizeCategory(slide.getAttribute('data-filter')) === normalized
        ).length;
    }

    function readAllCountsFromDOM() {
        const swiperEl = document.querySelector('.project-swiper.is--all');
        return {
            all: countSlidesByFilter(swiperEl, 'all'),
            editorial: countSlidesByFilter(swiperEl, 'editorial'),
            'tv-film': countSlidesByFilter(swiperEl, 'tv-film'),
            commercial: countSlidesByFilter(swiperEl, 'commercial')
        };
    }

    function initializeTotalCounts() {
        if (ProjectApp.state.countsInitialized) return;
        
        ProjectApp.state.totalCounts = readAllCountsFromDOM();
        updateAllCountDisplays();
        ProjectApp.state.countsInitialized = true;
    }

    function updateAllCountDisplays() {
        const tc = ProjectApp.state.totalCounts;
        if (!tc) return;
        
        document.querySelectorAll('[data-total]').forEach(el => el.textContent = twoDigit(tc.all));
        document.querySelectorAll('[data-editorial]').forEach(el => el.textContent = twoDigit(tc.editorial));
        document.querySelectorAll('[data-tv-film]').forEach(el => el.textContent = twoDigit(tc['tv-film']));
        document.querySelectorAll('[data-commercial]').forEach(el => el.textContent = twoDigit(tc.commercial));
        
        updateCurrentTotalCount();
    }

    function updateCurrentTotalCount() {
        const swiperEl = document.querySelector('.project-swiper.is--all');
        if (!swiperEl) return;

        const cat = normalizeCategory(ProjectApp.state.currentCategory || 'all');

        const slides = Array.from(swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide'));
        const count = slides.filter(slide => !slide.classList.contains('is--filtered-out')).length;

        document.querySelectorAll('[data-current-total]').forEach(el => {
            el.textContent = twoDigit(count);
        });
    }

    function collapseBlocks(root) {
        if (!root) return;
        
        root.querySelectorAll(
            '.project-block, .background-block, .background-block .background-video, .video-spacer, .video-wrapper'
        ).forEach(el => {
            el.style.transition = 'none';
            el.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
        });
        
        root.querySelectorAll('.preview-block .preview-video').forEach(p => {
            const isTop = p.closest('.preview-block')?.classList.contains('is--top');
            p.style.transition = 'none';
            p.style.clipPath = isTop
                ? 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)'
                : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)';
        });
        
        const wrapper = root.querySelector('.preview-wrapper');
        if (wrapper) wrapper.style.opacity = '0';
    }

    function expandBlocks(root, opts = {}) {
        if (!root) return Promise.resolve();
        
        const fullClip = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        
        if (!hasGSAP()) {
            root.querySelectorAll('.project-block, .background-block').forEach(el => {
                el.style.clipPath = fullClip;
            });
            const wrapper = root.querySelector('.preview-wrapper');
            if (wrapper) wrapper.style.opacity = '1';
            return Promise.resolve();
        }
        
        const duration = opts.duration || 0.8;
        const ease = opts.ease || 'headingHoverEase';
        
        return new Promise(resolve => {
            const tl = gsap.timeline({ onComplete: resolve });
            
            root.querySelectorAll('.project-block, .background-block').forEach((block, i) => {
                tl.to(block, { clipPath: fullClip, duration, ease, delay: i * 0.02 }, 0);
            });
            
            root.querySelectorAll('.preview-block .preview-video').forEach(p => {
                tl.to(p, { clipPath: fullClip, duration, ease }, 0);
            });
        });
    }

    async function animateOutCurrentView(currentView) {
        if (currentView === 'swiper') {
            const swiperEl = getVisibleSwiper();
            if (!swiperEl) return;
            
            const active = swiperEl.querySelector('.swiper-slide-active, .is--active-logical') || swiperEl;
            collapseBlocks(active);
            await expandBlocks(active, { duration: 0.01 });
            
            if (ProjectApp.swiperModule?.animateSwiperOut) {
                await ProjectApp.swiperModule.animateSwiperOut(swiperEl);
            }
        } else if (currentView === 'list') {
            const list = getListRoot();
            if (!list) return;
            
            collapseBlocks(list);
            await expandBlocks(list, { duration: 0.4 });
        }
    }

    async function animateInNextView(nextView) {
        if (nextView === 'swiper') {
            let swiperEl = getVisibleSwiper();
            
            if (!swiperEl && ProjectApp.swiperModule?.initAll) {
                ProjectApp.swiperModule.initAll();
                swiperEl = getVisibleSwiper();
            }
            
            if (swiperEl) {
                const active = swiperEl.querySelector('.swiper-slide-active, .is--active-logical') || swiperEl;
                collapseBlocks(active);
                
                if (ProjectApp.swiperModule?.animateActiveSlideIn) {
                    await ProjectApp.swiperModule.animateActiveSlideIn(swiperEl);
                } else {
                    await expandBlocks(active, { duration: 0.8 });
                }
            }
        } else if (nextView === 'list') {
            const list = getListRoot();
            if (list) {
                collapseBlocks(list);
                await expandBlocks(list, { duration: 0.6 });
            }
        }
    }

    function showOnly(view) {
        const swiper = document.querySelector('.project-swiper.is--all');
        const list = getListRoot();
        
        if (swiper) swiper.style.display = view === 'swiper' ? '' : 'none';
        if (list) list.style.display = view === 'list' ? '' : 'none';
    }

async function setCategory(newCat) {
    const next = normalizeCategory(newCat);
    const prev = normalizeCategory(ProjectApp.state.currentCategory || 'all');
    
    if (prev === next) {
        updateCurrentTotalCount();
        return;
    }
    
    if (isFilterAnimating) {
        pendingCategory = next;
        return;
    }
    
    isFilterAnimating = true;
    
    try {
        ProjectApp.state.currentCategory = next;
        updateCurrentTotalCount();
        
        const view = ProjectApp.state.currentView || 'list';
        
        if (view === 'list' && ProjectApp.listModule?.rebuildListForCurrentFilter) {
            await ProjectApp.listModule.rebuildListForCurrentFilter();
        } else if (view === 'swiper' && ProjectApp.swiperModule?.switchToCategory) {
            await ProjectApp.swiperModule.switchToCategory(next, prev);
        }
    } finally {
        setTimeout(() => {
            isFilterAnimating = false;
            
            if (pendingCategory !== null && pendingCategory !== next) {
                const nextPending = pendingCategory;
                pendingCategory = null;
                setCategory(nextPending);
            } else {
                pendingCategory = null;
            }
        }, 600);
    }
}
    
    async function switchView(toView) {
        if (ProjectApp.viewSwitcher?.switchView) {
            return ProjectApp.viewSwitcher.switchView(toView);
        }
    }
    
    function isAnimating() {
        return isFilterAnimating;
    }
    
    function resetAnimationState() {
        isFilterAnimating = false;
        pendingCategory = null;
    }

    ProjectApp.filterModule = {
        initializeTotalCounts,
        updateAllCountDisplays,
        updateCurrentTotalCount,
        setCategory,
        switchView,
        normalizeCategory,
        isAnimating,
        resetAnimationState
    };
})();


// ═══ SCRIPT #16 (50520 chars) ═══

ProjectApp.swiperModule = {
    swiper: null,
    _pendingBackgroundUrl: null,
    _pendingPlayerUrl: null,
    _two(n) {
        n = Number(n) || 0;
        return n < 10 ? ('0' + n) : String(n);
    },
    _hasGSAP() {
        return typeof window.gsap !== 'undefined';
    },
    _normalizeCategory(cat) {
        const v = String(cat || 'all').trim().toLowerCase();
        if (v === 'tv & film' || v === 'tv film' || v === 'tvfilm' || v === 'tv_and_film') return 'tv-film';
        if (v === 'editorials') return 'editorial';
        if (v === 'ads' || v === 'ad') return 'commercial';
        if (!v) return 'all';
        return v;
    },
    _getOriginalSlides(swiper) {
        if (!swiper || !swiper.slides) return [];
        return Array.from(swiper.slides);
    },
    _getDataIndex(el) {
        if (!el) return null;
        const v = el.getAttribute('data-swiper-slide-index');
        if (v == null) return null;
        const n = Number(v);
        return Number.isFinite(n) ? n : null;
    },
    _getUniqueDataIndices(swiper) {
        const originals = this._getOriginalSlides(swiper);
        const seen = new Set();
        const list = [];
        originals.forEach(slide => {
            const idx = this._getDataIndex(slide);
            if (idx != null && !seen.has(idx)) {
                seen.add(idx);
                list.push(idx);
            }
        });
        return list;
    },
    _forEachByDataIndex(swiper, dataIdx, fn) {
        if (!swiper || !swiper.slides) return;
        const want = String(dataIdx);
        Array.from(swiper.slides).forEach(slide => {
            if (slide.getAttribute('data-swiper-slide-index') === want) fn(slide);
        });
    },
    _assignSourceIndices(wrapper) {
        const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
        slides.forEach((slide, i) => {
            slide.setAttribute('data-swiper-slide-index', String(i));
            slide.setAttribute('data-source-index', String(i));
        });
    },
    _assignPermanentNumbers(swiper) {
        if (!swiper || !swiper.slides) return;
        const slides = this._getOriginalSlides(swiper);
        slides.forEach((slide, i) => {
            const target = slide.querySelector('[data-slide-index]');
            if (target && !target.dataset.permanentNumber) {
                const displayNumber = this._two(i + 1);
                target.textContent = displayNumber;
                target.dataset.permanentNumber = displayNumber;
            }
        });
    },
    _isMobile() {
        return window.innerWidth <= 767;
    },
    _getDuration(desktop, mobile) {
        return this._isMobile() ? mobile : desktop;
    },
    _getStagger() {
        return this._isMobile() ? 0.05 : 0.08;
    },
    _setupPreviewClickHandlers(swiper) {
        if (!swiper || !swiper.slides) return;
        Array.from(swiper.slides).forEach(slide => {
            const prevPreview = slide.querySelector('.preview-video.is--prev');
            if (prevPreview && !prevPreview.dataset.clickHandlerAdded) {
                prevPreview.dataset.clickHandlerAdded = 'true';
                prevPreview.style.cursor = 'pointer';
                prevPreview.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.navigatePrev();
                });
            }
            const nextPreview = slide.querySelector('.preview-video.is--next');
            if (nextPreview && !nextPreview.dataset.clickHandlerAdded) {
                nextPreview.dataset.clickHandlerAdded = 'true';
                nextPreview.style.cursor = 'pointer';
                nextPreview.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.navigateNext();
                });
            }
        });
    },
    _getActiveDataIndex(swiper) {
        const activeEl = (swiper && swiper.slides) ? swiper.slides[swiper.activeIndex] : null;
        let idx = this._getDataIndex(activeEl);
        if (idx == null && swiper) {
            const set = this._getUniqueDataIndices(swiper);
            if (set.length) {
                const ri = Number(swiper.realIndex) || 0;
                idx = set[((ri % set.length) + set.length) % set.length];
            } else {
                idx = 0;
            }
        }
        return idx == null ? 0 : idx;
    },
    _getVisibleSlides() {
        if (!this.swiper) return [];
        const all = this._getOriginalSlides(this.swiper);
        return all.filter(slide => !slide.classList.contains('is--filtered-out'));
    },
    _getVisibleIndices() {
        const visible = this._getVisibleSlides();
        return visible.map(slide => this._getDataIndex(slide)).filter(idx => idx != null);
    },
    _slideMatchesFilter(slide, category) {
        if (!slide) return false;
        if (category === 'all') return true;
        const slideFilter = this._normalizeCategory(slide.getAttribute('data-filter') || '');
        return slideFilter === category;
    },
    _applyFilter(category) {
        if (!this.swiper) return;

        const normalizedCat = this._normalizeCategory(category);
        const slides = this._getOriginalSlides(this.swiper);

        slides.forEach((slide) => {
            const matches = this._slideMatchesFilter(slide, normalizedCat);
            slide.classList.toggle('is--filtered-out', !matches);

            if (!matches) {
                const videos = slide.querySelectorAll('video');
                videos.forEach(v => {
                    v.pause();
                    v.currentTime = 0;
                });
            }
        });
    },
    _resetHeadingPositions(swiperEl) {
        if (!swiperEl || !window.gsap) return;

        const activeSlide = swiperEl.querySelector('.swiper-slide-active, .is--active-logical');
        if (activeSlide) {
            const activeRight = activeSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
            const activeLeft = activeSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
            gsap.set(activeRight, { y: '0%' });
            gsap.set(activeLeft, { y: '0%' });

            const activeTextMoving = activeSlide.querySelectorAll('.project-top .text-mono.is--moving');
            const activeTextAbs = activeSlide.querySelectorAll('.project-bottom .text-abs');
            const activeTextMonoFirst = activeSlide.querySelectorAll('.project-bottom .text-mono:first-of-type');
            if (activeTextMoving.length) gsap.set(activeTextMoving, { y: '0%' });
            if (activeTextAbs.length) gsap.set(activeTextAbs, { y: '0%' });
            if (activeTextMonoFirst.length) gsap.set(activeTextMonoFirst, { y: '0%' });

            const activeTotalNumber = activeSlide.querySelectorAll('.project-bottom .text-mono.is--total-number');
            if (activeTotalNumber.length) gsap.set(activeTotalNumber, { y: '0%', opacity: 1 });

            const activeTextMonoSecond = activeSlide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
            const activeIconsWrapper = activeSlide.querySelectorAll('.project-top .icons-wrapper');
            const activeTextMobileHide = activeSlide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
            const activeTextStatic = activeSlide.querySelectorAll('.project-top .text-mono.is--static');
            if (activeTextMonoSecond.length) gsap.set(activeTextMonoSecond, { opacity: 1 });
            if (activeIconsWrapper.length) gsap.set(activeIconsWrapper, { opacity: 1 });
            if (activeTextMobileHide.length) gsap.set(activeTextMobileHide, { opacity: 1 });
            if (activeTextStatic.length) gsap.set(activeTextStatic, { opacity: 1 });

            const activePreviewTop = activeSlide.querySelectorAll('.preview-block.is--top');
            const activePreviewBottom = activeSlide.querySelectorAll('.preview-block.is--bottom');
            if (activePreviewTop.length) gsap.set(activePreviewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
            if (activePreviewBottom.length) gsap.set(activePreviewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
        }

        const prevSlides = swiperEl.querySelectorAll('.is--prev-logical');
        prevSlides.forEach(slide => {
            const rightLines = slide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
            const leftLines = slide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
            gsap.set(rightLines, { y: '110%' });
            gsap.set(leftLines, { y: '-110%' });

            const textMoving = slide.querySelectorAll('.project-top .text-mono.is--moving');
            const textAbs = slide.querySelectorAll('.project-bottom .text-abs');
            const textMonoFirst = slide.querySelectorAll('.project-bottom .text-mono:first-of-type');
            if (textMoving.length) gsap.set(textMoving, { y: '-100%' });
            if (textAbs.length) gsap.set(textAbs, { y: '-100%' });
            if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '-100%' });

            const totalNumber = slide.querySelectorAll('.project-bottom .text-mono.is--total-number');
            if (totalNumber.length) gsap.set(totalNumber, { y: '-100%', opacity: 0 });

            const textMonoSecond = slide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
            const iconsWrapper = slide.querySelectorAll('.project-top .icons-wrapper');
            const textMobileHide = slide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
            const textStatic = slide.querySelectorAll('.project-top .text-mono.is--static');
            if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
            if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
            if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
            if (textStatic.length) gsap.set(textStatic, { opacity: 0 });

            const previewTop = slide.querySelectorAll('.preview-block.is--top');
            const previewBottom = slide.querySelectorAll('.preview-block.is--bottom');
            if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
            if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
        });

        const nextSlides = swiperEl.querySelectorAll('.is--next-logical');
        nextSlides.forEach(slide => {
            const rightLines = slide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
            const leftLines = slide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
            gsap.set(rightLines, { y: '-110%' });
            gsap.set(leftLines, { y: '110%' });

            const textMoving = slide.querySelectorAll('.project-top .text-mono.is--moving');
            const textAbs = slide.querySelectorAll('.project-bottom .text-abs');
            const textMonoFirst = slide.querySelectorAll('.project-bottom .text-mono:first-of-type');
            if (textMoving.length) gsap.set(textMoving, { y: '100%' });
            if (textAbs.length) gsap.set(textAbs, { y: '100%' });
            if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '100%' });

            const totalNumber = slide.querySelectorAll('.project-bottom .text-mono.is--total-number');
            if (totalNumber.length) gsap.set(totalNumber, { y: '100%', opacity: 0 });

            const textMonoSecond = slide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
            const iconsWrapper = slide.querySelectorAll('.project-top .icons-wrapper');
            const textMobileHide = slide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
            const textStatic = slide.querySelectorAll('.project-top .text-mono.is--static');
            if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
            if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
            if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
            if (textStatic.length) gsap.set(textStatic, { opacity: 0 });

            const previewTop = slide.querySelectorAll('.preview-block.is--top');
            const previewBottom = slide.querySelectorAll('.preview-block.is--bottom');
            if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });
            if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
        });
    },
    getLogicalNeighbors(swiper) {
        const visibleIndices = this._getVisibleIndices();
        const N = visibleIndices.length;
        if (!N) return { prev: 0, next: 0, active: 0, N: 0, indices: visibleIndices };

        const activeIdxVal = this._getActiveDataIndex(swiper);
        const pos = visibleIndices.indexOf(activeIdxVal);
        const i = (pos === -1) ? 0 : pos;
        const prev = visibleIndices[(i - 1 + N) % N];
        const next = visibleIndices[(i + 1) % N];

        return { prev, next, active: activeIdxVal, N, indices: visibleIndices };
    },

    applyLogicalPrevNextClasses(swiper) {
        if (!swiper || !swiper.wrapperEl) return;
        Array.from(swiper.slides).forEach(el =>
            el.classList.remove('is--prev-logical', 'is--next-logical', 'is--active-logical')
        );

        const { prev, active, next, N } = this.getLogicalNeighbors(swiper);
        if (!N) return;

        this._forEachByDataIndex(swiper, prev, el => el.classList.add('is--prev-logical'));
        this._forEachByDataIndex(swiper, active, el => el.classList.add('is--active-logical'));
        this._forEachByDataIndex(swiper, next, el => el.classList.add('is--next-logical'));
    },
    _clearClipInlineStyles(swiperEl) {
        if (!swiperEl) return;
        const nodes = swiperEl.querySelectorAll(
            '.background-block, .project-block, .preview-block .preview-video'
        );
        nodes.forEach(el => {
            el.style.clipPath = '';
            el.style.webkitClipPath = '';
            el.style.transition = '';
        });
        if (this._hasGSAP()) {
            nodes.forEach(el => gsap.set(el, { clearProps: 'clipPath,webkitClipPath,transition' }));
        }
    },
    _armSlide(slide) {
        if (slide) slide.classList.add('__armed');
    },
    _armAllSlides(swiper) {
        if (!swiper || !swiper.slides) return;
        Array.from(swiper.slides).forEach(s => this._armSlide(s));
    },
    _armCurrentNext(swiper) {
        if (!swiper || !swiper.slides) return;
        const { prev, next, active } = this.getLogicalNeighbors(swiper);
        const armByIdx = (idx) => this._forEachByDataIndex(swiper, idx, el => this._armSlide(el));
        armByIdx(prev);
        armByIdx(active);
        armByIdx(next);
    },
    _ensureArmed(slide) {
        if (slide) slide.classList.add('__armed');
    },
    _animateSlideOutOnce(slide, tl, opts, direction) {
        if (!slide || !window.gsap) return;
        const d = (opts && opts.duration) || 0.8;
        const ez = (opts && opts.ease) || 'headingHoverEase';
        const stagger = (opts && opts.stagger) || 0.08;
        const isFilterChange = (opts && opts.isFilterChange) || false;
        this._ensureArmed(slide);

        const rightLines = slide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
        const leftLines = slide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');

        const textMoving = slide.querySelectorAll('.project-top .text-mono.is--moving');
        const textAbs = slide.querySelectorAll('.project-bottom .text-abs');
        const textMonoFirst = slide.querySelectorAll('.project-bottom .text-mono:first-of-type');

        const textMonoSecond = slide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
        const iconsWrapper = slide.querySelectorAll('.project-top .icons-wrapper');
        const textMobileHide = slide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
        const textStatic = slide.querySelectorAll('.project-top .text-mono.is--static');

        const totalNumber = slide.querySelectorAll('.project-bottom .text-mono.is--total-number');

        if (direction === 'next') {
            rightLines.forEach((line, i) => tl.to(line, { y: '-110%', duration: d, ease: ez }, i * stagger));
            leftLines.forEach((line, i) => tl.to(line, { y: '110%', duration: d, ease: ez }, i * stagger));

            if (textMoving.length) tl.to(textMoving, { y: '-100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);
            if (textAbs.length) tl.to(textAbs, { y: '-100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);
            if (textMonoFirst.length) tl.to(textMonoFirst, { y: '-100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);

            if (totalNumber.length) {
                if (isFilterChange) {
                    tl.to(totalNumber, { y: '-100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);
                } else {
                    tl.set(totalNumber, { opacity: 0 }, 0);
                }
            }
        } else {
            rightLines.forEach((line, i) => tl.to(line, { y: '110%', duration: d, ease: ez }, i * stagger));
            leftLines.forEach((line, i) => tl.to(line, { y: '-110%', duration: d, ease: ez }, i * stagger));

            if (textMoving.length) tl.to(textMoving, { y: '100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);
            if (textAbs.length) tl.to(textAbs, { y: '100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);
            if (textMonoFirst.length) tl.to(textMonoFirst, { y: '100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);

            if (totalNumber.length) {
                if (isFilterChange) {
                    tl.to(totalNumber, { y: '100%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);
                } else {
                    tl.set(totalNumber, { opacity: 0 }, 0);
                }
            }
        }

        if (textMonoSecond.length) tl.set(textMonoSecond, { opacity: 0 }, 0);
        if (iconsWrapper.length) tl.set(iconsWrapper, { opacity: 0 }, 0);
        if (textMobileHide.length) tl.set(textMobileHide, { opacity: 0 }, 0);
        if (textStatic.length) tl.set(textStatic, { opacity: 0 }, 0);

        const projectBlocks = slide.querySelectorAll('.project-block');
        const bgVideoBlocks = slide.querySelectorAll('.background-video-block');
        projectBlocks.forEach(b => tl.to(b, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)', duration: d, ease: ez }, 0));
        if (bgVideoBlocks.length) tl.to(bgVideoBlocks, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)', duration: d, ease: ez }, 0);

        if (direction === 'prev') {
            const previewBlockBottom = slide.querySelectorAll('.preview-block.is--bottom');
            const previewBlockTop = slide.querySelectorAll('.preview-block.is--top');

            previewBlockBottom.forEach(b => tl.to(b, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', duration: d, ease: ez }, 0));
            previewBlockTop.forEach(b => tl.to(b, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: d, ease: ez }, 0));
        }
    },
    animateSwiperOut(slideOrSwiperEl, direction, isFilterChange = false) {
        return new Promise((resolve) => {
            if (!this._hasGSAP()) {
                resolve();
                return;
            }
            let activeSlide;
            if (slideOrSwiperEl && slideOrSwiperEl.classList && slideOrSwiperEl.classList.contains('swiper-slide')) {
                activeSlide = slideOrSwiperEl;
            } else {
                const swiperEl = slideOrSwiperEl;
                if (!swiperEl) {
                    resolve();
                    return;
                }
                activeSlide = swiperEl.querySelector('.swiper-slide-active, .is--active-logical');
            }
            if (!activeSlide) {
                resolve();
                return;
            }
            const swiperEl = activeSlide.closest('.project-swiper');
            const elementsToAnimate = swiperEl ? swiperEl.querySelectorAll('.background-video-block, .background-block, .project-block') : [];
            elementsToAnimate.forEach(el => gsap.set(el, { transition: 'none' }));
            const tl = gsap.timeline({
                onComplete: () => {
                    elementsToAnimate.forEach(el => gsap.set(el, { clearProps: 'transition' }));
                    resolve();
                }
            });
            this._animateSlideOutOnce(activeSlide, tl, {
                duration: .8,
                ease: 'headingHoverEase',
                stagger: this._getStagger(),
                isFilterChange: isFilterChange
            }, direction);
            if (!tl.getChildren().length) {
                elementsToAnimate.forEach(el => gsap.set(el, { clearProps: 'transition' }));
                resolve();
            }
        });
    },
    async animateActiveSlideIn(swiperEl, direction, isFilterChange = false) {
        if (!swiperEl) return Promise.resolve();

        this._clearClipInlineStyles(swiperEl);

        const activeSlide = swiperEl.querySelector('.swiper-slide-active, .is--active-logical');
        const prevSlides = swiperEl.querySelectorAll('.is--prev-logical');
        const nextSlides = swiperEl.querySelectorAll('.is--next-logical');

        if (!activeSlide) {
            return Promise.resolve();
        }

        activeSlide.style.setProperty('opacity', '1', 'important');
        activeSlide.style.transition = 'none';

        if (window.gsap) {
            gsap.killTweensOf(activeSlide);
            gsap.set(prevSlides, { opacity: 1 });
            gsap.set(nextSlides, { opacity: 1 });
        } else {
            prevSlides.forEach(s => { s.style.opacity = '1'; });
            nextSlides.forEach(s => { s.style.opacity = '1'; });
        }

        if (direction === 'next') {
            prevSlides.forEach(slide => {
                if (!window.gsap) return;
                const previewWrapper = slide.querySelector('.preview-wrapper');
                const previewTop = slide.querySelectorAll('.preview-block.is--top');
                const previewBottom = slide.querySelectorAll('.preview-block.is--bottom');
                if (previewWrapper) gsap.killTweensOf(previewWrapper);
                if (previewTop.length) previewTop.forEach(el => gsap.killTweensOf(el));
                if (previewBottom.length) previewBottom.forEach(el => gsap.killTweensOf(el));
                if (previewWrapper) gsap.set(previewWrapper, { opacity: 1 });
                if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
                if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
            });
        } else {
            prevSlides.forEach(slide => {
                if (ProjectApp.slidePresets && ProjectApp.slidePresets.setPrevSlidesHidden) {
                    ProjectApp.slidePresets.setPrevSlidesHidden(slide);
                }
            });
        }

        const textMoving = activeSlide.querySelectorAll('.project-top .text-mono.is--moving');
        const textAbs = activeSlide.querySelectorAll('.project-bottom .text-abs');
        const textMonoFirst = activeSlide.querySelectorAll('.project-bottom .text-mono:first-of-type');
        const textMonoSecond = activeSlide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
        const iconsWrapper = activeSlide.querySelectorAll('.project-top .icons-wrapper');
        const textMobileHide = activeSlide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
        const textStatic = activeSlide.querySelectorAll('.project-top .text-mono.is--static');

        const totalNumber = activeSlide.querySelectorAll('.project-bottom .text-mono.is--total-number');

        if (window.gsap) {
            if (direction === 'next') {
                if (textMoving.length) gsap.set(textMoving, { y: '100%' });
                if (textAbs.length) gsap.set(textAbs, { y: '100%' });
                if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '100%' });

                if (totalNumber.length) {
                    if (isFilterChange) {
                        gsap.set(totalNumber, { y: '100%', opacity: 1 });
                    } else {
                        gsap.set(totalNumber, { y: '0%', opacity: 0 });
                    }
                }
            } else {
                if (textMoving.length) gsap.set(textMoving, { y: '-100%' });
                if (textAbs.length) gsap.set(textAbs, { y: '-100%' });
                if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '-100%' });

                if (totalNumber.length) {
                    if (isFilterChange) {
                        gsap.set(totalNumber, { y: '-100%', opacity: 1 });
                    } else {
                        gsap.set(totalNumber, { y: '0%', opacity: 0 });
                    }
                }
            }

            if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
            if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
            if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
            if (textStatic.length) gsap.set(textStatic, { opacity: 0 });
        }

        const opts = {
            duration: 0.8,
            ease: 'headingHoverEase',
            stagger: this._getStagger(),
            projectDelay: 0.18,
            direction: direction,
            isFilterChange: isFilterChange,
            onStart: () => {
                activeSlide.style.setProperty('opacity', '1', 'important');
                activeSlide.style.transition = 'none';
            },
            onComplete: () => {
                prevSlides.forEach(slide => {
                    if (ProjectApp.slidePresets && ProjectApp.slidePresets.resetPrevSlidesVisibility) {
                        ProjectApp.slidePresets.resetPrevSlidesVisibility(slide);
                    }
                });
                activeSlide.style.removeProperty('transition');
                activeSlide.style.removeProperty('opacity');
            }
        };

        if (ProjectApp.slideAnimations && ProjectApp.slideAnimations.setSlideHidden) {
            ProjectApp.slideAnimations.setSlideHidden(activeSlide, direction);
        }

        let textAnimationPromise = Promise.resolve();
        if (window.gsap) {
            textAnimationPromise = new Promise(resolve => {
                const textTl = gsap.timeline({ onComplete: resolve });

                const textDur = this._isMobile() ? 0.8 : 1.2;
                if (textMoving.length) textTl.to(textMoving, { y: '0%', duration: textDur, ease: 'mainEase' }, 0);
                if (textAbs.length) textTl.to(textAbs, { y: '0%', duration: textDur, ease: 'mainEase' }, 0);
                if (textMonoFirst.length) textTl.to(textMonoFirst, { y: '0%', duration: textDur, ease: 'mainEase' }, 0);

                if (totalNumber.length) {
                    if (isFilterChange) {
                        textTl.to(totalNumber, { y: '0%', duration: this._isMobile() ? 0.8 : 1.2, ease: 'mainEase' }, 0);
                    } else {
                        textTl.to(totalNumber, { opacity: 1, duration: 0 }, 0);
                    }
                }

                if (textMonoSecond.length) textTl.set(textMonoSecond, { opacity: 1 }, 0);
                if (iconsWrapper.length) textTl.set(iconsWrapper, { opacity: 1 }, 0);
                if (textMobileHide.length) textTl.set(textMobileHide, { opacity: 1 }, 0);
                if (textStatic.length) textTl.set(textStatic, { opacity: 1 }, 0);

                if (!textTl.getChildren().length) resolve();
            });
        }

        if (ProjectApp.slideAnimations && ProjectApp.slideAnimations.animateSlideIn) {
            await Promise.all([
                ProjectApp.slideAnimations.animateSlideIn(activeSlide, opts),
                textAnimationPromise
            ]);
            return;
        }

        await textAnimationPromise;
    },
    updatePreviews(swiper, direction) {
        if (ProjectApp.playerModule?.state?.isPlayerNavigation) {
            this.applyLogicalPrevNextClasses(swiper);
            return;
        }
        if (!swiper || !swiper.slides || !swiper.slides.length) return;
        this.applyLogicalPrevNextClasses(swiper);
        const activeEl = swiper.slides[swiper.activeIndex];
        if (!activeEl) return;

        const { prev: prevIdx, next: nextIdx } = this.getLogicalNeighbors(swiper);
        const slides = this._getOriginalSlides(swiper);
        const visibleIndices = this._getVisibleIndices();

        const findByIdx = (idx) => {
            return slides.find(sl => sl.getAttribute('data-swiper-slide-index') === String(idx)) || null;
        };

        const prevSlide = findByIdx(prevIdx);
        const nextSlide = findByIdx(nextIdx);
        const activeSlide = findByIdx(this._getActiveDataIndex(swiper));
        const prevPos = visibleIndices.indexOf(prevIdx);
        const nextPos = visibleIndices.indexOf(nextIdx);
        const beforePrevIdx = visibleIndices[(prevPos - 1 + visibleIndices.length) % visibleIndices.length];
        const afterNextIdx = visibleIndices[(nextPos + 1) % visibleIndices.length];
        const beforePrevSlide = findByIdx(beforePrevIdx);
        const afterNextSlide = findByIdx(afterNextIdx);

        const prevPreviewVideo = activeEl.querySelector('.preview-video.is--prev');
        const nextPreviewVideo = activeEl.querySelector('.preview-video.is--next');
        const prevPreviewSource = prevPreviewVideo ? prevPreviewVideo.querySelector('source') : null;
        const nextPreviewSource = nextPreviewVideo ? nextPreviewVideo.querySelector('source') : null;
        const prevPreviewPoster = activeEl.querySelector('.preview-block:has(.preview-video.is--prev) .preview-video-poster');
        const nextPreviewPoster = activeEl.querySelector('.preview-block:has(.preview-video.is--next) .preview-video-poster');

        const nextSlideEl = swiper.el.querySelector('.is--next-logical');
        const nextSlidePrevPreview = nextSlideEl ? nextSlideEl.querySelector('.preview-video.is--prev') : null;
        const nextSlideNextPreview = nextSlideEl ? nextSlideEl.querySelector('.preview-video.is--next') : null;
        const nextSlidePrevPoster = nextSlideEl ? nextSlideEl.querySelector('.preview-block:has(.preview-video.is--prev) .preview-video-poster') : null;
        const nextSlideNextPoster = nextSlideEl ? nextSlideEl.querySelector('.preview-block:has(.preview-video.is--next) .preview-video-poster') : null;

        const prevSlideEl = swiper.el.querySelector('.is--prev-logical');
        const prevSlidePrevPreview = prevSlideEl ? prevSlideEl.querySelector('.preview-video.is--prev') : null;
        const prevSlideNextPreview = prevSlideEl ? prevSlideEl.querySelector('.preview-video.is--next') : null;
        const prevSlidePrevPoster = prevSlideEl ? prevSlideEl.querySelector('.preview-block:has(.preview-video.is--prev) .preview-video-poster') : null;
        const prevSlideNextPoster = prevSlideEl ? prevSlideEl.querySelector('.preview-block:has(.preview-video.is--next) .preview-video-poster') : null;

        const prevVideoLink = prevSlide ? prevSlide.querySelector('.video-link') : null;
        const nextVideoLink = nextSlide ? nextSlide.querySelector('.video-link') : null;
        const activeVideoLink = activeSlide ? activeSlide.querySelector('.video-link') : null;
        const afterNextVideoLink = afterNextSlide ? afterNextSlide.querySelector('.video-link') : null;
        const beforePrevVideoLink = beforePrevSlide ? beforePrevSlide.querySelector('.video-link') : null;

        const prevPoster = prevSlide ? prevSlide.querySelector('.video-poster') : null;
        const nextPoster = nextSlide ? nextSlide.querySelector('.video-poster') : null;
        const activePoster = activeSlide ? activeSlide.querySelector('.video-poster') : null;
        const afterNextPoster = afterNextSlide ? afterNextSlide.querySelector('.video-poster') : null;
        const beforePrevPoster = beforePrevSlide ? beforePrevSlide.querySelector('.video-poster') : null;

        const updateVideoSrc = (videoEl, sourceEl, newSrc, posterEl, posterSrc) => {
            if (!videoEl || !sourceEl || !newSrc) return;

            videoEl.setAttribute('loop', '');
            videoEl.setAttribute('playsinline', '');
            videoEl.setAttribute('preload', 'none');
            videoEl.removeAttribute('autoplay');
            videoEl.setAttribute('muted', '');
            videoEl.muted = true;

            if (sourceEl.getAttribute('data-src') !== newSrc) {
                sourceEl.setAttribute('data-src', newSrc);
                sourceEl.removeAttribute('src');
            }

            videoEl.pause();
            videoEl.currentTime = 0;

            if (posterEl && posterSrc) {
                posterEl.src = posterSrc;
                posterEl.style.opacity = '1';
            }
        };

        const setPosterOnly = (posterEl, posterSrc) => {
            if (!posterEl || !posterSrc) return;
            posterEl.src = posterSrc;
            posterEl.style.opacity = '1';
        };

        const setupHoverToPlay = (videoEl, posterEl) => {
            if (window.innerWidth <= 991) return;
            if (!videoEl || videoEl.dataset.hoverHandlerAdded) return;
            videoEl.dataset.hoverHandlerAdded = 'true';

            let isLoaded = false;
            const container = videoEl.parentElement;
            const sourceEl = videoEl.querySelector('source');

            container.addEventListener('mouseenter', () => {
                if (posterEl) {
                    posterEl.style.opacity = '0';
                }

                if (!isLoaded && sourceEl) {
                    const dataSrc = sourceEl.getAttribute('data-src');
                    if (dataSrc && !sourceEl.src) {
                        sourceEl.src = dataSrc;
                        videoEl.setAttribute('preload', 'auto');
                        videoEl.load();
                    }
                    isLoaded = true;
                }

                const playPromise = videoEl.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => {});
                }
            });

            container.addEventListener('mouseleave', () => {
                videoEl.pause();
                videoEl.currentTime = 0;

                if (posterEl) {
                    posterEl.style.opacity = '1';
                }
            });
        };

        if (prevVideoLink && prevPreviewVideo && prevPreviewSource) {
            const newSrc = prevVideoLink.href || prevVideoLink.getAttribute('href') || '';
            const posterSrc = prevPoster?.src || '';
            updateVideoSrc(prevPreviewVideo, prevPreviewSource, newSrc, prevPreviewPoster, posterSrc);
            setupHoverToPlay(prevPreviewVideo, prevPreviewPoster);
        }

        if (nextVideoLink && nextPreviewVideo && nextPreviewSource) {
            const newSrc = nextVideoLink.href || nextVideoLink.getAttribute('href') || '';
            const posterSrc = nextPoster?.src || '';
            updateVideoSrc(nextPreviewVideo, nextPreviewSource, newSrc, nextPreviewPoster, posterSrc);
            setupHoverToPlay(nextPreviewVideo, nextPreviewPoster);
        }

        if (nextSlidePrevPoster && activePoster?.src) {
            setPosterOnly(nextSlidePrevPoster, activePoster.src);
        }

        if (nextSlideNextPoster && afterNextPoster?.src) {
            setPosterOnly(nextSlideNextPoster, afterNextPoster.src);
        }

        if (prevSlideEl && !prevSlideEl.classList.contains('is--animating-out')) {
            if (prevSlidePrevPoster && beforePrevPoster?.src) {
                setPosterOnly(prevSlidePrevPoster, beforePrevPoster.src);
            }

            if (prevSlideNextPoster && activePoster?.src) {
                setPosterOnly(prevSlideNextPoster, activePoster.src);
            }
        }

        if (!this._backgroundAnimating && !this._playerAnimating) {
            this.updateBackgroundProjectVideos(activeVideoLink, prevVideoLink, nextVideoLink, direction);
        }
    },
    _updateVideoGroupToActive(videos, activeUrl, direction) {
        if (videos.length < 2) return;

        const playerMask = document.querySelector('.player-mask');
        if (playerMask?.classList.contains('is--full')) {
            return;
        }

        const firstVideo = videos[0];
        const isPlayerGroup = firstVideo?.closest('.player-video-block') !== null ||
            firstVideo?.classList.contains('player-video');

        const pendingKey = isPlayerGroup ? '_pendingPlayerUrl' : '_pendingBackgroundUrl';
        const animatingKey = isPlayerGroup ? '_playerAnimating' : '_backgroundAnimating';

        if (this[pendingKey] === activeUrl && !this[animatingKey]) {
            return;
        }

        const parent1 = videos[0].parentElement;
        const parent2 = videos[1].parentElement;
        const isSeparateBlocks = parent1 && parent2 &&
            parent1.classList.contains('player-video-block') &&
            parent2.classList.contains('player-video-block') &&
            parent1 !== parent2;

        const video1 = videos[0];
        const video2 = videos[1];
        const source1 = video1.querySelector('source');
        const source2 = video2.querySelector('source');

        if (!source1 || !source2) return;

        const block1 = isSeparateBlocks ? parent1 : null;
        const block2 = isSeparateBlocks ? parent2 : null;

        let currentZ1, currentZ2;
        if (isSeparateBlocks) {
            currentZ1 = parseInt(window.getComputedStyle(block1).zIndex) || parseInt(block1.style.zIndex) || 2;
            currentZ2 = parseInt(window.getComputedStyle(block2).zIndex) || parseInt(block2.style.zIndex) || 1;
        } else {
            currentZ1 = parseInt(video1.style.zIndex) || 2;
            currentZ2 = parseInt(video2.style.zIndex) || 1;
        }

        let activeVideo, transitionVideo, activeSource, transitionSource, activeBlock, transitionBlock;

        if (currentZ1 > currentZ2) {
            activeVideo = video1;
            transitionVideo = video2;
            activeSource = source1;
            transitionSource = source2;
            activeBlock = block1;
            transitionBlock = block2;
        } else {
            activeVideo = video2;
            transitionVideo = video1;
            activeSource = source2;
            transitionSource = source1;
            activeBlock = block2;
            transitionBlock = block1;
        }

        const currentActiveUrl = activeSource.src || activeSource.getAttribute('src') || '';

        if (currentActiveUrl === activeUrl) {
            return;
        }

        const activeTarget = isSeparateBlocks ? activeBlock : activeVideo;
        const transitionTarget = isSeparateBlocks ? transitionBlock : transitionVideo;

        if (this._hasGSAP()) {
            gsap.killTweensOf(activeTarget);
            gsap.killTweensOf(transitionTarget);
        }

        this[pendingKey] = activeUrl;
        this[animatingKey] = true;

        const self = this;
        const duration = this._isMobile() ? 0.8 : 1.35;

        const finalizeAnimation = (newTopTarget, newBottomTarget, newTopZ, newBottomZ) => {
            if (isSeparateBlocks) {
                block1.style.zIndex = (newTopTarget === block1) ? newTopZ : newBottomZ;
                block2.style.zIndex = (newTopTarget === block2) ? newTopZ : newBottomZ;
            } else {
                video1.style.zIndex = (newTopTarget === video1) ? newTopZ : newBottomZ;
                video2.style.zIndex = (newTopTarget === video2) ? newTopZ : newBottomZ;
            }
            gsap.set(newBottomTarget, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });
            gsap.set(newTopTarget, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
            self[pendingKey] = null;
            self[animatingKey] = false;
        };

        if (direction === 'next') {
            if (isSeparateBlocks) {
                transitionBlock.style.zIndex = '3';
                activeBlock.style.zIndex = '2';
            } else {
                transitionVideo.style.zIndex = '3';
                activeVideo.style.zIndex = '2';
            }

            if (activeUrl) {
                transitionVideo.setAttribute('loop', '');
                transitionVideo.setAttribute('playsinline', '');
                transitionVideo.setAttribute('preload', 'auto');
                transitionVideo.setAttribute('muted', '');
                transitionVideo.muted = true;

                const currentTransitionSrc = transitionSource.src || transitionSource.getAttribute('src') || '';
                if (currentTransitionSrc !== activeUrl) {
                    transitionSource.src = activeUrl;
                    transitionVideo.load();
                }

                transitionVideo.play().catch(() => {});

                if (this._hasGSAP()) {
                    gsap.fromTo(transitionTarget,
                        { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' },
                        {
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            duration: duration,
                            ease: 'transitionEase',
                            overwrite: 'auto',
                            immediateRender: true,
                            onComplete: () => {
                                finalizeAnimation(transitionTarget, activeTarget, '2', '1');
                            }
                        }
                    );
                } else {
                    transitionTarget.style.transition = 'none';
                    transitionTarget.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
                    transitionTarget.offsetHeight;
                    transitionTarget.style.transition = `clip-path ${duration}s cubic-bezier(0.75, 0.00, 0.00, 1.00)`;
                    transitionTarget.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

                    setTimeout(() => {
                        finalizeAnimation(transitionTarget, activeTarget, '2', '1');
                    }, duration * 1000);
                }
            }

        } else if (direction === 'prev') {
            if (isSeparateBlocks) {
                transitionBlock.style.zIndex = '1';
                activeBlock.style.zIndex = '2';
            } else {
                transitionVideo.style.zIndex = '1';
                activeVideo.style.zIndex = '2';
            }

            if (activeUrl) {
                transitionVideo.setAttribute('loop', '');
                transitionVideo.setAttribute('playsinline', '');
                transitionVideo.setAttribute('preload', 'auto');
                transitionVideo.setAttribute('muted', '');
                transitionVideo.muted = true;

                transitionSource.src = activeUrl;
                transitionVideo.load();
                transitionVideo.play().catch(() => {});

                if (this._hasGSAP()) {
                    gsap.set(transitionTarget, {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        overwrite: 'auto'
                    });
                } else {
                    transitionTarget.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                }
            }

            if (this._hasGSAP()) {
                gsap.fromTo(activeTarget,
                    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
                    {
                        clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
                        duration: duration,
                        ease: 'transitionEase',
                        overwrite: 'auto',
                        immediateRender: true,
                        onComplete: () => {
                            finalizeAnimation(transitionTarget, activeTarget, '2', '1');
                        }
                    }
                );
            } else {
                activeTarget.style.transition = 'none';
                activeTarget.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                activeTarget.offsetHeight;
                activeTarget.style.transition = `clip-path ${duration}s cubic-bezier(0.75, 0.00, 0.00, 1.00)`;
                activeTarget.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

                setTimeout(() => {
                    finalizeAnimation(transitionTarget, activeTarget, '2', '1');
                }, duration * 1000);
            }
        }
    },
    updateBackgroundProjectVideos(activeVideoLink, prevVideoLink, nextVideoLink, direction) {
        if (ProjectApp.playerModule?.state?.isPlayerNavigation) {
            return;
        }

        const playerMask = document.querySelector('.player-mask');
        if (playerMask?.classList.contains('is--full')) {
            return;
        }
        const activeUrl = activeVideoLink ? (activeVideoLink.href || activeVideoLink.getAttribute('href') || '') : '';
        const prevUrl = prevVideoLink ? (prevVideoLink.href || prevVideoLink.getAttribute('href') || '') : '';
        const nextUrl = nextVideoLink ? (nextVideoLink.href || nextVideoLink.getAttribute('href') || '') : '';

        const backgroundVideos = document.querySelectorAll('.background-project-video');
        const playerVideos = document.querySelectorAll('.player-video');

        this._updateVideoGroupToActive(backgroundVideos, activeUrl, direction);
        this._updateVideoGroupToActive(playerVideos, activeUrl, direction);
    },
    _attachGuards(swiper){
        if (!swiper || !swiper.on) return;

        let previousRealIndex = swiper.realIndex || 0;
        let isTransitioning = false;
        let lastProcessedSrc = null;

        const refresh = () => {
            if (!swiper || !swiper.slides) return;
            if (isTransitioning) return;

            const { prev, active, next } = this.getLogicalNeighbors(swiper);
            const originals = this._getOriginalSlides(swiper);
            const activeSlide = originals.find(s => this._getDataIndex(s) === active);

            const activeVideoLink = activeSlide ? activeSlide.querySelector('.video-link') : null;
            const activeSrc = activeVideoLink ? (activeVideoLink.href || activeVideoLink.getAttribute('href') || '') : '';

            if (activeSrc === lastProcessedSrc) {
                this.applyLogicalPrevNextClasses(swiper);
                return;
            }

            isTransitioning = true;
            lastProcessedSrc = activeSrc;

            try {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
            } catch(e){}

            this.applyLogicalPrevNextClasses(swiper);

            const prevSlide = originals.find(s => this._getDataIndex(s) === prev);
            const nextSlide = originals.find(s => this._getDataIndex(s) === next);

            const currentRealIndex = swiper.realIndex || 0;
            const totalSlides = this._getUniqueDataIndices(swiper).length;

            let direction = 'next';
            if (totalSlides > 1) {
                const diff = currentRealIndex - previousRealIndex;

                if (diff === 1) {
                    direction = 'next';
                } else if (diff === -1) {
                    direction = 'prev';
                }
                else if (previousRealIndex === totalSlides - 1 && currentRealIndex === 0) {
                    direction = 'next';
                } else if (previousRealIndex === 0 && currentRealIndex === totalSlides - 1) {
                    direction = 'prev';
                }
                else if (diff > 1) {
                    direction = 'next';
                } else if (diff < -1) {
                    direction = 'prev';
                }
            }

            previousRealIndex = currentRealIndex;

            this.updatePreviews(swiper, direction);
            this._setupPreviewClickHandlers(swiper);
            this._checkAllSlidesHeadingSize(swiper);

            setTimeout(() => {
                isTransitioning = false;
            }, 700);
        };

        swiper.on('slideChange', refresh);
    },
    _updateCountsInSwiper() {
        if (ProjectApp.filterModule && ProjectApp.filterModule.updateAllCountDisplays) {
            ProjectApp.filterModule.updateAllCountDisplays();
        }
    },
    _checkAndApplyHeadingSize(slide) {
        if (!slide) return;

        const headingSwitch = slide.querySelector('.heading-switch');
        const nameXlargeElements = slide.querySelectorAll('.name-xlarge');

        if (!nameXlargeElements.length) return;

        if (headingSwitch) {
            const isVisible = window.getComputedStyle(headingSwitch).display !== 'none' &&
                window.getComputedStyle(headingSwitch).visibility !== 'hidden';

            nameXlargeElements.forEach(element => {
                if (isVisible) {
                    element.classList.add('is--smaller');
                } else {
                    element.classList.remove('is--smaller');
                }
            });
        } else {
            nameXlargeElements.forEach(element => {
                element.classList.remove('is--smaller');
            });
        }
    },
    _checkAllSlidesHeadingSize(swiper) {
        if (!swiper || !swiper.slides) return;
        const slides = this._getOriginalSlides(swiper);
        slides.forEach(slide => {
            this._checkAndApplyHeadingSize(slide);
        });
    }
};


// ═══ SCRIPT #17 (44509 chars) ═══

Object.assign(ProjectApp.swiperModule, {
		navigateNext() {

        if (!this.swiper) return;

        const isMobile = window.innerWidth <= 767;
        if (!isMobile && this.swiper.isAnimating) return;

        const visibleIndices = this._getVisibleIndices();
        if (!visibleIndices.length) return;
        const currentIdx = this._getActiveDataIndex(this.swiper);
        const currentPos = visibleIndices.indexOf(currentIdx);
        const nextPos = (currentPos + 1) % visibleIndices.length;
        const nextIdx = visibleIndices[nextPos];

        this.swiper._lastDirection = 'next';
        this.swiper.slideTo(nextIdx, 0);
    },
    navigatePrev() {

        if (!this.swiper) return;

        const isMobile = window.innerWidth <= 767;
        if (!isMobile && this.swiper.isAnimating) return;

        const visibleIndices = this._getVisibleIndices();
        if (!visibleIndices.length) return;
        const currentIdx = this._getActiveDataIndex(this.swiper);
        const currentPos = visibleIndices.indexOf(currentIdx);
        const prevPos = (currentPos - 1 + visibleIndices.length) % visibleIndices.length;
        const prevIdx = visibleIndices[prevPos];
        this.swiper._lastDirection = 'prev';
        this.swiper.slideTo(prevIdx, 0);
    },
    _updateVisibleSlideNumbers() {
        if (!this.swiper) return;

        const visibleIndices = this._getVisibleIndices();
        const slides = this._getOriginalSlides(this.swiper);

        slides.forEach(slide => {
            const target = slide.querySelector('[data-slide-index]');
            if (target) {
            }
        });

        visibleIndices.forEach((dataIdx, position) => {
            const slide = slides.find(s => this._getDataIndex(s) === dataIdx);
            if (slide) {
                const target = slide.querySelector('[data-slide-index]');
                if (target) {
                    target.textContent = this._two(position + 1);
                }
            }
        });
    },
    _createSwiperObject(el, wrapper, slides) {
        const swiperObj = {
            el: el,
            wrapperEl: wrapper,
            slides: slides,
            activeIndex: 0,
            realIndex: 0,
            previousIndex: -1,
            isAnimating: false,

            _events: {},
            on(event, handler) {
                if (!this._events[event]) this._events[event] = [];
                this._events[event].push(handler);
            },
            emit(event, ...args) {
                if (this._events[event]) {
                    this._events[event].forEach(handler => handler.call(this, ...args));
                }
            },

            slideTo: async (index, speed = 0, runCallbacks = true) => {

                if (index < 0 || index >= slides.length) return;
                if (index === swiperObj.activeIndex) return;

                if (swiperObj.isAnimating && window.gsap) {
                    slides.forEach(slide => {
                        gsap.killTweensOf(slide.querySelectorAll('.line'));
                        gsap.killTweensOf(slide.querySelectorAll('.text-mono'));
                        gsap.killTweensOf(slide.querySelectorAll('.project-block'));
                        gsap.killTweensOf(slide.querySelectorAll('.preview-block'));
                    });

                    const bgVideos = document.querySelectorAll('.background-project-video');
                    const playerBlocks = document.querySelectorAll('.player-video-block');
                    bgVideos.forEach(v => gsap.killTweensOf(v));
                    playerBlocks.forEach(b => gsap.killTweensOf(b));
                }

                swiperObj.isAnimating = true;
                const oldDomIndex = swiperObj.activeIndex;
                swiperObj.previousIndex = oldDomIndex;

                let direction;
                if (swiperObj._lastDirection) {
                    direction = swiperObj._lastDirection;
                } else {
                    direction = index > oldDomIndex ? 'next' : 'prev';
                }

                const oldActiveSlide = slides[oldDomIndex];
                const newActiveSlide = slides[index];

                swiperObj.activeIndex = index;
                swiperObj.realIndex = index;

                swiperObj.updateSlidesClasses();

                const playerMask = document.querySelector('.player-mask');
                const isPlayerOpen = playerMask?.classList.contains('is--full');

                if (!isPlayerOpen) {
                    const activeVideoLink = newActiveSlide ? newActiveSlide.querySelector('.video-link') : null;
                    if (activeVideoLink && ProjectApp.swiperModule.updateBackgroundProjectVideos) {
                        const prevSlideData = ProjectApp.swiperModule.getLogicalNeighbors(swiperObj);
                        const originals = ProjectApp.swiperModule._getOriginalSlides(swiperObj);
                        const prevSlide = originals.find(s => ProjectApp.swiperModule._getDataIndex(s) === prevSlideData.prev);
                        const nextSlide = originals.find(s => ProjectApp.swiperModule._getDataIndex(s) === prevSlideData.next);
                        const prevVideoLink = prevSlide ? prevSlide.querySelector('.video-link') : null;
                        const nextVideoLink = nextSlide ? nextSlide.querySelector('.video-link') : null;

                        ProjectApp.swiperModule.updateBackgroundProjectVideos(activeVideoLink, prevVideoLink, nextVideoLink, direction);
                    }
                }

                if (window.gsap && newActiveSlide) {
                    const rightLines = newActiveSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                    const leftLines = newActiveSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');

                    const textMoving = newActiveSlide.querySelectorAll('.project-top .text-mono.is--moving');
                    const textAbs = newActiveSlide.querySelectorAll('.project-bottom .text-abs');
                    const textMonoFirst = newActiveSlide.querySelectorAll('.project-bottom .text-mono:first-of-type');

                    const textMonoSecond = newActiveSlide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
                    const iconsWrapper = newActiveSlide.querySelectorAll('.project-top .icons-wrapper');
                    const textMobileHide = newActiveSlide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
                    const textStatic = newActiveSlide.querySelectorAll('.project-top .text-mono.is--static');

                    if (direction === 'next') {
                        gsap.set(rightLines, { y: '-110%' });
                        gsap.set(leftLines, { y: '110%' });

                        if (textMoving.length) gsap.set(textMoving, { y: '100%' });
                        if (textAbs.length) gsap.set(textAbs, { y: '100%' });
                        if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '100%' });
                    } else {
                        gsap.set(rightLines, { y: '110%' });
                        gsap.set(leftLines, { y: '-110%' });

                        if (textMoving.length) gsap.set(textMoving, { y: '-100%' });
                        if (textAbs.length) gsap.set(textAbs, { y: '-100%' });
                        if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '-100%' });
                    }

                    if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
                    if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
                    if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
                    if (textStatic.length) gsap.set(textStatic, { opacity: 0 });
                }

                if (runCallbacks) {
                    swiperObj.emit('slideChangeTransitionStart');
                }
                const isMobile = window.innerWidth <= 767;
                if (isMobile) {
                    setTimeout(() => {
                        swiperObj.isAnimating = false;
                    }, 300);
                }

                await Promise.all([
                    oldActiveSlide ? ProjectApp.swiperModule.animateSwiperOut(oldActiveSlide, direction, false) : Promise.resolve(),
                    newActiveSlide ? ProjectApp.swiperModule.animateActiveSlideIn(el, direction, false) : Promise.resolve()
                ]);

                swiperObj.isAnimating = false;

                if (runCallbacks) {
                    swiperObj.emit('slideChange');
                }

                if (window.gsap && el) {
                    ProjectApp.swiperModule._resetHeadingPositions(el);
                }

                swiperObj._lastDirection = null;
            },
            slideNext: () => swiperObj.slideTo(swiperObj.activeIndex + 1, 0),
            slidePrev: () => swiperObj.slideTo(swiperObj.activeIndex - 1, 0),

            updateSlides: () => {},
            updateProgress: () => {},
            updateSlidesClasses: () => {
                const activeIndex = swiperObj.activeIndex;
                slides.forEach((slide, i) => {
                    slide.classList.remove('swiper-slide-active', 'swiper-slide-prev', 'swiper-slide-next');
                    if (i === activeIndex) slide.classList.add('swiper-slide-active');
                });
                ProjectApp.swiperModule.applyLogicalPrevNextClasses(swiperObj);
                slides.forEach(slide => {
                    if (slide.classList.contains('is--prev-logical') && !slide.classList.contains('is--filtered-out')) {
                        slide.classList.add('swiper-slide-prev');
                    }
                    if (slide.classList.contains('is--next-logical') && !slide.classList.contains('is--filtered-out')) {
                        slide.classList.add('swiper-slide-next');
                    }
                });
            },
            mousewheel: {
                enabled: false,
                handle: null
            }
        };
        return swiperObj;
    },
    initSwiper() {
        const swiperEl = document.querySelector('.project-swiper.is--all');
        if (!swiperEl) return null;

        if (this.swiper) return this.swiper;
				
        const allHeadingLines = swiperEl.querySelectorAll('.name-xlarge .line');
    allHeadingLines.forEach(line => {
        line.style.transform = '';
        line.style.webkitTransform = '';
    });

        const wrapper = swiperEl.querySelector('.swiper-wrapper');
        if (!wrapper) return null;

        this._assignSourceIndices(wrapper);
        const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));

        if (slides.length === 0) return null;

        const swiperInstance = this._createSwiperObject(swiperEl, wrapper, slides);

        let lastNavigateTime = 0;
        const getThreshold = () => window.innerWidth <= 991 ? 900 : 1400;

        const tryNavigate = (direction) => {
            const now = Date.now();
            const threshold = getThreshold();

            if (now - lastNavigateTime < threshold) return false;

            lastNavigateTime = now;

            if (direction === 'next') {
                this.navigateNext();
            } else {
                this.navigatePrev();
            }

            return true;
        };

        const handleWheel = (e) => {
            if (ProjectApp.state?.currentView === 'list') return;

            const playerMask = document.querySelector('.player-mask');
            if (playerMask?.classList.contains('is--full')) return;

            const isMobile = window.innerWidth <= 991;
            if (!isMobile && swiperInstance.isAnimating) return;

            const delta = e.deltaY || e.detail || e.wheelDelta;

            if (Math.abs(delta) > 1) {
                e.preventDefault();
                e.stopPropagation();

                if (delta > 0) {
                    tryNavigate('next');
                } else {
                    tryNavigate('prev');
                }
            }
        };

        document.addEventListener('wheel', handleWheel, {
            passive: false,
            capture: true
        });

        swiperInstance.mousewheel.enabled = true;
        swiperInstance.mousewheel.handle = handleWheel;

        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartTime = 0;
        let touchTriggered = false;
        const swipeThreshold = 50;

        const handleTouchStart = (e) => {
            if (ProjectApp.state?.currentView === 'list') return;

            const playerMask = document.querySelector('.player-mask');
            if (playerMask?.classList.contains('is--full')) return;

            const touch = e.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            touchStartTime = Date.now();
            touchTriggered = false;
        };

        const handleTouchMove = (e) => {
            if (ProjectApp.state?.currentView === 'list') return;
            if (touchTriggered) return;
            if (!touchStartTime) return;

            const playerMask = document.querySelector('.player-mask');
            if (playerMask?.classList.contains('is--full')) return;

            const touch = e.touches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;

            const isVerticalSwipe = Math.abs(deltaY) > Math.abs(deltaX) * 1.5;
            const hasEnoughDistance = Math.abs(deltaY) > swipeThreshold;

            if (isVerticalSwipe && hasEnoughDistance) {
                touchTriggered = true;

                touchStartX = touch.clientX;
                touchStartY = touch.clientY;

                if (deltaY < 0) {
                    tryNavigate('next');
                } else {
                    tryNavigate('prev');
                }

                setTimeout(() => {
                    touchTriggered = false;
                }, 50);
            }
        };

        const handleTouchEnd = (e) => {
            touchStartTime = 0;
            touchTriggered = false;
        };

        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('touchend', handleTouchEnd, { passive: true });

        swiperInstance.touch = {
            enabled: true,
            handleStart: handleTouchStart,
            handleMove: handleTouchMove,
            handleEnd: handleTouchEnd,
            target: document
        };

        const module = this;
        requestAnimationFrame(() => {
            swiperInstance.updateSlidesClasses();
            module.applyLogicalPrevNextClasses(swiperInstance);
            module._armAllSlides(swiperInstance);
            module._armCurrentNext(swiperInstance);

            if (this._hasGSAP()) {
                const activeSlide = slides[0];

                if (activeSlide) {
                    const rightLines = activeSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                    const leftLines = activeSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                    gsap.set(rightLines, { y: '0%' });
                    gsap.set(leftLines, { y: '0%' });

                    const textMoving = activeSlide.querySelectorAll('.project-top .text-mono.is--moving');
                    const textAbs = activeSlide.querySelectorAll('.project-bottom .text-abs');
                    const textMonoFirst = activeSlide.querySelectorAll('.project-bottom .text-mono:first-of-type');
                    if (textMoving.length) gsap.set(textMoving, { y: '0%' });
                    if (textAbs.length) gsap.set(textAbs, { y: '0%' });
                    if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '0%' });

                    const activeTotalNumber = activeSlide.querySelectorAll('.project-bottom .text-mono.is--total-number');
                    if (activeTotalNumber.length) gsap.set(activeTotalNumber, { y: '0%', opacity: 1 });

                    const textMonoSecond = activeSlide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
                    const iconsWrapper = activeSlide.querySelectorAll('.project-top .icons-wrapper');
                    const textMobileHide = activeSlide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
                    const textStatic = activeSlide.querySelectorAll('.project-top .text-mono.is--static');
                    if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 1 });
                    if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 1 });
                    if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 1 });
                    if (textStatic.length) gsap.set(textStatic, { opacity: 1 });
                }

                const nextSlides = swiperEl.querySelectorAll('.is--next-logical');
                nextSlides.forEach(slide => {
                    const previewTop = slide.querySelectorAll('.preview-block.is--top');
                    const previewBottom = slide.querySelectorAll('.preview-block.is--bottom');
                    if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });
                    if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });

                    const textMoving = slide.querySelectorAll('.project-top .text-mono.is--moving');
                    const textAbs = slide.querySelectorAll('.project-bottom .text-abs');
                    const textMonoFirst = slide.querySelectorAll('.project-bottom .text-mono:first-of-type');
                    if (textMoving.length) gsap.set(textMoving, { y: '100%' });
                    if (textAbs.length) gsap.set(textAbs, { y: '100%' });
                    if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '100%' });

                    const totalNumber = slide.querySelectorAll('.project-bottom .text-mono.is--total-number');
                    if (totalNumber.length) gsap.set(totalNumber, { y: '100%', opacity: 0 });

                    const textMonoSecond = slide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
                    const iconsWrapper = slide.querySelectorAll('.project-top .icons-wrapper');
                    const textMobileHide = slide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
                    const textStatic = slide.querySelectorAll('.project-top .text-mono.is--static');
                    if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
                    if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
                    if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
                    if (textStatic.length) gsap.set(textStatic, { opacity: 0 });
                });

                const prevSlides = swiperEl.querySelectorAll('.is--prev-logical');
                prevSlides.forEach(slide => {
                    const textMoving = slide.querySelectorAll('.project-top .text-mono.is--moving');
                    const textAbs = slide.querySelectorAll('.project-bottom .text-abs');
                    const textMonoFirst = slide.querySelectorAll('.project-bottom .text-mono:first-of-type');
                    if (textMoving.length) gsap.set(textMoving, { y: '-100%' });
                    if (textAbs.length) gsap.set(textAbs, { y: '-100%' });
                    if (textMonoFirst.length) gsap.set(textMonoFirst, { y: '-100%' });

                    const totalNumber = slide.querySelectorAll('.project-bottom .text-mono.is--total-number');
                    if (totalNumber.length) gsap.set(totalNumber, { y: '-100%', opacity: 0 });

                    const textMonoSecond = slide.querySelectorAll('.project-bottom .text-mono:nth-of-type(2)');
                    const iconsWrapper = slide.querySelectorAll('.project-top .icons-wrapper');
                    const textMobileHide = slide.querySelectorAll('.project-bottom .text-mono.is--mobile-hide');
                    const textStatic = slide.querySelectorAll('.project-top .text-mono.is--static');
                    if (textMonoSecond.length) gsap.set(textMonoSecond, { opacity: 0 });
                    if (iconsWrapper.length) gsap.set(iconsWrapper, { opacity: 0 });
                    if (textMobileHide.length) gsap.set(textMobileHide, { opacity: 0 });
                    if (textStatic.length) gsap.set(textStatic, { opacity: 0 });
                });
            }

            module.updatePreviews(swiperInstance);
            module._updateVisibleSlideNumbers();
            module._assignPermanentNumbers(swiperInstance);
            module._checkAllSlidesHeadingSize(swiperInstance);
            module._setupPreviewClickHandlers(swiperInstance);

            if (ProjectApp.animations && ProjectApp.animations.addHoverAnimationToSwiperSlides) {
                ProjectApp.animations.addHoverAnimationToSwiperSlides(swiperInstance);
            }

            module._updateCountsInSwiper();

            swiperInstance.emit('init');
        });

        this._attachGuards(swiperInstance);
        this.swiper = swiperInstance;

        return swiperInstance;
    },
    _disableAllVideoPreloading() {
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(video => {
            video.setAttribute('preload', 'none');
            video.pause();
            video.removeAttribute('autoplay');

            const source = video.querySelector('source');
            if (source && source.src) {
                source.setAttribute('data-src', source.src);
                source.removeAttribute('src');
            }
        });
    },
    async switchToCategory(category, previousCategory) {
        const normalizedCategory = this._normalizeCategory(category);

        let currentCategory;
        if (previousCategory !== undefined) {
            currentCategory = this._normalizeCategory(previousCategory);
        } else {
            const currentFromState = ProjectApp.state.currentCategory;
            currentCategory = currentFromState ? this._normalizeCategory(currentFromState) : 'all';
        }

        if (currentCategory === normalizedCategory) {
            this._updateCountsInSwiper();
            return;
        }

        const swiperEl = document.querySelector('.project-swiper.is--all');
        if (!swiperEl || !this.swiper) return;

        const slides = this._getOriginalSlides(this.swiper);
        const oldActiveIdx = this._getActiveDataIndex(this.swiper);
        const oldActiveSlide = slides.find(s => this._getDataIndex(s) === oldActiveIdx) ||
            swiperEl.querySelector('.swiper-slide-active');

        this._applyFilter(normalizedCategory);

        const visibleIndices = this._getVisibleIndices();
        if (!visibleIndices.length) return;

        const currentSlide = slides.find(s => this._getDataIndex(s) === oldActiveIdx) || null;

        let targetIdx;
        const currentSlideStillVisible = currentSlide &&
            !currentSlide.classList.contains('is--filtered-out');

        if (currentSlideStillVisible) {
            const currentPos = visibleIndices.indexOf(oldActiveIdx);
            const nextPos = (currentPos + 1) % visibleIndices.length;
            targetIdx = visibleIndices[nextPos];
        } else {
            const currentPos = slides.indexOf(currentSlide);
            let closestIdx = visibleIndices[0];
            let minDistance = Infinity;

            visibleIndices.forEach(idx => {
                const slide = slides.find(s => this._getDataIndex(s) === idx);
                const slidePos = slides.indexOf(slide);
                const distance = Math.abs(slidePos - currentPos);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIdx = idx;
                }
            });

            targetIdx = closestIdx;
        }

        const sameSlide = targetIdx === oldActiveIdx;
        const direction = 'next';

        this.swiper._lastDirection = direction;

        const newActiveSlide = slides.find(s => this._getDataIndex(s) === targetIdx);
        const totalCount = this._two(visibleIndices.length);

        const targetPosition = visibleIndices.indexOf(targetIdx);
        visibleIndices.forEach((dataIdx, position) => {
            const slide = slides.find(s => this._getDataIndex(s) === dataIdx);
            if (slide) {
                if (dataIdx === oldActiveIdx) return;

                const dataSlideIndex = slide.querySelector('[data-slide-index]');
                if (dataSlideIndex) {
                    const relativePosition = (position - targetPosition + visibleIndices.length) % visibleIndices.length;
                    dataSlideIndex.textContent = this._two(relativePosition + 1);
                }
            }
        });

        if (newActiveSlide) {
            const totalNumberEl = newActiveSlide.querySelector('.project-bottom .text-mono.is--total-number');
            if (totalNumberEl) {
                totalNumberEl.textContent = totalCount;
            }
        }

        const oldActiveSlideEl = slides.find(s => s.classList.contains('is--active-logical') || s.classList.contains('swiper-slide-active'));

        if (oldActiveSlideEl) {
            oldActiveSlideEl.classList.add('is--animating-out');
        }

        slides.forEach(slide => {
            slide.classList.remove(
                'swiper-slide-active',
                'swiper-slide-prev',
                'swiper-slide-next',
                'is--active-logical',
                'is--prev-logical',
                'is--next-logical'
            );
            const slideIdx = this._getDataIndex(slide);
            if (slideIdx === targetIdx) {
                slide.classList.add('swiper-slide-active');
            }
        });

        const newActiveDomIndex = slides.findIndex(s => this._getDataIndex(s) === targetIdx);

        this.swiper.activeIndex = newActiveDomIndex >= 0 ? newActiveDomIndex : targetIdx;
        this.swiper.realIndex = this.swiper.activeIndex;
        this.swiper.previousIndex = oldActiveIdx;

        if (oldActiveSlideEl) {
            const previewBlocks = oldActiveSlideEl.querySelectorAll('.preview-block');
            const zIndexes = Array.from(previewBlocks).map(p => getComputedStyle(p).zIndex);
            const classes = Array.from(oldActiveSlideEl.classList).filter(c => c.includes('active') || c.includes('prev') || c.includes('next') || c.includes('filtered'));
        }

        this.applyLogicalPrevNextClasses(this.swiper);

        slides.forEach((slide, i) => {
            const classes = [];
            if (slide.classList.contains('is--active-logical')) classes.push('ACTIVE');
            if (slide.classList.contains('is--prev-logical')) classes.push('PREV');
            if (slide.classList.contains('is--next-logical')) classes.push('NEXT');
            if (slide.classList.contains('is--filtered-out')) classes.push('FILTERED-OUT');

            if (classes.length > 0) {
                const previewBlocks = slide.querySelectorAll('.preview-block');
                const zIndexes = Array.from(previewBlocks).map(p => getComputedStyle(p).zIndex);
            }
        });
        slides.forEach(slide => {
            slide.classList.remove('swiper-slide-prev', 'swiper-slide-next');
            if (slide.classList.contains('is--prev-logical') && !slide.classList.contains('is--filtered-out')) {
                slide.classList.add('swiper-slide-prev');
            }
            if (slide.classList.contains('is--next-logical') && !slide.classList.contains('is--filtered-out')) {
                slide.classList.add('swiper-slide-next');
            }
        });
        this._armCurrentNext(this.swiper);

        const { prev: prevIdx, next: nextIdx } = this.getLogicalNeighbors(this.swiper);
        const newPrevSlide = slides.find(s => this._getDataIndex(s) === prevIdx);
        const newNextSlide = slides.find(s => this._getDataIndex(s) === nextIdx);

        const activeVideoLink = newActiveSlide ? newActiveSlide.querySelector('.video-link') : null;
        const prevVideoLink = newPrevSlide ? newPrevSlide.querySelector('.video-link') : null;
        const nextVideoLink = newNextSlide ? newNextSlide.querySelector('.video-link') : null;

        if (sameSlide) {
            this.updateBackgroundProjectVideos(activeVideoLink, prevVideoLink, nextVideoLink, direction);
            this.updatePreviews(this.swiper, direction);
            this._setupPreviewClickHandlers(this.swiper);
            this._checkAllSlidesHeadingSize(this.swiper);
            this._updateVisibleSlideNumbers();
            this._updateCountsInSwiper();

            ProjectApp.state.currentCategory = normalizedCategory;
            return;
        }

        if (newActiveSlide) {
            if (window.gsap) {
                gsap.killTweensOf(newActiveSlide);
                gsap.set(newActiveSlide, { opacity: 1, clearProps: 'transition' });
            }
            newActiveSlide.style.setProperty('opacity', '1', 'important');
            newActiveSlide.style.transition = 'none';
        }

        this.updatePreviews(this.swiper, direction);
        this._setupPreviewClickHandlers(this.swiper);

        const prevLogicalSlides = swiperEl.querySelectorAll('.is--prev-logical');
        prevLogicalSlides.forEach(slide => {
            if (slide !== oldActiveSlide) {
                slide.style.visibility = 'hidden';
            }
        });

        await Promise.all([
            oldActiveSlide ? this.animateSwiperOut(oldActiveSlide, direction, true) : Promise.resolve(),
            this.animateActiveSlideIn(swiperEl, direction, true)
        ]);

        if (oldActiveSlideEl) {
            oldActiveSlideEl.classList.remove('is--animating-out');
        }

        setTimeout(() => {
            prevLogicalSlides.forEach(slide => {
                slide.style.visibility = 'visible';
            });
        }, 1000);

        if (window.gsap) {
            this._resetHeadingPositions(swiperEl);
        }

        this._checkAllSlidesHeadingSize(this.swiper);
        this._updateCountsInSwiper();

        ProjectApp.state.currentCategory = normalizedCategory;

        if (newActiveSlide) {
            newActiveSlide.style.removeProperty('transition');
            newActiveSlide.style.removeProperty('opacity');
        }
    },
    initAll() {
        ProjectApp.state.currentCategory = 'all';
        const allSwiper = document.querySelector('.project-swiper.is--all');

        if (allSwiper) {
            allSwiper.querySelectorAll('video').forEach(video => {
                video.setAttribute('preload', 'none');
                video.removeAttribute('autoplay');
                video.pause();
            });

            allSwiper.classList.add('is--visible');

            if (!this.swiper) {
                this.initSwiper();
            }

            this._applyFilter('all');
            this._updateVisibleSlideNumbers();
            this._updateCountsInSwiper();
            this._initializeBackgroundVideos();

            if (this.swiper) {
                this._checkAllSlidesHeadingSize(this.swiper);
            }

            this.initBackgroundVideoHover();
        }
    },
    _initializeBackgroundVideos() {
        this._disableAllVideoPreloading();

        const backgroundVideos = document.querySelectorAll('.background-project-video');
        const playerVideoBlocks = document.querySelectorAll('.player-video-block');

        if (backgroundVideos.length >= 2) {
            const video1 = backgroundVideos[0];
            const video2 = backgroundVideos[1];

            video1.style.zIndex = '2';
            video2.style.zIndex = '1';
            video1.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            video2.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

            if (this.swiper && this.swiper.slides && this.swiper.slides.length > 0) {
                const firstSlide = this.swiper.slides[0];
                const firstVideoLink = firstSlide.querySelector('.video-link');

                if (firstVideoLink) {
                    const firstUrl = firstVideoLink.href || firstVideoLink.getAttribute('href') || '';
                    const source1 = video1.querySelector('source');

                    if (source1 && firstUrl) {
                        video1.setAttribute('loop', '');
                        video1.setAttribute('playsinline', '');
                        video1.setAttribute('preload', 'auto');
                        video1.setAttribute('muted', '');
                        video1.muted = true;
                        source1.src = firstUrl;
                        video1.load();
                        video1.play().catch(() => {});
                    }
                }
            }
        }

        if (playerVideoBlocks.length >= 2) {
            const block1 = playerVideoBlocks[0];
            const block2 = playerVideoBlocks[1];
            const video1 = block1.querySelector('.player-video');
            const video2 = block2.querySelector('.player-video');

            if (video1 && video2) {
                block1.style.zIndex = '2';
                block2.style.zIndex = '1';
                block1.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                block2.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

                if (this.swiper && this.swiper.slides && this.swiper.slides.length > 0) {
                    const firstSlide = this.swiper.slides[0];
                    const firstVideoLink = firstSlide.querySelector('.video-link');

                    if (firstVideoLink) {
                        const firstUrl = firstVideoLink.href || firstVideoLink.getAttribute('href') || '';
                        const source1 = video1.querySelector('source');

                        if (source1 && firstUrl) {
                            video1.setAttribute('loop', '');
                            video1.setAttribute('playsinline', '');
                            video1.setAttribute('preload', 'auto');
                            video1.setAttribute('muted', '');
                            video1.muted = true;
                            source1.src = firstUrl;
                            video1.load();
                            video1.play().catch(() => {});
                        }
                    }
                }

            }
        }
    },
    initBackgroundVideoHover() {
        if (window.innerWidth < 991) return;

        const backgroundVideos = Array.from(document.querySelectorAll('.background-project-video'));
        const playerVideoBlocks = document.querySelectorAll('.player-video-block');
        const playerVideos = Array.from(playerVideoBlocks)
            .map(block => block.querySelector('.player-video'))
            .filter(v => v);

        if (backgroundVideos.length < 1 && playerVideos.length < 1) return;

        if (this._hoverHandlers) {
            this._hoverHandlers.forEach(({ target, enter, leave }) => {
                target.removeEventListener('mouseenter', enter, true);
                target.removeEventListener('mouseleave', leave, true);
            });
        }
        this._hoverHandlers = [];

        const getActiveVideo = (videos, usesBlocks) => {
            if (!videos || videos.length < 2) return videos?.[0] || null;

            let z1, z2;
            if (usesBlocks) {
                const block1 = videos[0].closest('.player-video-block');
                const block2 = videos[1].closest('.player-video-block');
                z1 = parseInt(block1?.style.zIndex) || 2;
                z2 = parseInt(block2?.style.zIndex) || 1;
            } else {
                z1 = parseInt(videos[0].style.zIndex) || 2;
                z2 = parseInt(videos[1].style.zIndex) || 1;
            }

            return z1 > z2 ? videos[0] : videos[1];
        };

        const handleProjectHover = (projectItem) => {
            const listVideo = projectItem.querySelector('.list-video');
            if (!listVideo) return;

            let newSrc = '';
            const sourceElement = listVideo.querySelector('source');

            if (sourceElement) {
                newSrc = sourceElement.src || sourceElement.getAttribute('src') || sourceElement.getAttribute('data-src');
            } else {
                newSrc = listVideo.src || listVideo.getAttribute('src') || listVideo.getAttribute('data-src');
            }

            if (!newSrc) return;

            const activeBackgroundVideo = getActiveVideo(backgroundVideos, false);
            const activePlayerVideo = getActiveVideo(playerVideos, true);

            const updateVideo = (video) => {
                if (!video) return;

                const source = video.querySelector('source');

                if (window.gsap) {
                    gsap.killTweensOf(video);
                }

                video.setAttribute('loop', '');
                video.setAttribute('playsinline', '');
                video.setAttribute('preload', 'auto');
                video.setAttribute('muted', '');
                video.muted = true;

                if (source) {
                    source.src = newSrc;
                } else {
                    video.src = newSrc;
                }
                video.load();

                if (window.gsap) {
                    gsap.set(video, { scale: 1.15 });
                } else {
                    video.style.transition = 'none';
                    video.style.transform = 'scale(1.15)';
                }

                const animateIn = () => {
                    video.play().catch(() => {});

                    if (window.gsap) {
                        gsap.to(video, {
                            scale: 1,
                            duration: 0.2,
                            ease: 'power2.out'
                        });
                    } else {
                        requestAnimationFrame(() => {
                            video.style.transition = 'transform 0.2s ease-out';
                            video.style.transform = 'scale(1)';
                        });
                    }
                };

                if (video.readyState >= 3) {
                    animateIn();
                } else {
                    video.addEventListener('canplay', animateIn, { once: true });
                    setTimeout(animateIn, 100);
                }
            };

            updateVideo(activeBackgroundVideo);
        };

        const projectList = document.querySelector('.project-list');
        const delegationTarget = projectList || document;

        const enterHandler = (e) => {
            const projectItem = e.target.closest('.project-item');
            if (!projectItem) return;

            handleProjectHover(projectItem);

            const listVideo = projectItem.querySelector('.list-video');
            if (listVideo && listVideo.tagName === 'VIDEO') {
                listVideo.setAttribute('loop', '');
                listVideo.setAttribute('muted', '');
                listVideo.muted = true;

                const source = listVideo.querySelector('source');
                if (source) {
                    const dataSrc = source.getAttribute('data-src');
                    if (dataSrc && !source.src) {
                        source.src = dataSrc;
                        listVideo.load();
                    }
                }

                listVideo.play().catch(() => {});
            }
        };

        const leaveHandler = (e) => {
            const projectItem = e.target.closest('.project-item');
            if (!projectItem) return;

            if (e.relatedTarget && projectItem.contains(e.relatedTarget)) return;

            const listVideo = projectItem.querySelector('.list-video');
            if (listVideo && listVideo.tagName === 'VIDEO') {
                listVideo.pause();
                listVideo.currentTime = 0;
            }
        };

        delegationTarget.addEventListener('mouseenter', enterHandler, true);
        delegationTarget.addEventListener('mouseleave', leaveHandler, true);

        this._hoverHandlers.push({
            target: delegationTarget,
            enter: enterHandler,
            leave: leaveHandler
        });
    },
    forceVideoSync() {
        if (!this.swiper) return;

        this._pendingBackgroundUrl = null;
        this._pendingPlayerUrl = null;
        this._backgroundAnimating = false;
        this._playerAnimating = false;

        const { prev, active, next } = this.getLogicalNeighbors(this.swiper);
        const slides = this._getOriginalSlides(this.swiper);

        const findByIdx = (idx) => {
            return slides.find(sl => sl.getAttribute('data-swiper-slide-index') === String(idx)) || null;
        };

        const activeSlide = findByIdx(active);
        const prevSlide = findByIdx(prev);
        const nextSlide = findByIdx(next);

        const activeVideoLink = activeSlide ? activeSlide.querySelector('.video-link') : null;
        const prevVideoLink = prevSlide ? prevSlide.querySelector('.video-link') : null;
        const nextVideoLink = nextSlide ? nextSlide.querySelector('.video-link') : null;

        const activeUrl = activeVideoLink ? (activeVideoLink.href || activeVideoLink.getAttribute('href') || '') : '';

        if (!activeUrl) return;

        const backgroundVideos = document.querySelectorAll('.background-project-video');
        const playerVideoBlocks = document.querySelectorAll('.player-video-block');

        if (backgroundVideos.length >= 2) {
            const video1 = backgroundVideos[0];
            const video2 = backgroundVideos[1];
            const source1 = video1.querySelector('source');
            const source2 = video2.querySelector('source');

            if (this._hasGSAP()) {
                gsap.killTweensOf(video1);
                gsap.killTweensOf(video2);
            }

            video1.style.zIndex = '2';
            video2.style.zIndex = '1';
            video1.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            video2.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

            if (source1) {
                video1.setAttribute('loop', '');
                video1.setAttribute('playsinline', '');
                video1.setAttribute('preload', 'auto');
                video1.setAttribute('muted', '');
                video1.muted = true;
                source1.src = activeUrl;
                video1.load();
                video1.play().catch(() => {});
            }
        }

        if (playerVideoBlocks.length >= 2) {
            const block1 = playerVideoBlocks[0];
            const block2 = playerVideoBlocks[1];
            const video1 = block1.querySelector('.player-video');
            const video2 = block2.querySelector('.player-video');

            if (video1 && video2) {
                const source1 = video1.querySelector('source');

                if (this._hasGSAP()) {
                    gsap.killTweensOf(block1);
                    gsap.killTweensOf(block2);
                }

                block1.style.zIndex = '2';
                block2.style.zIndex = '1';
                block1.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                block2.style.clipPath = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';

                if (source1) {
                    video1.setAttribute('loop', '');
                    video1.setAttribute('playsinline', '');
                    video1.setAttribute('preload', 'auto');
                    video1.setAttribute('muted', '');
                    video1.muted = true;
                    source1.src = activeUrl;
                    video1.load();
                    video1.play().catch(() => {});
                }
            }
        }
    }
});


// ═══ SCRIPT #18 (16198 chars) ═══

ProjectApp.listModule = {
    _throttle(fn, wait) {
        let lastTime = 0;
        return function(...args) {
            const now = Date.now();
            if (now - lastTime >= wait) {
                lastTime = now;
                fn.apply(this, args);
            }
        };
    },

    animateOutCurrentItems: function(animateDividers = false) {
        return new Promise((resolve) => {
            const projectList = document.querySelector('.project-list');
            if (!projectList) { resolve(); return; }
            const visibleItems = Array.from(projectList.querySelectorAll('.project-item'));
            if (!visibleItems.length || !window.gsap) { resolve(); return; }

            const d = 0.6;
            const ez = 'mainEase';
            const tl = gsap.timeline({
                onComplete: resolve,
                defaults: {duration: d, ease: ez}
            });

            visibleItems.forEach((item, index) => {
                const delay = index * 0.01;
                if (animateDividers) {
                    const dividers = item.querySelectorAll('.list-divider');
                    if (dividers.length) tl.to(dividers, {scaleX: 0}, delay);
                }
                const clips = item.querySelectorAll('.hover-trigger, .list-video-wrapper');
                const texts = item.querySelectorAll('.name-medium, .text-abs, .text-mono:not(.description-block .text-mono)');
                if (clips.length) tl.to(clips, {clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'}, delay);
                if (texts.length) tl.to(texts, {y: '110%'}, delay);
                const video = item.querySelector('.list-video.is--top');
                if (video) tl.to(video, {scale: '1.1'}, delay);
            });

            if (!tl.getChildren().length) resolve();
        });
    },

    initInfiniteScroll: function (animateDividers = true) {
        if (ProjectApp.state.scrollInitialized) return;
        const projectList = document.querySelector('.project-list');
        if (!projectList) return;

        const templates = ProjectApp.templateManager.getFilteredListTemplates();
        ProjectApp.listModule.hardResetListContainer(projectList);
        const total = templates.length;

        if (total === 0) {
            setTimeout(() => {
                const empty = document.createElement('div');
                empty.className = 'project-empty';
                empty.style.padding = '2rem';
                empty.textContent = 'No results found';
                empty.style.opacity = '0';
                projectList.appendChild(empty);
                if (window.gsap) {
                    gsap.to(empty, {opacity: 1, duration: 0.3});
                } else {
                    empty.style.opacity = '1';
                }
            }, 100);
            ProjectApp.state.scrollInitialized = true;
            return;
        }

        let itemHeight = ProjectApp.state.cachedItemHeight || ProjectApp.utils.measureItemHeight(templates, projectList);
        if (itemHeight <= 10) {
            return requestAnimationFrame(() => {
                itemHeight = ProjectApp.utils.measureItemHeight(templates, projectList);
                if (itemHeight > 10) ProjectApp.listModule.buildVirtual(itemHeight, templates, projectList, animateDividers);
            });
        }

        ProjectApp.listModule.buildVirtual(itemHeight, templates, projectList, animateDividers);
    },

    cleanupInfiniteScroll: function () {
        const projectList = document.querySelector('.project-list');
        if (projectList && ProjectApp.state.scrollListener) {
            projectList.removeEventListener('scroll', ProjectApp.state.scrollListener);
        }
        ProjectApp.state.scrollInitialized = false;
        ProjectApp.state.scrollListener = null;
        ProjectApp.state.cachedItemHeight = null;
    },

    rebuildListForCurrentFilter: async function () {
        const projectList = document.querySelector('.project-list');
        if (!projectList) return;

        const savedScrollTop = projectList.scrollTop;

        await ProjectApp.listModule.animateOutCurrentItems(false);
        await new Promise(resolve => setTimeout(resolve, 100));

        ProjectApp.listModule.cleanupInfiniteScroll();
        ProjectApp.state.cachedItemHeight = null;
        ProjectApp.state.scrollInitialized = false;

        ProjectApp.state.restoreScrollTop = savedScrollTop;

        ProjectApp.listModule.initInfiniteScroll(false);

        if (ProjectApp.filterModule && ProjectApp.filterModule.updateCurrentTotalCount) {
            ProjectApp.filterModule.updateCurrentTotalCount();
        }
    },

    buildVirtual: function (itemHeight, templates, projectList, animateDividers = true) {
        const sentinelTop = document.createElement('div');
        sentinelTop.className = 'virtual-sentinel';
        sentinelTop.style.height = (templates.length * itemHeight * 100) + 'px';
        sentinelTop.style.position = 'absolute';
        sentinelTop.style.top = '0';
        sentinelTop.style.left = '0';
        sentinelTop.style.right = '0';
        sentinelTop.style.pointerEvents = 'none';
        projectList.appendChild(sentinelTop);

        const bufferSize = window.innerWidth > 991 ? 10 : 3;
        let offset = 0;
        const itemPool = new Map();
        const animatedItems = new Set();

        function getItem(index) {
            const N = templates.length;
            const sourceIndex = ((index % N) + N) % N;
            if (itemPool.has(index)) return itemPool.get(index);

            const clone = templates[sourceIndex].cloneNode(true);
            clone.style.position = 'absolute';
            clone.style.width = '100%';
            clone.style.left = '0';
            clone.dataset.index = String(index);

            const idxEl = clone.querySelector('[data-index]');
            if (idxEl) {
                const displayIndex = sourceIndex + 1;
                idxEl.textContent = displayIndex < 10 ? `0${displayIndex}` : String(displayIndex);
            }
            
            if (ProjectApp.animations && ProjectApp.animations.addVideoExpandToListItem) {
                ProjectApp.animations.addVideoExpandToListItem(clone);
            }

            if (ProjectApp.textStyling && ProjectApp.textStyling.italicizeFirstLetters) {
                const nameMediums = clone.querySelectorAll('.name-medium');
                nameMediums.forEach(el => {
                    const alreadySplit = el.querySelector('.word');
                    if (!alreadySplit) {
                        new SplitType(el, { types: 'lines, words', tagName: 'span' });

                        const lines = el.querySelectorAll('.line');
                        lines.forEach(function(line) {
                            if (!line.parentElement.classList.contains('line-wrapper')) {
                                const wrapper = document.createElement('div');
                                wrapper.className = 'line-wrapper';
                                wrapper.style.overflow = 'hidden';
                                line.parentNode.insertBefore(wrapper, line);
                                wrapper.appendChild(line);
                            }
                        });

                        const words = el.querySelectorAll('.word');
                        words.forEach(word => {
                            const text = word.textContent || '';
                            const match = text.match(/[A-Za-zÀ-ÖØ-öø-ÿĀ-žА-Яа-яЇїІіЄєҐґ]/);
                            if (match) {
                                const idx = match.index;
                                const before = text.slice(0, idx);
                                const firstChar = text[idx];
                                const after = text.slice(idx + 1);

                                word.innerHTML = before + 
                                    '<span class="char has--style-italic">' + firstChar + '</span>' + 
                                    after;
                            }
                        });
                    }
                });
            }

            if (window.gsap) {
                if (animateDividers) {
                    const dividers = clone.querySelectorAll('.list-divider');
                    if (dividers.length) gsap.set(dividers, {scaleX: 0});
                }
                const clips = clone.querySelectorAll('.hover-trigger, .list-video-wrapper');
                const texts = clone.querySelectorAll('.name-medium, .text-abs, .text-mono:not(.description-block .text-mono)');
                const video = clone.querySelector('.list-video.is--top');
                if (clips.length) gsap.set(clips, {clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'});
                if (texts.length) gsap.set(texts, {y: '110%'});
                if (video) gsap.set(video, {scale: 1.1});
            }

        if (window.innerWidth > 991) {
            if (ProjectApp.animations && ProjectApp.animations.addHoverAnimationToListItem) {
                ProjectApp.animations.addHoverAnimationToListItem(clone);
            }
        }

            itemPool.set(index, clone);
            return clone;
        }

        const isSwitchingToList = ProjectApp.state._switchingToList || false;
    
        function animateItem(item, delay = 0) {
            const itemIndex = item.dataset.index;
            if (animatedItems.has(itemIndex)) return;
            animatedItems.add(itemIndex);

            const isMobile = window.innerWidth <= 991;
            const d = isMobile ? 0.3 : 0.6;
            const ez = 'mainEase';

            const shouldAnimate = !isMobile || isSwitchingToList;

            if (animateDividers) {
                const dividers = item.querySelectorAll('.list-divider');
                if (dividers.length) {
                    if (shouldAnimate) {
                        gsap.to(dividers, {scaleX: 1, duration: d, ease: ez, delay: isMobile ? 0 : delay});
                    } else {
                        gsap.set(dividers, {scaleX: 1});
                    }
                }
            }

            const clips = item.querySelectorAll('.hover-trigger, .list-video-wrapper');
            const texts = item.querySelectorAll('.name-medium, .text-abs, .text-mono:not(.description-block .text-mono)');
            const video = item.querySelector('.list-video.is--top');

            if (shouldAnimate) {
                if (clips.length) gsap.to(clips, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    duration: d,
                    ease: ez,
                    delay: isMobile ? 0 : delay
                });
                if (texts.length) gsap.to(texts, {y: '0%', duration: d, ease: ez, delay: isMobile ? 0 : delay});
                if (video) gsap.to(video, {scale: 1, duration: d, ease: ez, delay: isMobile ? 0 : delay});
            } else {
                if (clips.length) gsap.set(clips, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'});
                if (texts.length) gsap.set(texts, {y: '0%'});
                if (video) gsap.set(video, {scale: 1});
            }
        }

        function updateVisible() {
            const containerH = projectList.clientHeight || window.innerHeight;
            const scrollTop = projectList.scrollTop;
            const adjusted = scrollTop + (offset * itemHeight);
            const startIndex = Math.floor(adjusted / itemHeight) - bufferSize;
            const endIndex = Math.ceil((adjusted + containerH) / itemHeight) + bufferSize;
            const active = new Set();

            const toAdd = [];
            for (let i = startIndex; i <= endIndex; i++) {
                active.add(i);
                const node = getItem(i);
                const wasNew = !node.parentElement;
                if (wasNew) {
                    node.style.top = ((i - offset) * itemHeight) + 'px';
                    toAdd.push(node);
                } else {
                    node.style.top = ((i - offset) * itemHeight) + 'px';
                }
            }

            if (toAdd.length) {
                const fragment = document.createDocumentFragment();
                toAdd.forEach(node => fragment.appendChild(node));
                projectList.appendChild(fragment);

                requestAnimationFrame(() => {
                    toAdd.forEach(node => animateItem(node));
                });
            }

            const toRemove = [];
            Array.from(projectList.children).forEach(child => {
                if (child.classList.contains('virtual-sentinel')) return;
                const idx = parseInt(child.dataset && child.dataset.index, 10);
                if (!isNaN(idx) && !active.has(idx)) {
                    toRemove.push({ child, idx });
                }
            });

            toRemove.forEach(({ child, idx }) => {
                child.remove();
                itemPool.delete(idx);
                animatedItems.delete(String(idx));
            });

            if (scrollTop < itemHeight * 3) {
                offset -= templates.length;
                projectList.scrollTop = scrollTop + (templates.length * itemHeight);
            } else if (scrollTop > projectList.scrollHeight - containerH - (itemHeight * 3)) {
                offset += templates.length;
                projectList.scrollTop = scrollTop - (templates.length * itemHeight);
            }

            if (ProjectApp.playerModule?._observeListItems && window.innerWidth <= 991) {
                ProjectApp.playerModule._observeListItems();
            }
        }

        if (ProjectApp.state.restoreScrollTop !== undefined) {
            projectList.scrollTop = ProjectApp.state.restoreScrollTop;
            delete ProjectApp.state.restoreScrollTop;
        } else {
            projectList.scrollTop = 0;
        }

        ProjectApp.state.scrollListener = ProjectApp.listModule._throttle(updateVisible, 16);
        projectList.addEventListener('scroll', ProjectApp.state.scrollListener);
        updateVisible();
        ProjectApp.state.scrollInitialized = true;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const items = Array.from(projectList.querySelectorAll('.project-item')).filter(el => el.offsetParent !== null);
                if (!items.length || !window.gsap) return;
                items.forEach(item => {
                    animatedItems.delete(item.dataset.index);
                });
                items.forEach((item, index) => {
                    animateItem(item, index * 0.01);
                });
            });
        });
        
        if (isSwitchingToList) {
            setTimeout(() => {
                ProjectApp.state._switchingToList = false;
            }, 1000);
        }
    },

    hardResetListContainer: function(projectList) {
        projectList.innerHTML = '';
    },

    ensureListInit: function() {
        if(ProjectApp.state.scrollInitialized) return;
        const projectList = document.querySelector('.project-list');
        if(!projectList) return;
        ProjectApp.state.currentView = 'list';
        ProjectApp.listModule.initInfiniteScroll(true);

        if (window.innerWidth > 991) {
            setTimeout(() => {
                if (ProjectApp.swiperModule && ProjectApp.swiperModule.initBackgroundVideoHover) {
                    ProjectApp.swiperModule.initBackgroundVideoHover();
                }
            }, 100);
        }
    },

    updateListItemIndices: function() {
        const projectList = document.querySelector('.project-list');
        if(!projectList) return;
        const visibleItems = Array.from(projectList.querySelectorAll('.project-item'));
        visibleItems.forEach((item, index) => {
            const indexElements = item.querySelectorAll('[data-index]');
            indexElements.forEach(el => {
                const displayIndex = index + 1;
                el.textContent = displayIndex < 10 ? `0${displayIndex}` : String(displayIndex);
            });
        });
    }
};


// ═══ SCRIPT #29 (22301 chars) ═══

CustomEase.create("mainEase", "0.65, 0, 0, 1");
CustomEase.create("headingHoverEase", "0.75, 0, 0.25, 1");
CustomEase.create("transitionEase", "0.75, 0, 0, 1");

ProjectApp.transitionModule = (function() {
    const STORAGE_KEY = 'decorOffsets_v3';
    const TRANSITION_DURATION = 1350;
    const DECOR_SPEED = 0.02;
    const DECOR_FRICTION = 0.85;
    const DECOR_STEP_ANIM = 200;
    
    const MENU_STEP_1_DURATION = 1200;
    const MENU_STEP_2_DURATION = 800;
    const MENU_PAUSE = 10;
    const MENU_STEP_1_AMOUNT = 80;
	const MENU_STEP_2_AMOUNT = 40;
    
    const DESKTOP_BREAKPOINT = 992;

    const state = {
        isTransitioning: false,
        blockAlignmentState: 'initial',
        leftOffset: 0,
        rightOffset: 0,
        wheelDelta: 0,
        leftRange: 0,
        rightRange: 0,
        touchStartY: 0,
        lastTouchY: 0,
        menuOpen: false,
        menuAnimating: false,
        menuOffsetLeft: 0,
        menuOffsetRight: 0,
        decorInitialized: false
    };

    let transitionBlocks = null;
    let leftInner = null;
    let rightInner = null;
    let decorWrapper = null;
    let menuButton = null;

    function isDesktop() {
        return window.innerWidth >= DESKTOP_BREAKPOINT;
    }

    function setBlockAlignments() {
        if (!transitionBlocks) return;
        transitionBlocks.forEach((block, index) => {
            if (!isDesktop()) {
                block.style.alignSelf = 'flex-start';
            } else if (state.blockAlignmentState === 'initial') {
                block.style.alignSelf = index % 2 === 0 ? 'flex-end' : 'flex-start';
            } else {
                block.style.alignSelf = index % 2 === 0 ? 'flex-start' : 'flex-end';
            }
        });
    }

    function swapBlockAlignments() {
        if (!isDesktop()) return;
        state.blockAlignmentState = state.blockAlignmentState === 'initial' ? 'swapped' : 'initial';
        setBlockAlignments();
    }

    function animateBlocksOut() {
        if (!transitionBlocks || !transitionBlocks.length) return Promise.resolve();
        
        transitionBlocks.forEach(block => {
            gsap.set(block, { clearProps: 'height' });
        });
        setBlockAlignments();

        return new Promise(resolve => {
            gsap.timeline({
                onComplete: () => {
                    swapBlockAlignments();
                    resolve();
                }
            }).fromTo(transitionBlocks,
                { height: '0%' },
                { height: '100%', duration: TRANSITION_DURATION / 1000, ease: 'transitionEase' }
            );
        });
    }

    function animateBlocksIn() {
        if (!transitionBlocks || !transitionBlocks.length) return Promise.resolve();

        return new Promise(resolve => {
            gsap.timeline({
                onComplete: () => {
                    swapBlockAlignments();
                    resolve();
                }
            }).fromTo(transitionBlocks,
                { height: '100%' },
                { height: '0%', duration: TRANSITION_DURATION / 1000, ease: 'transitionEase' }
            );
        });
    }

    function getStepHeight(items) {
        if (!items || !items.length) return 1;
        if (items.length < 2) {
            const r = items[0].getBoundingClientRect();
            return r.height || 1;
        }
        const r1 = items[0].getBoundingClientRect();
        const r2 = items[1].getBoundingClientRect();
        return Math.abs(r2.top - r1.top) || r1.height || 1;
    }

    function saveDecorOffsets() {
        try {
            if (state.leftRange > 0 && Math.abs(state.leftOffset) > state.leftRange) {
                state.leftOffset = state.leftOffset % state.leftRange;
            }
            if (state.rightRange > 0 && Math.abs(state.rightOffset) > state.rightRange) {
                state.rightOffset = state.rightOffset % state.rightRange;
            }
            
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                left: state.leftOffset,
                right: state.rightOffset
            }));
        } catch (e) {}
    }

    function loadDecorOffsets() {
        try {
            const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
            if (saved) {
                if (typeof saved.left === 'number') state.leftOffset = saved.left;
                if (typeof saved.right === 'number') state.rightOffset = saved.right;
                return true;
            }
        } catch (e) {}
        return false;
    }

    function applyDecorWrap() {
        if (state.leftRange > 0 && Math.abs(state.leftOffset) > state.leftRange) {
            state.leftOffset = state.leftOffset % state.leftRange;
        }
        if (state.rightRange > 0 && Math.abs(state.rightOffset) > state.rightRange) {
            state.rightOffset = state.rightOffset % state.rightRange;
        }
    }

    function decorLoop() {
        if (state.isTransitioning || state.menuAnimating || !leftInner || !rightInner) return;

        state.leftOffset += state.wheelDelta * DECOR_SPEED;
        state.rightOffset -= state.wheelDelta * DECOR_SPEED;

        state.wheelDelta *= DECOR_FRICTION;
        if (Math.abs(state.wheelDelta) < 0.01) state.wheelDelta = 0;

        applyDecorWrap();

        leftInner.style.transform = `translateY(${state.leftOffset}px)`;
        rightInner.style.transform = `translateY(${state.rightOffset}px)`;

        requestAnimationFrame(decorLoop);
    }

    function handleTouchStart(e) {
        if (state.isTransitioning || state.menuAnimating) return;
        const touch = e.touches[0];
        state.touchStartY = touch.clientY;
        state.lastTouchY = touch.clientY;
    }

    function handleTouchMove(e) {
        if (state.isTransitioning || state.menuAnimating) return;
        const touch = e.touches[0];
        const deltaY = state.lastTouchY - touch.clientY;
        state.wheelDelta += deltaY * 2;
        state.lastTouchY = touch.clientY;
    }

    function handleTouchEnd() {
        state.touchStartY = 0;
        state.lastTouchY = 0;
    }

    function animateMenuOpen() {
        if (!leftInner || !rightInner || state.menuAnimating) return Promise.resolve();
        
        state.menuAnimating = true;
        state.wheelDelta = 0;
        
        const startLeft = state.leftOffset;
        const startRight = state.rightOffset;
        
        return new Promise(resolve => {
            gsap.to(leftInner, {
                y: startLeft + MENU_STEP_1_AMOUNT,
                duration: MENU_STEP_1_DURATION / 1000,
                ease: 'transitionEase',
                onUpdate: function() {
                    state.leftOffset = gsap.getProperty(leftInner, 'y');
                }
            });
            gsap.to(rightInner, {
                y: startRight - MENU_STEP_1_AMOUNT,
                duration: MENU_STEP_1_DURATION / 1000,
                ease: 'transitionEase',
                onUpdate: function() {
                    state.rightOffset = gsap.getProperty(rightInner, 'y');
                }
            });
            
            gsap.delayedCall((MENU_STEP_1_DURATION + MENU_PAUSE) / 1000, () => {
                gsap.to(leftInner, {
                    y: startLeft + MENU_STEP_1_AMOUNT + MENU_STEP_2_AMOUNT,
                    duration: MENU_STEP_2_DURATION / 1000,
                    ease: 'transitionEase',
                    onUpdate: function() {
                        state.leftOffset = gsap.getProperty(leftInner, 'y');
                    },
                    onComplete: () => {
                        state.menuOffsetLeft = MENU_STEP_1_AMOUNT + MENU_STEP_2_AMOUNT;
                        state.menuOffsetRight = -(MENU_STEP_1_AMOUNT + MENU_STEP_2_AMOUNT);
                        state.menuAnimating = false;
                        state.menuOpen = true;
                        saveDecorOffsets();
                        requestAnimationFrame(decorLoop);
                        resolve();
                    }
                });
                gsap.to(rightInner, {
                    y: startRight - MENU_STEP_1_AMOUNT - MENU_STEP_2_AMOUNT,
                    duration: MENU_STEP_2_DURATION / 1000,
                    ease: 'transitionEase',
                    onUpdate: function() {
                        state.rightOffset = gsap.getProperty(rightInner, 'y');
                    }
                });
            });
        });
    }

    function animateMenuClose() {
        if (!leftInner || !rightInner || state.menuAnimating) return Promise.resolve();
        
        state.menuAnimating = true;
        state.wheelDelta = 0;
        
        const startLeft = state.leftOffset;
        const startRight = state.rightOffset;
        
        return new Promise(resolve => {
            gsap.to(leftInner, {
                y: startLeft - MENU_STEP_2_AMOUNT,
                duration: MENU_STEP_2_DURATION / 1000,
                ease: 'transitionEase',
                onUpdate: function() {
                    state.leftOffset = gsap.getProperty(leftInner, 'y');
                }
            });
            gsap.to(rightInner, {
                y: startRight + MENU_STEP_2_AMOUNT,
                duration: MENU_STEP_2_DURATION / 1000,
                ease: 'transitionEase',
                onUpdate: function() {
                    state.rightOffset = gsap.getProperty(rightInner, 'y');
                }
            });
            
            gsap.delayedCall((MENU_STEP_2_DURATION + MENU_PAUSE) / 1000, () => {
                gsap.to(leftInner, {
                    y: startLeft - MENU_STEP_2_AMOUNT - MENU_STEP_1_AMOUNT,
                    duration: MENU_STEP_1_DURATION / 1000,
                    ease: 'transitionEase',
                    onUpdate: function() {
                        state.leftOffset = gsap.getProperty(leftInner, 'y');
                    },
                    onComplete: () => {
                        state.menuOffsetLeft = 0;
                        state.menuOffsetRight = 0;
                        state.menuAnimating = false;
                        state.menuOpen = false;
                        saveDecorOffsets();
                        requestAnimationFrame(decorLoop);
                        resolve();
                    }
                });
                gsap.to(rightInner, {
                    y: startRight + MENU_STEP_2_AMOUNT + MENU_STEP_1_AMOUNT,
                    duration: MENU_STEP_1_DURATION / 1000,
                    ease: 'transitionEase',
                    onUpdate: function() {
                        state.rightOffset = gsap.getProperty(rightInner, 'y');
                    }
                });
            });
        });
    }

    function handleMenuButtonClick() {
        if (state.isTransitioning || state.menuAnimating) return;
        
        if (state.menuOpen) {
            animateMenuClose();
        } else {
            animateMenuOpen();
        }
    }

    function animateDecorOut() {
        if (!leftInner || !rightInner) return Promise.resolve();

        state.wheelDelta = 0;
        
        gsap.killTweensOf([leftInner, rightInner]);
        state.menuAnimating = false;

        applyDecorWrap();

        const targetLeft = state.leftOffset + DECOR_STEP_ANIM;
        const targetRight = state.rightOffset - DECOR_STEP_ANIM;

        state.leftOffset = targetLeft;
        state.rightOffset = targetRight;
        
        applyDecorWrap();
        
        saveDecorOffsets();

        leftInner.style.transition = `transform ${TRANSITION_DURATION}ms ease`;
        rightInner.style.transition = `transform ${TRANSITION_DURATION}ms ease`;
        leftInner.style.transform = `translateY(${state.leftOffset}px)`;
        rightInner.style.transform = `translateY(${state.rightOffset}px)`;

        return Promise.resolve();
    }

    function animateDecorIn() {
        if (!leftInner || !rightInner) return Promise.resolve();

        const hasSaved = loadDecorOffsets();
        const isContinuing = document.documentElement.getAttribute('data-decor-continuing') === '1';

        if (state.decorInitialized && state.leftRange > 0) {
            if (Math.abs(state.leftOffset) > state.leftRange) {
                state.leftOffset = state.leftOffset % state.leftRange;
            }
        }
        if (state.decorInitialized && state.rightRange > 0) {
            if (Math.abs(state.rightOffset) > state.rightRange) {
                state.rightOffset = state.rightOffset % state.rightRange;
            }
        }

        leftInner.style.transition = 'none';
        rightInner.style.transition = 'none';

        leftInner.style.transform = `translateY(${state.leftOffset}px)`;
        rightInner.style.transform = `translateY(${state.rightOffset}px)`;

        leftInner.offsetHeight;
        rightInner.offsetHeight;

        if (decorWrapper) {
            decorWrapper.setAttribute('data-decor-visible', '1');
        }

        state.menuOpen = false;
        state.menuOffsetLeft = 0;
        state.menuOffsetRight = 0;

        if (hasSaved) {
            const targetLeft = state.leftOffset + DECOR_STEP_ANIM;
            const targetRight = state.rightOffset - DECOR_STEP_ANIM;

            if (isContinuing && decorWrapper) {
                decorWrapper.setAttribute('data-infinite-ready', '1');
            }

            return new Promise(resolve => {
                requestAnimationFrame(() => {
                    leftInner.style.transition = `transform ${TRANSITION_DURATION}ms ease`;
                    rightInner.style.transition = `transform ${TRANSITION_DURATION}ms ease`;
                    leftInner.style.transform = `translateY(${targetLeft}px)`;
                    rightInner.style.transform = `translateY(${targetRight}px)`;
                });

                setTimeout(() => {
                    leftInner.style.transition = '';
                    rightInner.style.transition = '';
                    state.leftOffset = targetLeft;
                    state.rightOffset = targetRight;
                    applyDecorWrap();
                    saveDecorOffsets();
                    requestAnimationFrame(decorLoop);
                    resolve();
                }, TRANSITION_DURATION);
            });
        } else {
            requestAnimationFrame(decorLoop);
            return Promise.resolve();
        }
    }

    function initDecor() {
        const leftDecor = document.querySelector('.decor-numbers.is--left');
        const rightDecor = document.querySelector('.decor-numbers.is--right');
        if (!leftDecor || !rightDecor) return;

        decorWrapper = leftDecor.closest('.background-decor') || rightDecor.closest('.background-decor');
        if (decorWrapper) decorWrapper.setAttribute('data-infinite-ready', '0');

        leftInner = leftDecor.querySelector('.decor-inner');
        rightInner = rightDecor.querySelector('.decor-inner');
        if (!leftInner || !rightInner) {
            if (decorWrapper) {
                decorWrapper.setAttribute('data-infinite-ready', '1');
                decorWrapper.setAttribute('data-decor-visible', '1');
            }
            return;
        }

        const leftTexts = Array.from(leftInner.querySelectorAll('.text-decor'));
        const rightTexts = Array.from(rightInner.querySelectorAll('.text-decor'));
        if (!leftTexts.length || !rightTexts.length) {
            if (decorWrapper) {
                decorWrapper.setAttribute('data-infinite-ready', '1');
                decorWrapper.setAttribute('data-decor-visible', '1');
            }
            return;
        }

        const leftItemHeight = getStepHeight(leftTexts);
        const rightItemHeight = getStepHeight(rightTexts);

        leftTexts.forEach(el => {
            el.style.transform = `translateY(${2 * leftItemHeight}px)`;
        });
        rightTexts.forEach(el => {
            el.style.transform = `translateY(${-2 * rightItemHeight}px)`;
        });

        state.leftRange = leftItemHeight;
        state.rightRange = rightItemHeight;
        state.decorInitialized = true;

        const hasSaved = loadDecorOffsets();
        if (hasSaved) {
            applyDecorWrap();
            leftInner.style.transform = `translateY(${state.leftOffset}px)`;
            rightInner.style.transform = `translateY(${state.rightOffset}px)`;
        }

        if (decorWrapper) {
            decorWrapper.setAttribute('data-decor-visible', '1');
        }

        window.addEventListener('wheel', (e) => {
            if (state.menuAnimating) return;
            state.wheelDelta += e.deltaY;
        }, { passive: true });

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        window.addEventListener('beforeunload', saveDecorOffsets);

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                saveDecorOffsets();
            }
        });

        const isContinuing = document.documentElement.getAttribute('data-decor-continuing') === '1';
        if (!isContinuing) {
            setTimeout(() => {
                if (decorWrapper) decorWrapper.setAttribute('data-infinite-ready', '1');
            }, 50);
        }
    }

    function initMenuButton() {
        menuButton = document.querySelector('.menu-button');
        if (menuButton) {
            menuButton.addEventListener('click', handleMenuButtonClick);
        }
    }

    function handleResize() {
        setBlockAlignments();
    }

    async function animateOut() {
        if (state.isTransitioning) return;
        state.isTransitioning = true;

        await Promise.all([
            animateBlocksOut(),
            animateDecorOut()
        ]);
    }

    async function animateIn() {
        await new Promise(resolve => setTimeout(resolve, 500));

        if (!state.decorInitialized && leftInner && rightInner) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        await Promise.all([
            animateBlocksIn(),
            animateDecorIn()
        ]);

        state.isTransitioning = false;
    }

    async function navigateWithTransition(url) {
        if (state.isTransitioning) return;
        await animateOut();
        window.location.href = url;
    }

    function handleLinkClick(e) {
        if (state.isTransitioning) return;

        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        if (!href ||
            href === '#' ||
            href.startsWith('#') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            link.getAttribute('target') === '_blank' ||
            link.hasAttribute('download') ||
            e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
            return;
        }

        e.preventDefault();

        const isNavLink = link.closest('.nav-link-block');
        if (!isDesktop() && isNavLink) {
            setTimeout(() => {
                window.location.href = href;
            }, 2000);
            return;
        }

        navigateWithTransition(href);
    }

    function init() {
        transitionBlocks = Array.from(document.querySelectorAll('.transition-block'));
        transitionBlocks.forEach(block => {
            block.classList.remove('is--hidden');
            gsap.set(block, { height: '100%' });
        });
        setBlockAlignments();

        window.addEventListener('resize', handleResize);

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                initDecor();
                initMenuButton();
            });
        } else {
            window.addEventListener('load', () => {
                initDecor();
                initMenuButton();
            });
        }

        document.addEventListener('click', handleLinkClick, true);

        window.addEventListener('load', animateIn);

        window.addEventListener('pageshow', (e) => {
            if (e.persisted) {
                state.isTransitioning = false;

                if (transitionBlocks) {
                    transitionBlocks.forEach(block => {
                        gsap.set(block, { height: '100%' });
                    });
                }

                animateIn();
            }
        });
    }

    return {
        init,
        animateOut,
        animateIn,
        navigateWithTransition,
        animateMenuOpen,
        animateMenuClose,
        state
    };
})();



ProjectApp.init = {
  initAll() {
	ProjectApp.transitionModule.init();
    //this.initWebflowBadgeRemover();
    this.initNavLinkTracking();
    const isDesktop = window.innerWidth > 991;
    if (isDesktop) {
    	this.initPageAnimations();
    }
    this.initModeSwitch();
    ProjectApp.timeline.initTimeline();
  },
  
  initModeSwitch() {
    if (ProjectApp.modeSwitchModule?.init) {
      ProjectApp.modeSwitchModule.init();
    }
  },
  
  initPageAnimations() {
    const isDesktop = window.innerWidth > 991;
    if (isDesktop) {
      ProjectApp.animations.initBackgroundHoverBlock();
      ProjectApp.animations.initLinkHover();
      ProjectApp.pageAnimations.initAll();
    }
  },
  
  initWebflowBadgeRemover() {
    let deleteCount = 0;
    const observer = new MutationObserver(() => {
      const body = document.body;
      const lastChild = body.lastElementChild;

      if (lastChild && lastChild.matches('a.w-webflow-badge')) {
        lastChild.remove();
        deleteCount++;

        if (deleteCount === 2) {
          observer.disconnect();
        }
      }
    });

    observer.observe(document.body, { childList: true });
  },
  
  initNavLinkTracking() {
    document.addEventListener('click', function(e) {
      const navLink = e.target.closest('.nav-link-block');
      if (!navLink) return;
      
      const href = navLink.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    });
  }
};


// ═══ SCRIPT #30 (30132 chars) ═══

ProjectApp.textStyling = {
    config: {
        leftPaddingLetters: ['B', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S'],
        mediumPaddingLetters: ['X'],
        largePaddingLetters: ['A'],
        tinyMarginLetters: ['C', 'G'],
        leftMarginLetters: ['T', 'Y'],
        largeMarginLetters: ['W'],

        leftPaddingValue: '0.4vw',
        mediumPaddingValue: '0.6vw',
        largePaddingValue: '0.9vw',
        tinyMarginValue: '-0.25vw',
        leftMarginValue: '-0.4vw',
        largeMarginValue: '-0.9vw'
    },

    italicizeFirstLetters(selectors, opts) {
        const options = Object.assign({ lettersOnly: true }, opts || {});
        const targets = Array.isArray(selectors) ? selectors : [selectors];
        const letterRegex = /[A-Za-zÀ-ÖØ-öø-ÿĀ-žА-Яа-яЇїІіЄєҐґ]/;

        targets.forEach(selector => {
            document.querySelectorAll(selector).forEach(rootEl => {
                const currentText = rootEl.textContent.trim();
                if (!currentText) return;

                if (rootEl._splitType) {
                    rootEl._splitType.revert();
                }

                rootEl.innerHTML = '';
                rootEl.textContent = currentText;

                const split = new SplitType(rootEl, { types: 'lines, words', tagName: 'span' });
                rootEl._splitType = split;

                const wordEls = Array.from(rootEl.querySelectorAll('.word'));

                wordEls.forEach(word => {
                    const text = word.textContent || '';
                    if (!text) return;

                    let firstLetterIndex = -1;
                    if (options.lettersOnly) {
                        for (let i = 0; i < text.length; i++) {
                            if (letterRegex.test(text[i])) {
                                firstLetterIndex = i;
                                break;
                            }
                        }
                        if (firstLetterIndex === -1) return;
                    } else {
                        firstLetterIndex = 0;
                    }

                    const before = text.slice(0, firstLetterIndex);
                    const firstChar = text[firstLetterIndex] || '';
                    const after = text.slice(firstLetterIndex + 1);

                    word.textContent = '';

                    if (before) {
                        word.appendChild(document.createTextNode(before));
                    }

                    if (firstChar) {
                        const charSpan = document.createElement('span');
                        charSpan.className = 'char has--style-italic';
                        charSpan.textContent = firstChar;
                        word.appendChild(charSpan);
                    }

                    if (after) {
                        word.appendChild(document.createTextNode(after));
                    }
                });

                rootEl.querySelectorAll('.line').forEach(line => {
                    if (!line.parentElement.classList.contains('line-wrapper')) {
                        const wrapper = document.createElement('div');
                        wrapper.className = 'line-wrapper';
                        wrapper.style.overflow = 'hidden';
                        line.parentNode.insertBefore(wrapper, line);
                        wrapper.appendChild(line);
                    }
                });
            });
        });
    },

    applyLetterPadding() {
        const charElements = document.querySelectorAll('.name-xlarge .line-wrapper .line .word .char.has--style-italic');
        const cfg = this.config;

        charElements.forEach(element => {
            const letter = element.textContent.trim();

            element.style.paddingLeft = '';
            element.style.marginLeft = '';

            if (cfg.leftPaddingLetters.includes(letter)) {
                element.style.paddingLeft = cfg.leftPaddingValue;
            } else if (cfg.mediumPaddingLetters.includes(letter)) {
                element.style.paddingLeft = cfg.mediumPaddingValue;
            } else if (cfg.largePaddingLetters.includes(letter)) {
                element.style.paddingLeft = cfg.largePaddingValue;
            }

            if (cfg.tinyMarginLetters.includes(letter)) {
                element.style.marginLeft = cfg.tinyMarginValue;
            } else if (cfg.leftMarginLetters.includes(letter)) {
                element.style.marginLeft = cfg.leftMarginValue;
            } else if (cfg.largeMarginLetters.includes(letter)) {
                element.style.marginLeft = cfg.largeMarginValue;
            }
        });
    },

    init() {
        this.italicizeFirstLetters(['.name-block .name-medium', '.name-xlarge'], { lettersOnly: true });
        this.applyLetterPadding();
    }
};


document.addEventListener('DOMContentLoaded', async function() {

    const getResponsiveValues = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth >= 992) {
            return {
                breakpoint: 'desktop',
                textFinalWidth: { first: '25vw', second: '61vw' },
                imageBlockOffset: '-380%'
            };
        } else if (windowWidth >= 768) {
            return {
                breakpoint: 'tablet',
                textFinalWidth: { first: '287px', second: '740px' },
                imageBlockOffset: '-340%'
            };
        } else {
            return {
                breakpoint: 'mobile',
                textFinalWidth: { first: '142px', second: 'calc(100vw - 50px)' },
                imageBlockOffset: '-270%'
            };
        }
    };

    function setInitialHiddenStates() {
        const activeSlide = document.querySelector('.swiper-slide-active');
        const logicalPrevSlide = document.querySelector('.swiper-slide.is--prev-logical');
        const logicalNextSlide = document.querySelector('.swiper-slide.is--next-logical');

        if (window.gsap && activeSlide) {
            const rightLines = activeSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
            const leftLines = activeSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
            const videoPlayer = document.querySelector('.player-mask');
            const backgroundBlock = document.querySelector('.background-block');
            const previewWrapper = activeSlide.querySelector('.preview-wrapper');
            const previewTop = activeSlide.querySelectorAll('.preview-block.is--top');
            const previewBottom = activeSlide.querySelectorAll('.preview-block.is--bottom');
            const projectTop = activeSlide.querySelector('.project-top');
            const projectBottom = activeSlide.querySelector('.project-bottom');

            gsap.set(rightLines, { y: '110%' });
            gsap.set(leftLines, { y: '-110%' });
            if (videoPlayer) gsap.set(videoPlayer, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });
            if (backgroundBlock) gsap.set(backgroundBlock, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });
            if (projectTop) gsap.set(projectTop, { y: '100%' });
            if (projectBottom) gsap.set(projectBottom, { y: '-100%' });
            if (previewWrapper) gsap.set(previewWrapper, { opacity: 0 });
            if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
            if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });
        }

        if (window.gsap && logicalPrevSlide) {
            const rightLines = logicalPrevSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
            const leftLines = logicalPrevSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
            gsap.set(rightLines, { y: '-110%' });
            gsap.set(leftLines, { y: '110%' });
            ProjectApp.slidePresets.setPrevSlidesHidden(logicalPrevSlide);
        }

        if (window.gsap && logicalNextSlide) {
            const rightLines = logicalNextSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
            const leftLines = logicalNextSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
            gsap.set(rightLines, { y: '110%' });
            gsap.set(leftLines, { y: '-110%' });
        }
    }

    function setPreloaderPreviews() {
        const slides = document.querySelectorAll('.swiper-slide');
        if (slides.length < 2) return;

        const prevPoster = slides[slides.length - 1]?.querySelector('.video-poster');
        const nextPoster = slides[1]?.querySelector('.video-poster');

        const prevTarget = document.querySelector('[data-preview-prev]');
        const nextTarget = document.querySelector('[data-preview-next]');

        if (prevTarget && prevPoster?.src) prevTarget.src = prevPoster.src;
        if (nextTarget && nextPoster?.src) nextTarget.src = nextPoster.src;
    }

    const hasVisitedThisSession = sessionStorage.getItem('hasVisited');

    if (hasVisitedThisSession) {
        document.body.classList.add('has-visited');

        setTimeout(() => {
            document.body.classList.remove('has-visited');
        }, 1000);

        ProjectApp.init.initAll();
        ProjectApp.playerModule.init();
        ProjectApp.templateManager.captureListTemplatesOnce();
        ProjectApp.filterModule.initializeTotalCounts();

        if (ProjectApp.textStyling && ProjectApp.textStyling.init) {
            ProjectApp.textStyling.init();
        }

        await new Promise(resolve => {
            requestAnimationFrame(() => {
                ProjectApp.swiperModule.initAll();

                setTimeout(() => {
                    const allSwiper = document.querySelector('.project-swiper.is--all');
                    if (allSwiper && !ProjectApp.swiperModule.swiper) {
                        ProjectApp.swiperModule.initSwiper();
                    }
                    resolve();
                }, 100);
            });
        });

        ProjectApp.viewSwitcher.initSwitchAnimation();
        ProjectApp.eventHandlers.setupSharedListeners();

        await new Promise(resolve => setTimeout(resolve, 50));

        const activeSlide = document.querySelector('.swiper-slide-active');
        const logicalPrevSlide = document.querySelector('.swiper-slide.is--prev-logical');
        const logicalNextSlide = document.querySelector('.swiper-slide.is--next-logical');

        if (window.gsap) {
            if (logicalPrevSlide) {
                const rightLines = logicalPrevSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                const leftLines = logicalPrevSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                gsap.set(rightLines, { y: '-110%' });
                gsap.set(leftLines, { y: '110%' });
                ProjectApp.slidePresets.setPrevSlidesHidden(logicalPrevSlide);
            }

            if (logicalNextSlide) {
                const rightLines = logicalNextSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                const leftLines = logicalNextSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                gsap.set(rightLines, { y: '110%' });
                gsap.set(leftLines, { y: '-110%' });
            }

            if (activeSlide) {
                const rightLines = activeSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                const leftLines = activeSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                gsap.set(rightLines, { y: '0%' });
                gsap.set(leftLines, { y: '0%' });
            }
        }

        if (activeSlide && ProjectApp.slidePresets && ProjectApp.slidePresets.resetSlideElements) {
            ProjectApp.slidePresets.resetSlideElements(activeSlide);
        }

        if (logicalPrevSlide && ProjectApp.slidePresets && ProjectApp.slidePresets.resetPrevSlidesVisibility) {
            ProjectApp.slidePresets.resetPrevSlidesVisibility(logicalPrevSlide);
        }

        ProjectApp.state.currentView = 'swiper';
        const swipersContainer = document.querySelector('.swipers-container');
        const projectCollection = document.querySelector('.project-collection');
        if (swipersContainer) swipersContainer.classList.remove('is--hidden');
        if (projectCollection) projectCollection.classList.add('is--hidden');

        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.display = 'none';
            preloader.style.opacity = '0';
        }

        const blockedBlock = document.querySelector('.blocked-block');
        if (blockedBlock) {
            blockedBlock.style.display = 'none';
        }

    } else {

        setInitialHiddenStates();
        setPreloaderPreviews();

        ProjectApp.init.initAll();
        ProjectApp.playerModule.init();

        ProjectApp.templateManager.captureListTemplatesOnce();
        ProjectApp.filterModule.initializeTotalCounts();
        if (ProjectApp.textStyling && ProjectApp.textStyling.init) {
            ProjectApp.textStyling.init();
        }
        ProjectApp.swiperModule.initAll();
        ProjectApp.viewSwitcher.initSwitchAnimation();
        ProjectApp.eventHandlers.setupSharedListeners();

        await new Promise(resolve => {
            const checkSwiper = setInterval(() => {
                const allSwiper = document.querySelector('.project-swiper.is--all');
                if (allSwiper && ProjectApp.swiperModule.swiper) {
                    clearInterval(checkSwiper);
                    resolve();
                }
            }, 50);

            setTimeout(() => {
                clearInterval(checkSwiper);
                resolve();
            }, 2000);
        });

        function prepareSlide() {
            const activeSlide = document.querySelector('.swiper-slide-active');
            const logicalPrevSlide = document.querySelector('.swiper-slide.is--prev-logical');
            const logicalNextSlide = document.querySelector('.swiper-slide.is--next-logical');

            if (!activeSlide && !logicalPrevSlide) {
                return false;
            }

            if (window.gsap) {
                if (logicalPrevSlide) {
                    const rightLines = logicalPrevSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                    const leftLines = logicalPrevSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                    gsap.set(rightLines, { y: '-110%' });
                    gsap.set(leftLines, { y: '110%' });
                    ProjectApp.slidePresets.setPrevSlidesHidden(logicalPrevSlide);
                }

                if (logicalNextSlide) {
                    const rightLines = logicalNextSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                    const leftLines = logicalNextSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                    gsap.set(rightLines, { y: '110%' });
                    gsap.set(leftLines, { y: '-110%' });
                }

                if (activeSlide) {
                    const rightLines = activeSlide.querySelectorAll('.name-wrapper.has--align-right .name-xlarge .line');
                    const leftLines = activeSlide.querySelectorAll('.name-wrapper.has--align-left .name-xlarge .line');
                    const videoPlayer = document.querySelector('.player-mask');
                    const backgroundBlock = document.querySelector('.background-block');
                    const previewWrapper = activeSlide.querySelector('.preview-wrapper');
                    const previewTop = activeSlide.querySelectorAll('.preview-block.is--top');
                    const previewBottom = activeSlide.querySelectorAll('.preview-block.is--bottom');
                    const projectTop = activeSlide.querySelector('.project-top');
                    const projectBottom = activeSlide.querySelector('.project-bottom');

                    gsap.set(rightLines, { y: '110%' });
                    gsap.set(leftLines, { y: '-110%' });
                    if (videoPlayer) gsap.set(videoPlayer, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });
                    if (backgroundBlock) gsap.set(backgroundBlock, { clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' });
                    if (projectTop) gsap.set(projectTop, { y: '100%' });
                    if (projectBottom) gsap.set(projectBottom, { y: '-100%' });
                    if (previewWrapper) gsap.set(previewWrapper, { opacity: 0 });
                    if (previewBottom.length) gsap.set(previewBottom, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' });
                    if (previewTop.length) gsap.set(previewTop, { clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)' });
                }
            }

            return !!(activeSlide && (logicalPrevSlide || document.querySelectorAll('.swiper-slide').length === 1));
        }

        if (!prepareSlide()) {
            const checkInterval = setInterval(() => {
                if (prepareSlide()) {
                    clearInterval(checkInterval);
                }
            }, 50);

            setTimeout(() => {
                clearInterval(checkInterval);
                setInitialHiddenStates();
            }, 2000);
        }

        const timeline = gsap.timeline({ delay: 1 });
        const responsiveValues = getResponsiveValues();
        const textInner = document.querySelector('.preloader-text-inner');
        const leftImageBlock = document.querySelector('.preloader-image-block.is--left');
        const rightImageBlock = document.querySelector('.preloader-image-block.is--right');
        const preloader = document.querySelector('.preloader');
        const navbar = document.querySelector('.navbar');
        const footer = document.querySelector('.footer');
        const textRowsWrap = document.querySelector('.text-rows-wrap');
        const loadingTexts = textRowsWrap ? textRowsWrap.querySelectorAll('.preloader-text.loading') : [];
if (textInner) gsap.set(textInner, { y: '0%' });

        if (leftImageBlock) {
            timeline.to(leftImageBlock, { x: '0%', y: '0vh', duration: 1.2, ease: "power3.out" }, 0.05);
        }

        if (rightImageBlock) {
            timeline.to(rightImageBlock, { x: '0%', y: '0vh', duration: 1.2, ease: "power3.out" }, 0.05);
        }

        if (loadingTexts.length >= 2) {
            timeline.fromTo(
                loadingTexts[0],
                { yPercent: 100 },
                { yPercent: 0, duration: 0.8, ease: "power3.out" },
                0.1
            );

            timeline.fromTo(
                loadingTexts[1],
                { yPercent: -100 },
                { yPercent: 0, duration: 0.8, ease: "power3.out" },
                0.1
            );
        }

        timeline.add(() => {}, '-=1');

        const odometerPreload = document.querySelector('.odometer');
        const odometerContainer = document.querySelector('.odometer-container');
        const leftDecor = document.querySelector('.decor-numbers.is--left');
        const rightDecor = document.querySelector('.decor-numbers.is--right');

        let odometerTextPreload = null;
        let digitHeightPreload = 0;

        if (odometerPreload) {
            odometerTextPreload = odometerPreload.querySelector('.preloader-text');
        }

        if (odometerTextPreload) {
            const computedStylePreload = window.getComputedStyle(odometerTextPreload);
            const fontSizePreload = parseFloat(computedStylePreload.fontSize);
            const lineHeightPreload = parseFloat(computedStylePreload.lineHeight);
            digitHeightPreload = isNaN(lineHeightPreload) ? fontSizePreload * 1.2 : lineHeightPreload;

            const tempDigits = odometerTextPreload.textContent.split('');
            odometerTextPreload.innerHTML = '';

            tempDigits.forEach((digit, index) => {
                const span = document.createElement('span');
                span.textContent = digit;
                span.style.display = 'inline-block';

                if (index === 0) {
                    span.style.transform = `translateY(${digitHeightPreload * 5}px)`;
                    span.style.opacity = '0';
                }

                odometerTextPreload.appendChild(span);
            });
        }

        timeline.add('moveText');

        if (loadingTexts) {
            timeline.to(loadingTexts, { y: '-100%', stagger: 0.1, duration: 0.4, ease: 'power1.in' }, 'moveText+=0.1');
        }

        if (textInner) {
            timeline.to(textInner, { y: '-50%', duration: 0.55, ease: 'power1.in' }, 'moveText+=0.35');
        }

        timeline.add('odometerStart');

        timeline.add(() => { animateOdometer(); }, 'odometerStart-=0.05');

        if (leftImageBlock) {
            timeline.to(leftImageBlock, { x: '0%', top: responsiveValues.imageBlockOffset, duration: 3.5, ease: 'power2.inOut' }, 'odometerStart-=1');
        }
        if (rightImageBlock) {
            timeline.to(rightImageBlock, { x: '0%', bottom: responsiveValues.imageBlockOffset, duration: 3.5, ease: 'power2.inOut' }, 'odometerStart-=1');
        }
        if (leftDecor) {
            timeline.to(leftDecor, { y: '120vw', duration: 3.5, ease: 'power2.inOut' }, 'odometerStart-=1');
        }
        if (rightDecor) {
            timeline.to(rightDecor, { y: '-120vw', duration: 3.5, ease: 'power2.inOut' }, 'odometerStart-=1');
        }

        timeline.add(() => {}, 'odometerStart+=2.5');

        const leftText = document.querySelector('.preloader-text.is--left');
        const rightText = document.querySelector('.preloader-text.is--right');
        const textFinal = document.querySelector('.preloader-text-final');
        const preloaderBackground = document.querySelector('.preloader-background');
        const imageWrapper = document.querySelector('.preloader-image-wrapper');

        const leftWidth = leftText ? window.getComputedStyle(leftText).width : '0px';
        const rightWidth = rightText ? window.getComputedStyle(rightText).width : '0px';
        const rightMargin = rightText ? window.getComputedStyle(rightText).marginLeft : '0px';

        if (textFinal) {
            timeline.to(textFinal, { width: responsiveValues.textFinalWidth.first, duration: 0.7, delay: 0.1, ease: 'power3.inOut' }, 'odometerStart+=1.5');
        }

        if (leftText) {
            gsap.set(leftText, { width: '0px' });
        }
        if (rightText) {
            gsap.set(rightText, { width: '0px', marginLeft: '0px' });
        }

        if (odometerContainer) {
            timeline.to(odometerContainer, { yPercent: -125, duration: 0.6, ease: 'power2.inOut' }, 'odometerStart+=1.5');
        }

        if (textFinal) {
            timeline.to(textFinal, { width: responsiveValues.textFinalWidth.second, duration: 0.8, ease: 'power3.inOut' }, 'odometerStart+=2.5');
        }
        if (leftText) {
            timeline.to(leftText, { width: leftWidth, duration: 0.7, delay: 0.1, ease: 'power3.inOut' }, 'odometerStart+=1.5');
        }
        if (rightText) {
            timeline.to(rightText, { width: rightWidth, marginLeft: rightMargin, duration: 0.7, delay: 0.1, ease: 'power3.inOut' }, 'odometerStart+=1.5');
        }

        if (imageWrapper) {
            timeline.to(imageWrapper, { width: '0%', duration: 0.8, ease: 'transitionEase' }, 'odometerStart+=2.5');
        }
        if (preloaderBackground) {
            timeline.to(preloaderBackground, { opacity: 0, duration: 0.8, ease: 'power3.inOut' }, 'odometerStart+=3');
        }

        if (leftImageBlock) {
            timeline.to(leftImageBlock, { x: '-50%', duration: 0.4, ease: 'transitionEase' }, 'odometerStart+=2.65');
        }
        if (rightImageBlock) {
            timeline.to(rightImageBlock, { x: '50%', duration: 0.4, ease: 'transitionEase' }, 'odometerStart+=2.65');
        }

        if (navbar) {
            timeline.from(navbar, { yPercent: -100, duration: 0.6, ease: 'power3.inOut' }, 'odometerStart+=2.8');
        }
        if (footer) {
            const isDesktop = window.innerWidth >= 992;

            if (isDesktop) {
                timeline.from(footer, {
                    yPercent: 100,
                    duration: 0.6,
                    ease: 'power3.inOut'
                }, 'odometerStart+=2.8');
            } else {
                gsap.set(footer, { opacity: 0 });

                timeline.to(footer, {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.inOut'
                }, 'odometerStart+=2.8');
            }
        }


        if (leftText) {
            timeline.to(leftText, { y: '-100%', duration: 0.8, ease: 'headingHoverEase' }, 'odometerStart+=3.5');
        }
        if (rightText) {
            timeline.to(rightText, { y: '100%', duration: 0.8, ease: 'headingHoverEase' }, 'odometerStart+=3.5');
        }

        timeline.add(() => {
            ProjectApp.slideAnimations.animatePreloaderSlideIn();
        }, 'odometerStart+=3.6');

        if (preloader) {
            timeline.add(() => {
                const logicalPrevSlide = document.querySelector('.swiper-slide.is--prev-logical');
                if (logicalPrevSlide) {
                    gsap.set(logicalPrevSlide, { visibility: 'visible' });
                }
            }, 'odometerStart+=5.8');

            timeline.to(preloader, { opacity: '0', duration: 0 }, 'odometerStart+=4.6');
        }

        timeline.set('.blocked-block', { pointerEvents: 'none' }, 'odometerStart+=5.5');

        timeline.add(() => {
            const backgroundVideos = document.querySelectorAll('.background-project-video');
            if (backgroundVideos.length >= 2) {
                const video1 = backgroundVideos[0];
                const source1 = video1.querySelector('source');

                if (source1 && source1.src) {
                    const playPromise = video1.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(e => {});
                    }
                }
            }

            const playerVideoBlocks = document.querySelectorAll('.player-video-block');
            if (playerVideoBlocks.length >= 2) {
                const block1 = playerVideoBlocks[0];
                const video1 = block1.querySelector('.player-video');
                const source1 = video1 ? video1.querySelector('source') : null;

                if (video1 && source1 && source1.src) {
                    const playPromise = video1.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(e => {});
                    }
                }
            }
        }, 'odometerStart+=4.8');

        timeline.add(() => {
            sessionStorage.setItem('hasVisited', 'true');
        }, 'odometerStart+=5.5');

        function animateOdometer() {
            const odometer = document.querySelector('.odometer');
            if (!odometer) return;

            const odometerText = odometer.querySelector('.preloader-text');
            const endValue = 99;

            let fontSize = 16, lineHeight = 19.2;
            if (odometerText) {
                const computedStyle = window.getComputedStyle(odometerText);
                fontSize = parseFloat(computedStyle.fontSize) || 16;
                lineHeight = parseFloat(computedStyle.lineHeight) || fontSize * 1.2;
            }
            const digitHeight = lineHeight;

            odometer.innerHTML = '';

            const endDigits = endValue.toString().split('').map(Number);
            endDigits.forEach((endDigit, digitIndex) => {
                const digitContainer = document.createElement('div');
                digitContainer.classList.add('digit-container');
                digitContainer.style.height = `${digitHeight}px`;
                digitContainer.style.overflow = 'hidden';
                digitContainer.style.display = 'inline-block';
                digitContainer.style.position = 'relative';

                const digitStrip = document.createElement('div');
                digitStrip.classList.add('digit-strip');
                digitStrip.style.position = 'relative';

                const repeatCount = digitIndex === 0 ? 1 : 2;

                for (let repeat = 0; repeat < repeatCount; repeat++) {
                    for (let i = 0; i < 10; i++) {
                        const digit = document.createElement('div');
                        digit.textContent = i;
                        digit.classList.add('digit');
                        digit.style.height = `${digitHeight}px`;
                        digit.style.fontSize = `${fontSize}px`;
                        digit.style.lineHeight = `${digitHeight}px`;
                        digitStrip.appendChild(digit);
                    }
                }

                digitContainer.appendChild(digitStrip);
                odometer.appendChild(digitContainer);

                const finalPosition = digitIndex === 0 ? 9 : 19;
                const targetY = -(finalPosition * digitHeight);

                if (digitIndex === 0) {
                    gsap.set(digitStrip, { y: digitHeight * 5 });
                } else {
                    gsap.set(digitStrip, { y: 0 });
                }

                const delay = digitIndex === 0 ? 0.05 : 0;
                const duration = digitIndex === 0 ? 1.3 : 1.25;

                gsap.to(digitStrip, {
                    y: targetY,
                    duration,
                    delay,
                    ease: 'transitionEase'
                });
            });
        }
    }
});

