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

let tickerRunning = false;
let currentAnimationId = null;

function resetTicker(container) {
  if (!container) return;

  const textElem = container.querySelector(".ticker-text");
  if (!textElem) return;

  textElem.style.transition = 'none';
  textElem.style.transform = 'translateX(0)';
  textElem.style.visibility = 'visible';
  textElem.textContent = '';
  textElem.offsetHeight;

  if (currentAnimationId) {
    clearTimeout(currentAnimationId);
    currentAnimationId = null;
  }

  tickerRunning = false;
}

async function startTicker(container, filePath, speed = 100) {
  if (!container) return;
  resetTicker(container);

  const textElem = container.querySelector(".ticker-text");
  if (!textElem) return;

  const messages = await loadTickerText(filePath);
  const nonsenseLen = messages.length;

  tickerRunning = true;
  let isActive = true;

  async function showNextMessage() {
    if (!isActive || !tickerRunning) return;

    // Check if container is still in DOM and visible
    if (!document.body.contains(container)) {
      isActive = false;
      return;
    }

    // Check visibility
    const style = window.getComputedStyle(container);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      currentAnimationId = setTimeout(() => showNextMessage(), 100);
      return;
    }

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
    }
    for (occ = 0; occ < (m.match(/RAND100/g) || []).length * 100; occ++) {
      m = m.replace('$RAND100$', Math.floor(Math.random() * 100).toString());
    }
    for (occ = 0; occ < (m.match(/RAND10/g) || []).length * 100; occ++) {
      m = m.replace('$RAND10$', Math.floor(Math.random() * 10).toString());
    }

    message = m;
    textElem.textContent = message;

    await new Promise(r => requestAnimationFrame(r));

    const textWidth = textElem.offsetWidth;
    const containerWidth = container.offsetWidth;

    // If text is too long for container, use a longer duration
    const distance = textWidth + containerWidth;
    const duration = Math.max(distance / speed, 5); // Minimum 5 seconds

    textElem.style.transition = 'none';
    textElem.style.transform = `translateX(${containerWidth}px)`;
    textElem.offsetHeight;
    textElem.style.transition = `transform ${duration}s linear`;
    textElem.style.transform = `translateX(-${textWidth}px)`;

    // Schedule next message
    currentAnimationId = setTimeout(() => {
      if (isActive && tickerRunning) {
        showNextMessage();
      }
    }, duration * 1000);
  }

  showNextMessage();

  return () => {
    isActive = false;
    tickerRunning = false;
    if (currentAnimationId) {
      clearTimeout(currentAnimationId);
      currentAnimationId = null;
    }
  };
}

const tickerSpeed = 180;
let cleanupTicker = null;

function setupTickerObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.classList.contains('ticker-bar')) {
        // Ticker is visible, start or restart it
        if (cleanupTicker) {
          cleanupTicker(); // Clean up old ticker
        }

        setTimeout(() => {
          startTicker(entry.target, messages, tickerSpeed).then(cleanup => {
            cleanupTicker = cleanup;
          });
        }, 50);
      } else if (!entry.isIntersecting && entry.target.classList.contains('ticker-bar')) {
        // Ticker is no longer visible, clean up
        if (cleanupTicker) {
          cleanupTicker();
          cleanupTicker = null;
        }
        resetTicker(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.ticker-bar').forEach(ticker => {
    observer.observe(ticker);
  });

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.matches('.ticker-bar')) {
            observer.observe(node);
          }
          node.querySelectorAll('.ticker-bar').forEach(ticker => {
            observer.observe(ticker);
          });
        }
      });

      mutation.removedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.matches('.ticker-bar')) {
            observer.unobserve(node);
          }
          node.querySelectorAll('.ticker-bar').forEach(ticker => {
            observer.unobserve(ticker);
          });
        }
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

let messages = ["Hello, $AUTHOR$ number $RAND10$$RAND10$$RAND10$. This is a placeholder text. If you're seeing this, the ticker failed. You must restart Nansenz in order for it to work properly. You can do this by simply clicking the back button or hit the ESCAPE key and reopen this menu. Once you do, the ticker should start fetching data straight from $CHANNEL$ into your device and serves you with our highest quality nonsense. We apologize for the inconvenience. - This message was sent at $TIME$"];
fetch('https://artifyber.xyz/nonsense.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    messages = data.split("\n").filter(line => line.trim() !== "");
    setupTickerObserver();
  })
  .catch(error => {
    console.error('Error fetching the file:', error);
    setupTickerObserver();
  });

document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.ticker-bar')) return;
  if (!cleanupTicker) {
    setTimeout(setupTickerObserver, 100);
  }
});