/* --------------------------
    RENDERING + INTERACTIONS
    -------------------------- */

const ring = document.querySelector('.ring');
const expander = document.getElementById('expander');
const contentView = document.getElementById('contentView');
const cardsContainer = document.getElementById('cardsContainer');
const contentTitle = document.getElementById('contentTitle');
const contentSubtitle = document.getElementById('contentSubtitle');
const focusedLayout = document.getElementById('focusedLayout');
const focusedCardArea = document.getElementById('focusedCardArea');
const detailArea = document.getElementById('detailArea');
const backBtn = document.getElementById('backBtn');

const menuStage = document.querySelector('.menu-stage');


// Camera pan vars
let isDragging = false;
let startX = 0, startY = 0;
let currentX = 0, currentY = 0;
let parallaxX = 0, parallaxY = 0;
const parallaxFactor = -0.1;

// Mouse drag to pan
menuStage.addEventListener('mousedown', function (e) {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    menuStage.style.cursor = 'grab';
    menuStage.style.transition = 'none';
});

window.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    menuStage.style.transform = `translate(${currentX}px, ${currentY}px)`;

    const starfield = document.querySelector('.starfield');
    if (starfield) {
        parallaxX = -currentX * parallaxFactor;
        parallaxY = -currentY * parallaxFactor;
        starfield.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
    }
});

window.addEventListener('mouseup', function (e) {
    isDragging = false;
    menuStage.style.cursor = 'default';
});

// Touch support
menuStage.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    isDragging = true;
    startX = e.touches[0].clientX - currentX;
    startY = e.touches[0].clientY - currentY;
    menuStage.style.transition = 'none';
});

window.addEventListener('touchmove', function (e) {
    if (!isDragging || e.touches.length !== 1) return;
    currentX = e.touches[0].clientX - startX;
    currentY = e.touches[0].clientY - startY;
    menuStage.style.transform = `translate(${currentX}px, ${currentY}px)`;

    const starfield = document.querySelector('.starfield');
    if (starfield) {
        parallaxX = -currentX * parallaxFactor;
        parallaxY = -currentY * parallaxFactor;
        starfield.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
    }
});

window.addEventListener('touchend', function (e) {
    isDragging = false;
});

// Snap back to center when a button is clicked
function snapCameraToCenter() {
    currentX = 0;
    currentY = 0;
    menuStage.style.transition = 'transform 0.5s cubic-bezier(.2, .9, .2, 1)';
    menuStage.style.transform = 'translate(0, 0)';
    const starfield = document.querySelector('.starfield');
    if (starfield) {
        starfield.style.transition = 'transform 0.8s ease-out';
        starfield.style.transform = 'translate(0, 0)';
        setTimeout(() => starfield.style.transition = '', 900);
    }
}

/* set rotation duration from CSS var */
ring.style.animationDuration = getComputedStyle(document.documentElement).getPropertyValue('--ring-rotation-duration') || '60s';

