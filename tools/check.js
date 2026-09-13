// QA: sprawdza akcenty, duplikaty i liczy słówka
global.window = global;
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '../js/data');
for (const f of fs.readdirSync(dir).sort()) if (f.endsWith('.js')) require(path.join(dir, f));
const CLITIC = new Set(["из-за","из-под","ни-ни","через","перед","между","около","обо","передо","ото","изо","нибудь","либо","таки","было","были","кого","чего","кому"]);
const V = /[аеёиоуыэюяАЕЁИОУЫЭЮЯ]/g, ACC = '́';
const strip = s => s.replace(/\u0301/g, "").toLowerCase();
function checkRu(text, where) {
  const issues = [];
  for (const tok of text.split(/[\s—–.,!?;:«»"()…\/]+/)) {
    if (!tok) continue;
    const t = tok.replace(/^-+|-+$/g,'');
    const vowels = (t.match(V) || []).length;
    const acc = t.split(ACC).length - 1;
    const yo = /ё/i.test(t);
    if (/[a-z]/i.test(t)) issues.push(`latin in "${t}"`);
    if (vowels >= 2 && acc === 0 && !yo && !CLITIC.has(t.toLowerCase())) issues.push(`no stress: ${t}`);
    if (acc > 1 && !t.includes('-')) issues.push(`multi stress: ${t}`);
    if (acc && yo && !t.includes('-')) issues.push(`stress+ё: ${t}`);
    if (/[^аеёиоуыэюяАЕЁИОУЫЭЮЯ]́/.test(t)) issues.push(`stress on consonant: ${t}`);
  }
  return issues.map(i => `${where}: ${i}`);
}
let problems = [], seen = new Map(), total = 0, perLevel = {};
for (const topic of RU.vocab) {
  const lines = topic.words.trim().split('\n');
  for (const line of lines) {
    const [ru, pl] = line.split('|');
    if (!pl) { problems.push(`${topic.id}: bad line "${line}"`); continue; }
    total++; perLevel[topic.level] = (perLevel[topic.level]||0) + 1;
    problems.push(...checkRu(ru, topic.id));
    const k = strip(ru);
    if (seen.has(k)) problems.push(`DUP "${ru}" in ${topic.id} & ${seen.get(k)}`); else seen.set(k, topic.id);
  }
}
const sections = [['phrases','items'],['texts',null]];
for (const p of RU.phrases || []) for (const line of p.items.trim().split('\n')) {
  const [ru, pl] = line.split('|'); if (!pl) problems.push(`${p.id}: bad line "${line}"`);
  problems.push(...checkRu(ru, p.id));
}
for (const g of RU.grammar || []) {
  const ms = (g.body.match(/\{\{([^}]+)\}\}/g) || []).map(s => s.slice(2,-2).split('|')[0]);
  const ex = (g.body.match(/\[\[([^\]]+)\]\]/g) || []).map(s => s.slice(2,-2).split('|')[0]);
  for (const m of [...ms, ...ex]) problems.push(...checkRu(m, g.id));
  for (const q of (g.quiz || '').trim().split('\n').filter(Boolean)) if (q.split('|').length < 2) problems.push(`${g.id}: bad quiz "${q}"`);
}
for (const t of RU.texts || []) problems.push(...checkRu(t.ru.replace(/\n/g,' '), t.id));
console.log(problems.join('\n'));
console.log(`\nWords: ${total} unique: ${seen.size}`, perLevel, `phrases sets: ${(RU.phrases||[]).length} (${(RU.phrases||[]).reduce((a,p)=>a+p.items.trim().split('\n').length,0)} sentences)`, `grammar: ${(RU.grammar||[]).length}`, `texts: ${(RU.texts||[]).length}`);
console.log(`problems: ${problems.length}`);
