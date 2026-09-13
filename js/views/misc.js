/* Więcej, słownik, statystyki, ustawienia, instalacja */
(function () {
  const esc = U.esc;

  App.route('/more', view => {
    const items = [
      ['#/alphabet', '🔤', 'Alfabet', '33 litery, kursywa, czytanie'],
      ['#/phrases', '💬', 'Zdania', C.sentences.length + ' zdań z nagraniem'],
      ['#/texts', '📖', 'Czytanki', C.texts.length + ' tekstów A1–B2'],
      ['#/dict', '🔎', 'Słownik', C.words.length + ' słów z wymową'],
      ['#/plan', '🗓️', 'Plan 52 tygodni', 'rok do B2'],
      ['#/stats', '📊', 'Statystyki', 'postępy i osiągnięcia'],
      ['#/settings', '⚙️', 'Ustawienia', 'głos, wygląd, kopia zapasowa'],
      ['#/install', '📲', 'Instalacja', 'aplikacja na telefonie, offline']
    ];
    view.innerHTML = App.header({ title: 'Więcej' }) + `<section class="more-grid">${items.map(i => `<a class="more-item" href="${i[0]}"><span class="mi-ico">${i[1]}</span><b>${i[2]}</b><span class="muted small">${i[3]}</span></a>`).join('')}</section>`;
  });

  /* ---------- Słownik ---------- */
  App.route('/dict', view => {
    let level = '';
    view.innerHTML = App.header({ title: 'Słownik', back: '#/more', sub: 'szukaj po polsku lub po rosyjsku' }) + `
      <section class="search-box big">${U.icon('search')}<input id="dq" placeholder="np. dom, дом, dom… (pisz też polskimi literami)" autocomplete="off" /></section>
      <section class="seg-row">${['', 'A1', 'A2', 'B1', 'B2'].map(l => `<button class="chip ${l === '' ? 'on' : ''}" data-lv="${l}">${l || 'Wszystkie'}</button>`).join('')}</section>
      <section class="card list" id="dres"></section>`;
    const inp = U.$('#dq', view), res = U.$('#dres', view);
    function search() {
      const raw = inp.value.trim().toLowerCase();
      let list = C.words.filter(w => !level || w.level === level);
      if (raw) {
        const qpl = U.normPl(raw);
        const qru = U.norm(U.hasCyr(raw) ? raw : KB.convertTyped(raw, raw.length).value);
        const scored = [];
        for (const w of list) {
          const ru = U.norm(w.ru), pl = U.normPl(w.pl);
          let s = 0;
          if (ru === qru || pl === qpl) s = 100;
          else if (ru.startsWith(qru) || pl.split(/[,;]\s*/).some(x => x.startsWith(qpl))) s = 60;
          else if (ru.includes(qru) || pl.includes(qpl)) s = 30;
          if (s) scored.push([s, w]);
        }
        list = scored.sort((a, b) => b[0] - a[0]).map(x => x[1]);
      } else list = list.slice(0, 0);
      res.innerHTML = raw ? (list.length ? list.slice(0, 80).map(wordRow).join('') + (list.length > 80 ? `<p class="muted pad small">…i ${list.length - 80} więcej</p>` : '') : '<p class="muted pad">Nic nie znaleziono.</p>')
        : `<p class="muted pad">Wpisz słowo. Wyszukiwanie działa po polsku, po rosyjsku i w transliteracji (np. „priwiet”, „szkoła”).</p>`;
    }
    inp.addEventListener('input', search);
    view.onclick = e => {
      const lv = e.target.closest('[data-lv]');
      if (lv) { level = lv.dataset.lv; U.$$('[data-lv]', view).forEach(b => b.classList.toggle('on', b === lv)); search(); }
      const f = e.target.closest('[data-fav]'); if (f) f.classList.toggle('on', Store.toggleFav(f.dataset.fav));
    };
    search();
    setTimeout(() => inp.focus(), 100);
  });

  /* ---------- Statystyki ---------- */
  App.route('/stats', view => {
    const S = Store.state;
    const days = S.days;
    const allDays = Object.values(days);
    const totalMin = Math.round(allDays.reduce((a, d) => a + (d.min || 0), 0));
    const tot = allDays.reduce((a, d) => a + (d.total || 0), 0), cor = allDays.reduce((a, d) => a + (d.correct || 0), 0);
    const cnt = Store.counts('w:'), sc = Store.counts('s:');
    // heatmapa 18 tygodni
    const weeks = 18, cells = [];
    const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() - (weeks * 7 - 1) - ((start.getDay() + 6) % 7 === 6 ? 0 : 0));
    for (let i = 0; i < weeks * 7; i++) { const d = new Date(start.getTime() + i * 864e5); const k = U.dayKey(d); const xp = days[k] ? days[k].xp : 0; cells.push({ k, xp, d }); }
    const lvlOf = xp => xp === 0 ? 0 : xp < 20 ? 1 : xp < 50 ? 2 : xp < 100 ? 3 : 4;
    const last14 = Array.from({ length: 14 }, (_, i) => { const d = new Date(Date.now() - (13 - i) * 864e5); const k = U.dayKey(d); return { d, xp: days[k] ? days[k].xp : 0 }; });
    const max14 = Math.max(S.settings.dailyGoal, ...last14.map(x => x.xp));
    const ach = App.ACH;
    const st = C.stats();
    view.innerHTML = App.header({ title: 'Statystyki', back: '#/more' }) + `
      <section class="stat-tiles">
        <div class="st"><span>🔥</span><b>${Store.streakAlive()}</b><small>seria dni (rekord ${S.streak.best || 0})</small></div>
        <div class="st"><span>⚡</span><b>${S.xpTotal}</b><small>XP łącznie</small></div>
        <div class="st"><span>⏱️</span><b>${totalMin >= 120 ? Math.round(totalMin / 60) + ' h' : totalMin + ' min'}</b><small>czas nauki</small></div>
        <div class="st"><span>🎯</span><b>${tot ? Math.round(cor / tot * 100) : 0}%</b><small>trafność (${tot} odp.)</small></div>
      </section>
      <section class="card">
        <div class="card-h"><h3>Aktywność</h3><span class="small muted">ostatnie ${weeks} tygodni</span></div>
        <div class="heat-wrap"><div class="heat" style="grid-template-rows:repeat(7,1fr)">${cells.map(c => `<i class="h${lvlOf(c.xp)}" title="${c.d.toLocaleDateString('pl-PL')}: ${c.xp} XP"></i>`).join('')}</div></div>
        <div class="heat-legend small muted">mniej <i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i><i class="h4"></i> więcej</div>
      </section>
      <section class="card">
        <div class="card-h"><h3>XP – ostatnie 14 dni</h3><span class="small muted">cel: ${S.settings.dailyGoal}</span></div>
        <div class="forecast xp">${last14.map(x => `<div class="fc-col ${x.xp >= S.settings.dailyGoal ? 'goal' : ''}"><i style="height:${Math.round(x.xp / max14 * 100)}%"></i><b>${x.xp || ''}</b><span>${x.d.getDate()}</span></div>`).join('')}<div class="goal-line" style="bottom:calc(${Math.round(S.settings.dailyGoal / max14 * 100)}% * .78 + 34px)"></div></div>
      </section>
      <section class="card">
        <h3>Słownictwo</h3>
        <div class="stats-strip inner"><div><b>${cnt.learned}</b><span>w nauce</span></div><div><b>${cnt.learning}</b><span>świeże</span></div><div><b>${cnt.mastered}</b><span>opanowane (21+ dni)</span></div><div><b>${sc.learned}</b><span>zdań</span></div></div>
        ${C.LEVELS.filter(L => L.id !== 'A0').map(L => `<div class="lvl-bar">${App.levelChip(L.id)}${App.bar(st.byLevel[L.id].learned / st.byLevel[L.id].total, L.color)}<span class="small muted">${st.byLevel[L.id].learned}/${st.byLevel[L.id].total}</span></div>`).join('')}
      </section>
      <section class="card">
        <div class="card-h"><h3>Osiągnięcia</h3><span class="small muted">${Object.keys(S.achievements).length}/${Object.keys(ach).length}</span></div>
        <div class="ach-grid">${Object.entries(ach).map(([k, a]) => `<div class="ach ${S.achievements[k] ? 'on' : ''}" title="${esc(a[2])}"><span>${a[0]}</span><b>${esc(a[1])}</b><small>${esc(a[2])}</small></div>`).join('')}</div>
      </section>`;
  });

  /* ---------- Ustawienia ---------- */
  App.route('/settings', view => {
    const s = App.settings();
    const toggle = (key, label, desc) => `<label class="set-row"><span><b>${label}</b>${desc ? `<small>${desc}</small>` : ''}</span><input type="checkbox" class="switch" data-set="${key}" ${s[key] ? 'checked' : ''}></label>`;
    const voices = TTS.voices();
    view.innerHTML = App.header({ title: 'Ustawienia', back: '#/more' }) + `
      <section class="card">
        <h3>🔊 Wymowa i głos</h3>
        ${voices.length ? `<label class="set-row"><span><b>Głos rosyjski</b><small>${voices.length} dostępnych</small></span>
          <select data-set="voice">${voices.map(v => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === s.voice ? 'selected' : ''}>${esc(v.name)} (${v.lang})</option>`).join('')}</select></label>`
        : `<div class="warn-card">🔇 <b>Brak rosyjskiego głosu.</b> Aplikacja użyje domyślnego, ale najlepiej zainstalować głos:
            <ul class="small">
              <li><b>iPhone/iPad:</b> Ustawienia → Dostępność → Treść mówiona → Głosy → Rosyjski → pobierz „Milena (Rozszerzony)”.</li>
              <li><b>Android:</b> Ustawienia → System → Język → Zamiana tekstu na mowę → Usługi Google → Zainstaluj dane głosowe → Rosyjski.</li>
              <li><b>Mac:</b> Ustawienia systemowe → Dostępność → Treść mówiona → Głos systemowy → Zarządzaj głosami → Rosyjski (Milena).</li>
              <li><b>Windows:</b> Ustawienia → Czas i język → Mowa → Dodaj głosy → Русский. W Chrome/Edge działają też głosy online.</li>
            </ul></div>`}
        <label class="set-row"><span><b>Tempo mowy</b><small id="rate-v">${Math.round(s.rate * 100)}%</small></span><input type="range" min="0.5" max="1.3" step="0.05" value="${s.rate}" data-set="rate"></label>
        <div class="set-row"><span><b>Test głosu</b></span><button class="btn small" data-a="test">${U.icon('vol')} Приве́т!</button></div>
        ${toggle('autoSpeak', 'Czytaj po odpowiedzi', 'Po każdej odpowiedzi odtwarza słowo lub całe zdanie')}
        ${toggle('showTranscr', 'Pokazuj transkrypcję', 'Wymowa polskimi literami, np. молоко́ → [małakó]')}
        ${toggle('showStress', 'Pokazuj akcent', 'Kreska nad akcentowaną samogłoską (а́)')}
      </section>
      <section class="card">
        <h3>🎯 Nauka</h3>
        <label class="set-row"><span><b>Nowe słowa w sesji</b></span><select data-set="sessionSize">${[5, 8, 10, 12, 15, 20].map(n => `<option ${n === s.sessionSize ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
        <label class="set-row"><span><b>Dzienny cel XP</b><small>≈ ${Math.round(s.dailyGoal / 10)} min nauki</small></span><select data-set="dailyGoal">${[100, 200, 350, 500, 750].map(n => `<option ${n === s.dailyGoal ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
        <label class="set-row"><span><b>Początek planu</b><small>od tej daty liczone są tygodnie 1–52</small></span><input type="date" value="${Store.state.planStart}" data-set="planStart"></label>
        <label class="set-row"><span><b>Imię</b></span><input type="text" value="${esc(s.name)}" data-set="name" maxlength="30" placeholder="opcjonalnie"></label>
      </section>
      <section class="card">
        <h3>⌨️ Pisanie i wygląd</h3>
        ${toggle('keyboard', 'Klawiatura rosyjska na ekranie', 'Przy zadaniach z pisaniem')}
        ${toggle('translit', 'Transliteracja PL → Кир', 'sz→ш, cz→ч, szcz→щ, ż→ж, ch→х, ja→я, ju→ю, y→ы, \'→ь')}
        <label class="set-row"><span><b>Motyw</b></span><select data-set="theme">${[['auto', 'Automatyczny'], ['dark', 'Ciemny'], ['light', 'Jasny']].map(([v, l]) => `<option value="${v}" ${v === s.theme ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
        ${toggle('sfx', 'Efekty dźwiękowe')}
        ${toggle('haptics', 'Wibracje')}
      </section>
      <section class="card">
        <h3>💾 Kopia zapasowa</h3>
        <p class="small muted">Postępy zapisują się w tej przeglądarce. Zrób kopię, żeby przenieść je na inne urządzenie.</p>
        <div class="btn-row">
          <button class="btn" data-a="export">${U.icon('download')} Eksportuj</button>
          <label class="btn">${U.icon('upload')} Importuj<input type="file" accept="application/json,.json" hidden data-a="import"></label>
          <button class="btn danger" data-a="reset">${U.icon('trash')} Resetuj</button>
        </div>
      </section>
      <p class="center small muted">Говори́! · ${C.words.length} słów · ${C.grammar.length} lekcji · ${C.sentences.length} zdań · ${C.texts.length} czytanek<br>Działa offline po instalacji.</p>`;

    view.onchange = e => {
      const el = e.target;
      if (el.dataset.a === 'import') {
        const f = el.files[0]; if (!f) return;
        f.text().then(txt => { try { Store.import(txt); FX.toast('✅ Zaimportowano postępy'); App.applyTheme(); App.render(); } catch (err) { FX.toast('❌ ' + err.message, 'bad'); } });
        return;
      }
      const key = el.dataset.set; if (!key) return;
      let v = el.type === 'checkbox' ? el.checked : el.value;
      if (['sessionSize', 'dailyGoal'].includes(key)) v = +v;
      if (key === 'rate') { v = +v; U.$('#rate-v', view).textContent = Math.round(v * 100) + '%'; }
      if (key === 'planStart') { Store.state.planStart = v; Store.save(); FX.toast('Plan przeliczony – tydzień ' + C.currentWeek()); return; }
      Store.set(key, v);
      if (key === 'voice' || key === 'rate') TTS.speak('Приве́т! Как дела́?');
    };
    view.oninput = e => { if (e.target.dataset.set === 'rate') U.$('#rate-v', view).textContent = Math.round(e.target.value * 100) + '%'; };
    view.onclick = e => {
      const a = e.target.closest('[data-a]'); if (!a) return;
      if (a.dataset.a === 'test') TTS.speak('Приве́т! Меня́ зову́т Го́вори. Дава́й учи́ть ру́сский язы́к!');
      if (a.dataset.a === 'export') {
        const blob = new Blob([Store.export()], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob); link.download = `govori-kopia-${U.dayKey()}.json`;
        document.body.appendChild(link); link.click(); setTimeout(() => { URL.revokeObjectURL(link.href); link.remove(); }, 500);
      }
      if (a.dataset.a === 'reset' && confirm('Na pewno usunąć WSZYSTKIE postępy? Tej operacji nie można cofnąć.')) { Store.reset(); App.applyTheme(); App.go('#/'); }
    };
    if (!voices.length) document.addEventListener('voices', () => { if (location.hash === '#/settings' && TTS.voices().length) App.render(); }, { once: true });
  });

  /* ---------- Instalacja ---------- */
  App.route('/install', view => {
    const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
    view.innerHTML = App.header({ title: 'Instalacja na telefonie', back: '#/more' }) + `
      ${standalone ? '<section class="card ok-card">✅ Aplikacja jest zainstalowana i działa offline.</section>' : ''}
      <section class="card">
        <button class="btn primary big install-btn" data-a="install">📲 Zainstaluj teraz</button>
        <h3>iPhone / iPad (Safari)</h3>
        <ol><li>Otwórz stronę aplikacji w <b>Safari</b>.</li><li>Stuknij <b>Udostępnij</b> (kwadrat ze strzałką).</li><li>Wybierz <b>Do ekranu początkowego</b> → <b>Dodaj</b>.</li></ol>
        <h3>Android (Chrome)</h3>
        <ol><li>Otwórz stronę w <b>Chrome</b>.</li><li>Menu ⋮ → <b>Zainstaluj aplikację</b> (lub „Dodaj do ekranu głównego”).</li></ol>
        <h3>Komputer (Chrome / Edge)</h3>
        <ol><li>Kliknij ikonę instalacji ⊕ na pasku adresu.</li></ol>
      </section>
      <section class="card">
        <h3>ℹ️ Skąd uruchomić?</h3>
        <p class="small">Instalacja PWA wymaga adresu <b>https://</b> albo <b>localhost</b>. Najprościej:</p>
        <ul class="small">
          <li><b>Lokalnie na komputerze:</b> w folderze aplikacji uruchom <code>python3 -m http.server 8080</code> i otwórz <code>http://localhost:8080</code>.</li>
          <li><b>Na telefonie:</b> wrzuć folder na darmowy hosting (GitHub Pages, Netlify Drop, Cloudflare Pages) i otwórz adres https na telefonie. Po pierwszym wejściu wszystko działa offline.</li>
          <li>Plik <code>index.html</code> otwarty bezpośrednio też działa (bez trybu offline).</li>
        </ul>
      </section>`;
    view.onclick = e => { if (e.target.closest('[data-a="install"]')) App.install(); };
  });
})();
