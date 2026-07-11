/* ================================================================
   ServisTek PWA — Service Worker dengan Auto-Update
   Versi: 11.14.0
   ================================================================ */

const APP_VERSION = '11.14.0';
const CACHE_NAME = `servistek-v${APP_VERSION}`;
const OFFLINE_URL = './index.html';

const PRECACHE_URLS = [
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
];

// ============ INSTALL ============
self.addEventListener('install', event => {
  console.log(`[SW] ServisTek v${APP_VERSION} installing...`);
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => console.warn(`[SW] Gagal cache: ${url}`, err))
        )
      );
    }).then(() => {
      console.log(`[SW] v${APP_VERSION} terinstall`);
      // JANGAN skipWaiting di sini — biarkan halaman yang trigger via tombol
    })
  );
});

// ============ MESSAGE — SKIP WAITING (WAJIB ADA!) ============
self.addEventListener('message', event => {
  console.log('[SW] Pesan masuk:', event.data);
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING diterima — langsung aktif!');
    self.skipWaiting();
  }
});

// ============ ACTIVATE ============
self.addEventListener('activate', event => {
  console.log(`[SW] ServisTek v${APP_VERSION} aktif`);
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name.startsWith('servistek-') && name !== CACHE_NAME)
          .map(name => {
            console.log(`[SW] Hapus cache lama: ${name}`);
            return caches.delete(name);
          })
      );
    })
    .then(() => self.clients.claim())
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'SW_UPDATED',
          version: APP_VERSION,
          message: `ServisTek v${APP_VERSION} berhasil diperbarui!`
        });
      });
    })
  );
});

// ============ FETCH ============
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  if (url.protocol === 'data:') return;

  // Network First untuk HTML
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // Cache First untuk assets
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.ok && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => new Response('', { status: 408, statusText: 'Offline' }));
    })
  );
});

console.log(`[SW] ServisTek Service Worker v${APP_VERSION} loaded`);
