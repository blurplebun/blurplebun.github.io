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
const menuLogo = document.querySelector('.menu-logo');
const backBtn = document.getElementById('backBtn');
const centerBtn = document.getElementById('centerBtn');
centerBtn.classList.add('hide');

const menuStage = document.querySelector('.menu-stage');
menuStage.style.transition = 'none';
menuStage.style.transform = `translate(0px, 0px) scale(${getComputedStyle(document.documentElement).getPropertyValue('--menu-stage-scale')})`;


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
    menuStage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${getComputedStyle(document.documentElement).getPropertyValue('--menu-stage-scale')})`;

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
    menuStage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${getComputedStyle(document.documentElement).getPropertyValue('--menu-stage-scale')})`;

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

// two-finger trackpad gesture
menuStage.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (Math.abs(e.deltaX) < 100 && Math.abs(e.deltaY) < 100) {
        currentX -= e.deltaX * 1.5;
        currentY -= e.deltaY * 1.5;
        menuStage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${getComputedStyle(document.documentElement).getPropertyValue('--menu-stage-scale')})`;
        const starfield = document.querySelector('.starfield');
        if (starfield) {
            const layers = starfield.querySelectorAll('.star-layer');
            layers.forEach(layer => {
                const depth = parseFloat(layer.dataset.depth);
                const x = -currentX * parallaxFactor * depth;
                const y = -currentY * parallaxFactor * depth;
                layer.style.transform = `translate(${x}px, ${y}px)`;
            });
        }
    }
}, { passive: false });

// Snap back to center when a button is clicked
function snapCameraToCenter() {
    currentX = 0;
    currentY = 0;
    menuStage.style.transition = 'transform 0.5s cubic-bezier(.2, .9, .2, 1)';
    menuStage.style.transform = `translate(0, 0) scale(${getComputedStyle(document.documentElement).getPropertyValue('--menu-stage-scale')})`;

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

function showCenterBtn() {
    centerBtn.classList.add('hide');
    if (!(currentX == 0 && currentY == 0) && !(contentView.classList.contains('visible'))) {
        centerBtn.classList.remove('hide');
        document.querySelector('.splash-text-info').style.opacity = 0;
    }
    requestAnimationFrame(showCenterBtn);
}
showCenterBtn();


window.addEventListener('resize', () => {
    snapCameraToCenter();
});



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
        if (m.hidden) return;
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
            btn.dataset.menuQ = m.q;
            btn.setAttribute('aria-label', m.name);
            btn.style.setProperty('--glow', m.color);
            btn.style.background = m.color;
            btn.innerHTML = `
                <div class="inner">
                <div class="menu-thumb-square lazy-bg" data-bg='${m.image || ''}'></div>
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
            /*btn.addEventListener('click', snapCameraToCenter);*/
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



