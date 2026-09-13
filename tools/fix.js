// Użycie: node tools/fix.js plik.json  – [[plik, szukane, zamiana], ...] ; zamiana null = usuń linię
const fs = require('fs'), path = require('path');
const list = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const cache = {};
let miss = 0;
for (const [f, from, to] of list) {
  const p = path.join(__dirname, '..', f);
  cache[p] = cache[p] ?? fs.readFileSync(p, 'utf8');
  if (to === null) {
    const re = new RegExp('^' + from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '.*\\n', 'm');
    if (!re.test(cache[p])) { console.log('MISS', f, from); miss++; continue; }
    cache[p] = cache[p].replace(re, '');
  } else {
    if (!cache[p].includes(from)) { console.log('MISS', f, from); miss++; continue; }
    cache[p] = cache[p].split(from).join(to);
  }
}
for (const p in cache) fs.writeFileSync(p, cache[p]);
console.log('done, misses:', miss);
