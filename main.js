// --------------------------
// CONFIG
// --------------------------

// Lazy loader base path
const LAZY_BASE = 'https://cdn.jsdelivr.net/gh/blurplebun/blurplebun.github.io@latest/';
const LOCAL_MODE = 0; // if you don't use a cdn service to load images, just set this to true

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

let appLoaded = false;





// --------------------------
// UTILS
// --------------------------

// Utility helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// get CSS variable value
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

// set layout visibility
function setLayoutViz(layout, viz) {
    if (viz) {
        layout.classList.remove('hidden');
        return;
    }
    layout.classList.add('hidden');
}

// get layout visibility
function layoutViz(layout) {
    return !layout.classList.contains('hidden');
}

// set button visibility
function setButtonViz(button, viz) {
    if (viz) {
        button.classList.remove('ui-hide');
        return;
    }
    button.classList.add('ui-hide');
}

// get menu data from menuItems by id
function getMenuData(menuId) {
    return menuItems.find(m => m.menuId === menuId);
}

// get card data from menuItems by ids
function getCardData(menuId, cardId) {
    const menu = menuItems.find(m => m.menuId === menuId);
    return menu ? menu.labels.find(c => c.cardId === cardId) : null;
}

// change back button text content
function changeBackBtnText(text = "Back") {
    backBtn.querySelector('span').textContent = text;
}

// copy to clipboard button function
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





// --------------------------
// CAMERA
// --------------------------

let isDragging = false;
let startX = 0, startY = 0;
let currentX = 0, currentY = 0;
const parallaxFactor = -0.1;

const transStyle = 'transition: filter var(--layout-transition-speed), transform 0.5s cubic-bezier(.2, .9, .2, 1), opacity 1000ms;'
const transStyleSlow = 'transition: filter var(--layout-transition-speed), transform 1s cubic-bezier(.2, .9, .2, 1), opacity 1000ms;'

// handle menu ring transform when panning
function setElTransform(el, x, y, transition = null) {
    const scale = getCSSVar('--menu-stage-scale');
    el.style.transition = transition || el.style.transition;
    el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

    // update starfield parallax if present
    if (starfield) updateStarfieldParallax(el, x, y);
}

// update starfield parallax
function updateStarfieldParallax(el, x, y) {
    const layers = starfield.querySelectorAll('.star-layer');
    layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth) || 1;
        const px = -x * parallaxFactor * depth;
        const py = -y * parallaxFactor * depth;
        layer.style.transition = 'transform 0.3s cubic-bezier(0, 0, .5, 1)';
        layer.style.transform = `translate(${px}px, ${py}px)`;
    });
};

function enableCameraControl(el) {

    if (SIMPLE_MODE) return;

    // begin drag
    function beginDrag(clientX, clientY) {
        isDragging = true;
        startX = clientX - currentX;
        startY = clientY - currentY;
        el.style.cursor = 'grab';
    }

    // move during drag
    let lastDrag = 0;
    function dragTo(clientX, clientY) {
        const now = performance.now();
        if (now - lastDrag < 16) return;
        lastDrag = now;
        if (!isDragging) return;
        currentX = clientX - startX;
        currentY = clientY - startY;
        setButtonViz(centerBtn, true);
        setElTransform(el, currentX, currentY, transStyle);
    }

    // end drag
    function endDrag() {
        isDragging = false;
        el.style.cursor = 'default';
    }

    // mouse events
    el.addEventListener('mousedown', (e) => { beginDrag(e.clientX, e.clientY); });
    window.addEventListener('mousemove', (e) => { dragTo(e.clientX, e.clientY); });
    window.addEventListener('mouseup', endDrag);

    // touch events
    el.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        beginDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        dragTo(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', endDrag);

    // trackpad events
    el.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (Math.abs(e.deltaX) < 100 && Math.abs(e.deltaY) < 100) {
            currentX -= e.deltaX * 1.5;
            currentY -= e.deltaY * 1.5;
            setElTransform(el, currentX, currentY);
        }
    }, { passive: false });
}

// handle snapping back camera to center
function snapCameraToCenter(el) {
    currentX = 0; currentY = 0;
    setElTransform(el, currentX, currentY, transStyleSlow);
    setTimeout(() => {
        starfield?.querySelectorAll('.star-layer').forEach(layer => layer.style.transition = '');
    }, 900);
    setButtonViz(centerBtn, false);
}

function resetMenuTransform() {
    setElTransform(mainMenu, 0, 0);
    currentX = 0, currentY = 0;
}

enableCameraControl(mainMenu);
centerBtn.addEventListener('click', () => {
    snapCameraToCenter(mainMenu);
});





// --------------------------
// MAIN MENU
// --------------------------

// copy link icon
const copyLinkIcon = `
    <span class="copy-link" title="Copy shareable link">
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07l-1.17 1.17" />
            <path d="M14 11a5 5 0 0 0-7.07 0L3.4 14.54a5 5 0 0 0 7.07 7.07l1.17-1.17" />
        </svg>
    </span>
`;

// copy link functionality
function copyLinkHandler(layout, menuId, cardId = null) {
    let shareURL = !eFolder ? `${location.origin}${location.pathname}?m=${menuId}` : `${location.origin}${location.pathname}${eFolder}/${menuId}`;
    if (cardId) shareURL = !eFolder ? `${location.origin}${location.pathname}?m=${menuId}&i=${cardId}` : `${location.origin}${location.pathname}${eFolder}/${menuId}/${cardId}`;
    layout.querySelector('.copy-link').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(shareURL);
        const icon = e.currentTarget;
        icon.classList.add('copied');
        icon.title = 'Copied!';
        setTimeout(() => { icon.classList.remove('copied'); icon.title = 'Copy shareable link'; }, 1500);
        playSound('sfxLink', SFX_LINK_VOL);
    });
}

