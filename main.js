// main.js - Refactored

/* --------------------------
   Helpers / Config
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

// Lazy loader base path
const LAZY_BASE = 'https://cdn.jsdelivr.net/gh/blurplebun/blurplebun.github.io/';
const LOCAL_MODE = 0;

const SFX_MASTER_VOL = 1;
const SFX_CLICK_VOL = 0.4;


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

// Begin drag (mouse or touch)
function beginDrag(clientX, clientY) {
    isDragging = true;
    startX = clientX - currentX;
    startY = clientY - currentY;
    menuStage.style.cursor = 'grab';
    menuStage.style.transition = 'none';
}

// Move during drag (mouse or touch)
function dragTo(clientX, clientY) {
    if (!isDragging) return;
    currentX = clientX - startX;
    currentY = clientY - startY;
    setMenuStageTransform(currentX, currentY, { transition: 'transform 0.2s cubic-bezier(.2, .9, .2, 1)' });
}

// End drag
function endDrag() {
    isDragging = false;
    menuStage.style.cursor = 'default';
}

const dragLayer = document.getElementById('dragLayer');
// Mouse events
dragLayer.addEventListener('mousedown', (e) => {
    beginDrag(e.clientX, e.clientY);
});
window.addEventListener('mousemove', (e) => {
    dragTo(e.clientX, e.clientY);
});
window.addEventListener('mouseup', endDrag);

// Touch events (single-finger only)
dragLayer.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    beginDrag(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });
window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    dragTo(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });
window.addEventListener('touchend', endDrag);

// Two-finger trackpad-like gesture (wheel) - keep original thresholds
dragLayer.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (Math.abs(e.deltaX) < 100 && Math.abs(e.deltaY) < 100) {
        currentX -= e.deltaX * 1.5;
        currentY -= e.deltaY * 1.5;
        setMenuStageTransform(currentX, currentY);
    }
}, { passive: false });

// Snap camera back to center (used by center button & resize)
function snapCameraToCenter() {
    currentX = 0; currentY = 0;
    setMenuStageTransform(0, 0, { transition: 'transform 0.5s cubic-bezier(.2, .9, .2, 1)', layerTransition: 'transform 0.8s ease-out' });
    // Clear layer transitions after animation finishes to avoid stuttering later
    setTimeout(() => {
        starfield?.querySelectorAll('.star-layer').forEach(layer => layer.style.transition = '');
    }, 900);
}

// center button visibility loop
function showCenterBtnLoop() {
    centerBtn.classList.remove('visible');
    if (!(currentX === 0 && currentY === 0) && !contentView.classList.contains('visible')) {
        centerBtn.classList.add('visible');
        const splashInfo = $('.splash-text-info');
        if (splashInfo) splashInfo.style.opacity = 0;
    }
    requestAnimationFrame(showCenterBtnLoop);
}
showCenterBtnLoop();

window.addEventListener('resize', snapCameraToCenter);
centerBtn.addEventListener('click', snapCameraToCenter);
document.addEventListener('keydown', (e) => {
    if (e.key === 'c' && !isInputFocused()) {
        snapCameraToCenter();
    }
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
function createOrbitVisuals() {
    // remove existing visuals
    $$('.orbit-visual').forEach(el => el.remove());

    const baseRadius = getCSSVar('--menu-radius', 'int') || 180;
    // collect unique orbit layers - menuItems assumed global from original file
    const uniqueOrbits = [...new Set(menuItems.filter(m => !m.hidden).map(m => m.orbit || 1))];

    uniqueOrbits.forEach(orbit => {
        const orbitRing = document.createElement('div');
        orbitRing.className = 'orbit-visual pulse';

        const diameter = (baseRadius * orbit * 1.2 + 60) * 2;
        orbitRing.style.width = `${diameter}px`;
        orbitRing.style.height = `${diameter}px`;
        orbitRing.style.left = '50%';
        orbitRing.style.top = '50%';
        orbitRing.style.transform = 'translate(-50%, -50%)';
        orbitRing.style.opacity = 0.45 / orbit;
        orbitRing.style.zIndex = '-1';
        orbitRing.style.pointerEvents = 'auto';
        orbitRing.style.position = 'absolute';

        menuStage.insertBefore(orbitRing, menuStage.firstChild);
    });
}

// orbit buttons array
const orbitButtons = [];
function createMenuButtons() {
    // Clear existing rings and orbit buttons
    $$('.ring').forEach(r => r.remove());
    orbitButtons.length = 0;

    const grouped = {};
    menuItems.forEach(m => {
        if (m.hidden) return;
        const orbit = m.orbit || 1;
        if (!grouped[orbit]) grouped[orbit] = [];
        grouped[orbit].push(m);
    });

    Object.keys(grouped).forEach(layerKey => {
        const items = grouped[layerKey];
        const orbit = parseInt(layerKey, 10);

        const ringLayer = document.createElement('div');
        ringLayer.className = 'ring';
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
            btn.dataset.menuQ = m.q;
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
            const r = baseRadius * orbit * 1.2 + 60;
            btn.dataset.radius = r;

            const baseDuration = orbitDuration;
            const periodSec = Math.max(0.01, baseDuration * orbit); // seconds per revolution
            const omega = (2 * Math.PI) / periodSec * direction; // radians/sec
            btn.dataset.omega = omega;
            btn.dataset.scale = m.scale || 1;

            const x0 = Math.cos(angleRad) * r;
            const y0 = Math.sin(angleRad) * r;
            btn.style.left = '50%';
            btn.style.top = '50%';
            btn.style.transform = `translate3d(${x0}px, ${y0}px, 0) scale(${m.scale || 1})`;

            btn.tabIndex = -1;
            btn.setAttribute('aria-hidden', 'true');

            btn.addEventListener('click', () => openMenu(m, btn));
            ringLayer.appendChild(btn);
            orbitButtons.push(btn);
        });

        menuStage.appendChild(ringLayer);
    });

    startOrbitAnimation();
}

// Orbit animation loop
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

function orbitFrame(ts) {
    const elapsed = (ts - orbitStartTs) / 1000;
    for (let i = 0; i < orbitButtons.length; i++) {
        const el = orbitButtons[i];
        const a0 = parseFloat(el.dataset.angle0) || 0;
        const w = parseFloat(el.dataset.omega) || 0;
        const r = parseFloat(el.dataset.radius) || 0;
        const s = parseFloat(el.dataset.scale) || 1;
        const angle = a0 + w * elapsed;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;

        // hover/zoom effect only when content view is NOT visible
        let zoom = 1;
        if (!contentView.classList.contains('visible')) {
            const rect = el.getBoundingClientRect();
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;
            const dx = cursorX - btnX;
            const dy = cursorY - btnY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 250;
            zoom = 1 + Math.max(0, (1 - dist / maxDist)) * 0.375;
        }

        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s * zoom})`;
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
            const orbit = parseInt(el.dataset.orbit) || 1;
            const r = baseRadius * orbit * 1.2 + 60;
            el.dataset.radius = r;
        });
        createOrbitVisuals();
    }, 300);
});



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
        if (menu.q === 'random') return;
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
    openMenuByQ(pick.menu.q, true);

    const cardEl = $(`[data-card-id="${pick.label.cardId}"]`);
    if (cardEl) focusCard(cardEl, pick.label, pick.menu);
});



/* --------------------------
    Open Menu / Show Content
    -------------------------- */

