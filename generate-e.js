// generate-e.js
// Creates /e/<menuId>/index.html and /e/<menuId>/<cardId>/index.html

const DOMAIN = 'https://artifyber.xyz';
const fs = require("fs");
const path = require("path");
const { menuItems } = require("./data.js");

const OUT = path.join(__dirname, "e");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

function esc(s) {
    return String(s || "").replace(/"/g, "&quot;");
}

function pickCardImage(c, menu) {
    if (c.cReference) return c.cReference;
    if (Array.isArray(c.cGallery) && c.cGallery.length > 0)
        return c.cGallery[0];
    if (c.image) return c.image;
    if (menu.image) return menu.image;
    return "";
}



// Builds the HTML with OG tags + redirect
function buildHTML({ title, desc, image, url, cardId, cardTitle, cardExcerpt, cardDetail, cardImage, twitterType = "summary" }) {
    return `<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="theme-color" content="#C894F9">
        <title>${cardTitle}</title>
        <link rel="icon" type="image" href="/icons/fav-icon.png">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" id="vp">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Artifyber">
        <meta property="og:title" content="${esc(title)}">
        <meta property="og:description" content="${esc(desc)}">
        <meta property="og:image" content="${DOMAIN}/${esc(image)}">
        <meta property="og:url" content="${esc(url)}">
        <meta name="twitter:card" content="${twitterType}">
        <meta name="twitter:title" content="${esc(title)}">
        <meta name="twitter:description" content="${esc(desc)}">
        <meta name="twitter:image" content="${DOMAIN}/${esc(image)}">${cardId ? '<link rel="stylesheet" href="/style.css" type="text/css">' : ''}
    </head>
    <body>${cardId ? `
            <div id="detailView" class="detail-view preview-mode">
                <div id="detailViewHeader" class="detail-view-header">
                    <div class="card active" data-id="${esc(cardId)}">
                        ${cardImage ? `<img class="thumb" src="/${esc(cardImage)}">` : ''}
                        ${cardTitle || cardExcerpt ? `<div class="card-text">
                            <div class="card-text-title">${cardTitle}</div>${cardExcerpt ? `<div class="card-text-excerpt">${cardExcerpt}</div>` : ''}
                        </div>`
                : ''}
                    </div>
                </div>
                <div id="detailViewContent" class="detail-view-content">
                    <small>Previewing ${cardTitle ? `${cardTitle}` : 'card'} - <a href="${esc(url)}">See more in Fyberverse</a></small>
                    ${cardDetail}
                </div>
            </div>
            `
            : ''}
        <script>
            ${cardId ? '//' : ''}location.href = "${esc(url)}";
        </script>
    </body>
</html>`;
}



// HTML builder for character cards
function characterHTMLBuilder(c, html) {
    const cSpecies = c.cSpecies ? `Species: ${c.cSpecies}<br>` : '';
    const cPronouns = c.cPronouns ? `Pronouns: ${c.cPronouns}<br>` : '';
    const cGender = c.cGender ? `Gender: ${c.cGender}<br>` : '';
    const cSexuality = c.cSexuality ? `Sexuality: ${c.cSexuality}<br>` : '';
    const cNicknames = c.cNicknames ? `Nickname: ${c.cNicknames}<br>` : '';
    const cReference = c.cReference ? `<br><h2>Reference Art:</h2><br><img src="${c.cReference}"><br><br>` : '';
    // const cGallery = c.cGallery ? c.cGallery.length != 0 ? `<hr><h2>Picked Image:</h2>` + `<img src="${c.cGallery[0]}">` + `<br>` : '' : '';
    const cGallery = c.cGallery ? c.cGallery.length != 0 ? `<hr><h2>Top Images:</h2><div class="imgContainer">` + c.cGallery.slice(0, 3).map(imgSrc => `<img src="${imgSrc}">`).join('') + `</div><br>` : '' : '';
    const cAddOns = c.cAddOns ? `<br>${c.cAddOns}<br>` : '';
    const details = c.detail ? `<hr>${html}<br>` : '';
    // const cRelations = c.cRelations ? c.cRelations.length != 0 ? `<hr><h2>Related Characters:</h2><div class="imgContainer">` + c.cRelations.map(rel => `<div class="card internal" data-href="${rel.cardId}" data-caption="${rel.relation}"></div>`).join('') + `</div><br>` : '' : '';

    html = `
        ${cSpecies}
        ${cPronouns}
        ${cGender}
        ${cSexuality}
        ${cNicknames}
        ${cAddOns}
        ${cReference}
        ${details}
        ${cGallery}
    `;
    return html;
}



menuItems.forEach(menu => {
    const menuId = menu.menuId;

    if (menu.invisible) {
        console.log("Skipped hidden menu:", menuId);
        return;
    }

    const menuFolder = path.join(OUT, menuId);
    if (!fs.existsSync(menuFolder)) fs.mkdirSync(menuFolder);

    const menuHTML = buildHTML({
        title: menu.title || menuId,
        desc: menu.subtitle || "View menu",
        image: menu.image || "",
        url: `/?m=${menuId}`
    });

    fs.writeFileSync(path.join(menuFolder, "index.html"), menuHTML, "utf8");
    console.log("Generated menu:", menuId);

    // CARDS
    if (menu.labels) {
        menu.labels.forEach(c => {
            if (!c.cardId || c.url || c.unclickable) return;

            const cardId = c.cardId;
            const cardFolder = path.join(menuFolder, cardId);
            if (!fs.existsSync(cardFolder)) fs.mkdirSync(cardFolder);

            // PICK BEST IMAGE
            const chosenImage = pickCardImage(c, menu);

            // CHARACTER DESCRIPTION
            let desc = c.subtitle || "View card";
            if (c.isCharacter) {
                const cSpecies = c.cSpecies ? `Species: ${c.cSpecies}\n` : '';
                const cPronouns = c.cPronouns ? `Pronouns: ${c.cPronouns}\n` : '';
                const cGender = c.cGender ? `Gender: ${c.cGender}\n` : '';
                const cSexuality = c.cSexuality ? `Sexuality: ${c.cSexuality}\n` : '';
                const cNicknames = c.cNicknames ? `Nicknames: ${c.cNicknames}\n` : '';

                desc = `${cSpecies}${cPronouns}${cGender}${cSexuality}${cNicknames}`.trim();
            }

            // CARD DETAIL
            let html = c.detail || '';
            if (c.isCharacter) html = characterHTMLBuilder(c, html)

            // HANDLE HTML IMAGES
            html = html.replaceAll('src="', 'src="/')

            // TWITTER CARD TYPE
            const twitterType = c.isCharacter
                ? "summary_large_image"
                : "summary";

            const cardHTML = buildHTML({
                title: c.title || cardId,
                desc,
                image: chosenImage,
                url: `/?m=${menuId}&i=${cardId}`,
                cardId: cardId,
                cardTitle: c.title,
                cardExcerpt: c.subtitle,
                cardDetail: `
                    ${c.title ? `<h1>${c.title}</h1>` : ''}
                    <hr>
                    ${html}`,
                cardImage: c.image,
                twitterType,
            });

            fs.writeFileSync(path.join(cardFolder, "index.html"), cardHTML, "utf8");
            console.log("Generated card:", `${menuId}/${cardId}`);
        });
    }
});

console.log("\nAll embed pages generated in /e/");