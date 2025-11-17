self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  clients.claim();
});

// Optional: cache basic shell for offline capability
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
