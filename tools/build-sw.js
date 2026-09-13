// Generuje sw.js z listą plików i wersją zależną od ich zawartości
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const root = path.join(__dirname, '..');
const walk = d => fs.readdirSync(path.join(root, d)).flatMap(f => { const p = path.join(d, f); return fs.statSync(path.join(root, p)).isDirectory() ? walk(p) : [p]; });
const files = ['index.html', 'manifest.webmanifest', ...walk('css'), ...walk('js'), ...walk('icons')].map(f => f.split(path.sep).join('/'));
const hash = crypto.createHash('sha1'); files.forEach(f => hash.update(fs.readFileSync(path.join(root, f))));
const version = hash.digest('hex').slice(0, 10);
const sw = `/* Service worker – generowany przez tools/build-sw.js */
const CACHE = 'govori-${version}';
const ASSETS = ${JSON.stringify(['./', ...files], null, 2)};
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
`;
fs.writeFileSync(path.join(root, 'sw.js'), sw);
console.log('sw.js', version, files.length, 'files');
