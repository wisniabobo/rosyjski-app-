/* Alfabet: litery, czytanie, ćwiczenia */
(function () {
  const esc = U.esc;

  function letterModal(l) {
    const el = document.createElement('div');
    el.className = 'modal show';
    el.innerHTML = `<div class="modal-card letter-card">
      <button class="ic-btn close" data-x>${U.icon('close')}</button>
      <div class="lc-letters"><span class="lc-print">${l.up}${l.low}</span><span class="lc-cursive">${l.up}${l.low}</span></div>
      <div class="lc-name say" data-say="${esc(U.strip(l.name))}">nazwa: <b>${esc(l.name)}</b></div>
      <div class="lc-sound">czytamy: <b>${esc(l.sound)}</b></div>
      <p>${esc(l.tip)}</p>
      <div class="ex" data-say="${esc(U.strip(l.ex))}"><button class="ic-btn spk">${U.icon('vol')}</button><div><div class="ex-ru">${esc(App.stressView(l.ex))}</div><span class="ex-tr">[${App.trHTML(l.ex)}]</span><div class="ex-pl">${esc(l.exPl)}</div></div></div>
    </div>`;
    document.body.appendChild(el);
    el.onclick = e => { if (e.target === el || e.target.closest('[data-x]')) el.remove(); };
    setTimeout(() => TTS.speak(l.ex), 250);
  }

  App.route('/alphabet', view => {
    view.innerHTML = App.header({ title: 'Alfabet – кири́ллица', back: '#/more', sub: '33 litery · dotknij, aby usłyszeć' }) + `
      <section class="seg-row"><button class="chip on" data-font="print">Druk</button><button class="chip" data-font="cursive">Kursywa (pismo)</button></section>
      <section class="abc-grid">${C.letters.map((l, i) => `<button class="abc-tile g${l.group}" data-l="${i}"><span class="at-l">${l.up}${l.low}</span><span class="at-s">${esc(l.sound.split(' ')[0])}</span></button>`).join('')}</section>
      <section class="legend">${C.abcUnits.map(g => `<span class="lg g${g.id}"><i></i>${esc(g.title)}</span>`).join('')}</section>
      <h2 class="sec-title">Lekcje alfabetu</h2>
      <section class="topic-grid">${C.abcUnits.map(g => {
        const r = Store.state.alphabet['abc-' + g.id];
        return `<a class="topic ${r && r.done ? 'done' : ''}" href="#/alphabet/${g.id}"><span class="t-ico">${g.icon}</span><span class="t-title">${g.id}. ${esc(g.title)}</span><span class="t-meta">${g.letters.map(l => l.up).join(' ')}</span>${App.bar(r ? r.best / 100 : 0)}</a>`;
      }).join('')}</section>
      <h2 class="sec-title">Sylaby – rozgrzewka</h2>
      <section class="syl-grid">${RU.syllables.map(s => `<span class="syl say" data-say="${s}">${s}</span>`).join('')}</section>`;
    view.onclick = e => {
      const t = e.target.closest('[data-l]'); if (t) return letterModal(C.letters[+t.dataset.l]);
      const f = e.target.closest('[data-font]');
      if (f) { U.$$('[data-font]', view).forEach(b => b.classList.toggle('on', b === f)); U.$('.abc-grid', view).classList.toggle('cursive', f.dataset.font === 'cursive'); }
    };
  });

  App.route('/alphabet/:g', (view, gid) => {
    const g = C.abcUnits.find(x => x.id === +gid); if (!g) return App.go('#/alphabet');
    const known = C.letters.filter(l => l.group <= g.id).map(l => l.low);
    const syl = RU.syllables.filter(s => [...s].every(ch => known.includes(ch)));
    const r = Store.state.alphabet['abc-' + g.id];
    view.innerHTML = App.header({ title: `${g.icon} ${esc(g.title)}`, back: '#/alphabet', sub: esc(g.desc) }) + `
      <section class="letters">${g.letters.map(l => `
        <div class="card letter-row">
          <div class="lr-big say" data-say="${esc(U.strip(l.name))}"><span>${l.up}${l.low}</span><span class="lc-cursive small">${l.up}${l.low}</span></div>
          <div class="lr-body">
            <div><b class="lr-sound">${esc(l.sound)}</b> <span class="muted small">nazwa: ${esc(l.name)}</span></div>
            <p class="small">${esc(l.tip)}</p>
            <div class="ex compact" data-say="${esc(U.strip(l.ex))}"><button class="ic-btn spk">${U.icon('vol')}</button><div><span class="ex-ru">${esc(App.stressView(l.ex))}</span> <span class="ex-tr">[${App.trHTML(l.ex)}]</span> <span class="ex-pl">– ${esc(l.exPl)}</span></div></div>
          </div>
        </div>`).join('')}
      </section>
      <h2 class="sec-title">Przeczytaj sam 👀</h2>
      <p class="muted small">Najpierw spróbuj przeczytać, potem dotknij, żeby sprawdzić wymowę i znaczenie.</p>
      <section class="read-grid">${g.reading.map(([ru, pl]) => `<button class="read-w" data-rw="${esc(ru)}" data-pl="${esc(pl)}"><span class="rw-ru">${esc(App.stressView(ru))}</span><span class="rw-ans"></span></button>`).join('')}</section>
      ${syl.length ? `<h2 class="sec-title">Sylaby</h2><section class="syl-grid">${syl.map(s => `<span class="syl say" data-say="${s}">${s}</span>`).join('')}</section>` : ''}
      <section class="sticky-cta"><button class="btn primary big glow" data-go="practice">🎯 Ćwicz tę grupę ${r ? `(najlepiej: ${r.best}%)` : ''}</button></section>`;
    view.onclick = e => {
      const rw = e.target.closest('[data-rw]');
      if (rw) { U.$('.rw-ans', rw).innerHTML = `[${App.trHTML(rw.dataset.rw)}] · ${esc(rw.dataset.pl)}`; rw.classList.add('open'); TTS.speak(rw.dataset.rw); return; }
      if (e.target.closest('[data-go="practice"]')) practice(g);
    };
  });

  async function practice(g) {
    const pool = C.letters.filter(l => l.group <= g.id);
    const tasks = [];
    g.letters.forEach(l => {
      const ds = U.sample(pool.filter(x => x.sound !== l.sound), 3);
      const opts = U.shuffle([l, ...ds]);
      tasks.push({ type: 'mc', label: 'Jak czytamy tę literę?', prompt: { ru: l.up + ' ' + l.low }, options: opts.map(o => o.sound), correct: opts.indexOf(l), reveal: { ru: l.ex, pl: l.exPl + ' – przykład z literą ' + l.up, exp: l.tip }, xp: 3 });
    });
    U.shuffle(g.letters).forEach(l => {
      const ds = U.sample(pool.filter(x => x !== l), 3);
      const opts = U.shuffle([l, ...ds]);
      tasks.push({ type: 'mc', label: 'Która to litera?', prompt: { pl: `„${l.sound}”` }, options: opts.map(o => o.up + ' ' + o.low), correct: opts.indexOf(l), reveal: { ru: l.ex, pl: l.exPl }, xp: 3 });
    });
    const words = Object.entries(RU.readingWords).filter(([k]) => +k <= g.id).flatMap(([, v]) => v).map(s => s.split('|'));
    const own = g.reading;
    U.sample(own, Math.min(6, own.length)).forEach(([ru, pl]) => {
      const ds = U.sample(words.filter(w => w[0] !== ru), 3);
      const opts = U.shuffle([[ru, pl], ...ds]);
      tasks.push({ type: 'mc', label: 'Jak się to czyta?', prompt: { ru }, options: opts.map(o => Phon.transcribe(o[0])), correct: opts.findIndex(o => o[0] === ru), reveal: { ru, pl }, xp: 4 });
    });
    U.sample(own, Math.min(4, own.length)).forEach(([ru, pl]) => {
      const ds = U.sample(words.filter(w => w[0] !== ru), 3);
      const opts = U.shuffle([[ru, pl], ...ds]);
      tasks.push({ type: 'mc', label: '🎧 Które słowo słyszysz?', prompt: { audio: ru }, options: opts.map(o => o[0]), correct: opts.findIndex(o => o[0] === ru), reveal: { ru, pl }, xp: 4 });
    });
    if (g.letters.length >= 4) tasks.push({ type: 'match', label: 'Połącz literę z dźwiękiem', pairs: U.sample(g.letters, Math.min(5, g.letters.length)).map(l => ({ id: l.up, ru: l.up + l.low, pl: l.sound })), xp: 6, noRequeue: true });
    await Ex.run({
      title: `Alfabet: ${g.title}`, tasks, requeue: true,
      onFinish: res => { const r = Store.result('alphabet', 'abc-' + g.id, res.score, { pass: 70 }); if (r.done) Store.addXP(20); App.checkAchievements(); return ''; }
    });
    App.render();
  }
})();
