/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-e6e4252';

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
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./devatero_pohadek_002.html","./devatero_pohadek_003.html","./devatero_pohadek_005.html","./devatero_pohadek_006.html","./devatero_pohadek_007.html","./devatero_pohadek_008.html","./devatero_pohadek_009.html","./devatero_pohadek_010.html","./devatero_pohadek_011.html","./devatero_pohadek_012.html","./devatero_pohadek_013.html","./devatero_pohadek_014.html","./devatero_pohadek_015.html","./devatero_pohadek_016.html","./devatero_pohadek_017.html","./devatero_pohadek_018.html","./devatero_pohadek_019.html","./devatero_pohadek_020.html","./devatero_pohadek_021.html","./devatero_pohadek_022.html","./devatero_pohadek_023.html","./devatero_pohadek_024.html","./devatero_pohadek_025.html","./devatero_pohadek_026.html","./devatero_pohadek_027.html","./devatero_pohadek_028.html","./devatero_pohadek_029.html","./devatero_pohadek_030.html","./devatero_pohadek_031.html","./devatero_pohadek_032.html","./devatero_pohadek_033.html","./devatero_pohadek_034.html","./devatero_pohadek_035.html","./devatero_pohadek_036.html","./devatero_pohadek_037.html","./devatero_pohadek_038.html","./devatero_pohadek_039.html","./devatero_pohadek_040.html","./devatero_pohadek_041.html","./devatero_pohadek_042.html","./devatero_pohadek_043.html","./devatero_pohadek_044.html","./devatero_pohadek_045.html","./devatero_pohadek_046.html","./devatero_pohadek_047.html","./devatero_pohadek_048.html","./devatero_pohadek_049.html","./devatero_pohadek_050.html","./devatero_pohadek_051.html","./devatero_pohadek_052.html","./devatero_pohadek_053.html","./devatero_pohadek_054.html","./devatero_pohadek_055.html","./devatero_pohadek_056.html","./devatero_pohadek_057.html","./devatero_pohadek_058.html","./devatero_pohadek_059.html","./devatero_pohadek_060.html","./devatero_pohadek_061.html","./devatero_pohadek_062.html","./devatero_pohadek_063.html","./devatero_pohadek_064.html","./devatero_pohadek_065.html","./devatero_pohadek_066.html","./devatero_pohadek_067.html","./devatero_pohadek_068.html","./devatero_pohadek_069.html","./devatero_pohadek_070.html","./devatero_pohadek_071.html","./devatero_pohadek_072.html","./devatero_pohadek_073.html","./devatero_pohadek_074.html","./devatero_pohadek_075.html","./devatero_pohadek_076.html","./devatero_pohadek_077.html","./devatero_pohadek_078.html","./devatero_pohadek_079.html","./devatero_pohadek_080.html","./devatero_pohadek_081.html","./devatero_pohadek_082.html","./devatero_pohadek_083.html","./devatero_pohadek_084.html","./devatero_pohadek_085.html","./devatero_pohadek_086.html","./devatero_pohadek_087.html","./devatero_pohadek_088.html","./devatero_pohadek_089.html","./devatero_pohadek_090.html","./devatero_pohadek_091.html","./devatero_pohadek_092.html","./devatero_pohadek_093.html","./devatero_pohadek_094.html","./devatero_pohadek_095.html","./devatero_pohadek_096.html","./devatero_pohadek_097.html","./devatero_pohadek_098.html","./devatero_pohadek_099.html","./devatero_pohadek_100.html","./devatero_pohadek_101.html","./devatero_pohadek_102.html","./devatero_pohadek_103.html","./devatero_pohadek_104.html","./devatero_pohadek_105.html","./devatero_pohadek_106.html","./devatero_pohadek_107.html","./devatero_pohadek_108.html","./devatero_pohadek_109.html","./devatero_pohadek_110.html","./devatero_pohadek_111.html","./devatero_pohadek_112.html","./devatero_pohadek_113.html","./devatero_pohadek_114.html","./devatero_pohadek_115.html","./devatero_pohadek_116.html","./devatero_pohadek_117.html","./devatero_pohadek_118.html","./devatero_pohadek_119.html","./devatero_pohadek_120.html","./devatero_pohadek_121.html","./devatero_pohadek_122.html","./devatero_pohadek_123.html","./devatero_pohadek_124.html","./devatero_pohadek_125.html","./devatero_pohadek_126.html","./devatero_pohadek_127.html","./devatero_pohadek_128.html","./devatero_pohadek_129.html","./devatero_pohadek_130.html","./devatero_pohadek_131.html","./devatero_pohadek_132.html","./devatero_pohadek_133.html","./devatero_pohadek_134.html","./devatero_pohadek_135.html","./devatero_pohadek_136.html","./devatero_pohadek_137.html","./devatero_pohadek_138.html","./devatero_pohadek_139.html","./devatero_pohadek_140.html","./devatero_pohadek_141.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/devatero_pohadek_001.jpg","./resources/devatero_pohadek_002.jpg","./resources/devatero_pohadek_003.jpg","./resources/devatero_pohadek_004.jpg","./resources/devatero_pohadek_005.jpg","./resources/devatero_pohadek_006.jpg","./resources/devatero_pohadek_007.jpg","./resources/devatero_pohadek_008.jpg","./resources/devatero_pohadek_009.jpg","./resources/devatero_pohadek_010.jpg","./resources/devatero_pohadek_011.jpg","./resources/devatero_pohadek_012.jpg","./resources/devatero_pohadek_013.jpg","./resources/devatero_pohadek_014.jpg","./resources/devatero_pohadek_015.jpg","./resources/devatero_pohadek_016.jpg","./resources/devatero_pohadek_017.jpg","./resources/devatero_pohadek_018.jpg","./resources/devatero_pohadek_019.jpg","./resources/devatero_pohadek_020.jpg","./resources/devatero_pohadek_021.jpg","./resources/devatero_pohadek_022.jpg","./resources/devatero_pohadek_023.jpg","./resources/devatero_pohadek_024.jpg","./resources/devatero_pohadek_025.jpg","./resources/devatero_pohadek_026.jpg","./resources/devatero_pohadek_027.jpg","./resources/devatero_pohadek_028.jpg","./resources/devatero_pohadek_029.jpg","./resources/devatero_pohadek_030.jpg","./resources/devatero_pohadek_031.jpg","./resources/devatero_pohadek_032.jpg","./resources/devatero_pohadek_033.jpg","./resources/devatero_pohadek_034.jpg","./resources/devatero_pohadek_035.jpg","./resources/devatero_pohadek_036.jpg","./resources/devatero_pohadek_037.jpg","./resources/devatero_pohadek_038.jpg","./resources/devatero_pohadek_039.jpg","./resources/devatero_pohadek_040.jpg","./resources/devatero_pohadek_041.jpg","./resources/devatero_pohadek_042.jpg","./resources/devatero_pohadek_043.jpg","./resources/devatero_pohadek_044.jpg","./resources/devatero_pohadek_045.jpg","./resources/devatero_pohadek_046.jpg","./resources/devatero_pohadek_047.jpg","./resources/devatero_pohadek_048.jpg","./resources/devatero_pohadek_049.jpg","./resources/devatero_pohadek_050.jpg","./resources/devatero_pohadek_051.jpg","./resources/devatero_pohadek_052.jpg","./resources/devatero_pohadek_053.jpg","./resources/devatero_pohadek_054.jpg","./resources/devatero_pohadek_055.jpg","./resources/devatero_pohadek_056.jpg","./resources/devatero_pohadek_057.jpg","./resources/image001.jpg","./resources/image002.jpg","./resources/image003.png","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
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