/// -- OPEN MAIN MENU BUTTONS --
function openMenu(menu, buttonEl, { skipAnimation = false } = {}) {
    if (menu.hidden || !buttonEl || skipAnimation) {
        showContentFor(menu);
        history.pushState({}, '', `?m=${menu.q}`);
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
    // contentView.querySelectorAll('hr').forEach(h => h.remove());
    contentTitle.textContent = menu.name;
    contentSubtitle.textContent = menu.subtitle;
    focusedLayout.style.display = 'none';
    contentView.classList.add('visible');
    backBtn.classList.add('visible');
    backBtn.setAttribute('aria-hidden', 'false');
    backBtn.querySelector('span').textContent = 'Menu';

    // Add copy link icon to menu title
    if (!(menu.q === "search")) {
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
    }

    // cardsContainer.className = `cards-grid max-cols-5`;

    contentView.dataset.singleCardMenu = menu.labels.length === 1 ? 'true' : 'false';

    /*
    const hr = document.createElement('hr');
    hr.style.border = "none";
    hr.style.borderTop = `3px solid color-mix(in srgb, var(--accent) 50%, transparent)`;
    hr.style.margin = "12px 0"
    contentView.appendChild(hr);
    */

    cardsContainer.innerHTML = "";

    // Create the first section grid
    let section = document.createElement("div");
    section.className = "cards-grid";
    cardsContainer.appendChild(section);

    menu.labels.forEach((lbl, i) => {
        // Check for separator (no cardId)
        if (!lbl.cardId) {
            const header = document.createElement("div");
            header.className = "content-header section-header";

            if (lbl.title) {
                const h1 = document.createElement("div");
                h1.className = "content-title separator";
                h1.textContent = lbl.title;
                header.appendChild(h1);
            }

            if (lbl.excerpt) {
                const h2 = document.createElement("div");
                h2.className = "content-sub separator";
                h2.innerHTML = lbl.excerpt;
                header.appendChild(h2);
            }

            // Add the header if there was any text
            if (lbl.title || lbl.excerpt) {
                cardsContainer.appendChild(header);
            }

            // Add the separator line (optional visual)
            const hr = document.createElement("hr");
            hr.className = "card-separator";
            cardsContainer.appendChild(hr);

            // Start new grid section
            section = document.createElement("div");
            section.className = "cards-grid";
            cardsContainer.appendChild(section);
            return;
        }

        // --- CARD CREATION ---
        const c = document.createElement("div");
        c.className = "card";
        c.dataset.cardId = lbl.cardId;

        // Linked menu card
        if (lbl.linkId) {
            const linkedMenu = menuItems.find(m => m.q === lbl.linkId);
            if (linkedMenu) {
                c.dataset.link = "true";
                c.style.border = `3px solid ${linkedMenu.color}`;
                c.innerHTML = `
                <div class="card-text">
                    <strong>${linkedMenu.name}</strong>
                    <div class="excerpt">${linkedMenu.subtitle || ""}</div>
                </div>
                <div class="menu-button bubble" style="background:${linkedMenu.color || "transparent"}">
                    <div class="inner">
                        <div class="menu-thumb lazy-bg" data-bg='${linkedMenu.image || ""}'></div>
                    </div>
                </div>
            `;
                c.addEventListener("click", e => {
                    e.stopPropagation();
                    openMenuByQ(lbl.linkId, true);
                });
            }
            section.appendChild(c);
            return;
        }

        // Standard card
        if (lbl.url) c.dataset.link = "true";
        if (lbl.unclickable) c.dataset.noclick = "true";

        if (lbl.image) {
            c.innerHTML = `
            <div class="thumb lazy-bg" data-bg="${lbl.image}"></div>
            <div class="card-text">
                <strong>${lbl.title}</strong>
                <div class="excerpt">${lbl.excerpt || ""}</div>
            </div>
        `;
        } else {
            c.innerHTML = `
            <div class="card-text full">
                <strong>${lbl.title}</strong>
                <div class="excerpt">${lbl.excerpt || ""}</div>
            </div>
        `;
        }

        // webinfo
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

        c.addEventListener("click", () => {
            if (lbl.unclickable) return;
            if (lbl.url) window.open(lbl.url, "_blank");
            else focusCard(c, lbl, menu);
        });

        section.appendChild(c);
    });

    contentView.setAttribute('aria-hidden', 'false');

    // only one card?
    if (menu.labels.length === 1) {
        const single = menu.labels[0];
        const cardEl = cardsContainer.querySelector('.card');
        if (cardEl) {
            if (single.unclickable) return;
            if (single.url) {
                window.open(single.url, '_blank');
            } else {
                focusCard(cardEl, single, menu);
            }
        }
    }

    initLazyLoad();
}



/// -- CARD DETAIL HANDLER --
function focusCard(cardEl, label, menu = null) {
    // clone card into left panel for appearance
    focusedCardArea.innerHTML = '';
    const clone = cardEl.cloneNode(true);
    clone.classList.add('focused');
    focusedCardArea.appendChild(clone);

    const html = label.detail
        ? label.detail
            .replace(/<img\b(?![^>]*\bclass=)/g, '<img class="lazy"') // add class if not present
            .replace(/(<img[^>]*?)\s+src=/g, '$1 data-src=') // replace only inside <img> tags
        : '';

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
            <hr>${html}
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
        initLazyLoad();

    } else {
        detailArea.innerHTML = `<h1>${label.title}</h1><hr>${html}`;
        initLazyLoad();
    }
    imgConHandler(detailArea);

    // hide grid cards except the one we moved
    cardsContainer.querySelectorAll('.cards-grid, .card-separator, .section-header').forEach(el => {
        el.classList.add('hidden');
    });
    focusedLayout.style.display = 'flex';
    document.querySelector('.content-header')?.classList.add('hidden');
    contentView.style.overflow = 'hidden';
    contentView.insertBefore(cardsContainer, focusedLayout);

    focusedLayout.scrollIntoView({ behavior: 'auto', block: 'center' });
    backBtn.querySelector('span').textContent = 'Card Selector'; initLazyLoad();

    detailArea.scrollTop = 0;
}