function createOrbitVisuals() {
    const menuStage = document.querySelector('.menu-stage');
    const baseRadius = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--menu-radius')) || 180;

    // remove existing orbit visuals first (if regenerating)
    document.querySelectorAll('.orbit-visual').forEach(el => el.remove());

    // collect unique orbit layers
    const uniqueOrbits = [...new Set(menuItems.map(m => m.orbit || 1))];

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


const orbitButtons = [];

function createMenuButtons() {
    // group menu items by orbit layer
    const grouped = {};
    menuItems.forEach(m => {
        const orbit = m.orbit;
        if (!grouped[orbit]) grouped[orbit] = [];
        grouped[orbit].push(m);
    });

    // get base rotation duration
    const baseDuration = parseFloat(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--ring-rotation-duration')
    ) || 60;

    // create one ring per orbit layer
    Object.keys(grouped).forEach(layer => {
        const items = grouped[layer];
        const orbit = parseInt(layer);

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
            btn.dataset.angle0 = angleRad; // initial angle in radians
            btn.dataset.orbit = orbit;
            btn.setAttribute('aria-label', m.name);
            btn.style.setProperty('--glow', m.color);
            btn.style.background = m.color;
            btn.innerHTML = `
        <div class="inner">
          <div class="menu-thumb-square" style="background-image:url('${m.image || ''}')"></div>
          ${m.showName && m.name ? `<div class="menu-subtitle">${m.name}</div>` : ''}
        </div>
      `;

            // compute pixel radius
            const baseRadius = parseInt(
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--menu-radius')
            ) || 180;
            const r = baseRadius * orbit * 1.2 + 60;

            // store motion params on the element
            btn.dataset.radius = r;
            // period = baseDuration * orbit
            const baseDuration = parseFloat(
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--ring-rotation-duration')
            ) || 60;
            const periodSec = Math.max(0.01, baseDuration * orbit); // seconds per revolution
            const omega = (2 * Math.PI) / periodSec * direction; // radians/sec

            btn.dataset.omega = omega;
            btn.dataset.scale = m.scale || 1;

            const x0 = Math.cos(angleRad) * r;
            const y0 = Math.sin(angleRad) * r;
            btn.style.left = '50%';
            btn.style.top = '50%';
            btn.style.transform = `translate3d(${x0}px, ${y0}px, 0) scale(${m.scale || 1})`;

            if (m.noFocus) {
                btn.tabIndex = -1;
                btn.setAttribute('aria-hidden', 'true');
            }

            btn.addEventListener('click', () => openMenu(m, btn));
            btn.addEventListener('click', snapCameraToCenter);

            ringLayer.appendChild(btn);

            orbitButtons.push(btn);
        });

        document.querySelector('.menu-stage').appendChild(ringLayer);
    });

    startOrbitAnimation();
}


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

        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
    }

    requestAnimationFrame(orbitFrame);
}

window.addEventListener('resize', () => {
    const baseRadius = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menu-radius')) || 180;
    orbitButtons.forEach(el => {
        const orbit = parseInt(el.dataset.orbit) || 1;
        const r = baseRadius * orbit * 1.2 + 60;
        el.dataset.radius = r;
    });
});


// Open menu and optional card via URL (?q=menu&i=id)
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const menuCode = params.get('m');
    const itemId = params.get('i');
    if (!menuCode) return;

    // find menu by "q"
    const targetMenu = menuItems.find(
        m => m.q && m.q.toLowerCase() === menuCode.toLowerCase()
    );
    if (!targetMenu) return;

    // wait until buttons exist, then open the menu
    setTimeout(() => {
        const button = Array.from(document.querySelectorAll('.menu-button'))
            .find(b => b.getAttribute('aria-label').toLowerCase() === targetMenu.name.toLowerCase());
        if (!button) return;
        openMenu(targetMenu, button);

        // if ?i= exists, open the card after content loads
        if (itemId) {
            setTimeout(() => {
                const targetLabel = targetMenu.labels.find(l => l.id == itemId);
                if (targetLabel) {
                    const cardEl = [...document.querySelectorAll('.card')]
                        .find(c => c.dataset.id == itemId);
                    if (cardEl) focusCard(cardEl, targetLabel);
                }
            }, 1000);
        }
    }, 500);
});

window.addEventListener('load', () => {
    const splashTexts = document.querySelectorAll('.splash-text');

    splashTexts.forEach(el => {
        const type = el.dataset.info;

        if (type === 'info') {
            el.textContent = "(drag to move around)"; // static label
        }

        if (type === 'splash') {
            // choose random splash
            const text = splashLines[Math.floor(Math.random() * splashLines.length)];
            el.innerHTML = text;
            // adjust font size proportionally
            const baseSize = 20; // max font size for short text
            const minSize = 12;  // never go smaller than this
            const maxLen = 45;   // expected longest splash length

            // scaling factor
            let size = baseSize - (text.length / maxLen) * (baseSize - minSize);
            size = Math.max(minSize, Math.min(size, baseSize)); // clamp

            el.style.fontSize = `${size}px`;
        }
    });
});




