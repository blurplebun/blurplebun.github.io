/* --------------------------
    WEBSITE MENU DATA
    -------------------------- */

// Metadata
const lastUpdated = 'March 1st, 2026';
const version = '1.0.4';

// menu logo redirection
menuLogoRedirect = 'info:artifyber';

// orbitData attributes:
// orbit: int            - which orbit id these attributes apply to
// title: string         - the title of this orbit
// desc: string          - the description of this orbit
// orbitNum: int         - the actual orbit layer which determine how far it is from the center. defaults to orbit
// direction: float      - the direction of spin and how fast it is. x<0 is clockwise, x>0 is counterclockwise.
// offsetX: int          - offsets the X position of this orbit by pixels
// offsetY: int          - offsets the Y position of this orbit by pixels
// scaleX: float         - scale this orbit by the X axis
// scaleY: float         - scale this orbit by the Y axis
// center: string        - menuId of a visible orbiting button that can be set as the center of the ring. making it work like sattelites

// Orbit data
orbitData = [
    {
        orbit: 1,
        title: "Universes",
        desc: "The 6 sections of Fyberverse",
    },
    {
        orbit: 3,
        title: "Canon",
        desc: "Fyberverse-related menus",
    },
    {
        orbit: 4,
        orbitNum: 4.5,
        title: "Others",
        desc: "Miscellanous",
    },
    {
        orbit: 5,
        orbitNum: 0.375,
        direction: -0.75,
        title: "Links",
        desc: "Connections",
        center: "info",
        scaleX: 1,
        scaleY: 1,
    },
    {
        orbit: 127,
        scaleX: 1,
        scaleY: 1,
    },
];

// menu attributes:
// menuId: string           - REQUIRED: unique identifier for the menu (alphanumeric, no spaces)
// title: string            - menu name and title
// subtitle: string         - short description of menu
// showTitle: bool          - show name in orbit?
// orbit: float             - orbit id and default layer placement
// image: string            - path to the menu thumbnail image. optional
// color: string            - CSS color of menu. optional
// scale: float             - if set, modify the menu button scale
// hidden: bool             - if set, hide menu from orbit (accessible via links only)
// invisible: bool          - if set, exclude from search
// labels: array            - cards inside this menu. optional. if a menu has only one card it'll open that automatically

// card attributes:
// cardId: string           - unique identifier for the card (alphanumeric, no spaces). if unset, this becomes a separator
// title: string            - card title
// subtitle: string         - short description / excerpt of card
// detail: string           - the HTML contents of this card
// image: string            - path to the card thumbnail image. optional
// url: string              - if set, this card becomes a URL-type card
// unclickable: bool        - if set, this card becomes unclickable
// blank: bool              - if set, make this card textless (image-only)
// banner: bool             - if set, this card becomes a banner-type card
// linkId: string           - if set as the only attribute, this card links to another menu (menuId)
// reference: string        - if set as the only attribute, this card copies another card (menuId:cardId)
// isCharacter: bool        - if set, this is a character card
// cSpecies: string         - the character species. optional
// cPronouns: string        - the character pronouns. optional
// cGender: string          - the character gender. optional
// cSexuality: string       - the character sexuality. optional
// cNicknames: string       - the character nicknames. optional
// cAddOns: string          - extra HTML put above the reference art of the character. optional
// cReference: string       - path to the character reference art. optional
// cGallery: array          - array of path to character images. optional
// cardParentId: string     - DEV ONLY: contains the automatically-assigned menuId of this card