/// -- IMG CONTAINER --
function detailAreaImgHandler(img) {
    // before load
    if (!img.classList.contains('loaded')) {
        img.style.aspectRatio = '4 / 5';
        img.style.width = '90%';
        img.style.objectFit = 'cover';
        img.style.backgroundColor = 'var(--bg)';
        img.style.opacity = 0.5;
    }

    // when it loads
    img.addEventListener('load', () => {
        img.style.width = '';
        img.style.aspectRatio = '';
        img.style.backgroundColor = '';
        img.style.opacity = 1;
        img.classList.add('loaded');
    }, { once: true });

    // when it fails
    img.addEventListener('error', () => {
        img.style.width = '90%';
        img.style.aspectRatio = '4 / 5';
        img.style.backgroundColor = 'var(--bg)';
        img.style.opacity = 0.5;
    }, { once: true });

}
function imgConHandler(detailArea) {
    const contentImgs = detailArea.querySelectorAll('img');
    contentImgs.forEach(img => {
        detailAreaImgHandler(img);
    });

    const containers = detailArea.querySelectorAll('.imgContainer');
    containers.forEach(container => {
        const imgs = container.querySelectorAll('img');

        imgs.forEach(img => {
            detailAreaImgHandler(img);
        });
    });
}



/// -- SEARCH --
const searchBox = document.getElementById("searchBox");
const searchText = document.getElementById("searchText");
const cancelSearch = document.getElementById("cancelSearch");

function search() {
    contentView.scrollTop = 0;
    const query = searchText.value;
    const q = query.trim().toLowerCase();
    if (!q) return;

    const results = [];

    // find cards
    menuItems.forEach(menu => {
        matches = menu.labels.filter(label => {
            return (
                (label.title && label.title.toLowerCase().includes(q)) ||
                (label.excerpt && label.excerpt.toLowerCase().includes(q)) ||
                (label.detail && label.detail.toLowerCase().includes(q))
            );
        });

        if (matches.length > 0) {
            results[menu.q] = {
                menu,
                labels: matches
            };
        };
    });

    // find menus
    const menuMatches = menuItems.filter(menu => {
        if (menu.noFocus) return false;
        return (
            (menu.name && menu.name.toLowerCase().includes(q)) ||
            (menu.subtitle && menu.subtitle.toLowerCase().includes(q))
        );
    });

    const labelGroup = [];
    menusFound = Object.values(results);

    specialQuery = false;
    specialCase = ['nothing', 'content', 'help'];
    if (specialCase.includes(q)) {
        menusFound = [];
        specialQuery = true;
    }

    if (menusFound.length === 0) {
        notFoundDesc = "";
        if (!specialQuery) {
            notFound = "Nothing found";
        } else {
            if (q === 'nothing') notFound = "Nothing found!";
            if (q === 'content') {notFound = "Content found!"; notFoundDesc = "Yup, i am the content. You've found me heehee!<br>Aww you listened to what i said!<br>Who's a good boy~ :3"}
            if (q === 'help') notFound = "help yourself.";
        }
        labelGroup.push({
            title: notFound,
            excerpt: notFoundDesc,
        });

    } else {
        // add cards
        menusFound.forEach(({ menu, labels }) => {
            labelGroup.push({
                title: menu.name,
                excerpt: `Results from <a data-open-card="${menu.q}">${menu.name}</a>`,
            });

            labels.forEach(label => {
                labelGroup.push({
                    ...label,
                    fromMenu: menu.q,
                })
            })
        })
        // add menus
        if (menuMatches.length > 0) {
            labelGroup.push({
                title: "Menus",
                excerpt: "Matching menus found",
            });

            menuMatches.forEach(menu => {
                labelGroup.push({
                    cardId: `menu-${menu.q}`,
                    title: menu.name,
                    excerpt: menu.subtitle || "",
                    image: menu.image || "",
                    linkId: menu.q, // this makes it render as a linked menu card
                });
            });
        };

    }

    // make a temporary "search results" menu
    const searchMenu = {
        q: 'search',
        name: `Search results for "${query}"`,
        labels: labelGroup,
    };

    openMenu(searchMenu);
    searchText.value = '';
}

