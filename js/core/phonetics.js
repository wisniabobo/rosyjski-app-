/* Транскрипция: rosyjski (z akcentem ◌́) → wymowa zapisana polskimi literami.
   Uwzględnia: akanie/ikanie, miękkość, ubezdźwięcznienie i upodobnienia,
   nieme spółgłoski, -тся/-ться, -ого/-его, что, сч→щ, гк→хк, zlewanie przyimków. */
(function (global) {
  const ACC = '́';
  const VOWELS = 'аеёиоуыэюя';
  const IOT = 'еёюя';
  const HARD_ONLY = 'жшц';
  const SOFT_ONLY = 'чщй';
  const VOICED = { б: 'п', в: 'ф', г: 'к', д: 'т', ж: 'ш', з: 'с' };
  const VOICELESS = { п: 'б', ф: 'в', к: 'г', т: 'д', ш: 'ж', с: 'з' };
  const HARD_PL = { б: 'b', в: 'w', г: 'g', д: 'd', ж: 'ż', з: 'z', й: 'j', к: 'k', л: 'ł', м: 'm', н: 'n', п: 'p', р: 'r', с: 's', т: 't', ф: 'f', х: 'ch', ц: 'c', ч: 'cz', ш: 'sz', щ: 'śś' };
  // miękka spółgłoska przed samogłoską (bez „i” gdy samogłoską jest i)
  const SOFT_PRE = { л: 'l', н: 'ni', с: 'si', з: 'zi', т: 'ti', д: 'di', б: 'bi', в: 'wi', г: 'gi', к: 'ki', м: 'mi', п: 'pi', р: 'ri', ф: 'fi', х: 'chi', ч: 'cz', щ: 'śś', й: 'j' };
  const SOFT_PRE_I = { л: 'l', н: 'n', с: 's', з: 'z', т: 't', д: 'd', б: 'b', в: 'w', г: 'g', к: 'k', м: 'm', п: 'p', р: 'r', ф: 'f', х: 'ch', ч: 'cz', щ: 'śś', й: 'j' };
  // miękka spółgłoska bez samogłoski po niej
  const SOFT_END = { л: 'l', н: 'ń', с: 'ś', з: 'ź', т: 't’', д: 'd’', б: 'b’', в: 'w’', г: 'g’', к: 'k’', м: 'm’', п: 'p’', р: 'r’', ф: 'f’', х: 'ch’', ч: 'cz', щ: 'śś', й: 'j' };
  const SOFT_BEFORE_J = { л: 'l', н: 'ń', с: 'ś', з: 'ź', т: 't’', д: 'd’', ч: 'cz', щ: 'śś' };

  const CLITICS = new Set(['в', 'во', 'к', 'ко', 'с', 'со', 'у', 'о', 'об', 'обо', 'на', 'за', 'по', 'до', 'из', 'от', 'ото', 'без', 'под', 'над', 'про', 'при', 'для', 'не', 'ни', 'же', 'ли', 'бы', 'б', 'то', 'и', 'а', 'но', 'через', 'перед']);
  const JOIN_NEXT = new Set(['в', 'к', 'с']);
  const GO_KEEP = new Set(['много', 'немного', 'строго', 'дорого', 'убого', 'полого', 'отлого', 'нестрого', 'недорого']);
  const CHN_SHN = new Set(['конечно', 'скучно', 'скучный', 'скучная', 'скучное', 'скучные', 'нарочно', 'яичница', 'скворечник', 'прачечная', 'пустячный', 'горчичник', 'подсвечник', 'конечная']);
  const CHT_SHT = new Set(['что', 'чтобы', 'ничто', 'что-то', 'что-нибудь', 'кое-что', 'что-либо', 'зачто']);
  const EXC = { 'сегодня': 'сево́дня', 'сегодняшний': 'сево́дняшний', 'сегодняшняя': 'сево́дняшняя', 'сегодняшнее': 'сево́дняшнее', 'солнце': 'со́нце', 'сердце': 'се́рце', 'лестница': 'ле́сница', 'чувство': 'чу́ство', 'чувствовать': 'чу́ствовать', 'здравствуй': 'здра́ствуй', 'здравствуйте': 'здра́ствуйте', 'праздник': 'пра́зник', 'пожалуйста': 'пожа́лста', 'счастье': 'ща́стье', 'мужчина': 'мущи́на', 'бог': 'бох', 'лёгкий': 'лёхкий', 'мягкий': 'мя́хкий', 'легко': 'лехко́', 'легче': 'ле́хче', 'мягче': 'мя́хче', 'кафе': 'кафэ́', 'отель': 'отэ́ль', 'кофе': 'ко́фэ', 'компьютер': 'компью́тэр', 'интернет': 'интэрнэ́т', 'тест': 'тэст', 'модель': 'модэ́ль', 'шоссе': 'шоссэ́', 'кашне': 'кашнэ́', 'пюре': 'пюрэ́', 'купе': 'купэ́', 'темп': 'тэмп', 'теннис': 'тэ́ннис', 'энергия': 'энэ́ргия', 'бизнес': 'би́знэс', 'менеджер': 'мэ́нэджер', 'отели': 'отэ́ли', 'тире': 'тирэ́', 'резюме': 'резюмэ́' };

  const EXC_NOTE = { 'сегодня': 'г czytamy tu jak [w]', 'сегодняшний': 'г czytamy tu jak [w]', 'сегодняшняя': 'г czytamy tu jak [w]', 'сегодняшнее': 'г czytamy tu jak [w]', 'солнце': '„л” jest nieme', 'сердце': '„д” jest nieme', 'лестница': '„т” jest nieme', 'чувство': 'pierwsze „в” jest nieme', 'чувство': 'pierwsze „в” jest nieme', 'чувство': 'pierwsze „в” jest nieme', 'здравствуй': 'pierwsze „в” jest nieme', 'праздник': '„д” jest nieme', 'пожалуйста': 'w mowie „уй” zanika: [pażałsta]', 'счастье': 'сч czytamy [śś]', 'мужчина': 'жч czytamy [śś]', 'бог': 'г na końcu → [ch]', 'лёгкий': 'г przed к → [ch]', 'мягкий': 'г przed к → [ch]', 'легко': 'г przed к → [ch]', 'легче': 'г przed ч → [ch]', 'мягче': 'г przed ч → [ch]', 'чувствова': 'pierwsze „в” jest nieme' };
  const isVowel = ch => VOWELS.includes(ch);
  let NOTES = null;
  const note = m => { if (NOTES) NOTES.add(m); };
  const CLUSTER_NOTE = { 'вств': 'вств → [stw]: pierwsze „в” nieme', 'лнц': 'лнц → [nc]: „л” nieme', 'рдц': 'рдц → [rc]: „д” nieme', 'здн': 'здн → [zn]: „д” nieme', 'стн': 'стн → [sn]: „т” nieme', 'стл': 'стл → [sł]: „т” nieme', 'сч': 'сч → [śś] (jak щ)', 'зч': 'зч → [śś] (jak щ)', 'жч': 'жч → [śś] (jak щ)', 'гк': 'г przed к → [ch]', 'гч': 'г przed ч → [ch]', 'дц': 'дц → [c]', 'тц': 'тц → [c]', 'зж': 'зж → [żż]', 'сж': 'сж → [żż]' };

  // wejście: wyraz małymi literami z ewentualnym ◌́ → tablica {ch, st}
  function toTokens(word) {
    const out = [];
    for (const ch of word) {
      if (ch === ACC) { if (out.length) out[out.length - 1].st = true; continue; }
      out.push({ ch, st: false });
    }
    return out;
  }
  const tokStr = t => t.map(x => x.ch).join('');

  function replaceSeq(tokens, from, to, onlyEnd) {
    let s = tokStr(tokens), idx = onlyEnd ? (s.endsWith(from) ? s.length - from.length : -1) : s.indexOf(from);
    if (idx >= 0 && CLUSTER_NOTE[from]) note(CLUSTER_NOTE[from]);
    while (idx >= 0) {
      const old = tokens.slice(idx, idx + from.length);
      const oldV = old.filter(t => isVowel(t.ch));
      let vi = 0;
      const neu = [...to].map(ch => ({ ch, st: isVowel(ch) ? !!(oldV[vi++] || {}).st : false }));
      tokens.splice(idx, from.length, ...neu);
      if (onlyEnd) break;
      s = tokStr(tokens);
      idx = s.indexOf(from, idx + to.length);
    }
    return tokens;
  }

  function prepare(word, clitic) {
    const plain = word.replace(new RegExp(ACC, "g"), "");
    const tokens = toTokens(word);
    const s0 = plain.replace(/-/g, "");
    if (CHT_SHT.has(plain)) { replaceSeq(tokens, "чт", "шт"); note('что czytamy [szto]'); }
    if (CHN_SHN.has(plain)) { replaceSeq(tokens, "чн", "шн"); note('чн czytamy tu jak [szn]'); }
    // -ого / -его → -ово / -ево
    if (/(о|е)го$/.test(s0) && s0.length >= 3 && !GO_KEEP.has(s0)) {
      if (s0.endsWith("ого")) replaceSeq(tokens, "ого", "ово", true); else replaceSeq(tokens, "его", "ево", true);
      note('w końcówce -ого/-его litera г brzmi [w]');
    }
    if (s0.endsWith("ться")) { replaceSeq(tokens, "ться", "цца", true); note('-ться czytamy [ca]'); }
    else if (s0.endsWith("тся")) { replaceSeq(tokens, "тся", "цца", true); note('-тся czytamy [ca]'); }
    for (const [x, y] of [["вств", "ств"], ["лнц", "нц"], ["рдц", "рц"], ["здн", "зн"], ["стн", "сн"], ["стл", "сл"], ["сч", "щ"], ["зч", "щ"], ["жч", "щ"], ["гк", "хк"], ["гч", "хч"], ["зж", "жж"], ["сж", "жж"], ["дц", "цц"], ["тц", "цц"], ["-", ""]]) replaceSeq(tokens, x, y);
    const vowelCount = tokens.filter(t => isVowel(t.ch)).length;
    const hasStress = tokens.some(t => t.st || t.ch === 'ё');
    if (!hasStress && vowelCount === 1 && !clitic) tokens.forEach(t => { if (isVowel(t.ch)) t.st = true; });
    tokens.forEach(t => { if (t.ch === 'ё') t.st = true; });
    return { tokens, known: hasStress || vowelCount <= 1 };
  }

  // Główna funkcja: jeden wyraz (lub zlepek przyimka z wyrazem)
  function word2pl(word, opts = {}) {
    const lower = word.toLowerCase();
    const plain = lower.replace(new RegExp(ACC, 'g'), '');
    const clitic = opts.clitic ?? CLITICS.has(plain);
    if (EXC[plain]) note(/э/.test(EXC[plain]) ? 'słowo obce: е czytamy twardo [e]' : EXC_NOTE[plain.replace(/(те|вать)$/, '')] || 'wymowa wyjątkowa – zapamiętaj');
    const { tokens, known } = prepare(EXC[plain] || lower, clitic);
    const n = tokens.length;
    const stressIdx = tokens.findIndex(t => t.st);
    // 1) fonemy
    const ph = [];
    for (let i = 0; i < n; i++) {
      const { ch, st } = tokens[i];
      const prev = tokens[i - 1] ? tokens[i - 1].ch : null;
      const next = tokens[i + 1] ? tokens[i + 1].ch : null;
      if (ch === 'ь' || ch === 'ъ') { ph.push({ sep: true, soft: ch === 'ь' }); note(ch === 'ь' ? 'ь zmiękcza poprzednią spółgłoskę' : 'ъ oddziela: czytamy [j]'); continue; }
      if (isVowel(ch)) {
        const afterCons = prev && !isVowel(prev) && prev !== 'ь' && prev !== 'ъ';
        const iot = IOT.includes(ch) && !afterCons;
        const final = !clitic && (i === n - 1 || (i === n - 2 && tokens[n - 1].ch === 'й'));
        const pre = stressIdx < 0 || i < stressIdx;
        let v;
        const unst = known && !st;
        switch (ch) {
          case 'а': v = unst && (prev === 'ч' || prev === 'щ') && !final ? 'i' : 'a'; break;
          case 'о': v = unst ? 'a' : 'o'; if (unst && !clitic) note('akanie: о bez akcentu → [a]'); break;
          case 'у': v = 'u'; break;
          case 'ы': v = 'y'; break;
          case 'э': v = 'e'; break;
          case 'и': v = (prev && HARD_ONLY.includes(prev)) ? 'y' : 'i'; if (v === 'y') note(`и po ${prev} → [y]`); break;
          case 'ё': v = 'o'; note('ё jest zawsze akcentowane'); break;
          case 'ю': v = 'u'; break;
          case 'е':
            if (!unst) v = 'e';
            else if (prev && HARD_ONLY.includes(prev)) v = final ? 'e' : 'y';
            else v = final ? 'e' : 'i';
            if (v === 'i' || v === 'y') note('ikanie: е bez akcentu → [i]');
            break;
          case 'я':
            if (!unst) v = 'a';
            else v = final || !pre ? 'a' : 'i';
            if (unst && !final && !pre && !iot) v = 'i';
            if (v === 'i') note('ikanie: я bez akcentu → [i]');
            break;
        }
        ph.push({ v, st: known && st, iot: iot || (IOT.includes(ch) && ph.length && ph[ph.length - 1].sep), soft: IOT.includes(ch) || ch === 'и' });
        continue;
      }
      // spółgłoska
      let soft = false;
      if (SOFT_ONLY.includes(ch)) soft = true;
      else if (!HARD_ONLY.includes(ch) && next && (next === 'ь' || 'еёиюя'.includes(next))) soft = true;
      ph.push({ c: ch, soft });
    }
    // 2) upodobnienia (od końca)
    for (let i = ph.length - 1; i >= 0; i--) {
      const p = ph[i];
      if (!p.c) continue;
      let j = i + 1;
      while (j < ph.length && ph[j].sep) j++;
      const nx = ph[j];
      if (!nx) { if (VOICED[p.c]) { note(`${p.c} na końcu wyrazu → [${HARD_PL[VOICED[p.c]]}]`); p.c = VOICED[p.c]; } continue; }
      if (nx.c) {
        if (VOICELESS[nx.c] || 'хцчщ'.includes(nx.c)) { if (VOICED[p.c]) { note(`${p.c} przed ${nx.c} → [${HARD_PL[VOICED[p.c]]}]`); p.c = VOICED[p.c]; } }
        else if (VOICED[nx.c] && nx.c !== 'в') { if (VOICELESS[p.c]) { note(`${p.c} przed ${nx.c} → [${HARD_PL[VOICELESS[p.c]]}]`); p.c = VOICELESS[p.c]; } }
      }
    }
    // 3) podwojone spółgłoski
    for (let i = ph.length - 2; i >= 0; i--) {
      if (ph[i].c && ph[i + 1].c && ph[i].c === ph[i + 1].c) { ph[i + 1].soft = ph[i + 1].soft || ph[i].soft; ph.splice(i, 1); }
    }
    // 4) zapis polski
    const vowelsTotal = ph.filter(x => x.v).length;
    let out = '';
    for (let i = 0; i < ph.length; i++) {
      const p = ph[i];
      if (p.sep) continue;
      if (p.v) {
        let s = p.v;
        if (p.iot) s = 'j' + s;
        out += p.st && vowelsTotal > 1 ? s + ACC : s;
        continue;
      }
      let k = i + 1;
      const sepBetween = ph[k] && ph[k].sep;
      while (ph[k] && ph[k].sep) k++;
      const nx = ph[k];
      if (!p.soft || HARD_ONLY.includes(p.c)) { out += HARD_PL[p.c]; continue; }
      if (nx && nx.v && !sepBetween && !nx.iot) out += (nx.v === 'i' ? SOFT_PRE_I : SOFT_PRE)[p.c] || HARD_PL[p.c];
      else if (nx && nx.v && (sepBetween || nx.iot)) out += SOFT_BEFORE_J[p.c] || HARD_PL[p.c];
      else out += SOFT_END[p.c] || HARD_PL[p.c];
    }
    // „sie”/„nie” + „i” – porządki
    out = out.replace(/([^aeiouy])ii/g, '$1i');
    return out.normalize('NFC');
  }

  // Całe zdanie/fraza → transkrypcja
  const ABBR = { 'ВВП': 'wewepe', 'СМИ': 'smi', 'США': 'sszá', 'РФ': 'eréf', 'МГУ': 'emgeú', 'ЮНЕСКО': 'juniesko', 'ЮНЕ́СКО': 'juniésko', 'IT': 'ajtí' };
  function transcribe(text) {
    if (!text) return '';
    text = String(text).replace(/[А-ЯЁ\u0301]{2,}/g, m => ABBR[m] ? '\u0000' + ABBR[m] + '\u0001' : m.charAt(0) + m.slice(1).toLowerCase());
    const parts = text.split(/([А-Яа-яЁё́-]+)/);
    const out = [];
    for (let i = 0; i < parts.length; i++) {
      const w = parts[i];
      if (!/[А-Яа-яЁё]/.test(w)) { out.push(w); continue; }
      const low = w.toLowerCase().replace(/^-+|-+$/g, '');
      // zlewanie jednoliterowych przyimków z kolejnym wyrazem
      if (JOIN_NEXT.has(low) && parts[i + 1] === ' ' && parts[i + 2] && /[А-Яа-яЁё]/.test(parts[i + 2])) {
        const joined = low + parts[i + 2].toLowerCase();
        note(`przyimek ${low} czytamy razem z następnym słowem`);
        out.push(word2pl(joined, { clitic: false }));
        i += 2;
        continue;
      }
      out.push(word2pl(low));
    }
    return out.join('').replace(/[\u0000\u0001]/g, '').replace(/\s+/g, ' ').trim();
  }

  const stripStress = s => (s || '').replace(/́/g, '');

  // Zasady wymowy zastosowane w tekście (do wyjaśnień po odpowiedzi)
  function explain(text, max = 4) {
    NOTES = new Set();
    try { transcribe(text); } finally { var list = [...NOTES]; NOTES = null; }
    return list.slice(0, max);
  }

  global.Phon = { transcribe, word2pl, stripStress, explain };
  if (typeof module !== 'undefined') module.exports = global.Phon;
})(typeof window !== 'undefined' ? window : globalThis);