function openMenu(menu, buttonEl) {
    // compute center position of button for expander origin
    const rect = buttonEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    expander.style.left = cx + 'px';
    expander.style.top = cy + 'px';
    expander.style.width = rect.width + 'px';
    expander.style.height = rect.height + 'px';
    expander.style.borderRadius = '50%';
    expander.style.background = getComputedStyle(buttonEl).backgroundColor || menu.color;
    expander.style.opacity = '1';

    // force reflow then expand
    requestAnimationFrame(() => {
        const maxDim = Math.max(window.innerWidth, window.innerHeight) * 2.2;
        const scale = maxDim / rect.width;
        expander.style.transform = `translate(-50%,-50%) scale(${scale})`;
        expander.style.transition = `transform var(--overlay-transition) cubic-bezier(.2,.9,.2,1),opacity var(--overlay-transition)`;
        buttonEl.style.transform += ' scale(1.02)';

        // after transition, show content
        setTimeout(() => {
            expander.style.opacity = '0';
            expander.style.left = '0';
            expander.style.top = '0';
            expander.style.width = '1px';
            expander.style.height = '1px';
            expander.style.transform = 'translate(-50%,-50%) scale(1)';
            showContentFor(menu);
        }, 700);
    });
}

function showContentFor(menu) {
    contentTitle.textContent = menu.name;
    contentSubtitle.textContent = menu.subtitle;
    cardsContainer.innerHTML = '';
    focusedLayout.style.display = 'none';
    contentView.classList.add('visible');
    backBtn.classList.add('visible');
    backBtn.setAttribute('aria-hidden', 'false');
    backBtn.querySelector('span').textContent = 'Menu';

    const maxCols = parseInt(cardsContainer.dataset.max) || 5;
    // cardsContainer.className = `cards-grid max-cols-5`;
    cardsContainer.className = `cards-grid`;
    contentView.dataset.singleCardMenu = menu.labels.length === 1 ? 'true' : 'false';

    menu.labels.forEach(lbl => {
        const c = document.createElement('div');
        c.className = 'card';
        c.dataset.id = lbl.id;
        if (lbl.url) {
            c.dataset.link = "true";
        }
        if (lbl.unclickable) {
            c.dataset.noclick = "true";
        }
        if (lbl.image) {
            c.innerHTML = `
                <div class="thumb" style="background-image:url('${lbl.image}')"></div>
                <div class="card-text">
                    <strong>${lbl.title}</strong>
                    <div class="excerpt">${lbl.excerpt}</div>
                </div>
            `;
        } else {
            c.innerHTML = `
                <div class="card-text full">
                    <strong>${lbl.title}</strong>
                    <div class="excerpt">${lbl.excerpt}</div>
                </div>
            `;
        }

        const totalCardsCounter = c.querySelector('#totalCardsCounter');
        if (totalCardsCounter) {
            totalCardsCounter.textContent = `
            totalCards: ${totalCards}
            `;
        }

        c.addEventListener('click', () => {
            if (lbl.unclickable) return;
            if (lbl.url) {
                // open external link
                window.open(lbl.url, '_blank');
            } else {
                // default behavior (show description)
                focusCard(c, lbl);
            }
        });

        cardsContainer.appendChild(c);
    });

    contentView.setAttribute('aria-hidden', 'false');

    // only one card?
    if (menu.labels.length === 1) {
        const single = menu.labels[0];
        const cardEl = cardsContainer.querySelector('.card');
        if (cardEl) {
            if (single.url) {
                window.open(single.url, '_blank');
            } else {
                focusCard(cardEl, single);
            }
        }
    }
}



function focusCard(cardEl, label) {
    // move to focused layout
    // clone card into left panel for appearance
    focusedCardArea.innerHTML = '';
    const clone = cardEl.cloneNode(true);
    clone.classList.add('focused');
    focusedCardArea.appendChild(clone);

    // fill details
    detailArea.innerHTML = `<h1>${label.title}</h1><hr>${label.detail}`;

    // hide grid cards except the one we moved
    cardsContainer.classList.add('hidden');
    focusedLayout.style.display = 'flex';
    contentView.style.overflow = 'hidden';
    contentView.insertBefore(cardsContainer, focusedLayout);

    // show animation
    // setTimeout(() => {
    focusedLayout.scrollIntoView({ behavior: 'auto', block: 'center' });
    backBtn.querySelector('span').textContent = 'Back';
    // }, 60);
}


