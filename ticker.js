/* async function loadTickerText(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("Failed to load ticker file");
    const text = await response.text();
    // Split text by newline and remove empty lines
    return text.split(/\r?\n/).filter(line => line.trim() !== "");
  } catch (err) {
    console.error(err);
    return ["(error loading text file)"];
  }
}
*/

async function loadTickerText(filePath) {
  return filePath;
}

async function startTicker(containerSelector, filePath, speed = 100) {
  const container = document.querySelector(containerSelector);
  const textElem = container.querySelector(".ticker-text");
  const messages = await loadTickerText(filePath);
  const nonsenseLen = messages.length;

  async function showNextMessage() {
    let index = Math.floor(Math.random() * messages.length);
    const timeiso = new Date().toISOString();
    const timestamp = Date.now();
    let message = '';
    let m = messages[index]
      .replaceAll('$AUTHOR$', 'Visitor')
      .replaceAll('$TIME$', timeiso)
      .replaceAll('$TIMESTAMP$', timestamp)
      .replaceAll('$CHANNEL$', 'Nonsense Galaxy')
      .replaceAll('$SERVER$', 'Nansenz')
      .replaceAll('$NONSENSETOTAL$', nonsenseLen.toString());
    for (occ = 0; occ < (m.match(/RAND1000/g) || []).length * 100; occ++) {
      m = m.replace('$RAND1000$', Math.floor(Math.random() * 1000).toString());
    };
    for (occ = 0; occ < (m.match(/RAND100/g) || []).length * 100; occ++) {
      m = m.replace('$RAND100$', Math.floor(Math.random() * 100).toString());
    };
    for (occ = 0; occ < (m.match(/RAND10/g) || []).length * 100; occ++) {
      m = m.replace('$RAND10$', Math.floor(Math.random() * 10).toString());
    };
    message = m;
    textElem.textContent = message;

    await new Promise(r => requestAnimationFrame(r));

    const textWidth = textElem.offsetWidth;
    const containerWidth = container.offsetWidth;
    const distance = textWidth + containerWidth;
    const duration = distance / speed; // seconds (speed = px/sec)

    textElem.style.transform = `translateX(${containerWidth}px)`;
    textElem.style.transition = "none";

    textElem.offsetHeight;

    textElem.style.transition = `transform ${duration}s linear`;
    textElem.style.transform = `translateX(-${textWidth}px)`;

    setTimeout(() => {
      showNextMessage();
    }, duration * 1000);
  }

  showNextMessage();
}

const tickerSpeed = 180;

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1 && node.matches(".ticker-bar")) {
        startTicker(".ticker-bar", messages, tickerSpeed);
      } else if (node.nodeType === 1) {
        const ticker = node.querySelector(".ticker-bar");
        if (ticker) startTicker(".ticker-bar", messages, tickerSpeed);
      }
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });

let messages = ["Hello, $AUTHOR$ number $RAND10$$RAND10$$RAND10$. This is a placeholder text. If you're seeing this, the ticker failed. You must restart Nansenz in order for it to work properly. You can do this by simply clicking the back button or hit the ESCAPE key and reopen this card. Once you do, the ticker should start fetching data straight from $CHANNEL$ into your device and serves you with our highest quality nonsense. We apologize for the inconvenience. - This message was sent at $TIME$"];
fetch('https://artifyber.xyz/nonsense.txt')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Return the response body as text
    return response.text();
  })
  .then(data => {
    messages = data.split("\n");
  })
  .catch(error => {
    console.error('Error fetching the file:', error);
  });