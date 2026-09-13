/* Karta słowa (szczegóły, przykłady, wymowa) i wyszukiwanie form odmienionych */
(function () {
  const esc = U.esc;
  let index = null, examples = null;

  function buildIndex() {
    index = new Map();
    for (const w of C.words) {
      for (const part of U.strip(w.ru).split(/\s*\/\s*/)) {
        const all = U.norm(part).split(' ');
        const toks = all.filter(t => t.length >= 2);
        const key = U.norm(part);
        if (!index.has(key)) index.set(key, []);
        index.get(key).push(w);
        // pojedyncze słowa z fraz (np. „до́брый день” → „добрый”) – słabsze dopasowanie
        if (toks.length > 1) toks.filter(t => t.length >= 4).forEach(t => { const k = '~' + t; if (!index.has(k)) index.set(k, []); index.get(k).push(w); });
      }
    }
    examples = [];
    for (const s of C.sentences) examples.push({ ru: s.ru, pl: s.pl, src: '💬' });
    for (const g of RU.grammar) {
      const re = /\[\[(.+?)\|(.+?)\]\](?!\])/g; let m;
      while ((m = re.exec(g.body))) if (!/[→=]/.test(m[1]) && m[1].split(' ').length > 1) examples.push({ ru: m[1], pl: m[2].replace(/\s*[–-]\s*\[[^\]]*\]\s*$/, ''), src: '📘' });
    }
    for (const t of RU.texts) for (const p of t.ru.trim().split(/\n\s*\n/)) for (const s of (p.match(/[^.!?…]+[.!?…»]*/g) || [])) examples.push({ ru: s.trim(), pl: '', src: '📖' });
    examples.forEach(e => (e.tokens = U.norm(e.ru).split(' ')));
  }

  // formy nieregularne → hasło w słowniku
  const IRREGULAR = [
    [/^друз(ья|ей|ьям|ьями|ьях)$/, 'друг'], [/^люд(и|ей|ям|ьми|ях)$/, 'люди'], [/^дет(и|ей|ям|ьми|ях)$/, 'дети'], [/^ребенк/, 'ребенок'],
    [/^(шел|шла|шло|шли)$/, 'идти'], [/^(пошел|пошла|пошли|пойду|пойдешь|пойдет|пойдем|пойдете|пойдут)$/, 'пойти'],
    [/^(иду|идешь|идет|идем|идете|идут)$/, 'идти'], [/^(еду|едешь|едет|едем|едете|едут)$/, 'ехать'],
    [/^(хочу|хочешь|хочет|хотим|хотите|хотят)$/, 'хотеть'], [/^(могу|можешь|может|можем|можете|могут|мог|могла|могли)$/, 'мочь'],
    [/^(ем|ешь|ест|едим|едите|едят|ел|ела|ели)$/, 'есть'], [/^(пью|пьешь|пьет|пьем|пьете|пьют)$/, 'пить'],
    [/^(живу|живешь|живет|живем|живете|живут)$/, 'жить'], [/^(лучше|лучший)$/, 'хороший'], [/^хуже$/, 'плохой'],
    [/^(больше|больший)$/, 'большой'], [/^меньше$/, 'маленький'], [/^(меня|мне|мной)$/, 'я'], [/^(тебя|тебе|тобой)$/, 'ты'],
    [/^(его|него|ему|нему|им|ним|нем)$/, 'он'], [/^(ее|нее|ей|ней)$/, 'она'], [/^(нас|нам|нами)$/, 'мы'], [/^(вас|вам|вами)$/, 'вы'],
    [/^(их|них|ими|ними)$/, 'они'], [/^(сестры|сестер|сестрам)$/, 'сестра'], [/^(матери|матерью)$/, 'мать'], [/^(дочери|дочерью)$/, 'дочь'],
    [/^(отца|отцу|отцом|отце)$/, 'отец'], [/^(лет)$/, 'год'], [/^(года|году|годом|годы|годах)$/, 'год'], [/^(дня|дню|днем|дни|дней)$/, 'день'],
    [/^(времени|временем)$/, 'время'], [/^(имени|именем|имена)$/, 'имя'], [/^(глаза|глаз|глазами)$/, 'глаз'], [/^(уши|ушей|ушами)$/, 'ухо'], [/^(был|была|было|были|буду|будешь|будет|будем|будете|будут|будь)$/, 'быть'], [/^(поеду|поедешь|поедет|поедем|поедете|поедут|поехал|поехала|поехали)$/, 'поехать'], [/^(приду|придешь|придет|придем|придете|придут|пришел|пришла|пришли)$/, 'прийти'], [/^(эта|это|эти|этих|этим|этими|этой|этом|этому|эту|этого)$/, 'этот'], [/^(та|то|те|тех|тем|теми|той|том|тому|ту|того)$/, 'тот'], [/^(моя|мое|мои|моих|моим|моими|моей|моем|моему|мою|моего)$/, 'мой'], [/^(всех|всем|всеми|всей|всего|всему|всю)$/, 'весь'], [/^(возьму|возьмешь|возьмет|возьмем|возьмете|возьмут|взял|взяла|взяли)$/, 'взять'], [/^(дам|дашь|даст|дадим|дадите|дадут|дал|дала|дали)$/, 'дать']
  ];

  const ADJ = new Set("ый ий ой ая яя ое ее ые ие ого его ому ему ым им ую юю ых их ыми ими".split(" "));
  const VERB = new Set("ть ти ться тся ся сь ю у ешь ишь ет ит ем им ете ите ут ют ат ят юсь усь ешься ишься ется ится емся имся етесь итесь утся ются атся ятся л ла ло ли лся лась лось лись й йте ите йся йтесь ись я в вши вшись ясь ась ющий ющая ющее ющие ющего ющим ющих ущий ущая ущие ащий ащая ащие ящий ящая ящие вший вшая вшие вшего вшим вших нный нная нные нного енный енная енные тый тая тые н на но ны ен ена ено ены".split(" "));
  const NOUN = new Set(["", ..."а я о е и ы у ю ь й ом ем ой ей ою ею ам ям ах ях ами ями ов ев ью ия ие ии ию ием ией иям иях иями ья ье ьи ьев ьям ьями ьях".split(" ")]);
  const ENDINGS = new Set([...ADJ, ...VERB, ...NOUN, "ее", "ей", "о", "е"]);
  const LEMMA = new Set(["", ..."а я о е ь й и ы ый ий ой ть ти чь ться тись ие ия ье ья мя".split(" ")]);

  const isLemma = ks => LEMMA.has(ks) || /^[аяеиоуы]?(ть|ться|ти|тись)$/.test(ks) || /^(овать|оваться|евать|нуть|нуться)$/.test(ks);

  const stemOf = n => {
    if (n.length <= 3) return n;
    let s = n.replace(/(ться|тся|ть|ти|чь)$/, '');
    if (s === n) s = n.replace(/[аеёиоуыэюяйь]+$/, '');
    return s.length >= 3 ? s : n.slice(0, 3);
  };

  const WordUI = {
    // Znajdź słowo słownikowe dla formy z tekstu (np. „кни́гу” → кни́га)
    lookup(form) {
      if (!index) buildIndex();
      const n = U.norm(form);
      if (!n) return [];
      if (index.has(n)) return index.get(n);
      if (n.length < 2) return [];
      const irr = IRREGULAR.find(([re]) => re.test(n));
      if (irr && index.has(irr[1])) return index.get(irr[1]);
      // czasowniki na -овать: рису́ю → рисова́ть, жа́луются → жа́ловаться
      for (const [re, rep] of [[/[уы]?(ю|ешь|ет|ем|ете|ют|й|йте)$/, "овать"], [/[уы]?(юсь|ешься|ется|емся|етесь|ются|йся|йтесь)$/, "оваться"], [/(ишь|ит|им|ите|ат|ят|и|ил|ила|ило|или)$/, "ить"], [/(ишься|ится|имся|итесь|атся|ятся|юсь|усь|ись|ился|илась|ились)$/, "иться"], [/(ишь|ит|им|ите|ат|ят|ел|ела|ели)$/, "еть"], [/(ишь|ит|им|ите|ат|ят)$/, "ать"]]) {
        const cand = n.replace(re, rep);
        if (cand !== n && index.has(cand)) return index.get(cand);
      }
      const found = [];
      // wymiany spółgłosek w 1. osobie: люблю́ → люби́ть, пишу́ → писа́ть, хожу́ → ходи́ть
      const variants = [n];
      if (/[бпвмф]лю$/.test(n)) variants.push(n.slice(0, -2) + "ю");
      if (/жу$/.test(n)) variants.push(n.slice(0, -2) + "ду", n.slice(0, -2) + "зу");
      if (/чу$/.test(n)) variants.push(n.slice(0, -2) + "ту");
      if (/шу$/.test(n)) variants.push(n.slice(0, -2) + "су");
      if (/щу$/.test(n)) variants.push(n.slice(0, -2) + "сту");
      for (const v of variants) for (const [k, ws] of index) {
        const n = v;
        if (k[0] === "~" || k.includes(" ")) continue;
        let p = 0; const max = Math.min(k.length, n.length);
        while (p < max && k[p] === n[p]) p++;
        if (p < 3 || p < n.length - 6) continue;
        const fs = n.slice(p), ks = k.slice(p);
        if (!ENDINGS.has(fs) || !isLemma(ks)) continue;
        let score = p * 10 - ks.length - fs.length;
        if (ADJ.has(fs) && /^(ый|ий|ой)$/.test(ks)) score += 6;
        if (VERB.has(fs) && /(ть|ти|чь|ться|тись)$/.test(ks)) score += 6;
        found.push(...ws.map(w => ({ w, score })));
      }
      // „не…” – przeczenie w słowie: небольша́я → большо́й
      if (!found.length && n.startsWith("не") && n.length > 5) return WordUI.lookup(n.slice(2));
      if (!found.length && n.length >= 5 && index.has("~" + n)) return index.get("~" + n);
      return [...new Map(found.sort((x, y) => y.score - x.score).map(x => [x.w.id, x.w])).values()].slice(0, 3);
    },

    examplesFor(w, max = 5) {
      if (!examples) buildIndex();
      const heads = U.strip(w.ru).split(/\s*\/\s*/).map(U.norm);
      const out = [];
      for (const head of heads) {
        const words = head.split(' ');
        if (words.length > 1) { for (const e of examples) if (U.norm(e.ru).includes(head)) out.push(e); continue; }
        const stem = stemOf(head);
        for (const e of examples) if (e.tokens.some(t => t === head || (stem.length >= 3 && t.startsWith(stem) && t.length - stem.length <= 4))) out.push(e);
      }
      return [...new Map(out.map(e => [e.ru, e])).values()].sort((a, b) => a.ru.length - b.ru.length).slice(0, max);
    },

    open(id) {
      const w = C.wordById[id]; if (!w) return;
      const c = Store.card(id);
      const topic = C.topicById[w.topic];
      const status = !c ? 'Nowe – jeszcze się go nie uczysz' : c.s === 'review' && c.ivl >= 21 ? 'Opanowane 🏅' : c.s === 'review' ? 'W powtórkach' : 'W nauce';
      const next = c ? (c.due <= Date.now() ? 'teraz' : new Date(c.due).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })) : '';
      const exs = WordUI.examplesFor(w);
      const el = document.createElement('div');
      el.className = 'modal show';
      el.innerHTML = `<div class="modal-card word-card">
        <button class="ic-btn close" data-x aria-label="Zamknij">${U.icon('close')}</button>
        <div class="wc-top">${App.levelChip(w.level)} <a href="#/topic/${w.topic}" class="small">${topic.icon} ${esc(topic.title)}</a></div>
        <div class="wc-ru" data-say="${esc(U.strip(w.ru.split(' / ')[0]))}">${esc(App.stressView(w.ru))}</div>
        <div class="rv-tr big">[${App.trHTML(w.ru)}]</div>
        ${Ex.rulesHTML(w.ru)}
        <div class="wc-pl">${esc(w.pl)}</div>
        ${w.note ? `<div class="rv-note">ℹ️ ${esc(w.note)}</div>` : ''}
        <div class="wc-btns">
          <button class="btn" data-a="say">${U.icon('vol')} Posłuchaj</button>
          <button class="btn" data-a="slow">🐢 Wolno</button>
          ${Speech.supported ? `<button class="btn" data-a="speak">${U.icon('mic')} Powiedz</button>` : ''}
          <button class="btn ${Store.state.fav[id] ? 'on-fav' : ''}" data-a="fav">${U.icon('star')}</button>
        </div>
        <div class="wc-speak" hidden></div>
        <div class="wc-status small"><b>${status}</b>${c ? ` · następna powtórka: ${next} · ✓ ${c.ok || 0} / ✗ ${c.bad || 0}` : ''}</div>
        ${!c ? `<button class="btn primary" data-a="learn">➕ Dodaj do nauki</button>` : ''}
        ${exs.length ? `<h4>Przykłady</h4>${exs.map(e => `<div class="ex compact" data-say="${esc(U.strip(e.ru))}"><button class="ic-btn spk">${U.icon('vol')}</button><div><div class="ex-ru">${esc(App.stressView(e.ru))} <span class="muted small">${e.src}</span></div>${e.pl ? `<div class="ex-pl">${esc(e.pl)}</div>` : ''}</div></div>`).join('')}` : ''}
      </div>`;
      document.body.appendChild(el);
      const close = () => { Speech.stop(); TTS.stop(); el.remove(); document.removeEventListener('keydown', onKey); };
      const onKey = e => { if (e.key === 'Escape') close(); };
      document.addEventListener('keydown', onKey);
      el.onclick = async e => {
        if (e.target === el || e.target.closest('[data-x]') || e.target.closest('a[href]')) return close();
        const a = e.target.closest('[data-a]');
        const say = U.strip(w.ru.split(' / ')[0]);
        if (!a) { const s = e.target.closest('[data-say]'); if (s) TTS.speak(s.dataset.say); return; }
        if (a.dataset.a === 'say') TTS.speak(say);
        if (a.dataset.a === 'slow') TTS.speak(say, { slow: true });
        if (a.dataset.a === 'fav') a.classList.toggle('on-fav', Store.toggleFav(id));
        if (a.dataset.a === 'learn') { Store.learnFinish(id, 1); a.outerHTML = '<div class="pill ok">✓ Dodano – pojawi się w powtórkach</div>'; }
        if (a.dataset.a === 'speak') WordUI.speakCheck(say, U.$('.wc-speak', el), a);
      };
      TTS.speak(U.strip(w.ru.split(' / ')[0]));
    },

    // Mini-ćwiczenie wymowy w dowolnym miejscu
    async speakCheck(target, box, btn) {
      box.hidden = false;
      box.innerHTML = `<div class="mic-live">🎙️ Słucham… <span class="interim"></span></div>`;
      btn && btn.classList.add('listening');
      const r = await Speech.listen({ onInterim: t => { const i = U.$('.interim', box); if (i) i.textContent = t; } });
      btn && btn.classList.remove('listening');
      if (!r.alts.length) { box.innerHTML = `<div class="rv-note">⚠️ ${esc(Speech.errorText(r.error || 'no-speech'))}</div>`; return; }
      const cmp = Speech.compare(r.alts, target);
      const pct = Math.round(cmp.score * 100);
      box.innerHTML = `<div class="speak-res ${pct >= 80 ? 'ok' : pct >= 50 ? 'mid' : 'bad'}">
        <b>${pct >= 80 ? '✅ Świetna wymowa!' : pct >= 50 ? '🙂 Prawie – posłuchaj i powtórz' : '🔁 Spróbuj jeszcze raz'}</b> <span>${pct}%</span>
        <div class="small">Usłyszałem: „${esc(cmp.heard)}”</div>
        <div class="diff">${cmp.words.map(x => `<span class="${x.ok ? 'dok' : 'dbad'}">${esc(x.w)}</span>`).join(' ')}</div></div>`;
      if (pct >= 80) FX.ok(); else FX.bad();
      if (pct < 80) setTimeout(() => TTS.speak(target), 500);
    },

    // Dymek słowa w czytance
    popup(form, sentence, anchor) {
      U.$$('.lookup').forEach(x => x.remove());
      const hits = WordUI.lookup(form);
      const el = document.createElement('div');
      el.className = 'lookup';
      el.innerHTML = `<button class="ic-btn close small" data-x>${U.icon('close')}</button>
        <div class="lk-form">${esc(form)} <span class="rv-tr">[${App.trHTML(form)}]</span></div>
        ${hits.length ? hits.map(w => `<div class="lk-hit" data-word="${esc(w.id)}"><b>${esc(App.stressView(w.ru))}</b> – ${esc(w.pl)} <span class="muted small">›</span></div>`).join('')
          : '<div class="muted small">Brak w słowniku kursu (może to nazwa własna lub rzadka forma).</div>'}
        <div class="lk-btns"><button class="btn small" data-a="w">${U.icon('vol')} Słowo</button><button class="btn small" data-a="s">${U.icon('vol')} Zdanie</button>
        ${hits[0] && Store.isNew(hits[0].id) ? `<button class="btn small" data-a="add">➕ Do nauki</button>` : ''}</div>`;
      document.body.appendChild(el);
      const r = anchor.getBoundingClientRect();
      const top = r.bottom + 8 + el.offsetHeight > innerHeight ? r.top - el.offsetHeight - 8 : r.bottom + 8;
      el.style.top = Math.max(8, top) + 'px';
      el.style.left = U.clamp(r.left + r.width / 2 - el.offsetWidth / 2, 8, innerWidth - el.offsetWidth - 8) + 'px';
      TTS.speak(form);
      el.onclick = e => {
        e.stopPropagation();
        if (e.target.closest('[data-x]')) return el.remove();
        const h = e.target.closest('[data-word]'); if (h) { el.remove(); return WordUI.open(h.dataset.word); }
        const a = e.target.closest('[data-a]'); if (!a) return;
        if (a.dataset.a === 'w') TTS.speak(form);
        if (a.dataset.a === 's') TTS.speak(sentence);
        if (a.dataset.a === 'add') { Store.learnFinish(hits[0].id, 1); a.replaceWith(Object.assign(document.createElement('span'), { className: 'pill ok', textContent: '✓ dodano' })); }
      };
      setTimeout(() => document.addEventListener('pointerdown', function h(ev) { if (!el.contains(ev.target)) { el.remove(); document.removeEventListener('pointerdown', h); } }), 0);
    }
  };
  window.WordUI = WordUI;
})();