let openFromRandom = false;
function openMenu(menu, buttonEl, { skipAnimation = false } = {}) {
    if (menu.hidden || !buttonEl || skipAnimation) {
        showContentFor(menu);
        history.pushState({}, '', `?m=${menu.q}`);
        return;
    }

    // special-case "random" menu (preserve previous logic)
    if (menu.q === 'random') {
        const list = getAllCharacters();
        if (list.length === 0) {
            alert('No character cards found.');
            return;
        }
        const pick = list[Math.floor(Math.random() * list.length)];
        const targetMenu = pick.menu;
        const targetLabel = pick.label;
        openMenuByQ(targetMenu.q, true);
        const cardEl = $(`[data-card-id="${targetLabel.cardId}"]`);
        if (cardEl) {
            focusCard(cardEl, targetLabel, targetMenu);
            rerollBtn.classList.add('visible');
            rerollBtn.setAttribute('aria-hidden', 'false');
        }
        openFromRandom = true;
        return;
    }

    // compute center for expander origin
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
    expander.style.opacity = '1';

    requestAnimationFrame(() => {
        const maxDim = Math.max(window.innerWidth, window.innerHeight) * 2.2;
        const scale = maxDim / rect.width;
        expander.style.transform = `translate(-50%,-50%) scale(${scale})`;
        expander.style.transition = `transform var(--overlay-transition) cubic-bezier(.2,.9,.2,1),opacity var(--overlay-transition)`;
        buttonEl.style.transform += ' scale(1.02)';

        setTimeout(() => {
            expander.style.opacity = '0';
            expander.style.left = '0';
            expander.style.top = '0';
            expander.style.width = '1px';
            expander.style.height = '1px';
            expander.style.transform = 'translate(-50%,-50%) scale(1)';
            showContentFor(menu);
            history.pushState({}, '', `?m=${menu.q}`);
        }, 700);
    });
}


