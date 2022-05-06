/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-9829a79';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./devatero_pohadek_002.html","./devatero_pohadek_003.html","./devatero_pohadek_005.html","./devatero_pohadek_006.html","./devatero_pohadek_009.html","./devatero_pohadek_012.html","./devatero_pohadek_015.html","./devatero_pohadek_018.html","./devatero_pohadek_021.html","./devatero_pohadek_024.html","./devatero_pohadek_031.html","./devatero_pohadek_040.html","./devatero_pohadek_043.html","./devatero_pohadek_054.html","./devatero_pohadek_063.html","./devatero_pohadek_076.html","./devatero_pohadek_101.html","./devatero_pohadek_124.html","./devatero_pohadek_127.html","./devatero_pohadek_130.html","./devatero_pohadek_133.html","./devatero_pohadek_136.html","./devatero_pohadek_139.html","./devatero_pohadek_140.html","./devatero_pohadek_141.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png","./resources/devatero_pohadek_001.jpg","./resources/devatero_pohadek_002.jpg","./resources/devatero_pohadek_003.jpg","./resources/devatero_pohadek_004.jpg","./resources/devatero_pohadek_005.jpg","./resources/devatero_pohadek_006.jpg","./resources/devatero_pohadek_007.jpg","./resources/devatero_pohadek_008.jpg","./resources/devatero_pohadek_009.jpg","./resources/devatero_pohadek_010.jpg","./resources/devatero_pohadek_011.jpg","./resources/devatero_pohadek_012.jpg","./resources/devatero_pohadek_013.jpg","./resources/devatero_pohadek_014.jpg","./resources/devatero_pohadek_015.jpg","./resources/devatero_pohadek_016.jpg","./resources/devatero_pohadek_017.jpg","./resources/devatero_pohadek_018.jpg","./resources/devatero_pohadek_019.jpg","./resources/devatero_pohadek_020.jpg","./resources/devatero_pohadek_021.jpg","./resources/devatero_pohadek_022.jpg","./resources/devatero_pohadek_023.jpg","./resources/devatero_pohadek_024.jpg","./resources/devatero_pohadek_025.jpg","./resources/devatero_pohadek_026.jpg","./resources/devatero_pohadek_027.jpg","./resources/devatero_pohadek_028.jpg","./resources/devatero_pohadek_029.jpg","./resources/devatero_pohadek_030.jpg","./resources/devatero_pohadek_031.jpg","./resources/devatero_pohadek_032.jpg","./resources/devatero_pohadek_033.jpg","./resources/devatero_pohadek_034.jpg","./resources/devatero_pohadek_035.jpg","./resources/devatero_pohadek_036.jpg","./resources/devatero_pohadek_037.jpg","./resources/devatero_pohadek_038.jpg","./resources/devatero_pohadek_039.jpg","./resources/devatero_pohadek_040.jpg","./resources/devatero_pohadek_041.jpg","./resources/devatero_pohadek_042.jpg","./resources/devatero_pohadek_043.jpg","./resources/devatero_pohadek_044.jpg","./resources/devatero_pohadek_045.jpg","./resources/devatero_pohadek_046.jpg","./resources/devatero_pohadek_047.jpg","./resources/devatero_pohadek_048.jpg","./resources/devatero_pohadek_049.jpg","./resources/devatero_pohadek_050.jpg","./resources/devatero_pohadek_051.jpg","./resources/devatero_pohadek_052.jpg","./resources/devatero_pohadek_053.jpg","./resources/devatero_pohadek_054.jpg","./resources/devatero_pohadek_055.jpg","./resources/devatero_pohadek_056.jpg","./resources/devatero_pohadek_057.jpg","./resources/image001.jpg","./resources/image002.jpg","./resources/image003.png","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
