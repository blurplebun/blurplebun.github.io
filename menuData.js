/* --------------------------
    WEBSITE MENU DATA
    -------------------------- */

const lastUpdated = 'October 18th, 2025';
const version = '0.0.1';

menuItems = [
    {
        id: 1,
        name: 'Deltadim',
        q: 'deltadim',
        subtitle: 'Delta Dimension',
        image: 'icons/deltadim.png',
        color: 'var(--color-1)',
        orbit: 1,
        labels: [
            {
                id: 1,
                title: 'Info',
                excerpt: 'About Deltadim',
                detail:
                    `Deltadim is the main universe portrayed in Daily Art+. Its characteristics are similar to our own universe. Terra is where the main plot takes place. It's an Earth-like planet inhabited by furries, humanoids, and other creatures.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Deltadim. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/deltadim.png'
            },
            {
                id: 2,
                title: 'Artibun',
                excerpt: '',
                detail:
                    `Species: Rabbit<br>
                Pronouns: She/Any<br>
                Gender: Bigender<br>
                Sexuality: Bisexual<br>
                Nickname: Arti, Bunbun<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/artibun-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <!-- <figure> -->
                    <img src="images/artibun-c.png">
                    <!-- <figcaption>Artibun</figcaption>
                    </figure> -->
                    <img src="images/artibun-c2.png">
                    <img src="images/artibun-c3.png">
                    <img src="images/artibun-c4.png">
                    <img src="images/artibun-c5.png">
                    <img src="images/artibun-c6.png">
                </div>
                `,
                image: 'images/c/artibun-i.png'
            },
            {
                id: 3,
                title: 'Articat',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: He/Any<br>
                Gender: Male<br>
                Sexuality: Bisexual<br>
                Nickname: Arti, Kiki<br>
                <!-- <h2>Reference Art:</h2><br>
                <img src="images/r/artibun-r.png"><br> -->
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/articat-c.png">
                    <img src="images/articat-c2.png">
                    <img src="images/articat-c3.png">
                    <img src="images/articat-c4.png">
                    <img src="images/articat-c5.png">
                    <img src="images/articat-c6.png">
                </div>
                `,
                image: 'images/c/articat-i.png'
            },
            {
                id: 4,
                title: 'Artifox',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: He/They<br>
                Gender: Trans-male<br>
                Sexuality: Bisexual<br>
                Nickname: Arti, Fofo, Foxxo<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/artifox-c.png">
                    <img src="images/artifox-c2.png">
                    <img src="images/artifox-c3.png">
                    <img src="images/artifox-c4.png">
                    <img src="images/artifox-c5.png">
                    <img src="images/artifox-c6.png">
                </div>
                `,
                image: 'images/c/artifox-i.png'
            },
            {
                id: 5,
                title: 'Artifish',
                excerpt: '',
                detail:
                    `Species: Cat + Shark<br>
                Pronouns: They<br>
                Gender: Non-Binary<br>
                Sexuality: Demisexual<br>
                Nickname: Arti, Fifi<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/artifish-c.png">
                    <img src="images/artifish-c2.png">
                    <img src="images/artifish-c3.png">
                    <img src="images/artifish-c4.png">
                    <img src="images/artifish-c5.png">
                    <img src="images/artifish-c6.png">
                </div>
                `,
                image: 'images/c/artifish-i.png'
            },
            {
                id: 6,
                title: 'Artigoat',
                excerpt: '',
                detail:
                    `Species: Goat<br>
                Pronouns: He<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                Nickname: Arti, Baba<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/artigoat-c.png">
                    <img src="images/artigoat-c2.png">
                    <img src="images/artigoat-c3.png">
                    <img src="images/artigoat-c4.png">
                    <img src="images/artigoat-c5.png">
                    <img src="images/artigoat-c6.png">
                </div>
                `,
                image: 'images/c/artigoat-i.png'
            },
            {
                id: 7,
                title: 'Artilope',
                excerpt: '',
                detail:
                    `Species: Jackalope<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Demisexual<br>
                Nickname: Arti, Lolo, Lope<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/artilope-c.png">
                    <img src="images/artilope-c2.png">
                    <img src="images/artilope-c3.png">
                    <img src="images/artilope-c4.png">
                    <img src="images/artilope-c5.png">
                    <img src="images/artilope-c6.png">
                </div>
                `,
                image: 'images/c/artilope-i.png'
            },
            {
                id: 8,
                title: 'Artipup',
                excerpt: '',
                detail:
                    `Species: Dog<br>
                Pronouns: He/They<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                Nickname: Arti, Arfy<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/artipup-c.png">
                    <img src="images/artipup-c2.png">
                    <img src="images/artipup-c3.png">
                    <img src="images/artipup-c4.png">
                    <img src="images/artipup-c5.png">
                    <img src="images/artipup-c6.png">
                </div>
                `,
                image: 'images/c/artipup-i.png'
            },
            {
                id: 9,
                title: 'Artineko',
                excerpt: '',
                detail:
                    `Species: Human (cat cosplay)<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Aroace<br>
                Nickname: Arti, Nay, Neko<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/artineko-c.png">
                    <img src="images/artineko-c2.png">
                    <img src="images/artineko-c3.png">
                    <img src="images/artineko-c4.png">
                    <img src="images/artineko-c5.png">
                    <img src="images/artineko-c6.png">
                </div>
                `,
                image: 'images/c/artineko-i.png'
            },
            {
                id: 10,
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
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/skitty-c.png"><br>
                    <img src="images/skitty-c2.png"><br>
                    <img src="images/skitty-c3.png"><br>
                    <img src="images/skitty-c4.png"><br>
                    <img src="images/skitty-c5.png"><br>
                    <img src="images/skitty-c6.png"><br>
                </div>
                `,
                image: 'images/c/skitty-i.png'
            },
            {
                id: 11,
                title: 'Gamma',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/gamma-c.png"><br>
                    <img src="images/gamma-c2.png"><br>
                    <img src="images/gamma-c3.png"><br>
                    <img src="images/gamma-c4.png"><br>
                </div>
                `,
                image: 'images/c/gamma-i.png'
            },
            {
                id: 12,
                title: 'Micro',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: They<br>
                Gender: Non-Binary<br>
                Sexuality: Omnisexual<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/micro-c.png"><br>
                    <img src="images/micro-c2.png"><br>
                    <img src="images/micro-c3.png"><br>
                    <img src="images/micro-c4.png"><br>
                    <img src="images/micro-c5.png"><br>
                </div>
                `,
                image: 'images/c/micro-i.png'
            },
            {
                id: 13,
                title: 'Caramella',
                excerpt: '',
                detail:
                    `Species: Cat + Shrimp<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                Nickname: Mella<br>
                <br>
                Design made by <a href="https://x.com/M3ko_Ne" target="_blank">M3ko_Ne</a><br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/caramella-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/caramella-c.png"><br>
                    <img src="images/caramella-c2.png"><br>
                    <img src="images/caramella-c3.png"><br>
                    <img src="images/caramella-c4.png"><br>
                    <img src="images/caramella-c5.png"><br>
                    <img src="images/caramella-c6.png"><br>
                </div>
                `,
                image: 'images/c/caramella-i.png'
            },
            {
                id: 14,
                title: 'Azurey',
                excerpt: '',
                detail:
                    `Species: Cat + Shark<br>
                Pronouns: He/They<br>
                Gender: Demiboy<br>
                Sexuality: Pansexual<br>
                Nickname: Azu<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/azurey-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/azurey-c.png"><br>
                    <img src="images/azurey-c2.png"><br>
                    <img src="images/azurey-c3.png"><br>
                </div>
                `,
                image: 'images/c/azurey-i.png'
            },
            {
                id: 15,
                title: 'Shirley',
                excerpt: '',
                detail:
                    `Species: Cat + Fox<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Heterosexual<br>
                Nickname: Manda, Alamanda<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/shirley-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/shirley-c.png"><br>
                    <img src="images/shirley-c2.png"><br>
                    <img src="images/shirley-c3.png"><br>
                    <img src="images/shirley-c4.png"><br>
                    <img src="images/shirley-c5.png"><br>
                    <img src="images/shirley-c6.png"><br>
                </div>
                `,
                image: 'images/c/shirley-i.png'
            },
            {
                id: 16,
                title: 'Rose',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: He/Any<br>
                Gender: Male<br>
                Sexuality: Heterosexual<br>
                Nickname: Rosey<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/rose-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/rose-c.png"><br>
                    <img src="images/rose-c2.png"><br>
                    <img src="images/rose-c3.png"><br>
                </div>
                `,
                image: 'images/c/rose-i.png'
            },
            {
                id: 17,
                title: 'Eros',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She/They<br>
                Gender: Trans-female<br>
                Sexuality: Demisexual<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/eros-c.png"><br>
                    <img src="images/eros-c2.png"><br>
                    <img src="images/eros-c3.png"><br>
                    <img src="images/eros-c4.png"><br>
                    <img src="images/eros-c5.png"><br>
                    <img src="images/eros-c6.png"><br>
                </div>
                `,
                image: 'images/c/eros-i.png'
            },
            {
                id: 18,
                title: 'Sora',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She/They<br>
                Gender: Trans-female<br>
                Sexuality: Bisexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/sora-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/sora-c.png"><br>
                    <img src="images/sora-c2.png"><br>
                </div>
                `,
                image: 'images/c/sora-i.png'
            },
            {
                id: 19,
                title: 'Furfy',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Lesbian<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/furfy-c.png"><br>
                    <img src="images/furfy-c2.png"><br>
                    <img src="images/furfy-c3.png"><br>
                    <img src="images/furfy-c4.png"><br>
                    <img src="images/furfy-c5.png"><br>
                </div>
                `,
                image: 'images/c/furfy-i.png'
            },
            {
                id: 20,
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
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/articani-c.png"><br>
                </div>
                `,
                image: 'images/c/articani-i.png'
            },
            {
                id: 21,
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
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/ryon-c.png"><br>
                </div>
                `,
                image: 'images/c/ryon-i.png'
            },
            {
                id: 22,
                title: 'Card',
                excerpt: '',
                detail:
                    `Species: Cardboard<br>
                Pronouns: She/Any<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/card-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/card-c.png"><br>
                    <img src="images/card-c2.png"><br>
                    <img src="images/card-c3.png"><br>
                    <img src="images/card-c4.png"><br>
                </div>
                `,
                image: 'images/c/card-i.png'
            },
            {
                id: 23,
                title: 'Gift',
                excerpt: '',
                detail:
                    `Species: Giftbox<br>
                Pronouns: She/Any<br>
                Gender: Female<br>
                Sexuality: Bisexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/gift-r.png"><br>
                `,
                image: 'images/c/gift-i.png'
            },
            {
                id: 24,
                title: 'Elise',
                excerpt: '',
                detail:
                    `Species: Sea Bunny<br>
                Pronouns: She/They<br>
                Gender: Female<br>
                Sexuality: Lesbian<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/elise-c.png"><br>
                </div>
                `,
                image: 'images/c/elise-i.png'
            },
            {
                id: 25,
                title: 'Fika',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: She<br>
                Gender: Female<br>
                Sexuality: Heterosexual<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/fika-c.png"><br>
                    <img src="images/fika-c2.png"><br>
                </div>
                `,
                image: 'images/c/fika-i.png'
            },
            {
                id: 26,
                title: 'Rai',
                excerpt: '',
                detail:
                    `Species: Fox<br>
                Pronouns: He<br>
                Gender: Male<br>
                Sexuality: Heterosexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/rai-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/rai-c.png"><br>
                    <img src="images/rai-c2.png"><br>
                </div>
                `,
                image: 'images/c/rai-i.png'
            },
            {
                id: 27,
                title: 'Hana',
                excerpt: '',
                detail:
                    `Species: Bee<br>
                Pronouns: She/They<br>
                Gender: Demigirl<br>
                Sexuality: Lesbian<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/hana-c.png"><br>
                    <img src="images/hana-c2.png"><br>
                    <img src="images/hana-c3.png"><br>
                    <img src="images/hana-c4.png"><br>
                    <img src="images/hana-c5.png"><br>
                </div>
                `,
                image: 'images/c/hana-i.png'
            },
            {
                id: 28,
                title: 'Mida',
                excerpt: '',
                detail:
                    `Species: Medusa Cat<br>
                Pronouns: She/They<br>
                Gender: Female<br>
                Sexuality: Pansexual<br>
                Nickname: Meowdusa<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/mida-c.png"><br>
                    <img src="images/mida-c2.png"><br>
                </div>
                `,
                image: 'images/c/mida-i.png'
            },
            {
                id: 29,
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
                `,
                image: 'images/c/lilac-i.png'
            },
            {
                id: 30,
                title: 'Moka',
                excerpt: '',
                detail:
                    `Species: Dog<br>
                Pronouns: He/They<br>
                Gender: Trans-Male<br>
                Sexuality: Bisexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/moka-r.png"><br>
                `,
                image: 'images/c/moka-i.png'
            },
            {
                id: 31,
                title: 'Nameless',
                excerpt: '',
                detail:
                    `Species: Fennec + Cat<br>
                Pronouns: He/They<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/nameless-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/nameless-c.png"><br>
                </div>
                `,
                image: 'images/c/nameless-i.png'
            },
            {
                id: 32,
                title: 'Nuki',
                excerpt: '',
                detail:
                    `Species: Tanuki<br>
                Pronouns: She/Any<br>
                Gender: Female<br>
                Sexuality: Asexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/nuki-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/nuki-c.png"><br>
                    <img src="images/nuki-c2.png"><br>
                </div>
                `,
                image: 'images/c/nuki-i.png'
            },
            {
                id: 33,
                title: 'Sawo',
                excerpt: '',
                detail:
                    `Species: Bunny<br>
                Pronouns: He/They<br>
                Gender: Male<br>
                Sexuality: Probably Gay<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/sawo-r.png"><br>
                `,
                image: 'images/c/sawo-i.png'
            },
        ]
    },
    {
        id: 2,
        name: 'Floriverse',
        q: 'floriverse',
        subtitle: 'Florie Universe',
        image: 'icons/floriverse.png',
        color: 'var(--color-2)',
        orbit: 1,
        labels: [
            {
                id: 1,
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
                id: 2,
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
                    <h2>Associated Flories:</h2>
                    <div class="imgContainer">
                    <img src="images/flories/fv-potto.png"><br>
                    <img src="images/flories/fv-twinkle.png"><br>
                    <img src="images/flories/fv-strawmon.png"><br>
                    <img src="images/flories/fv-nocto.png"><br>
                    <img src="images/flories/fv-furflow.png"><br>
                    <img src="images/flories/fv-pana.png"><br>
                    <img src="images/flories/fv-kosmaya.png"><br>
                    <img src="images/flories/fv-pinkly.png"><br>
                    <img src="images/flories/fv-mincha.png"><br>
                    <img src="images/flories/fv-lan.png"><br>
                    </div>
                    `,
                image: 'images/fv-i.png'
            },
            {
                id: 3,
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
                    <h2>Associated Flories:</h2>
                    <div class="imgContainer">
                    <img src="images/flories/fvd-starple.png" data-caption="Starple"><br>
                    <img src="images/flories/fvd-chrora.png" data-caption="Chrora"><br>
                    <img src="images/flories/fvd-orply.png" data-caption="Orply"><br>
                    <img src="images/flories/fvd-tiram.png" data-caption="Tiram"><br>
                    <img src="images/flories/fvd-nimibi.png" data-caption="Nimibi"><br>
                    <img src="images/flories/fvd-slump.png" data-caption="Slump"><br>
                    <img src="images/flories/fvd-pio.png"><br>
                    <img src="images/flories/fvd-yana.png"><br>
                    <img src="images/flories/fvd-looni.png"><br>
                    <img src="images/flories/fvd-chocopop.png"><br>
                    <img src="images/flories/fvd-staz.png"><br>
                    <img src="images/flories/fvd-delly.png"><br>
                    <img src="images/flories/fvd-sprinkly.png"><br>
                    <img src="images/flories/fvd-ecno.png"><br>
                    <img src="images/flories/fvd-disaton.png"><br>
                    <img src="images/flories/fvd-protoberries.png"><br>
                    <img src="images/flories/fvd-pipix.png"><br>
                    <img src="images/flories/fvd-pico.png"><br>
                    <img src="images/flories/fvd-starlila.png"><br>
                    <img src="images/flories/fvd-wina.png"><br>
                    <img src="images/flories/fvd-fret.png"><br>
                    <img src="images/flories/fvd-azka.png"><br>
                    <img src="images/flories/fvd-cherro.png"><br>
                    <img src="images/flories/fvd-floorion.png"><br>
                    <img src="images/flories/fvd-stell-a.png"><br>
                    <img src="images/flories/fvd-datum.png"><br>
                    <img src="images/flories/fvd-poloniloo.png"><br>
                    <img src="images/flories/fvd-grayscale.png"><br>
                    <img src="images/flories/fvd-erwith.png"><br>
                    <img src="images/flories/fvd-fyzer.png"><br>
                    <img src="images/flories/fvd-kloroforo.png"><br>
                    </div>
                    `,
                image: 'images/fvd-i.png'
            },
            {
                id: 4,
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
                    <h2>Associated Flories:</h2>
                    <div class="imgContainer">
                    <img src="images/flories/fve-solaris.png"><br>
                    <img src="images/flories/fve-trix.png"><br>
                    <img src="images/flories/fve-lux.png"><br>
                    <img src="images/flories/fve-glitter.png"><br>
                    <img src="images/flories/fve-fomfz.png"><br>
                    <img src="images/flories/fve-bion.png"><br>
                    <img src="images/flories/fve-zoey.png"><br>
                    <img src="images/flories/fve-hera.png"><br>
                    <img src="images/flories/fve-isla.png"><br>
                    <img src="images/flories/fve-azira.png"><br>
                    <img src="images/flories/fve-misty.png"><br>
                    <img src="images/flories/fve-nya.png"><br>
                    <img src="images/flories/fve-atto.png"><br>
                    <img src="images/flories/fve-clara.png"><br>
                    <img src="images/flories/fve-lyra.png"><br>
                    <img src="images/flories/fve-strawnilla.png"><br>
                    <img src="images/flories/fve-poppers.png"><br>
                    <img src="images/flories/fve-aurelia.png"><br>
                    <img src="images/flories/fve-dysis.png"><br>
                    <img src="images/flories/fve-butter.png"><br>
                    <img src="images/flories/fve-bell.png"><br>
                    <img src="images/flories/fve-nila.png"><br>
                    <img src="images/flories/fve-zest.png"><br>
                    <img src="images/flories/fve-corrode.png"><br>
                    <img src="images/flories/fve-amalgamapot.png"><br>
                    <img src="images/flories/fve-posie.png"><br>
                    <img src="images/flories/fve-nonsense.png"><br>
                    <img src="images/flories/fve-torq.png"><br>
                    <img src="images/flories/fve-persen.png"><br>
                    <img src="images/flories/fve-terentia.png"><br>
                    <img src="images/flories/fve-lumina.png"><br>
                    <img src="images/flories/fve-triplequestionmark.png"><br>
                    <img src="images/flories/fve-upsidedowntriplequestionmark.png"><br>
                    <img src="images/flories/fve-ghoargh.png"><br>
                    <img src="images/flories/fve-hyd-124.png"><br>
                    <img src="images/flories/fve-thorn.png"><br>
                    <img src="images/flories/fve-reva.png"><br>
                    <img src="images/flories/fve-ash.png"><br>
                    <img src="images/flories/fve-flailer.png"><br>
                    <img src="images/flories/fve-mang.png"><br>
                    <img src="images/flories/fve-zappie.png"><br>
                    <img src="images/flories/fve-kai.png"><br>
                    <img src="images/flories/fve-console.png"><br>
                    <img src="images/flories/fve-xi.png"><br>
                    <img src="images/flories/fve-floriecookies.png"><br>
                    <img src="images/flories/fve-nini.png"><br>
                    <img src="images/flories/fve-xyxiv.png"><br>
                    <img src="images/flories/fve-nau.png"><br>
                    </div>
                    `,
                image: 'images/fve-i.png'
            },
            {
                id: 5,
                title: 'Floriverse : Zeta',
                excerpt: 'Album',
                detail:
                    ``,
                image: 'images/fvz-i.png'
            },
        ]
    },
    {
        id: 3,
        name: 'Digirel',
        q: 'digirel',
        subtitle: 'Digital Realm',
        image: 'icons/digirel.png',
        color: 'var(--color-3)',
        orbit: 1,
        labels: [
            {
                id: 1,
                title: 'Info',
                excerpt: 'About Digirel',
                detail:
                    `This universe does not exist independently but is derived from other universes where computers and servers can exist. It’s the result of multiversal intercommunication. “Digitalias” wander throughout Digirel and can interact with other universes through hardware connections.<br>
                    <h4>What's in this page</h4>
                    This page list all characters in separate categories based on the Digirel album they associate with, as well as uncategorized ones.<br>`,
                image: 'icons/digirel.png'
            },
            {
                id: 2,
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
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/soap-c.png">
                    <img src="images/soap-c2.png">
                    <img src="images/soap-c3.png">
                </div>
                `,
                image: 'images/c/soap-i.png'
            },
            {
                id: 3,
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
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/semyk-c.png">
                    <img src="images/semyk-c2.png">
                    <img src="images/semyk-c3.png">
                </div>
                `,
                image: 'images/c/semyk-i.png'
            },
            {
                id: 4,
                title: 'Artifolder',
                excerpt: '',
                detail:
                    `Species: Folder Bee<br>
                Pronouns: Any Pronouns<br>
                Gender: Female<br>
                Sexuality: Pansexual<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/artifolder-c.png">
                </div>
                `,
                image: 'images/c/artifolder-i.png'
            },
            {
                id: 5,
                title: 'Byte',
                excerpt: '',
                detail:
                    `Species: Folder Cat<br>
                Pronouns: He/They<br>
                Gender: Demiboy<br>
                Sexuality: Asexual<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/byte-c.png">
                </div>
                `,
                image: 'images/c/byte-i.png'
            },
            {
                id: 6,
                title: 'Cherry',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: She/They<br>
                Gender: Demigirl<br>
                Sexuality: Bisexual<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/cherry-c.png">
                    <img src="images/cherry-c2.png">
                </div>
                `,
                image: 'images/c/cherry-i.png'
            },
            {
                id: 7,
                title: 'Ebta',
                excerpt: '',
                detail:
                    `Species: Slime Bunny<br>
                Pronouns: She/They/Any<br>
                Gender: Pangender<br>
                Sexuality: Bisexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/ebta-r.png"><br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/ebta-c.png">
                    <img src="images/ebta-c2.png">
                </div>
                `,
                image: 'images/c/ebta-i.png'
            },
            {
                id: 8,
                title: '< placeholder >',
                excerpt: '',
                detail:
                    `Species: Cat<br>
                Pronouns: Any Pronouns<br>
                Gender: None<br>
                Sexuality: None<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/placeholder-c.png">
                    <img src="images/placeholder-c2.png">
                    <img src="images/placeholder-c3.png">
                </div>
                `,
                image: 'images/c/placeholder-i.png'
            },
            {
                id: 9,
                title: 'Sakura',
                excerpt: '',
                detail:
                    `Species: Digitalia<br>
                Pronouns: She/They<br>
                Gender: Female<br>
                Sexuality: Lesbian<br>
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/sakura-c.png">
                </div>
                `,
                image: 'images/c/sakura-i.png'
            },
            {
                id: 10,
                title: 'Quanta',
                excerpt: '',
                detail:
                    `Species: Hologram Cat<br>
                Pronouns: They<br>
                Gender: Non-Binary<br>
                Sexuality: Pansexual<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/quanta-r.png"><br>
                `,
                image: 'images/c/quanta-i.png'
            },
        ]
    },
    {
        id: 4,
        name: 'Nansenz',
        q: 'nansenz',
        subtitle: 'World of Nonsense',
        image: 'icons/nansenz.png',
        color: 'var(--color-4)',
        orbit: 1,
        labels: [
            {
                id: 1,
                title: 'Info',
                excerpt: 'About Nansenz',
                detail:
                    `A world beyond logical limits where anything can exist. It’s like a fever dream. Anything you imagine or could be imagined, objects with limbs, cube-shaped planets, galaxies made of spaghetti, there are no boundaries in Nansenz. The entire purpose of this universe is to contain everything that defy all sense of logic.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nansenz. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/nansenz.png'
            },
            {
                id: 2,
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
                `,
                image: 'images/c/mu-i.png'
            },
        ]
    },
    {
        id: 5,
        name: 'Hizen',
        q: 'hizen',
        subtitle: 'Hi-Zenith',
        image: 'icons/hizen.png',
        color: 'var(--color-5)',
        orbit: 1,
        labels: [
            {
                id: 1,
                title: 'Info',
                excerpt: 'About Hizen',
                detail:
                    `While this universe may represent a sort of heaven, it’s not just an “afterlife” (in fact, there are many realms beyond heaven and hell in the Fyberverse). This is where entities considered angelic (or derived from such origins) were born. The universe is depicted as infinite layers of floating islands.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Hizen. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/hizen.png'
            },
            {
                id: 2,
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
                <hr>
                <h2>Gallery:</h2>
                <div class="imgContainer">
                    <img src="images/lyne-c.png"><br>
                </div>
                `,
                image: 'images/c/lyne-i.png'
            },
        ]
    },
    {
        id: 6,
        name: 'Nadir',
        q: 'nadir',
        subtitle: 'Void of Nadir',
        image: 'icons/nadir.png',
        color: 'var(--color-6)',
        orbit: 1,
        labels: [
            {
                id: 1,
                title: 'Info',
                excerpt: 'About Nadir',
                detail:
                    `Nadir can be seen as the inverse of Hizen. While often portrayed as hell, it isn’t fiery or chaotic. Instead, it’s quiet, dark, and dreadfully still, as though watched by an omnipresent gaze. Anything that enters this void slowly desaturates and decays as its essence of life fades away.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nadir. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/nadir.png'
            },
            {
                id: 2,
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
                `,
                image: 'images/c/infineko-i.png'
            },
            {
                id: 3,
                title: 'Ugo',
                excerpt: '',
                detail:
                    `Species: Vortex<br>
                Pronouns: He<br>
                Gender: Male<br>
                Sexuality: Gay<br>
                <h2>Reference Art:</h2><br>
                <img src="images/r/ugo-r.png"><br>
                `,
                image: 'images/c/ugo-i.png'
            },
            {
                id: 4,
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
                    <img src="images/Δ-c.png">
                </div>
                `,
                image: 'images/c/Δ-i.png'
            },
        ]
    },
    {
        id: 7,
        name: 'Information',
        q: 'info',
        subtitle: 'Information about Artifyber and this website',
        showName: true,
        image: 'icons/info.png',
        color: 'var(--color-3)',
        orbit: 2,
        scale: 1.5,
        labels: [
            {
                id: 1,
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
                    In the future I want to be a game developer and create something out of the worlds and characters i've made. It's a dream of mine to creat an actual game and I still have a long way to go.<br>
                    <br>
                    <hr>
                    All done. Thank you for enjoying what I make :3<br>
                    <img src="images/fyberhappy.png"">
`,
                image: 'images/temp3.png'
            },
            {
                id: 2,
                title: `Website Info:<br>`,
                excerpt: `
                Updated: ${lastUpdated}<br>
                Version: ${version}<br>
                <div id="totalCardsCounter"></div><br>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
        ]
    },
    {
        id: 8,
        name: 'Links',
        q: 'links',
        subtitle: 'All links to my social media',
        showName: true,
        image: 'icons/earth.png',
        color: 'var(--color-9)',
        orbit: 2,
        scale: 1.5,
        labels: [
            {
                id: 1,
                title: 'Twitter',
                excerpt: '',
                url: 'https://twitter.com/artifyber',
                image: 'icons/l-twitter.png'
            },
            {
                id: 2,
                title: 'Instagram',
                excerpt: '',
                url: 'https://instagram.com/artifyber',
                image: 'icons/l-instagram.png'
            },
            {
                id: 3,
                title: 'BlueSky',
                excerpt: '',
                url: 'https://bsky.app/profile/artifyber.xyz',
                image: 'icons/l-bluesky.png'
            },
            {
                id: 4,
                title: 'Discord Server',
                excerpt: '',
                url: 'https://discord.gg/artifyber',
                image: 'icons/l-discord.png'
            },
            {
                id: 5,
                title: 'YouTube',
                excerpt: '',
                url: 'https://youtube.com/@artifyber',
                image: 'icons/l-youtube.png'
            },
            {
                id: 6,
                title: 'Spotify Artist',
                excerpt: '',
                url: 'https://open.spotify.com/intl-id/artist/41B16M5LFJKcwUW3L75PVh',
                image: 'icons/l-spotify.png'
            },
            {
                id: 7,
                title: 'Newgrounds',
                excerpt: '',
                url: 'https://artifyber.newgrounds.com/',
                image: 'icons/l-newgrounds.png'
            },
            {
                id: 8,
                title: 'SoundCloud',
                excerpt: '',
                url: 'https://on.soundcloud.com/3V5Uz',
                image: 'icons/l-soundcloud.png'
            },
            {
                id: 9,
                title: 'Toyhouse',
                excerpt: '',
                url: 'https://toyhou.se/artifyber',
                image: 'icons/l-toyhouse.png'
            },
            {
                id: 10,
                title: 'Carrd',
                excerpt: 'Backup website just in case',
                url: 'https://artifyber.carrd.co/',
                image: 'icons/l-carrd.png'
            },
            {
                id: 11,
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
        id: 9,
        name: 'Commissions',
        q: 'comms',
        subtitle: 'Information about art/music commissions',
        showName: true,
        image: 'icons/dollar.png',
        color: 'var(--color-11)',
        orbit: 2,
        scale: 1.5,
        labels: [
            {
                id: 1,
                title: 'Ko-Fi',
                excerpt: 'For a method of payment',
                url: 'https://ko-fi.com/artifyber',
                image: 'icons/comm-kofi.png'
            },
            {
                id: 2,
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
                id: 3,
                title: 'Art Pricing',
                excerpt: 'With examples',
                detail:
                    `
                    <h2><i>PLEASE READ MY <a data-open-card="comms:2">T.O.S</a> BEFORE COMMISIONING ME.</i></h2>
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
                    <img src="images/artibun-c2.png"><br>
                    <img src="images/artigoat-c4.png"><br>
                    <img src="images/micro-c.png"><br>
                    </div>
                    <h4>Nature = +10 USD</h4>
                    This include clouds and space-themed background<br>
                    <div class="imgContainer">
                    <img src="images/artigoat-c2.png"><br>
                    <img src="images/skitty-c3.png"><br>
                    <img src="images/furfy-c.png"><br>
                    </div>
                    <h4>Many objects = +30 USD</h4>
                    Cityscapes, interior, etc.<br>
                    <div class="imgContainer">
                    <img src="images/artifox-c4.png"><br>
                    <img src="images/eros-c2.png"><br>
                    <img src="images/articat-c5.png"><br>
                    </div>
                    `,
                image: 'icons/comm-art.png'
            },
            {
                id: 4,
                title: 'Music Pricing',
                excerpt: 'With examples',
                detail:
                    `
                    <h2><i>PLEASE READ MY <a data-open-card="comms:2">T.O.S</a> BEFORE COMMISIONING ME.</i></h2>
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
                id: 5,
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
        id: 10,
        name: 'Daily Art+',
        showName: true,
        q: 'dailyartplus',
        subtitle: '',
        image: 'icons/dollar.png',
        image: '',
        color: 'var(--color-8)',
        orbit: 4,
        scale: 2,
        labels: [
            {
                id: 1,
                title: 'Daily Art+',
                excerpt: '',
                detail:
                    `
                    Showing latest posts from my Instagram.<br><br>
                    <div id="instaCard">
                    <iframe
                        src="http://lightwidget.com/widgets/8de0d57c2b9e5ed6882d4b65b461c8c3.html"
                        scrolling="no" allowtransparency="true"
                        class="lightwidget-widget"
                        style="width:100%;border:0;overflow:hidden;"
                    </iframe>
                    </div>
                    `,
                image: 'icons/l-instagram.png'
            },
        ]
    },
    {
        id: 99,
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
                title: ' ',
                excerpt: '',
                detail:
                    ``,
                image: 'icons/whitespace.png'
            },
        ]
    },
];

// generate placeholder cards
function generateLabels(n, prefix) {
    return Array.from({ length: n }).map((_, i) => ({
        id: i + 1,
        title: `${prefix} Item ${i + 1}`,
        excerpt: `This is a short placeholder excerpt for ${prefix} item ${i + 1}.`,
        detail: `Detailed description for ${prefix} item ${i + 1}. You can replace this with whatever content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nulla sed velit malesuada fermentum.`,
        image: 'images/temp.png'
    }))
}

totalCards = menuItems.reduce((sum, item) => sum + item.labels.length, 0);
totalMenus = menuItems.length;