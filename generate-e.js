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

function pickCardImage(label, menu) {
    if (label.cReference) return label.cReference;
    if (Array.isArray(label.cGallery) && label.cGallery.length > 0)
        return label.cGallery[0];
    if (label.image) return label.image;
    if (menu.image) return menu.image;
    return "";
}

// Builds the HTML with OG tags + redirect
function buildHTML({ title, desc, image, url, twitterType = "summary" }) {
    return `<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="theme-color" content="#C894F9">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Artifyber">
        <meta property="og:title" content="${esc(title)}">
        <meta property="og:description" content="${esc(desc)}">
        <meta property="og:image" content="${DOMAIN}/${esc(image)}">
        <meta property="og:url" content="${esc(url)}">
        <meta name="twitter:card" content="${twitterType}">
        <meta name="twitter:title" content="${esc(title)}">
        <meta name="twitter:description" content="${esc(desc)}">
        <meta name="twitter:image" content="${DOMAIN}/${esc(image)}">
    </head>
    <body>
        <script>
            location.href = "${esc(url)}";
        </script>
    </body>
</html>`;
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
        menu.labels.forEach(label => {
            if (!label.cardId || label.url || label.unclickable) return;

            const cardId = label.cardId;
            const cardFolder = path.join(menuFolder, cardId);
            if (!fs.existsSync(cardFolder)) fs.mkdirSync(cardFolder);

            // PICK BEST IMAGE
            const chosenImage = pickCardImage(label, menu);

            // CHARACTER DESCRIPTION
            let desc = label.subtitle || "View card";
            if (label.isCharacter) {
                const cSpecies = label.cSpecies ? `Species: ${label.cSpecies}\n` : '';
                const cPronouns = label.cPronouns ? `Pronouns: ${label.cPronouns}\n` : '';
                const cGender = label.cGender ? `Gender: ${label.cGender}\n` : '';
                const cSexuality = label.cSexuality ? `Sexuality: ${label.cSexuality}\n` : '';
                const cNicknames = label.cNicknames ? `Nicknames: ${label.cNicknames}\n` : '';

                desc = `${cSpecies}${cPronouns}${cGender}${cSexuality}${cNicknames}`.trim();
            }

            // TWITTER CARD TYPE
            const twitterType = label.isCharacter
                ? "summary_large_image"
                : "summary";

            const cardHTML = buildHTML({
                title: label.title || cardId,
                desc,
                image: chosenImage,
                url: `/?m=${menuId}&i=${cardId}`,
                twitterType
            });

            fs.writeFileSync(path.join(cardFolder, "index.html"), cardHTML, "utf8");
            console.log("Generated card:", `${menuId}/${cardId}`);
        });
    }
});

console.log("\nAll embed pages generated in /e/");