/*
function initMainMenu() {
    menuItems.forEach(m => {
        if (m.hidden || m.invisible) return;

        const menu = document.createElement('div');
        menu.classList.add('menu-item');
        menu.style.borderColor = m.color || getCSSVar('--ring');
        menu.dataset.id = m.menuId;
        menu.innerHTML = m.title;
        menu.addEventListener('click', () => { openMenu(menu, m); });

        menuRing.appendChild(menu);
    });
}
*/

// make orbit group for menu items
function makeOrbitGroup(orbitGroup) {
    menuItems.forEach(m => {
        if (m.hidden) return;
        const orbit = m.orbit;
        if (!orbitGroup[orbit]) orbitGroup[orbit] = [];
        orbitGroup[orbit].push(m);
    });
}

// calculate orbit positions
function calculateMenuPos(angleRad, layer, direction, phaseOffset = 0) {
    const oData = orbitData.find(od => od.orbit === layer);
    layer = oData?.orbitNum || layer;

    const baseRadius = getCSSVar('--menu-radius', 'int') || 180;
    const r = layer === 0 ? 0 : baseRadius * layer * 1.2 + 60;

    const baseDuration = getCSSVar('--ring-rotation-duration', 'float') || 60;
    const periodSec = baseDuration * layer;
    const omega = (2 * Math.PI) / periodSec * direction;

    let x0, y0;
    const oScaleX = oData?.scaleX || getCSSVar('--menu-orbit-scale-x', 'float');
    const oScaleY = oData?.scaleY || getCSSVar('--menu-orbit-scale-y', 'float');
    const oX = oData?.offsetX || 0;
    const oY = oData?.offsetY || 0;

    x0 = (Math.cos(angleRad + phaseOffset * omega) * r * oScaleX) + oX;
    y0 = (Math.sin(angleRad + phaseOffset * omega) * r * oScaleY) + oY;

    return { r, omega, x0, y0 };
}

// calculate menu scale + hover effect
let cursorX = 0, cursorY = 0;
window.addEventListener('mousemove', e => { cursorX = e.clientX; cursorY = e.clientY; });

function calculateMenuScale(btn, cursorPos = { x: cursorX, y: cursorY }) {
    const maxDist = 300;

    let zoom = 1;
    const rect = btn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dx = cursorPos.x - btnX;
    const dy = cursorPos.y - btnY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    zoom = 1 + Math.max(0, (1 - dist / maxDist)) * 0.375;
    return zoom;
}

// apply orbit positions to menu elements
function applyMenuPos(btn, s, r, omega, x0, y0) {
    btn.style.left = '50%';
    btn.style.top = '50%';
    btn.dataset.radius = r;
    btn.dataset.omega = omega;

    btn.dataset.x = x0;
    btn.dataset.y = y0;
    btn.dataset.x0 = x0;
    btn.dataset.y0 = y0;
    btn.dataset.s = s;

    btn.style.transform = `translate3d(calc(${btn.dataset.x}px + -50%), calc(${btn.dataset.y}px + -50%), 0) scale(${btn.dataset.s})`;
}

// create menu item elements for a given orbit layer
function createMenuItemElements(menus, layer, orbitLayer, count, direction, phaseOffset) {
    menus.forEach((m, i) => {
        const angleDeg = (i / count + 0.75) * 360 + phaseOffset;
        const angleRad = angleDeg * (Math.PI / 180);

        const btn = document.createElement('div');
        btn.className = 'menu-item';

        btn.dataset.angleRad = angleRad;
        btn.dataset.layer = layer;
        btn.dataset.direction = direction;
        btn.dataset.index = i;
        btn.dataset.scale = m.scale || 1;
        btn.dataset.menuId = m.menuId;

        btn.style.setProperty('--glow', m.color);
        btn.style.background = m.color || 'transparent';
        const img = m.image ? `<div class="menu-item-thumb"><img src="${m.image}"  draggable="false"></div>` : ''
        btn.innerHTML = `
            <div class="menu-item-inner">
                ${img}
                ${m.showTitle && m.title ? `<div class="menu-item-title">${m.title}</div>` : ''}
            </div>
        `;

        const { r, omega, x0, y0 } = calculateMenuPos(angleRad, layer, direction);
        // const s = m.scale || 1;
        const s = calculateMenuScale(btn);
        applyMenuPos(btn, s, r, omega, x0, y0);

        btn.addEventListener('click', () => { openMainMenuButton(btn, m); });
        orbitLayer.appendChild(btn);
    });
}

// handle opening menus from the main menu interface
let openSingle = false;
function openMainMenuButton(btn, m) {
    animateExpander();
    if (m.labels && m.labels.length == 1) {
        openSingle = true;
        if (m.menuId === "random") { openRandom(); setButtonViz(rerollBtn, true); return; }
        openCardById(m.menuId, m.labels[0].cardId);
        return;
    }
    openMenu(btn, m);
}

// execute expander animation (todo)
function animateExpander() {
    // playSound('sfxWarp', SFX_WARP_VOL);
    return;
}

// position orbit rings
const rings = [];
function positionOrbitRings(rings) {
    rings.forEach(ring => {
        let layer = ring.dataset.layer;
        const oData = orbitData.find(o => o.orbit == layer);

        layer = oData?.orbitNum || layer;
        const oScaleX = oData?.scaleX || getCSSVar('--menu-orbit-scale-x', 'float');
        const oScaleY = oData?.scaleY || getCSSVar('--menu-orbit-scale-y', 'float');
        const oX = oData?.offsetX || 0;
        const oY = oData?.offsetY || 0;

        const baseRadius = getCSSVar('--menu-radius', 'int') || 180;
        const diameter = (baseRadius * layer * 1.2 + 60) * 2;

        ring.style.width = `${diameter}px`;
        ring.style.height = `${diameter}px`;
        ring.style.transform = `translate(calc(${oX}px + -50%), calc(${oY}px + -50%)) scale(${oScaleX}, ${oScaleY})`;
        ring.style.zIndex = '-1';
    });
}

