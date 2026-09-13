/* Kurs: ścieżka poziomów, plan 52 tygodni, testy końcowe */
(function () {
  const esc = U.esc;
  const KIND = { abc: 'Alfabet', grammar: 'Gramatyka', vocab: 'Słówka', phrases: 'Zdania', text: 'Czytanka', test: 'Test' };

  function unitCard(u, isNext) {
    const p = C.unitProgress(u), done = C.unitDone(u);
    return `<a class="unit ${done ? 'done' : ''} ${isNext ? 'next' : ''} k-${u.kind}" href="${u.route}">
      <span class="u-node">${done ? U.icon('check') : u.icon}</span>
      <span class="u-body"><span class="u-kind">${KIND[u.kind]}</span><span class="u-title">${esc(u.title)}</span><span class="u-sub">${esc(u.sub || '')}</span>${!done && p > 0 ? App.bar(p) : ''}</span>
      ${isNext ? '<span class="u-go">START</span>' : ''}
    </a>`;
  }

  App.route('/course', view => {
    const next = C.nextUnit();
    const open = App.query || (next ? next.level : 'B2');
    view.innerHTML = App.header({ title: 'Kurs A0 → B2', sub: '52 tygodnie · krok po kroku', right: `<a class="btn small" href="#/plan">${U.icon('cal')} Plan</a>` }) +
      C.LEVELS.map(L => {
        const units = C.units[L.id];
        const doneN = units.filter(C.unitDone).length;
        const p = units.reduce((a, u) => a + C.unitProgress(u), 0) / units.length;
        return `<details class="level" ${L.id === open ? 'open' : ''} style="--c:${L.color}">
          <summary>
            ${App.ring(p, 56, 6, L.id)}
            <div class="lv-txt"><h2>${L.name}</h2><div class="muted small">${esc(L.desc)}</div><div class="small">${doneN}/${units.length} jednostek · ${L.weeks} tyg.</div></div>
          </summary>
          <div class="path">${units.map(u => unitCard(u, next && u.id === next.id)).join('')}</div>
        </details>`;
      }).join('');
    const n = U.$('.unit.next', view);
    if (n) setTimeout(() => n.scrollIntoView({ block: 'center', behavior: 'smooth' }), 150);
  });

  App.route('/plan', view => {
    const wk = C.currentWeek();
    const start = Store.state.planStart;
    view.innerHTML = App.header({ title: 'Plan 52 tygodni', back: '#/course', sub: `Start: ${U.fmtDate(start)} · teraz tydzień ${wk}` }) + `
      <section class="card tip">🎯 Cel: poziom <b>B2</b> po roku. Codziennie: powtórki (5–10 min) + nowy materiał z tygodnia (10–20 min). Na koniec każdego poziomu – test.</section>
      <div class="plan">${C.plan.map(p => {
        const done = p.units.length && p.units.every(C.unitDone);
        const d0 = new Date(new Date(start).getTime() + (p.week - 1) * 7 * 864e5);
        return `<div class="plan-week ${p.week === wk ? 'now' : ''} ${done ? 'done' : ''}" id="w${p.week}" style="--c:${C.level(p.level).color}">
          <div class="pw-head"><b>Tydz. ${p.week}</b>${App.levelChip(p.level)}<span class="muted small">${d0.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })}</span>${done ? '<span class="pill ok">✓</span>' : ''}</div>
          <div class="pw-units">${p.units.length ? p.units.map(u => `<a href="${u.route}" class="pw-u ${C.unitDone(u) ? 'done' : ''}">${u.icon} ${esc(u.title)}</a>`).join('') : '<span class="muted small">🔁 Tydzień powtórek: czytanki, słuchanie, zaległe powtórki</span>'}</div>
        </div>`;
      }).join('')}</div>`;
    setTimeout(() => { const el = U.$('#w' + wk, view); el && el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 150);
  });

  /* ---------- Test końcowy poziomu ---------- */
  App.route('/test/:level', (view, level) => {
    const L = C.level(level); if (!L) return App.go('#/course');
    const r = Store.state.tests[level];
    view.innerHTML = App.header({ title: `🏆 Test ${level}`, back: '#/course', sub: L.name }) + `
      <section class="card center-card" style="--c:${L.color}">
        ${App.ring(r ? r.best / 100 : 0, 120, 12, r ? r.best + '%' : '—')}
        <h2>${r && r.passed ? 'Test zdany! 🎉' : 'Sprawdź się'}</h2>
        <p class="muted">${level === 'A0' ? '20 pytań: litery, czytanie i wymowa.' : '25 pytań: gramatyka, słownictwo i zdania z całego poziomu.'} Aby zaliczyć, potrzebujesz <b>80%</b>.</p>
        <button class="btn primary big" data-t="go">${r ? 'Podejdź ponownie' : 'Rozpocznij test'}</button>
        ${r ? `<p class="small muted">Podejść: ${r.tries} · najlepszy wynik: ${r.best}%</p>` : ''}
      </section>`;
    view.onclick = async e => {
      if (!e.target.closest('[data-t]')) return;
      const tasks = buildTest(level);
      await Ex.run({
        title: `Test ${level}`, tasks, requeue: false, retryWrong: false,
        onFinish: res => {
          const S = Store.state;
          const t = S.tests[level] || (S.tests[level] = { best: 0, tries: 0, passed: false });
          t.tries++; t.best = Math.max(t.best, res.score); t.ts = Date.now();
          if (res.score >= 80 && !t.passed) { t.passed = true; Store.addXP(100); setTimeout(() => FX.confetti(220), 300); }
          Store.save(); App.checkAchievements();
          return res.score >= 80 ? `<div class="cert" style="--c:${L.color}"><div class="cert-t">Сертифика́т</div><div class="cert-l">${level}</div><div>${esc(Store.settings().name || 'Uczeń')} ukończył(a) poziom <b>${esc(L.name)}</b></div><div class="small muted">${U.fmtDate(Date.now())}</div></div>` : `<div class="fin-note">Brakuje ${80 - res.score} pp. Powtórz lekcje, w których się pomyliłeś, i spróbuj ponownie.</div>`;
        }
      });
      App.render();
    };
  });

  function buildTest(level) {
    const tasks = [];
    if (level === 'A0') {
      U.sample(C.letters, 8).forEach(l => {
        const ds = U.sample(C.letters.filter(x => x.sound !== l.sound), 3);
        const opts = U.shuffle([l, ...ds]);
        tasks.push({ type: 'mc', label: 'Jak czytamy tę literę?', prompt: { ru: l.up + ' ' + l.low }, options: opts.map(o => o.sound), correct: opts.indexOf(l), reveal: { ru: l.ex, pl: l.exPl, say: l.ex, exp: l.tip }, xp: 4 });
      });
      const words = Object.values(RU.readingWords).flat().map(s => s.split('|'));
      U.sample(words, 6).forEach(([ru, pl]) => {
        const ds = U.sample(words.filter(w => w[0] !== ru), 3);
        const opts = U.shuffle([[ru, pl], ...ds]);
        tasks.push({ type: 'mc', label: 'Jak się to czyta?', prompt: { ru }, options: opts.map(o => Phon.transcribe(o[0])), correct: opts.findIndex(o => o[0] === ru), reveal: { ru, pl }, xp: 4 });
      });
      U.sample(C.grammar.filter(g => g.level === 'A0').flatMap(g => g.questions), 6).forEach(q => tasks.push(Ex.quiz(q)));
      return U.shuffle(tasks);
    }
    const gq = C.grammar.filter(g => g.level === level).flatMap(g => g.questions);
    U.sample(gq, 11).forEach(q => tasks.push(Ex.quiz(q)));
    const ws = C.words.filter(w => w.level === level);
    U.sample(ws, 8).forEach((w, i) => tasks.push((i % 2 ? Ex.mcPlRu : Ex.mcRuPl)(w)));
    const ss = C.sentences.filter(s => s.level === level);
    U.sample(ss, 4).forEach((s, i) => tasks.push((i % 2 ? Ex.sentListen : Ex.sentChoose)(s)));
    const tq = C.texts.filter(t => t.level === level).flatMap(t => t.questions.map(q => ({ ...q, t })));
    U.sample(tq, 2).forEach(q => {
      const opts = U.shuffle(q.opts);
      tasks.push({ type: 'mc', label: `📖 Czytanka „${U.strip(q.t.title)}”`, prompt: { q: q.q }, options: opts, correct: opts.indexOf(q.correct), reveal: { ru: q.correct, pl: '' }, xp: 5 });
    });
    return U.shuffle(tasks);
  }
})();