// Handle internal card-opening links like <a data-open-card="q:id">
detailArea.addEventListener('click', function (e) {
    const link = e.target.closest('a[data-open-card]');
    if (!link) return;

    e.preventDefault();

    const ref = link.dataset.openCard.trim();
    const [menuCode, itemIdStr] = ref.split(':');
    const itemId = parseInt(itemIdStr);

    if (!menuCode || isNaN(itemId)) {
        console.warn('Invalid open-card reference:', ref);
        return;
    }

    // Find the target menu
    const targetMenu = menuItems.find(
        m => m.q && m.q.toLowerCase() === menuCode.toLowerCase()
    );
    if (!targetMenu) {
        console.warn('Menu not found for', menuCode);
        return;
    }

    // Find the target label/card
    const targetLabel = targetMenu.labels.find(l => l.id === itemId);
    if (!targetLabel) {
        console.warn('Card ID not found in menu', menuCode, itemId);
        return;
    }

    // If it's a different menu, open it
    if (contentTitle.textContent.toLowerCase() !== targetMenu.name.toLowerCase()) {
        const button = Array.from(document.querySelectorAll('.menu-button'))
            .find(b => b.getAttribute('aria-label').toLowerCase() === targetMenu.name.toLowerCase());
        if (!button) return;

        // Open that menu first
        openMenu(targetMenu, button);

        // Wait for cards to render, then open the target card
        setTimeout(() => {
            const cardEl = [...document.querySelectorAll('.card')]
                .find(c => c.dataset.id == itemId);
            if (cardEl) focusCard(cardEl, targetLabel);
        }, 800);
    } else {
        // Already in same menu — just focus the card directly
        const cardEl = [...document.querySelectorAll('.card')]
            .find(c => c.dataset.id == itemId);
        if (cardEl) focusCard(cardEl, targetLabel);
    }
});


function goBack() {
    // if a card is focused, go back to grid view (only if multi-card menu)
    if (cardsContainer.classList.contains('hidden')) {
        cardsContainer.classList.remove('hidden');
        focusedLayout.style.display = 'none';
        detailArea.innerHTML = `<h3>Detail</h3><p>Select a card to see details here.</p>`;
        contentView.style.overflow = '';
        backBtn.querySelector('span').textContent = 'Menu';

        // if the current menu was single-card, skip grid and go straight back to menu
        if (contentView.dataset.singleCardMenu === 'true') {
            contentView.classList.remove('visible');
            backBtn.classList.remove('visible');
            backBtn.setAttribute('aria-hidden', 'true');
            contentView.style.overflow = '';
        }
        return;
    }

    // otherwise, go back to the main menu
    contentView.classList.remove('visible');
    backBtn.classList.remove('visible');
    backBtn.setAttribute('aria-hidden', 'true');
    contentView.style.overflow = '';
}


document.addEventListener('click', function (e) {
    const img = e.target.closest('#detailArea img');
    if (img) {
        // create overlay if it doesn't exist
        let overlay = document.querySelector('.img-preview-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'img-preview-overlay';
            document.body.appendChild(overlay);
        }

        // insert enlarged image
        overlay.innerHTML = `<img src="${img.src}" alt="preview">`;
        overlay.classList.add('visible');

        // close on click
        overlay.addEventListener('click', () => overlay.classList.remove('visible'), { once: true });
    }
});


function createStarfield(count = 120) {
    const container = document.querySelector('.starfield');
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // random size & position
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // random twinkle offset
        star.style.animationDelay = `${Math.random() * 5}s`;

        fragment.appendChild(star);
    }

    container.appendChild(fragment);
}


backBtn.addEventListener('click', goBack);

// close content when clicking outside (optional)
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') goBack(); });

// init
createStarfield(150);
createOrbitVisuals();
createMenuButtons();

/* Expose some helpers for quick editing in console */
window.prototypeMenu = { menuItems, openMenu, showContentFor, goBack };

