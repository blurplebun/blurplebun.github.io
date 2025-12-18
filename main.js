/* --------------------------
   CONFIG
   -------------------------- */

// Lazy loader base path
const LAZY_BASE = 'https://cdn.jsdelivr.net/gh/blurplebun/blurplebun.github.io/';
const LOCAL_MODE = 1; // if you don't use a cdn service to load images, just set this to true

// Sound control
const INIT_MASTER_VOL = 1;
const INIT_BGM_MASTER_VOL = 0.75;
const INIT_SFX_MASTER_VOL = 1;
let SFX_CLICK_VOL = 0.4;
let SFX_LINK_VOL = 0.3;
let SFX_PAGE_CLOSE_VOL = 0.5;
let SFX_PAGE_OPEN_VOL = 0.5;
let SFX_SWAP_VOL = 0.4;
let SFX_WARP_VOL = 0.4;

let MASTER_VOL = INIT_MASTER_VOL;
let BGM_MASTER_VOL = INIT_BGM_MASTER_VOL;
let SFX_MASTER_VOL = 0;

// If you prefer to always use an orbit-less interface, set this to true
let SIMPLE_MODE = getSimpleMode();
// Simple mode index data
const MAIN_MENU_TITLE = 'Main Menu';
const MAIN_MENU_SUBTITLE = 'Welcome to the Fyberverse!';
const SIMPLE_MODE_MENU_LOGO_SCALE = 1.5;

const ORBIT_FPS = 20;

// Links
const eFolder = "e";




/* --------------------------
   Helpers
   -------------------------- */

// === Utility helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function getCSSVar(name, parse = 'string') {
    const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    if (parse === 'int') return parseInt(val) || 0;
    if (parse === 'float') return parseFloat(val) || 0;
    return val;
}

// Detect mobile/tablet device
window.mobileAndTabletCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

/* --------------------------
    DOM Elements (cached)
    -------------------------- */
const ring = $('.ring');
const expander = document.getElementById('expander');
const contentView = document.getElementById('contentView');
const cardsContainer = document.getElementById('cardsContainer');
const contentTitle = document.getElementById('contentTitle');
const contentSubtitle = document.getElementById('contentSubtitle');
const focusedLayout = document.getElementById('focusedLayout');
const focusedCardArea = document.getElementById('focusedCardArea');
const detailArea = document.getElementById('detailArea');
const backBtn = document.getElementById('backBtn');
const centerBtn = document.getElementById('centerBtn');
const rerollBtn = document.getElementById('rerollBtn');
const menuLogo = $('.menu-logo');
const menuStage = $('.menu-stage');
const starfield = $('.starfield');

// Keep centerBtn hidden initially
// centerBtn.classList.add('visible');

// Make sure menuStage initial transform uses CSS var scale
menuStage.style.transition = 'none';
menuStage.style.transform = `translate(0px, 0px) scale(${getCSSVar('--menu-stage-scale')})`;




// --------------------------
// BGM SYSTEM
// --------------------------

// Declare all BGM elements
const bgm = {
    fyberverse: document.getElementById("bgmFyberverse"),
    deltadim: document.getElementById("bgmDeltadim"),
    floriverse: document.getElementById("bgmFloriverse"),
    digirel: document.getElementById("bgmDigirel"),
    nansenz: document.getElementById("bgmNansenz"),
    hizen: document.getElementById("bgmHizen"),
    nadir: document.getElementById("bgmNadir"),
};

const menuToBgm = {
    deltadim: "deltadim",
    floriverse: "floriverse",
    digirel: "digirel",
    nansenz: "nansenz",
    hizen: "hizen",
    nadir: "nadir",
};

const silentMenus = new Set([
    "yolkspocketdimension",
]);

// Currently active background music
let currentBgm = "fyberverse";
let bgmEnabled = false;

// Fade helper
function fadeVolume(audio, t, speed = 0.02) {
    const target = t * BGM_MASTER_VOL;
    if (!audio) return;
    clearInterval(audio._fadeInterval);

    // Clamp speed to prevent overshooting
    const effectiveSpeed = Math.min(speed, 1); // Cap at 0.1 max

    audio._fadeInterval = setInterval(() => {
        const currentVol = audio.volume;
        const diff = target - currentVol;
        // If we're close enough to target, snap to it
        if (Math.abs(diff) < 0.01) {
            audio.volume = target;
            clearInterval(audio._fadeInterval);
            return;
        }
        // Calculate step size based on remaining difference
        let step = diff * 0.1;
        if (Math.abs(step) > effectiveSpeed) {
            step = (diff > 0 ? effectiveSpeed : -effectiveSpeed);
        }

        audio.volume = currentVol + step;
        audio.volume = Math.max(0, Math.min(target > currentVol ? target : 1, audio.volume));

    }, 50);
}

// Start all BGMs with only fyberverse audible
function startAllBgm() {
    Object.entries(bgm).forEach(([key, audio]) => {
        audio.volume = (key === "fyberverse" ? 1 : 0) * BGM_MASTER_VOL;
        audio.play().catch(() => { });
    });
    currentBgm = "fyberverse";
    bgmEnabled = true;
    vizRemove(playBgmBtn);
    updateSettingsButtonText('toggleMusic', 'Mute Music');
}





/* --------------------------
    Camera / Drag / Parallax
    -------------------------- */

// State for panning / parallax
let isDragging = false;
let startX = 0, startY = 0;
let currentX = 0, currentY = 0;
const parallaxFactor = -0.1;

// Shared function used by mouse/touch/wheel to update transforms
function setMenuStageTransform(x, y, options = {}) {
    const scale = getCSSVar('--menu-stage-scale');
    menuStage.style.transition = options.transition || menuStage.style.transition;
    menuStage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

    // Update starfield parallax if present
    if (starfield) {
        const layers = starfield.querySelectorAll('.star-layer');
        layers.forEach(layer => {
            const depth = parseFloat(layer.dataset.depth) || 1;
            const px = -x * parallaxFactor * depth;
            const py = -y * parallaxFactor * depth;
            // keep a smooth transition when panning
            layer.style.transition = options.layerTransition || 'transform 0.3s cubic-bezier(0, 0, .5, 1)';
            layer.style.transform = `translate(${px}px, ${py}px)`;
        });
    }
}

/*
// Shared function used by mouse/touch/wheel to update transforms
function setMenuStageTransform(x, y, options = {}) {
    const scale = getCSSVar('--menu-stage-scale');
    menuStage.style.transition = options.transition || menuStage.style.transition;
    menuStage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

}

function wrap(v, min, max) {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
}

function moveStars(x, y) {
    if (!starfield) return;

    const stars = starfield.querySelectorAll('.star');

    stars.forEach(s => {
        const depth = parseFloat(s.dataset.depth) || 1;

        let px = -x * parallaxFactor * depth + parseInt(s.dataset.x);
        let py = -y * parallaxFactor * depth + parseInt(s.dataset.y);

        let px2 = wrap(px, -STAR_RANGE, STAR_RANGE);
        let py2 = wrap(py, -STAR_RANGE, STAR_RANGE);
        s.style.transition = 'none'
        s.style.transform = `translate(${px2}px, ${py2}px)`;
    });
}
    */

// Begin drag (mouse or touch)
function beginDrag(clientX, clientY) {
    if (SIMPLE_MODE) return;
    isDragging = true;
    startX = clientX - currentX;
    startY = clientY - currentY;
    menuStage.style.cursor = 'grab';
    menuStage.style.transition = 'none';
}

// Move during drag (mouse or touch)
let lastDrag = 0;
function dragTo(clientX, clientY) {
    if (SIMPLE_MODE) return;
    const now = performance.now();
    if (now - lastDrag < 16) return;
    lastDrag = now;
    if (!isDragging) return;
    currentX = clientX - startX;
    currentY = clientY - startY;
    requestAnimationFrame(() => {
        setMenuStageTransform(currentX, currentY, { transition: 'transform 0.2s cubic-bezier(.2, .9, .2, 1)' });
    });
    $('.splash-text-info').style.opacity = 0;
}

// End drag
function endDrag() {
    if (SIMPLE_MODE) return;
    isDragging = false;
    menuStage.style.cursor = 'default';
    updateCenterButtonVisibility();
}