// Main menu data array
let menuItems = [
    /* --------------------------
    Menu Template
    -------------------------- */
    {
        menuId: 'menuTemplate',
        title: 'Menu Template Example',
        showTitle: false,
        subtitle: 'This is a menu example',
        image: 'images/temp2.png',
        color: 'var(--color-15)',
        orbit: 1.5,
        scale: 1,
        hidden: true,
        invisible: true,
        labels: [
            // CARDS WITH THUMBNAILS
            {
                // Cards without cardId become separators
                title: 'Card examples',
                subtitle: 'Main card types to put your content in',
            },
            {
                cardId: 'normalCard',
                title: 'Normal Card',
                subtitle: 'With thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp.png'        // Thumbnail will be shown in 1:1 aspect ratio
            },
            {
                cardId: 'urlCard',
                title: 'URL Card',
                subtitle: 'With thumbnail',
                url: 'https://x.com/artifyber',  // External URL redirect
                image: 'images/temp.png'
            },
            {
                cardId: 'unclickableCard',
                title: 'Unclickable Card',
                subtitle: 'With thumbnail',
                unclickable: true,            // Non-clickable info card
                image: 'images/temp.png'
            },

            // CARDS WITHOUT TEXT
            {
                cardId: 'normalCardBlank',
                blank: true,    // set the card as blank / have no text
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp.png'        // Thumbnail will be shown in 4:5 aspect ratio
            },
            {
                cardId: 'urlCardBlank',
                blank: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp.png'
            },
            {
                cardId: 'unclickableCardBlank',
                blank: true,
                unclickable: true,
                image: 'images/temp.png',
            },

            // CARDS WITHOUT THUMBNAILS
            {
                cardId: 'normalCardPlain',
                title: 'Normal Card',
                subtitle: 'Without thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.'
            },
            {
                cardId: 'urlCardPlain',
                title: 'URL Card',
                subtitle: 'Without thumbnail',
                url: 'https://x.com/artifyber'
            },
            {
                cardId: 'unclickableCardPlain',
                title: 'Unclickable Card',
                subtitle: 'Without thumbnail',
                unclickable: true
            },
            {
                cardId: 'motherCard',
                title: 'Mothercard',
                subtitle: 'This card contains more cards',
                detail: `
                    You can embed cards inside another card by simply using a div element with <code>class="card internal"</code> and set it to reference another card using <code>data-href="menuId:cardId"</code><br>
                    <br>
                    To set a caption, use <code>data-caption="caption"</code>
                    <div class="imgContainer">
                        <div class="card internal" data-href="menuTemplate:normalCard""></div>
                        <div class="card internal" data-href="deltadim"></div>
                        <div class="card internal" data-href="menuTemplate:unclickableCardPlain" data-caption="Optional caption!"></div>
                        <div class="card internal" data-href="menuTemplate:motherCard" data-caption="Cardception..."></div>
                    </div>
                    You can even embed itself if you want!
                `,
                image: 'images/temp2.png'
            },

            // BANNER CARDS
            {
                // Cards without cardId become separators
                title: 'Banner examples',
                subtitle: 'Useful for describing a section of card grid',
            },
            {
                cardId: 'bannerCard',
                title: 'Banner Card',
                subtitle: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerUrlCard',
                title: 'Banner Card (URL)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerUnclickableCard',
                title: 'Banner Card (Unclickable)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerCardBlank',
                title: 'Banner Card - No Thumbnail',
                subtitle: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
            },
            {
                cardId: 'bannerUrlCardBlank',
                title: 'Banner Card - No Thumbnail (URL)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
            },
            {
                cardId: 'bannerUnclickableCardBlank',
                title: 'Banner Card - No Thumbnail (Unclickable)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
            },

            // MENU-LINKED CARDS
            {
                title: 'Menu-Link examples',
                subtitle: 'Cards that open another menu',
            },
            {
                linkId: 'deltadim'  // Links to menu with matching 'menuId' property
            },
            {
                linkId: 'floriverse'
            },
            {
                linkId: 'info'
            },
            {
                linkId: 'deltadim',
                banner: true
            },
            {
                linkId: 'floriverse',
                banner: true
            },
            {
                linkId: 'info',
                banner: true
            },
        ]
    },

    /* --------------------------
    Actual Website Data
    -------------------------- */

    {
        // Deltadim
        title: 'Deltadim',
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
                subtitle: 'About Deltadim',
                banner: true,
                detail:
                    `Deltadim is the main universe portrayed in Daily Art+. Its characteristics are similar to our own universe. Terra is where the main plot takes place. It's an Earth-like planet inhabited by furries, humanoids, and other creatures.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Deltadim. This include character information, reference art, and picture gallery of each character.<br>
                    <br>
                    `,
                image: 'icons/deltadim.png'
            },
            {
                linkId: 'deltadim-teksui',
            },
            {
                linkId: 'deltadim-chromasia',
            },
            {
                linkId: 'deltadim-aakik',
            },
            {
                linkId: 'deltadim-deltaspace',
            },
            {
                title: 'Pinned',
                subtitle: 'You might be looking for these'
            },
            {
                reference: 'deltadim-teksui:artibun',
            },
            {
                reference: 'deltadim-deltaspace:skitty',
            },
            {
                reference: 'deltadim-deltaspace:gamma',
            },
            {
                reference: 'deltadim-teksui:artifish',
            },
            {
                reference: 'deltadim-teksui:artilope',
            },
            {
                reference: 'deltadim-chromasia:shirley',
            },
        ]
    },
    {
        menuId: 'deltadim-teksui',
        title: 'Teksui',
        subtitle: 'Terra',
        image: 'images/deltadim-teksui.png',
        color: 'var(--color-9)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'artibun',
                title: 'Artibun',
                subtitle: '',
                detail:
                    `Artibun is a white female rabbit, with parts of her body colored in lilac, such as her arms, legs, right ear, half of her tail, and chest to abdomen area. Her inner ears are colored in blurple and has dark blue eyes.<br>
                <br>
                Arti has a passion for drawing, singing, and cooking delicacies. She is known in Terra as a celebrity by her popularity on social medias.<br>
                <br>
                Artibun was born as a supposedly faulty clone of Articat. On prototype, she was meant to only be a near identical copy of Articat except with bunny ears and a puffy tail. However, an accident happened, and her flesh wasn't developed correctly. Thankfully, she was later recovered on a second attempt thanks to the love of her partner.
                `,

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She/Any',
                cGender: 'Bigender',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Bunbun',
                cAddOns: '',
                cReference: 'images/r/artibun-r.png',
                cGallery: [
                    'images/c/artibun-c.png',
                    'images/c/artibun-c2.png',
                    'images/c/artibun-c3.png',
                    'images/c/artibun-c4.png',
                    'images/c/artibun-c5.png',
                    'images/c/artibun-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:articat',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artibun-i.png',
            },
            {
                cardId: 'articat',
                title: 'Articat',
                subtitle: '',
                detail:
                    `Articat is a white male cat, with parts of his body colored in light blurple such as his right ear and chest to abdomen area. The inside of his right ear is colored white while the other ear is colored in light blurple.<br>
                <br>
                Arti is a multi-genre music composer, typically creating EDM and a mix of jazz. His success as a musical artist made him just as popular as his partner Artibun on social medias.
                `,

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'He/Any',
                cGender: 'Male',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Kiki',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/articat-c.png',
                    'images/c/articat-c2.png',
                    'images/c/articat-c3.png',
                    'images/c/articat-c4.png',
                    'images/c/articat-c5.png',
                    'images/c/articat-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:artibun',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/articat-i.png',
            },
            {
                cardId: 'artifox',
                title: 'Artifox',
                subtitle: '',
                detail: `Arti Fox is an arctic fox with blue accent colors on parts of his body, such as arms, pawfeet and the base of his tail. His inner ears and eyes are also colored in blue and he has top surgery scars.<br>
                <br>
                Arti likes to play drums and often expresses his pride as a transgender male. Although his selfish and sometime overconfident attitude made him look like a jerk to some people, he still care about the people he loved, such as his family and especially his sister Anna Fox.<br>
                <br>
                Arti was born in Chromasia and moved to Teksui after his gender-affirming surgery. He's currently living in an apartment and work part-time as a fast food employee.`,

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
                subtitle: '',
                detail: `
                Artifish is a white non-binary tiger-cat hybrid with shark features, having a dorsal fin at their back and a caudal fin at the end of their tail. They have green accent colors on their ears, arms, legs, and fins, as well as part of their hair.<br>
                <br>
                Fifi live with their partner Artilope at the outskirts of Teksui and have a passion of cooking and baking.<br>
                <br>
                While being an aquatic creature who needs water to survive, they can also breathe in air as long as their organs stay wet, which they do by sleeping in an aquarium or soaking themselves in nearby pond every couple hours.`,

                isCharacter: true,
                cSpecies: 'Cat + Shark',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cSexuality: 'Demisexual',
                cNicknames: 'Arti, Fifi',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artifish-c.png',
                    'images/c/artifish-c2.png',
                    'images/c/artifish-c3.png',
                    'images/c/artifish-c4.png',
                    'images/c/artifish-c5.png',
                    'images/c/artifish-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:artilope',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artifish-i.png',
            },
            {
                cardId: 'artigoat',
                title: 'Artigoat',
                subtitle: '',
                detail: `
                Artigoat is a white male goat with yellow fur pattern on his legs and ears, as well as having a pair of short pointy horns. He also has a pair of hooves as his feet.<br>
                <br>
                Arti has a hobby of reading books, writing stories, and play saxophone. He lives in an apartment with his partner Artipup and works as a cashier at a local supermarket in Teksui.`,

                isCharacter: true,
                cSpecies: 'Goat',
                cPronouns: 'He',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: 'Arti, Baba, Goat',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artigoat-c.png',
                    'images/c/artigoat-c2.png',
                    'images/c/artigoat-c3.png',
                    'images/c/artigoat-c4.png',
                    'images/c/artigoat-c5.png',
                    'images/c/artigoat-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:artipup',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artigoat-i.png',
            },
            {
                cardId: 'artilope',
                title: 'Artilope',
                subtitle: '',
                detail: `
                Artilope is a white female jackalope, a fusion between antelope and jackrabbit, with orange fur on her arms, legs, right ear, half of her tail, and chest in a shape resembling a heart. She has a pair of antlers on her head that look like forks.<br>
                <br>
                Living at the outskirts of Teksui with her partner Artifish, she is a lumberjack and carpenter. She likes to make wood sculptures and furnitures.`,

                isCharacter: true,
                cSpecies: 'Jackalope',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Demisexual',
                cNicknames: 'Arti, Lolo, Jacquie, Jacqueline',
                cAddOns: '',
                cReference: 'images/r/artilope-r.png',
                cGallery: [
                    'images/c/artilope-c.png',
                    'images/c/artilope-c2.png',
                    'images/c/artilope-c3.png',
                    'images/c/artilope-c4.png',
                    'images/c/artilope-c5.png',
                    'images/c/artilope-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:artifish',
                        relation: 'Significant Other'
                    },
                    {
                        cardId: 'deltadim-teksui:xanthe',
                        relation: 'Younger Sister'
                    },
                ],

                image: 'images/i/artilope-i.png',
            },
            {
                cardId: 'artipup',
                title: 'Artipup',
                subtitle: '',
                detail: `
                Artipup is a white male dog with red fur on his legs, right ear, muzzle and abdomen.<br>
                <br>
                Living in an apartment with his partner Artigoat, this puppy occasionally makes music with his minimal setup, being a laptop, MIDI keytar and an amplifier.`,

                isCharacter: true,
                cSpecies: 'Dog',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: 'Arti, Arfy, Puppy',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artipup-c.png',
                    'images/c/artipup-c2.png',
                    'images/c/artipup-c3.png',
                    'images/c/artipup-c4.png',
                    'images/c/artipup-c5.png',
                    'images/c/artipup-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:artigoat',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artipup-i.png',
            },
            {
                cardId: 'artineko',
                title: 'Artineko',
                subtitle: '',
                detail: `
                Artineko is a female human who loves to cosplay as a pink catgirl, having pink cat ears, long hair, and paw gloves.<br>
                <br>
                She is an influencer and streamer who makes content on social medias. She has a younger sibling with the name Artimouse, who lives in Chromasia.<br>
                <br>
                Neko pretty much never be seen taking off her accessories. She claims that she feels more comfortable that way.`,

                isCharacter: true,
                cSpecies: 'Human (cat cosplay)',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Aroace',
                cNicknames: 'Arti, Nay, Neko',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artineko-c.png',
                    'images/c/artineko-c2.png',
                    'images/c/artineko-c3.png',
                    'images/c/artineko-c4.png',
                    'images/c/artineko-c5.png',
                    'images/c/artineko-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:artimouse',
                        relation: 'Younger Sister'
                    },
                ],

                image: 'images/i/artineko-i.png',
            },
            {
                cardId: 'artimoth',
                title: 'Artimoth',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Moth',
                cPronouns: 'He/They',
                cGender: 'Male',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Mothy',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artimoth-c.png'
                ],

                image: 'images/i/artimoth-i.png',
            },
            {
                cardId: 'eros',
                title: 'Eros',
                subtitle: '',
                detail: `
                Eros is a tall black female cat with light gray fur on her face, darker shade of black on the tip of her ears, and orange pawpads. She has no tail and her ears are pointy, as well as wearing glasses.<br>
                <br>
                Eros works as a barista at a local cafe in Teksui. She has a shy and introverted personality and prefer to not be the center of attention. She lives in an apartment with her loving partner named Sora.
                `,

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She/They',
                cGender: 'Trans-female',
                cSexuality: 'Demisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/eros-c.png',
                    'images/c/eros-c2.png',
                    'images/c/eros-c3.png',
                    'images/c/eros-c4.png',
                    'images/c/eros-c5.png',
                    'images/c/eros-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:sora',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/eros-i.png',
            },
            {
                cardId: 'sora',
                title: 'Sora',
                subtitle: '',
                detail: `
                Sora is a short light gray female cat with darker gray fur on her face. She has no tail and her ears are pointy.<br>
                <br>
                Sora is unemployed and spends most of her time at the apartment she shares with her partner Eros. She enjoys writing stories.
                `,

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She/They',
                cGender: 'Trans-female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/sora-r.png',
                cGallery: [
                    'images/c/sora-c.png',
                    'images/c/sora-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:eros',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/sora-i.png',
            },
            {
                cardId: 'furfy',
                title: 'Furfy',
                subtitle: '',
                detail: `
                Furfy is a white female cat with green fur on the tip of her tail and lighter shade of green for her face. Her pawpads are green and is often seen wearing a green sweater.<br>
                <br>
                Furfy works as a baker at her own bakery shop in Teksui. Other than baking loaves of bread, she also enjoys taking care of her plants and flowers in her free time. She lives with her loving partner named Mist.
                `
                ,

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/furfy-c6.png',
                    'images/c/furfy-c.png',
                    'images/c/furfy-c2.png',
                    'images/c/furfy-c3.png',
                    'images/c/furfy-c4.png',
                    'images/c/furfy-c5.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:mist',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/furfy-i.png',
            },
            {
                cardId: 'mist',
                title: 'Mist',
                subtitle: '',
                detail: `
                Mist is a white female cat with her inner ears colored in teal and lighter shade of teal for her face. Her pawpads are teal and is often seen wearing a teal sweater and light blue scarf.<br>
                <br>
                Mist works together with her partner Furfy at the bakery shop in Teksui. Other than that she also loves to take care of plants.
                `,

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/mist-c.png',
                    'images/c/mist-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:furfy',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/mist-i.png',
            },
            {
                cardId: 'card',
                title: 'Card',
                subtitle: '',
                detail: `
                Card is an orange female cat with an open cardboard box as her head. It consists of drawn-on cat features such as triangular ears, as well as some informational texts on the sides of her head like a typical packaging box. Her eyes and mouth are also seemingly drawn-on. However it can dynamically change expressions like a real face.<br>
                <br>
                Card has a part-time job as a delivery courier. She lives with her partner Gift at their own home in Teksui. She likes to make crafts and origamis out of paper. She also has an obsession of collecting anything and sort them into cardboard boxes.
                `,

                isCharacter: true,
                cSpecies: 'Cardboard Cat',
                cPronouns: 'She/Any',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/card-r.png',
                cGallery: [
                    'images/c/card-c.png',
                    'images/c/card-c2.png',
                    'images/c/card-c3.png',
                    'images/c/card-c4.png',
                    'images/c/card-c5.png',
                    'images/c/card-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:gift',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/card-i.png',
            },
            {
                cardId: 'gift',
                title: 'Gift',
                subtitle: '',
                detail: `
                Gift is a white female rabbit with a gift box as her head. It's a plain white box with a red ribbon tied around it and a bow on top. It also has two droopy bunny ears attached from the lid. Like Card, her eyes and mouth are seemingly drawn-on but can dynamically change expressions like a real face.<br>
                <br>
                Gift lives with her partner Card and really love making surprises and parties for her loved ones and friends.
                `,

                isCharacter: true,
                cSpecies: 'Giftbox Rabbit',
                cPronouns: 'She/Any',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/gift-r.png',
                cGallery: [
                    'images/c/gift-c.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:card',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/gift-i.png',
            },
            {
                cardId: 'elise',
                title: 'Elise',
                subtitle: '',
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
                subtitle: '',
                detail: `
                Fika is an orange female fox with long light beige hair. Her inner ears and pawpads are in slightly darker shade of orange.<br>
                <br>
                Fika lives with Rai as a couple. She enjoys drawing and painting as well as singing. She sometimes upload her paintings on social medias.<br>
                <br>
                As a neighbor to Artibun and Articat, Fika doesn't really interact with them too much. She doesn't hate them as much as Rai does, but she still prefer to keep a distance from both Arti's.
                `,

                isCharacter: true,
                cSpecies: 'Fox',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Heterosexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/fika-c.png',
                    'images/c/fika-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:rai',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/fika-i.png',
            },
            {
                cardId: 'rai',
                title: 'Rai',
                subtitle: '',
                detail: `
                Rai is a white male fox with grey ears and black eyes. His pupils are white and has no pawpads.<br>
                <br>
                Rai has a passion in music production, often making EDM tracks in his home studio. He lives with his partner Fika and is a neighbor to Artibun and Articat.<br>
                <br>
                Despite being neighbors, Rai dislikes both Arti's. He finds them too obnoxious and often tries to avoid them as much as possible. The reason? Might be because of their popularity and fame.
                `,

                isCharacter: true,
                cSpecies: 'Fox',
                cPronouns: 'He',
                cGender: 'Male',
                cSexuality: 'Heterosexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/rai-r.png',
                cGallery: [
                    'images/c/rai-c.png',
                    'images/c/rai-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:fika',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/rai-i.png',
            },
            {
                cardId: 'xanthe',
                title: 'Xanthe',
                subtitle: '',
                detail: `
                Xanthe is a white jackalope with short orange hair, light beige fur on her arms and legs, and red eyes. She has a pair of spiky antlers and hooves for her feet.<br>
                <br>
                Xanthe lives at the central part of Teksui. She loves photography and traveling. She occasionally visits her sister at the outskirts of Teksui to hang out, or just to annoy her.`,

                isCharacter: true,
                cSpecies: 'Jackalope',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Heterosexual',
                cNicknames: 'Xanthelope',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/xanthe-c.png',
                    'images/c/xanthe-c2.png',
                    'images/c/xanthe-c3.png',
                    'images/c/xanthe-c4.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:artilope',
                        relation: 'Older Sister'
                    },
                ],

                image: 'images/i/xanthe-i.png',
            },
            {
                cardId: 'remy',
                title: 'Remy',
                subtitle: '',
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
            {
                cardId: 'unnamed155',
                title: 'Unnamed-155',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Robocat',
                cPronouns: 'He/They',
                cGender: 'Non-Binary',
                cSexuality: 'Asexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/unnamed155-r.png',
                cGallery: [],

                image: 'images/i/unnamed155-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-chromasia',
        title: 'Chromasia',
        subtitle: 'Terra',
        image: 'images/deltadim-chromasia.png',
        color: 'var(--color-14)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'artibon',
                title: 'Artibon',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: 'Arti, Ribbon, Bonbon, Sylvy',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artibon-c.png',
                    'images/c/artibon-c2.png',
                    'images/c/artibon-c3.png',
                    'images/c/artibon-c4.png',
                    'images/c/artibon-c5.png',
                    'images/c/artibon-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:artishade',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artibon-i.png',
            },
            {
                cardId: 'artimouse',
                title: 'Artimouse',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Mousegirl',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Mimi',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artimouse-c.png',
                    'images/c/artimouse-c1.png',
                    'images/c/artimouse-c2.png',
                    'images/c/artimouse-c3.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-teksui:artineko',
                        relation: 'Older Sister'
                    },
                ],

                image: 'images/i/artimouse-i.png',
            },
            {
                cardId: 'artiferret',
                title: 'Artiferret',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Ferret',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Arti, Fer',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artiferret-c.png',
                    'images/c/artiferret-c2.png',
                    'images/c/artiferret-c3.png',
                    'images/c/artiferret-c4.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-aakik:ellie',
                        relation: 'Married'
                    },
                ],

                image: 'images/i/artiferret-i.png',
            },
            {
                cardId: 'artitri',
                title: 'Artitri',
                subtitle: '',
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
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:artibot',
                        relation: 'Machinemate'
                    },
                ],

                image: 'images/i/artitri-i.png',
            },
            {
                cardId: 'artibot',
                title: 'Artibot',
                subtitle: '',
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
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:artitri',
                        relation: 'Machinemate'
                    },
                ],

                image: 'images/i/artibot-i.png',
            },
            {
                cardId: 'artishade',
                title: 'Artishade',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Fennec',
                cPronouns: 'She/He/They',
                cGender: 'Intersex Bigender',
                cSexuality: 'Lesbian',
                cNicknames: 'Arti, Sasha',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artishade-c.png',
                    'images/c/artishade-c2.png',
                    'images/c/artishade-c3.png',
                    'images/c/artishade-c4.png',
                    'images/c/artishade-c5.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:artibon',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artishade-i.png',
            },
            {
                cardId: 'artidragon',
                title: 'Artidragon',
                subtitle: '',
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
                subtitle: '',
                detail: `
                Shirley is an orange cat-fox hybrid with white fur on her ears, muzzle, chest, abdomen, and the tip of her tail. Her eyes are yellow and her pawpads and inner ears are orange.<br>
                <br>
                She lives with her boyfriend Rose, and works as a barista at a local cafe in Chromasia. She also loves gardening and taking care of pretty flowers.`,

                isCharacter: true,
                cSpecies: 'Cat + Fox',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Heterosexual',
                cNicknames: 'Manda, Alamanda',
                cAddOns: '',
                cReference: 'images/r/shirley-r.png',
                cGallery: [
                    'images/c/shirley-c.png',
                    'images/c/shirley-c2.png',
                    'images/c/shirley-c3.png',
                    'images/c/shirley-c4.png',
                    'images/c/shirley-c5.png',
                    'images/c/shirley-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:rose',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/shirley-i.png',
            },
            {
                cardId: 'rose',
                title: 'Rose',
                subtitle: '',
                detail: `
                Rose is a green fox with red fur covering his head and tail, and dark green neck fur. In fact, his color schemes and fur patterns look like a typical rose flower.<br>
                <br>
                Rose really likes the color pink. He can often be seen wearing pink sweaters and skirts or trousers. He doesn't mind being called cute or pretty despite being a male.<br>
                <br>
                He works as a farmer in Chromasia, growing various kinds of crops to sell at the local market.`,

                isCharacter: true,
                cSpecies: 'Fox',
                cPronouns: 'He/Any',
                cGender: 'Male',
                cSexuality: 'Heterosexual',
                cNicknames: 'Rosey',
                cAddOns: '',
                cReference: 'images/r/rose-r.png',
                cGallery: [
                    'images/c/rose-c.png',
                    'images/c/rose-c2.png',
                    'images/c/rose-c3.png',
                    'images/c/rose-c4.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:shirley',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/rose-i.png',
            },
            {
                cardId: 'hana',
                title: 'Hana',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Bee',
                cPronouns: 'She/They',
                cGender: 'Demigirl',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/hana-c.png',
                    'images/c/hana-c2.png',
                    'images/c/hana-c3.png',
                    'images/c/hana-c4.png',
                    'images/c/hana-c5.png',
                    'images/c/hana-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'floriverse-epsilon:fveAurelia',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/hana-i.png',
            },
            {
                cardId: 'caramella',
                title: 'Caramella',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat + Shrimp',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Mella',
                cAddOns: `Design made by <a href="https://x.com/M3ko_Ne" target="_blank">M3ko_Ne</a>`,
                cReference: 'images/r/caramella-r.png',
                cGallery: [
                    'images/c/caramella-c.png',
                    'images/c/caramella-c2.png',
                    'images/c/caramella-c3.png',
                    'images/c/caramella-c4.png',
                    'images/c/caramella-c5.png',
                    'images/c/caramella-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:azurey',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/caramella-i.png',
            },
            {
                cardId: 'azurey',
                title: 'Azurey',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cat + Shark',
                cPronouns: 'He/They',
                cGender: 'Demiboy',
                cSexuality: 'Pansexual',
                cNicknames: 'Azu',
                cAddOns: '',
                cReference: 'images/r/azurey-r.png',
                cGallery: [
                    'images/c/azurey-c.png',
                    'images/c/azurey-c2.png',
                    'images/c/azurey-c3.png',
                    'images/c/azurey-c4.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:caramella',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/azurey-i.png',
            },
            {
                cardId: 'mida',
                title: 'Mida',
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
        title: 'Aakik',
        subtitle: 'Terra',
        image: 'images/deltadim-aakik.png',
        color: 'var(--color-3)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'artiusagi',
                title: 'Sukie',
                subtitle: '',
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
                cardId: 'artiproto',
                title: 'Port',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Protogen',
                cPronouns: 'He/They/It',
                cGender: 'Male',
                cSexuality: 'Asexual',
                cNicknames: 'Proto',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artiproto-c.png',
                ],

                image: 'images/i/artiproto-i.png',
            },
            {
                cardId: 'ellie',
                title: 'Ellie',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Catgirl',
                cPronouns: 'She/It',
                cGender: 'Trans-female',
                cSexuality: 'Demisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/ellie-c.png',
                    'images/c/ellie-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:artiferret',
                        relation: 'Married'
                    },
                ],

                image: 'images/i/ellie-i.png',
            },
            {
                cardId: 'amber',
                title: 'Amber',
                subtitle: '',
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
                subtitle: '',
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
            {
                cardId: 'cerulean',
                title: 'Cerulean',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Demisexual',
                cNicknames: '',
                cAddOns: 'Adopted from <a href="https://x.com/fixy_cookies" target="_blank">Fixy Cookies</a>',
                cReference: 'images/r/cerulean-r.png',
                cGallery: [
                    'images/c/cerulean-c.png',
                ],

                image: 'images/i/cerulean-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-deltaspace',
        title: 'Deltaspace',
        subtitle: 'Somewhere in space',
        image: 'images/deltadim-deltaspace.png',
        color: 'var(--color-15)',
        parent: 'deltadim',
        hidden: true,
        labels: [
            {
                cardId: 'skitty',
                title: 'Singularikitty',
                subtitle: '',
                detail: `
                Singularikitty is a black cat with red fur on his arms and legs, orange eyes, and a ring on the tip of his tail. He always wears a collar that holds a small black hole which they can deploy anytime.<br>
                <br>
                Skitty's eyes and mouth essentially function as black holes, which sucks in anything that gets nearby. However, she doesn't use this power to harm others, as she is a very kind and gentle cat. SHe constantly warn people to not get nearby his face for that matter.<br>
                <br>
                Skitty has an ability to grow or shrink in size as he pleases. He also can toggle the black hole on his collar whenever he wants.<br>
                <br>
                'DESTROYER' is the name Skitty given to his black hole.`,

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
                cRelations: [
                    {
                        cardId: 'deltadim-deltaspace:gamma',
                        relation: 'Spacekitty Trio'
                    },
                    {
                        cardId: 'deltadim-deltaspace:micro',
                        relation: 'Spacekitty Trio'
                    },
                ],

                image: 'images/i/skitty-i.png',
            },
            {
                cardId: 'gamma',
                title: 'Gamma',
                subtitle: '',
                detail: `
                Gamma is a white cat with blue fur on her arms and legs, dark inverted blue eyes, a long hair, and a ring on the tip of her tail. Her color scheme is essentially Skitty's inverted colors.<br>
                <br>
                Gamma is a very shy and soft person. She always wears a blue collar that holds a small white hole which she can deploy anytime. Her white hole ejects anything that gets nearby. As such, she is very warm due to constant radiation emitted from her body.<br>
                <br>
                Gamma has an ability to grow or shrink in size as she pleases. She also can toggle the white hole on her collar whenever she wants.<br>
                <br>
                Despite being a complete opposite of Skitty, Gamma confirmed that she is not his sibling, as the matter that she spew out does not come from Skitty's black hole. She's still speculating where it comes from...<br>
                <br>
                'RESTORER' is the name Gamma given to her white hole.`,

                isCharacter: true,
                cSpecies: 'Cat',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/gamma-c.png',
                    'images/c/gamma-c2.png',
                    'images/c/gamma-c3.png',
                    'images/c/gamma-c4.png',
                    'images/c/gamma-c5.png',
                    'images/c/gamma-c6.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-deltaspace:skitty',
                        relation: 'Spacekitty Trio'
                    },
                    {
                        cardId: 'deltadim-deltaspace:micro',
                        relation: 'Spacekitty Trio'
                    },
                ],

                image: 'images/i/gamma-i.png',
            },
            {
                cardId: 'micro',
                title: 'Micro',
                subtitle: '',
                detail: `
                Micro is a non-binary dark purple cat with half of their body parts (eyes, pawpads, glows, etc.) in blue while the other half is in pink. They always wear a blue collar with a pink bell. They also sometimes wear an air bubble on their head purely for cosmetic.<br>
                <br>
                As a space cat, Micro doesn't need to breathe to survive. They also don't need to consume food or drink, as they have no mouth. This also makes them mute. They communicate through body language and writing on a small board they always carry around.<br>
                <br>
                Micro has a flying saucer that they use to travel long-distances in space. The saucer is also a storage for all sorts of thing they collect from their travels.<br>
                <br>
                They possess a power of vacuum manipulation, albeit they don't really use it often as it is very limited. They can push and pull objects by controlling the vacuum around them.
                `,

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
                cRelations: [
                    {
                        cardId: 'deltadim-deltaspace:gamma',
                        relation: 'Spacekitty Trio'
                    },
                    {
                        cardId: 'deltadim-deltaspace:skitty',
                        relation: 'Spacekitty Trio'
                    },
                ],

                image: 'images/i/micro-i.png',
            },
            {
                cardId: 'artilotl',
                title: 'Artilotl',
                subtitle: '',
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
                subtitle: '',
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
                cRelations: [
                    {
                        cardId: 'deltadim-deltaspace:nayacani',
                        relation: 'Sister'
                    }
                ],

                image: 'images/i/articani-i.png',
            },
            {
                cardId: 'nayacani',
                title: 'Nayacani',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Lucani',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Heterosexual',
                cNicknames: 'Naya',
                cAddOns: 'Lucani is an open-species created by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a>',
                cReference: 'images/r/nayacani-r.png',
                cGallery: [],
                cRelations: [
                    {
                        cardId: 'deltadim-deltaspace:articani',
                        relation: 'Brother'
                    }
                ],

                image: 'images/i/nayacani-i.png',
            },
            {
                cardId: 'ryon',
                title: 'Ryon',
                subtitle: '',
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
                subtitle: '',
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
            {
                cardId: 'laniakea',
                title: 'Laniakea',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/laniakea-c1.png',
                    'images/c/laniakea-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-deltaspace:vela',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/laniakea-i.png',
            },
            {
                cardId: 'vela',
                title: 'Vela',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She/Any',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/vela-c1.png',
                    'images/c/vela-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-deltaspace:laniakea',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/vela-i.png',
            },
            {
                cardId: 'ichor',
                title: 'Ichor',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Black Hole',
                cPronouns: 'Any Pronouns',
                cGender: 'Non-binary',
                cSexuality: 'Aroace',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/ichor-r.png',
                cGallery: [],

                image: 'images/i/ichor-i.png',
            },
        ]
    },



    {
        // Floriverse
        title: 'Floriverse',
        menuId: 'floriverse',
        subtitle: 'Florie Universe',
        image: 'icons/floriverse.png',
        color: 'var(--color-2)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Floriverse',
                banner: true,
                detail:
                    `
                    Floriverse is a universe of flories, sentient floral creatures, with Klorofil as its main setting, a planet similar to Earth where the main characters live.<br>
                    <br>
                    Anyone that enters Floriverse instantly transforms into a florie. However, flories who leave Floriverse retain their form.<br>
                    <h4>What's in this page</h4>
                    This page list all flories in separate categories based on the Floriverse album they associate with, as well as uncategorized ones.<br>`,
                image: 'icons/floriverse.png'
            },
            {
                linkId: 'floriverse-uncat',
            },
            {
                linkId: 'floriverse-vanilla',
            },
            {
                linkId: 'floriverse-delta',
            },
            {
                linkId: 'floriverse-epsilon',
            },
            {
                title: 'Pinned',
                subtitle: 'You might be looking for these'
            },
            {
                reference: 'floriverse-epsilon:fveAurelia',
            },
            {
                reference: 'floriverse-uncat:fvArtiflow',
            },
            {
                reference: 'floriverse-uncat:fvArtidell',
            },
            {
                reference: 'floriverse-vanilla:fvvFurflow',
            },
            {
                reference: 'floriverse-delta:fvdWina',
            },
            {
                reference: 'floriverse-epsilon:fveMisty',
            },
        ]
    },
    {
        title: 'Floriverse (Unsorted)',
        menuId: 'floriverse-uncat',
        parent: 'floriverse',
        subtitle: 'Flories with no associated album',
        image: 'images/fvuncat-i.png',
        color: 'var(--color-11)',
        hidden: true,
        labels: [
            {
                cardId: 'fvZep',
                title: 'Zep',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Alien flower',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/uncat/Zep.png',
                detail: '',
                image: 'images/flories/uncat/Zep.png'
            },
            {
                cardId: 'fvMintscreen',
                title: 'Mintscreen',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Robot florie',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Mintscreen.png',
                detail: '',
                image: 'images/flories/uncat/Mintscreen.png'
            },
            {
                cardId: 'fvKau',
                title: 'Kau',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cauliflower',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/uncat/Kau.png',
                detail: '',
                image: 'images/flories/uncat/Kau.png'
            },
            {
                cardId: 'fvSweetbreaker',
                title: 'Sweetbreaker',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Sweetbreaker.png',
                detail: '',
                image: 'images/flories/uncat/Sweetbreaker.png'
            },
            {
                cardId: 'fvCuby',
                title: 'Cuby',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Slimy blueberry',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Cuby.png',
                detail: '',
                image: 'images/flories/uncat/Cuby.png'
            },
            {
                cardId: 'fvBlizzi',
                title: 'Blizzi',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Ice flower',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/uncat/Blizzi.png',
                detail: '',
                image: 'images/flories/uncat/Blizzi.png'
            },
            {
                cardId: 'fvPlugika',
                title: 'Plugika',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Electric plug florie',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Plugika.png',
                detail: '',
                image: 'images/flories/uncat/Plugika.png'
            },
            {
                cardId: 'fvTessa',
                title: 'Tessa',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/uncat/Tessa.png',
                detail: '',
                image: 'images/flories/uncat/Tessa.png'
            },
            {
                cardId: 'fvGem',
                title: 'Gem',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Gem',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Gem.png',
                detail: '',
                image: 'images/flories/uncat/Gem.png'
            },
            {
                cardId: 'fvAnvre',
                title: 'Anvre',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Anvre.png',
                detail: '',
                image: 'images/flories/uncat/Anvre.png'
            },
            {
                cardId: 'fvLatrice',
                title: 'Latrice',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Bellflower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Latrice.png',
                detail: '',
                image: 'images/flories/uncat/Latrice.png'
            },
            {
                cardId: 'fvCactunPipin',
                title: 'Cactun & Pipin',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cactus',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/CactunAndPipin.png',
                detail: '',
                image: 'images/flories/uncat/CactunAndPipin.png'
            },
            {
                cardId: 'fvSa',
                title: 'Sa',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Sawblade Flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Sa.png',
                detail: '',
                image: 'images/flories/uncat/Sa.png'
            },
            {
                cardId: 'fvChloe',
                title: 'Chloe',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Four',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Chloe.png',
                detail: '',
                image: 'images/flories/uncat/Chloe.png'
            },
            {
                cardId: 'fvTeknia',
                title: 'Teknia',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Roboflorie',
                cPronouns: 'She/It',
                cGender: 'Female',
                cSexuality: 'Asexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/flories/uncat/Teknia.png',
                cGallery: [
                    'images/c/teknia-c.png',
                ],

                image: 'images/flories/uncat/Teknia.png'
            },
            {
                cardId: 'fvArtiflow',
                title: 'Artiflow',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Hepatica',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Artiflow.png',
                cAddOns: '',
                detail: '',
                cRelations: [
                    {
                        cardId: 'floriverse-uncat:fvArtidell',
                        relation: 'Significant Other'
                    },
                ],
                image: 'images/flories/uncat/Artiflow.png'
            },
            {
                cardId: 'fvArtidell',
                title: 'Artidell',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'He/She',
                cGender: 'Bigender',
                cReference: 'images/flories/uncat/Artidell.png',
                cAddOns: '',
                detail: '',
                cRelations: [
                    {
                        cardId: 'floriverse-uncat:fvArtiflow',
                        relation: 'Significant Other'
                    },
                ],
                image: 'images/flories/uncat/Artidell.png'
            },
            {
                cardId: 'fvKappa',
                title: 'Kappa',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Sunflower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Kappa.png',
                detail: '',
                image: 'images/flories/uncat/Kappa.png'
            },
            {
                cardId: 'fvSunflette',
                title: 'Sunflette',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Sunflower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Sunflette.png',
                detail: '',
                image: 'images/flories/uncat/Sunflette.png'
            },
            {
                cardId: 'fvStrawrberry',
                title: 'Strawrberry',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Strawberrikitty',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Strawrberry.png',
                detail: '',
                image: 'images/flories/uncat/Strawrberry.png'
            },
            {
                cardId: 'fvLyte',
                title: 'Lyte',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Robot berry',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Lyte.png',
                detail: '',
                image: 'images/flories/uncat/Lyte.png'
            },
            {
                cardId: 'fvFyra',
                title: 'Fyra',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Fyra.png',
                detail: '',
                image: 'images/flories/uncat/Fyra.png'
            },
            {
                cardId: 'fvTherra',
                title: 'Therra',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Therra.png',
                detail: '',
                image: 'images/flories/uncat/Therra.png'
            },
            {
                cardId: 'fvDJMuseberry',
                title: 'DJ Museberry',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Berry',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/DJMuseberry.png',
                detail: '',
                image: 'images/flories/uncat/DJMuseberry.png'
            },
            {
                cardId: 'fvLineko',
                title: 'Lineko',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cat lemon',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Lineko.png',
                detail: '',
                image: 'images/flories/uncat/Lineko.png'
            },
            {
                cardId: 'fvPompy',
                title: 'Pompy',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Allium',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Pompy.png',
                detail: '',
                image: 'images/flories/uncat/Pompy.png'
            },
            {
                cardId: 'fvBeep',
                title: 'Beep',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/uncat/Beep.png',
                detail: '',
                image: 'images/flories/uncat/Beep.png'
            },
            {
                cardId: 'fvSweetree',
                title: 'Sweetree',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Candy tree',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/uncat/Sweetree.png',
                detail: '',
                image: 'images/flories/uncat/Sweetree.png'
            },
            {
                cardId: 'fvEco',
                title: 'Eco',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cloudy cottonflower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Eco.png',
                detail: '',
                image: 'images/flories/uncat/Eco.png'
            },
            {
                cardId: 'fvCryoflow',
                title: 'Cryoflow',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Frozen flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Cryoflow.png',
                detail: '',
                image: 'images/flories/uncat/Cryoflow.png'
            },
            {
                cardId: 'fvDelia',
                title: 'Delia',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Dandelion',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Delia.png',
                detail: '',
                image: 'images/flories/uncat/Delia.png'
            },
            {
                cardId: 'fvSpinny',
                title: 'Spinny',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Berry with wind turbine',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Spinny.png',
                detail: '',
                image: 'images/flories/uncat/Spinny.png'
            },
            {
                cardId: 'fvAero',
                title: 'Aero',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Baloon tulip',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/uncat/Aero.png',
                detail: '',
                image: 'images/flories/uncat/Aero.png'
            },
            {
                cardId: 'fvEnila',
                title: 'Enila',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Fruit with broken stem',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Enila.png',
                detail: '',
                image: 'images/flories/uncat/Enila.png'
            },
            {
                cardId: 'fvTikao',
                title: 'Tikao',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Megaphone',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Tikao.png',
                detail: '',
                image: 'images/flories/uncat/Tikao.png'
            },
            {
                cardId: 'fvFlaany',
                title: 'Flaany',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Upside',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Flaany.png',
                detail: '',
                image: 'images/flories/uncat/Flaany.png'
            },
            {
                cardId: 'fvBna',
                title: 'B-na',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/uncat/B-na.png',
                detail: '',
                image: 'images/flories/uncat/B-na.png'
            },
            {
                cardId: 'fvKraka',
                title: 'Kraka',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cactus monster',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Kraka.png',
                detail: '',
                image: 'images/flories/uncat/Kraka.png'
            },
            {
                cardId: 'fvAzerium',
                title: 'Azerium',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Robot tulip',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/uncat/Azerium.png',
                detail: '',
                image: 'images/flories/uncat/Azerium.png'
            },
            {
                cardId: 'fvVo',
                title: 'Vo',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Ghost tulip',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/uncat/Vo.png',
                detail: '',
                image: 'images/flories/uncat/Vo.png'
            },
            {
                cardId: 'fvSmog',
                title: 'Smog',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Pollutant',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/uncat/Smog.png',
                detail: '',
                image: 'images/flories/uncat/Smog.png'
            },
            {
                cardId: 'fvNiane',
                title: 'Niane',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Niane.png',
                detail: '',
                image: 'images/flories/uncat/Niane.png'
            },
            {
                cardId: 'fvNeru',
                title: 'Neru',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Neru.png',
                detail: '',
                image: 'images/flories/uncat/Neru.png'
            },
            {
                cardId: 'fvViona',
                title: 'Viona',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Venus flytrap',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Viona.png',
                detail: '',
                image: 'images/flories/uncat/Viona.png'
            },
            {
                cardId: 'fvPhyana',
                title: 'Phyana',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Phyana.png',
                detail: '',
                image: 'images/flories/uncat/Phyana.png'
            },
            {
                cardId: 'fvNell',
                title: 'Nell',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Popcorn??',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/uncat/Nell.png',
                detail: '',
                image: 'images/flories/uncat/Nell.png'
            },
            {
                cardId: 'fvVoni',
                title: 'Voni',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Void tulip',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/uncat/Voni.png',
                detail: '',
                image: 'images/flories/uncat/Voni.png'
            },
            {
                cardId: 'fvMizudria',
                title: 'Mizudria',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Mizudria.png',
                detail: '',
                image: 'images/flories/uncat/Mizudria.png'
            },
            {
                cardId: 'fvSuneea',
                title: 'Suneea',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Sunflower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Suneea.png',
                detail: '',
                image: 'images/flories/uncat/Suneea.png'
            },
            {
                cardId: 'fvAcidzer',
                title: 'Acidzer',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Acid tulip',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/uncat/Acidzer.png',
                detail: '',
                image: 'images/flories/uncat/Acidzer.png'
            },
            {
                cardId: 'fvMia',
                title: 'Mia',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Potted plant',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/uncat/Mia.png',
                detail: '',
                image: 'images/flories/uncat/Mia.png'
            }
        ]
    },
    {
        title: 'Floriverse',
        menuId: 'floriverse-vanilla',
        parent: 'floriverse',
        subtitle: '2023 Album',
        image: 'images/fv-i.png',
        color: 'var(--color-16)',
        hidden: true,
        labels: [
            {
                cardId: 'fvvInfo',
                title: 'Info',
                subtitle: 'Information about the Floriverse Album',
                banner: true,
                detail: `
                    Released: October 5th, 2023<br>
                    Total tracks: 10<br>
                    Total length: 32m 16s<br>
                    <a href="https://open.spotify.com/album/0AGxggSyuXqGdYLk0D7pbF?si=4Eej22G-RcOnbu8XIagHWQ" target="_blank">Spotify album link</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fv-i.png" data-caption="Floriverse" data-subcaption="Album cover for Floriverse"><br>
                    `,
                image: 'images/fv-i.png'
            },
            {
                cardId: 'fvvPotto',
                title: 'Potto',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Potted plant',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fv-potto.png',
                detail: '',
                image: 'images/flories/fv-potto.png'
            },
            {
                cardId: 'fvvTwinkle',
                title: 'Twinkle',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Star flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fv-twinkle.png',
                detail: '',
                image: 'images/flories/fv-twinkle.png'
            },
            {
                cardId: 'fvvStrawmon',
                title: 'Strawmon',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Glass',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fv-strawmon.png',
                detail: '',
                image: 'images/flories/fv-strawmon.png'
            },
            {
                cardId: 'fvvNocto',
                title: 'Nocto',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Spirit tulip',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fv-nocto.png',
                detail: '',
                image: 'images/flories/fv-nocto.png'
            },
            {
                cardId: 'fvvFurflow',
                title: 'Furflow',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/c/furflow-c.png',
                cGallery: [
                    'images/flories/fv-furflow.png',
                    'images/c/furflow-c2.png',
                    'images/c/furflow-c3.png',
                    'images/c/furflow-c4.png',
                ],
                cRelations: [
                    {
                        cardId: 'floriverse-epsilon:fveMisty',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/c/furflow-c.png'
            },
            {
                cardId: 'fvvPana',
                title: 'Pana',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Pancake tulip',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fv-pana.png',
                detail: '',
                image: 'images/flories/fv-pana.png'
            },
            {
                cardId: 'fvvKosmaya',
                title: 'Kosmaya',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Exotic flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fv-kosmaya.png',
                detail: '',
                image: 'images/flories/fv-kosmaya.png'
            },
            {
                cardId: 'fvvPinkly',
                title: 'Pinkly',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fv-pinkly.png',
                detail: '',
                image: 'images/flories/fv-pinkly.png'
            },
            {
                cardId: 'fvvMincha',
                title: 'Mincha',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Jasmine',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fv-mincha.png',
                detail: '',
                image: 'images/flories/fv-mincha.png'
            },
            {
                cardId: 'fvvLan',
                title: 'Lan',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Lemon',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fv-lan.png',
                detail: '',
                image: 'images/flories/fv-lan.png'
            }
        ]
    },
    {
        title: 'Floriverse : Delta',
        menuId: 'floriverse-delta',
        parent: 'floriverse',
        subtitle: '2024 Album',
        image: 'images/fvd-i.png',
        color: 'var(--color-1)',
        hidden: true,
        labels: [
            {
                cardId: 'fvdInfo',
                title: 'Info',
                subtitle: 'Information about the Floriverse : Delta Album',
                banner: true,
                detail: `
                    Released: March 3rd, 2024<br>
                    Total tracks: 32<br>
                    Total length: 1hr 37m<br>
                    <a href="https://open.spotify.com/album/2PNIG5k8lEGQ6fSuMUn7ir?si=BO2liD1rSpq7Wna6xTksYQ" target="_blank">Spotify album link</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fvd-i.png" data-caption="Floriverse : Delta" data-subcaption="Album cover for Floriverse : Delta"><br>
                    `,
                image: 'images/fvd-i.png'
            },
            {
                cardId: 'fvdStarple',
                title: 'Starple',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-starple.png',
                detail: '',
                image: 'images/flories/fvd-starple.png'
            },
            {
                cardId: 'fvdChrora',
                title: 'Chrora',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Exotic flower',
                cPronouns: 'They',
                cGender: 'Non-Binary',
                cReference: 'images/flories/fvd-chrora.png',
                detail: '',
                image: 'images/flories/fvd-chrora.png'
            },
            {
                cardId: 'fvdOrply',
                title: 'Orply',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-orply.png',
                detail: '',
                image: 'images/flories/fvd-orply.png'
            },
            {
                cardId: 'fvdTiram',
                title: 'Tiram',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Mushroom',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-tiram.png',
                detail: '',
                image: 'images/flories/fvd-tiram.png'
            },
            {
                cardId: 'fvdNimibi',
                title: 'Nimibi',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cloudy flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-nimibi.png',
                detail: '',
                image: 'images/flories/fvd-nimibi.png'
            },
            {
                cardId: 'fvdSlump',
                title: 'Slump',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Rock with kelps',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-slump.png',
                detail: '',
                image: 'images/flories/fvd-slump.png'
            },
            {
                cardId: 'fvdPio',
                title: 'Pio',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Berry',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-pio.png',
                detail: '',
                image: 'images/flories/fvd-pio.png'
            },
            {
                cardId: 'fvdYana',
                title: 'Yana',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-yana.png',
                detail: '',
                image: 'images/flories/fvd-yana.png'
            },
            {
                cardId: 'fvdLooni',
                title: 'Looni',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Fruit',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-looni.png',
                detail: '',
                image: 'images/flories/fvd-looni.png'
            },
            {
                cardId: 'fvdChocopop',
                title: 'Chocopop',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Chocoflower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-chocopop.png',
                detail: '',
                image: 'images/flories/fvd-chocopop.png'
            },
            {
                cardId: 'fvdStaz',
                title: 'Staz',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Pistachio',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-staz.png',
                detail: '',
                image: 'images/flories/fvd-staz.png'
            },
            {
                cardId: 'fvdDelly',
                title: 'Delly',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-delly.png',
                detail: '',
                image: 'images/flories/fvd-delly.png'
            },
            {
                cardId: 'fvdSprinkly',
                title: 'Sprinkly',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Potted cakeflower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-sprinkly.png',
                detail: '',
                image: 'images/flories/fvd-sprinkly.png'
            },
            {
                cardId: 'fvdEcno',
                title: 'Ecno',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Multi',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fvd-ecno.png',
                detail: '',
                image: 'images/flories/fvd-ecno.png'
            },
            {
                cardId: 'fvdDisaton',
                title: 'Disaton',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cottonbun',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-disaton.png',
                detail: '',
                image: 'images/flories/fvd-disaton.png'
            },
            {
                cardId: 'fvdProtoberries',
                title: 'Protoberries',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Berries',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fvd-protoberries.png',
                detail: '',
                image: 'images/flories/fvd-protoberries.png'
            },
            {
                cardId: 'fvdPipix',
                title: 'Pipix',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Pixel flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-pipix.png',
                detail: '',
                image: 'images/flories/fvd-pipix.png'
            },
            {
                cardId: 'fvdPico',
                title: 'Pico',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Robot flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-pico.png',
                detail: '',
                image: 'images/flories/fvd-pico.png'
            },
            {
                cardId: 'fvdStarlila',
                title: 'Starlila',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Transgender flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-starlila.png',
                detail: '',
                image: 'images/flories/fvd-starlila.png'
            },
            {
                cardId: 'fvdWina',
                title: 'Wina',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Charred flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-wina.png',
                detail: '',
                image: 'images/flories/fvd-wina.png'
            },
            {
                cardId: 'fvdFret',
                title: 'Fret',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-fret.png',
                detail: '',
                image: 'images/flories/fvd-fret.png'
            },
            {
                cardId: 'fvdAzka',
                title: 'Azka',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Angel',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fvd-azka.png',
                detail: '',
                image: 'images/flories/fvd-azka.png'
            },
            {
                cardId: 'fvdCherro',
                title: 'Cherro',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tomatoes',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fvd-cherro.png',
                detail: '',
                image: 'images/flories/fvd-cherro.png'
            },
            {
                cardId: 'fvdFloorion',
                title: 'Floorion',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Potted robot flower',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fvd-floorion.png',
                detail: '',
                image: 'images/flories/fvd-floorion.png'
            },
            {
                cardId: 'fvdStellA',
                title: 'Stell-A',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Black hole flower',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fvd-stell-a.png',
                detail: '',
                image: 'images/flories/fvd-stell-a.png'
            },
            {
                cardId: 'fvdDatum',
                title: 'Datum',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Digital flower',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fvd-datum.png',
                detail: '',
                image: 'images/flories/fvd-datum.png'
            },
            {
                cardId: 'fvdPoloniloo',
                title: 'Poloniloo',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Polonium flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-poloniloo.png',
                detail: '',
                image: 'images/flories/fvd-poloniloo.png'
            },
            {
                cardId: 'fvdGrayscale',
                title: 'Grayscale',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fvd-grayscale.png',
                detail: '',
                image: 'images/flories/fvd-grayscale.png'
            },
            {
                cardId: 'fvdErwith',
                title: 'Erwith',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-erwith.png',
                detail: '',
                image: 'images/flories/fvd-erwith.png'
            },
            {
                cardId: 'fvdFyzer',
                title: 'Fyzer',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Florifyber',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fvd-fyzer.png',
                detail: '',
                image: 'images/flories/fvd-fyzer.png'
            },
            {
                cardId: 'fvdKloroforo',
                title: 'Kloroforo',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Robot flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fvd-kloroforo.png',
                detail: '',
                image: 'images/flories/fvd-kloroforo.png'
            }
        ]
    },
    {
        title: 'Floriverse : Epsilon',
        menuId: 'floriverse-epsilon',
        parent: 'floriverse',
        subtitle: '2025 Album',
        image: 'images/fve-i.png',
        color: 'var(--color-8)',
        hidden: true,
        labels: [
            {
                cardId: 'fveInfo',
                title: 'Info',
                subtitle: 'Information about the Floriverse : Epsilon Album',
                banner: true,
                detail: `
                    Released: June 4th, 2025<br>
                    Total tracks: 48<br>
                    Total length: 2hr 36m<br>
                    <a href="https://open.spotify.com/album/2qpLiyGRBhRHggKZSJUYbj?si=j0kxk_nfQ9u4bmv1iZmj3Q" target="_blank">Spotify album link</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fve-i.png" data-caption="Floriverse : Epsilon" data-subcaption="Album cover for Floriverse : Epsilon"><br>
                    `,
                image: 'images/fve-i.png'
            },
            {
                cardId: 'fveSolaris',
                title: 'Solaris',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Fire flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-solaris.png',
                detail: '',
                image: 'images/flories/fve-solaris.png'
            },
            {
                cardId: 'fveTrix',
                title: 'Trix',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Dandelion',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-trix.png',
                detail: '',
                image: 'images/flories/fve-trix.png'
            },
            {
                cardId: 'fveLux',
                title: 'Lux',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Exotic flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-lux.png',
                detail: '',
                image: 'images/flories/fve-lux.png'
            },
            {
                cardId: 'fveGlitter',
                title: 'Glitter',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-glitter.png',
                detail: '',
                image: 'images/flories/fve-glitter.png'
            },
            {
                cardId: 'fveFomfz',
                title: 'Fomfz',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tree',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-fomfz.png',
                detail: '',
                image: 'images/flories/fve-fomfz.png'
            },
            {
                cardId: 'fveBion',
                title: 'Bion',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Spirit flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-bion.png',
                detail: '',
                image: 'images/flories/fve-bion.png'
            },
            {
                cardId: 'fveZoey',
                title: 'Zoey',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Mushroom',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-zoey.png',
                detail: '',
                image: 'images/flories/fve-zoey.png'
            },
            {
                cardId: 'fveHera',
                title: 'Hera',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Goddess of time',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-hera.png',
                detail: '',
                image: 'images/flories/fve-hera.png'
            },
            {
                cardId: 'fveIsla',
                title: 'Isla',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Palm tree',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-isla.png',
                detail: '',
                image: 'images/flories/fve-isla.png'
            },
            {
                cardId: 'fveAzira',
                title: 'Azira',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Blueberry',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-azira.png',
                detail: '',
                image: 'images/flories/fve-azira.png'
            },
            {
                cardId: 'fveMisty',
                title: 'Misty',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/flories/fve-misty.png',
                cGallery: [
                    'images/c/misty-c.png',
                ],
                cRelations: [
                    {
                        cardId: 'floriverse-vanilla:fvvFurflow',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/flories/fve-misty.png'
            },
            {
                cardId: 'fveNya',
                title: 'Nya',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-nya.png',
                detail: '',
                image: 'images/flories/fve-nya.png'
            },
            {
                cardId: 'fveAtto',
                title: 'Atto',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Catdelion',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-atto.png',
                detail: '',
                image: 'images/flories/fve-atto.png'
            },
            {
                cardId: 'fveClara',
                title: 'Clara',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cottonbun',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-clara.png',
                detail: '',
                image: 'images/flories/fve-clara.png'
            },
            {
                cardId: 'fveLyra',
                title: 'Lyra',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cottonbun',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-lyra.png',
                detail: '',
                image: 'images/flories/fve-lyra.png'
            },
            {
                cardId: 'fveStrawnilla',
                title: 'Strawnilla',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Poptart berry',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-strawnilla.png',
                detail: '',
                image: 'images/flories/fve-strawnilla.png'
            },
            {
                cardId: 'fvePoppers',
                title: 'Poppers',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Berries',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fve-poppers.png',
                detail: '',
                image: 'images/flories/fve-poppers.png'
            },
            {
                cardId: 'fveAurelia',
                title: 'Aurelia',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Zinnia',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/aurelia-r.png',
                cGallery: [
                    'images/flories/fve-aurelia.png',
                    'images/c/aurelia-c.png',
                    'images/c/aurelia-c2.png',
                    'images/c/aurelia-c3.png',
                    'images/c/aurelia-c4.png',
                ],
                cRelations: [
                    {
                        cardId: 'deltadim-chromasia:hana',
                        relation: 'Significant Other'
                    },
                    {
                        cardId: 'floriverse-epsilon:fveDysis',
                        relation: 'Older Sister'
                    },
                ],

                image: 'images/flories/fve-aurelia.png'
            },
            {
                cardId: 'fveDysis',
                title: 'Dysis',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-dysis.png',
                detail: '',
                cRelations: [
                    {
                        cardId: 'floriverse-epsilon:fveAurelia',
                        relation: 'Younger Sister'
                    },
                ],
                image: 'images/flories/fve-dysis.png'
            },
            {
                cardId: 'fveButter',
                title: 'Butter',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-butter.png',
                detail: '',
                image: 'images/flories/fve-butter.png'
            },
            {
                cardId: 'fveBell',
                title: 'Bell',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Mistletoe',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-bell.png',
                detail: '',
                image: 'images/flories/fve-bell.png'
            },
            {
                cardId: 'fveNila',
                title: 'Nila',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Tulip',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-nila.png',
                detail: '',
                image: 'images/flories/fve-nila.png'
            },
            {
                cardId: 'fveZest',
                title: 'Zest',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Lemon',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-zest.png',
                detail: '',
                image: 'images/flories/fve-zest.png'
            },
            {
                cardId: 'fveCorrode',
                title: 'Corrode',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Charred tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-corrode.png',
                detail: '',
                image: 'images/flories/fve-corrode.png'
            },
            {
                cardId: 'fveAmalgamapot',
                title: 'Amalgamapot',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Amalgamation',
                cPronouns: 'They',
                cGender: 'Multi-florie',
                cReference: 'images/flories/fve-amalgamapot.png',
                detail: '',
                image: 'images/flories/fve-amalgamapot.png'
            },
            {
                cardId: 'fvePosie',
                title: 'Posie',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Multi',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fve-posie.png',
                detail: '',
                image: 'images/flories/fve-posie.png'
            },
            {
                cardId: 'fveNonsense',
                title: 'Nonsense',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Shapeshifter',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/fve-nonsense.png',
                detail: '',
                image: 'images/flories/fve-nonsense.png'
            },
            {
                cardId: 'fveTorq',
                title: 'Torq',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Mechanical flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-torq.png',
                detail: '',
                image: 'images/flories/fve-torq.png'
            },
            {
                cardId: 'fvePersen',
                title: 'Persen',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Exotic flower',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fve-persen.png',
                detail: '',
                image: 'images/flories/fve-persen.png'
            },
            {
                cardId: 'fveTerentia',
                title: 'Terentia',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-terentia.png',
                detail: '',
                image: 'images/flories/fve-terentia.png'
            },
            {
                cardId: 'fveLumina',
                title: 'Lumina',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Aquatic mushroom',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/fve-lumina.png',
                detail: '',
                image: 'images/flories/fve-lumina.png'
            },
            {
                cardId: 'fveTriplequestionmark',
                title: '???',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Unknown Florie',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fve-triplequestionmark.png',
                detail: '',
                image: 'images/flories/fve-triplequestionmark.png'
            },
            {
                cardId: 'fveUpsidedowntriplequestionmark',
                title: '¿¿¿',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Unknown Florie',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fve-upsidedowntriplequestionmark.png',
                detail: '',
                image: 'images/flories/fve-upsidedowntriplequestionmark.png'
            },
            {
                cardId: 'fveGhoargh',
                title: 'Ghoargh',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Prehistoric plant',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-ghoargh.png',
                detail: '',
                image: 'images/flories/fve-ghoargh.png'
            },
            {
                cardId: 'fveHYD124',
                title: 'HYD-124',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Black hole flower',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-hyd-124.png',
                detail: '',
                image: 'images/flories/fve-hyd-124.png'
            },
            {
                cardId: 'fveThorn',
                title: 'Thorn',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Wilted rose',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-thorn.png',
                detail: '',
                image: 'images/flories/fve-thorn.png'
            },
            {
                cardId: 'fveReva',
                title: 'Reva',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cactus',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-reva.png',
                detail: '',
                image: 'images/flories/fve-reva.png'
            },
            {
                cardId: 'fveAsh',
                title: 'Ash',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Burning flower',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/fve-ash.png',
                detail: '',
                image: 'images/flories/fve-ash.png'
            },
            {
                cardId: 'fveFlailer',
                title: 'Flailer',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Femtanyl bootleg florie',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-flailer.png',
                detail: '',
                image: 'images/flories/fve-flailer.png'
            },
            {
                cardId: 'fveMang',
                title: 'Mang',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Potted mango tree',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-mang.png',
                detail: '',
                image: 'images/flories/fve-mang.png'
            },
            {
                cardId: 'fveZappie',
                title: 'Zappie',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Bee tulip',
                cPronouns: 'He',
                cGender: 'Male',
                cReference: 'images/flories/fve-zappie.png',
                detail: '',
                image: 'images/flories/fve-zappie.png'
            },
            {
                cardId: 'fveKai',
                title: 'Kai',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Clouds',
                cPronouns: 'They',
                cGender: 'Non-binary',
                cReference: 'images/flories/fve-kai.png',
                detail: '',
                image: 'images/flories/fve-kai.png'
            },
            {
                cardId: 'fveConsole',
                title: 'Console',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Robot bush',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fve-console.png',
                detail: '',
                image: 'images/flories/fve-console.png'
            },
            {
                cardId: 'fveXi',
                title: 'Xi',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Angel',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fve-xi.png',
                detail: '',
                image: 'images/flories/fve-xi.png'
            },
            {
                cardId: 'fveFloriecookies',
                title: 'Floriecookies',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Cookies',
                cPronouns: 'They',
                cGender: 'Unknown',
                cReference: 'images/flories/fve-floriecookies.png',
                detail: '',
                image: 'images/flories/fve-floriecookies.png'
            },
            {
                cardId: 'fveNini',
                title: 'Nini',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Mystical lemon',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-nini.png',
                detail: '',
                image: 'images/flories/fve-nini.png'
            },
            {
                cardId: 'fveXyxiv',
                title: 'Xyxiv',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Angel',
                cPronouns: 'It',
                cGender: 'Genderless',
                cReference: 'images/flories/fve-xyxiv.png',
                detail: '',
                image: 'images/flories/fve-xyxiv.png'
            },
            {
                cardId: 'fveNau',
                title: 'Nau',
                subtitle: '',
                isCharacter: true,
                cSpecies: 'Flower',
                cPronouns: 'She',
                cGender: 'Female',
                cReference: 'images/flories/fve-nau.png',
                detail: '',
                image: 'images/flories/fve-nau.png'
            }
        ]
    },



    {
        // Digirel
        title: 'Digirel',
        menuId: 'digirel',
        subtitle: 'Digital Realm',
        image: 'icons/digirel.png',
        color: 'var(--color-3)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Digirel',
                banner: true,
                detail:
                    `This universe does not exist independently but is derived from other universes where computers and servers can exist. It’s the result of multiversal intercommunication. “Digitalias” wander throughout Digirel and can interact with other universes through hardware connections.<br>
                    <h4>What's in this page</h4>
                    This page list all characters in separate categories based on the Digirel album they associate with, as well as uncategorized ones.<br>`,
                image: 'icons/digirel.png'
            },
            {
                cardId: 'ruby',
                title: 'Ruby',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/ruby-r.png',
                cGallery: [],

                image: 'images/i/ruby-i.png',
            },
            {
                cardId: 'soap',
                title: 'Soap',
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
                cardId: 'usbun',
                title: 'USBun',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'USB-Rabbit',
                cPronouns: 'He/She',
                cGender: 'Intersex',
                cSexuality: 'Pansexual',
                cNicknames: 'Universal Serial Bunny',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/usbun-c.png',
                ],

                image: 'images/i/usbun-i.png',
            },
            {
                cardId: 'sakura',
                title: 'Sakura',
                subtitle: '',
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
                subtitle: '',
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
        title: 'Nansenz',
        menuId: 'nansenz',
        subtitle: 'World of Nonsense',
        image: 'icons/nansenz.png',
        color: 'var(--color-4)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Nansenz',
                banner: true,
                detail:
                    // <div class="ticker-bar"><div class="ticker-text"></div></div><br></br>
                    `<div class="ticker-bar"><div class="ticker-text"></div></div><br></br>
                    A world beyond logical limits where anything can exist. It’s like a fever dream. Anything you imagine or could be imagined, objects with limbs, cube-shaped planets, galaxies made of spaghetti, there are no boundaries in Nansenz. The entire purpose of this universe is to contain everything that defy all sense of logic.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nansenz. This include character information, reference art, and picture gallery of each character.<br>
                    <br>`,
                image: 'icons/nansenz.png'
            },
            {
                linkId: 'nansenz-thingamaland',
            },
            {
                cardId: 'mu',
                title: 'Mu',
                subtitle: '',
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
                cardId: 'cancerman',
                title: 'Cancerman',
                subtitle: '',
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
                cardId: 'furrophelix',
                title: 'Furrophelix',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Bacteria',
                cPronouns: 'Any Pronouns',
                cGender: 'Non-binary',
                cSexuality: 'Asexual',
                cNicknames: 'Phelix',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/furrophelix-c.png',
                ],

                image: 'images/i/furrophelix-i.png',
            },
            {
                cardId: 'malit',
                title: 'Malit',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Polygons',
                cPronouns: 'It',
                cGender: 'Genderless',
                cSexuality: 'Aroace',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/malit-c.png',
                ],

                image: 'images/i/malit-i.png',
            },
            {
                cardId: 'gomboc',
                title: 'THE GÖMBÖC',
                subtitle: '',
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
        title: 'Thingamaland',
        menuId: 'nansenz-thingamaland',
        subtitle: 'Object Island',
        image: 'images/nansenz-thingamaland.png',
        color: 'var(--color-19)',
        orbit: 1,
        hidden: true,
        parent: 'nansenz',
        labels: [
            {
                cardId: 'article',
                title: 'Article',
                subtitle: '',
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
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Macaroon (Object)',
                cPronouns: 'She/It',
                cGender: 'Female',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/meowcaroon-c.png',
                    'images/c/meowcaroon-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'nansenz-thingamaland:oworeo',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/meowcaroon-i.png',
            },
            {
                cardId: 'oworeo',
                title: 'Oworeo',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Sandwich Cookie (Object)',
                cPronouns: 'They',
                cGender: 'Non-Binary',
                cSexuality: 'Lesbian',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/oworeo-c.png',
                    'images/c/oworeo-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'nansenz-thingamaland:meowcaroon',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/oworeo-i.png',
            },
            {
                cardId: 'treehee',
                title: 'Treehee',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Tree (Object)',
                cPronouns: 'Any Pronouns',
                cGender: 'Male',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/treehee-r.png',
                cGallery: [],

                image: 'images/i/treehee-i.png',
            },
            {
                cardId: 'rexav',
                title: 'Rexav',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Excavator',
                cPronouns: 'He (Bucket), They (Cabin)',
                cGender: 'Male (Bucket), Non-binary (Cabin)',
                cSexuality: 'Asexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/rexav-c.png',
                ],

                image: 'images/i/rexav-i.png',
            },
            {
                cardId: 'censored',
                title: '#@!?',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Curse Word (Object)',
                cPronouns: 'He/It',
                cGender: 'Male',
                cSexuality: 'Pansexual',
                cNicknames: '',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/censored-c.png',
                ],

                image: 'images/i/censored-i.png',
            },
        ]
    },


    {
        // Hizen
        title: 'Hizen',
        menuId: 'hizen',
        subtitle: 'Hi-Zenith',
        image: 'icons/hizen.png',
        color: 'var(--color-5)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Hizen',
                banner: true,
                detail:
                    `While this universe may represent a sort of heaven, it’s not just an “afterlife” (in fact, there are many realms beyond heaven and hell in the Fyberverse). This is where entities considered angelic (or derived from such origins) were born. The universe is depicted as infinite layers of floating islands.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Hizen. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/hizen.png'
            },
            {
                cardId: 'nim',
                title: 'Nim',
                subtitle: '',
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
                subtitle: '',
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
                subtitle: '',
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
        title: 'Nadir',
        menuId: 'nadir',
        subtitle: 'Void of Nadir',
        image: 'icons/nadir.png',
        color: 'var(--color-6)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Nadir',
                banner: true,
                detail:
                    `Nadir can be seen as the inverse of Hizen. While often portrayed as hell, it isn’t fiery or chaotic. Instead, it’s quiet, dark, and dreadfully still, as though watched by an omnipresent gaze. Anything that enters this void slowly desaturates and decays as its essence of life fades away.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nadir. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/nadir.png'
            },
            {
                cardId: 'artinihil',
                title: 'Artinihil',
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Unknown',
                cPronouns: 'She/It',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Nihil',
                cAddOns: '',
                cReference: '',
                cGallery: [
                    'images/c/artinihil-c.png',
                    'images/c/artinihil-c2.png',
                ],
                cRelations: [
                    {
                        cardId: 'nadir:ugo',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artinihil-i.png',
            },
            {
                cardId: 'infineko',
                title: 'Infineko',
                subtitle: '',
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
                subtitle: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Vortex',
                cPronouns: 'He',
                cGender: 'Male',
                cSexuality: 'Gay',
                cNicknames: '',
                cAddOns: '',
                cReference: 'images/r/ugo-r.png',
                cGallery: [],
                cRelations: [
                    {
                        cardId: 'nadir:artinihil',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/ugo-i.png',
            },
            {
                cardId: 'unknown',
                title: '???',
                subtitle: '',
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



    {
        title: 'Daily Art+',
        showTitle: true,
        menuId: 'dailyartplus',
        subtitle: '',
        image: 'icons/dailyartplus.png',
        color: 'var(--color-8)',
        orbit: 3,
        scale: 1.5,
        labels: [
            {
                cardId: 'dailyartplus',
                title: 'Daily Art+',
                subtitle: '',
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
        title: 'Converters',
        showTitle: true,
        menuId: 'converters',
        subtitle: '',
        image: 'icons/converters.png',
        color: 'var(--color-13)',
        orbit: 3,
        scale: 1.5,
        labels: [
            {
                cardId: 'genotheta',
                title: 'Genotheta',
                subtitle: 'Convert Latin to Genotheta',
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
                subtitle: 'Convert Latin to Starstroke',
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
            {
                cardId: 'nadirune',
                title: 'NADIRUNE',
                subtitle: 'Convert Latin to NADIRUNE',
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/NADIRUNE.ttf" target="_blank">Download NADIRUNE Font</a><br><br>
                    <h2>Latin to NADIRUNE</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneInput" rows="4" style="width:100%;"></textarea>
                    </div>
                    <br>
                    NADIRUNE output
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneOutput" rows="4" style="width:100%;" readonly></textarea>
                    </div>

                    <br><br><hr>

                    <h2>NADIRUNE to Latin</h2>
                    NADIRUNE input
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneInputRev" class="nadirune" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyNadiruneRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap nadiruneKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap nadiruneKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap nadiruneKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="A">A</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="B">B</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="C">C</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="D">D</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="E">E</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="F">F</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="G">G</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="H">H</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="I">I</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="J">J</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="K">K</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="L">L</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="M">M</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="N">N</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="O">O</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="P">P</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="R">R</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="S">S</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="T">T</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="U">U</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="V">V</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="W">W</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="X">X</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="Z">Z</button>
                    </div>
                    `,
                image: 'icons/nadirune.png'
            },
            {
                cardId: 'zenpen',
                title: 'Zenpen',
                subtitle: 'Convert Latin to Zenpen',
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/zenpen.ttf" target="_blank">Download Zenpen Font</a><br><br>
                    <h2>Latin to Zenpen</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="zenpenInput" rows="4" style="width:100%;"></textarea>
                    </div>
                    <br>
                    Zenpen output
                    <div style="margin-top:10px;">
                        <textarea id="zenpenOutput" rows="4" style="width:100%;" readonly></textarea>
                    </div>

                    <br><br><hr>

                    <h2>Zenpen to Latin</h2>
                    Zenpen input
                    <div style="margin-top:10px;">
                        <textarea id="zenpenInputRev" class="zenpen" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyZenpenRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="zenpenOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap zenpenKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap zenpenKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap zenpenKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="A">A</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="B">B</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="C">C</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="D">D</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="E">E</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="F">F</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="G">G</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="H">H</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="I">I</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="J">J</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="K">K</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="L">L</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="M">M</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="N">N</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="O">O</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="P">P</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="R">R</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="S">S</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="T">T</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="U">U</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="V">V</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="W">W</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="X">X</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="Z">Z</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="0">0</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="1">1</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="2">2</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="3">3</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="4">4</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="5">5</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="6">6</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="7">7</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="8">8</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="9">9</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key=".">.</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key=",">,</button>
                    </div>
                    `,
                image: 'icons/zenpen.png'
            },
        ]
    },

    // Orbit 4
    {
        // Information
        title: 'Information',
        menuId: 'info',
        subtitle: 'Information about Artifyber and this website',
        showTitle: true,
        image: 'icons/info.png',
        color: 'var(--color-3)',
        orbit: 4,
        scale: 1.5,
        labels: [
            {
                cardId: 'artifyber',
                title: 'Artifyber',
                subtitle: 'artifyber@gmail.com',
                cAddOns: ``,
                detail: `
                    <h2>Hello!</h2> I'm Artifyber, a furry artist who likes to draw and make music.
                    <hr>
                    I taught myself how to draw since 2021 and produce music for even longer since 2019. Only in the late 2021 did I start to appear online.<br>
                    <br>I started my first daily art challenge on January 1st, 2023. It wasn't called Daily Art+ back then. No significant worldbuilding or lore, just a challenge to develop a consistent art style. I succeeded and I kept going. At halfway through the year I rebranded to Artifyber and started developing a little bit of lore and worldbuilding. I also released my first album "Floriverse" around that time.<br>
                    <br>
                    <hr>
                    A year passed, and I'm now continuing my art hobby with the Daily Art+ series starting 2024. Drawing is the main activity I spent online the most. I mainly draw my own furry characters, but I also take art commissions from time to time. I quite enjoy drawing my own characters as I find it rather relaxing.<br>
                    <br>
                    Music production is also my hobby. Some say i have a diverse taste in music with the amount of genres i've produced. Honestly, i don't even know what kind of genre i'm making half of the time. I just throw 'n' slice samples and draw melodies and if it sounds good, then it's good. Even if it sounds unusual to a majority.<br>
                    <br>
                    In the future I want to be a game developer and create something out of the worlds and characters i've made. It's a dream of mine to create an actual game and I still have a long way to go.<br>
                    <br>
                    <hr>
                    All done. Thank you for enjoying what I make :3<br>
                    <br>
                    <img src="images/fyberhappy.png"">`,
                isCharacter: true,
                cSpecies: 'Fyber',
                cPronouns: 'She/Any',
                cGender: 'Bigender',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cReference: 'images/r/artifyber-r.png',
                cGallery: [],
                image: 'images/temp3.png'
            },
            {
                cardId: 'ocrules',
                title: 'Character Rules',
                subtitle: `Rules regarding Artifyber's characters`,
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
        ]
    },

    {
        // Links
        title: 'Links',
        menuId: 'links',
        subtitle: 'All links to my social media',
        showTitle: true,
        image: 'icons/earth.png',
        color: 'var(--color-9)',
        orbit: 5,
        scale: 1,
        labels: [
            {
                cardId: 'twitter',
                title: 'Twitter',
                subtitle: '',
                url: 'https://twitter.com/artifyber',
                image: 'icons/l-twitter.png'
            },
            {
                cardId: 'instagram',
                title: 'Instagram',
                subtitle: '',
                url: 'https://instagram.com/artifyber',
                image: 'icons/l-instagram.png'
            },
            {
                cardId: 'bluesky',
                title: 'BlueSky',
                subtitle: '',
                url: 'https://bsky.app/profile/artifyber.xyz',
                image: 'icons/l-bluesky.png'
            },
            {
                cardId: 'discord',
                title: 'Discord Server',
                subtitle: '',
                url: 'https://discord.gg/mvZT3ANvSS',
                image: 'icons/l-discord.png'
            },
            {
                cardId: 'youtube',
                title: 'YouTube',
                subtitle: '',
                url: 'https://youtube.com/@artifyber',
                image: 'icons/l-youtube.png'
            },
            {
                cardId: 'spotify',
                title: 'Spotify Artist',
                subtitle: '',
                url: 'https://open.spotify.com/intl-id/artist/41B16M5LFJKcwUW3L75PVh',
                image: 'icons/l-spotify.png'
            },
            {
                cardId: 'newgrounds',
                title: 'Newgrounds',
                subtitle: '',
                url: 'https://artifyber.newgrounds.com/',
                image: 'icons/l-newgrounds.png'
            },
            {
                cardId: 'soundcloud',
                title: 'SoundCloud',
                subtitle: '',
                url: 'https://on.soundcloud.com/3V5Uz',
                image: 'icons/l-soundcloud.png'
            },
            {
                cardId: 'toyhouse',
                title: 'Toyhouse',
                subtitle: '',
                url: 'https://toyhou.se/artifyber',
                image: 'icons/l-toyhouse.png'
            },
            {
                cardId: 'carrd',
                title: 'Carrd',
                subtitle: 'Backup website just in case',
                url: 'https://artifyber.carrd.co/',
                image: 'icons/l-carrd.png'
            },
            {
                cardId: 'alts',
                title: 'Alternates',
                subtitle: 'All of my alternative accounts on various platforms',
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
        title: 'Commissions',
        menuId: 'comms',
        subtitle: 'Information about art/music commissions',
        showTitle: true,
        image: 'icons/dollar.png',
        color: 'var(--color-11)',
        orbit: 4,
        scale: 1.5,
        hidden: true,
        labels: [
            {
                cardId: 'kofi',
                title: 'Ko-Fi',
                subtitle: 'For a method of payment',
                url: 'https://ko-fi.com/artifyber',
                image: 'icons/comm-kofi.png'
            },
            {
                cardId: 'tos',
                title: 'Information and ToS',
                subtitle: 'Rules and how to commission',
                detail:
                    `
                    <h2>Before You Commission:</h2>     
                    <ul>
                    <li>To limit the number of commissions, my commissions are only open to <a href="https://ko-fi.com/artifyber/tiers" target="_blank">Ko-Fi members</a>. You'll need to be a member of any tier before commissioning me.</li><br>
                    <li>Please read the Terms of Service listed below. By commissioning me you acknowledge that you agree to my Terms of Service.</li><br>
                    </ul>
                    <hr>
                    <h2>Art Commission T.O.S</h2>
                    <ul>
                    <li>The customer understands they are paying for a digital commission, and will receive a digital file (e.g. JPG, PNG) of the commissioned artwork. Artworks are made using Ibis Paint and the customer will not receive any raw project file after the commission is complete. The customer will not receive any physical item in the mail from this purchase either.</li><br>
                    <li>Payment is upfront via Ko-Fi.</li><br>
                    <li>There is no limitation on character request. But keep in mind that I'm a primarily furry artist and i am more comfortable drawing species i'm interested in (cats, rabbits, dogs and foxes).</li><br>
                    <li>Please provide details and references beforehand as i may sometime not provide sketches or WIPs during the process. You can provide minor revision to the final product later.</li><br>
                    <li>By default the artwork size for icon commissions will be in 2048x2048 (1:1) while thigh-ups and full-bodies will be in 2000x2500 (4:5). Please specify beforehand for custom canvas size.</li><br>
                    <li>The estimated turnaround time is a day to 3 weeks.</li><br>
                    <li>If the commission is private, please let me know in advance and the name will be anonymous or if you prefer it not being posted to my socials.</li><br>
                    <li>The illustration should only be used in personal case. No commercial use allowed.</li><br>
                    <li>I do not allow my artworks to be fed into AI art generators or being used in any AI-related services. A copyright strike will be issued if this is violated.</li><br>
                    <li>You have the right to ask for a full refund only if the commission has not been started yet.</li><br>
                    <li>If you are interested send a DM on my Discord, which i only accept DM requests from if you are a Ko-Fi member.</li><br>
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
                subtitle: 'With examples',
                detail:
                    `
                    <h2><i>PLEASE READ MY <a data-open-card="comms:tos">T.O.S</a> BEFORE COMMISIONING ME.</i></h2>
                    <hr>
                    <h2>Full-body</h2>
                    70 USD per character<br>
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
                    50 USD per character<br>
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
                    30 USD per character<br>
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
                    <h4>Simple / Geometric</h4>
                    Can also be transparent<br>
                    <ul>
                        <li>Free if included with character commission</li><br>
                        <li>10 USD if requested separately</li>
                    </ul>
                    <div class="imgContainer">
                    <img src="images/c/artibun-c2.png"><br>
                    <img src="images/c/artigoat-c4.png"><br>
                    <img src="images/c/micro-c.png"><br>
                    </div>
                    <h4>Nature</h4>
                    This include clouds and space-themed background<br>
                    <ul>
                        <li>+10 USD with character commission</li><br>
                        <li>15 USD if requested separately</li>
                    </ul>
                    <div class="imgContainer">
                    <img src="images/c/artigoat-c2.png"><br>
                    <img src="images/c/skitty-c3.png"><br>
                    <img src="images/c/furfy-c.png"><br>
                    </div>
                    <h4>Many objects</h4>
                    Cityscapes, interior, etc.<br>
                    <ul>
                        <li>+30 USD with character commission</li><br>
                        <li>40 USD if requested separately</li>
                    </ul>
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
                subtitle: 'With examples',
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
                subtitle: '',
                detail:
                    `<br><h1 style="font-size: 120px; transform: rotate(-10deg); text-align: center;">NOPE!</h1><br><br>
                    Sorry! I don't do 18+ commissions. Were you expecting something? LOL
                    `,
                image: 'icons/comm-18.png'
            },
        ]
    },



    {
        // Random
        title: 'Random Character',
        menuId: 'random',
        showTitle: true,
        image: 'icons/oc-random.png',
        color: 'var(--color-12)',
        orbit: 3,
        scale: 1.5,
        invisible: true,
        labels: [
            {
                cardId: 'random',
            }
        ],
    },
    {
        // Settings
        menuId: 'settings',
        title: 'Settings',
        subtitle: 'Options to tweak',
        showTitle: true,
        color: 'var(--color-14)',
        orbit: 4,
        scale: 1.5,
        hidden: true,
        invisible: true,
        labels: [
            {
                cardId: 'audioSettings',
                title: `Audio`,
                subtitle: `
                        <button type="button" id="toggleSFX">SFX: Off</button><br>
                        <button type="button" id="toggleMusic">Enable Music</button>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'modeSwitch',
                title: `Layout`,
                subtitle: `
                        <button type="button" id="modeSwitch">Switch Layout</button>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'keybinds',
                title: `Keyboard Shortcut`,
                subtitle: `
                        ESC = Go back<br>
                        SPACE = Open search<br>
                        C = Center view<br>
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
                cardId: 'webinfo',
                title: `Website Info`,
                subtitle: `Updated: ${lastUpdated}<br>
                        Version: ${version}<br>
                        <br>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCardsCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalMenusCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCharacterCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalSplashCounter"></div>
                `,
                banner: true,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'credits',
                title: `Credits`,
                subtitle: `
                        Developed by:<br>
                        Artifyber<br>
                        <br>
                        Special thanks:<br>
                        Azka "Artist" Zavian
                `,
                banner: true,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                linkId: 'menuTemplate',
                banner: true,
            },
            {
                linkId: 'loopTest',
                banner: true,
            },
            {
                linkId: 'infiniteTest1',
                banner: true,
            }
        ]
    },

    // Misc
    {
        menuId: 'loopTest',
        title: 'loopTest',
        color: 'var(--color-15)',
        hidden: true,
        invisible: true,
        labels: [
            {
                cardId: 'testloop1',
                title: 'testloop1',
                subtitle: '',
                detail:
                    `<a data-open-card="loopTest:testloop2">testloop2</a>`,
                image: 'images/temp2.png'
            },
            {
                cardId: 'testloop2',
                title: 'testloop2',
                subtitle: '',
                detail:
                    `<a data-open-card="loopTest:testloop1">testloop1</a>`,
                image: 'images/temp.png'
            },
        ]
    },
    {
        menuId: 'infiniteTest1',
        title: 'Softlock!!!',
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        parent: 'infiniteTest2',
        labels: [
            {
                cardId: 'urstucklol',
                title: 'ur stuck lol',
                subtitle: '',
                detail: `lol`,
            },
            {
                cardId: 'urstucklol2',
                title: '<h1 style="font-size:100px">:3</h1>',
                subtitle: '',
                detail: `lol`,
            },
        ]
    },
    {
        menuId: 'infiniteTest2',
        title: 'Softlock!!!',
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        parent: 'infiniteTest1',
        labels: [
            {
                cardId: 'urstucklol',
                title: '<h1 style="font-size:100px">:3</h1>',
                subtitle: '',
                detail: `lol`,
            },
            {
                cardId: 'urstucklol2',
                title: 'ur stuck lol',
                subtitle: '',
                detail: `lol`,
            },
        ]
    },
    {
        title: 'Whitespace',
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
                subtitle: '',
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
            menu.labels.unshift({
                cardId: 'beecat',
                title: 'Beecat',
                subtitle: 'Beecat',
                detail: `It's a bee!<br>It's a cat!<br>It's a beecat!<br>And it's spinning!<br>But why is it spinning?<br><br>
                Character by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a><br><br>
                <img src="images/beecatspin.gif" data-caption="Beecat" data-subcaption="beecatspin.gif" style="width: 100%">`,
                image: 'images/beecatspin.gif'
            });
        }
    });
}



/*
 * Generate placeholder cards for testing
 * @param {number} n - Number of placeholder cards to generate
 * @param {string} prefix - Prefix for card titles
 * @returns {Array} Array of placeholder card objects
 */
function generateLabels(n, prefix) {
    return Array.from({ length: n }).map((_, i) => ({
        id: i + 1,
        title: `${prefix} Item ${i + 1}`,
        subtitle: `This is a short placeholder excerpt for ${prefix} item ${i + 1}.`,
        detail: `Detailed description for ${prefix} item ${i + 1}. You can replace this with whatever content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nulla sed velit malesuada fermentum.`,
        image: 'images/temp.png'
    }));
}

// Special search responses
specialSearch = [
    {
        query: 'nothing',
        title: 'Nothing found!',
        subtitle: ''
    },
    {
        query: 'something',
        title: 'Something found!',
        subtitle: `...It's just me LOL<br>
        My name is omniLens btw! You've probably met my brother omniTracer! He's such a powerful guy...<br>
        Lowkey i'm kinda jealous of him. I wish to be as powerful as him one day :(`
    },
    {
        query: 'content',
        title: 'Content found!',
        subtitle: `Yup, i am the content. You've found me heehee!<br>
        Aww you listened to what i said!<br>
        Good boy :)`
    },
    {
        query: 'help',
        title: 'help yourself bro LOLXD',
        subtitle: ''
    },
    {
        query: 'hi',
        title: 'HAII HIIII HELLLOOO!!!! :DD',
        subtitle: ''
    },
    {
        query: 'hello',
        title: 'HAII HIIII HELLLOOO!!!! :DD',
        subtitle: ''
    },
    {
        query: 'how are you',
        title: `I'M GOOD!!!!!! thx 4 asking!! <3<3<3`,
        subtitle: ''
    },
    {
        query: 'hru',
        title: `I'M GOOD!!!!!! thx 4 asking!! <3<3<3`,
        subtitle: ''
    },
];

// Calculate totals for statistics
totalCards = menuItems.reduce((sum, item) => sum + item.labels.length, 0);
totalCharacters = menuItems.reduce((sum, item) => sum + item.labels.filter(label => label.isCharacter).length, 0);
totalMenus = menuItems.length;

if (typeof module !== "undefined") {
    module.exports = { menuItems };
}