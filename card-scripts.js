/* --------------------------
    Settings
    -------------------------- */

// toggle sounds
let sfxIsMute = true;
let bgmStop = false;
function toggleSFXVol() {
    if (!sfxIsMute) {
        SFX_MASTER_VOL = 0;
        sfxIsMute = true;
        toggleSFX.textContent = "SFX: Off";
        updateSettingsButtonText('toggleSFX', 'SFX: Off');
        return;
    } else {
        SFX_MASTER_VOL = INIT_SFX_MASTER_VOL;
        sfxIsMute = false;
        toggleSFX.textContent = "SFX: On";
        updateSettingsButtonText('toggleSFX', 'SFX: On');
        return;
    }
}

function toggleBGM() {
    if (bgmEnabled) {
        if (!bgmStop) {
            fadeVolume(bgm[currentBgm], 0, 1);
            bgmStop = true;
            toggleMusic.textContent = "Music: Off";
            updateSettingsButtonText('toggleMusic', 'Music: Off');
            return;
        } else {
            fadeVolume(bgm[currentBgm], 1, 1);
            bgmStop = false;
            toggleMusic.textContent = "Music: On";
            updateSettingsButtonText('toggleMusic', 'Music: On');
            return;
        }
    } else {
        startAllBgm();
        toggleMusic.textContent = "Music: On";
        updateSettingsButtonText('toggleMusic', 'Music: On');
    }
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'toggleSFX') {
        e.preventDefault();
        toggleSFXVol();
    }

    if (e.target.id === 'toggleMusic') {
        e.preventDefault();
        toggleBGM();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'modeSwitch') {
        e.preventDefault();
        console.log('Mode Switch clicked');
        toggleViewMode();
    }
});


// Helper function to update button text in menuItems
function updateSettingsButtonText(buttonId, newText) {
    const settingsMenu = menuItems.find(m => m.menuId === 'settings');
    if (!settingsMenu) return;
    
    const audioSettingsLabel = settingsMenu.labels.find(l => l.cardId === 'audioSettings');
    if (!audioSettingsLabel) return;
    
    if (buttonId === 'toggleSFX') {
        audioSettingsLabel.excerpt = audioSettingsLabel.excerpt.replace(
            /<button[^>]*id="toggleSFX"[^>]*>.*?<\/button>/,
            `<button type="button" id="toggleSFX">${newText}</button>`
        );
    } else if (buttonId === 'toggleMusic') {
        audioSettingsLabel.excerpt = audioSettingsLabel.excerpt.replace(
            /<button[^>]*id="toggleMusic"[^>]*>.*?<\/button>/,
            `<button type="button" id="toggleMusic">${newText}</button>`
        );
    }
}


// init card scripts
function cardScriptHandler(menu, label) {
}