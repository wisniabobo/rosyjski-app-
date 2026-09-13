/* Indeks treści kursu + plan 52 tygodni */
(function () {
  const C = {};
  C.LEVELS = [
    { id: 'A0', name: 'Start: alfabet i wymowa', short: 'A0', weeks: 2, color: '#4cc9f0', desc: 'Cyrylica, akcent, zasady czytania' },
    { id: 'A1', name: 'Poziom podstawowy', short: 'A1', weeks: 12, color: '#2ec4b6', desc: 'Przedstawiasz się, robisz zakupy, pytasz o drogę' },
    { id: 'A2', name: 'Poziom przedprogowy', short: 'A2', weeks: 12, color: '#ffb703', desc: 'Opowiadasz o przeszłości i planach, radzisz sobie w podróży' },
    { id: 'B1', name: 'Poziom progowy', short: 'B1', weeks: 13, color: '#fb8500', desc: 'Dyskutujesz, rozumiesz media, piszesz listy' },
    { id: 'B2', name: 'Poziom średnio zaawansowany', short: 'B2', weeks: 13, color: '#ff4d6d', desc: 'Swobodna rozmowa, teksty publicystyczne, niuanse stylu' }
  ];
  C.level = id => C.LEVELS.find(l => l.id === id);

  /* Słowa */
  C.words = []; C.wordById = {}; C.topics = []; C.topicById = {};
  for (const t of RU.vocab) {
    const topic = { ...t, ids: [] };
    U.lines(t.words).forEach((line, i) => {
      const [ru, pl, note] = line.split('|');
      const id = 'w:' + U.strip(ru).toLowerCase();
      const w = { id, ru: ru.trim(), pl: (pl || '').trim(), note: (note || '').trim(), topic: t.id, level: t.level, i };
      C.words.push(w); C.wordById[id] = w; topic.ids.push(id);
    });
    C.topics.push(topic); C.topicById[t.id] = topic;
  }

  /* Gramatyka */
  C.grammar = RU.grammar.map(g => ({
    ...g,
    questions: U.lines(g.quiz).map(line => {
      const [main, exp] = line.split('##');
      const parts = main.split('|').map(s => s.trim());
      return { q: parts[0], correct: parts[1], opts: parts.slice(1), exp: (exp || '').trim() };
    })
  }));
  C.grammarById = Object.fromEntries(C.grammar.map(g => [g.id, g]));

  /* Zdania */
  C.sentences = []; C.sentenceById = {};
  C.phraseSets = RU.phrases.map(p => {
    const items = U.lines(p.items).map(line => {
      const [ru, pl] = line.split('|');
      const s = { id: 's:' + U.norm(ru), ru: ru.trim(), pl: (pl || '').trim(), set: p.id, level: p.level };
      C.sentences.push(s); C.sentenceById[s.id] = s;
      return s;
    });
    return { ...p, list: items };
  });
  C.phraseById = Object.fromEntries(C.phraseSets.map(p => [p.id, p]));

  /* Czytanki */
  C.texts = RU.texts.map(t => ({
    ...t,
    paras: t.ru.trim().split(/\n\s*\n/).map(s => s.trim()),
    parasPl: t.pl.trim().split(/\n\s*\n/).map(s => s.trim()),
    gloss: U.lines(t.glossary).map(l => l.split('|')),
    questions: U.lines(t.quiz).map(line => { const p = line.split('|'); return { q: p[0], correct: p[1], opts: p.slice(1) }; })
  }));
  C.textById = Object.fromEntries(C.texts.map(t => [t.id, t]));

  /* Alfabet */
  C.letters = RU.alphabet.map(a => ({ up: a[0], low: a[1], name: a[2], sound: a[3], group: a[4], ex: a[5], exPl: a[6], tip: a[7] }));
  C.abcUnits = RU.alphabetGroups.map(g => ({ ...g, letters: C.letters.filter(l => l.group === g.id), reading: (RU.readingWords[g.id] || []).map(s => s.split('|')) }));

  /* Dystraktory */
  C.distractors = (word, n = 3, field = 'pl') => {
    const bad = new Set([U.normPl(word[field])]);
    const out = [];
    const pools = [C.topicById[word.topic].ids.map(id => C.wordById[id]), C.words.filter(w => w.level === word.level), C.words];
    for (const pool of pools) {
      for (const w of U.shuffle(pool)) {
        const v = U.normPl(w[field]);
        if (w.id === word.id || bad.has(v)) continue;
        // unikaj par ze wspólnym pierwszym znaczeniem
        if (field === 'pl' && v.split(/[;,]/)[0].trim() === U.normPl(word.pl).split(/[;,]/)[0].trim()) continue;
        bad.add(v); out.push(w);
        if (out.length >= n) return out;
      }
    }
    return out;
  };

  /* Jednostki kursu w kolejności nauki */
  const WEIGHT = { abc: 1, grammar: 1, vocab: 1, phrases: 0.6, text: 0.6, test: 0.5 };
  function interleave(lists) {
    const all = [];
    lists.forEach((list, k) => list.forEach((u, i) => all.push({ u, key: (i + 1) / (list.length + 1) + k * 0.0001 })));
    return all.sort((a, b) => a.key - b.key).map(x => x.u);
  }
  C.units = {};
  for (const L of C.LEVELS) {
    let list;
    const G = C.grammar.filter(g => g.level === L.id).map(g => ({ kind: 'grammar', id: g.id, title: g.title, sub: g.subtitle, icon: '📘', level: L.id, route: '#/grammar/' + g.id }));
    if (L.id === 'A0') {
      const A = C.abcUnits.map(a => ({ kind: 'abc', id: 'abc-' + a.id, title: 'Alfabet: ' + a.title, sub: a.letters.map(l => l.up).join(' '), icon: a.icon, level: 'A0', route: '#/alphabet/' + a.id }));
      list = [G[0], A[0], A[1], G[1], A[2], A[3], G[2], A[4], G[3]];
    } else {
      const V = C.topics.filter(t => t.level === L.id).map(t => ({ kind: 'vocab', id: t.id, title: t.title, sub: t.ids.length + ' słów', icon: t.icon, level: L.id, route: '#/topic/' + t.id }));
      const P = C.phraseSets.filter(p => p.level === L.id).map(p => ({ kind: 'phrases', id: p.id, title: p.title, sub: p.list.length + ' zdań', icon: p.icon, level: L.id, route: '#/phrases/' + p.id }));
      const T = C.texts.filter(t => t.level === L.id).map(t => ({ kind: 'text', id: t.id, title: t.title, sub: 'czytanka', icon: t.icon, level: L.id, route: '#/text/' + t.id }));
      list = interleave([G, V, P, T]);
    }
    list.push({ kind: 'test', id: 'test-' + L.id, title: 'Test końcowy ' + L.id, sub: 'sprawdź, czy możesz iść dalej', icon: '🏆', level: L.id, route: '#/test/' + L.id });
    C.units[L.id] = list;
  }
  C.allUnits = C.LEVELS.flatMap(L => C.units[L.id]);

  C.unitProgress = u => {
    const S = Store.state;
    switch (u.kind) {
      case 'abc': { const r = S.alphabet[u.id]; return r ? (r.done ? 1 : r.best / 100) : 0; }
      case 'grammar': { const r = S.grammar[u.id]; return r ? (r.done ? 1 : r.best / 100 * 0.9) : 0; }
      case 'phrases': { const set = C.phraseById[u.id]; const n = set.list.filter(s => S.cards[s.id]).length; const r = S.phrases[u.id]; return Math.max(n / set.list.length, r && r.done ? 1 : 0); }
      case 'text': { const r = S.texts[u.id]; return r ? (r.done ? 1 : r.best / 100 * 0.9) : 0; }
      case 'vocab': { const t = C.topicById[u.id]; const n = t.ids.filter(id => S.cards[id]).length; return n / t.ids.length; }
      case 'test': { const r = S.tests[u.level]; return r && r.passed ? 1 : 0; }
    }
    return 0;
  };
  C.unitDone = u => C.unitProgress(u) >= (u.kind === 'vocab' ? 0.9 : 0.999);

  /* Plan 52 tygodni */
  C.plan = [];
  let week = 1;
  for (const L of C.LEVELS) {
    const list = C.units[L.id];
    const weights = list.map(u => u.kind === 'vocab' ? Math.max(0.6, C.topicById[u.id].ids.length / 40) : WEIGHT[u.kind]);
    const total = weights.reduce((a, b) => a + b, 0);
    const per = total / L.weeks;
    let acc = 0, cur = [], wk = 0;
    list.forEach((u, i) => {
      cur.push(u); acc += weights[i];
      const remainingWeeks = L.weeks - wk - 1;
      const remainingUnits = list.length - i - 1;
      if ((acc >= per * (wk + 1) - 0.3 && remainingWeeks > 0 && remainingUnits >= remainingWeeks) || remainingUnits === remainingWeeks && remainingWeeks > 0) {
        C.plan.push({ week: week++, level: L.id, units: cur }); cur = []; wk++;
      }
    });
    if (cur.length) C.plan.push({ week: week++, level: L.id, units: cur });
    while (C.plan.filter(p => p.level === L.id).length < L.weeks) C.plan.push({ week: week++, level: L.id, units: [], review: true });
  }
  C.currentWeek = () => U.clamp(Math.floor(U.daysBetween(Store.state.planStart, new Date()) / 7) + 1, 1, 52);
  C.nextUnit = () => C.allUnits.find(u => !C.unitDone(u)) || null;

  C.stats = () => {
    const total = C.words.length;
    const byLevel = {};
    for (const L of C.LEVELS) {
      const ws = C.words.filter(w => w.level === L.id);
      byLevel[L.id] = { total: ws.length, learned: ws.filter(w => Store.state.cards[w.id]).length };
    }
    return { total, byLevel };
  };

  window.C = C;
})();