// handle menu elements and positioning
function orbitMenuHandler(orbitGroup) {
    Object.keys(orbitGroup).forEach(l => {
        const menus = orbitGroup[l];
        const layer = parseFloat(l);
        const oData = orbitData.find(o => o.orbit == layer);

        const orbitLayer = document.createElement('div');
        orbitLayer.classList.add('orbit-layer');
        menuRing.appendChild(orbitLayer);

        const direction = oData?.direction || (layer % 2 === 0 ? 1 : -1);
        const phaseOffset = Math.random() * 360;
        const count = menus.length;

        createMenuItemElements(menus, layer, orbitLayer, count, direction, phaseOffset);

        const ring = document.createElement('div');
        ring.classList.add('orbit-ring');
        ring.dataset.layer = layer;
        ring.style.animationDelay = `${-layer * 0.5}s`;
        rings.push(ring);

        positionOrbitRings(rings);

        menuRing.insertBefore(ring, menuRing.firstChild);

    });
}

// add faraway (to ensure the draggable main menu works ... lol)
function addFaraway() {
    const far = {
        title: 'faraway',
        menuId: 'faraway',
        invisible: true,
        scale: 0.01,
        orbit: 999,
    };
    menuItems.push(far);

    const farData = {
        orbit: 999,
        scaleX: 1,
        scaleY: 1,
    };
    orbitData.push(farData)
}

// create menu items
function initMainMenu() {
    resetMenuTransform();

    // animate fade-in at first
    mainMenu.classList.add('no-transition');
    mainMenu.style.opacity = 0;
    setTimeout(() => {
        mainMenu.classList.remove('no-transition');
        mainMenu.style.opacity = 1;
    }, 1);

    menuRing.classList.add('no-transition');
    menuRing.style.scale = 0.9;
    setTimeout(() => {
        menuRing.classList.remove('no-transition');
        menuRing.style.scale = "";
    }, 1);

    if (SIMPLE_MODE) { initSimpleMode(); return; }

    addFaraway();

    const orbitGroup = {};
    makeOrbitGroup(orbitGroup);
    orbitMenuHandler(orbitGroup);
    requestAnimationFrame(orbitMenuLoop);
}

// update main menu scale on resize
window.addEventListener('resize', () => { resetMenuTransform(); });

// main loop for orbiting menu items
let lastFrame = 0;
let frame = 0;
let frameAccum = 0;
function orbitMenuLoop(t) {
    const dt = (t - lastFrame) / 1000;
    lastFrame = t;
    frameAccum += dt;

    // limit to certain fps
    if (frameAccum >= 1 / ORBIT_FPS) {
        frame += frameAccum;
        frameAccum = 0;

        const cursorPos = { x: cursorX, y: cursorY };

        btn = $$('.orbit-layer .menu-item');
        btn.forEach(b => {
            const angleRad = parseFloat(b.dataset.angleRad);
            const layer = parseFloat(b.dataset.layer);
            const direction = parseFloat(b.dataset.direction);

            const { r, omega, x0, y0 } = calculateMenuPos(angleRad, layer, direction, -frame);
            const s = (!menuIsOpen && !isDragging) ? calculateMenuScale(b, cursorPos) * b.dataset.scale : b.dataset.scale;
            applyMenuPos(b, s, r, omega, x0, y0);

        });

        positionOrbitRings(rings);
    }

    requestAnimationFrame(orbitMenuLoop);
}

// blur main menu
function blurMainMenu(bool) {
    if (bool) {
        mainMenu.classList.add('blur');
        starfield.classList.add('blur');
        return;
    }
    mainMenu.classList.remove('blur');
    starfield.classList.remove('blur');
}



// --------------------------
// SIMPLE MODE
// --------------------------

// push categorized menus
function simpleModePushMenus(menus, m) {
    menus.push({
        linkId: m.menuId,
        isInMenu: true,
        // banner: true
    });
    m.isInMenu = true;
}

// separate menus
function simpleModeSeparateMenus(menus, title, excerpt = null) {
    t = '<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>' + title;
    e = excerpt ? '<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>' + excerpt : '';
    menus.push({
        title: t,
        subtitle: e
    });
}

// handle main menu content
function simpleModeCreateMenus(menus, menuMatches) {
    orbitData.forEach(o => {
        let separateOnce = false;
        menuMatches.forEach(m => {
            if (m.orbit == o.orbit) {
                if (!separateOnce) { simpleModeSeparateMenus(menus, o.title, o.desc); separateOnce = true; }
                simpleModePushMenus(menus, m)
            }
        });
    });

    let separateOnce = false;
    menuMatches.forEach(m => {
        if (!m.isInMenu) {
            if (!separateOnce) { simpleModeSeparateMenus(menus, "Uncategorized"); separateOnce = true; };
            simpleModePushMenus(menus, m)
        };
    });
}

// initialize simple mode
function initSimpleMode() {

    // give parent data to each menu
    menuItems.forEach(m => { if (!m.parent) m.parent = 'index'; });

    // create main menu
    let menus = [];
    let menuMatches = menuItems.filter(menu => (!(menu.invisible || menu.hidden)));
    if (menuMatches.length > 0) simpleModeCreateMenus(menus, menuMatches);

    // main menu data
    const index = {
        menuId: "index",
        title: MAIN_MENU_TITLE,
        subtitle: MAIN_MENU_SUBTITLE,
        labels: menus
    }
    menuItems.push(index);
}

/* --------------------------
   Mode switcher
   -------------------------- */

