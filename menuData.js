/* --------------------------
    WEBSITE MENU DATA
    -------------------------- */

// Metadata
const lastUpdated = 'November 20th, 2025';
const version = '0.2.2';

// Main menu data array
menuItems = [
    /* --------------------------
    Menu Template
    -------------------------- */
    {
        q: 'menuTemplate',                    // REQUIRED: Unique identifier (alphanumeric, no spaces)
        name: 'Menu Template Example',        // Menu name and title
        showName: false,                      // Show name in orbit
        subtitle: 'This is a menu example',   // Short description
        image: 'images/temp2.png',            // Orbit thumbnail image
        color: 'var(--color-15)',             // Menu color (hex, CSS var, or blank)
        orbit: 3,                             // INTEGER: Orbit layer placement
        scale: 1,                             // Menu size in orbit
        hidden: true,                         // Hide from orbit (accessible via links only)
        noFocus: true,                        // Exclude from tab selection and search
        labels: [
            // CARDS WITH THUMBNAILS
            {
                cardId: 'normalCard',         // REQUIRED: Unique card identifier
                title: 'Normal Card',
                excerpt: 'With thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp2.png'
            },
            {
                cardId: 'urlCard',
                title: 'URL Card',
                excerpt: 'With thumbnail',
                url: 'https://x.com/artifyber',  // External URL redirect
                image: 'images/temp2.png'
            },
            {
                cardId: 'unclickableCard',
                title: 'Unclickable Card',
                excerpt: 'With thumbnail',
                unclickable: true,            // Non-clickable info card
                image: 'images/temp2.png'
            },

            // CARDS WITHOUT THUMBNAILS
            {
                cardId: 'normalCardPlain',
                title: 'Normal Card',
                excerpt: 'Without thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.'
            },
            {
                cardId: 'urlCardPlain',
                title: 'URL Card',
                excerpt: 'With thumbnail',
                url: 'https://x.com/artifyber'
            },
            {
                cardId: 'unclickableCardPlain',
                title: 'Unclickable Card',
                excerpt: 'With thumbnail',
                unclickable: true
            },

            // MENU-LINKED CARDS
            {
                // Cards without cardId become separators
                title: 'Menu-Link examples',
                excerpt: 'Cards that open another menu',
            },
            {
                cardId: 'menuLinkCard1',
                linkId: 'deltadim'  // Links to menu with matching 'q' property
            },
            {
                cardId: 'menuLinkCard2',
                linkId: 'floriverse'
            },
            {
                cardId: 'menuLinkCard3',
                linkId: 'info'
            },
        ]
    },

    /* --------------------------
    Actual Website Data
    -------------------------- */
    
    // Orbit 1
    {
        // Deltadim
        name: 'Deltadim',
        q: 'deltadim',
        subtitle: 'Delta Dimension',
        image: 'icons/deltadim.png',
        color: 'var(--color-1)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                excerpt: 'About Deltadim',
                detail:
                    `Deltadim is the main universe portrayed in Daily Art+. Its characteristics are similar to our own universe. Terra is where the main plot takes place. It's an Earth-like planet inhabited by furries, humanoids, and other creatures.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Deltadim. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/deltadim.png'
            },
            {
                cardId: 'deltadim-teksui',
                linkId: 'deltadim-teksui',
            },
            {
                cardId: 'deltadim-chromasia',
                linkId: 'deltadim-chromasia',
            },
            {
                cardId: 'deltadim-deltaspace',
                linkId: 'deltadim-deltaspace',
            },
        ]
    },
    {
        q: 'deltadim-teksui',
        name: 'Teksui',
        subtitle: 'Terra',
        image: 'images/deltadim-teksui.png',
        color: 'var(--color-9)',
        hidden: true,
        labels: [
            {
                cardId: 'deltadim',
                linkId: 'deltadim',
            },
            {
                cardId: 'artibun',
                title: 'Artibun',
                excerpt: '',
                detail:
                    `Species: Rabbit<br>
                Pronouns: She/Any<br>
                Gender: Bigender<br>
                Sexuality: Bisexual<br>
                Nickname: Arti, Bunbun<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:articat">Articat</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/artibun-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artibun-c.png">
                    <img src="images/c/artibun-c2.png">
                    <img src="images/c/artibun-c3.png">
                    <img src="images/c/artibun-c4.png">
                    <img src="images/c/artibun-c5.png">
                    <img src="images/c/artibun-c6.png">
                </div>
                `,
                image: 'images/i/artibun-i.png',
                isCharacter: true
            },
            {
                cardId: 'articat',
                title: 'Articat',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: He/Any<br>
                Gender: Male<br>
                Sexuality: Bisexual<br>
                Nickname: Arti, Kiki<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:artibun">Artibun</a><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/articat-c.png">
                    <img src="images/c/articat-c2.png">
                    <img src="images/c/articat-c3.png">
                    <img src="images/c/articat-c4.png">
                    <img src="images/c/articat-c5.png">
                    <img src="images/c/articat-c6.png">
                </div>
                `,
                image: 'images/i/articat-i.png',
                isCharacter: true
            },
            {
                cardId: 'artifox',
                title: 'Artifox',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: He/They<br>
                Gender: Trans-male<br>
                Sexuality: Bisexual<br>
                Nickname: Arti, Fofo, Foxxo<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artifox-c.png">
                    <img src="images/c/artifox-c2.png">
                    <img src="images/c/artifox-c3.png">
                    <img src="images/c/artifox-c4.png">
                    <img src="images/c/artifox-c5.png">
                    <img src="images/c/artifox-c6.png">
                </div>
                `,
                image: 'images/i/artifox-i.png',
                isCharacter: true
            },
            {
                cardId: 'artifish',
                title: 'Artifish',
                excerpt: '',
                detail:
                    `Species: Cat + Shark<br>
                Pronouns: They<br>
                Gender: Non-Binary<br>
                Sexuality: Demisexual<br>
                Nickname: Arti, Fifi<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:artilope">Artilope</a><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artifish-c.png">
                    <img src="images/c/artifish-c2.png">
                    <img src="images/c/artifish-c3.png">
                    <img src="images/c/artifish-c4.png">
                    <img src="images/c/artifish-c5.png">
                    <img src="images/c/artifish-c6.png">
                </div>
                `,
                image: 'images/i/artifish-i.png',
                isCharacter: true
            },
            {
                cardId: 'artigoat',
                title: 'Artigoat',
                excerpt: '',
                detail:
                    `Species: Goat<br>
                Pronouns: He<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                Nickname: Arti, Baba<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:artipup">Artipup</a><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artigoat-c.png">
                    <img src="images/c/artigoat-c2.png">
                    <img src="images/c/artigoat-c3.png">
                    <img src="images/c/artigoat-c4.png">
                    <img src="images/c/artigoat-c5.png">
                    <img src="images/c/artigoat-c6.png">
                </div>
                `,
                image: 'images/i/artigoat-i.png',
                isCharacter: true
            },
            {
                cardId: 'artilope',
                title: 'Artilope',
                excerpt: '',
                detail:
                    `Species: Jackalope<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Demisexual<br>
                Nickname: Arti, Lolo, Lope<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:artifish">Artifish</a><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artilope-c.png">
                    <img src="images/c/artilope-c2.png">
                    <img src="images/c/artilope-c3.png">
                    <img src="images/c/artilope-c4.png">
                    <img src="images/c/artilope-c5.png">
                    <img src="images/c/artilope-c6.png">
                </div>
                `,
                image: 'images/i/artilope-i.png',
                isCharacter: true
            },
            {
                cardId: 'artipup',
                title: 'Artipup',
                excerpt: '',
                detail:
                    `Species: Dog<br>
                Pronouns: He/They<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                Nickname: Arti, Arfy<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:artigoat">Artigoat</a><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artipup-c.png">
                    <img src="images/c/artipup-c2.png">
                    <img src="images/c/artipup-c3.png">
                    <img src="images/c/artipup-c4.png">
                    <img src="images/c/artipup-c5.png">
                    <img src="images/c/artipup-c6.png">
                </div>
                `,
                image: 'images/i/artipup-i.png',
                isCharacter: true
            },
            {
                cardId: 'artineko',
                title: 'Artineko',
                excerpt: '',
                detail:
                    `Species: Human (cat cosplay)<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Aroace<br>
                Nickname: Arti, Nay, Neko<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artineko-c.png">
                    <img src="images/c/artineko-c2.png">
                    <img src="images/c/artineko-c3.png">
                    <img src="images/c/artineko-c4.png">
                    <img src="images/c/artineko-c5.png">
                    <img src="images/c/artineko-c6.png">
                </div>
                `,
                image: 'images/i/artineko-i.png',
                isCharacter: true
            },
            {
                cardId: 'eros',
                title: 'Eros',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She/They<br>
                Gender: Trans-female<br>
                Sexuality: Demisexual<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:sora">Sora</a><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/eros-c.png"><br>
                    <img src="images/c/eros-c2.png"><br>
                    <img src="images/c/eros-c3.png"><br>
                    <img src="images/c/eros-c4.png"><br>
                    <img src="images/c/eros-c5.png"><br>
                    <img src="images/c/eros-c6.png"><br>
                </div>
                `,
                image: 'images/i/eros-i.png',
                isCharacter: true
            },
            {
                cardId: 'sora',
                title: 'Sora',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She/They<br>
                Gender: Trans-female<br>
                Sexuality: Bisexual<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:eros">Eros</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/sora-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/sora-c.png"><br>
                    <img src="images/c/sora-c2.png"><br>
                </div>
                `,
                image: 'images/i/sora-i.png',
                isCharacter: true
            },
            {
                cardId: 'furfy',
                title: 'Furfy',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Lesbian<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/furfy-c.png"><br>
                    <img src="images/c/furfy-c2.png"><br>
                    <img src="images/c/furfy-c3.png"><br>
                    <img src="images/c/furfy-c4.png"><br>
                    <img src="images/c/furfy-c5.png"><br>
                </div>
                `,
                image: 'images/i/furfy-i.png',
                isCharacter: true
            },
            {
                cardId: 'card',
                title: 'Card',
                excerpt: '',
                detail:
                    `Species: Cardboard<br>
                Pronouns: She/Any<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:gift">Gift</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/card-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/card-c.png"><br>
                    <img src="images/c/card-c2.png"><br>
                    <img src="images/c/card-c3.png"><br>
                    <img src="images/c/card-c4.png"><br>
                </div>
                `,
                image: 'images/i/card-i.png',
                isCharacter: true
            },
            {
                cardId: 'gift',
                title: 'Gift',
                excerpt: '',
                detail:
                    `Species: Giftbox<br>
                Pronouns: She/Any<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:card">Card</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/gift-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/gift-i.png',
                isCharacter: true
            },
            {
                cardId: 'elise',
                title: 'Elise',
                excerpt: '',
                detail:
                    `Species: Sea Bunny<br>
                Pronouns: She/They<br>
                Gender: Female<br>
                Sexuality: Lesbian<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/elise-c.png"><br>
                </div>
                `,
                image: 'images/i/elise-i.png',
                isCharacter: true
            },
            {
                cardId: 'fika',
                title: 'Fika',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Heterosexual<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:rai">Rai</a><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/fika-c.png"><br>
                    <img src="images/c/fika-c2.png"><br>
                </div>
                `,
                image: 'images/i/fika-i.png',
                isCharacter: true
            },
            {
                cardId: 'rai',
                title: 'Rai',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: He<br>
                Gender: Male<br>
                Sexuality: Heterosexual<br>
                <br>
                S/O: <a data-open-card="deltadim-teksui:fika">Fika</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/rai-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/rai-c.png"><br>
                    <img src="images/c/rai-c2.png"><br>
                </div>
                `,
                image: 'images/i/rai-i.png',
                isCharacter: true
            },
        ]
    },
    {
        q: 'deltadim-chromasia',
        name: 'Chromasia',
        subtitle: 'Terra',
        image: 'images/deltadim-chromasia.png',
        color: 'var(--color-14)',
        hidden: true,
        labels: [
            {
                cardId: 'deltadim',
                linkId: 'deltadim',
            },
            {
                cardId: 'shirley',
                title: 'Shirley',
                excerpt: '',
                detail:
                    `Species: Cat + Fox<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Heterosexual<br>
                Nickname: Manda, Alamanda<br>
                <br>
                S/O: <a data-open-card="deltadim-chromasia:rose">Rose</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/shirley-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/shirley-c.png"><br>
                    <img src="images/c/shirley-c2.png"><br>
                    <img src="images/c/shirley-c3.png"><br>
                    <img src="images/c/shirley-c4.png"><br>
                    <img src="images/c/shirley-c5.png"><br>
                    <img src="images/c/shirley-c6.png"><br>
                </div>
                `,
                image: 'images/i/shirley-i.png',
                isCharacter: true
            },
            {
                cardId: 'rose',
                title: 'Rose',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: He/Any<br>
                Gender: Male<br>
                Sexuality: Heterosexual<br>
                Nickname: Rosey<br>
                <br>
                S/O: <a data-open-card="deltadim-chromasia:shirley">Shirley</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/rose-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/rose-c.png"><br>
                    <img src="images/c/rose-c2.png"><br>
                    <img src="images/c/rose-c3.png"><br>
                </div>
                `,
                image: 'images/i/rose-i.png',
                isCharacter: true
            },
            {
                cardId: 'hana',
                title: 'Hana',
                excerpt: '',
                detail:
                    `Species: Bee<br>
                Pronouns: She/They<br>
                Gender: Demigirl<br>
                Sexuality: Lesbian<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/hana-c.png"><br>
                    <img src="images/c/hana-c2.png"><br>
                    <img src="images/c/hana-c3.png"><br>
                    <img src="images/c/hana-c4.png"><br>
                    <img src="images/c/hana-c5.png"><br>
                </div>
                `,
                image: 'images/i/hana-i.png',
                isCharacter: true
            },
            {
                cardId: 'caramella',
                title: 'Caramella',
                excerpt: '',
                detail:
                    `Species: Cat + Shrimp<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                Nickname: Mella<br>
                <br>
                S/O: <a data-open-card="deltadim-chromasia:azurey">Azurey</a><br>
                <br>
                Design made by <a href="https://x.com/M3ko_Ne" target="_blank">M3ko_Ne</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/caramella-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/caramella-c.png"><br>
                    <img src="images/c/caramella-c2.png"><br>
                    <img src="images/c/caramella-c3.png"><br>
                    <img src="images/c/caramella-c4.png"><br>
                    <img src="images/c/caramella-c5.png"><br>
                    <img src="images/c/caramella-c6.png"><br>
                </div>
                `,
                image: 'images/i/caramella-i.png',
                isCharacter: true
            },
            {
                cardId: 'azurey',
                title: 'Azurey',
                excerpt: '',
                detail:
                    `Species: Cat + Shark<br>
                Pronouns: He/They<br>
                Gender: Demiboy<br>
                Sexuality: Pansexual<br>
                Nickname: Azu<br>
                <br>
                S/O: <a data-open-card="deltadim-chromasia:caramella">Caramella</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/azurey-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/azurey-c.png"><br>
                    <img src="images/c/azurey-c2.png"><br>
                    <img src="images/c/azurey-c3.png"><br>
                </div>
                `,
                image: 'images/i/azurey-i.png',
                isCharacter: true
            },
            {
                cardId: 'mida',
                title: 'Mida',
                excerpt: '',
                detail:
                    `Species: Medusa Cat<br>
                Pronouns: She/They<br>
                Gender: Female<br>
                Sexuality: Pansexual<br>
                Nickname: Meowdusa<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/mida-c.png"><br>
                    <img src="images/c/mida-c2.png"><br>
                </div>
                `,
                image: 'images/i/mida-i.png',
                isCharacter: true
            },
            {
                cardId: 'lilac',
                title: 'Lilac',
                excerpt: '',
                detail:
                    `Species: Angel-Demon Kitty Thing<br>
                Pronouns: She/Any<br>
                Gender: Female<br>
                Sexuality: Pansexual<br>
                <br>
                Adopted from <a href="https://x.com/naycookye" target="_blank">naycookye</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/lilac-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/lilac-i.png',
                isCharacter: true
            },
            {
                cardId: 'moka',
                title: 'Moka',
                excerpt: '',
                detail:
                    `Species: Dog<br>
                Pronouns: He/They<br>
                Gender: Trans-Male<br>
                Sexuality: Bisexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/moka-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/moka-i.png',
                isCharacter: true
            },
            {
                cardId: 'nameless',
                title: 'Nameless',
                excerpt: '',
                detail:
                    `Species: Fennec + Cat<br>
                Pronouns: He/They<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/nameless-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/nameless-c.png"><br>
                </div>
                `,
                image: 'images/i/nameless-i.png',
                isCharacter: true
            },
            {
                cardId: 'nuki',
                title: 'Nuki',
                excerpt: '',
                detail:
                    `Species: Tanuki<br>
                Pronouns: She/Any<br>
                Gender: Female<br>
                Sexuality: Asexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/nuki-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/nuki-c.png"><br>
                    <img src="images/c/nuki-c2.png"><br>
                </div>
                `,
                image: 'images/i/nuki-i.png',
                isCharacter: true
            },
            {
                cardId: 'sawo',
                title: 'Sawo',
                excerpt: '',
                detail:
                    `Species: Bunny<br>
                Pronouns: He/They<br>
                Gender: Male<br>
                Sexuality: Probably Gay<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/sawo-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/sawo-i.png',
                isCharacter: true
            },
        ]
    },
    {
        q: 'deltadim-deltaspace',
        name: 'Deltaspace',
        subtitle: 'Somewhere in space',
        image: 'images/deltadim-deltaspace.png',
        color: 'var(--color-15)',
        hidden: true,
        labels: [
            {
                cardId: 'deltadim',
                linkId: 'deltadim',
            },
            {
                cardId: 'skitty',
                title: 'Singularikitty',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: Any Pronouns<br>
                Gender: Pangender<br>
                Sexuality: Aroace<br>
                Nickname: Skitty<br>
                <br>
                Adopted from <a href="https://x.com/C0denameDelta" target="_blank">C0denameDelta</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/skitty-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/skitty-c.png"><br>
                    <img src="images/c/skitty-c2.png"><br>
                    <img src="images/c/skitty-c3.png"><br>
                    <img src="images/c/skitty-c4.png"><br>
                    <img src="images/c/skitty-c5.png"><br>
                    <img src="images/c/skitty-c6.png"><br>
                </div>
                `,
                image: 'images/i/skitty-i.png',
                isCharacter: true
            },
            {
                cardId: 'gamma',
                title: 'Gamma',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/gamma-c.png"><br>
                    <img src="images/c/gamma-c2.png"><br>
                    <img src="images/c/gamma-c3.png"><br>
                    <img src="images/c/gamma-c4.png"><br>
                </div>
                `,
                image: 'images/i/gamma-i.png',
                isCharacter: true
            },
            {
                cardId: 'micro',
                title: 'Micro',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: They<br>
                Gender: Non-Binary<br>
                Sexuality: Omnisexual<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/micro-c.png"><br>
                    <img src="images/c/micro-c2.png"><br>
                    <img src="images/c/micro-c3.png"><br>
                    <img src="images/c/micro-c4.png"><br>
                    <img src="images/c/micro-c5.png"><br>
                </div>
                `,
                image: 'images/i/micro-i.png',
                isCharacter: true
            },
            {
                cardId: 'articani',
                title: 'Articani',
                excerpt: '',
                detail:
                    `Species: Lucani<br>
                Pronouns: He/They<br>
                Gender: Male<br>
                Sexuality: Heterosexual<br>
                Nickname: Cani<br>
                <br>
                Lucani open-species by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/articani-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/articani-c.png"><br>
                </div>
                `,
                image: 'images/i/articani-i.png',
                isCharacter: true
            },
            {
                cardId: 'ryon',
                title: 'Ryon',
                excerpt: '',
                detail:
                    `Species: Lucani<br>
                Pronouns: Any Pronouns<br>
                Gender: Non-Binary<br>
                Sexuality: Asexual<br>
                Nickname: Baryon<br>
                <br>
                Lucani open-species by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/ryon-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/ryon-c.png"><br>
                </div>
                `,
                image: 'images/i/ryon-i.png',
                isCharacter: true
            },
        ]
    },

    {
        // Floriverse
        name: 'Floriverse',
        q: 'floriverse',
        subtitle: 'Florie Universe',
        image: 'icons/floriverse.png',
        color: 'var(--color-2)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                excerpt: 'About Floriverse',
                detail:
                    `
                    Floriverse is a universe of flories, sentient floral creatures, with Klorofil as its main setting, a planet similar to Earth where the main characters live.<br>
                    <br>
                    Anyone that enters Floriverse instantly transforms into a florie. However, flories who leave Floriverse retains their form.<br>
                    <h4>What's in this page</h4>
                    This page list all flories in separate categories based on the Floriverse album they associate with, as well as uncategorized ones.<br>`,
                image: 'icons/floriverse.png'
            },
            {
                cardId: 'uncat',
                title: 'Uncategorized',
                excerpt: 'Flories with no associated album',
                detail:
                    `
                    <h2>Uncategorized Flories</h2>
                    Click a florie to view its name
                    <div class="imgContainer">
                    <img src="images/flories/uncat/Zep.png" data-caption="Zep" data-subcaption="Alien flower - Non-binary"><br>
                    <img src="images/flories/uncat/Mintscreen.png" data-caption="Mintscreen" data-subcaption="Robot florie - Male"><br>
                    <img src="images/flories/uncat/Kau.png" data-caption="Kau" data-subcaption="Cauliflower - Non-binary"><br>
                    <img src="images/flories/uncat/Sweetbreaker.png" data-caption="Sweetbreaker" data-subcaption="Tulip - Male"><br>
                    <img src="images/flories/uncat/Cuby.png" data-caption="Cuby" data-subcaption="Slimy blueberry - Male"><br>
                    <img src="images/flories/uncat/Blizzi.png" data-caption="Blizzi" data-subcaption="Ice flower - Non-binary"><br>
                    <img src="images/flories/uncat/Plugika.png" data-caption="Plugika" data-subcaption="Electric plug florie - Female"><br>
                    <img src="images/flories/uncat/Tessa.png" data-caption="Tessa" data-subcaption="Tulip - Genderless"><br>
                    <img src="images/flories/uncat/Gem.png" data-caption="Gem" data-subcaption="Gem - Female"><br>
                    <img src="images/flories/uncat/Anvre.png" data-caption="Anvre" data-subcaption="Tulip - Male"><br>
                    <img src="images/flories/uncat/Latrice.png" data-caption="Latrice" data-subcaption="Bellflower - Male"><br>
                    <img src="images/flories/uncat/CactunAndPipin.png" data-caption="Cactun & Pipin" data-subcaption="Cactus - Male and Female respectively"><br>
                    <img src="images/flories/uncat/Sa.png" data-caption="Sa" data-subcaption="Sawblade Flower - Male"><br>
                    <img src="images/flories/uncat/Chloe.png" data-caption="Chloe" data-subcaption="Four-leaf clover - Female"><br>
                    <img src="images/flories/uncat/Teknia.png" data-caption="Teknia" data-subcaption="Robot flower - Female"><br>
                    <img src="images/flories/uncat/Artiflow.png" data-caption="Artiflow" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/uncat/Artidell.png" data-caption="Artidell" data-subcaption="Catdelion - Male"><br>
                    <img src="images/flories/uncat/Kappa.png" data-caption="Kappa" data-subcaption="Sunflower - Male"><br>
                    <img src="images/flories/uncat/Sunflette.png" data-caption="Sunflette" data-subcaption="Sunflower - Female"><br>
                    <img src="images/flories/uncat/Strawrberry.png" data-caption="Strawrberry" data-subcaption="Strawberrikitty - Male"><br>
                    <img src="images/flories/uncat/Lyte.png" data-caption="Lyte" data-subcaption="Robot berry - Female"><br>
                    <img src="images/flories/uncat/Fyra.png" data-caption="Fyra" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/uncat/Therra.png" data-caption="Therra" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/uncat/DJMuseberry.png" data-caption="DJ Museberry" data-subcaption="Berry - Male"><br>
                    <img src="images/flories/uncat/Lineko.png" data-caption="Lineko" data-subcaption="Cat lemon - Male"><br>
                    <img src="images/flories/uncat/Pompy.png" data-caption="Pompy" data-subcaption="Allium - Female"><br>
                    <img src="images/flories/uncat/Beep.png" data-caption="Beep" data-subcaption="Tulip - Genderless"><br>
                    <img src="images/flories/uncat/Sweetree.png" data-caption="Sweetree" data-subcaption="Candy tree - Non-binary"><br>
                    <img src="images/flories/uncat/Eco.png" data-caption="Eco" data-subcaption="Cloudy cottonflower - Male"><br>
                    <img src="images/flories/uncat/Cryoflow.png" data-caption="Cryoflow" data-subcaption="Frozen flower - Male"><br>
                    <img src="images/flories/uncat/Delia.png" data-caption="Delia" data-subcaption="Dandelion - Female"><br>
                    <img src="images/flories/uncat/Spinny.png" data-caption="Spinny" data-subcaption="Berry with wind turbine - Male"><br>
                    <img src="images/flories/uncat/Aero.png" data-caption="Aero" data-subcaption="Baloon tulip - Genderless"><br>
                    <img src="images/flories/uncat/Enila.png" data-caption="Enila" data-subcaption="Fruit with broken stem - Female"><br>
                    <img src="images/flories/uncat/Tikao.png" data-caption="Tikao" data-subcaption="Megaphone-head florie - Male"><br>
                    <img src="images/flories/uncat/Flaany.png" data-caption="Flaany" data-subcaption="Upside-down tulip - Female"><br>
                    <img src="images/flories/uncat/B-na.png" data-caption="B-na" data-subcaption="Tulip - Non-binary"><br>
                    <img src="images/flories/uncat/Kraka.png" data-caption="Kraka" data-subcaption="Cactus monster - Male"><br>
                    <img src="images/flories/uncat/Azerium.png" data-caption="Azerium" data-subcaption="Robot tulip - Non-binary"><br>
                    <img src="images/flories/uncat/Vo.png" data-caption="Vo" data-subcaption="Ghost tulip - Genderless"><br>
                    <img src="images/flories/uncat/Smog.png" data-caption="Smog" data-subcaption="Pollutant - Genderless"><br>
                    <img src="images/flories/uncat/Niane.png" data-caption="Niane" data-subcaption="Tulip - Female"><br>
                    <img src="images/flories/uncat/Neru.png" data-caption="Neru" data-subcaption="Tulip - Male"><br>
                    <img src="images/flories/uncat/Viona.png" data-caption="Viona" data-subcaption="Venus flytrap - Female"><br>
                    <img src="images/flories/uncat/Phyana.png" data-caption="Phyana" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/uncat/Nell.png" data-caption="Nell" data-subcaption="Popcorn?? - Male"><br>
                    <img src="images/flories/uncat/Voni.png" data-caption="Voni" data-subcaption="Void tulip - Non-binary"><br>
                    <img src="images/flories/uncat/Mizudria.png" data-caption="Mizudria" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/uncat/Suneea.png" data-caption="Suneea" data-subcaption="Sunflower - Female"><br>
                    <img src="images/flories/uncat/Acidzer.png" data-caption="Acidzer" data-subcaption="Acid tulip - Genderless"><br>
                    <img src="images/flories/uncat/Mia.png" data-caption="Mia" data-subcaption="Potted plant - Female"><br>
                    </div>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                    `,
                image: 'images/flories/strawlineko-pfp.png'
            },
            {
                cardId: 'fvvanilla',
                title: 'Floriverse',
                excerpt: 'Album',
                detail:
                    `
                    Released: October 5th, 2023<br>
                    Total tracks: 10<br>
                    Total length: 32m 16s<br>
                    <a href="https://open.spotify.com/album/0AGxggSyuXqGdYLk0D7pbF?si=4Eej22G-RcOnbu8XIagHWQ" target="_blank">Spotify album link</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fv-i.png"><br>
                    <hr>
                    <h2>Associated Flories</h2>
                    Click a florie to view its name
                    <div class="imgContainer">
                    <img src="images/flories/fv-potto.png" data-caption="Potto" data-subcaption="Potted plant - Male"><br>
                    <img src="images/flories/fv-twinkle.png" data-caption="Twinkle" data-subcaption="Star flower - Female"><br>
                    <img src="images/flories/fv-strawmon.png" data-caption="Strawmon" data-subcaption="Glass-head tulip - Male"><br>
                    <img src="images/flories/fv-nocto.png" data-caption="Nocto" data-subcaption="Spirit tulip - Genderless"><br>
                    <img src="images/flories/fv-furflow.png" data-caption="Furflow" data-subcaption="Catdelion - Female"><br>
                    <img src="images/flories/fv-pana.png" data-caption="Pana" data-subcaption="Pancake tulip - Female"><br>
                    <img src="images/flories/fv-kosmaya.png" data-caption="Kosmaya" data-subcaption="Exotic flower - Female"><br>
                    <img src="images/flories/fv-pinkly.png" data-caption="Pinkly" data-subcaption="Tulip - Female"><br>
                    <img src="images/flories/fv-mincha.png" data-caption="Mincha" data-subcaption="Jasmine - Female"><br>
                    <img src="images/flories/fv-lan.png" data-caption="Lan" data-subcaption="Lemon - Male"><br>
                    </div>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                    `,
                image: 'images/fv-i.png'
            },
            {
                cardId: 'fvdelta',
                title: 'Floriverse : Delta',
                excerpt: 'Album',
                detail:
                    `
                    Released: March 3rd, 2024<br>
                    Total tracks: 32<br>
                    Total length: 1hr 37m<br>
                    <a href="https://open.spotify.com/album/2PNIG5k8lEGQ6fSuMUn7ir?si=BO2liD1rSpq7Wna6xTksYQ" target="_blank">Spotify album link</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fvd-i.png"><br>
                    <hr>
                    <h2>Associated Flories</h2>
                    Click a florie to view its name
                    <div class="imgContainer">
                    <img src="images/flories/fvd-starple.png" data-caption="Starple" data-subcaption="Tulip - Male"><br>
                    <img src="images/flories/fvd-chrora.png" data-caption="Chrora" data-subcaption="Exotic flower - Non-Binary"><br>
                    <img src="images/flories/fvd-orply.png" data-caption="Orply" data-subcaption="Tulip - Female"><br>
                    <img src="images/flories/fvd-tiram.png" data-caption="Tiram" data-subcaption="Mushroom - Female"><br>
                    <img src="images/flories/fvd-nimibi.png" data-caption="Nimibi" data-subcaption="Cloudy flower - Female"><br>
                    <img src="images/flories/fvd-slump.png" data-caption="Slump" data-subcaption="Rock with kelps - Male"><br>
                    <img src="images/flories/fvd-pio.png" data-caption="Pio" data-subcaption="Berry - Male"><br>
                    <img src="images/flories/fvd-yana.png" data-caption="Yana" data-subcaption="Tulip - Female"><br>
                    <img src="images/flories/fvd-looni.png" data-caption="Looni" data-subcaption="Fruit - Female"><br>
                    <img src="images/flories/fvd-chocopop.png" data-caption="Chocopop" data-subcaption="Chocoflower - Male"><br>
                    <img src="images/flories/fvd-staz.png" data-caption="Staz" data-subcaption="Pistachio - Male"><br>
                    <img src="images/flories/fvd-delly.png" data-caption="Delly" data-subcaption="Catdelion - Male"><br>
                    <img src="images/flories/fvd-sprinkly.png" data-caption="Sprinkly" data-subcaption="Potted cakeflower - Male"><br>
                    <img src="images/flories/fvd-ecno.png" data-caption="Ecno" data-subcaption="Multi-flower"><br>
                    <img src="images/flories/fvd-disaton.png" data-caption="Disaton" data-subcaption="Cottonbun - Female"><br>
                    <img src="images/flories/fvd-protoberries.png" data-caption="Protoberries" data-subcaption="Berries"><br>
                    <img src="images/flories/fvd-pipix.png" data-caption="Pipix" data-subcaption="Pixel flower - Female"><br>
                    <img src="images/flories/fvd-pico.png" data-caption="Pico" data-subcaption="Robot flower - Male"><br>
                    <img src="images/flories/fvd-starlila.png" data-caption="Starlila" data-subcaption="Transgender flower - Female"><br>
                    <img src="images/flories/fvd-wina.png" data-caption="Wina" data-subcaption="Charred flower - Female"><br>
                    <img src="images/flories/fvd-fret.png" data-caption="Fret" data-subcaption="Tulip - Male"><br>
                    <img src="images/flories/fvd-azka.png" data-caption="Azka" data-subcaption="Angel - Genderless"><br>
                    <img src="images/flories/fvd-cherro.png" data-caption="Cherro" data-subcaption="Tomatoes"><br>
                    <img src="images/flories/fvd-floorion.png" data-caption="Floorion" data-subcaption="Potted robot flower - Genderless"><br>
                    <img src="images/flories/fvd-stell-a.png" data-caption="Stell-A" data-subcaption="Black hole flower - Genderless"><br>
                    <img src="images/flories/fvd-datum.png" data-caption="Datum" data-subcaption="Digital flower - Genderless"><br>
                    <img src="images/flories/fvd-poloniloo.png" data-caption="Poloniloo" data-subcaption="Polonium flower - Male"><br>
                    <img src="images/flories/fvd-grayscale.png" data-caption="Grayscale" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/fvd-erwith.png" data-caption="Erwith" data-subcaption="Flower - Male"><br>
                    <img src="images/flories/fvd-fyzer.png" data-caption="Fyzer" data-subcaption="Florifyber - Genderless"><br>
                    <img src="images/flories/fvd-kloroforo.png" data-caption="Kloroforo" data-subcaption="Robot flower - Male"><br>
                    </div>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                    `,
                image: 'images/fvd-i.png'
            },
            {
                cardId: 'fvepsilon',
                title: 'Floriverse : Epsilon',
                excerpt: 'Album',
                detail:
                    `
                    Released: June 4th, 2025<br>
                    Total tracks: 48<br>
                    Total length: 2hr 36m<br>
                    <a href="https://open.spotify.com/album/2qpLiyGRBhRHggKZSJUYbj?si=j0kxk_nfQ9u4bmv1iZmj3Q" target="_blank">Spotify album link</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fve-i.png"><br>
                    <hr>
                    <h2>Associated Flories</h2>
                    Click a florie to view its name
                    <div class="imgContainer">
                    <img src="images/flories/fve-solaris.png" data-caption="Solaris" data-subcaption="Fire flower - Female"><br>
                    <img src="images/flories/fve-trix.png" data-caption="Trix" data-subcaption="Dandelion - Female"><br>
                    <img src="images/flories/fve-lux.png" data-caption="Lux" data-subcaption="Exotic flower - Male"><br>
                    <img src="images/flories/fve-glitter.png" data-caption="Glitter" data-subcaption="Tulip - Male"><br>
                    <img src="images/flories/fve-fomfz.png" data-caption="Fomfz" data-subcaption="Tree - Female"><br>
                    <img src="images/flories/fve-bion.png" data-caption="Bion" data-subcaption="Spirit flower - Male"><br>
                    <img src="images/flories/fve-zoey.png" data-caption="Zoey" data-subcaption="Mushroom - Female"><br>
                    <img src="images/flories/fve-hera.png" data-caption="Hera" data-subcaption="Goddess of time - Female"><br>
                    <img src="images/flories/fve-isla.png" data-caption="Isla" data-subcaption="Palm tree - Female"><br>
                    <img src="images/flories/fve-azira.png" data-caption="Azira" data-subcaption="Blueberry - Male"><br>
                    <img src="images/flories/fve-misty.png" data-caption="Misty" data-subcaption="Catdelion - Female"><br>
                    <img src="images/flories/fve-nya.png" data-caption="Nya" data-subcaption="Catdelion - Female"><br>
                    <img src="images/flories/fve-atto.png" data-caption="Atto" data-subcaption="Catdelion - Male"><br>
                    <img src="images/flories/fve-clara.png" data-caption="Clara" data-subcaption="Cottonbun - Female"><br>
                    <img src="images/flories/fve-lyra.png" data-caption="Lyra" data-subcaption="Cottonbun - Female"><br>
                    <img src="images/flories/fve-strawnilla.png" data-caption="Strawnilla" data-subcaption="Poptart berry - Male"><br>
                    <img src="images/flories/fve-poppers.png" data-caption="Poppers" data-subcaption="Berries"><br>
                    <img src="images/flories/fve-aurelia.png" data-caption="Aurelia" data-subcaption="Zinnia - Female"><br>
                    <img src="images/flories/fve-dysis.png" data-caption="Dysis" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/fve-butter.png" data-caption="Butter" data-subcaption="Tulip - Female"><br>
                    <img src="images/flories/fve-bell.png" data-caption="Bell" data-subcaption="Mistletoe - Female"><br>
                    <img src="images/flories/fve-nila.png" data-caption="Nila" data-subcaption="Tulip - Female"><br>
                    <img src="images/flories/fve-zest.png" data-caption="Zest" data-subcaption="Lemon - Male"><br>
                    <img src="images/flories/fve-corrode.png" data-caption="Corrode" data-subcaption="Charred tulip - Male"><br>
                    <img src="images/flories/fve-amalgamapot.png" data-caption="Amalgamapot" data-subcaption="Amalgamation - Multi-florie"><br>
                    <img src="images/flories/fve-posie.png" data-caption="Posie" data-subcaption="Multi-flower"><br>
                    <img src="images/flories/fve-nonsense.png" data-caption="Nonsense (Florie)" data-subcaption="Shapeshifter - Non-binary"><br>
                    <img src="images/flories/fve-torq.png" data-caption="Torq" data-subcaption="Mechanical flower - Male"><br>
                    <img src="images/flories/fve-persen.png" data-caption="Persen" data-subcaption="Exotic flower - Genderless"><br>
                    <img src="images/flories/fve-terentia.png" data-caption="Terentia" data-subcaption="Flower - Female"><br>
                    <img src="images/flories/fve-lumina.png" data-caption="Lumina" data-subcaption="Aquatic mushroom - Non-binary"><br>
                    <img src="images/flories/fve-triplequestionmark.png" data-caption="???" data-subcaption="Unknown florie"><br>
                    <img src="images/flories/fve-upsidedowntriplequestionmark.png" data-caption="¿¿¿" data-subcaption="Unknown Florie"><br>
                    <img src="images/flories/fve-ghoargh.png" data-caption="Ghoargh" data-subcaption="Prehistoric plant - Male"><br>
                    <img src="images/flories/fve-hyd-124.png" data-caption="HYD-124" data-subcaption="Black-hole flower - Male"><br>
                    <img src="images/flories/fve-thorn.png" data-caption="Thorn" data-subcaption="Wilted rose - Male"><br>
                    <img src="images/flories/fve-reva.png" data-caption="Reva" data-subcaption="Cactus - Female"><br>
                    <img src="images/flories/fve-ash.png" data-caption="Ash" data-subcaption="Burning flower - Non-binary"><br>
                    <img src="images/flories/fve-flailer.png" data-caption="Flailer" data-subcaption="Femtanyl bootleg florie - Female"><br>
                    <img src="images/flories/fve-mang.png" data-caption="Mang" data-subcaption="Potted mango tree - Male"><br>
                    <img src="images/flories/fve-zappie.png" data-caption="Zappie" data-subcaption="Bee tulip - Male"><br>
                    <img src="images/flories/fve-kai.png" data-caption="Kai" data-subcaption="Clouds - Non-binary"><br>
                    <img src="images/flories/fve-console.png" data-caption="Console" data-subcaption="Robot bush - Genderless"><br>
                    <img src="images/flories/fve-xi.png" data-caption="Xi" data-subcaption="Angel - Genderless"><br>
                    <img src="images/flories/fve-floriecookies.png" data-caption="Floriecookies" data-subcaption="Cookies"><br>
                    <img src="images/flories/fve-nini.png" data-caption="Nini" data-subcaption="Mystical lemon - Female"><br>
                    <img src="images/flories/fve-xyxiv.png" data-caption="Xyxiv" data-subcaption="Angel - Genderless"><br>
                    <img src="images/flories/fve-nau.png" data-caption="Nau" data-subcaption="Flower - Female"><br>
                    </div>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                    `,
                image: 'images/fve-i.png'
            },
            {
                cardId: 'fvzeta',
                title: 'Floriverse : Zeta',
                excerpt: 'Album',
                detail:
                    ``,
                image: 'images/fvz-i.png'
            },
        ]
    },

    {
        // Digirel
        name: 'Digirel',
        q: 'digirel',
        subtitle: 'Digital Realm',
        image: 'icons/digirel.png',
        color: 'var(--color-3)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                excerpt: 'About Digirel',
                detail:
                    `This universe does not exist independently but is derived from other universes where computers and servers can exist. It’s the result of multiversal intercommunication. “Digitalias” wander throughout Digirel and can interact with other universes through hardware connections.<br>
                    <h4>What's in this page</h4>
                    This page list all characters in separate categories based on the Digirel album they associate with, as well as uncategorized ones.<br>`,
                image: 'icons/digirel.png'
            },
            {
                cardId: 'soap',
                title: 'Soap',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: They/Any<br>
                Gender: Non-Binary<br>
                Sexuality: Asexual<br>
                Nickname: Foam<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/soap-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/soap-c.png">
                    <img src="images/c/soap-c2.png">
                    <img src="images/c/soap-c3.png">
                </div>
                `,
                image: 'images/i/soap-i.png',
                isCharacter: true
            },
            {
                cardId: 'semyk',
                title: 'Semyk',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: Any Pronouns<br>
                Gender: Any Gender<br>
                Sexuality: who cares bro<br>
                Nickname: CMYK, D43DK177Y.exe<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/semyk-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/semyk-c.png">
                    <img src="images/c/semyk-c2.png">
                    <img src="images/c/semyk-c3.png">
                </div>
                `,
                image: 'images/i/semyk-i.png',
                isCharacter: true
            },
            {
                cardId: 'artifolder',
                title: 'Artifolder',
                excerpt: '',
                detail:
                    `Species: Folder Bee<br>
                Pronouns: Any Pronouns<br>
                Gender: Female<br>
                Sexuality: Pansexual<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/artifolder-c.png">
                </div>
                `,
                image: 'images/i/artifolder-i.png',
                isCharacter: true
            },
            {
                cardId: 'byte',
                title: 'Byte',
                excerpt: '',
                detail:
                    `Species: Folder Cat<br>
                Pronouns: He/They<br>
                Gender: Demiboy<br>
                Sexuality: Asexual<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/byte-c.png">
                </div>
                `,
                image: 'images/i/byte-i.png',
                isCharacter: true
            },
            {
                cardId: 'cherry',
                title: 'Cherry',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She/They<br>
                Gender: Demigirl<br>
                Sexuality: Bisexual<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/cherry-c.png">
                    <img src="images/c/cherry-c2.png">
                </div>
                `,
                image: 'images/i/cherry-i.png',
                isCharacter: true
            },
            {
                cardId: 'ebta',
                title: 'Ebta',
                excerpt: '',
                detail:
                    `Species: Slime Bunny<br>
                Pronouns: She/They/Any<br>
                Gender: Pangender<br>
                Sexuality: Bisexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/ebta-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/ebta-c.png">
                    <img src="images/c/ebta-c2.png">
                </div>
                `,
                image: 'images/i/ebta-i.png',
                isCharacter: true
            },
            {
                cardId: 'placeholder',
                title: '&lt;placeholder&gt;',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: Any Pronouns<br>
                Gender: None<br>
                Sexuality: None<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/placeholder-c.png">
                    <img src="images/c/placeholder-c2.png">
                    <img src="images/c/placeholder-c3.png">
                </div>
                `,
                image: 'images/i/placeholder-i.png',
                isCharacter: true
            },
            {
                cardId: 'sakura',
                title: 'Sakura',
                excerpt: '',
                detail:
                    `Species: Digitalia<br>
                Pronouns: She/They<br>
                Gender: Female<br>
                Sexuality: Lesbian<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/sakura-c.png">
                </div>
                `,
                image: 'images/i/sakura-i.png',
                isCharacter: true
            },
            {
                cardId: 'quanta',
                title: 'Quanta',
                excerpt: '',
                detail:
                    `Species: Hologram Cat<br>
                Pronouns: They<br>
                Gender: Non-Binary<br>
                Sexuality: Pansexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/quanta-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/quanta-i.png',
                isCharacter: true
            },
        ]
    },

    {
        // Nansenz
        name: 'Nansenz',
        q: 'nansenz',
        subtitle: 'World of Nonsense',
        image: 'icons/nansenz.png',
        color: 'var(--color-4)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                excerpt: 'About Nansenz',
                detail:
                    `
                    A world beyond logical limits where anything can exist. It’s like a fever dream. Anything you imagine or could be imagined, objects with limbs, cube-shaped planets, galaxies made of spaghetti, there are no boundaries in Nansenz. The entire purpose of this universe is to contain everything that defy all sense of logic.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nansenz. This include character information, reference art, and picture gallery of each character.<br>
                    <br>
                    oh and also this useless ticker (it shows nothing):<br>
                    <br>
                    <div class="ticker-bar">
                        <div class="ticker-text"></div>
                    </div>`,
                image: 'icons/nansenz.png'
            },
            {
                cardId: 'cancerman',
                title: 'Cancerman',
                excerpt: '',
                detail:
                    `Species: Cigarette<br>
                Pronouns: He<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                Nickname: Cigarman, Cigar<br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/cancerman-c.png"><br>
                </div>
                `,
                image: 'images/i/cancerman-i.png',
                isCharacter: true
            },
            {
                cardId: 'mu',
                title: 'Mu',
                excerpt: '',
                detail:
                    `Species: "Cabbit"<br>
                Pronouns: She/Any<br>
                Gender: Genderless<br>
                Sexuality: Aroace<br>
                Nickname: μ<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/mu-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/mu-i.png',
                isCharacter: true
            },
        ]
    },

    {
        // Hizen
        name: 'Hizen',
        q: 'hizen',
        subtitle: 'Hi-Zenith',
        image: 'icons/hizen.png',
        color: 'var(--color-5)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                excerpt: 'About Hizen',
                detail:
                    `While this universe may represent a sort of heaven, it’s not just an “afterlife” (in fact, there are many realms beyond heaven and hell in the Fyberverse). This is where entities considered angelic (or derived from such origins) were born. The universe is depicted as infinite layers of floating islands.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Hizen. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/hizen.png'
            },
            {
                cardId: 'lyne',
                title: 'Lyne',
                excerpt: '',
                detail:
                    `Species: Polygon<br>
                Pronouns: They<br>
                Gender: Non-Binary<br>
                Sexuality: Bisexual<br>
                Nickname: Polyne<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/lyne-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/lyne-c.png"><br>
                </div>
                `,
                image: 'images/i/lyne-i.png',
                isCharacter: true
            },
        ]
    },

    {
        // Nadir
        name: 'Nadir',
        q: 'nadir',
        subtitle: 'Void of Nadir',
        image: 'icons/nadir.png',
        color: 'var(--color-6)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                excerpt: 'About Nadir',
                detail:
                    `Nadir can be seen as the inverse of Hizen. While often portrayed as hell, it isn’t fiery or chaotic. Instead, it’s quiet, dark, and dreadfully still, as though watched by an omnipresent gaze. Anything that enters this void slowly desaturates and decays as its essence of life fades away.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nadir. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/nadir.png'
            },
            {
                cardId: 'infineko',
                title: 'Infineko',
                excerpt: '',
                detail:
                    `Species: Infinity Symbol<br>
                Pronouns: He/Any<br>
                Gender: None<br>
                Sexuality: None<br>
                Nickname: ∞<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/infineko-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/infineko-i.png',
                isCharacter: true
            },
            {
                cardId: 'ugo',
                title: 'Ugo',
                excerpt: '',
                detail:
                    `Species: Vortex<br>
                Pronouns: He<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/ugo-r.png"><br>
                <br>
                <a data-open-card="info:ocrules">Character rules</a>
                `,
                image: 'images/i/ugo-i.png',
                isCharacter: true
            },
            {
                cardId: 'unknown',
                title: '???',
                excerpt: '',
                detail:
                    `Species: ???<br>
                Pronouns: ???<br>
                Gender: ???<br>
                Sexuality: ???<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/c/Δ-c.png">
                    <img src="images/c/Δ-c2.png">
                </div>
                `,
                image: 'images/i/Δ-i.png',
                isCharacter: true
            },
        ]
    },

    // Orbit 2
    {
        // Random
        name: 'Random Character',
        q: 'random',
        showName: true,
        image: 'icons/oc-random.png',
        color: 'var(--color-12)',
        orbit: 2,
        scale: 1.5,
        noFocus: true,
        labels: [
            {
                cardId: 'random',
            }
        ],
    },
    {
        name: 'Daily Art+',
        showName: true,
        q: 'dailyartplus',
        subtitle: '',
        image: 'icons/dailyartplus.png',
        color: 'var(--color-8)',
        orbit: 2,
        scale: 1.5,
        labels: [
            {
                cardId: 'dailyartplus',
                title: 'Daily Art+',
                excerpt: '',
                detail:
                    `
                    Showing latest posts from my Instagram.<br><br>
                    <div id="instaCard">
                        <iframe
                            src="https://cdn.lightwidget.com/widgets/ce1b2c5863eb58798710d296e980a26c.html"
                            scrolling="no"
                            allowtransparency="true"
                            class="lightwidget-widget"
                            style="width:100%;border:0;overflow:hidden;">
                        </iframe>
                    </div>
                    `,
                image: 'icons/l-instagram.png'
            },
        ]
    },

    // Orbit 4
    {
        // Information
        name: 'Information',
        q: 'info',
        subtitle: 'Information about Artifyber and this website',
        showName: true,
        image: 'icons/info.png',
        color: 'var(--color-3)',
        orbit: 4,
        scale: 1.5,
        labels: [
            {
                cardId: 'about',
                title: 'About Artifyber',
                excerpt: 'artifyber@gmail.com',
                detail:
                    `<h2>Hello!</h2> I'm Artifyber, an Indonesian furry artist who likes to draw and make music.<br>
                    <br>
                    I taught myself how to draw since 2021 and produce music for even longer since 2019. Only in the late 2021 did I start to appear online under an old alias which I no longer use or associate with.<br>
                    <br>
                    Under my old alias, I started my online presence on a mobile game platform called Fancade. It's a game creation platform for mobile users and it was peak back then. I made a lot... and I mean A LOT of games. Most are simple, some are quite complicated. I was very active on the community and it taught me a lot about game development and art. The games I created are still available on the app if you want to play them. In fact if you've played Fancade, you've probably played my games without you realizing!<br>
                    <br>
                    After my Fancade days, I started to focus on art more. I started my first daily art challenge on January 1st, 2023. It wasn't called Daily Art+ back then. No significant worldbuilding or lore, just a challenge to develop a consistent art style. I succeeded and I kept going. At halfway through the year I rebranded to Artifyber and started developing a little bit of lore and worldbuilding. I also released my first album "Floriverse" around that time.<br>
                    <br>
                    <hr>
                    A year passed, and I'm now continuing my art hobby with the Daily Art+ series starting 2024. Drawing is the main activity I spent online the most. I mainly draw my own furry characters, but I also take art commissions from time to time. I quite enjoy drawing my own characters as I find it rather relaxing.<br>
                    <br>
                    Music production is also my hobby. Some say i have a diverse taste in music with the amount of genres i've produced. Honestly, i don't even know what kind of genre i'm making half of the time. I just throw 'n' slice samples and draw melodies and if it sounds good, then it's good. Even if it sounds unusual to a majority.<br>
                    <br>
                    I've been doing art and music on a phone since the beginning and still am to this day. Even though I have a more powerful PC, I still prefer being mobile with my work. I use Ibis Paint for drawing and FL Studio Mobile for music production. Just a phone and my fingers.<br>
                    <br>
                    In the future I want to be a game developer and create something out of the worlds and characters i've made. It's a dream of mine to create an actual game and I still have a long way to go.<br>
                    <br>
                    <hr>
                    All done. Thank you for enjoying what I make :3<br>
                    <img src="images/fyberhappy.png"">
                    `,
                image: 'images/temp3.png'
            },
            {
                cardId: 'ocrules',
                title: 'Character Rules',
                excerpt: `Rules regarding Artifyber's characters`,
                detail:
                    `
                    Last updated: November 12th, 2025<br>
                    Feel free to reach out to me for anything else not listed.
                    <h2>Fanart Policy</h2>
                    <h4>Allowed:</h4>
                    <ul>
                        <li>Single-character</li><br>
                        <li>Paired with another Artifyber character</li><br>
                        <li>Paired with your own character</li><br>
                        <li>Shipping my characters with each other<br>
                            <small>Preferably canonical relationship but it isn't necessary</small></li><br>
                        <li>Suggestive content<br>
                            <small>It will not be reposted or boosted by my profile</small></li><br>
                    </ul>
                    <h4>Not Allowed:</h4>
                    <ul>
                        <li>Modifying the design of my characters</li><br>
                        <li>Creating all kinds of hateful or political content</li><br>
                        <li>Using my characters in a commercial setting unless i gave permission to do so</li><br>
                        <li>Using generative AI to create a fanart</li><br>
                    </ul>
                    <details>
                        <summary>About 18+ fanarts</summary>
                        <br>
                        If you are creating adult content of my characters, please put proper warnings and filters.<br>
                        <br>
                        Adult contents will not be reposted or boosted to my profile. Do not tag me when you post your adult content. Although, feel free to notify me privately.
                        <ul>
                            <li>Do not draw my characters paired with your own character in NSFW settings</li><br>
                            <li>Do not draw fetish art of my characters</li><br>
                            <li>Do not draw my characters with exotic / animal-like genitalia<br>
                                <small>There are a few exceptions to this with aquatic characters and flories. Please ask me beforehand</small></li><br>
                            <li>Do not create adult content out of these characters:</li><br>
                            <ul>
                                <li>Artineko, Artimouse, Articani, Singularikitty, Gamma</li><br>
                                <li>Everything from <a data-open-card="hizen">Hizen</a></li><br>
                            </ul>
                    </details>
                    <hr>
                    <h2>Character Derivatives</h2>
                    You are allowed to create a new character that is a derivative of the following as long as your character is not too similar to one of mine:
                    <ul>
                        <li>All kinds of florie in <a data-open-card="floriverse">Floriverse</a></li><br>
                        <li>All kinds of object-heads or object characters in <a data-open-card="nansenz">Nansenz</a></li><br>
                        <li>Polygon species of <a data-open-card="hizen">Hizen</a></li><br>
                    </ul>
                    `,
                image: 'icons/oc-rules.png'
            },
            {
                cardId: 'webinfo',
                title: `
                    <h2 style='margin-bottom: -12px'>Website Info</h2><br>
                    <p style='color: color-mix(in srgb, var(--accentl) 75%, transparent); font-size: 11px'>
                        Updated: ${lastUpdated}<br>
                        Version: ${version}<br>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCardsCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalMenusCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCharacterCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalSplashCounter"></div>
                    </p>
                    `,
                excerpt: `
                <br>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'keybinds',
                title: `
                    <h2 style='margin-bottom: -12px'>Keyboard Shortcut</h2><br>
                    <p style='color: color-mix(in srgb, var(--accentl) 75%, transparent); font-size: 14px'>
                        ESC = Go back<br>
                        C = Center view<br>
                    </p>
                    `,
                excerpt: `
                <br>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                title: 'Developer Section',
            },
            {
                cardId: 'menuTemplate',
                linkId: 'menuTemplate',
            },
            {
                cardId: 'loopTest',
                linkId: 'loopTest',
            }
        ]
    },

    {
        // Links
        name: 'Links',
        q: 'links',
        subtitle: 'All links to my social media',
        showName: true,
        image: 'icons/earth.png',
        color: 'var(--color-9)',
        orbit: 4,
        scale: 1.5,
        labels: [
            {
                cardId: 'twitter',
                title: 'Twitter',
                excerpt: '',
                url: 'https://twitter.com/artifyber',
                image: 'icons/l-twitter.png'
            },
            {
                cardId: 'instagram',
                title: 'Instagram',
                excerpt: '',
                url: 'https://instagram.com/artifyber',
                image: 'icons/l-instagram.png'
            },
            {
                cardId: 'bluesky',
                title: 'BlueSky',
                excerpt: '',
                url: 'https://bsky.app/profile/artifyber.xyz',
                image: 'icons/l-bluesky.png'
            },
            {
                cardId: 'discord',
                title: 'Discord Server',
                excerpt: '',
                url: 'https://discord.gg/mvZT3ANvSS',
                image: 'icons/l-discord.png'
            },
            {
                cardId: 'youtube',
                title: 'YouTube',
                excerpt: '',
                url: 'https://youtube.com/@artifyber',
                image: 'icons/l-youtube.png'
            },
            {
                cardId: 'spotify',
                title: 'Spotify Artist',
                excerpt: '',
                url: 'https://open.spotify.com/intl-id/artist/41B16M5LFJKcwUW3L75PVh',
                image: 'icons/l-spotify.png'
            },
            {
                cardId: 'newgrounds',
                title: 'Newgrounds',
                excerpt: '',
                url: 'https://artifyber.newgrounds.com/',
                image: 'icons/l-newgrounds.png'
            },
            {
                cardId: 'soundcloud',
                title: 'SoundCloud',
                excerpt: '',
                url: 'https://on.soundcloud.com/3V5Uz',
                image: 'icons/l-soundcloud.png'
            },
            {
                cardId: 'toyhouse',
                title: 'Toyhouse',
                excerpt: '',
                url: 'https://toyhou.se/artifyber',
                image: 'icons/l-toyhouse.png'
            },
            {
                cardId: 'carrd',
                title: 'Carrd',
                excerpt: 'Backup website just in case',
                url: 'https://artifyber.carrd.co/',
                image: 'icons/l-carrd.png'
            },
            {
                cardId: 'alts',
                title: 'Alternates',
                excerpt: 'All of my alternative accounts on various platforms',
                detail:
                    `Floriverse:<br>
                <a href="https://x.com/Floriverse" target="_blank">Twitter</a><br>
                <a href="https://bsky.app/profile/floriverse.artifyber.xyz" target="_blank">BlueSky</a><br>
                <br>
                Artibun:<br>
                <a href="https://bsky.app/profile/bunny.artifyber.xyz" target="_blank">BlueSky</a><br>
                <br>
                Articat:<br>
                <a href="https://x.com/articatty" target="_blank">Twitter</a><br>
                <br>
                Artyfiber:<br>
                <a href="https://x.com/artyfiber" target="_blank">Twitter</a><br>
                <br>
                `,
                image: 'icons/l-others.png'
            },
        ]
    },

    {
        // Commissions
        name: 'Commissions',
        q: 'comms',
        subtitle: 'Information about art/music commissions',
        showName: true,
        image: 'icons/dollar.png',
        color: 'var(--color-11)',
        orbit: 4,
        scale: 1.5,
        labels: [
            {
                cardId: 'kofi',
                title: 'Ko-Fi',
                excerpt: 'For a method of payment',
                url: 'https://ko-fi.com/artifyber',
                image: 'icons/comm-kofi.png'
            },
            {
                cardId: 'tos',
                title: 'Information and ToS',
                excerpt: 'Rules and how to commission',
                detail:
                    `
                    <h2>Before You Commission:</h2>     
                    <ul>
                    <li>Please check my <a href="https://x.com/artifyber" target="_blank">Twitter</a> account for my current commission status. It should be written on my bio as either one of these:</li><br>
                    <ul>
                        <li>Open: I am available for new commissions.</li><br>
                        <li>Full: I am currently at full capacity and cannot take new commissions.</li><br>
                        <li>Ask: I may be available for new commissions. Please ask me first by sending me a direct message.</li><br>
                        <li>Closed: I am not accepting any new commissions at the moment.</li><br>
                    </ul>
                    <li>Please read the Terms of Service listed below. By commissioning me you acknowledge that you agree to my Terms of Service.</li><br>
                    </ul>
                    <hr>
                    <h2>Art Commission T.O.S</h2>
                    <ul>
                    <li>The customer understands they are paying for a digital commission, and will receive a digital file (e.g. JPG, PNG) of the commissioned artwork. Artworks are made using Ibis Paint and the customer will not receive any raw project file after the commission is complete. The customer will not receive any physical item in the mail from this purchase either.</li><br>
                    <li>Payment is upfront via Paypal invoice or Ko-Fi.</li><br>
                    <li>There is no limitation on character request. But keep in mind that I'm a primarily furry artist and i am more comfortable drawing species i'm interested in (cats, rabbits, dogs and foxes).</li><br>
                    <li>Please provide details and references beforehand as i may not provide sketches or WIPs during the process. You can provide minor revision to the final product later.</li><br>
                    <li>By default the artwork size for icon commissions will be in 2048x2048 (1:1) while thigh-ups and full-bodies will be in 2000x2500 (4:5). Please specify beforehand for custom canvas size.</li><br>
                    <li>The estimated turnaround time is a day to 2 weeks.</li><br>
                    <li>If the commission is private, please let me know in advance and the name will be anonymous.</li><br>
                    <li>The illustration should only be used in personal case. No commercial use allowed.</li><br>
                    <li>I do not allow my artworks to be feed into AI art generators or being used in any AI-related services. A copyright strike will be issued if this is violated.</li><br>
                    <li>You have the right to ask for a full refund only if the commission has not been started yet.</li><br>
                    <li>If you are interested send a DM on my <a href="https://x.com/artifyber" target="_blank">Twitter</a>. However if you want to contact me through Discord, please notify me first. My Discord DM's are only open to close friends or commissioners with my permission.</li><br>
                    </ul>
                    <h4>What I'm willing to draw:</h4>
                    <ul>
                    <li>Any species that isn't too complex (Furries, humanoid, a selection of scalies)</li><br>
                    <li>Plants and flowers</li><br>
                    <li>Background or interior</li><br>
                    <li>Cosmic or space theme</li><br>
                    <li>Simple icons or logo</li><br>
                    </ul>
                    <h4>What I'm NOT willing to draw:</h4>
                    <ul>
                    <li>Mechas or complicated designs</li><br>
                    <li>Images intended to promote hate or bigotry</li><br>
                    </ul>
                    <hr>
                    <h2>Music Commission T.O.S</h2>
                    <ul>
                    <li>The customer understands they are paying for a digital file (e.g. MP3, WAV, FLAC, OGG) of the commissioned track. Music is made using FL Studio Mobile and the customer will not receive any raw project file after the commission is complete. The customer will not receive any physical item in the mail from this purchase either.</li><br>
                    <li>Payment is upfront via Paypal invoice or Ko-Fi.</li><br>
                    <li>Please provide details regarding the music. Such as the theme, BPM, genre, time signature, etc. I have flexibility on song genres but keep in mind that i'm more capable on composing the following: Chiptune, Breakcore, Hardcore, Techno, and Trance.</li><br>
                    <li>You may provide additional samples ONLY if you have the full rights with it. Samples must be in MP3, WAV, FLAC, or DWP file format.</li><br>
                    <li>You can request individual stems export or make the song looped (no extra charge required!)</li><br>
                    <li>I do not make remix, cover, or bootleg of already existing songs without the artist's consent. However i'm open on remaking my own songs.</li><br>
                    <li>I do not provide lyrics or vocal recording. If you want vocals, please provide the vocal recording yourself.</li><br>
                    <li>The estimated turnaround time is a week to a month depending on the complexity of the request.</li><br>
                    <li>Commissioned music will be posted to my SoundCloud account unless private. If the commission is private or you wish to not publish it, please let me know in advance.</li><br>
                    <li>Commissioned music can be used for personal purpose. Commercial use can be discussed.</li><br>
                    <li>I do not allow my music to be feed into AI music generators or being used in any AI-related services. A copyright strike will be issued if this is violated.</li><br>
                    <li>You have the right to ask for a full refund only if the commission has not been started yet.</li><br>
                    <li>Only for this type of commission, you'll have to contact me through Discord. This is necessary to keep file sharing easier (e.g. WIPs and samples). Please DM my <a href="https://x.com/artifyber" target="_blank">Twitter</a> to ask for a Discord DM request approval.</li><br>
                    </ul>
                    `,
                image: 'icons/comm-tos.png'
            },
            {
                cardId: 'art',
                title: 'Art Pricing',
                excerpt: 'With examples',
                detail:
                    `
                    <h2><i>PLEASE READ MY <a data-open-card="comms:tos">T.O.S</a> BEFORE COMMISIONING ME.</i></h2>
                    <hr>
                    <h2>Full-body</h2>
                    80 USD per character<br>
                    <div class="imgContainer">
                    <img src="images/comms/cfb-1.png"><br>
                    <img src="images/comms/cfb-2.png"><br>
                    <img src="images/comms/cfb-3.png"><br>
                    <img src="images/comms/cfb-4.png"><br>
                    <img src="images/comms/cfb-5.png"><br>
                    <img src="images/comms/cfb-6.png"><br>
                    </div>
                    <hr>
                    <h2>Thigh-up</h2>
                    60 USD per character<br>
                    <div class="imgContainer">
                    <img src="images/comms/ctu-1.png"><br>
                    <img src="images/comms/ctu-2.png"><br>
                    <img src="images/comms/ctu-3.png"><br>
                    <img src="images/comms/ctu-4.png"><br>
                    <img src="images/comms/ctu-5.png"><br>
                    <img src="images/comms/ctu-6.png"><br>
                    </div>
                    <hr>
                    <h2>Icon</h2>
                    35 USD per character<br>
                    <div class="imgContainer">
                    <img src="images/comms/ci-1.png"><br>
                    <img src="images/comms/ci-2.png"><br>
                    <img src="images/comms/ci-3.png"><br>
                    <img src="images/comms/ci-4.png"><br>
                    <img src="images/comms/ci-5.png"><br>
                    <img src="images/comms/ci-6.png"><br>
                    <img src="images/comms/ci-7.png"><br>
                    <img src="images/comms/ci-8.png"><br>
                    <img src="images/comms/ci-9.png"><br>
                    </div>
                    <hr>
                    <h2>Background</h2>
                    <h4>Simple / Geometric = Free</h4>
                    Can also be transparent<br>
                    <div class="imgContainer">
                    <img src="images/c/artibun-c2.png"><br>
                    <img src="images/c/artigoat-c4.png"><br>
                    <img src="images/c/micro-c.png"><br>
                    </div>
                    <h4>Nature = +10 USD</h4>
                    This include clouds and space-themed background<br>
                    <div class="imgContainer">
                    <img src="images/c/artigoat-c2.png"><br>
                    <img src="images/c/skitty-c3.png"><br>
                    <img src="images/c/furfy-c.png"><br>
                    </div>
                    <h4>Many objects = +30 USD</h4>
                    Cityscapes, interior, etc.<br>
                    <div class="imgContainer">
                    <img src="images/c/artifox-c4.png"><br>
                    <img src="images/c/eros-c2.png"><br>
                    <img src="images/c/articat-c5.png"><br>
                    </div>
                    `,
                image: 'icons/comm-art.png'
            },
            {
                cardId: 'music',
                title: 'Music Pricing',
                excerpt: 'With examples',
                detail:
                    `
                    <h2><i>PLEASE READ MY <a data-open-card="comms:tos">T.O.S</a> BEFORE COMMISIONING ME.</i></h2>
                    <hr>
                    <h2>Range A = 50 USD per minute</h2>
                    Simple beat, minimal layers, genre examples: chiptune, elevator music, ambient, lo-fi, minimal techno.<br><br>
                    Examples can be found <a href="https://open.spotify.com/playlist/3wtxIb4LLp4Al9qo5Y7Qej?si=d25510f196a8434f" target="_blank">here</a>.<br>
                    <h2>Range B = 90 USD per minute</h2>
                    More complex beat, uplifting, more layers, genre examples: breakcore, hardcore, "FNF Song", speedjazz.<br><br>
                    Examples can be found <a href="https://open.spotify.com/playlist/6XvHXXXsP9xMYFx9TcW9WQ?si=b6e13dc2629646f7" target="_blank">here</a>.<br>
                    `,
                image: 'icons/comm-music.png'
            },
            {
                cardId: 'adult',
                title: '18+ Commissions',
                excerpt: '',
                detail:
                    `<br><h1 style="font-size: 120px; transform: rotate(-10deg); text-align: center;">NOPE!</h1><br><br>
                    Sorry! I don't do 18+ commissions. Were you expecting something? LOL
                    `,
                image: 'icons/comm-18.png'
            },
        ]
    },

    {
        // Daily Art+
        q: 'loopTest',
        name: 'loopTest',
        color: 'var(--color-15)',
        hidden: true,
        noFocus: true,
        labels: [
            {
                cardId: 'testloop1',
                title: 'testloop1',
                excerpt: '',
                detail:
                    `<a data-open-card="loopTest:testloop2">testloop2</a>`,
                image: 'images/temp2.png'
            },
            {
                cardId: 'testloop2',
                title: 'testloop2',
                excerpt: '',
                detail:
                    `<a data-open-card="loopTest:testloop1">testloop1</a>`,
                image: 'images/temp.png'
            },
        ]
    },
    {
        name: 'Whitespace',
        q: 'yolkspocketdimension',
        subtitle: '',
        image: '',
        color: 'var(--color-10)',
        orbit: 127,
        scale: 0.5,
        noFocus: true,
        labels: [
            {
                id: 1,
                cardId: 'blank',
                title: ' ',
                excerpt: '',
                detail:
                    ``,
                image: 'icons/whitespace.png'
            },
        ]
    },
];