// Mouse events
menuStage.addEventListener('mousedown', (e) => {
    beginDrag(e.clientX, e.clientY);
});
window.addEventListener('mousemove', (e) => {
    dragTo(e.clientX, e.clientY);
});
window.addEventListener('mouseup', endDrag);

// Touch events (single-finger only)
menuStage.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    beginDrag(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });
window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    dragTo(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });
window.addEventListener('touchend', endDrag);

// Two-finger trackpad-like gesture (wheel) - keep original thresholds
menuStage.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (SIMPLE_MODE) return;
    if (Math.abs(e.deltaX) < 100 && Math.abs(e.deltaY) < 100) {
        currentX -= e.deltaX * 1.5;
        currentY -= e.deltaY * 1.5;
        setMenuStageTransform(currentX, currentY);
        $('.splash-text-info').style.opacity = 0;
        updateCenterButtonVisibility();
    }
}, { passive: false });

// Snap camera back to center (used by center button & resize)
function snapCameraToCenter() {
    currentX = 0; currentY = 0;
    setMenuStageTransform(0, 0, { transition: 'transform 0.5s cubic-bezier(.2, .9, .2, 1)', layerTransition: 'transform 0.8s ease-out' });
    vizRemove(centerBtn);
    // Clear layer transitions after animation finishes to avoid stuttering later
    setTimeout(() => {
        starfield?.querySelectorAll('.star-layer').forEach(layer => layer.style.transition = '');
    }, 900);
}

function updateCenterButtonVisibility() {
    if (contentView.classList.contains('visible')) {
        vizRemove(centerBtn);
        return;
    }

    if (currentX !== 0 || currentY !== 0) {
        vizAdd(centerBtn);
    } else {
        vizRemove(centerBtn);
    }
}

window.addEventListener('resize', snapCameraToCenter);
centerBtn.addEventListener('click', (e) => {
    snapCameraToCenter();
    playSound('sfxClick', SFX_CLICK_VOL);
});

// Helper function to check if any input element is focused
function isInputFocused() {
    const activeElement = document.activeElement;
    return (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable
    );
}


/* --------------------------
    Orbits + Buttons
    -------------------------- */

// Orbit configuration (read from CSS custom properties)
let orbitRadius = getCSSVar('--menu-radius', 'int') || 180;
let orbitDuration = getCSSVar('--ring-rotation-duration', 'float') || 60;
if (ring) ring.style.animationDuration = getCSSVar('--ring-rotation-duration') || '60s';

// Visual orbit rings (regeneratable)
function initOrbitRings() {
    if (SIMPLE_MODE) return;
    // remove existing visuals
    $$('.orbit-visual').forEach(el => el.remove());

    const baseRadius = getCSSVar('--menu-radius', 'int') || 180;
    // collect unique orbit layers - menuItems assumed global from original file
    const uniqueOrbits = [...new Set(menuItems.filter(m => !m.hidden).map(m => m.orbit || 1))];

    uniqueOrbits.forEach(orbit => {
        const orbitRing = document.createElement('div');
        orbitRing.className = 'orbit-visual pulse ringHidden';

        const oData = orbitData.find(o => o.orbit === orbit);
        const oScaleX = oData?.scaleX || getCSSVar('--menu-orbit-scale-x', 'float');
        const oScaleY = oData?.scaleY || getCSSVar('--menu-orbit-scale-y', 'float');

        const diameter = (baseRadius * orbit * 1.2 + 60) * 2;
        orbitRing.style.width = `${diameter}px`;
        orbitRing.style.height = `${diameter}px`;
        orbitRing.style.left = '50%';
        orbitRing.style.top = '50%';
        orbitRing.style.transform = `translate(-50%, -50%) scale(${oScaleX}, ${oScaleY})`;
        orbitRing.style.opacity = 0.45 / orbit;
        orbitRing.style.zIndex = '-1';
        orbitRing.style.pointerEvents = 'auto';
        orbitRing.style.position = 'absolute';

        menuStage.insertBefore(orbitRing, menuStage.firstChild);
    });
}

// orbit buttons array
const orbitButtons = [];
function initMenu() {
    // Clear existing rings and orbit buttons
    $$('.ring').forEach(r => r.remove());
    orbitButtons.length = 0;

    if (SIMPLE_MODE) return;

    const grouped = {};
    menuItems.forEach(m => {
        if (m.hidden) return;
        const orbit = m.orbit;
        if (!grouped[orbit]) grouped[orbit] = [];
        grouped[orbit].push(m);
    });

    Object.keys(grouped).forEach(layerKey => {
        const items = grouped[layerKey];
        const orbit = parseFloat(layerKey, 10);

        const ringLayer = document.createElement('div');
        ringLayer.className = 'ring ringHidden';
        ringLayer.style.zIndex = '10';

        const direction = orbit % 2 === 0 ? -1 : 1;
        const randomPhase = Math.random() * 360;
        const count = items.length;

        items.forEach((m, index) => {
            const angleDeg = (index / count + 0.75) * 360 + randomPhase;
            const angleRad = (angleDeg * Math.PI) / 180;

            const btn = document.createElement('button');
            btn.className = 'menu-button';
            btn.dataset.angle0 = angleRad; // initial radians
            btn.dataset.orbit = orbit;
            btn.dataset.menuQ = m.menuId;
            btn.setAttribute('aria-label', m.name);
            btn.style.setProperty('--glow', m.color);
            btn.style.background = m.color || 'transparent';
            btn.innerHTML = `
                <div class="inner">
                    <div class="menu-thumb-square lazy-bg" data-bg='${m.image || ''}'></div>
                    ${m.showName && m.name ? `<div class="menu-subtitle">${m.name}</div>` : ''}
                </div>
            `;

            // compute radius & motion params
            const baseRadius = getCSSVar('--menu-radius', 'int') || 180;
            let r = baseRadius * orbit * 1.2 + 60;
            if (orbit === 0) r = 0;
            btn.dataset.radius = r;

            const baseDuration = orbitDuration;
            const periodSec = baseDuration * orbit; // seconds per revolution
            const omega = (2 * Math.PI) / periodSec * direction; // radians/sec
            btn.dataset.omega = omega;
            btn.dataset.scale = m.scale || 1;

            const oData = orbitData.find(o => o.orbit === orbit);
            const oScaleX = oData?.scaleX || getCSSVar('--menu-orbit-scale-x', 'float');
            const oScaleY = oData?.scaleY || getCSSVar('--menu-orbit-scale-y', 'float');

            const x0 = Math.cos(angleRad) * r * oScaleX;
            const y0 = Math.sin(angleRad) * r * oScaleY;
            btn.style.left = '50%';
            btn.style.top = '50%';
            btn.style.transform = `translate3d(${x0}px, ${y0}px, 0) scale(${m.scale || 1})`;

            btn.tabIndex = -1;
            btn.setAttribute('aria-hidden', 'true');

            btn.addEventListener('click', () => { if (!isTransitioning) { openMenu(m, btn) } });
            ringLayer.appendChild(btn);
            orbitButtons.push(btn);
        });

        menuStage.appendChild(ringLayer);
    });

    startOrbitAnimation();
    initOrbitRings();
}