// initialize content
function initContent() {
    menuItems.forEach(m => {
        m.labels?.forEach(lbl => {
            if (lbl.linkId) {
                const linkedMenu = menuItems.find(lm => lm.q === lbl.linkId);
                lbl.cardId = lbl.linkId;
                lbl.title = linkedMenu.name;
            }
        })
    })
}
initContent();

// show content
let shownMenu = null;
function showContentFor(menu, sort = null) {
    shownMenu = menu;
    contentTitle.textContent = menu.name;
    contentSubtitle.textContent = menu.subtitle;
    toggleView({ focused: true, show: false });
    toggleView({ content: true, show: true });
    const parentMenu = menuItems.find(m => m.q === menu.parent);
    if (parentMenu) {
        backBtn.querySelector('span').textContent = parentMenu.name || 'Parent Menu';
    } else backBtn.querySelector('span').textContent = 'Menu';

    // Add copy link icon to menu title (except for search)
    if (menu.q !== 'search') {
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
            const link = `${location.origin}${location.pathname}?m=${menu.q}`;
            navigator.clipboard.writeText(link);
            linkIcon.classList.add('copied');
            linkIcon.title = 'Copied!';
            setTimeout(() => {
                linkIcon.classList.remove('copied');
                linkIcon.title = 'Copy shareable link';
            }, 1500);
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
        }
    }

    initLazyLoad();
    contentView.scrollTop = 0;
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
                h1.textContent = lbl.title;
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
                cardsToRender = [...group.items].sort((a, b) => {
                    if (!a.title || !b.title) return 0;

                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();

                    if (sort === 'asc') {
                        return titleA.localeCompare(titleB);
                    } else {
                        return titleB.localeCompare(titleA);
                    }
                });
            }
            
            // Render the sorted cards
            cardsToRender.forEach((lbl) => {
                // Create card element
                const c = document.createElement('div');
                c.className = 'card';
                c.dataset.cardId = lbl.cardId;

                // Linked menu card
                if (lbl.linkId) {
                    const linkedMenu = menuItems.find(m => m.q === lbl.linkId);
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
                            openMenuByQ(lbl.linkId, true);
                            playSfx('sfxClick', SFX_CLICK_VOL);
                        });
                    }
                    section.appendChild(c);
                    i++;
                    return;
                }

                // Standard card markup (image vs no-image)
                if (lbl.image) {
                    c.innerHTML = `
                        <div class="thumb lazy-bg" data-bg="${lbl.image}"></div>
                        <div class="card-text">
                            <strong>${lbl.title}</strong>
                            <div class="excerpt">${lbl.excerpt || ''}</div>
                        </div>
                    `;
                } else {
                    c.innerHTML = `
                        <div class="card-text full">
                            <strong>${lbl.title}</strong>
                            <div class="excerpt">${lbl.excerpt || ''}</div>
                        </div>
                    `;
                }

                // Special cards
                if (lbl.url) c.dataset.link = "true";
                if (lbl.unclickable) c.dataset.noclick = "true";

                // Character cards
                if (isCharacter(lbl)) c.dataset.character = 'true';

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
                if (!lbl.unclickable) {
                    c.addEventListener('click', () => {
                        if (lbl.url) return window.open(lbl.url, '_blank');

                        const realMenu = (menu.q === 'search' && lbl.fromMenu)
                            ? menuItems.find(m => m.q === lbl.fromMenu)
                            : menu;

                        focusCard(c, lbl, realMenu);
                        playSfx('sfxClick', SFX_CLICK_VOL);
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
    if (!sortBtn) return;
    
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


// for genotheta converter: convert base10 to base32
function decimalToBase32(num) {
    // Base-32 digits using the box drawing characters from U+2500 to U+2515
    const base32Digits = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',  // 0-9
        '─', '━', '│', '┃', '┄', '┅', '┆', '┇', '┈', '┉', // 10-19
        '┊', '┋', '┌', '┍', '┎', '┏', '┐', '┑', '┒', '┓', // 20-29
        '└', '┕'                                           // 30-31
    ];

    if (num === 0) return '0';

    let result = '';
    let number = Math.abs(num);

    while (number > 0) {
        const remainder = number % 32;
        result = base32Digits[remainder] + result;
        number = Math.floor(number / 32);
    }

    return num < 0 ? '-' + result : result;
}


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
    focusedCardArea.appendChild(clone);
    sortBtn?.classList.remove('visible');
    sortBtn?.setAttribute('aria-hidden', 'true');

    // Add lazy classes to any <img> in label.detail and convert src->data-src
    let html = label.detail
        ? label.detail
            .replace(/<img\b(?![^>]*\bclass=)/g, '<img class="lazy"') // add lazy class if missing
            .replace(/(<img[^>]*?)\s+src=/g, '$1 data-src=') // replace src with data-src for lazy loading
        : '';

    if (menu) {
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
        const realMenuQ = label.fromMenu || menu.q;
        const shareURL = `${location.origin}${location.pathname}?m=${realMenuQ}&i=${label.cardId}`;
        detailArea.innerHTML = `
            <h1>
                <div style="font-size: 20px;"><small><a data-open-card="${menu.q}">${menu.name}</a> /</small></div>
                ${label.title}
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
        });
        history.pushState({}, '', `?m=${realMenuQ}&i=${label.cardId}`);
        initLazyLoad();

    } else {
        detailArea.innerHTML = `<h1>${label.title} test</h1><hr>${html}`;
        initLazyLoad();
    }

    // set up image handlers inside detailArea
    imgConHandler(detailArea);

    // handle script converters if applicable
    converterHandler(label);

    // hide cards grid and show focused layout
    cardsContainer.querySelectorAll('.cards-grid, .card-separator, .section-header').forEach(el => el.classList.add('hidden'));
    focusedLayout.style.display = 'flex';
    $('.content-header')?.classList.add('hidden');
    contentView.style.overflow = 'hidden';
    contentView.insertBefore(cardsContainer, focusedLayout);

    focusedLayout.scrollIntoView({ behavior: 'auto', block: 'center' });
    backBtn.querySelector('span').textContent = 'Card Selector';
    initLazyLoad();
    detailArea.scrollTop = 0;
}



/* --------------------------
    Converters
    -------------------------- */

function converterHandler(label) {
    // Genotheta
    if (label.cardId === 'genotheta') {
        const genothetaInput = document.getElementById('genothetaInput');
        const genothetaOutput = document.getElementById('genothetaOutput');
        const genothetaOutputEx = document.getElementById('genothetaOutputEx');
        const genothetaOutputRaw = document.getElementById('genothetaOutputRaw');

        const genothetaInputRev = document.getElementById('genothetaInputRev');
        const genothetaOutputRev = document.getElementById('genothetaOutputRev');

        copyGenothetaBtn.addEventListener('click', async () => { copyToClipboard(copyGenothetaBtn, genothetaOutputRaw); });
        copyGenothetaRevBtn.addEventListener('click', async () => { copyToClipboard(copyGenothetaRevBtn, genothetaOutputRev); });

        // latin to genotheta
        genothetaInput.addEventListener('input', () => {
            let input = genothetaInput.value;

            // Convert numbers to base-32
            inputBase32 = input.replace(/\d+/g, match => {
                const num = parseInt(match, 10);
                return decimalToBase32(num);
            });

            const output = input;
            const outputEx = inputBase32
                .replace(/th/gi, "þ")
                .replace(/gh/gi, "ɣ")
                .replace(/sh/gi, "Ʃ")
                .replace(/ng/gi, "ŋ")
                .replace(/ny/gi, "ñ")
                .replace(/ts/gi, "ƺ")
                .replace(/wh/gi, "ʍ")
                .replace(/ch/gi, "ʧ")
                .replace(/ph/gi, "φ")
                .replace(/ck/gi, "ĸ")
                .replace(/qu/gi, "ȹ")
                .replace(/wr/gi, "ɹ")
                .replace(/kn/gi, "ƙ")
                .replace(/ps/gi, "ψ");
            genothetaOutput.value = output;
            genothetaOutputEx.value = outputEx;
            genothetaOutputRaw.value = outputEx;
        });

        // genotheta to latin
        genothetaInputRev.addEventListener('input', () => {
            let input = genothetaInputRev.value;

            const output = input
                .replaceAll("þ", "TH")
                .replaceAll("ɣ", "GH")
                .replaceAll("Ʃ", "SH")
                .replaceAll("ŋ", "NG")
                .replaceAll("ñ", "NY")
                .replaceAll("ƺ", "TS")
                .replaceAll("ʍ", "WH")
                .replaceAll("ʧ", "CH")
                .replaceAll("φ", "PH")
                .replaceAll("ĸ", "CK")
                .replaceAll("ȹ", "QU")
                .replaceAll("ɹ", "WR")
                .replaceAll("ƙ", "KN")
                .replaceAll("ψ", "PS");
            genothetaOutputRev.value = output;
        });

        // genotheta keyboard
        const genothetaKeys = $$('.genothetaKeys');
        createKeyboard(genothetaKeys, genothetaInputRev);
    }

    // Starstroke
    if (label.cardId === 'starstroke') {
        const starstrokeInput = document.getElementById('starstrokeInput');
        const starstrokeOutput = document.getElementById('starstrokeOutput');

        const starstrokeInputRev = document.getElementById('starstrokeInputRev');
        const starstrokeOutputRev = document.getElementById('starstrokeOutputRev');

        copyStarstrokeRevBtn.addEventListener('click', async () => { copyToClipboard(copyStarstrokeRevBtn, starstrokeOutputRev); });

        // latin to starstroke
        starstrokeInput.addEventListener('input', () => {
            const input = starstrokeInput.value;
            const output = input;
            starstrokeOutput.value = output;
        });

        // starstroke to latin
        starstrokeInputRev.addEventListener('input', () => {
            const input = starstrokeInputRev.value;
            const output = input;
            starstrokeOutputRev.value = output;
        });

        // starstroke keyboard
        const starstrokeKeys = $$('.starstrokeKeys');
        createKeyboard(starstrokeKeys, starstrokeInputRev);
    }
}

// Create keyboard
function createKeyboard(keys, inputElement) {
    const k = keys;
    const i = inputElement;
    k.forEach(key => {
        key.addEventListener('click', () => {
            const char = key.dataset.key;
            if (char === 'DEL') {
                i.value = i.value.slice(0, -1);
                i.dispatchEvent(new Event('input'));
                return;
            }
            if (char === 'CLR') {
                i.value = '';
                i.dispatchEvent(new Event('input'));
                return;
            }
            i.value += char;
            i.dispatchEvent(new Event('input'));
        });
    });
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
    overlay.classList.add('visible');
    disableZoom();

    overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
        enableZoom();
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
        if (type === 'info') {
            el.textContent = '(drag to move, click logo to search)';
        }
        if (type === 'splash') {
            const text = splashLines[Math.floor(Math.random() * splashLines.length)];
            el.innerHTML = text;
            const baseSize = 20;
            const minSize = 12;
            const maxLen = 45;
            let size = baseSize - (text.length / maxLen) * (baseSize - minSize);
            size = clamp(size, minSize, baseSize);
            el.style.fontSize = `${size}px`;
        }
    });
});



/* --------------------------
    Starfield generation
    -------------------------- */
function createStarfield(layerCount = 3, starsPerLayer = 40) {
    if (!starfield) return;
    for (let l = 0; l < layerCount; l++) {
        const layer = document.createElement('div');
        layer.classList.add('star-layer');
        layer.dataset.depth = 0.5 + Math.random() * 1;
        for (let i = 0; i < starsPerLayer; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 2 + 1;
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



/* --------------------------
    Audios
    --------------------------*/

// ui button clicks
document.addEventListener('DOMContentLoaded', (e) => {
    const uiBtns = $$('.ui-btn').concat($$('.card'));
    uiBtns.forEach(b => {
        b.addEventListener('click', (e) => {
            playSfx('sfxClick', SFX_CLICK_VOL);
        })
    })
});

// sfx: click
function playSfx(soundId, volume = 1) {
    sfx = document.getElementById(soundId);
    if (!sfx) return;
    sfx.volume = volume * SFX_MASTER_VOL;
    sfx.play();
}



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
    contentView.scrollTop = 0;
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
                    (label.detail && stripHTML(label.detail).toLowerCase().includes(q)) ||
                    (label.cSpecies && stripHTML(label.cSpecies).toLowerCase().includes(q)) ||
                    (label.cPronouns && stripHTML(label.cPronouns).toLowerCase().includes(q)) ||
                    (label.cGender && stripHTML(label.cGender).toLowerCase().includes(q)) ||
                    (label.cSexuality && stripHTML(label.cSexuality).toLowerCase().includes(q)) ||
                    (label.cNicknames && stripHTML(label.cNicknames).toLowerCase().includes(q)) ||
                    (label.cAddons && stripHTML(label.cAddons).toLowerCase().includes(q));
            });
        }

        if (matches.length > 0) {
            results[menu.q] = { menu, labels: matches };
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
                title: menu.name,
                excerpt: `Results from <a data-open-card="${menu.q}">${menu.name}</a>`,
            });
            labels.forEach(label => labelGroup.push({ ...label, fromMenu: menu.q }));
        });

        // add matching menus as linked cards
        if (menuMatches.length > 0) {
            labelGroup.push({ title: 'Menus', excerpt: 'Matching menus found' });
            menuMatches.forEach(menu => {
                labelGroup.push({
                    cardId: `menu-${menu.q}`,
                    title: menu.name,
                    excerpt: menu.subtitle || '',
                    image: menu.image || '',
                    linkId: menu.q,
                });
            });
        }
    }

    const searchMenu = {
        q: 'search',
        name: `Search results for "${query}"`,
        labels: labelGroup,
    };

    openMenu(searchMenu);
    openFromSearch = true;
    searchText.value = '';
}

menuLogo.addEventListener('click', () => {
    searchBox.showModal();
});

const searchBtn = document.getElementById('searchBtn')
searchBtn?.addEventListener('click', () => {
    searchBox.showModal();
});

searchBox.addEventListener('close', () => {
    if (searchText.value.trim() !== '') search();
});

searchText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); searchBox.close(); }
});

cancelSearch.addEventListener('click', () => {
    searchText.value = '';
    searchBox.close();
});



/* --------------------------
    Open menu by q / internal links / URL handler
    -------------------------- */

function openMenuByQ(q, skipAnim = false) {
    if (!q) return;
    const menu = menuItems.find(m => m.q === q);
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

    const targetMenu = menuItems.find(m => m.q && m.q.toLowerCase() === menuCode.toLowerCase());
    if (!targetMenu) {
        console.warn('Menu not found for', menuCode);
        return;
    }

    if (typeof openMenuByQ === 'function') openMenuByQ(menuCode, true);
    else {
        showContentFor(targetMenu);
        history.pushState({}, '', `?m=${targetMenu.q}`);
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

    rerollBtn?.classList.remove('visible');

    const ref = link.dataset.openCard.trim();
    const [menuCode, cardKey] = ref.split(':');

    const targetMenu = menuItems.find(m => m.q && m.q.toLowerCase() === menuCode.toLowerCase());
    if (!targetMenu) {
        console.warn('Menu not found for', menuCode);
        return;
    }

    if (!cardKey) {
        openMenuByQ(menuCode, true);
        $('.content-header')?.classList.remove('hidden');
        return;
    }

    const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
    if (!targetLabel) {
        console.warn('Card not found in', menuCode, cardKey);
        openMenuByQ(menuCode, true);
        return;
    }

    const isCurrentlyOpen = contentTitle.textContent &&
        contentTitle.textContent.toLowerCase() === targetMenu.name.toLowerCase();

    if (!isCurrentlyOpen) openMenuByQ(menuCode, true);

    const targetCard = $(`[data-card-id="${cardKey}"]`);
    if (targetCard) focusCard(targetCard, targetLabel, targetMenu);
});



/* --------------------------
    Back navigation
    -------------------------- */

function goBack() {
    const params = new URLSearchParams(location.search);
    const menuCode = params.get('m');
    const itemId = params.get('i');

    // if viewing a card, go back to menu grid
    if (itemId && !openFromRandom) {
        history.pushState({}, '', `?m=${menuCode}`);
        cardsContainer.querySelectorAll('.cards-grid, .card-separator, .section-header').forEach(el => el.classList.remove('hidden'));
        toggleView({ focused: true, show: false });
        $('.content-header')?.classList.remove('hidden');
        detailArea.innerHTML = `<h3>Detail</h3><p>Select a card to see details here.</p>`;
        contentView.style.overflow = '';

        // Update back button text to show parent menu name if exists
        const currentMenu = menuItems.find(m => m.q === menuCode);
        if (currentMenu && currentMenu.parent && !openFromSearch) {
            const parentMenu = menuItems.find(m => m.q === currentMenu.parent);
            backBtn.querySelector('span').textContent = parentMenu ? parentMenu.name : 'Menu';
        } else {
            backBtn.querySelector('span').textContent = 'Menu';
        }
        return;
    }

    // if in a menu
    if (menuCode || openFromRandom) {
        const currentMenu = menuItems.find(m => m.q === menuCode);

        // If current menu has a parent, navigate to parent instead of closing
        if (currentMenu && currentMenu.parent && !openFromRandom && !openFromSearch) {
            openMenuByQ(currentMenu.parent, true);
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
        if (openFromRandom) {
            openFromRandom = false;
            rerollBtn.classList.remove('visible');
            rerollBtn.setAttribute('aria-hidden', 'true');
        }
        return;
    }
}

backBtn.addEventListener('click', goBack);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') goBack(); });



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
            contentView.classList.add('visible');
            backBtn.classList.add('visible');
            contentView.setAttribute('aria-hidden', 'false');
            backBtn.setAttribute('aria-hidden', 'false');
            menuStage.classList.add('blur');
            starfield?.classList.add('blur');
            
            if (!focusedLayout.classList.contains('visible')) {
                sortBtn?.classList.add('visible');
                sortBtn?.setAttribute('aria-hidden', 'false');
            }
            updateSortButtonText();
        } else {
            contentView.classList.remove('visible');
            backBtn.classList.remove('visible');
            contentView.setAttribute('aria-hidden', 'true');
            backBtn.setAttribute('aria-hidden', 'true');
            menuStage.classList.remove('blur');
            starfield?.classList.remove('blur');
            
            sortBtn?.classList.remove('visible');
            sortBtn?.setAttribute('aria-hidden', 'true');
        }
    }

    if (focused) {
        if (show) {
            focusedLayout.classList.add('visible');
            focusedLayout.style.display = '';
            
            sortBtn?.classList.remove('visible');
            sortBtn?.setAttribute('aria-hidden', 'true');
        } else {
            focusedLayout.classList.remove('visible');
            focusedLayout.style.display = 'none';
            
            if (contentView.classList.contains('visible')) {
                sortBtn?.classList.add('visible');
                sortBtn?.setAttribute('aria-hidden', 'false');
            }
        }
    }
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

    openMenuByQ(menuCode);
    const targetMenu = menuItems.find(m => m.q.toLowerCase() === menuCode.toLowerCase());
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
createOrbitVisuals();
createMenuButtons();

// Reset URL if coming from search (original behavior)
const params = new URLSearchParams(location.search);
if (params.get('m') === 'search') history.pushState({}, '', location.pathname);

// Expose small console helpers (preserve original)
window.prototypeMenu = { menuItems, openMenu, showContentFor, goBack };