// Beecat
if (Math.floor(Math.random() * 333) == 0) {
    menuItems.forEach(menu => {
        if (menu.name == "Information") {
            menu.labels.push({
                cardId: 'beecat',
                title: 'Beecat',
                excerpt: 'Beecat',
                detail: `It's a bee!<br>It's a cat!<br>It's a beecat!<br>And it's spinning!<br>But why is it spinning?<br><br>
                Character by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a><br><br>
                <img src="images/beecatspin.gif" data-caption="Beecat" data-subcaption="beecatspin.gif" style="width: 100%">`,
                image: 'images/beecatspin.gif'
            });
        }
    });
}



/**
 * Generate placeholder cards for testing
 * @param {number} n - Number of placeholder cards to generate
 * @param {string} prefix - Prefix for card titles
 * @returns {Array} Array of placeholder card objects
 */
function generateLabels(n, prefix) {
    return Array.from({ length: n }).map((_, i) => ({
        id: i + 1,
        title: `${prefix} Item ${i + 1}`,
        excerpt: `This is a short placeholder excerpt for ${prefix} item ${i + 1}.`,
        detail: `Detailed description for ${prefix} item ${i + 1}. You can replace this with whatever content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nulla sed velit malesuada fermentum.`,
        image: 'images/temp.png'
    }));
}

// Special search responses
specialSearch = {
    all: { special: true },
    nothing: {
        title: 'Nothing found!',
        excerpt: ''
    },
    something: {
        title: 'Something found!',
        excerpt: `...It's just me LOL<br>
        My name is omniLens btw! You've probably met my brother omniTracer! He's such a powerful guy...<br>
        Lowkey i'm kinda jealous of him. I wish to be as powerful as him one day :(`
    },
    content: {
        title: 'Content found!',
        excerpt: `Yup, i am the content. You've found me heehee!<br>
        Aww you listened to what i said!<br>
        Good boy :)`
    },
    help: {
        title: 'help yourself bro LOLXD',
        excerpt: ''
    },
    hi: {
        title: 'HAII HIIII HELLLOOO!!!! :DD',
        excerpt: ''
    },
};

// Calculate totals for statistics
totalCards = menuItems.reduce((sum, item) => sum + item.labels.length, 0);
totalCharacters = menuItems.reduce((sum, item) => sum + item.labels.filter(label => label.isCharacter).length, 0);
totalMenus = menuItems.length;