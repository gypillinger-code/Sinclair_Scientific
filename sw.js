const prefix = 'sinclair-scientific:' + self.registration.scope + ':';
const version = prefix + '1';
const assets = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(version).then(cache => cache.addAll(assets)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(prefix) && key !== version)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const {request} = event;
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(version);
    const saved = await cache.match(request);
    if (saved) return saved;
    try {
      return await fetch(request);
    } catch (error) {
      if (request.mode === 'navigate') return await cache.match('./index.html');
      throw error;
    }
  })());
});
