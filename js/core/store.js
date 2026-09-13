/* Stan aplikacji: postępy, SRS (powtórki rozłożone w czasie), XP, seria dni, osiągnięcia */
(function () {
  const KEY = 'govori.v1';
  const MIN = 60e3, DAY = 864e5;
  const DEFAULTS = {
    theme: 'auto', voice: '', rate: 0.95, autoSpeak: true, showTranscr: true, showStress: true,
    sessionSize: 10, dailyGoal: 200, translit: true, keyboard: true, speakTasks: true, sfx: true, haptics: true, name: ''
  };

  let S;
  function fresh() {
    return { v: 1, created: Date.now(), settings: { ...DEFAULTS }, cards: {}, grammar: {}, phrases: {}, texts: {}, alphabet: {}, tests: {}, days: {}, streak: { count: 0, best: 0, last: null }, xpTotal: 0, achievements: {}, fav: {}, planStart: U.dayKey(), onboarded: false };
  }
  function load() {
    try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) { S = null; }
    if (!S || S.v !== 1) S = fresh();
    S.settings = { ...DEFAULTS, ...S.settings };
    for (const k of ['cards', 'grammar', 'phrases', 'texts', 'alphabet', 'tests', 'days', 'achievements', 'fav']) S[k] = S[k] || {};
  }
  let saveT;
  function save(now) {
    clearTimeout(saveT);
    const w = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { console.warn('save failed', e); } };
    if (now) w(); else saveT = setTimeout(w, 250);
  }
  load();
  window.addEventListener('pagehide', () => save(true));
  document.addEventListener('visibilitychange', () => { if (document.hidden) save(true); });

  function today() {
    const k = U.dayKey();
    return S.days[k] || (S.days[k] = { xp: 0, min: 0, learned: 0, reviews: 0, correct: 0, total: 0 });
  }

  const Store = {
    get state() { return S; },
    save,
    settings: () => S.settings,
    set(key, val) { S.settings[key] = val; save(); document.dispatchEvent(new CustomEvent('settings', { detail: key })); },
    today,

    /* ---------- SRS ---------- */
    card: id => S.cards[id] || null,
    isNew: id => !S.cards[id],
    grade(id, q) {
      const now = Date.now();
      let c = S.cards[id];
      const firstTime = !c;
      if (!c) c = S.cards[id] = { s: 'learn', step: 0, ease: 2.5, ivl: 0, reps: 0, lapses: 0, due: now, ok: 0, bad: 0 };
      c.reps++; c.last = now;
      if (q >= 3) c.ok++; else c.bad++;
      const steps = c.s === 'relearn' ? [10] : [1, 10];
      if (c.s === 'learn' || c.s === 'relearn') {
        if (q === 1) { c.step = 0; c.due = now + steps[0] * MIN; }
        else if (q === 2) { c.due = now + steps[Math.min(c.step, steps.length - 1)] * 1.5 * MIN; }
        else if (q === 3) {
          c.step++;
          if (c.step >= steps.length) { c.ivl = c.s === 'relearn' ? Math.max(1, c.ivl) : 1; c.s = 'review'; c.due = now + c.ivl * DAY - 4 * 3600e3; }
          else c.due = now + steps[c.step] * MIN;
        } else { c.ivl = c.s === 'relearn' ? Math.max(2, c.ivl) : 3; c.s = 'review'; c.due = now + c.ivl * DAY - 4 * 3600e3; }
      } else {
        if (q === 1) { c.lapses++; c.ease = Math.max(1.3, c.ease - 0.2); c.ivl = Math.max(1, Math.round(c.ivl * 0.35)); c.s = 'relearn'; c.step = 0; c.due = now + 10 * MIN; }
        else {
          if (q === 2) { c.ease = Math.max(1.3, c.ease - 0.15); c.ivl = Math.max(c.ivl + 1, Math.round(c.ivl * 1.2)); }
          if (q === 3) c.ivl = Math.max(c.ivl + 1, Math.round(c.ivl * c.ease));
          if (q === 4) { c.ease += 0.15; c.ivl = Math.max(c.ivl + 2, Math.round(c.ivl * c.ease * 1.3)); }
          if (c.ivl > 4) c.ivl = Math.round(c.ivl * (0.95 + Math.random() * 0.1));
          c.ivl = Math.min(c.ivl, 365);
          c.due = now + c.ivl * DAY - 4 * 3600e3;
        }
      }
      const d = today();
      if (firstTime) d.learned++; else d.reviews++;
      save();
      return c;
    },
    // koniec nauki nowego słowa w sesji
    learnFinish(id, mistakes) {
      const now = Date.now();
      const existed = !!S.cards[id];
      const c = S.cards[id] || (S.cards[id] = { ease: 2.5, reps: 0, lapses: 0, ok: 0, bad: 0 });
      c.reps = (c.reps || 0) + 1; c.last = now;
      if (!mistakes) { c.s = 'review'; c.ivl = 1; c.step = 0; c.due = now + 20 * 3600e3; c.ok++; }
      else { c.s = 'learn'; c.step = 1; c.ivl = 0; c.due = now + 10 * MIN; c.bad++; c.ease = Math.max(1.3, c.ease - 0.1 * mistakes); }
      if (!existed) today().learned++;
      save();
    },
    due(prefix = 'w:', limit = 9999) {
      const now = Date.now();
      return Object.entries(S.cards).filter(([id, c]) => id.startsWith(prefix) && c.due <= now).sort((a, b) => a[1].due - b[1].due).slice(0, limit).map(([id]) => id);
    },
    dueCount(prefix = 'w:') { const now = Date.now(); let n = 0; for (const id in S.cards) if (id.startsWith(prefix) && S.cards[id].due <= now) n++; return n; },
    counts(prefix = 'w:') {
      let learned = 0, mastered = 0, learning = 0;
      for (const id in S.cards) { if (!id.startsWith(prefix)) continue; const c = S.cards[id]; learned++; if (c.s === 'review' && c.ivl >= 21) mastered++; else if (c.s !== 'review') learning++; }
      return { learned, mastered, learning };
    },
    forecast(days = 7) {
      const out = Array(days).fill(0); const base = new Date(U.dayKey()).getTime();
      for (const id in S.cards) { const c = S.cards[id]; const d = Math.floor((c.due - base) / DAY); if (d < days) out[Math.max(0, d)]++; }
      return out;
    },
    toggleFav(id) { if (S.fav[id]) delete S.fav[id]; else S.fav[id] = Date.now(); save(); return !!S.fav[id]; },

    /* ---------- XP i seria ---------- */
    addXP(n) {
      const d = today();
      const before = d.xp;
      d.xp += n; S.xpTotal += n;
      const k = U.dayKey();
      if (S.streak.last !== k) {
        const y = U.dayKey(Date.now() - DAY);
        S.streak.count = S.streak.last === y ? S.streak.count + 1 : 1;
        S.streak.last = k;
        S.streak.best = Math.max(S.streak.best || 0, S.streak.count);
      }
      save();
      if (before < S.settings.dailyGoal && d.xp >= S.settings.dailyGoal) document.dispatchEvent(new CustomEvent('goal'));
      return d.xp;
    },
    answer(ok) { const d = today(); d.total++; if (ok) d.correct++; save(); },
    addMinutes(m) { today().min += m; save(); },
    streakAlive() { const k = U.dayKey(), y = U.dayKey(Date.now() - DAY); return S.streak.last === k || S.streak.last === y ? S.streak.count : 0; },

    /* ---------- lekcje ---------- */
    result(kind, id, score, extra = {}) {
      const r = S[kind][id] || (S[kind][id] = { best: 0, done: false, tries: 0 });
      r.best = Math.max(r.best, score); r.tries++; r.ts = Date.now();
      if (score >= (extra.pass ?? 70)) r.done = true;
      save();
      return r;
    },

    /* ---------- osiągnięcia ---------- */
    unlock(id) { if (S.achievements[id]) return false; S.achievements[id] = Date.now(); save(); document.dispatchEvent(new CustomEvent('achievement', { detail: id })); return true; },

    export() { return JSON.stringify(S); },
    import(json) { const d = JSON.parse(json); if (!d || d.v !== 1 || !d.cards) throw new Error('Nieprawidłowy plik'); localStorage.setItem(KEY, JSON.stringify(d)); load(); },
    reset() { S = fresh(); save(true); }
  };
  window.Store = Store;
})();