// Orbit animation loop
if (!SIMPLE_MODE) {
    let cursorX = 0, cursorY = 0;
    window.addEventListener('mousemove', e => { cursorX = e.clientX; cursorY = e.clientY; });

    let orbitAnimStarted = false;
    let orbitStartTs = performance.now();
    function startOrbitAnimation() {
        if (orbitAnimStarted) return;
        orbitAnimStarted = true;
        orbitStartTs = performance.now();
        requestAnimationFrame(orbitFrame);
    }

    let lastFrame = 0;
    function orbitFrame(ts) {
        if (ts - lastFrame > 1000 / ORBIT_FPS) {
            lastFrame = ts;
            const elapsed = (ts - orbitStartTs) / 1000;

            const transforms = new Array(orbitButtons.length);
            const needsHoverEffect = !contentView.classList.contains('visible');
            const maxDist = 250;

            const cursorPos = { x: cursorX, y: cursorY };

            for (let i = 0; i < orbitButtons.length; i++) {
                const el = orbitButtons[i];
                const dataset = el.dataset;

                const a0 = parseFloat(dataset.angle0) || 0;
                const w = parseFloat(dataset.omega) || 0;
                const r = parseFloat(dataset.radius) || 0;
                const s = parseFloat(dataset.scale) || 1;

                const oData = orbitData.find(o => o.orbit === parseFloat(dataset.orbit));
                const oScaleX = oData?.scaleX || getCSSVar('--menu-orbit-scale-x', 'float');
                const oScaleY = oData?.scaleY || getCSSVar('--menu-orbit-scale-y', 'float');

                const angle = a0 + w * elapsed;
                const x = Math.cos(angle) * r * oScaleX;
                const y = Math.sin(angle) * r * oScaleY;
                el.dataset.yIndex = y;

                // Calculate zoom for hover effect
                let zoom = 1;
                if (!isDragging && needsHoverEffect) {
                    const rect = dataset.orbit != 0 ? el.getBoundingClientRect() : menuStage.getBoundingClientRect();
                    const btnX = rect.left + rect.width / 2;
                    const btnY = rect.top + rect.height / 2;

                    const dx = cursorPos.x - btnX;
                    const dy = cursorPos.y - btnY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    zoom = 1 + Math.max(0, (1 - dist / maxDist)) * 0.375;
                }

                transforms[i] = `translate3d(${x}px, ${y}px, 0) scale(${s * zoom})`;
            }

            requestAnimationFrame(() => {
                for (let i = 0; i < orbitButtons.length; i++) {
                    orbitButtons[i].style.transform = transforms[i];
                }
            });
        }

        requestAnimationFrame(orbitFrame);
    }

    // Update orbit radii on resize (debounced)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const baseRadius = getCSSVar('--menu-radius', 'int') || 180;
            orbitButtons.forEach(el => {
                const orbit = parseFloat(el.dataset.orbit) || 1;
                const r = baseRadius * orbit * 1.2 + 60;
                el.dataset.radius = r;
                el.style.zIndex = el.dataset.yIndex < 0 ? 13 : 12;
            });
            initOrbitRings();
        }, 300);
    });
}



/* --------------------------
    Character helpers & reroll
    -------------------------- */

// Check if label is character (preserve original function)
function isCharacter(label) {
    return label.isCharacter;
}

// Get all characters (returns array of {menu,label})
let characters = [];
let nextCharacter = null;
function getAllCharacters() {
    characters = [];
    menuItems.forEach(menu => {
        if (!menu.labels) return;
        if (menu.menuId === 'random') return;
        if (menu.menuId.includes('floriverse')) return;
        menu.labels.forEach(label => {
            if (label.cardId && isCharacter(label)) characters.push({ menu, label });
        });
    });
    nextCharacter = randomNoRepeats(characters);
    return characters;
}

// Random no-repeats helper
function randomNoRepeats(array) {
    let copy = array.slice();
    return function () {
        if (copy.length === 0) copy = array.slice();
        const index = Math.floor(Math.random() * copy.length);
        return copy.splice(index, 1)[0];
    };
}

function randomCharacter() {
    if (!nextCharacter) getAllCharacters();
    return nextCharacter();
}

rerollBtn.addEventListener('click', () => {
    const pick = randomCharacter();
    if (!pick) return;
    openMenuById(pick.menu.menuId, true);

    const cardEl = $(`[data-card-id="${pick.label.cardId}"]`);
    if (cardEl) focusCard(cardEl, pick.label, pick.menu);
});



/* --------------------------
    Open Menu / Show Content
    -------------------------- */

let openSingle = false;
let isTransitioning = false;
function openMenu(menu, buttonEl, { skipAnimation = false } = {}) {
    isTransitioning = true;

    // BGM transition when opening menu
    if (bgmEnabled && !bgmStop) {
        const rootId = menu.menuId.split("-")[0];
        const newBgm = menuToBgm[rootId];

        if (silentMenus.has(rootId)) {
            // Menus that are set to be silent
            fadeVolume(bgm[currentBgm], 0);
        } else if (newBgm && newBgm !== currentBgm) {
            // Menus with new BGM
            fadeVolume(bgm[currentBgm], 0);
            fadeVolume(bgm[newBgm], 1);

            currentBgm = newBgm;
        } else if (!newBgm) {
            // Menus with no specific BGM = return to fyberverse
            fadeVolume(bgm[currentBgm], 0);
            fadeVolume(bgm.fyberverse, 1);
            currentBgm = "fyberverse";
        }
    }
    if (menu.hidden || !buttonEl || skipAnimation) {
        showContentFor(menu);
        history.pushState({}, '', `?m=${menu.menuId}`);
        playSound('sfxSwap', SFX_SWAP_VOL);
        return;
    }

    // special-case "random" menu (preserve previous logic)
    if (menu.menuId === 'random') {
        const list = getAllCharacters();
        if (list.length === 0) {
            alert('No character cards found.');
            return;
        }
        const pick = list[Math.floor(Math.random() * list.length)];
        const targetMenu = pick.menu;
        const targetLabel = pick.label;

        openCardById(targetMenu.menuId, targetLabel.cardId, true)
        vizAdd(rerollBtn);
        playSound('sfxSwap', SFX_SWAP_VOL);
        return;
    }

    // compute center for expander origin
    const speed = getCSSVar('--overlay-transition');
    const rect = buttonEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // style expander
    expander.style.left = cx + 'px';
    expander.style.top = cy + 'px';
    expander.style.width = rect.width + 'px';
    expander.style.height = rect.height + 'px';
    expander.style.borderRadius = '50%';
    expander.style.background = getComputedStyle(buttonEl).backgroundColor || menu.color;
    expander.style.opacity = '0.3';

    requestAnimationFrame(() => {
        const maxDim = Math.max(window.innerWidth, window.innerHeight) * 2.2;
        const scale = maxDim / rect.width;
        expander.style.transform = `translate(-50%,-50%) scale(${scale})`;
        expander.style.transition = `transform ${parseInt(speed) * 4}ms cubic-bezier(.2,.9,.2,1), opacity ${speed}`;
        buttonEl.style.transform += ' scale(1.02)';

        setTimeout(() => {
            expander.style.opacity = '0';
            expander.style.left = '0';
            expander.style.top = '0';
            expander.style.width = '1px';
            expander.style.height = '1px';
            expander.style.transform = 'translate(-50%,-50%) scale(1)';
            showContentFor(menu);
            history.pushState({}, '', `?m=${menu.menuId}`);
        }, parseInt(speed));
    });

    playSound('sfxWarp', SFX_WARP_VOL);
}


// initialize content
function initContent() {
    if (SIMPLE_MODE) {
        // give parent data to each menu
        menuItems.forEach(menu => {
            if (!menu.parent) menu.parent = 'index'
        })

        // make a main menu
        let labelGroup = [];
        let menuMatches = menuItems.filter(menu => (!(menu.invisible || menu.hidden)));

        if (menuMatches.length > 0) {
            let currOrbit = 0;
            menuMatches.forEach(menu => {
                let separateOnce = false;
                while (menu.orbit > currOrbit) {
                    if (!separateOnce) {
                        let orbitMatch = orbitData.find(o => o.orbit === menu.orbit);
                        t = '<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>' + orbitMatch.name;
                        e = '<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>' + orbitMatch.desc;
                        labelGroup.push({
                            title: t,
                            excerpt: e
                        });
                        separateOnce = true;
                    }
                    currOrbit++;
                }
                labelGroup.push({
                    cardId: `menu-${menu.menuId}`,
                    title: menu.name,
                    excerpt: menu.subtitle || '',
                    image: menu.image || '',
                    linkId: menu.menuId,
                    banner: true,
                });
            });
        }

        // main menu data
        mainMenu = {
            name: MAIN_MENU_TITLE,
            menuId: 'index',
            subtitle: MAIN_MENU_SUBTITLE,
            labels: labelGroup,
            invisible: true
        }

        menuItems = [mainMenu, ...menuItems];
        menuLogoRedirect = menuItems[0].menuId;
    }

    menuItems.forEach(m => {
        m.labels?.forEach(lbl => {
            if (lbl.linkId) {
                const linkedMenu = menuItems.find(lm => lm.menuId === lbl.linkId);
                if (linkedMenu) {
                    lbl.cardId = lbl.linkId;
                    lbl.title = linkedMenu.name;
                }
            }
        })
    })

    // add faraway orbit just so the drag layout work (I GAVE UP ON ALTERNATIVES LOL)
    if (!SIMPLE_MODE) {
        faraway = {
            menuId: 'farawaymenu',
            name: 'faraway',
            showName: false,
            orbit: 999,
            scale: 0.01,
            invisible: true,
            labels: []
        }
        menuItems.push(faraway);
    }
}
initContent();