// read SIMPLE_MODE from localStorage
function getSimpleMode() {
    // try localStorage first
    const saved = localStorage.getItem('simpleMode');
    if (saved !== null) {
        return saved === 'true' || saved === '1' ? 1 : 0;
    }

    // fallback to cookie for older browsers
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

// save SIMPLE_MODE preference
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





// --------------------------
// CONTENT VIEW
// --------------------------

// set and get current menu id
function setCurrentMenu(id) { contentView.dataset.currentMenuId = id; }
function currentMenu() { return contentView.dataset.currentMenuId; }

// open menu by id (string)
function openMenuById(id) {
    const m = menuItems.find(m => m.menuId === id);
    if (!m) return;

    const menuEl = menuRing.querySelector(`.menu-item[data-id="${m.menuId}"]`);
    openMenu(menuEl, m);
}

// open menu with menu element and data
let menuIsOpen = false;
function openMenu(menu, m) {
    resetLayoutTransition();

    blurMainMenu(true);
    setLayoutViz(contentView, true);
    setLayoutViz(detailView, false);
    changeBackBtnText(m.parent && !openSingle ? getMenuData(m.parent).title : 'Close')
    setButtonViz(backBtn, true);
    setButtonViz(settingsBtn, false);
    setButtonViz(playBgmBtn, false);
    menuIsOpen = true;

    const title = m.invisible ? m.title : m.title + copyLinkIcon;
    const subtitle = m.menuId.includes("nansenz") ? m.subtitle + `<div class="ticker-bar"><div class="ticker-text"></div></div>` : m.subtitle;
    contentViewTitle.innerHTML = title;
    contentViewSubtitle.innerHTML = subtitle || '';
    if (!m.invisible) copyLinkHandler(contentView, m.menuId);
    setCurrentMenu(m.menuId);

    // BGM transition when opening menu
    if (bgmEnabled && !bgmStop) {
        const rootId = m.menuId.split("-")[0];
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

    playSound('sfxSwap', SFX_SWAP_VOL);

    renderContentGrid(m);
    setHistoryState(m.menuId);
}



// ------ character randomizer -------

// get all characters
let characters = [];
let nextCharacter = null;
function getAllCharacters() {
    characters = [];
    menuItems.forEach(menu => {
        if (!menu.labels) return;
        if (menu.menuId === 'random') return;
        if (menu.menuId.includes('floriverse')) return;
        menu.labels.forEach(card => { if (card.cardId && card.isCharacter) characters.push({ menu, card }); });
    });
    nextCharacter = randomNoRepeats(characters);
    return characters;
}

// ensure no repetition
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

function openRandom() {
    const { menu, card } = randomCharacter();
    openCardById(menu.menuId, card.cardId);
}

rerollBtn.addEventListener('click', () => { openRandom(); });



// the behavior for clicking cards that link to other menus
function menuCardBehavior(card, c) {
    const m = getMenuData(c.linkId);
    if (!m) return;
    html = `
        <div class="card-text" style="background: color-mix(in srgb, ${m?.color || 'fff'} 10%, transparent)">
            <div class="card-text-title">${m.title}</div>
            ${m.subtitle ? `<div class="card-text-excerpt">${m.subtitle}</div>` : ''}
        </div>
        ${m.image ? `<img src="${m.image}" class="thumb card-thumb-flip" style="background-color:${m.color}; animation-delay:${-card.dataset.gridIndex / 5}s">` : ''}
        `;

    if (card.dataset.caption) html = `<div class="caption">${card.dataset.caption}</div>` + html;
    card.innerHTML = html;

    card.style.backgroundColor = 'transparent';
    card.style.border = `3px solid ${m.color}`;
    card.style.boxShadow = `inset 0 0 30px color-mix(in srgb, ${m.color} 50%, transparent)`;

    card.addEventListener('click', () => { if (m) openMenuById(m.menuId); });
    card.addEventListener('mouseover', () => card.style.backgroundColor = `color-mix(in srgb, ${m.color} 30%, transparent)`);
    card.addEventListener('mouseout', () => card.style.backgroundColor = `transparent`);
}

// the behavior for clicking cards that reference other cards
let openFromReference = null;
function referenceCardBehavior(card, c) {
    const [menuRefId, cardRefId] = c.reference.split(':');
    const isMenu = !cardRefId;

    // if the referenced link is just a menu
    if (isMenu) {
        const r = {};
        r.linkId = getMenuData(menuRefId).menuId;
        menuCardBehavior(card, r);
        return;
    }

    // otherwise, if card id is stated
    const r = getCardData(menuRefId, cardRefId);

    // if invalid
    if (!r) {
        card.style.display = "none";
        return;
    }

    // setCardHTML(card, c, r);

    /*
    card.innerHTML = `
        ${card.dataset.caption ? `<div class="caption">${card.dataset.caption}</div>` : ''}
        ${r.image ? `<img src="${r.image}" class="thumb">` : ''}
        <div class="card-text">
            <div class="card-text-title">${r.title}</div>
            ${r.subtitle ? `<div class="card-text-excerpt">${r.subtitle}</div>` : ''}
        </div>
        `;
    */

    // set dataset attributes
    setCardAttributes(card, r);

    // special cards
    if (card.dataset.isMenu) { menuCardBehavior(card, r); return; }

    // regular cards
    defaultCardBehavior(card, r)

    /*
card.addEventListener('click', () => {
    openCardById(r.cardParentId, r.cardId);
    openFromReference = c.cardParentId;
});
*/
}

// the default behavior for clicking a regular card
function defaultCardBehavior(card, c) {
    setCardHTML(card, c);
    card.addEventListener('click', () => {
        if (c.url) return window.open(c.url, '_blank');
        if (!c.unclickable) openCard(card, c);
    });
}

// handles the innerHTML of default cards (normal, url, unclickable)
function setCardHTML(card, c, r = null) {
    let html = `
        <img src="${c.image}" class="thumb">
        <div class="card-text">
            <div class="card-text-title">${c.title}</div>
            ${c.subtitle ? `<div class="card-text-excerpt">${c.subtitle}</div>` : ''}
        </div>
        `;

    if (c.blank) html = `
        ${c.image ? `<img src="${c.image}" class="thumb">` : ''}
        `;

    if (!c.image) html = `
        <div class="card-text full">
            <div class="card-text-title">${c.title}</div>
            ${c.subtitle ? `<div class="card-text-excerpt">${c.subtitle}</div>` : ''}
        </div>
        `;

    if (r) {
        html = `
            <img src="${r.image}" class="thumb">
            <div class="card-text">
                <div class="card-text-title">${r.title}</div>
                ${r.subtitle ? `<div class="card-text-excerpt">${r.subtitle}</div>` : ''}
            </div>
            `;

        if (r.blank) html = `
            ${r.image ? `<img src="${r.image}" class="thumb">` : ''}
            `;

        if (!r.image) html = `
            <div class="card-text full">
                <div class="card-text-title">${r.title}</div>
                ${r.subtitle ? `<div class="card-text-excerpt">${r.subtitle}</div>` : ''}
            </div>
            `;
    }

    if (card.dataset.caption) html = `<div class="caption">${card.dataset.caption}</div>` + html;

    card.innerHTML = html;
}

// set card attributes
function setCardAttributes(card, c) {
    if (c.linkId) card.dataset.isMenu = c.linkId;
    if (c.reference) card.dataset.isReference = c.reference;
    if (c.url) card.dataset.url = c.url;
    if (c.banner) card.dataset.isBanner = c.banner;
    if (c.isCharacter) card.dataset.isCharacter = c.isCharacter;
    if (c.unclickable) card.dataset.isUnclickable = c.unclickable;
    if (c.blank) card.dataset.blank = c.blank;
}

// the behavior for card separators
function separatorBehavior(card, c) {
    card.classList.remove('card');
    card.classList.add('card-separator');
    card.innerHTML = `
        <div class="card-separator-title">${c.title || ''}</div>
        <div class="card-separator-subtitle">${c.subtitle || ''}</div>
        <hr>
        `;
}

// render the content grid from a menu data
function renderContentGrid(m) {
    contentView.scrollTop = 0;
    contentViewGrid.innerHTML = '';

    let i = 0;
    let cardArray = [];
    m.labels.forEach(c => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = c.cardId;

        card.dataset.gridIndex = i;
        cardArray.push(card);
        i++;

        // set dataset attributes
        setCardAttributes(card, c);

        contentViewGrid.appendChild(card);

        // special cards
        if (card.dataset.isMenu) { menuCardBehavior(card, c); return; }
        if (card.dataset.isReference) { referenceCardBehavior(card, c); return; }

        // separators
        if (!c.cardId) { card.dataset.isSeparator = 'true'; separatorBehavior(card, c); return; }

        // regular cards
        defaultCardBehavior(card, c)
    });

    animateCardFirstTime(cardArray);
    initLazyLoader(contentViewGrid);
}

// animate card at first
function animateCardFirstTime(cardArray) {
    cardArray.forEach(card => {
        card.classList.add('no-transition');
        card.style.translate = "0 25px";
        card.style.opacity = 0;
        setTimeout(() => {
            card.classList.remove('no-transition');
            card.style.translate = "";
            card.style.opacity = "";
        }, (card.dataset.gridIndex + 1) * getCSSVar('--grid-cascade-transition-speed', 'int') / 10);
    });
}





// --------------------------
// DETAIL VIEW
// --------------------------

// open card by menu id and card id (strings)
function openCardById(menuId, cardId) {
    openMenuById(menuId);

    const menu = menuItems.find(m => m.menuId === menuId);
    if (!menu) return;
    const c = menu.labels.find(c => c.cardId === cardId);
    if (!c) return;

    const card = contentViewGrid.querySelector(`.card[data-id="${cardId}"]`);
    openCard(card, c);
}

// open card with card element and data
function openCard(card, c) {
    resetLayoutTransition();
    setLayoutViz(contentView, false);
    setLayoutViz(detailView, true);
    changeBackBtnText("Close");

    detailViewHeader.innerHTML = '';

    const active = card.cloneNode(true);
    active.classList.add('active');
    delete active.dataset.isBanner;

    active.classList.add('no-transition');
    active.style.translate = "10px";
    active.style.scale = "0.95";
    active.style.opacity = "1";
    detailViewContent.classList.add('no-transition');
    detailViewContent.style.translate = "8px 0";
    setTimeout(() => {
        active.classList.remove('no-transition');
        active.style.translate = "";
        active.style.scale = "";
        active.style.opacity = "";
        detailViewContent.classList.remove('no-transition');
        detailViewContent.style.translate = "";
    }, 1);

    if (active.dataset.caption) active.removeChild(active.querySelector(".caption"));
    detailViewHeader.appendChild(active);

    renderCardDetail(c);
    initLazyLoader(detailView);

    playSound('sfxSwap', SFX_SWAP_VOL);

    // was the card opened from single-card menu?
    if (openSingle) {
        setHistoryState(c.cardParentId);
        return;
    }
    setHistoryState(c.cardParentId, c.cardId);
}

// render the detail view from a card data
function renderCardDetail(c) {
    detailViewContent.scrollTop = 0;

    const menu = getMenuData(c.cardParentId);
    let html = c.detail || '';
    if (c.isCharacter) html = characterHTMLBuilder(c, html)

    detailViewContent.innerHTML = `
        <h1>
            ${!c.blank
            ? `
                <small class="card-parent-link"><a data-open-card="${menu.menuId}">${menu.title}</a> /</small>
                <br>
                ${c.title}${copyLinkIcon}`
            : `<small class="card-parent-link">From <a data-open-card="${menu.menuId}">${menu.title}</a></small>${copyLinkIcon}`}
        </h1>
        <hr>
        ${html}
        `;


    cardDetailScriptHandler(c)
    copyLinkHandler(detailView, menu.menuId, c.cardId);

    internalCardHandler();
}

// handles card that are placed as div element inside the detail view
function internalCardHandler() {
    cards = detailViewContent.querySelectorAll(".card.internal");
    cards.forEach(card => {
        const c = {};
        c.reference = card.dataset.href;
        referenceCardBehavior(card, c); return;
    });
}

// HTML builder for character cards
function characterHTMLBuilder(c, html) {
    const cSpecies = c.cSpecies ? `Species: ${c.cSpecies}<br>` : '';
    const cPronouns = c.cPronouns ? `Pronouns: ${c.cPronouns}<br>` : '';
    const cGender = c.cGender ? `Gender: ${c.cGender}<br>` : '';
    const cSexuality = c.cSexuality ? `Sexuality: ${c.cSexuality}<br>` : '';
    const cNicknames = c.cNicknames ? `Nickname: ${c.cNicknames}<br>` : '';
    const cReference = c.cReference ? `<br><h2>Reference Art:</h2><br><img src="${c.cReference}"><br><br>` : '';
    const cGallery = c.cGallery ? c.cGallery.length != 0 ? `<hr><h2>Gallery:</h2><div class="imgContainer">` + c.cGallery.map(imgSrc => `<img src="${imgSrc}">`).join('') + `</div><br>` : '' : '';
    const cAddOns = c.cAddOns ? `<br>${c.cAddOns}<br>` : '';
    const details = c.detail ? `<hr>${html}<br>` : '';
    const cRelations = c.cRelations ? c.cRelations.length != 0 ? `<hr><h2>Related Characters:</h2><div class="imgContainer">` + c.cRelations.map(rel => `<div class="card internal" data-href="${rel.cardId}" data-caption="${rel.relation}"></div>`).join('') + `</div><br>` : '' : '';

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
        ${cRelations}
    `;
    return html;
}





// --------------------------
// IMAGES
// --------------------------

// handle image preview overlay
document.addEventListener('click', (e) => {
    const img = e.target.closest('#detailViewContent img');
    if (!img) return;
    if (img.classList.contains("thumb")) return;

    const caption = img.dataset.caption ? `<h1 style="margin-top: 12px; margin-bottom: -10px;">${img.dataset.caption}</h1>` : '';
    const subcaption = caption && img.dataset.subcaption ? `<p style="color: color-mix(in srgb, var(--accentl) 75%, transparent)">${img.dataset.subcaption}</p>` : '';

    imageView.innerHTML = `<img src="${img.src}" alt="preview" ${caption ? 'data-hasCaption=true' : ''}>${caption}${subcaption}`;
    disableZoom();
    setLayoutViz(imageView, true);
    playSound('sfxPageOpen', SFX_PAGE_OPEN_VOL);

    imageView.addEventListener('click', () => { enableZoom(); setLayoutViz(imageView, false); playSound('sfxPageClose', SFX_PAGE_CLOSE_VOL); }, { once: true });
});

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





// --------------------------
// STARS
// --------------------------

// create star layers
function generateStarLayer(layerCount, starsPerLayer, l) {
    const layer = document.createElement('div');
    layer.classList.add('star-layer');
    layer.dataset.depth = 0.5 + (l / layerCount) * 1;
    for (let i = 0; i < starsPerLayer; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `-${Math.random() * 5}s`;
        layer.appendChild(star);
    }
    return layer;
}

// create starfield
function createStarfield(layerCount = 3, starsPerLayer = 30) {
    if (!starfield) return;
    for (let l = 0; l < layerCount; l++) {
        const layer = generateStarLayer(layerCount, starsPerLayer, l);
        starfield.appendChild(layer);
    }
}





// --------------------------
// SPLASHES
// --------------------------

// pick a splash at load
function pickSplash() {
    const splash = $(".splash");
    splash.innerHTML = splashLines[Math.floor(Math.random() * splashLines.length)];
}






// --------------------------
// AUDIOS
// --------------------------



// -------- bgm system ----------

// declare BGMs
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

// currently active background music
let currentBgm = "fyberverse";
let bgmEnabled = false;

// fade helper
function fadeVolume(audio, t, speed = 0.02) {
    const target = t * BGM_MASTER_VOL;
    if (!audio) return;
    clearInterval(audio._fadeInterval);

    // clamp speed to prevent overshooting
    const effectiveSpeed = Math.min(speed, 1); // Cap at 0.1 max

    audio._fadeInterval = setInterval(() => {
        const currentVol = audio.volume;
        const diff = target - currentVol;
        if (Math.abs(diff) < 0.01) {
            audio.volume = target;
            clearInterval(audio._fadeInterval);
            return;
        }
        let step = diff * 0.1;
        if (Math.abs(step) > effectiveSpeed) {
            step = (diff > 0 ? effectiveSpeed : -effectiveSpeed);
        }

        audio.volume = currentVol + step;
        audio.volume = Math.max(0, Math.min(target > currentVol ? target : 1, audio.volume));

    }, 50);
}

// start all BGMs with only one audible
function startAllBgm() {
    Object.entries(bgm).forEach(([key, audio]) => {
        audio.volume = (key === "fyberverse" ? 1 : 0) * BGM_MASTER_VOL;
        audio.play().catch(() => { });
    });
    currentBgm = "fyberverse";
    bgmEnabled = true;
    setButtonViz(playBgmBtn, false);
    updateSettingsButtonText('toggleMusic', 'Mute Music');
}



// button clicks : sfx
document.addEventListener('click', (e) => {
    if (e.target.closest('.detail-view.content button')
        || e.target.closest('.card .card-text-excerpt button')
        || e.target.closest('#UIPanelTop button')
        || e.target.closest('#UIPanelBottom button')) {
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

// button to play bgm
playBgmBtn.addEventListener("click", () => {
    if (!bgmEnabled) {
        startAllBgm();
    }
    playSound("sfxClick", SFX_CLICK_VOL);
});




// --------------------------
// SEARCH
// --------------------------

const searchBox = document.getElementById('searchBox');
const searchText = document.getElementById('searchText');
const cancelSearch = document.getElementById('cancelSearch');

function stripHTML(html) {
    return html.replace(/<[^>]+>/g, '');
}

// create search menu first
function createSearchMenu(title, subtitle, labels = []) {
    let search = {};
    const searchI = menuItems.findIndex(m => m.menuId === "search")
    if (searchI > -1) menuItems.splice(searchI, 1);
    search = {
        menuId: "search",
        hidden: true,
        invisible: true,
        title: title,
        subtitle: subtitle,
        labels: labels,
    }
    return menuItems.push(search)
}

// find cards
function findCards(q, searchType) {
    results = {};

    menuItems.forEach(menu => {
        if (menu.invisible) return false;
        if (!menu.labels) return false;

        const matches = cardFilter(menu, q, searchType);
        if (matches.length > 0) results[menu.menuId] = { menu, labels: matches }
    });

    return results;
}

// filter cards
function cardFilter(menu, q, searchType = null) {
    return menu.labels.filter(card => {
        if (!card.cardId) return false;
        if (searchType === "all") return true;
        if (searchType === "oc") return card.isCharacter;
        return (card.title && stripHTML(card.title).toLowerCase().includes(q)) ||
            (card.subtitle && stripHTML(card.subtitle).toLowerCase().includes(q)) ||
            (card.cSpecies && stripHTML(card.cSpecies).toLowerCase().includes(q)) ||
            (card.cPronouns && stripHTML(card.cPronouns).toLowerCase().includes(q)) ||
            (card.cGender && stripHTML(card.cGender).toLowerCase().includes(q)) ||
            (card.cSexuality && stripHTML(card.cSexuality).toLowerCase().includes(q)) ||
            (card.cNicknames && stripHTML(card.cNicknames).toLowerCase().includes(q)) ||
            (card.cAddons && stripHTML(card.cAddons).toLowerCase().includes(q));
    });
}

// find menus
function findMenus(q, searchType = null) {
    let results = menuItems.filter(menu => {
        if (menu.invisible) return false;
        if (searchType === "all") return true;
        if (searchType === "oc") return false;
        return (menu.title && menu.title.toLowerCase().includes(q)) || (menu.subtitle && menu.subtitle.toLowerCase().includes(q));
    });

    return results;
}

// push cards into result
function pushCards(cardFound) {
    const results = [];
    let resultsCounter = 0;
    cardFound.forEach(({ menu, labels }) => {
        if (!labels) return false;
        results.push({ title: `<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>Results from <a data-open-card="${menu.menuId}">${menu.title}</a>` });
        labels.forEach(c => { results.push({ ...c }); resultsCounter++; });
    });

    return { results, resultsCounter };
}


// push cards into result
function pushMenus(menuFound) {
    const results = [];
    let resultsCounter = 0;
    menuFound.forEach((menu) => {
        if (!menu) return false;
        results.push({ linkId: menu.menuId });
        resultsCounter++;
    });

    if (resultsCounter > 0) results.unshift({ title: `<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>Matching menus found:` });
    return { results, resultsCounter };
}

// show search menu
function showSearch(query, results, resultsCounter) {
    const searchTitle = `Results for "${query}"`;
    const searchSubtitle = `Found ${resultsCounter} item(s)`;
    const searchCards = results;
    createSearchMenu(searchTitle, searchSubtitle, searchCards);
    openMenuById('search');
    searchText.value = '';
}

// main search function
function search() {
    const query = searchText.value;
    const q = query.trim().toLowerCase();
    if (!q) return;

    // is query special?
    const special = specialSearch.find(s => s.query == q);
    if (special) {
        const results = [{ title: special.title, subtitle: special.subtitle, }]
        const resultsCounter = 0;
        showSearch(query, results, resultsCounter)
        return;
    }

    const searchType =
        q === "all" ? "all" :
            q === "oc" ? "oc" :
                q === "ocs" ? "oc" :
                    q === "character" ? "oc" :
                        q === "characters" ? "oc" :
                            null;

    // normal query search
    const cardFound = Object.values(findCards(q, searchType));
    const menuFound = Object.values(findMenus(q, searchType));

    const { results: cardResults, resultsCounter: cardResultsCounter } = pushCards(cardFound);
    const { results: menuResults, resultsCounter: menuResultsCounter } = pushMenus(menuFound);
    const results = cardResults.concat(menuResults);
    const resultsCounter = cardResultsCounter + menuResultsCounter

    // nothing found?
    if (resultsCounter == 0) {
        const results = [{ title: 'Nothing found.', subtitle: '', }]
        showSearch(query, results, resultsCounter)
        return;
    }

    showSearch(query, results, resultsCounter);
}

// searchbox functionality
function openSearchBox() { searchBox.showModal(); }

const searchBtn = document.getElementById('searchBtn')
searchBtn?.addEventListener('click', () => { openSearchBox(); });
searchBox.addEventListener('close', () => { if (searchText.value.trim() !== '') search(); });
searchText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBox.close();
    }
});

cancelSearch.addEventListener('click', () => {
    searchText.value = '';
    searchBox.close();
});







// --------------------------
// LAZY LOADER
// --------------------------

// initialize lazy loader
function initLazyLoader(root = document) {
    if (LOCAL_MODE) return;

    const images = root.querySelectorAll('img[src]:not([data-lazy-processed])');

    images.forEach(img => {
        if (img.classList.contains("card-thumb-flip")) return;
        const originalSrc = img.getAttribute('src');

        img.style.opacity = '0.2';

        if (root == detailView) {
            img.style.display = 'block';
            img.style.aspectRatio = '4 / 5';
            img.style.width = '90%';
            img.style.objectFit = 'cover';
            img.style.backgroundColor = 'var(--bg)';
        }

        // convert relative path to CDN path
        const finalSrc = originalSrc.startsWith('http')
            ? originalSrc
            : LAZY_BASE + originalSrc;

        img.dataset.src = finalSrc;
        img.removeAttribute('src');
        img.dataset.lazyProcessed = "true";
        if (root == detailView) img.dataset.lazyRoot = "detailView";

        // img.style.transition = "opacity 0.4s ease";
    });

    observeLazyImages();
}

// lazy observer handler
let lazyObserver;
function observeLazyImages() {
    if (LOCAL_MODE) return;

    if (!lazyObserver) {
        lazyObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const img = entry.target;

                img.onload = () => {
                    img.style.opacity = "1";
                    img.style.width = "";
                    img.style.aspectRatio = "";
                    img.style.objectFit = "";
                    if (img.dataset.lazyRoot == "detailView") img.style.backgroundColor = "";
                };

                img.src = img.dataset.src;
                img.removeAttribute('data-src');

                observer.unobserve(img);
            });
        }, {
            rootMargin: "100px",
            threshold: 0.01
        });
    }

    document.querySelectorAll('img[data-src]').forEach(img => {
        lazyObserver.observe(img);
    });
}






// --------------------------
// NAVIGATION
// --------------------------

// click logo to open specified card
function openLogo() {
    if (SIMPLE_MODE) return openMenuById('index');
    openSingle = true;
    const [menu, card] = menuLogoRedirect.split(":");
    if (menu && card) {
        openCardById(menu, card);
        return;
    }
    openMenuById(menu);
}
mainMenuLogo.addEventListener('click', () => { openLogo(); });
if (SIMPLE_MODE) mainMenu.style.scale = `${SIMPLE_MODE_MENU_LOGO_SCALE}`;

// click settings to open settings
settingsBtn.addEventListener('click', () => { openMenuById('settings') });

// back button
backBtn.addEventListener('click', () => { goBack(); });

// back button behavior
function goBack() {
    // was the card opened from single-card menu?
    if (openSingle) {
        openSingle = false;
        setButtonViz(rerollBtn, false);
        returnToMainMenu();
        return;
    }

    // if detail view is open -> go back to content view
    if (layoutViz(detailView)) {
        if (openFromReference) { openMenuById(openFromReference); openFromReference = null; return; }
        const m = getMenuData(currentMenu());
        changeBackBtnText(m.parent && !openSingle ? getMenuData(m.parent).title : 'Close')
        // detailViewContent.innerHTML = '';
        setLayoutViz(detailView, false);
        setLayoutViz(contentView, true);
        setHistoryState(contentView.dataset.currentMenuId);
        return;

        // if content view is open
    } else if (layoutViz(contentView)) {
        const parentMenu = getMenuData(currentMenu()).parent;
        // if parent menu exists
        if (parentMenu) { openMenuById(parentMenu); return; }

        // if no parent menu -> go back to main menu
        returnToMainMenu();
    }
}

// return to main menu
function returnToMainMenu() {
    blurMainMenu(false);
    setCurrentMenu(null);
    setLayoutViz(contentView, false);
    setLayoutViz(detailView, false);
    setButtonViz(backBtn, false);
    setButtonViz(settingsBtn, true);
    if (!bgmEnabled) setButtonViz(playBgmBtn, true);
    menuIsOpen = false;

    setHistoryState(null);
}

// internal link handler: <a data-open-card="q:id">
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-open-card]');
    if (!link) return;
    e.preventDefault();

    const ref = link.dataset.openCard.trim();
    const [menuCode, cardKey] = ref.split(':');
    if (menuCode && cardKey) {
        openCardById(menuCode, cardKey);
        return;
    }
    openMenuById(menuCode);
});





// --------------------------
// URL PARAMS ON LOAD
// --------------------------

// set the history state by rewriting the URL parameters
function setHistoryState(menuId, cardId = null) {
    if (!menuId) {
        history.pushState({}, '', window.location.pathname);
        return;
    }
    history.pushState({}, '', `?m=${menuId}${cardId ? `&i=${cardId}` : ''}`);
}

// wait for a card element to appear in the content grid (used for URL param loading)
async function waitForCard(cardId, timeout = 2000, interval = 50) {
    const start = performance.now();
    while (performance.now() - start < timeout) {
        const el = contentViewGrid.querySelector(`.card[data-id="${cardId}"]`);
        if (el) return el;

        await new Promise(r => setTimeout(r, interval));
    }
    return null;
}

// handle parameter loading and also popstate
async function loadAndPopstateHandler() {
    const params = new URLSearchParams(window.location.search);
    const menu = params.get('m');
    const card = params.get('i');

    const targetMenu = menuItems.find(m => m.menuId === menu);
    if (!targetMenu) {
        returnToMainMenu(); return;
    };

    openMenuById(targetMenu.menuId);
    if (card && targetMenu) {
        const cardEl = await waitForCard(card, 2000, 40);
        if (cardEl) openCard(cardEl, getCardData(menu, card));
    }
}





// --------------------------
// INIT
// --------------------------

// listen to window load and popstate
window.addEventListener('load', async () => { loadAndPopstateHandler(); pickSplash(); });
window.addEventListener('popstate', async () => { loadAndPopstateHandler(); })

// initialize card data before anything else
function initCardData() {
    menuItems.forEach(m => {
        m.labels.forEach(c => { c.cardParentId = m.menuId; });
    });
}

// initialize layout visibility
function initLayoutViz() {
    contentView.classList.add("no-transition");
    detailView.classList.add("no-transition");
    imageView.classList.add("no-transition");

    setLayoutViz(contentView, false);
    setLayoutViz(detailView, false);
    setLayoutViz(imageView, false);
}

// reset layout transition animation when a menu or card is open for the first time
function resetLayoutTransition() {
    contentView.classList.remove("no-transition");
    detailView.classList.remove("no-transition");
    imageView.classList.remove("no-transition");
}

// disable most transitions if simple mode is activated
if (SIMPLE_MODE) {
    contentView.classList.add("no-transition-at-all");
    detailView.classList.add("no-transition-at-all");
};

// initialize everything
if (!SIMPLE_MODE) createStarfield();
initCardData();
initLayoutViz();

setLayoutViz(UIPanelTop, false);
setLayoutViz(UIPanelBottom, false);
window.addEventListener('load', () => {
    setLayoutViz(loading, false);
    setLayoutViz(UIPanelTop, true);
    setLayoutViz(UIPanelBottom, true);
    initMainMenu();
    appLoaded = true;
});
