/* Ekran startowy */
(function () {
  const esc = U.esc;
  const TIPS = [
    'Mów na głos! Po każdej odpowiedzi aplikacja czyta słowo – powtórz je jak echo.',
    'Ucz się słów zawsze z akcentem. Akcent zmienia wymowę samogłosek: молоко́ → [małakó].',
    '15–20 minut dziennie daje więcej niż 3 godziny raz w tygodniu. Seria dni to Twoja supermoc.',
    'Najpierw powtórki, potem nowe słowa – tak mózg utrwala wiedzę najskuteczniej.',
    'Polski bardzo pomaga w rosyjskim: przypadki, aspekt i wiele słów są podobne. Uważaj tylko na fałszywych przyjaciół!',
    'Włącz rosyjskie napisy do seriali, gdy dojdziesz do B1 – to ogromny skok w rozumieniu.',
    'Nie bój się błędów. Każda pomyłka wraca szybciej w powtórkach, więc zapamiętasz ją lepiej.',
    'Czytaj czytanki dwa razy: raz dla sensu, drugi raz z odsłuchem, powtarzając zdania.',
    'Na B2 potrzebujesz ok. 4000 słów w rozumieniu – kurs daje 2550 aktywnych, resztę dołożą czytanki i seriale.',
    'Transliteracja: pisz „szczi” a wyjdzie „щи”, „ja” → „я”, „y” → „ы”, apostrof → „ь”.'
  ];

  function greeting() {
    const h = new Date().getHours();
    if (h < 5) return ['Доброй ночи!', 'Dobrej nocy'];
    if (h < 12) return ['Доброе у́тро!', 'Dzień dobry'];
    if (h < 18) return ['До́брый день!', 'Dzień dobry'];
    return ['До́брый ве́чер!', 'Dobry wieczór'];
  }

  function wordOfDay() {
    const d = new Date(); const seed = d.getFullYear() * 1000 + Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
    const next = C.nextUnit();
    const lvl = next ? next.level : 'B2';
    const order = ['A1', 'A2', 'B1', 'B2'];
    const pool = C.words.filter(w => order.indexOf(w.level) <= Math.max(0, order.indexOf(lvl)) && U.strip(w.ru).length < 20);
    return pool[(seed * 7919) % pool.length];
  }

  App.route('/', view => {
    const S = Store.state;
    const [gr, grPl] = greeting();
    const d = Store.today();
    const goal = App.settings().dailyGoal;
    const streak = Store.streakAlive();
    const due = Store.dueCount('w:') + Store.dueCount('s:');
    const next = C.nextUnit();
    const wk = C.currentWeek();
    const plan = C.plan[wk - 1];
    const planDone = plan.units.filter(u => C.unitDone(u)).length;
    const cnt = Store.counts('w:');
    const wod = wordOfDay();
    const tip = TIPS[new Date().getDate() % TIPS.length];
    const fc = Store.forecast(7);
    const fcMax = Math.max(5, ...fc);
    const days = ['Dziś', 'Jutro', ...Array.from({ length: 5 }, (_, i) => new Date(Date.now() + (i + 2) * 864e5).toLocaleDateString('pl-PL', { weekday: 'short' }))];
    const behind = next ? C.plan.findIndex(p => p.units.some(u => u.id === next.id)) + 1 : 52;

    view.innerHTML = `
      <section class="home-top">
        <div>
          <div class="hello say" data-say="${esc(U.strip(gr))}">${esc(App.stressView(gr))}</div>
          <div class="muted">${grPl}${S.settings.name ? ', ' + esc(S.settings.name) : ''} · ${new Date().toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        </div>
        <div class="chips">
          <span class="streak ${streak ? 'on' : ''}" title="Seria dni nauki">${U.icon('flame')}<b>${streak}</b></span>
          <a class="goal-ring" href="#/stats" title="Cel dzienny XP">${App.ring(d.xp / goal, 52, 6, Math.min(999, d.xp))}</a>
        </div>
      </section>

      <section class="card hero">
        <div class="hero-meta">
          <span class="pill">${U.icon('cal')} Tydzień ${wk} / 52</span>
          ${App.levelChip(plan.level)}
          ${behind > wk + 1 ? '<span class="pill ok">🚀 wyprzedzasz plan</span>' : behind < wk ? `<span class="pill warn">⏳ ${wk - behind} tyg. za planem</span>` : ''}
        </div>
        <h2>${next ? esc(next.title) : 'Kurs ukończony! 🏆'}</h2>
        <p class="muted">${next ? esc(next.sub || '') : 'Gratulacje – przerobiłeś cały materiał A0–B2.'}</p>
        ${next ? `<a class="btn primary big glow" href="${next.route}">${U.icon('play')} Kontynuuj kurs</a>` : ''}
        <div class="hero-week">
          <div class="muted small">Plan tego tygodnia: ${planDone}/${plan.units.length || '–'}</div>
          ${App.bar(plan.units.length ? planDone / plan.units.length : 1)}
          <div class="week-units">${plan.units.map(u => `<a href="${u.route}" class="wu ${C.unitDone(u) ? 'done' : ''}" title="${esc(u.title)}">${u.icon}</a>`).join('')}<a class="wu more" href="#/plan">…</a></div>
        </div>
      </section>

      <section class="grid2">
        <button class="action-tile hot" data-go="review">${U.icon('brain')}<b>Powtórki</b><span>${due ? `${due} czeka` : 'wszystko zrobione ✓'}</span>${due ? `<i class="badge">${due > 99 ? '99+' : due}</i>` : ''}</button>
        <button class="action-tile" data-go="quick">${U.icon('bolt')}<b>Szybka sesja</b><span>powtórki + nowe</span></button>
        <button class="action-tile" data-go="listen">${U.icon('vol')}<b>Słuchanie</b><span>zdania i dyktando</span></button>
        ${Speech.supported ? `<button class="action-tile" data-go="speak">${U.icon('mic')}<b>Mówienie</b><span>sprawdź wymowę</span></button>` : `<a class="action-tile" href="#/dict">${U.icon('search')}<b>Słownik</b><span>${C.words.length} słów</span></a>`}
      </section>

      <section class="card wod">
        <div class="wod-label">Słowo dnia</div>
        <div class="wod-main" data-say="${esc(U.strip(wod.ru))}">
          <button class="play-big small" aria-label="Posłuchaj">${U.icon('vol')}</button>
          <div>
            <div class="wod-ru">${esc(App.stressView(wod.ru))}</div>
            <div class="rv-tr">[${App.trHTML(wod.ru)}]</div>
            <div class="wod-pl">${esc(wod.pl)}</div>
            ${wod.note ? `<div class="muted small">${esc(wod.note)}</div>` : ''}
          </div>
        </div>
      </section>

      <section class="card">
        <div class="card-h"><h3>Twój postęp</h3><a href="#/stats" class="small">Statystyki →</a></div>
        <div class="stats-strip inner">
          <div><b>${cnt.learned}</b><span>słów w nauce</span></div>
          <div><b>${cnt.mastered}</b><span>opanowanych</span></div>
          <div><b>${Object.values(S.grammar).filter(r => r.done).length}/${C.grammar.length}</b><span>lekcji gram.</span></div>
          <div><b>${Math.round((S.xpTotal || 0))}</b><span>XP łącznie</span></div>
        </div>
        <div class="lvl-bars">${C.LEVELS.map(L => {
          const u = C.units[L.id]; const p = u.reduce((a, x) => a + C.unitProgress(x), 0) / u.length;
          return `<a class="lvl-bar" href="#/course?${L.id}">${App.levelChip(L.id)}${App.bar(p, L.color)}<span class="small muted">${Math.round(p * 100)}%</span></a>`;
        }).join('')}</div>
      </section>

      <section class="card">
        <div class="card-h"><h3>Prognoza powtórek</h3><span class="small muted">7 dni</span></div>
        <div class="forecast">${fc.map((n, i) => `<div class="fc-col"><i style="height:${Math.round(n / fcMax * 100)}%"></i><b>${n}</b><span>${days[i]}</span></div>`).join('')}</div>
      </section>

      <section class="card tip">💡 ${esc(tip)}</section>

      ${!TTS.hasRussian() && TTS.ready() ? `<section class="card warn-card">🔇 Nie wykryto rosyjskiego głosu w systemie. <a href="#/settings">Zobacz, jak go włączyć →</a></section>` : ''}
      <section class="install-card card">📲 Zainstaluj aplikację na telefonie, by uczyć się offline. <button class="btn small" data-go="install">Zainstaluj</button></section>
    `;
    view.onclick = e => {
      const g = e.target.closest('[data-go]'); if (!g) return;
      const a = g.dataset.go;
      if (a === 'review') { if (Store.dueCount('w:')) Sessions.review('w:'); else if (Store.dueCount('s:')) Sessions.review('s:'); else Sessions.review('w:'); }
      if (a === 'quick') Sessions.quick();
      if (a === 'listen') Sessions.listening();
      if (a === 'speak') Sessions.speaking();
      if (a === 'install') App.install();
    };
    if (!S.onboarded) App.onboarding();
  });

  App.onboarding = () => {
    const el = document.createElement('div');
    el.className = 'modal show';
    el.innerHTML = `<div class="modal-card onb">
      <div class="onb-logo">Говори́!</div>
      <h2>Rosyjski od zera do B2 w rok</h2>
      <p>Alfabet, ${C.words.length} słów z wymową, ${C.grammar.length} lekcji gramatyki, ${C.sentences.length} zdań i czytanki. Po każdej dobrej odpowiedzi usłyszysz, jak się to czyta, i zobaczysz dokładną wymowę.</p>
      <label class="field">Jak masz na imię? <input id="onb-name" placeholder="(opcjonalnie)" maxlength="30"></label>
      <div class="field">Od czego zaczynasz?
        <div class="seg">
          <button class="chip on" data-start="A0">Zupełnie od zera</button>
          <button class="chip" data-start="A1">Znam alfabet</button>
          <button class="chip" data-start="A2">Mam podstawy</button>
        </div>
      </div>
      <div class="field">Dzienny cel
        <div class="seg">${[[100, 'Luźno · 10 min'], [200, 'Regularnie · 20 min'], [350, 'Intensywnie · 30+ min']].map(([v, l], i) => `<button class="chip ${i === 1 ? 'on' : ''}" data-goal="${v}">${l}</button>`).join('')}</div>
      </div>
      <button class="btn primary big" data-onb="go">Zaczynamy! Пое́хали! 🚀</button>
      <button class="btn ghost small" data-onb="test">🔊 Sprawdź głos rosyjski</button>
    </div>`;
    document.body.appendChild(el);
    let start = 'A0';
    el.onclick = e => {
      const s = e.target.closest('[data-start]'); if (s) { U.$$('[data-start]', el).forEach(b => b.classList.toggle('on', b === s)); start = s.dataset.start; }
      const g = e.target.closest('[data-goal]'); if (g) { U.$$('[data-goal]', el).forEach(b => b.classList.toggle('on', b === g)); Store.set('dailyGoal', +g.dataset.goal); }
      const b = e.target.closest('[data-onb]'); if (!b) return;
      if (b.dataset.onb === 'test') return TTS.speak('Приве́т! Дава́й учи́ть ру́сский язы́к вме́сте!');
      Store.state.onboarded = true;
      Store.set('name', U.$('#onb-name', el).value.trim());
      // przesunięcie planu dla zaawansowanych
      const offset = { A0: 0, A1: 2, A2: 14 }[start];
      Store.state.planStart = U.dayKey(Date.now() - offset * 7 * 864e5);
      if (start !== 'A0') C.abcUnits.forEach(a => Store.result('alphabet', 'abc-' + a.id, 100));
      if (start === 'A2') C.grammar.filter(g => g.level === 'A0' || g.level === 'A1').forEach(g => Store.result('grammar', g.id, 70));
      Store.save(true);
      el.remove();
      FX.confetti(80);
      App.render();
    };
  };
})();