// show content
let shownMenu = null;
function showContentFor(menu, sort = null) {
    isTransitioning = false;
    shownMenu = menu;
    contentTitle.textContent = menu.name;
    contentSubtitle.textContent = menu.subtitle;
    toggleView({ focused: true, show: false });
    toggleView({ content: true, show: true });
    const parentMenu = menuItems.find(m => m.menuId === menu.parent);
    if (parentMenu) {
        backBtn.querySelector('span').textContent = parentMenu.name || 'Parent Menu';
    } else backBtn.querySelector('span').textContent = SIMPLE_MODE ? 'Close' : 'Menu';

    // Add copy link icon to menu title (except for search)
    if (menu.menuId !== 'search') {
        // remove old copy-link if present
        const existing = contentTitle.querySelector('.copy-link');
        if (existing) existing.remove();

        const linkIcon = document.createElement('span');
        linkIcon.className = 'copy-link';
        linkIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07l-1.17 1.17" />
                <path d="M14 11a5 5 0 0 0-7.07 0L3.4 14.54a5 5 0 0 0 7.07 7.07l1.17-1.17" />
            </svg>
        `;
        linkIcon.title = 'Copy shareable link';
        linkIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            const link = !eFolder ? `${location.origin}${location.pathname}?m=${menu.menuId}` : `${location.origin}${location.pathname}${eFolder}/${menu.menuId}`;
            navigator.clipboard.writeText(link);
            linkIcon.classList.add('copied');
            linkIcon.title = 'Copied!';
            setTimeout(() => {
                linkIcon.classList.remove('copied');
                linkIcon.title = 'Copy shareable link';
            }, 1500);
            playSound('sfxLink', SFX_LINK_VOL);
        });
        contentTitle.appendChild(linkIcon);
    }

    contentView.dataset.singleCardMenu = menu.labels.length === 1 ? 'true' : 'false';
    cardsContainer.innerHTML = '';

    renderContent(menu, sort);

    contentView.setAttribute('aria-hidden', 'false');

    // If only one card in menu, open/focus it automatically
    if (menu.labels.length === 1) {
        const single = menu.labels[0];
        const cardEl = cardsContainer.querySelector('.card');
        if (cardEl) {
            if (single.unclickable) return;
            if (single.url) window.open(single.url, '_blank');
            else focusCard(cardEl, single, menu);
            openSingle = true;
        }
    }

    initLazyLoad();
    // contentView.scrollTop = 0;
}

// render content to grid
function renderContent(menu, sort = null) {
    // Create new section grid and render labels
    let section = document.createElement('div');
    section.className = 'cards-grid';
    cardsContainer.appendChild(section);

    let i = 0;
    const labels = [...menu.labels];
    const groups = [];
    let currentGroup = [];

    labels.forEach((lbl) => {
        if (!lbl.cardId) {
            // separator
            if (currentGroup.length > 0) {
                groups.push({ type: 'cards', items: currentGroup });
                currentGroup = [];
            }
            groups.push({ type: 'separator', item: lbl });
        } else {
            // card
            currentGroup.push(lbl);
        }
    });

    // last group
    if (currentGroup.length > 0) {
        groups.push({ type: 'cards', items: currentGroup });
    }

    // Process each group
    groups.forEach((group) => {
        if (group.type === 'separator') {
            // Render separator
            const lbl = group.item;
            const header = document.createElement('div');
            header.className = 'content-header section-header';

            if (lbl.title) {
                const h1 = document.createElement('div');
                h1.className = 'content-title separator';
                h1.innerHTML = lbl.title;
                header.appendChild(h1);
            }
            if (lbl.excerpt) {
                const h2 = document.createElement('div');
                h2.className = 'content-sub separator';
                h2.innerHTML = lbl.excerpt;
                header.appendChild(h2);
            }

            if (lbl.title || lbl.excerpt) cardsContainer.appendChild(header);

            const hr = document.createElement('hr');
            hr.className = 'card-separator';
            cardsContainer.appendChild(hr);

            // start new grid section
            section = document.createElement('div');
            section.className = 'cards-grid';
            cardsContainer.appendChild(section);
            i++;
        } else {
            // Render cards in this group
            let cardsToRender = group.items;

            // Sort cards within this group if needed
            if (sort === 'asc' || sort === 'desc') {
                // Separate banner and non-banner cards
                const nonBannerCards = cardsToRender.filter(lbl => !lbl.banner);
                const bannerCards = cardsToRender.filter(lbl => lbl.banner);

                // Sort only non-banner cards
                nonBannerCards.sort((a, b) => {
                    if (!a.title || !b.title) return 0;

                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();

                    if (sort === 'asc') {
                        return titleA.localeCompare(titleB);
                    } else {
                        return titleB.localeCompare(titleA);
                    }
                });

                cardsToRender = cardsToRender.map(item =>
                    item.banner ? item : nonBannerCards.shift()
                );
            }

            // Render the sorted cards
            cardsToRender.forEach((lbl) => {
                // Create card element
                const c = document.createElement('div');
                c.className = 'card';
                c.dataset.cardId = lbl.cardId;

                // Banner type
                if (lbl.banner) c.dataset.banner = 'true';

                // Linked menu card
                if (lbl.linkId) {
                    const linkedMenu = menuItems.find(m => m.menuId === lbl.linkId);
                    if (linkedMenu) {
                        c.dataset.link = 'true';
                        c.style.border = `3px solid ${linkedMenu.color}`;
                        c.style.boxShadow = `inset 0 0 30px color-mix(in srgb, ${linkedMenu.color} 50%, transparent)`;
                        c.innerHTML = `
                            <div class="card-text">
                                <strong>${linkedMenu.name}</strong>
                                <div class="excerpt">${linkedMenu.subtitle || ''}</div>
                            </div>
                            <div class="menu-button bubble" style="background:${linkedMenu.color || 'transparent'}; animation-delay: ${i * -0.5}s; box-shadow: 0 0 10px ${linkedMenu.color}">
                                <div class="inner">
                                    <div class="menu-thumb lazy-bg" data-bg='${linkedMenu.image || ''}'></div>
                                </div>
                            </div>
                        `;
                        c.addEventListener('click', (e) => {
                            e.stopPropagation();
                            openMenuById(lbl.linkId, true);
                        });
                    }
                    section.appendChild(c);
                    i++;
                    return;
                }

                // Standard card markup (image vs no-image)
                if (lbl.image && !lbl.blank) {
                    c.innerHTML = `
                        <div class="thumb lazy-bg" data-bg="${lbl.image}"></div>
                        <div class="card-text">
                            <strong>${lbl.title}</strong>
                            <div class="excerpt">${lbl.excerpt || ''}</div>
                        </div>
                    `;
                } else if (lbl.blank) {
                    c.innerHTML = `
                        <div class="thumb lazy-bg" data-bg="${lbl.image}"></div>
                    `;
                    c.dataset.blank = "true";
                } else {
                    c.innerHTML = `
                        <div class="card-text full">
                            <strong>${lbl.title}</strong>
                            <div class="excerpt">${lbl.excerpt || ''}</div>
                        </div>
                    `;
                    c.dataset.textonly = "true";
                }

                // Special cards
                if (lbl.url) c.dataset.link = "true";
                if (lbl.unclickable) c.dataset.noclick = "true";

                // Character cards
                if (isCharacter(lbl)) c.dataset.character = 'true';

                // Handle card scripts
                cardScriptHandler(menu, lbl);

                // optional webinfo counters
                const totalCardsCounter = c.querySelector('#totalCardsCounter');
                if (totalCardsCounter) totalCardsCounter.textContent = `totalCards: ${totalCards}`;
                const totalMenusCounter = c.querySelector('#totalMenusCounter');
                if (totalMenusCounter) totalMenusCounter.textContent = `totalMenus: ${totalMenus}`;
                const totalCharacterCounter = c.querySelector('#totalCharacterCounter');
                if (totalCharacterCounter) totalCharacterCounter.textContent = `totalCharacters: ${totalCharacters}`;
                const totalSplashCounter = c.querySelector('#totalSplashCounter');
                if (totalSplashCounter) totalSplashCounter.textContent = `totalSplash: ${totalSplash}`;

                // click handling (links/external/unclikable)
                if (!(lbl.unclickable)) {
                    c.addEventListener('click', () => {
                        if (lbl.url) return window.open(lbl.url, '_blank');

                        const realMenu = (menu.menuId === 'search' && lbl.fromMenu)
                            ? menuItems.find(m => m.menuId === lbl.fromMenu)
                            : menu;

                        focusCard(c, lbl, realMenu);
                    });
                }

                section.appendChild(c);
                i++;
            });
        }
    });
}

// Update sort button text based on current mode
function updateSortButtonText() {
    const texts = ['Default', 'A-Z', 'Z-A'];
    sortBtn.textContent = texts[sortMode];

    // Optional: Add title/tooltip for accessibility
    const titles = ['Original order', 'Sort A-Z', 'Sort Z-A'];
    sortBtn.title = titles[sortMode];
}

// sort button click handler
const sortBtn = document.getElementById('sortBtn')
let sortMode = 0;
sortBtn?.addEventListener('click', () => {
    sortMode = (sortMode + 1) % 3;
    if (sortMode == 0) showContentFor(shownMenu);
    else if (sortMode == 1) showContentFor(shownMenu, 'asc');
    else if (sortMode == 2) showContentFor(shownMenu, 'desc');
});


// Copy to clipboard button function
async function copyToClipboard(button, textbox) {
    try {
        await navigator.clipboard.writeText(textbox.value);

        const originalText = button.textContent;
        button.textContent = 'Copied!';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);

    } catch (err) {
        console.error('Failed to copy: ', err);
        textbox.select();
        document.execCommand('copy');

        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }
}

/* --------------------------
    Card detail / focus
    -------------------------- */

function focusCard(cardEl, label, menu = null) {
    // clear previous focused area and clone the card
    focusedCardArea.innerHTML = '';
    const clone = cardEl.cloneNode(true);
    clone.classList.add('focused');
    if (clone.hasAttribute('data-banner')) clone.querySelector('.card-text').querySelector('.excerpt').remove();
    clone.removeAttribute('data-banner');
    clone.removeAttribute('data-link');
    clone.removeAttribute('data-noclick');
    focusedCardArea.appendChild(clone);
    vizRemove(sortBtn);

    // Add lazy classes to any <img> in label.detail and convert src->data-src
    let html = label.detail
        ? label.detail
            .replace(/<img\b(?![^>]*\bclass=)/g, '<img class="lazy"') // add lazy class if missing
            .replace(/(<img[^>]*?)\s+src=/g, '$1 data-src=') // replace src with data-src for lazy loading
        : '';


    if (isCharacter(label)) {
        const cSpecies = label.cSpecies ? `Species: ${label.cSpecies}<br>` : '';
        const cPronouns = label.cPronouns ? `Pronouns: ${label.cPronouns}<br>` : '';
        const cGender = label.cGender ? `Gender: ${label.cGender}<br>` : '';
        const cSexuality = label.cSexuality ? `Sexuality: ${label.cSexuality}<br>` : '';
        const cNicknames = label.cNicknames ? `Nickname: ${label.cNicknames}<br>` : '';
        const cReference = label.cReference ? `<br><h2>Reference Art:</h2><br><img src="${label.cReference}"><br><br>` : '';
        const cGallery = label.cGallery ? label.cGallery.length != 0 ? `<hr><h2>Gallery:</h2><div class="imgContainer">` + label.cGallery.map(imgSrc => `<img src="${imgSrc}">`).join('') + `</div><br>` : '' : '';
        const cAddOns = label.cAddOns ? `<br>${label.cAddOns}<br>` : '';
        const details = label.detail ? `<hr>${html}<br>` : '';

        html = `
            <a data-open-card="info:ocrules">Character rules</a><br>
            <br>
            ${cSpecies}
            ${cPronouns}
            ${cGender}
            ${cSexuality}
            ${cNicknames}
            ${cAddOns}
            ${cReference}
            ${details}
            ${cGallery}
        `;
    }
    const realMenuQ = label.fromMenu || menu.menuId;
    const shareURL = !eFolder ? `${location.origin}${location.pathname}?m=${realMenuQ}&i=${label.cardId}` : `${location.origin}${location.pathname}${eFolder}/${realMenuQ}/${label.cardId}`;;
    detailArea.innerHTML = `
        <h1>
            ${!label.blank ? `<div style="font-size: 20px;"><small><a data-open-card="${menu.menuId}">${menu.name}</a> /</small></div>${label.title}` : ''}
            <span class="copy-link" title="Copy shareable link">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07l-1.17 1.17" />
                    <path d="M14 11a5 5 0 0 0-7.07 0L3.4 14.54a5 5 0 0 0 7.07 7.07l1.17-1.17" />
                </svg>
            </span>
        </h1>
        <hr>${html}
    `;
    detailArea.querySelector('.copy-link').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(shareURL);
        const icon = e.currentTarget;
        icon.classList.add('copied');
        icon.title = 'Copied!';
        setTimeout(() => { icon.classList.remove('copied'); icon.title = 'Copy shareable link'; }, 1500);
        playSound('sfxLink', SFX_LINK_VOL);
    });
    history.pushState({}, '', `?m=${realMenuQ}&i=${label.cardId}`);
    initLazyLoad();

    // set up image handlers inside detailArea
    imgConHandler(detailArea);

    // handle script converters if applicable
    focusCardScriptHandler(label);

    // hide cards grid and show focused layout
    cardsContainer.querySelectorAll('.cards-grid, .card-separator, .section-header').forEach(el => el.classList.add('hidden'));
    focusedLayout.style.display = 'flex';
    $('.content-header')?.classList.add('hidden');
    contentView.style.overflow = 'hidden';
    contentView.insertBefore(cardsContainer, focusedLayout);

    focusedLayout.scrollIntoView({ behavior: 'auto', block: 'center' });
    if (openSingle) backBtn.querySelector('span').textContent = SIMPLE_MODE ? 'Close' : 'Menu';
    else backBtn.querySelector('span').textContent = 'Card Selector';
    initLazyLoad();
    detailArea.scrollTop = 0;

    playSound('sfxSwap', SFX_SWAP_VOL);
}





/* --------------------------
    Image detail handlers
    -------------------------- */

function detailAreaImgHandler(img) {
    // BEFORE load: set placeholder aspect and style
    if (!img.classList.contains('loaded')) {
        img.style.aspectRatio = '4 / 5';
        img.style.width = '90%';
        img.style.objectFit = 'cover';
        img.style.backgroundColor = 'var(--bg)';
        img.style.opacity = 0.5;
    }

    // ON load
    function onLoad() {
        img.style.width = '';
        img.style.aspectRatio = '';
        img.style.backgroundColor = '';
        img.style.opacity = 1;
        img.classList.add('loaded');
    }

    // ON error
    function onError() {
        img.style.width = '90%';
        img.style.aspectRatio = '4 / 5';
        img.style.backgroundColor = 'var(--bg)';
        img.style.opacity = 0.5;
    }

    img.addEventListener('load', onLoad, { once: true });
    img.addEventListener('error', onError, { once: true });
}

function imgConHandler(container) {
    const contentImgs = container.querySelectorAll('img');
    contentImgs.forEach(img => detailAreaImgHandler(img));
    const containers = container.querySelectorAll('.imgContainer');
    containers.forEach(c => {
        const imgs = c.querySelectorAll('img');
        imgs.forEach(img => detailAreaImgHandler(img));
    });
}

// Image preview overlay (click on detailArea images)
document.addEventListener('click', (e) => {
    const img = e.target.closest('#detailArea img');
    if (!img) return;

    // create overlay if missing
    let overlay = $('.img-preview-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'img-preview-overlay';
        document.body.appendChild(overlay);
    }

    const caption = img.dataset.caption ? `<h1 style="margin-top: 12px; margin-bottom: -10px;">${img.dataset.caption}</h1>` : '';
    const subcaption = caption && img.dataset.subcaption ? `<p style="color: color-mix(in srgb, var(--accentl) 75%, transparent)">${img.dataset.subcaption}</p>` : '';

    overlay.innerHTML = `<img src="${img.src}" alt="preview" ${caption ? 'data-hasCaption=true' : ''}>${caption}${subcaption}`;
    vizAdd(overlay);
    disableZoom();
    playSound('sfxPageOpen', SFX_PAGE_OPEN_VOL);

    overlay.addEventListener('click', () => {
        vizRemove(overlay);
        enableZoom();
        playSound('sfxPageClose', SFX_PAGE_CLOSE_VOL);
    }, { once: true });
});



/* --------------------------
    Lazy loader (IntersectionObserver)
    -------------------------- */

const lazyObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;

        if (el.tagName === 'IMG') {
            const src = el.dataset.src;
            if (src) {
                // Use local image if LOCAL_MODE is true, otherwise use LAZY_BASE
                const imageUrl = LOCAL_MODE ? src : LAZY_BASE + src;
                el.src = imageUrl;
                el.onload = () => el.classList.add('loaded');
            }
        } else if (el.classList.contains('lazy-bg')) {
            const bgUrl = el.dataset.bg;
            if (bgUrl) {
                // Use local image if LOCAL_MODE is true, otherwise use LAZY_BASE
                const imageUrl = LOCAL_MODE ? bgUrl : LAZY_BASE + bgUrl;
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    el.style.backgroundImage = `url('${imageUrl}')`;
                    el.classList.add('loaded');
                };
            }
        }

        obs.unobserve(el);
    });
}, { rootMargin: '0px 0px 300px 0px' });

function initLazyLoad() {
    // If in local mode, load all images immediately without lazy loading
    if (LOCAL_MODE) {
        const lazyImages = $$('img.lazy:not(.loaded)');
        const lazyBackgrounds = $$('.lazy-bg:not(.loaded)');

        lazyImages.forEach(el => {
            const src = el.dataset.src;
            if (src) {
                el.src = src;
                el.classList.add('loaded');
            }
        });

        lazyBackgrounds.forEach(el => {
            const bgUrl = el.dataset.bg;
            if (bgUrl) {
                el.style.backgroundImage = `url('${bgUrl}')`;
                el.classList.add('loaded');
            }
        });
    } else {
        // Normal lazy loading behavior
        const lazyImages = $$('img.lazy:not(.loaded)');
        const lazyBackgrounds = $$('.lazy-bg:not(.loaded)');
        lazyImages.forEach(el => lazyObserver.observe(el));
        lazyBackgrounds.forEach(el => lazyObserver.observe(el));
    }
}

document.addEventListener('DOMContentLoaded', initLazyLoad);



/* --------------------------
    Splash texts
    -------------------------- */
window.addEventListener('load', () => {
    const splashTexts = $$('.splash-text');
    splashTexts.forEach(el => {
        const type = el.dataset.info;
        const text = type === 'splash' ? splashLines[Math.floor(Math.random() * splashLines.length)] : el.dataset.infodesc;
        el.innerHTML = text;
        const baseSize = type === 'splash' ? 20 : 10;
        const minSize = 12;
        const maxLen = 45;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        const textLength = tempDiv.textContent.length;

        let size = baseSize - (textLength / maxLen) * (baseSize - minSize);
        size = clamp(size, minSize, baseSize);
        el.style.fontSize = `${size}px`;
        el.style.marginTop = `${-size}px`;

        if (SIMPLE_MODE) {
            const scaleFactor = SIMPLE_MODE_MENU_LOGO_SCALE;
            el.style.fontSize = `calc(${size}px * ${scaleFactor})`;
            el.style.marginTop = `calc(${-size}px * ${scaleFactor})`;

            scaleInlineStyles(el, scaleFactor);
        }

    });
});

// Helper function to scale inline styles
function scaleInlineStyles(element, scaleFactor) {
    const inlineStyledElements = element.querySelectorAll('[style*="font-size"]');
    inlineStyledElements.forEach(inlineEl => {
        const currentStyle = inlineEl.getAttribute('style');
        // Replace font-size values with scaled versions
        const scaledStyle = currentStyle.replace(
            /font-size\s*:\s*([0-9]+(\.[0-9]+)?)px/g,
            (match, value) => {
                const scaledValue = parseFloat(value) * scaleFactor;
                return `font-size: ${scaledValue}px`;
            }
        );
        inlineEl.setAttribute('style', scaledStyle);
    });
}




/* --------------------------
    Starfield generation
    -------------------------- */
function createStarfield(layerCount = 3, starsPerLayer = 30) {
    if (!starfield) return;
    for (let l = 0; l < layerCount; l++) {
        const layer = document.createElement('div');
        layer.classList.add('star-layer');
        layer.dataset.depth = 0.5 + (l / layerCount) * 1;
        for (let i = 0; i < starsPerLayer; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 5 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `-${Math.random() * 5}s`;
            layer.appendChild(star);
        }
        starfield.appendChild(layer);
    }
}

/*
function createStarfield(starCount = 200) {
    if (!starfield) return;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 5 + 1;
        star.dataset.depth = 0.5 + (i / starCount) * 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `50%`;
        star.style.top = `50%`;
        star.dataset.x = (Math.random() * STAR_RANGE * 2 - STAR_RANGE) * 1;
        star.dataset.y = (Math.random() * STAR_RANGE * 2 - STAR_RANGE) * 1;
        star.style.animationDelay = `-${Math.random() * 5}s`;
        starfield.appendChild(star);
    }
}
*/



/* --------------------------
    Audios
    --------------------------*/

// button clicks : sfx
document.addEventListener('click', (e) => {
    if (e.target.closest('#detailArea button') || e.target.closest('.card .excerpt button')) {
        playSound('sfxClick', SFX_CLICK_VOL);
    }
});

// play sfx
function playSound(soundId, volume = 1) {
    s = document.getElementById(soundId);
    if (!s) return;
    s.pause();
    s.currentTime = 0;
    s.volume = soundId.includes('bgm') ? volume * MASTER_VOL * BGM_MASTER_VOL : volume * MASTER_VOL * SFX_MASTER_VOL;
    s.play().catch(() => { });
}

const bgmList = Object.values(bgm);

// Background tab detection
let lastSeen;
let bgmLoop = function () {
    lastSeen = Date.now();
    setTimeout(bgmLoop, 50);
};
bgmLoop();

// Pause all BGM on tab blur
window.addEventListener('blur', () => {
    bgmList.forEach(audio => audio.pause());
});

// Resume all BGM on tab focus
window.addEventListener('focus', () => {
    if (!bgmEnabled) return;
    bgmList.forEach(audio => {
        audio.play().catch(() => { });
    });
});

/* --------------------------
    Search
    -------------------------- */

const searchBox = document.getElementById('searchBox');
const searchText = document.getElementById('searchText');
const cancelSearch = document.getElementById('cancelSearch');

function stripHTML(html) {
    return html.replace(/<[^>]+>/g, '');
}

let openFromSearch = false;
function search() {
    // contentView.scrollTop = 0;
    const query = searchText.value;
    const q = query.trim().toLowerCase();
    if (!q) return;

    const results = {};
    // special cases for easter eggs
    const specialCase = Object.keys(specialSearch);

    // find cards
    menuItems.forEach(menu => {
        if (menu.invisible) return false;
        let matches;
        if (q === 'all') {
            matches = menu.labels;
        } else if (q === 'characters' || q === 'character' || q === 'oc') {
            matches = menu.labels.filter(label => isCharacter(label));
        } else {
            matches = menu.labels.filter(label => {
                return (label.title && stripHTML(label.title).toLowerCase().includes(q)) ||
                    (label.excerpt && stripHTML(label.excerpt).toLowerCase().includes(q)) ||
                    (label.cSpecies && stripHTML(label.cSpecies).toLowerCase().includes(q)) ||
                    (label.cPronouns && stripHTML(label.cPronouns).toLowerCase().includes(q)) ||
                    (label.cGender && stripHTML(label.cGender).toLowerCase().includes(q)) ||
                    (label.cSexuality && stripHTML(label.cSexuality).toLowerCase().includes(q)) ||
                    (label.cNicknames && stripHTML(label.cNicknames).toLowerCase().includes(q)) ||
                    (label.cAddons && stripHTML(label.cAddons).toLowerCase().includes(q));
            });
        }

        if (matches.length > 0) {
            results[menu.menuId] = { menu, labels: matches };
        }
    });

    // find menus
    let menuMatches;
    if (q === 'all') {
        menuMatches = menuItems.filter(menu => (!menu.invisible));
    } else if (q === 'characters' || q === 'character' || q === 'oc') {
        menuMatches = [];
    } else {
        menuMatches = menuItems.filter(menu => {
            if (menu.invisible) return false;
            return (menu.name && menu.name.toLowerCase().includes(q)) || (menu.subtitle && menu.subtitle.toLowerCase().includes(q));
        });
    }

    const labelGroup = [];
    let menusFound = Object.values(results);

    let specialQuery = false;
    if (specialCase.includes(q)) {
        menusFound = [];
        menuMatches = [];
        specialQuery = true;
    }

    if (menusFound.length === 0 && menuMatches.length === 0) {
        if (!specialQuery) {
            labelGroup.push({
                title: 'Nothing found',
                excerpt: ''
            });

        } else {
            const data = specialSearch[q];
            if (data && !data.special) {
                labelGroup.push({
                    title: data.title,
                    excerpt: data.excerpt || ''
                });
            }
        }

    } else {
        // add cards from found menus
        menusFound.forEach(({ menu, labels }) => {
            labelGroup.push({
                title: `<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>Results from <a data-open-card="${menu.menuId}">${menu.name}</a>`
            });
            labels.forEach(label => labelGroup.push({ ...label, fromMenu: menu.menuId }));
        });

        // add matching menus as linked cards
        if (menuMatches.length > 0) {
            labelGroup.push({ title: '<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>Matching menus found' });
            menuMatches.forEach(menu => {
                labelGroup.push({
                    cardId: `menu-${menu.menuId}`,
                    title: menu.name,
                    excerpt: menu.subtitle || '',
                    image: menu.image || '',
                    linkId: menu.menuId,
                });
            });
        }
    }

    let searchId = 'search';
    let searchName = `Search results for "${query}"`;
    // only one card?
    if (labelGroup.length == 2) {
        labelGroup.shift();
        const single = labelGroup[0]
        if (!(single.linkId)) {
            menuParent = menuItems.find(m => m.menuId == single.fromMenu);
            searchId = menuParent.menuId;
            searchName = menuParent.name;
            openSingle = true;
        } else {
            openMenuById(single.linkId);
            openFromSearch = true;
            searchText.value = '';
            contentView.style.overflow = '';
            return;
        }
    }

    const searchMenu = {
        menuId: searchId,
        name: searchName,
        subtitle: `Found ${labelGroup.filter(label => label.cardId || label.linkId).length} result(s)`,
        labels: labelGroup,
    };

    openMenu(searchMenu);
    openFromSearch = true;
    searchText.value = '';
    contentView.style.overflow = '';
}

menuLogo?.addEventListener('click', () => {
    const [menuQ, cardQ] = menuLogoRedirect.split(':');
    contentView.scrollTop = 0;
    if (cardQ) openCardById(menuQ, cardQ, true); else openMenuById(menuQ, true);
});

if (SIMPLE_MODE) menuLogo.style.width = `calc(${getComputedStyle(menuLogo).getPropertyValue("width")} * ${SIMPLE_MODE_MENU_LOGO_SCALE})`;

const searchBtn = document.getElementById('searchBtn')
searchBtn?.addEventListener('click', () => {
    openSearchBox();
});

function openSearchBox() {
    playSound('sfxClick', SFX_CLICK_VOL);
    searchBox.showModal();
    vizRemove(searchBtn);
}

searchBox.addEventListener('close', () => {
    if (searchText.value.trim() !== '') {
        search();
    } else {
        playSound('sfxClick', SFX_CLICK_VOL);
    };
});

searchText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBox.close();
    }
});

cancelSearch.addEventListener('click', () => {
    searchText.value = '';
    searchBox.close();
    vizAdd(searchBtn);
});

// button to play bgm
const playBgmBtn = document.getElementById('playBgmBtn');
playBgmBtn.addEventListener("click", () => {
    if (!bgmEnabled) {
        startAllBgm();
    }
    playSound("sfxClick", SFX_CLICK_VOL);
});


// button to hide ui elements
const hideBtn = document.getElementById('hideBtn')

let uiHidden = false;
let hiddenElements = [];

// Function to hide all UI elements
function hideUIs() {
    const panels = [
        document.getElementById('uiPanelTop'),
        document.getElementById('uiPanelBottom')
    ].filter(panel => panel !== null);

    panels.forEach(panel => {
        const children = Array.from(panel.children);
        children.forEach(child => {
            if (child !== hideBtn && !child.classList.contains('always-visible')) {
                hiddenElements.push({
                    element: child,
                    originalDisplay: child.style.display
                });
                child.style.display = 'none';
            }
        });
    });

    hideBtn.classList.add('hidden-mode');
    hideBtn.querySelector('span').classList.add('hidden');
    uiHidden = true;
}

// Function to show all UI elements
function showUIs() {
    hiddenElements.forEach(item => {
        item.element.style.display = item.originalDisplay || '';
    });

    hiddenElements = [];
    hideBtn.classList.remove('hidden-mode');
    hideBtn.querySelector('span').classList.remove('hidden');
    uiHidden = false;
}

function toggleUIs() {
    if (!uiHidden) {
        hideUIs();
    } else {
        showUIs();
    }
    playSound('sfxClick', SFX_CLICK_VOL);
}

// Toggle function for the hide button
hideBtn.addEventListener('click', toggleUIs);

// Function to check if UI is hidden and show it when needed
function vizUI() {
    if (uiHidden) {
        showUIs();
    }
}




/* --------------------------
   Mode switcher
   -------------------------- */

// Read SIMPLE_MODE from localStorage
function getSimpleMode() {
    // Try localStorage first (modern approach)
    const saved = localStorage.getItem('simpleMode');
    if (saved !== null) {
        return saved === 'true' || saved === '1' ? 1 : 0;
    }

    // Fallback to cookie for older browsers
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});

    if (cookies.simpleMode !== undefined) {
        return cookies.simpleMode === 'true' || cookies.simpleMode === '1' ? 1 : 0;
    }

    return 0;
}

// Save SIMPLE_MODE preference
function setSimpleMode(value) {
    const boolValue = value ? 1 : 0;
    SIMPLE_MODE = boolValue;
    localStorage.setItem('simpleMode', boolValue.toString());
    document.cookie = `simpleMode=${boolValue}; path=/; max-age=${365 * 24 * 60 * 60}`; // 1 year expiry
    return boolValue;
}


const settingsBtn = document.getElementById('settingsBtn');

function toggleViewMode() {
    const newMode = !SIMPLE_MODE;
    if (confirm(`Switch to ${newMode ? 'Simple Mode' : 'Orbit Mode'}? Page will be reloaded.`)) {
        setSimpleMode(newMode);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
}

// Initialize mode toggle
if (settingsBtn) {
    settingsBtn?.addEventListener('click', (e) => {
        openMenuById('settings', true);
    });
}


if (SIMPLE_MODE) $('.splash-text-info').dataset.infodesc = "(click to open main menu)";




/* --------------------------
    Open menu by q / internal links / URL handler
    -------------------------- */

// Open menu by Q
function openMenuById(q, skipAnim = false) {
    if (!q) return;
    const menu = menuItems.find(m => m.menuId === q);
    if (!menu) return;
    const btn = orbitButtons.find(b => b.dataset.menuQ === q);
    contentView.style.overflow = '';
    openMenu(menu, btn || null, { skipAnimation: skipAnim || !btn });
}

// URL params on load - open menu/card if present
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const menuCode = params.get('m');
    const cardKey = params.get('i');
    if (!menuCode) return;
    if (menuCode === 'search') return;

    const targetMenu = menuItems.find(m => m.menuId && m.menuId.toLowerCase() === menuCode.toLowerCase());
    if (!targetMenu) {
        console.warn('Menu not found for', menuCode);
        return;
    }

    if (typeof openMenuById === 'function') openMenuById(menuCode, true);
    else {
        showContentFor(targetMenu);
        history.pushState({}, '', `?m=${targetMenu.menuId}`);
    }

    // waitForCard helper
    async function waitForCard(cardId, timeout = 2000, interval = 50) {
        const start = performance.now();
        while (performance.now() - start < timeout) {
            const el = $(`[data-card-id="${cardId}"]`);
            if (el) return el;
            await new Promise(r => setTimeout(r, interval));
        }
        return null;
    }

    if (cardKey) {
        const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
        if (!targetLabel) {
            console.warn('Card not found in', menuCode, cardKey);
            return;
        }
        const cardEl = await waitForCard(cardKey, 2000, 40);
        if (cardEl) {
            if (!(cardEl.dataset.link || cardEl.dataset.noclick)) focusCard(cardEl, targetLabel, targetMenu);
        } else {
            console.warn('Timed out waiting for card', cardKey);
        }
    }
});

// Internal link handler: <a data-open-card="q:id">
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-open-card]');
    if (!link) return;
    e.preventDefault();

    vizRemove(rerollBtn);

    const ref = link.dataset.openCard.trim();
    const [menuCode, cardKey] = ref.split(':');
    openCardById(menuCode, cardKey);
    openSingle = false;
});

// Open card by Q
function openCardById(menuCode, cardKey, single = false) {
    if (single) openSingle = true;
    const targetMenu = menuItems.find(m => m.menuId && m.menuId.toLowerCase() === menuCode.toLowerCase());
    if (!targetMenu) {
        console.warn('Menu not found for', menuCode);
        return;
    }

    if (!cardKey) {
        openMenuById(menuCode, true);
        $('.content-header')?.classList.remove('hidden');
        return;
    }

    const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
    if (!targetLabel) {
        console.warn('Card not found in', menuCode, cardKey);
        openMenuById(menuCode, true);
        return;
    }

    const isCurrentlyOpen = contentTitle.textContent &&
        contentTitle.textContent.toLowerCase() === targetMenu.name.toLowerCase();

    if (!isCurrentlyOpen) openMenuById(menuCode, true);

    const targetCard = $(`[data-card-id="${cardKey}"]`);
    if (targetCard) focusCard(targetCard, targetLabel, targetMenu);
}



/* --------------------------
    Back navigation
    -------------------------- */

function goBack() {
    const params = new URLSearchParams(location.search);
    const menuCode = params.get('m');
    const itemId = params.get('i');

    // if viewing a card, go back to menu grid
    if (itemId && !openSingle) {
        history.pushState({}, '', `?m=${menuCode}`);
        cardsContainer.querySelectorAll('.cards-grid, .card-separator, .section-header').forEach(el => el.classList.remove('hidden'));
        toggleView({ focused: true, show: false });
        $('.content-header')?.classList.remove('hidden');
        detailArea.innerHTML = `<h3>Detail</h3><p>Select a card to see details here.</p>`;
        contentView.style.overflow = '';

        // Update back button text to show parent menu name if exists
        const currentMenu = menuItems.find(m => m.menuId === menuCode);
        if (currentMenu && currentMenu.parent && !openFromSearch) {
            const parentMenu = menuItems.find(m => m.menuId === currentMenu.parent);
            backBtn.querySelector('span').textContent = parentMenu ? parentMenu.name : SIMPLE_MODE ? 'Close' : 'Menu';
        } else {
            backBtn.querySelector('span').textContent = SIMPLE_MODE ? 'Close' : 'Menu';
        }
        playSound('sfxClick', SFX_CLICK_VOL);
        return;
    }

    // if in a menu
    if (menuCode || openSingle) {
        const currentMenu = menuItems.find(m => m.menuId === menuCode);

        // If current menu has a parent, navigate to parent instead of closing
        if (currentMenu && currentMenu.parent && !openSingle && !openFromSearch) {
            openMenuById(currentMenu.parent, true);
            return;
        }

        if (openFromSearch) {
            openFromSearch = false;
            history.pushState({}, '', location.pathname);
        }

        // otherwise, go back to main menu
        history.pushState({}, '', location.pathname);
        $('.content-header')?.classList.remove('hidden');
        toggleView({ content: true, show: false });
        shownMenu = null;
        contentView.style.overflow = '';
        if (openSingle) {
            openSingle = false;
            vizRemove(rerollBtn);
        }
        playSound('sfxClick', SFX_CLICK_VOL);
        return;
    }
}

backBtn.addEventListener('click', goBack);

// keyboard control
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') goBack(); });
document.addEventListener('keydown', (e) => {
    if (isInputFocused()) return;
    if (e.key === 'c') { e.preventDefault(); snapCameraToCenter(); }
    if (e.key === 'h') { e.preventDefault(); toggleUIs(); }
    if (e.key === ' ') { e.preventDefault(); openSearchBox(); }
});


/* --------------------------
    Image preview zoom helpers
    -------------------------- */

function disableZoom() {
    const vp = $('meta[name=viewport]');
    if (!vp) return;
    vp.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
}

function enableZoom() {
    const vp = $('meta[name=viewport]');
    if (!vp) return;
    vp.setAttribute('content', 'width=device-width, initial-scale=1');
}



/* --------------------------
    Toggle view helper
    -------------------------- */

function toggleView({ content = false, focused = false, show = true } = {}) {
    if (content) {
        if (show) {
            vizUI();

            vizAdd(contentView);
            vizAdd(backBtn);

            vizRemove(searchBtn);
            vizRemove(hideBtn);
            vizRemove(centerBtn);
            vizRemove(settingsBtn);
            if (!bgmEnabled) vizRemove(playBgmBtn);
            menuStage.classList.add('blur');
            starfield?.classList.add('blur');

            if (!focusedLayout.classList.contains('visible')) {
                vizAdd(sortBtn);
            }
            updateSortButtonText();
        } else {
            vizRemove(contentView);
            vizRemove(backBtn);

            vizAdd(searchBtn);
            vizAdd(hideBtn);
            vizAdd(settingsBtn);
            if (!bgmEnabled) vizAdd(playBgmBtn);
            updateCenterButtonVisibility();
            menuStage.classList.remove('blur');
            starfield?.classList.remove('blur');

            vizRemove(sortBtn);
            sortMode = 0;
        }
    }

    if (focused) {
        if (show) {
            vizAdd(focusedLayout);
            focusedLayout.style.display = '';

            vizRemove(sortBtn);
        } else {
            vizRemove(focusedLayout);
            focusedLayout.style.display = 'none';

            if (contentView.classList.contains('visible')) {
                vizAdd(sortBtn);
            }
        }
    }
}

function vizAdd(e) {
    e.classList.add('visible');
    e.setAttribute('aria-hidden', 'false');
}

function vizRemove(e) {
    e.classList.remove('visible');
    e.setAttribute('aria-hidden', 'true');
}



/* --------------------------
    Service worker registration
    -------------------------- */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.error('SW registration failed:', err));
}



/* --------------------------
    History popstate handling
    -------------------------- */

window.addEventListener('popstate', (event) => {
    const params = new URLSearchParams(location.search);
    const menuCode = params.get('m');
    const cardKey = params.get('i');

    if (!menuCode) {
        goBack();
        toggleView({ content: true, show: false });
        return;
    }

    openMenuById(menuCode);
    const targetMenu = menuItems.find(m => m.menuId.toLowerCase() === menuCode.toLowerCase());
    if (!targetMenu) return;
    const button = Array.from($$('.menu-button')).find(b => b.getAttribute('aria-label').toLowerCase() === targetMenu.name.toLowerCase());
    if (!button) return;
    openMenu(targetMenu, button, { skipAnimation: true });

    if (cardKey) {
        const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
        if (targetLabel) {
            const cardEl = [...$$('.card')].find(c => c.dataset.cardId === cardKey);
            if (cardEl) focusCard(cardEl, targetLabel, targetMenu);
        }
    }
});



/* --------------------------
    Initialization
    -------------------------- */
createStarfield();
initMenu();

// Reset URL if coming from search (original behavior)
const params = new URLSearchParams(location.search);
if (params.get('m') === 'search') history.pushState({}, '', location.pathname);

// Expose small console helpers (preserve original)
window.prototypeMenu = { menuItems, openMenu, showContentFor, goBack };

// asset loading
window.addEventListener('load', (e) => {
    const assetLoad = document.getElementById("assetLoad");
    assetLoad.classList.remove('visible');
    menuStage.querySelectorAll('.ringHidden').forEach(child => child.classList.remove('ringHidden'));
});