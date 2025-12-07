// generate-e.js
// Creates /e/<menuId>/index.html and /e/<menuId>/<cardId>/index.html

const fs = require("fs");
const path = require("path");
const { menuItems } = require("./data.js");

const OUT = path.join(__dirname, "e");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

function esc(s) {
    return String(s || "").replace(/"/g, "&quot;");
}

// Builds the HTML with OG tags + redirect
function buildHTML({ title, desc, image, url }) {
    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">

  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${esc(image)}">
  <meta property="og:url" content="${esc(url)}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${esc(image)}">
</head>

<body>
  <script>
      // Redirect real users back to your SPA
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
        title: menu.name || menuId,
        desc: menu.subtitle || "View menu",
        image: menu.image || "",
        url: `/?m=${menuId}`
    });

    fs.writeFileSync(path.join(menuFolder, "index.html"), menuHTML, "utf8");
    console.log("Generated menu:", menuId);

    // CARDS
    if (menu.labels) {
        menu.labels.forEach(label => {
            // Skip invalid or unclickable cards
            if (!label.cardId || label.url || label.unclickable) return;

            const cardId = label.cardId;
            const cardFolder = path.join(menuFolder, cardId);
            if (!fs.existsSync(cardFolder)) fs.mkdirSync(cardFolder);

            const cardHTML = buildHTML({
                title: label.title || cardId,
                desc: label.excerpt || "View card",
                image: label.image || menu.image || "",
                url: `/?m=${menuId}&i=${cardId}`
            });

            fs.writeFileSync(path.join(cardFolder, "index.html"), cardHTML, "utf8");
            console.log("Generated card:", `${menuId}/${cardId}`);
        });
    }
});


console.log("\nAll embed pages generated in /e/");
