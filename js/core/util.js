/* Narzędzia ogólne */
(function () {
  const U = {};
  U.$ = (sel, root = document) => root.querySelector(sel);
  U.$$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  U.esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  U.strip = s => String(s ?? '').replace(/́/g, '');
  U.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  U.sample = (a, n) => U.shuffle(a).slice(0, n);
  U.pick = a => a[Math.floor(Math.random() * a.length)];
  U.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  U.hasCyr = s => /[А-Яа-яЁё]/.test(s);
  U.sleep = ms => new Promise(r => setTimeout(r, ms));

  // porównywanie odpowiedzi: bez akcentów, ё=е, bez interpunkcji
  U.norm = s => U.strip(s).toLowerCase().replace(/ё/g, 'е').replace(/[.,!?;:«»"„”“()\[\]—–…]/g, ' ').replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  U.normPl = s => String(s ?? '').toLowerCase().replace(/[.,!?;:«»"„”“()\[\]—–…]/g, ' ').replace(/\s+/g, ' ').trim();

  U.lev = (a, b) => {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  };

  // Akceptowane warianty odpowiedzi po rosyjsku z pola słownika
  U.answerVariants = ru => {
    const base = U.strip(ru).replace(/\(.*?\)/g, '').replace(/…/g, '');
    const parts = base.split(/\s*[\/;]\s*/).map(U.norm).filter(Boolean);
    return [...new Set([U.norm(base), ...parts])];
  };
  // wynik sprawdzania: 'ok' | 'typo' | 'bad'
  U.check = (input, ru) => {
    const n = U.norm(input);
    if (!n) return 'bad';
    const vars = U.answerVariants(ru);
    if (vars.includes(n)) return 'ok';
    for (const v of vars) if (v.length >= 5 && U.lev(n, v) <= (v.length > 12 ? 2 : 1)) return 'typo';
    return 'bad';
  };

  // Linie "a|b|c" → tablice
  U.lines = txt => String(txt || '').trim().split('\n').map(l => l.trim()).filter(Boolean);

  // Daty
  U.dayKey = (d = new Date()) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
  U.daysBetween = (a, b) => Math.round((new Date(U.dayKey(b)) - new Date(U.dayKey(a))) / 864e5);
  U.fmtDate = d => new Date(d).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
  U.plural = (n, one, few, many) => { const a = Math.abs(n) % 100, b = a % 10; if (a === 1 && n === 1) return one; if (b >= 2 && b <= 4 && !(a >= 12 && a <= 14)) return few; return many; };

  // Zamiana znaczników treści na HTML
  U.say = (ru, cls = '') => `<span class="say ${cls}" data-say="${U.esc(U.strip(ru))}" tabindex="0">${U.esc(ru)}</span>`;
  U.markup = html => String(html)
    .replace(/\[\[(.+?)\]\](?!\])/g, (_, inner) => {
      const i = inner.indexOf('|');
      const ru = inner.slice(0, i);
      let pl = inner.slice(i + 1);
      if (App.settings().showTranscr) pl = pl.replace(/\s*[–-]\s*\[[^\]]*\]\s*$/, '');
      const tr = window.Phon && App.settings().showTranscr ? `<span class="ex-tr">[${U.esc(Phon.transcribe(ru.replace(/^=\s*/, '')))}]</span>` : '';
      return `<div class="ex" data-say="${U.esc(U.strip(ru))}"><button class="ic-btn spk" aria-label="Posłuchaj">${U.icon('vol')}</button><div><div class="ex-ru">${U.esc(App.stressView(ru))}</div>${tr}<div class="ex-pl">${U.esc(pl)}</div></div></div>`;
    })
    .replace(/\{\{(.+?)\}\}/g, (_, ru) => U.say(App.stressView(ru)));

  U.icon = name => {
    const p = {
      vol: '<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
      slow: '<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M16 12h5"/>',
      home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/>',
      path: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17V9a4 4 0 0 1 4-4h6M18 7v8a4 4 0 0 1-4 4H8"/>',
      cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>',
      book: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-4a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h5z"/>',
      more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
      back: '<path d="M15 5l-7 7 7 7"/>',
      close: '<path d="M6 6l12 12M18 6 6 18"/>',
      check: '<path d="M4 12l5 5L20 6"/>',
      star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
      flame: '<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-9-1 3-3 4-4 4 0-2-1-4-3-6 0 4-3 6-3 11 0 4 3 7 7 7z"/>',
      mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
      kbd: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      play: '<path d="M7 4v16l13-8z"/>',
      stop: '<rect x="6" y="6" width="12" height="12" rx="1"/>',
      eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
      bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
      trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
      cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
      chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
      gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
      text: '<path d="M4 6h16M4 12h16M4 18h10"/>',
      chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
      abc: '<path d="M4 18 8 6l4 12M5.5 14h5M15 6v12h3a3 3 0 0 0 0-6h-3 2.5a3 3 0 0 0 0-6z"/>',
      shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
      download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
      upload: '<path d="M12 21V9M7 14l5-5 5 5M5 3h14"/>',
      trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>',
      lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
      target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
      brain: '<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-3 3c0 1.3.8 2.4 2 2.8A3 3 0 0 0 6 17a3 3 0 0 0 3 3h1V3zM15 3a3 3 0 0 1 3 3 3 3 0 0 1 3 3c0 1.3-.8 2.4-2 2.8A3 3 0 0 1 18 17a3 3 0 0 1-3 3h-1V3z"/>'
    }[name] || '';
    return `<svg viewBox="0 0 24 24" class="icon" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  };

  window.U = U;
})();
