/* Aplikacja: router, nawigacja, wspólne komponenty */
(function () {
  const esc = U.esc;
  const routes = [];

  const App = {
    settings: () => Store.settings(),
    stressView: ru => App.settings().showStress ? String(ru ?? '') : U.strip(ru),
    // transkrypcja z wyróżnioną sylabą akcentowaną
    trHTML(ru) {
      const t = Phon.transcribe(ru);
      return esc(t.normalize('NFD')).replace(/([aeiouy])́/g, '<b class="acc">$1</b>').normalize('NFC');
    },
    quizQ(q) {
      return String(q).split('___').map(p => esc(App.stressView(p))).join('<span class="blank">＿＿</span>');
    },
    route(pattern, fn) { routes.push({ re: new RegExp('^' + pattern.replace(/:\w+/g, '([^/]+)') + '$'), fn, pattern }); },
    go(hash) { if (location.hash === hash) App.render(); else location.hash = hash; },

    render() {
      TTS.stop();
      const hash = location.hash || '#/';
      const [path0, query] = (hash.slice(1) || '/').split('?');
      const path = path0 || '/';
      App.query = query ? decodeURIComponent(query) : '';
      const view = U.$('#view');
      for (const r of routes) {
        const m = path.match(r.re);
        if (m) {
          const args = m.slice(1).map(decodeURIComponent);
          view.classList.remove('enter'); void view.offsetWidth; view.classList.add('enter');
          view.innerHTML = '';
          r.fn(view, ...args);
          App.navActive(path);
          window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
          return;
        }
      }
      App.go('#/');
    },
    navActive(path) {
      const top = '/' + (path.split('/')[1] || '');
      const map = { '/': '/', '/course': '/course', '/plan': '/course', '/test': '/course', '/vocab': '/vocab', '/topic': '/vocab', '/review': '/vocab', '/grammar': '/grammar' };
      const key = map[top] || (top === '/' ? '/' : '/more');
      U.$$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === key));
    },

    // Nagłówek strony
    header({ title, back, sub, right = '' }) {
      return `<header class="page-head">
        ${back ? `<a class="ic-btn back" href="${back}" aria-label="Wstecz">${U.icon('back')}</a>` : ''}
        <div class="ph-title"><h1>${title}</h1>${sub ? `<div class="ph-sub">${sub}</div>` : ''}</div>
        <div class="ph-right">${right}</div>
      </header>`;
    },
    ring(pct, size = 64, stroke = 7, label = '') {
      const r = (size - stroke) / 2, c = 2 * Math.PI * r;
      return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" class="ring-bg"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - U.clamp(pct, 0, 1))}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
        ${label !== '' ? `<text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">${label}</text>` : ''}
      </svg>`;
    },
    bar(pct, color) { return `<div class="bar"><i style="width:${Math.round(U.clamp(pct, 0, 1) * 100)}%;${color ? 'background:' + color : ''}"></i></div>`; },
    levelChip(id) { const L = C.level(id); return `<span class="lvl" style="--c:${L.color}">${id}</span>`; },

    applyTheme() {
      const t = App.settings().theme;
      const dark = t === 'dark' || (t === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      const m = U.$('meta[name="theme-color"]'); if (m) m.content = dark ? '#0b1020' : '#f6f4ef';
    },

    checkAchievements() {
      const S = Store.state;
      const words = Store.counts('w:').learned;
      const done = k => Object.values(S[k]).filter(r => r.done).length;
      const A = App.ACH;
      if (words >= 1) Store.unlock('first');
      [50, 100, 250, 500, 1000, 1500, 2000, 2500].forEach(n => { if (words >= n) Store.unlock('w' + n); });
      [3, 7, 14, 30, 60, 100, 200, 365].forEach(n => { if (S.streak.count >= n) Store.unlock('s' + n); });
      if (C.abcUnits.every(a => S.alphabet['abc-' + a.id] && S.alphabet['abc-' + a.id].done)) Store.unlock('abc');
      const g = done('grammar');
      if (g >= 5) Store.unlock('g5'); if (g >= 25) Store.unlock('g25'); if (g >= C.grammar.length) Store.unlock('gall');
      if (done('texts') >= 1) Store.unlock('t1'); if (done('texts') >= C.texts.length) Store.unlock('tall');
      C.LEVELS.forEach(L => { if (S.tests[L.id] && S.tests[L.id].passed) Store.unlock('lvl' + L.id); });
      if (S.xpTotal >= 1000) Store.unlock('xp1k'); if (S.xpTotal >= 10000) Store.unlock('xp10k');
      return A;
    },
    ACH: {
      first: ['🌱', 'Pierwsze słowo', 'Nauczyłeś się pierwszego słowa'],
      abc: ['🔤', 'Cyrylica opanowana', 'Ukończone wszystkie grupy alfabetu'],
      w50: ['📗', '50 słów', 'Znasz już 50 słów'], w100: ['📘', '100 słów', 'Setka!'], w250: ['📙', '250 słów', 'Podstawy komunikacji'],
      w500: ['📕', '500 słów', 'Poziom A1 w kieszeni'], w1000: ['📚', '1000 słów', 'Tysiąc słów!'], w1500: ['🎓', '1500 słów', 'Solidne A2/B1'],
      w2000: ['🧠', '2000 słów', 'Słownictwo na B1+'], w2500: ['👑', '2500 słów', 'Całe słownictwo kursu'],
      s3: ['🔥', '3 dni z rzędu', 'Dobry początek'], s7: ['🔥', 'Tydzień nauki', '7 dni z rzędu'], s14: ['⚡', '2 tygodnie', '14 dni z rzędu'],
      s30: ['🌟', 'Miesiąc!', '30 dni z rzędu'], s60: ['💎', '60 dni', 'Nawyk utrwalony'], s100: ['🏅', '100 dni', 'Legendarna seria'],
      s200: ['🚀', '200 dni', 'Nie do zatrzymania'], s365: ['🏆', 'Cały rok', '365 dni nauki!'],
      g5: ['📐', 'Gramatyk', '5 lekcji gramatyki'], g25: ['📏', 'Znawca przypadków', '25 lekcji gramatyki'], gall: ['🏛️', 'Cały podręcznik', 'Wszystkie lekcje gramatyki'],
      t1: ['📖', 'Pierwsza czytanka', 'Przeczytana i zrozumiana'], tall: ['🦉', 'Mól książkowy', 'Wszystkie czytanki'],
      lvlA0: ['🅰️', 'Alfabet zdany', 'Test A0'], lvlA1: ['🥉', 'Poziom A1', 'Zdany test A1'], lvlA2: ['🥈', 'Poziom A2', 'Zdany test A2'],
      lvlB1: ['🥇', 'Poziom B1', 'Zdany test B1'], lvlB2: ['🏆', 'Poziom B2', 'Zdany test B2 – cel osiągnięty!'],
      speak1: ['🎤', 'Pierwsze słowa na głos', 'Rozpoznana poprawna wymowa'],
      stress50: ['🎯', 'Mistrz akcentu', '50 trafionych akcentów'],
      perfect: ['💯', 'Perfekcja', '100% w lekcji gramatyki'],
      xp1k: ['✨', '1000 XP', 'Pracowity uczeń'], xp10k: ['💫', '10 000 XP', 'Mistrz wytrwałości']
    }
  };
  window.App = App;

  /* ---------- globalne zdarzenia ---------- */
  document.addEventListener('click', e => {
    if (document.body.classList.contains('in-session')) return;
    const sp = e.target.closest('[data-say]');
    const btn = e.target.closest('button, a, input, select, label');
    const wordEl = e.target.closest('[data-word]');
    if (wordEl && !btn && !e.target.closest('.lookup')) { WordUI.open(wordEl.dataset.word); return; }
    if (sp && (!btn || btn.classList.contains('spk') || btn === sp || sp.contains(btn) && btn.classList.contains('spk'))) {
      e.preventDefault();
      sp.classList.add('speaking');
      TTS.speak(sp.dataset.say, { onEnd: () => sp.classList.remove('speaking') });
      setTimeout(() => sp.classList.remove('speaking'), 4000);
      return;
    }
    // komórki tabel gramatycznych z cyrylicą – dotknij, aby usłyszeć
    const td = e.target.closest('.gt td');
    if (td && !btn && U.hasCyr(td.textContent)) {
      const cyr = (td.textContent.match(/[А-Яа-яЁё́][А-Яа-яЁё́\- ,]*/g) || []).join(', ');
      td.classList.add('speaking'); setTimeout(() => td.classList.remove('speaking'), 1200);
      TTS.speak(cyr);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.matches('.say')) TTS.speak(e.target.dataset.say);
  });
  document.addEventListener('achievement', e => {
    const a = App.ACH[e.detail]; if (!a) return;
    FX.toast(`<span class="t-emoji">${a[0]}</span><div><b>Osiągnięcie!</b><br>${esc(a[1])}</div>`, 'ach');
  });
  document.addEventListener('goal', () => { FX.toast('<span class="t-emoji">🎯</span><div><b>Cel dnia osiągnięty!</b><br>Отли́чно! Seria trwa.</div>', 'ach'); setTimeout(() => FX.confetti(90), 400); });
  document.addEventListener('settings', e => { if (e.detail === 'theme') App.applyTheme(); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', App.applyTheme);

  // licznik czasu aktywnej nauki poza sesjami ćwiczeń (czytanie, gramatyka)
  let lastAct = Date.now();
  ['pointerdown', 'keydown', 'scroll'].forEach(ev => addEventListener(ev, () => (lastAct = Date.now()), { passive: true }));
  setInterval(() => { if (!document.hidden && Date.now() - lastAct < 60000 && !document.body.classList.contains('in-session')) Store.addMinutes(0.5); }, 30000);

  /* ---------- PWA ---------- */
  let deferredPrompt = null;
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; document.body.classList.add('can-install'); });
  App.install = async () => {
    if (deferredPrompt) { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; document.body.classList.remove('can-install'); }
    else if (location.hash.startsWith('#/install')) FX.toast('Przeglądarka nie oferuje instalacji jednym kliknięciem – skorzystaj z instrukcji poniżej 👇');
    else App.go('#/install');
  };
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW', err)));
  }

  /* ---------- start ---------- */
  function shell() {
    const nav = [
      ['/', '#/', 'home', 'Start'], ['/course', '#/course', 'path', 'Kurs'], ['/vocab', '#/vocab', 'cards', 'Słówka'], ['/grammar', '#/grammar', 'book', 'Gramatyka'], ['/more', '#/more', 'more', 'Więcej']
    ];
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="bg-orbs" aria-hidden="true"><i></i><i></i><i></i></div>
      <aside class="sidenav">
        <a class="brand" href="#/"><span class="logo">Го</span><span><b>Говори́!</b><small>rosyjski A0 → B2</small></span></a>
        ${nav.map(n => `<a data-nav="${n[0]}" href="${n[1]}">${U.icon(n[2])}<span>${n[3]}</span></a>`).join('')}
        <div class="sn-sep"></div>
        <a data-nav="/more" href="#/alphabet">${U.icon('abc')}<span>Alfabet</span></a>
        <a data-nav="/more" href="#/phrases">${U.icon('chat')}<span>Zdania</span></a>
        <a data-nav="/more" href="#/texts">${U.icon('text')}<span>Czytanki</span></a>
        <a data-nav="/more" href="#/dict">${U.icon('search')}<span>Słownik</span></a>
        <a data-nav="/more" href="#/stats">${U.icon('chart')}<span>Statystyki</span></a>
        <a data-nav="/more" href="#/settings">${U.icon('gear')}<span>Ustawienia</span></a>
      </aside>
      <main id="view" class="view"></main>
      <nav class="tabbar">${nav.map(n => `<a data-nav="${n[0]}" href="${n[1]}">${U.icon(n[2])}<span>${n[3]}</span></a>`).join('')}</nav>`);
  }

  App.start = () => {
    App.applyTheme();
    shell();
    addEventListener('hashchange', App.render);
    App.render();
    App.checkAchievements();
  };
})();