menuLogo.addEventListener('click', () => {
    searchBox.showModal();
});

searchBox.addEventListener('close', () => {
    if (searchText.value.trim() !== '') {
        search();
    }
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
})




/// -- OPEN MENU BY Q --
function openMenuByQ(q, skipAnim = false) {
    if (!q) return;
    const menu = menuItems.find(m => m.q === q);
    if (!menu) return;

    const btn = orbitButtons.find(b => b.dataset.menuQ === q);
    openMenu(menu, btn || null, { skipAnimation: skipAnim || !btn });
}





/// -- URL QUERY HANDLER ?m=<menu>&i=<card-id> --
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const menuCode = params.get('m');
    const cardKey = params.get('i'); // may be null or ""

    if (!menuCode) return;
    if (menuCode === "search") return;

    const targetMenu = menuItems.find(m => m.q && m.q.toLowerCase() === menuCode.toLowerCase());
    if (!targetMenu) {
        console.warn('Menu not found for', menuCode);
        return;
    }

    // Open menu - visible or hidden
    if (typeof openMenuByQ === 'function') {
        openMenuByQ(menuCode, true)
    } else {
        showContentFor(targetMenu);
        history.pushState({}, '', `?m=${targetMenu.q}`);
    }

    // helper: wait for card DOM element to appear
    async function waitForCard(cardId, timeout = 2000, interval = 50) {
        const start = performance.now();
        while (performance.now() - start < timeout) {
            const el = document.querySelector(`[data-card-id="${cardId}"]`);
            if (el) return el;
            await new Promise(r => setTimeout(r, interval));
        }
        return null;
    }

    // if ?i= exists, focus that card
    if (cardKey) {
        const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
        if (!targetLabel) {
            console.warn('Card not found in', menuCode, cardKey);
            return;
        }

        const cardEl = await waitForCard(cardKey, 2000, 40);
        if (cardEl) {
            if (!(cardEl.dataset.link || cardEl.dataset.noclick)) {
                focusCard(cardEl, targetLabel, targetMenu);
            }
        } else {
            console.warn('Timed out waiting for card', cardKey);
        }
    }
});




