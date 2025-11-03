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


/// -- DRAGGING --
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
    menuStage.style.transition = 'transform 0.2s cubic-bezier(.2, .9, .2, 1)';
    menuStage.style.transform = `translate(${currentX}px, ${currentY}px)`;

const starfield = document.querySelector('.starfield');
if (starfield) {
    const layers = starfield.querySelectorAll('.star-layer');
    layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth);
        const x = -currentX * parallaxFactor * depth;
        const y = -currentY * parallaxFactor * depth;
        layer.style.transition = 'transform 0.3s cubic-bezier(0, 0, .5, 1)';
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
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
    menuStage.style.transition = 'transform 0.2s cubic-bezier(.2, .9, .2, 1)';
    menuStage.style.transform = `translate(${currentX}px, ${currentY}px)`;

const starfield = document.querySelector('.starfield');
if (starfield) {
    const layers = starfield.querySelectorAll('.star-layer');
    layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth);
        const x = -currentX * parallaxFactor * depth;
        const y = -currentY * parallaxFactor * depth;
        layer.style.transition = 'transform 0.3s cubic-bezier(0, 0, .5, 1)';
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
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
        const layers = starfield.querySelectorAll('.star-layer');
        layers.forEach(layer => {
            // Smoothly animate each layer back to origin
            layer.style.transition = 'transform 0.8s ease-out';
            layer.style.transform = 'translate(0, 0)';
            setTimeout(() => {
                layer.style.transition = '';
            }, 900);
        });
    }
}



/// -- ORBITS --
orbitRadius = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menu-radius')) || 180;
orbitDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ring-rotation-duration')) || 60;
//orbitRadius = 180;
//orbitDuration = 10;
ring.style.animationDuration = getComputedStyle(document.documentElement).getPropertyValue('--ring-rotation-duration') || '60s';
function createOrbitVisuals() {
    const menuStage = document.querySelector('.menu-stage');
    const baseRadius = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menu-radius')) || 180;

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


/// -- ORBITS: BUTTONS --
const orbitButtons = [];
function createMenuButtons() {
    // group menu items by orbit layer
    const grouped = {};
    menuItems.forEach(m => {
        const orbit = m.orbit;
        if (!grouped[orbit]) grouped[orbit] = [];
        grouped[orbit].push(m);
    });

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
            const baseRadius = orbitRadius;
            const r = baseRadius * orbit * 1.2 + 60;

            // store motion params on the element
            btn.dataset.radius = r;
            // period = baseDuration * orbit
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

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const baseRadius = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menu-radius')) || 180;

        orbitButtons.forEach(el => {
            const orbit = parseInt(el.dataset.orbit) || 1;
            const r = baseRadius * orbit * 1.2 + 60;
            el.dataset.radius = r;
        });

        createOrbitVisuals();
    }, 300);
});



/// -- URL QUERY HANDLER ?m=<menu>&i=<card-id> --
window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const menuCode = params.get('m');
  const cardKey = params.get('i'); // may be null or "" if ?i= or missing
  if (!menuCode) return;

  const targetMenu = menuItems.find(m => m.q && m.q.toLowerCase() === menuCode.toLowerCase());
  if (!targetMenu) return;

  // wait until buttons exist, then open the menu
  setTimeout(() => {
    const button = Array.from(document.querySelectorAll('.menu-button'))
      .find(b => b.getAttribute('aria-label').toLowerCase() === targetMenu.name.toLowerCase());
    if (!button) return;
    openMenu(targetMenu, button, { skipAnimation: true });

    // if ?i= exists AND is non-empty, open the card after content loads
    if (cardKey) {
      const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
      if (targetLabel) {
        const cardEl = [...document.querySelectorAll('.card')]
          .find(c => c.dataset.cardId === cardKey);
        if (cardEl && !(cardEl.dataset.link || cardEl.dataset.noclick)) {
          focusCard(cardEl, targetLabel, targetMenu);
        }
      }
    }
  }, 500);
});



/// -- SPLASHTEXTS --
window.addEventListener('load', () => {
    const splashTexts = document.querySelectorAll('.splash-text');
    splashTexts.forEach(el => {
        const type = el.dataset.info;
        if (type === 'info') {
            el.textContent = "(drag to move around)"; // static label
        }
        if (type === 'splash') {
            const text = splashLines[Math.floor(Math.random() * splashLines.length)];
            el.innerHTML = text;
            const baseSize = 20; // max font size for short text
            const minSize = 12;  // never go smaller than this
            const maxLen = 45;   // expected longest splash length

            let size = baseSize - (text.length / maxLen) * (baseSize - minSize);
            size = Math.max(minSize, Math.min(size, baseSize)); // clamp

            el.style.fontSize = `${size}px`;
        }
    });
});



