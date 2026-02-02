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

    // Nadirune
    if (label.cardId === 'nadirune') {
        const nadiruneInput = document.getElementById('nadiruneInput');
        const nadiruneOutput = document.getElementById('nadiruneOutput');

        const nadiruneInputRev = document.getElementById('nadiruneInputRev');
        const nadiruneOutputRev = document.getElementById('nadiruneOutputRev');

        copyNadiruneRevBtn.addEventListener('click', async () => { copyToClipboard(copyNadiruneRevBtn, nadiruneOutputRev); });

        // latin to nadirune
        nadiruneInput.addEventListener('input', () => {
            const input = nadiruneInput.value;
            const output = input;
            nadiruneOutput.value = output;
        });

        // nadirune to latin
        nadiruneInputRev.addEventListener('input', () => {
            const input = nadiruneInputRev.value;
            const output = input;
            nadiruneOutputRev.value = output;
        });

        // nadirune keyboard
        const nadiruneKeys = $$('.nadiruneKeys');
        createKeyboard(nadiruneKeys, nadiruneInputRev);
    }

    // Zenpen
    if (label.cardId === 'zenpen') {
        const zenpenInput = document.getElementById('zenpenInput');
        const zenpenOutput = document.getElementById('zenpenOutput');

        const zenpenInputRev = document.getElementById('zenpenInputRev');
        const zenpenOutputRev = document.getElementById('zenpenOutputRev');

        copyZenpenRevBtn.addEventListener('click', async () => { copyToClipboard(copyZenpenRevBtn, zenpenOutputRev); });

        // latin to zenpen
        zenpenInput.addEventListener('input', () => {
            const input = zenpenInput.value;
            const output = input;
            zenpenOutput.value = output;
        });

        // zenpen to latin
        zenpenInputRev.addEventListener('input', () => {
            const input = zenpenInputRev.value;
            const output = input;
            zenpenOutputRev.value = output;
        });

        // zenpen keyboard
        const zenpenKeys = $$('.zenpenKeys');
        createKeyboard(zenpenKeys, zenpenInputRev);
    }
}

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

// init card scripts
function focusCardScriptHandler(label) {
    converterHandler(label);
}