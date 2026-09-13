/* Service worker – generowany przez tools/build-sw.js */
const CACHE = 'govori-c134f75759';
const ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/app.css",
  "js/app.js",
  "js/core/content.js",
  "js/core/fx.js",
  "js/core/phonetics.js",
  "js/core/speech.js",
  "js/core/store.js",
  "js/core/tts.js",
  "js/core/util.js",
  "js/data/alphabet.js",
  "js/data/grammar_a1.js",
  "js/data/grammar_a2.js",
  "js/data/grammar_b1.js",
  "js/data/grammar_b2.js",
  "js/data/phrases_a.js",
  "js/data/phrases_b.js",
  "js/data/texts.js",
  "js/data/vocab_a1.js",
  "js/data/vocab_a2.js",
  "js/data/vocab_b1.js",
  "js/data/vocab_b2.js",
  "js/ui/exercise.js",
  "js/ui/keyboard.js",
  "js/ui/word.js",
  "js/views/alphabet.js",
  "js/views/course.js",
  "js/views/grammar.js",
  "js/views/home.js",
  "js/views/misc.js",
  "js/views/reading.js",
  "js/views/vocab.js",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/icon.svg"
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  // sieć najpierw (świeże pliki), a bez internetu – kopia z pamięci podręcznej
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html'))));
});