/// -- OPEN MAIN MENU BUTTONS --
function openMenu(menu, buttonEl, { skipAnimation = false } = {}) {
    if (skipAnimation) {
        showContentFor(menu);
        return;
    }
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

/// -- SHOW CONTENT FROM MENU --
function showContentFor(menu) {
    contentTitle.textContent = menu.name;
    contentSubtitle.textContent = menu.subtitle;
    cardsContainer.innerHTML = '';
    focusedLayout.style.display = 'none';
    contentView.classList.add('visible');
    backBtn.classList.add('visible');
    backBtn.setAttribute('aria-hidden', 'false');
    backBtn.querySelector('span').textContent = 'Menu';

    // Add copy link icon to menu title
    const linkIcon = document.createElement('span');
    linkIcon.className = 'copy-link';
    linkIcon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07l-1.17 1.17" />
            <path d="M14 11a5 5 0 0 0-7.07 0L3.4 14.54a5 5 0 0 0 7.07 7.07l1.17-1.17" />
        </svg>
        `;
    linkIcon.title = "Copy shareable link";
    linkIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const link = `${location.origin}${location.pathname}?m=${menu.q}`;
        navigator.clipboard.writeText(link);

        // visual + tooltip feedback
        linkIcon.classList.add('copied');
        linkIcon.title = "Copied!";
        setTimeout(() => {
            linkIcon.classList.remove('copied');
            linkIcon.title = "Copy shareable link";
        }, 1500);
    });
    contentTitle.appendChild(linkIcon);


    const maxCols = parseInt(cardsContainer.dataset.max) || 5;
    // cardsContainer.className = `cards-grid max-cols-5`;
    cardsContainer.className = `cards-grid`;
    contentView.dataset.singleCardMenu = menu.labels.length === 1 ? 'true' : 'false';

    menu.labels.forEach(lbl => {
        const c = document.createElement('div');
        c.className = 'card';
        c.dataset.cardId = lbl.cardId;
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
            totalCardsCounter.textContent = `totalCards: ${totalCards}`;
        }
        const totalMenusCounter = c.querySelector('#totalMenusCounter');
        if (totalMenusCounter) {
            totalMenusCounter.textContent = `totalMenus: ${totalMenus}`;
        }
        const totalSplashCounter = c.querySelector('#totalSplashCounter');
        if (totalSplashCounter) {
            totalSplashCounter.textContent = `totalSplash: ${totalSplash}`;
        }

        c.addEventListener('click', () => {
            if (lbl.unclickable) return;
            if (lbl.url) {
                // open external link
                window.open(lbl.url, '_blank');
            } else {
                // default behavior (show description)
                focusCard(c, lbl, menu);
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
                focusCard(cardEl, single, menu);
            }
        }
    }
}


/// -- CARD DETAIL HANDLER --
function focusCard(cardEl, label, menu = null) {
    // clone card into left panel for appearance
    focusedCardArea.innerHTML = '';
    const clone = cardEl.cloneNode(true);
    clone.classList.add('focused');
    focusedCardArea.appendChild(clone);

    if (menu) {
        // fill details
        const shareURL = `${location.origin}${location.pathname}?m=${menu.q}&i=${label.cardId}`;
        detailArea.innerHTML = `
            <h1>
                ${label.title}
                <span class="copy-link" title="Copy shareable link">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07l-1.17 1.17" />
                    <path d="M14 11a5 5 0 0 0-7.07 0L3.4 14.54a5 5 0 0 0 7.07 7.07l1.17-1.17" />
                </svg>
                </span>
            </h1>
            <hr>${label.detail}
            `;
        detailArea.querySelector('.copy-link').addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(shareURL);

            const icon = e.currentTarget;
            icon.classList.add('copied');
            icon.title = "Copied!";
            setTimeout(() => {
                icon.classList.remove('copied');
                icon.title = "Copy shareable link";
            }, 1500);
        });
        history.pushState({}, '', `?m=${menu.q}&i=${label.cardId}`);

    } else {
        detailArea.innerHTML = `<h1>${label.title}</h1><hr>${label.detail}`;
    }

    // hide grid cards except the one we moved
    cardsContainer.classList.add('hidden');
    focusedLayout.style.display = 'flex';
    document.querySelector('.content-header')?.classList.add('hidden');
    contentView.style.overflow = 'hidden';
    contentView.insertBefore(cardsContainer, focusedLayout);

    focusedLayout.scrollIntoView({ behavior: 'auto', block: 'center' });
    backBtn.querySelector('span').textContent = 'Back';
}


/// -- INTERNAL LINK HANDLER <a data-open-card="q:id"> --
detailArea.addEventListener('click', function (e) {
  const link = e.target.closest('a[data-open-card]');
  if (!link) return;
  e.preventDefault();
  const ref = link.dataset.openCard.trim();
  const [menuCode, cardKey] = ref.split(':');
  if (!menuCode || !cardKey) {
    console.warn('Invalid open-card reference:', ref);
    return;
  }

  const targetMenu = menuItems.find(m => m.q && m.q.toLowerCase() === menuCode.toLowerCase());
  if (!targetMenu) {
    console.warn('Menu not found for', menuCode);
    return;
  }

  const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
  if (!targetLabel) {
    console.warn('Card cardId not found in menu', menuCode, cardKey);
    return;
  }

  if (contentTitle.textContent.toLowerCase() !== targetMenu.name.toLowerCase()) {
    const button = Array.from(document.querySelectorAll('.menu-button'))
      .find(b => b.getAttribute('aria-label').toLowerCase() === targetMenu.name.toLowerCase());
    if (!button) return;
    openMenu(targetMenu, button, { skipAnimation: true });
    // Wait for cards to render, then open the target card
    const cardEl = [...document.querySelectorAll('.card')]
      .find(c => c.dataset.cardId === cardKey);
    if (cardEl) focusCard(cardEl, targetLabel, targetMenu);
  } else {
    // Already in same menu — just focus the card directly
    const cardEl = [...document.querySelectorAll('.card')]
      .find(c => c.dataset.cardId === cardKey);
    if (cardEl) focusCard(cardEl, targetLabel, targetMenu);
  }
});


/// -- BACK NAVIGATION HANDLER --
function goBack() {
    const params = new URLSearchParams(location.search);
    const menuCode = params.get('m');
    const itemId = params.get('i');

    if (itemId) {
        // Currently viewing a card → go back to menu grid
        history.pushState({}, '', `?m=${menuCode}`);
        cardsContainer.classList.remove('hidden');
        focusedLayout.style.display = 'none';
        document.querySelector('.content-header')?.classList.remove('hidden');
        detailArea.innerHTML = `<h3>Detail</h3><p>Select a card to see details here.</p>`;
        contentView.style.overflow = '';
        backBtn.querySelector('span').textContent = 'Menu';
        return;
    }

    if (menuCode) {
        // Currently in a menu → go back to main stage
        history.pushState({}, '', location.pathname);
        contentView.classList.remove('visible');
        backBtn.classList.remove('visible');
        backBtn.setAttribute('aria-hidden', 'true');
        contentView.style.overflow = '';
        return;
    }
}




/// -- IMAGE PREVIEW HANDLER --
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
        caption = img.dataset.caption ? `<h1 style="margin-top: 12px; margin-bottom: -10px;">${img.dataset.caption}</h1>` : '';
        if (caption && img.dataset.subcaption) {
            subcaption = `<p style="color: color-mix(in srgb, var(--accentl) 75%, transparent)">${img.dataset.subcaption}</p>`
            overlay.innerHTML =
                `
                <img src="${img.src}" data-hasCaption=true alt="preview">
                ${caption}
                ${subcaption}
                `;
        } else if (caption) {
            overlay.innerHTML =
                `
                <img src="${img.src}" data-hasCaption=true alt="preview">
                ${caption}
                `;
        } else {
            overlay.innerHTML = `<img src="${img.src}" alt="preview">`
        }
        
        overlay.classList.add('visible');

        // close on click
        overlay.addEventListener('click', () => overlay.classList.remove('visible'), { once: true });
    }
});


/// -- STARS --
function createStarfield(layerCount = 4, starsPerLayer = 50) {
    const container = document.querySelector('.starfield');
    for (let l = 0; l < layerCount; l++) {
        const layer = document.createElement('div');
        layer.classList.add('star-layer');
        layer.dataset.depth = 0.5 + Math.random() * 1; // randomize layer parallax
        for (let i = 0; i < starsPerLayer; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            //random size
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            layer.appendChild(star);
        }
        container.appendChild(layer);
    }
}




backBtn.addEventListener('click', goBack);
// close content when clicking outside (optional)
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') goBack(); });

// init
createStarfield();
createOrbitVisuals();
createMenuButtons();



// --- HISTORY STATE HANDLING ---
window.addEventListener('popstate', (event) => {
  const params = new URLSearchParams(location.search);
  const menuCode = params.get('m');
  const cardKey = params.get('i');

  if (!menuCode) {
    // Go back to main menu
    goBack();
    contentView.classList.remove('visible');
    backBtn.classList.remove('visible');
    backBtn.setAttribute('aria-hidden', 'true');
    return;
  }

  const targetMenu = menuItems.find(m => m.q.toLowerCase() === menuCode.toLowerCase());
  if (!targetMenu) return;
  const button = Array.from(document.querySelectorAll('.menu-button'))
    .find(b => b.getAttribute('aria-label').toLowerCase() === targetMenu.name.toLowerCase());
  if (!button) return;
  openMenu(targetMenu, button, { skipAnimation: true });

  if (cardKey) {
    const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
    if (targetLabel) {
      setTimeout(() => {
        const cardEl = [...document.querySelectorAll('.card')]
          .find(c => c.dataset.cardId === cardKey);
        if (cardEl) focusCard(cardEl, targetLabel, targetMenu);
      }, 800);
    }
  }
});



/* Expose some helpers for quick editing in console */
window.prototypeMenu = { menuItems, openMenu, showContentFor, goBack };