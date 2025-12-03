/* --------------------------
    WEBSITE MENU DATA
    -------------------------- */

// Metadata
const lastUpdated = 'December 2nd, 2025';
const version = '0.3.4';

// Main menu data array
menuItems = [
    /* --------------------------
    Menu Template
    -------------------------- */
    {
        menuId: 'menuTemplate',               // REQUIRED: Unique identifier (alphanumeric, no spaces)
        name: 'Menu Template Example',        // Menu name and title
        showName: false,                      // Show name in orbit
        subtitle: 'This is a menu example',   // Short description
        image: 'images/temp2.png',            // Orbit thumbnail image
        color: 'var(--color-15)',             // Menu color (hex, CSS var, or blank)
        orbit: 3,                             // INTEGER: Orbit layer placement
        scale: 1,                             // Menu size in orbit
        hidden: true,                         // Hide from orbit (accessible via links only)
        invisible: true,                      // Exclude from search
        labels: [
            // CARDS WITH THUMBNAILS
            {
                cardId: 'normalCard',         // REQUIRED: Unique card identifier
                title: 'Normal Card',
                excerpt: 'With thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp.png'
            },
            {
                cardId: 'urlCard',
                title: 'URL Card',
                excerpt: 'With thumbnail',
                url: 'https://x.com/artifyber',  // External URL redirect
                image: 'images/temp.png'
            },
            {
                cardId: 'unclickableCard',
                title: 'Unclickable Card',
                excerpt: 'With thumbnail',
                unclickable: true,            // Non-clickable info card
                image: 'images/temp.png'
            },

            // CARDS WITHOUT TEXT
            {
                cardId: 'normalCardPlain',
                blank: true,    // set the card as blank / have no text
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp.png'
            },
            {
                cardId: 'urlCardPlain',
                blank: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp.png'
            },
            {
                cardId: 'unclickableCardPlain',
                blank: true,
                image: 'images/temp.png',
                unclickable: true
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
        menuId: 'deltadim',
        subtitle: 'Delta Dimension',
        image: 'icons/deltadim.png',
        scale: 1,
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
                cardId: 'deltadim-aakik',
                linkId: 'deltadim-aakik',
            },
            {
                cardId: 'deltadim-deltaspace',
                linkId: 'deltadim-deltaspace',
            },
        ]
    },
    {
        menuId: 'deltadim-teksui',
        name: 'Teksui',
        subtitle: 'Terra',
        image: 'images/deltadim-teksui.png',
        color: 'var(--color-9)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'artibun',
                title: 'Artibun',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She/Any',
                cGender: 'Bigender',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Bunbun',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:articat">Articat</a>',
                cReference: 'images/r/artibun-r.png',
                cGallery: [
                    'images/c/artibun-c.png',
                    'images/c/artibun-c2.png',
                    'images/c/artibun-c3.png',
                    'images/c/artibun-c4.png',
                    'images/c/artibun-c5.png',
                    'images/c/artibun-c6.png',
                ],

                image: 'images/i/artibun-i.png',
            },
            {
                cardId: 'articat',
                title: 'Articat',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'He/Any',
                cGender: 'Male',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Kiki',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:artibun">Artibun</a>',
                cReference: '',
                cGallery: [
                    'images/c/articat-c.png',
                    'images/c/articat-c2.png',
                    'images/c/articat-c3.png',
                    'images/c/articat-c4.png',
                    'images/c/articat-c5.png',
                    'images/c/articat-c6.png',
                ],
                
                image: 'images/i/articat-i.png',
            },
            {
                cardId: 'artifox',
                title: 'Artifox',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Fox',
                cPronouns: 'He/They',
                cGender: 'Trans-male',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Fofo, Foxxo',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artifox-c.png',
                    'images/c/artifox-c2.png',
                    'images/c/artifox-c3.png',
                    'images/c/artifox-c4.png',
                    'images/c/artifox-c5.png',
                    'images/c/artifox-c6.png',
                ],

                image: 'images/i/artifox-i.png',
            },
            {
                cardId: 'artifish',
                title: 'Artifish',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat + Shark',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cSexuality: 'Demisexual',
                cNicknames: 'Arti, Fifi',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:artilope">Artilope</a>',
                cReference: '',
                cGallery: [
                    'images/c/artifish-c.png',
                    'images/c/artifish-c2.png',
                    'images/c/artifish-c3.png',
                    'images/c/artifish-c4.png',
                    'images/c/artifish-c5.png',
                    'images/c/artifish-c6.png',
                ],
                
                image: 'images/i/artifish-i.png',
            },
            {
                cardId: 'artigoat',
                title: 'Artigoat',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Goat',
                cPronouns: 'He',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: 'Arti, Baba, Goat',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:artipup">Artipup</a>',
                cReference: '',
                cGallery: [
                    'images/c/artigoat-c.png',
                    'images/c/artigoat-c2.png',
                    'images/c/artigoat-c3.png',
                    'images/c/artigoat-c4.png',
                    'images/c/artigoat-c5.png',
                    'images/c/artigoat-c6.png',
                ],
                
                image: 'images/i/artigoat-i.png',
            },
            {
                cardId: 'artilope',
                title: 'Artilope',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Jackalope',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Demisexual',
                cNicknames: 'Arti, Lolo, Jacquie, Jacqueline',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:artifish">Artifish</a>',
                cReference: '',
                cGallery: [
                    'images/c/artilope-c.png',
                    'images/c/artilope-c2.png',
                    'images/c/artilope-c3.png',
                    'images/c/artilope-c4.png',
                    'images/c/artilope-c5.png',
                    'images/c/artilope-c6.png',
                ],
                
                image: 'images/i/artilope-i.png',
            },
            {
                cardId: 'artipup',
                title: 'Artipup',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Dog',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: 'Arti, Arfy, Puppy',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:artigoat">Artigoat</a>',
                cReference: '',
                cGallery: [
                    'images/c/artipup-c.png',
                    'images/c/artipup-c2.png',
                    'images/c/artipup-c3.png',
                    'images/c/artipup-c4.png',
                    'images/c/artipup-c5.png',
                    'images/c/artipup-c6.png',
                ],
                
                image: 'images/i/artipup-i.png',
            },
            {
                cardId: 'artineko',
                title: 'Artineko',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Human (cat cosplay)',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Aroace',
                cNicknames: 'Arti, Nay, Neko',
                cAddOns: 'Sibling: <a data-open-card="deltadim-chromasia:artimouse">Artimouse</a>',
                cReference: '',
                cGallery: [
                    'images/c/artineko-c.png',
                    'images/c/artineko-c2.png',
                    'images/c/artineko-c3.png',
                    'images/c/artineko-c4.png',
                    'images/c/artineko-c5.png',
                    'images/c/artineko-c6.png',
                ],
                
                image: 'images/i/artineko-i.png',
            },
            {
                cardId: 'eros',
                title: 'Eros',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She/They',
                cGender: 'Trans-female',
                cSexuality: 'Demisexual',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:sora">Sora</a>',
                cReference: '',
                cGallery: [
                    'images/c/eros-c.png',
                    'images/c/eros-c2.png',
                    'images/c/eros-c3.png',
                    'images/c/eros-c4.png',
                    'images/c/eros-c5.png',
                    'images/c/eros-c6.png',
                ],
                
                image: 'images/i/eros-i.png',
            },
            {
                cardId: 'sora',
                title: 'Sora',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She/They',
                cGender: 'Trans-female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:eros">Eros</a>',
                cReference: 'images/r/sora-r.png',
                cGallery: [
                    'images/c/sora-c.png',
                    'images/c/sora-c2.png',
                ],
                
                image: 'images/i/sora-i.png',
            },
            {
                cardId: 'furfy',
                title: 'Furfy',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:mist">Mist</a>',
                cReference: '',
                cGallery: [
                    'images/c/furfy-c6.png',
                    'images/c/furfy-c.png',
                    'images/c/furfy-c2.png',
                    'images/c/furfy-c3.png',
                    'images/c/furfy-c4.png',
                    'images/c/furfy-c5.png',
                ],
                
                image: 'images/i/furfy-i.png',
            },
            {
                cardId: 'mist',
                title: 'Mist',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:furfy">Furfy</a>',
                cReference: '',
                cGallery: [
                    'images/c/mist-c.png',
                    'images/c/mist-c2.png',
                ],
                
                image: 'images/i/mist-i.png',
            },
            {
                cardId: 'card',
                title: 'Card',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cardboard Cat',
                cPronouns: 'She/Any',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:gift">Gift</a>',
                cReference: 'images/r/card-r.png',
                cGallery: [
                    'images/c/card-c5.png',
                    'images/c/card-c.png',
                    'images/c/card-c2.png',
                    'images/c/card-c3.png',
                    'images/c/card-c4.png',
                ],
                
                image: 'images/i/card-i.png',
            },
            {
                cardId: 'gift',
                title: 'Gift',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Giftbox Rabbit',
                cPronouns: 'She/Any',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:card">Card</a>',
                cReference: 'images/r/gift-r.png',
                cGallery: [],
                
                image: 'images/i/gift-i.png',
            },
            {
                cardId: 'elise',
                title: 'Elise',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Sea Bunny',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/elise-c.png',
                ],
                
                image: 'images/i/elise-i.png',
            },
            {
                cardId: 'fika',
                title: 'Fika',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Fox',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Heterosexual',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:rai">Rai</a>',
                cReference: '',
                cGallery: [
                    'images/c/fika-c.png',
                    'images/c/fika-c2.png',
                ],
                
                image: 'images/i/fika-i.png',
            },
            {
                cardId: 'rai',
                title: 'Rai',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Fox',
                cPronouns: 'He',
                cGender: 'Male',
                cSexuality: 'Heterosexual',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-teksui:fika">Fika</a>',
                cReference: 'images/r/rai-r.png',
                cGallery: [
                    'images/c/rai-c.png',
                    'images/c/rai-c2.png',
                ],
                
                image: 'images/i/rai-i.png',
            },
            {
                cardId: 'remy',
                title: 'Remy',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Robunny',
                cPronouns: 'She/They/It',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/remy-r.png',
                cGallery: [],
                
                image: 'images/i/remy-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-chromasia',
        name: 'Chromasia',
        subtitle: 'Terra',
        image: 'images/deltadim-chromasia.png',
        color: 'var(--color-14)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'artibon',
                title: 'Artibon',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: 'Arti, Ribbon, Bonbon, Sylvy',
                cAddOns: 'S/O: <a data-open-card="deltadim-chromasia:artishade">Artishade</a>',
                cReference: '',
                cGallery: [
                    'images/c/artibon-c.png',
                    'images/c/artibon-c2.png',
                    'images/c/artibon-c3.png',
                    'images/c/artibon-c4.png',
                    'images/c/artibon-c5.png',
                    'images/c/artibon-c6.png',
                ],
                
                image: 'images/i/artibon-i.png',
            },
            {
                cardId: 'artimouse',
                title: 'Artimouse',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Mousegirl',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Mimi',
                cAddOns: 'Sibling: <a data-open-card="deltadim-teksui:artineko">Artineko</a>',
                cReference: '',
                cGallery: [
                    'images/c/artimouse-c.png',
                    'images/c/artimouse-c1.png',
                    'images/c/artimouse-c2.png',
                    'images/c/artimouse-c3.png',
                ],
                
                image: 'images/i/artimouse-i.png',
            },
            {
                cardId: 'artiferret',
                title: 'Artiferret',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Ferret',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Fer',
                cAddOns: 'Partner: <a data-open-card="deltadim-aakik:ellie">Ellie</a>',
                cReference: '',
                cGallery: [
                    'images/c/artiferret-c.png',
                    'images/c/artiferret-c2.png',
                    'images/c/artiferret-c3.png',
                ],
                
                image: 'images/i/artiferret-i.png',
            },
            {
                cardId: 'artitri',
                title: 'Artitri',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Sign',
                cPronouns: 'She/Them',
                cGender: 'None',
                cSexuality: '',
                cNicknames: 'Arti, 3',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artitri-c.png',
                    'images/c/artitri-c2.png',
                ],
                
                image: 'images/i/artitri-i.png',
            },
            {
                cardId: 'artibot',
                title: 'Artibot',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Robocat',
                cPronouns: 'He/It',
                cGender: 'None',
                cSexuality: '',
                cNicknames: 'Arti, B.B',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artibot-c.png',
                    'images/c/artibot-c2.png',
                    'images/c/artibot-c3.png',
                ],
                
                image: 'images/i/artibot-i.png',
            },
            {
                cardId: 'artishade',
                title: 'Artishade',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Fennec',
                cPronouns: 'She/He/They',
                cGender: 'Intersex Bigender',
                cSexuality: 'Lesbian',
                cNicknames: 'Arti, Sasha',
                cAddOns: 'S/O: <a data-open-card="deltadim-chromasia:artibon">Artibon</a>',
                cReference: '',
                cGallery: [
                    'images/c/artishade-c.png',
                    'images/c/artishade-c2.png',
                    'images/c/artishade-c3.png',
                    'images/c/artishade-c4.png',
                    'images/c/artishade-c5.png',
                ],
                
                image: 'images/i/artishade-i.png',
            },
            {
                cardId: 'artidragon',
                title: 'Artidragon',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Dragon',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Rara',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artidragon-c.png',
                    'images/c/artidragon-c2.png',
                    'images/c/artidragon-c3.png',
                    'images/c/artidragon-c4.png',
                ],
                
                image: 'images/i/artidragon-i.png',
            },
            {
                cardId: 'shirley',
                title: 'Shirley',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat + Fox',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Heterosexual',
                cNicknames: 'Manda, Alamanda',
                cAddOns: 'S/O: <a data-open-card="deltadim-chromasia:rose">Rose</a>',
                cReference: 'images/r/shirley-r.png',
                cGallery: [
                    'images/c/shirley-c.png',
                    'images/c/shirley-c2.png',
                    'images/c/shirley-c3.png',
                    'images/c/shirley-c4.png',
                    'images/c/shirley-c5.png',
                    'images/c/shirley-c6.png',
                ],
                
                image: 'images/i/shirley-i.png',
            },
            {
                cardId: 'rose',
                title: 'Rose',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Fox',
                cPronouns: 'He/Any',
                cGender: 'Male',
                cSexuality: 'Heterosexual',
                cNicknames: 'Rosey',
                cAddOns: 'S/O: <a data-open-card="deltadim-chromasia:shirley">Shirley</a>',
                cReference: 'images/r/rose-r.png',
                cGallery: [
                    'images/c/rose-c.png',
                    'images/c/rose-c2.png',
                    'images/c/rose-c3.png',
                    'images/c/rose-c4.png',
                ],
                
                image: 'images/i/rose-i.png',
            },
            {
                cardId: 'hana',
                title: 'Hana',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Bee',
                cPronouns: 'She/They',
                cGender: 'Demigirl',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="floriverse:aurelia">Aurelia</a>',
                cReference: '',
                cGallery: [
                    'images/c/hana-c.png',
                    'images/c/hana-c2.png',
                    'images/c/hana-c3.png',
                    'images/c/hana-c4.png',
                    'images/c/hana-c5.png',
                    'images/c/hana-c6.png',
                ],
                
                image: 'images/i/hana-i.png',
            },
            {
                cardId: 'caramella',
                title: 'Caramella',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat + Shrimp',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Mella',
                cAddOns:
                    `S/O: <a data-open-card="deltadim-chromasia:azurey">Azurey</a><br>
                    Design made by <a href="https://x.com/M3ko_Ne" target="_blank">M3ko_Ne</a>`,
                cReference: 'images/r/caramella-r.png',
                cGallery: [
                    'images/c/caramella-c.png',
                    'images/c/caramella-c2.png',
                    'images/c/caramella-c3.png',
                    'images/c/caramella-c4.png',
                    'images/c/caramella-c5.png',
                    'images/c/caramella-c6.png',
                ],
                
                image: 'images/i/caramella-i.png',
            },
            {
                cardId: 'azurey',
                title: 'Azurey',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat + Shark',
                cPronouns: 'He/They',
                cGender: 'Demiboy',
                cSexuality: 'Pansexual',
                cNicknames: 'Azu',
                cAddOns: 'S/O: <a data-open-card="deltadim-chromasia:caramella">Caramella</a>',
                cReference: 'images/r/azurey-r.png',
                cGallery: [
                    'images/c/azurey-c.png',
                    'images/c/azurey-c2.png',
                    'images/c/azurey-c3.png',
                    'images/c/azurey-c4.png',
                ],
                
                image: 'images/i/azurey-i.png',
            },
            {
                cardId: 'mida',
                title: 'Mida',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Medusa + Cat',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Pansexual',
                cNicknames: 'Meowdusa',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/mida-c.png',
                    'images/c/mida-c2.png',
                    'images/c/mida-c3.png',
                ],
                
                image: 'images/i/mida-i.png',
            },
            {
                cardId: 'lilac',
                title: 'Lilac',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Angel-Demon Cat',
                cPronouns: 'She/Any',
                cGender: 'Female',
                cSexuality: 'Pansexual',
                cNicknames: '',
                cAddOns: 'Adopted from <a href="https://x.com/naycookye" target="_blank">naycookye</a>',
                cReference: 'images/r/lilac-r.png',
                cGallery: [],
                
                image: 'images/i/lilac-i.png',
            },
            {
                cardId: 'moka',
                title: 'Moka',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Dog',
                cPronouns: 'He/They',
                cGender: 'Trans-male',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/moka-r.png',
                cGallery: [],
                
                image: 'images/i/moka-i.png',
            },
            {
                cardId: 'nameless',
                title: 'Nameless',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Fennec + Cat',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/nameless-r.png',
                cGallery: [
                    'images/c/nameless-c.png',
                ],
                
                image: 'images/i/nameless-i.png',
            },
            {
                cardId: 'nuki',
                title: 'Nuki',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Tanuki',
                cPronouns: 'She/Any',
                cGender: 'Female',
                cSexuality: 'Asexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/nuki-r.png',
                cGallery: [
                    'images/c/nuki-c.png',
                    'images/c/nuki-c2.png',
                ],
                
                image: 'images/i/nuki-i.png',
            },
            {
                cardId: 'sawo',
                title: 'Sawo',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Probably Gay',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/sawo-r.png',
                cGallery: [],
                
                image: 'images/i/sawo-i.png',
            },
            {
                cardId: 'nytro',
                title: 'Nytro',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Mouse',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Aromantic',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/nytro-c.png',
                    'images/c/nytro-c2.png',
                ],
                
                image: 'images/i/nytro-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-aakik',
        name: 'Aakik',
        subtitle: 'Terra',
        image: 'images/deltadim-aakik.png',
        color: 'var(--color-3)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'artiusagi',
                title: 'Sukie',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Human (Bunny cosplay)',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Usagi, Sukie',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artiusagi-c.png',
                ],
                
                image: 'images/i/artiusagi-i.png',
            },
            {
                cardId: 'ellie',
                title: 'Ellie',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Catgirl',
                cPronouns: 'She/It',
                cGender: 'Trans-female',
                cSexuality: 'Demisexual',
                cNicknames: '',
                cAddOns: 'Partner: <a data-open-card="deltadim-chromasia:artiferret">Artiferret</a>',
                cReference: '',
                cGallery: [
                    'images/c/ellie-c.png',
                    'images/c/ellie-c2.png',
                ],
                
                image: 'images/i/ellie-i.png',
            },
            {
                cardId: 'amber',
                title: 'Amber',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Human',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Heterosexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/amber-c.png',
                    'images/c/amber-c2.png',
                ],
                
                image: 'images/i/amber-i.png',
            },
            {
                cardId: 'hazel',
                title: 'Hazel',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Goat',
                cPronouns: 'She/Any',
                cGender: 'Genderfluid',
                cSexuality: 'Demisexual',
                cNicknames: '',
                cAddOns: 'Adopted from <a href="https://x.com/fixy_cookies" target="_blank">Fixy Cookies</a>',
                cReference: 'images/r/hazel-r.png',
                cGallery: [
                    'images/c/hazel-c.png',
                ],
                
                image: 'images/i/hazel-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-deltaspace',
        name: 'Deltaspace',
        subtitle: 'Somewhere in space',
        image: 'images/deltadim-deltaspace.png',
        color: 'var(--color-15)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'skitty',
                title: 'Singularikitty',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'Any Pronouns',
                cGender: 'Pangender',
                cSexuality: 'Aroace',
                cNicknames: 'Skitty',
                cAddOns: 'Adopted from <a href="https://x.com/C0denameDelta" target="_blank">C0denameDelta</a>',
                cReference: 'images/r/skitty-r.png',
                cGallery: [
                    'images/c/skitty-c.png',
                    'images/c/skitty-c2.png',
                    'images/c/skitty-c3.png',
                    'images/c/skitty-c4.png',
                    'images/c/skitty-c5.png',
                    'images/c/skitty-c6.png',
                ],
                
                image: 'images/i/skitty-i.png',
            },
            {
                cardId: 'gamma',
                title: 'Gamma',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/gamma-c5.png',
                    'images/c/gamma-c.png',
                    'images/c/gamma-c2.png',
                    'images/c/gamma-c3.png',
                    'images/c/gamma-c4.png',
                ],
                
                image: 'images/i/gamma-i.png',
            },
            {
                cardId: 'micro',
                title: 'Micro',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cSexuality: 'Omnisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/micro-c.png',
                    'images/c/micro-c2.png',
                    'images/c/micro-c3.png',
                    'images/c/micro-c4.png',
                    'images/c/micro-c5.png',
                    'images/c/micro-c6.png',
                ],
                
                image: 'images/i/micro-i.png',
            },
            {
                cardId: 'artilotl',
                title: 'Artilotl',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Axolotl',
                cPronouns: 'They/It',
                cGender: 'Genderless',
                cSexuality: 'Aromantic',
                cNicknames: 'Arti, Xio',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artilotl-c.png',
                    'images/c/artilotl-c2.png',
                    'images/c/artilotl-c3.png',
                    'images/c/artilotl-c4.png',
                    'images/c/artilotl-c5.png',
                    'images/c/artilotl-c6.png',
                ],
                
                image: 'images/i/artilotl-i.png',
            },
            {
                cardId: 'articani',
                title: 'Articani',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Lucani',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Heterosexual',
                cNicknames: 'Cani',
                cAddOns: 'Lucani is an open-species created by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a>',
                cReference: 'images/r/articani-r.png',
                cGallery: [
                    'images/c/articani-c.png',
                    'images/c/articani-c2.png',
                ],
                
                image: 'images/i/articani-i.png',
            },
            {
                cardId: 'ryon',
                title: 'Ryon',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Lucani',
                cPronouns: 'Any Pronouns',
                cGender: 'Non-binary',
                cSexuality: 'Asexual',
                cNicknames: 'Baryon',
                cAddOns: 'Lucani is an open-species created by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a>',
                cReference: 'images/r/ryon-r.png',
                cGallery: [
                    'images/c/ryon-c.png',
                ],
                
                image: 'images/i/ryon-i.png',
            },
            {
                cardId: 'klora',
                title: 'Klora',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Mantis',
                cPronouns: 'She/He/It',
                cGender: 'Non-binary',
                cSexuality: 'Aromantic',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/klora-c.png',
                ],
                
                image: 'images/i/klora-i.png',
            },
        ]
    },

    {
        // Floriverse
        name: 'Floriverse',
        menuId: 'floriverse',
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
            {
                title: 'Characters',
                excerpt: 'People of the Floriverse',
            },
            {
                cardId: 'aurelia',
                title: 'Aurelia',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Zinnia',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="deltadim-chromasia:hana">Hana</a>',
                cReference: 'images/r/aurelia-r.png',
                cGallery: [
                    'images/flories/fve-aurelia.png',
                    'images/c/aurelia-c.png',
                    'images/c/aurelia-c2.png',
                    'images/c/aurelia-c3.png',
                    'images/c/aurelia-c4.png',
                ],
                
                image: 'images/i/aurelia-i.png',
            },
            {
                cardId: 'furflow',
                title: 'Furflow',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="floriverse:misty">Misty</a>',
                cReference: '',
                cGallery: [
                    'images/c/furflow-c.png',
                    'images/c/furflow-c2.png',
                    'images/c/furflow-c3.png',
                    'images/c/furflow-c4.png',
                ],
                
                image: 'images/i/furflow-i.png',
            },
            {
                cardId: 'misty',
                title: 'Misty',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="floriverse:furflow">Furflow</a>',
                cReference: '',
                cGallery: [
                    'images/flories/fve-misty.png',
                    'images/c/misty-c.png',
                ],
                
                image: 'images/i/misty-i.png',
            },
            {
                cardId: 'teknia',
                title: 'Teknia',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Roboflorie',
                cPronouns: 'She/It',
                cGender: 'Female',
                cSexuality: 'Asexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/flories/uncat/Teknia.png',
                    'images/c/teknia-c.png',
                ],
                
                image: 'images/c/teknia-c.png',
            },
        ]
    },

    {
        // Digirel
        name: 'Digirel',
        menuId: 'digirel',
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
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'They/Any',
                cGender: 'Non-binary',
                cSexuality: 'Asexual',
                cNicknames: 'Foam',
                cAddOns: '',
                cReference: 'images/r/soap-r.png',
                cGallery: [
                    'images/c/soap-c.png',
                    'images/c/soap-c2.png',
                    'images/c/soap-c3.png',
                    'images/c/soap-c4.png',
                ],
                
                image: 'images/i/soap-i.png',
            },
            {
                cardId: 'semyk',
                title: 'Semyk',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'Any Pronouns',
                cGender: 'Any Gender',
                cSexuality: 'who cares bro',
                cNicknames: 'CMYK, D43DK177Y.exe',
                cAddOns: '',
                cReference: 'images/r/semyk-r.png',
                cGallery: [
                    'images/c/semyk-c.png',
                    'images/c/semyk-c2.png',
                    'images/c/semyk-c3.png',
                ],
                
                image: 'images/i/semyk-i.png',
            },
            {
                cardId: 'artifolder',
                title: 'Artifolder',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Folder Bee',
                cPronouns: 'Any Pronouns',
                cGender: 'Female',
                cSexuality: 'Pansexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artifolder-c.png',
                ],
                
                image: 'images/i/artifolder-i.png',
            },
            {
                cardId: 'byte',
                title: 'Byte',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Folder Cat',
                cPronouns: 'He/They',
                cGender: 'Demiboy',
                cSexuality: 'Asexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/byte-c.png',
                    'images/c/byte-c2.png',
                ],
                
                image: 'images/i/byte-i.png',
            },
            {
                cardId: 'cherry',
                title: 'Cherry',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She/They',
                cGender: 'Demigirl',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/cherry-c.png',
                    'images/c/cherry-c2.png',
                ],
                
                image: 'images/i/cherry-i.png',
            },
            {
                cardId: 'ebta',
                title: 'Ebta',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Slime Rabbit',
                cPronouns: 'She/They/Any',
                cGender: 'Pangender',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/ebta-r.png',
                cGallery: [
                    'images/c/ebta-c.png',
                    'images/c/ebta-c2.png',
                ],
                
                image: 'images/i/ebta-i.png',
            },
            {
                cardId: 'furryeah',
                title: 'Furryeah',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'Any',
                cGender: 'Genderless',
                cSexuality: '',
                cNicknames: 'Yeah!',
                cAddOns: '',
                cReference: 'images/r/furryeah-r.png',
                cGallery: [
                    'images/c/furryeah-c.png',
                    'images/c/furryeah-c2.png',
                ],
                
                image: 'images/i/furryeah-i.png',
            },
            {
                cardId: 'placeholder',
                title: '&lt;placeholder&gt;',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'Any Pronouns',
                cGender: 'None',
                cSexuality: 'None',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/placeholder-c.png',
                    'images/c/placeholder-c2.png',
                    'images/c/placeholder-c3.png',
                ],
                
                image: 'images/i/placeholder-i.png',
            },
            {
                cardId: 'sakura',
                title: 'Sakura',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Digitalia',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/sakura-c.png',
                ],
                
                image: 'images/i/sakura-i.png',
            },
            {
                cardId: 'quanta',
                title: 'Quanta',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Hologram Cat',
                cPronouns: 'They',
                cGender: 'Non-Binary',
                cSexuality: 'Pansexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/quanta-r.png',
                cGallery: [
                    'images/c/quanta-c.png',
                ],
                
                image: 'images/i/quanta-i.png',
            },
        ]
    },

    {
        // Nansenz
        name: 'Nansenz',
        menuId: 'nansenz',
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
                cardId: 'article',
                title: 'Article',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Article (Object)',
                cPronouns: 'She/He/It',
                cGender: 'Non-binary',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/article-c.png',
                ],
                
                image: 'images/i/article-i.png',
            },
            {
                cardId: 'meowcaroon',
                title: 'Meowcaroon',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Macaroon (Object)',
                cPronouns: 'She/It',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="nansenz:oworeo">Oworeo</a>',
                cReference: '',
                cGallery: [
                    'images/c/meowcaroon-c.png',
                    'images/c/meowcaroon-c2.png',
                ],
                
                image: 'images/i/meowcaroon-i.png',
            },
            {
                cardId: 'oworeo',
                title: 'Oworeo',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Sandwich Cookie (Object)',
                cPronouns: 'They',
                cGender: 'Non-Binary',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="nansenz:meowcaroon">Meowcaroon</a>',
                cReference: '',
                cGallery: [
                    'images/c/oworeo-c.png',
                    'images/c/oworeo-c2.png',
                ],
                
                image: 'images/i/oworeo-i.png',
            },
            {
                cardId: 'cancerman',
                title: 'Cancerman',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cigarette',
                cPronouns: 'He',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: 'Cigarman, Cigar',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/cancerman-c.png',
                ],
                
                image: 'images/i/cancerman-i.png',
            },
            {
                cardId: 'mu',
                title: 'Mu',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: '"Cabbit"',
                cPronouns: 'She/Any',
                cGender: 'Genderless',
                cSexuality: 'Aroace',
                cNicknames: 'μ',
                cAddOns: '',
                cReference: 'images/r/mu-r.png',
                cGallery: [],
                
                image: 'images/i/mu-i.png',
            },
            {
                cardId: 'gomboc',
                title: 'THE GÖMBÖC',
                excerpt: '',
                detail: ``,

                isCharacter: true,
                cSpecies: '',
                cPronouns: '',
                cGender: '',
                cSexuality: '',
                cNicknames: '',
                cAddOns: `<H1 style="font-size:50px; font-family: Times, serif; color: #e1b89c; text-align: center;">THE GÖMBÖC SIMPLY WANTS MORE.</H1>`,
                cReference: '',
                cGallery: [],
                
                image: 'images/gomboc.gif',
            },
        ]
    },

    {
        // Hizen
        name: 'Hizen',
        menuId: 'hizen',
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
                cardId: 'nim',
                title: 'Nim',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cloud Rabbit',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Aroace',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/nim-c.png',
                    'images/c/nim-c2.png',
                ],
                
                image: 'images/i/nim-i.png',
            },
            {
                cardId: 'awan',
                title: 'Awan',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cloud Puppy',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: '',
                cAddOns: 'Adopted from <a href="https://x.com/yewm3w" target="_blank">yewm3w</a>',
                cReference: '',
                cGallery: [
                    'images/c/awan-c.png',
                    'images/c/awan-c2.png',
                ],
                
                image: 'images/i/awan-i.png',
            },
            {
                cardId: 'lyne',
                title: 'Lyne',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Polygon',
                cPronouns: 'They',
                cGender: 'Non-Binary',
                cSexuality: 'Bisexual',
                cNicknames: 'Polyne',
                cAddOns: '',
                cReference: 'images/r/lyne-r.png',
                cGallery: [
                    'images/c/lyne-c.png',
                ],
                
                image: 'images/i/lyne-i.png',
            },
        ]
    },

    {
        // Nadir
        name: 'Nadir',
        menuId: 'nadir',
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
                cardId: 'artinihil',
                title: 'Artinihil',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Unknown',
                cPronouns: 'She/It',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Nihil',
                cAddOns: 'S/O: <a data-open-card="nadir:ugo">Ugo</a>',
                cReference: '',
                cGallery: [
                    'images/c/artinihil-c.png',
                    'images/c/artinihil-c2.png',
                ],
                
                image: 'images/i/artinihil-i.png',
            },
            {
                cardId: 'infineko',
                title: 'Infineko',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Infinity Symbol',
                cPronouns: 'He/Any',
                cGender: 'None',
                cSexuality: 'None',
                cNicknames: '∞',
                cAddOns: '',
                cReference: 'images/r/infineko-r.png',
                cGallery: [],
                
                image: 'images/i/infineko-i.png',
            },
            {
                cardId: 'ugo',
                title: 'Ugo',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Vortex',
                cPronouns: 'He',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: '',
                cAddOns: 'S/O: <a data-open-card="nadir:artinihil">Artinihil</a>',
                cReference: 'images/r/ugo-r.png',
                cGallery: [],
                
                image: 'images/i/ugo-i.png',
            },
            {
                cardId: 'unknown',
                title: '???',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: '???',
                cPronouns: '???',
                cGender: '???',
                cSexuality: '???',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/Δ-c.png',
                    'images/c/Δ-c2.png',
                ],
                
                image: 'images/i/Δ-i.png',
            },
        ]
    },

    // Orbit 2
    {
        // Random
        name: 'Random Character',
        menuId: 'random',
        showName: true,
        image: 'icons/oc-random.png',
        color: 'var(--color-12)',
        orbit: 2,
        scale: 1.5,
        invisible: true,
        labels: [
            {
                cardId: 'random',
            }
        ],
    },
    {
        name: 'Daily Art+',
        showName: true,
        menuId: 'dailyartplus',
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
    {
        name: 'Converters',
        showName: true,
        menuId: 'converters',
        subtitle: '',
        image: 'icons/converters.png',
        color: 'var(--color-13)',
        orbit: 2,
        scale: 1.5,
        labels: [
            {
                cardId: 'genotheta',
                title: 'Genotheta',
                excerpt: 'Convert Latin to Genotheta',
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/GENOTHETAEX.ttf" target="_blank">Download Genotheta Font</a><br>
                    <h2>Latin to Genotheta</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="genothetaInput" rows="2" style="width:100%;"></textarea>
                    </div>
                    <br>
                    Genotheta output
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutput" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    Genotheta output (Base-32 Numbering)
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutputEx" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyGenothetaBtn" type="button">Copy raw output</button> - for use with Genotheta font<br>
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutputRaw" rows="2" style="width:100%;"></textarea> 
                    </div>

                    <br><br><hr>
                    
                    <h2>Genotheta to Latin</h2>
                    Genotheta input
                    <div style="margin-top:10px;">
                        <textarea id="genothetaInputRev" class="genotheta" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyGenothetaRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap genothetaKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap genothetaKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap genothetaKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="A">A</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="B">B</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="C">C</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="D">D</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="E">E</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="F">F</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="G">G</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="H">H</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="I">I</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="J">J</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="K">K</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="L">L</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="M">M</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="N">N</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="O">O</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="P">P</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="R">R</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="S">S</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="T">T</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="U">U</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="V">V</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="W">W</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="X">X</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="Z">Z</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="TH">TH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="SH">SH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="CH">CH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="PH">PH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="GH">GH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="NG">NG</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="CK">CK</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="QU">QU</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="WH">WH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="WR">WR</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="KN">KN</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="NY">NY</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="TS">TS</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="PS">PS</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="!">!</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="?">?</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key=".">.</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key=",">,</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="(">(</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key=")">)</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="+">+</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="-">-</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="=">=</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="/">/</button>
                    </div>
                    `,
                image: 'icons/genotheta.png'
            },
            {
                cardId: 'starstroke',
                title: 'Starstroke',
                excerpt: 'Convert Latin to Starstroke',
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/starstroke.ttf" target="_blank">Download Starstroke Font</a><br><br>
                    <h2>Latin to Starstroke</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeInput" rows="4" style="width:100%;"></textarea>
                    </div>
                    <br>
                    Starstroke output
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeOutput" rows="4" style="width:100%;" readonly></textarea>
                    </div>

                    <br><br><hr>
                    
                    <h2>Starstroke to Latin</h2>
                    Starstroke input
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeInputRev" class="starstroke" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyStarstrokeRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap starstrokeKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap starstrokeKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap starstrokeKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="A">A</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="B">B</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="C">C</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="D">D</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="E">E</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="F">F</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="G">G</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="H">H</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="I">I</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="J">J</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="K">K</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="L">L</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="M">M</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="N">N</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="O">O</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="P">P</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="R">R</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="S">S</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="T">T</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="U">U</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="V">V</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="W">W</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="X">X</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="Z">Z</button>
                    </div>
                    `,
                image: 'icons/starstroke.png'
            },
        ]
    },

    // Orbit 4
    {
        // Information
        name: 'Information',
        menuId: 'info',
        subtitle: 'Information about Artifyber and this website',
        showName: true,
        image: 'icons/info.png',
        color: 'var(--color-3)',
        orbit: 4,
        scale: 1.5,
        labels: [
            {
                cardId: 'artifyber',
                title: 'Artifyber',
                excerpt: '',
                detail:
                    `
                    <h2>Hello!</h2> I'm Artifyber, an Indonesian furry artist who likes to draw and make music.<br>
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
                    <br>
                    <img src="images/fyberhappy.png"">
                    `,
                isCharacter: true,
                cSpecies: 'Fyber',
                cPronouns: 'She/Any',
                cGender: 'Bigender',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/artifyber-r.png',
                cGallery: [],
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
                                <li>Artineko, Artimouse, Articani, Singularikitty, Gamma, Sukie</li><br>
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
                        SPACE = Open search<br>
                        C = Center view<br>
                        H = Hide UIs<br>
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
            },
            {
                cardId: 'infiniteTest1',
                linkId: 'infiniteTest1',
            }
        ]
    },

    {
        // Links
        name: 'Links',
        menuId: 'links',
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
        menuId: 'comms',
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

    // Misc
    {
        menuId: 'loopTest',
        name: 'loopTest',
        color: 'var(--color-15)',
        hidden: true,
        invisible: true,
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
        menuId: 'infiniteTest1',
        name: 'Softlock!!!',
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        parent: 'infiniteTest2',
        labels: [
            {
                cardId: 'urstucklol',
                title: 'ur stuck lol',
                excerpt: '',
                detail: `lol`,
            },
            {
                cardId: 'urstucklol2',
                title: '<h1 style="font-size:100px">:3</h1>',
                excerpt: '',
                detail: `lol`,
            },
        ]
    },
    {
        menuId: 'infiniteTest2',
        name: 'Softlock!!!',
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        parent: 'infiniteTest1',
        labels: [
            {
                cardId: 'urstucklol',
                title: '<h1 style="font-size:100px">:3</h1>',
                excerpt: '',
                detail: `lol`,
            },
            {
                cardId: 'urstucklol2',
                title: 'ur stuck lol',
                excerpt: '',
                detail: `lol`,
            },
        ]
    },
    {
        name: 'Whitespace',
        menuId: 'yolkspocketdimension',
        subtitle: '',
        image: '',
        color: 'var(--color-10)',
        orbit: 127,
        scale: 0.5,
        invisible: true,
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

const menuLogoRedirect = 'info:artifyber';


/*
menuItems = [
    {
        menuId: 'menuTemplate',                    // REQUIRED: Unique identifier (alphanumeric, no spaces)
        name: 'Menu Template Example',        // Menu name and title
        showName: false,                      // Show name in orbit
        subtitle: 'This is a menu example',   // Short description
        image: 'images/temp2.png',            // Orbit thumbnail image
        color: 'var(--color-15)',             // Menu color (hex, CSS var, or blank)
        orbit: 1,                             // INTEGER: Orbit layer placement
        scale: 1,                             // Menu size in orbit
        hidden: false,                         // Hide from orbit (accessible via links only)
        invisible: true,                      // Exclude from search
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
]
*/


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