/// -- INTERNAL LINK HANDLER <a data-open-card="q:id"> --
document.addEventListener('click', async function (e) {
    const link = e.target.closest('a[data-open-card]');
    if (!link) return;
    e.preventDefault();

    const ref = link.dataset.openCard.trim();
    const [menuCode, cardKey] = ref.split(':');

    const targetMenu = menuItems.find(m => m.q && m.q.toLowerCase() === menuCode.toLowerCase());
    if (!targetMenu) {
        console.warn('Menu not found for', menuCode);
        return;
    }

    if (!cardKey) {
        // open the menu directly
        openMenuByQ(menuCode, true);
        return;
    }

    // open specific card inside that menu
    const targetLabel = targetMenu.labels.find(l => l.cardId === cardKey);
    if (!targetLabel) {
        console.warn('Card not found in', menuCode, cardKey);
        openMenuByQ(menuCode, true);
        return;
    }

    // Open the menu (skip anim)
    const isCurrentlyOpen =
        contentTitle.textContent &&
        contentTitle.textContent.toLowerCase() === targetMenu.name.toLowerCase();

    if (!isCurrentlyOpen) {
        openMenuByQ(menuCode, true);
    }

    const targetCard = document.querySelector(`[data-card-id="${cardKey}"]`);
    if (targetCard) focusCard(targetCard, targetLabel, targetMenu);
});





/// -- BACK NAVIGATION HANDLER --
function goBack() {
    const params = new URLSearchParams(location.search);
    const menuCode = params.get('m');
    const itemId = params.get('i');

    if (itemId) {
        // Currently viewing a card → go back to menu grid
        history.pushState({}, '', `?m=${menuCode}`);
        cardsContainer.querySelectorAll('.cards-grid, .card-separator, .section-header').forEach(el => {
            el.classList.remove('hidden');
        });
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
        document.querySelector('.content-header')?.classList.remove('hidden');
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


/// -- LAZY LOADER --
const lazyObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;

            // <img>
            if (el.tagName === "IMG") {
                el.src = `https://cdn.jsdelivr.net/gh/blurplebun/blurplebun.github.io/${el.dataset.src}`;
                el.onload = () => el.classList.add("loaded");
            }

            // background-image
            else if (el.classList.contains("lazy-bg")) {
                const bgUrl = el.dataset.bg;
                const img = new Image();
                img.src = bgUrl;
                img.onload = () => {
                    el.style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/blurplebun/blurplebun.github.io/${bgUrl}')`;
                    el.classList.add("loaded");
                };
            }

            obs.unobserve(el);
        }
    });
}, { rootMargin: "0px 0px 300px 0px" });

function initLazyLoad() {
    const lazyImages = document.querySelectorAll("img.lazy:not(.loaded)");
    const lazyBackgrounds = document.querySelectorAll(".lazy-bg:not(.loaded)");

    lazyImages.forEach(el => lazyObserver.observe(el));
    lazyBackgrounds.forEach(el => lazyObserver.observe(el));
}

// Run once on load
document.addEventListener("DOMContentLoaded", initLazyLoad);




/// -- SPLASHTEXTS --
window.addEventListener('load', () => {
    const splashTexts = document.querySelectorAll('.splash-text');
    splashTexts.forEach(el => {
        const type = el.dataset.info;
        if (type === 'info') {
            el.textContent = "(drag to move, click logo to search)"; // static label
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



/// -- STARS --
function createStarfield(layerCount = 3, starsPerLayer = 40) {
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
            star.style.animationDelay = `-${Math.random() * 5}s`;
            layer.appendChild(star);
        }
        container.appendChild(layer);
    }
}



backBtn.addEventListener('click', goBack);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') goBack(); });

centerBtn.addEventListener('click', snapCameraToCenter);
document.addEventListener('keydown', (e) => { if ((e.key === 'c') && (!searchBox.open)) snapCameraToCenter(); });

// init
createStarfield();
createOrbitVisuals();
createMenuButtons();



// --- HISTORY STATE HANDLING ---
window.addEventListener('popstate', (event) => {
    const params = new URLSearchParams(location.search);
    const menuCode = params.get('m');
    const cardKey = params.get('i');

    if (menuCode) {
        openMenuByQ(menuCode);
    } else {
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
            const cardEl = [...document.querySelectorAll('.card')]
                .find(c => c.dataset.cardId === cardKey);
            if (cardEl) focusCard(cardEl, targetLabel, targetMenu);
        }
    }
});



/* Expose some helpers for quick editing in console */
window.prototypeMenu = { menuItems, openMenu, showContentFor, goBack };