/* Zdania i czytanki */
(function () {
  const esc = U.esc;

  /* ---------- Zdania ---------- */
  App.route('/phrases', view => {
    const due = Store.dueCount('s:');
    view.innerHTML = App.header({ title: 'Zdania i zwroty', back: '#/more', sub: `${C.sentences.length} zdań z nagraniem i wymową` }) + `
      <section class="grid2">
        <button class="action-tile hot" data-go="review">${U.icon('brain')}<b>Powtórka zdań</b><span>${due ? due + ' czeka' : 'brak zaległych'}</span></button>
        <button class="action-tile" data-go="listen">${U.icon('vol')}<b>Trening słuchania</b><span>losowe zdania</span></button>
      </section>` +
      C.LEVELS.filter(L => C.phraseSets.some(p => p.level === L.id)).map(L => `
        <section class="level-block">
          <div class="lb-head">${App.levelChip(L.id)}<h2>${L.name}</h2></div>
          <div class="topic-grid">${C.phraseSets.filter(p => p.level === L.id).map(p => {
            const pr = C.unitProgress({ kind: 'phrases', id: p.id });
            return `<a class="topic ${pr >= 1 ? 'done' : ''}" href="#/phrases/${p.id}" style="--c:${L.color}"><span class="t-ico">${p.icon}</span><span class="t-title">${esc(p.title)}</span><span class="t-meta">${p.list.length} zdań</span>${App.bar(pr, L.color)}</a>`;
          }).join('')}</div>
        </section>`).join('');
    view.onclick = e => {
      const g = e.target.closest('[data-go]'); if (!g) return;
      if (g.dataset.go === 'review') Sessions.review('s:');
      if (g.dataset.go === 'listen') Sessions.listening();
    };
  });

  App.route('/phrases/:id', (view, id) => {
    const p = C.phraseById[id]; if (!p) return App.go('#/phrases');
    const r = Store.state.phrases[id];
    view.innerHTML = App.header({ title: `${p.icon} ${esc(p.title)}`, back: '#/phrases', sub: `${App.levelChip(p.level)} ${p.list.length} zdań${r ? ` · najlepiej ${r.best}%` : ''}` }) + `
      <section class="card hero-topic">
        <button class="btn primary big glow" data-m="mix">🎯 Ćwicz zdania</button>
        <div class="mode-row tight">
          <button class="mode" data-m="build">🧱<span>Układanie</span></button>
          <button class="mode" data-m="listen">🎧<span>Słuchanie</span></button>
          <button class="mode" data-m="dictation">✍️<span>Dyktando</span></button>
          <button class="mode" data-m="play">▶️<span>Odsłuch</span></button>
          <button class="mode" data-m="hide">🙈<span>Ukryj PL</span></button>
        </div>
      </section>
      <section class="card list sentences">${p.list.map(s => `
        <div class="sent" data-say="${esc(U.strip(s.ru))}">
          <button class="ic-btn spk">${U.icon('vol')}</button>
          <div class="s-main">
            <div class="s-ru">${esc(App.stressView(s.ru))}</div>
            ${App.settings().showTranscr ? `<div class="s-tr">[${App.trHTML(s.ru)}]</div>` : ''}
            <div class="s-pl">${esc(s.pl)}</div>
          </div>
          <span class="dot ${Store.card(s.id) ? 'review' : 'new'}"></span>
        </div>`).join('')}</section>`;
    view.onclick = e => {
      const m = e.target.closest('[data-m]'); if (!m) return;
      const mode = m.dataset.m;
      if (mode === 'hide') { U.$('.sentences', view).classList.toggle('hide-pl'); m.classList.toggle('on'); return; }
      if (mode === 'play') {
        const rows = U.$$('.sent', view);
        if (m.classList.contains('playing')) { TTS.stop(); m.classList.remove('playing'); rows.forEach(x => x.classList.remove('speaking')); return; }
        m.classList.add('playing');
        TTS.speakList(p.list.map(s => s.ru), { gap: 1200, onItem: i => { rows.forEach(x => x.classList.remove('speaking')); rows[i].classList.add('speaking'); rows[i].scrollIntoView({ block: 'center', behavior: 'smooth' }); }, onEnd: () => { m.classList.remove('playing'); rows.forEach(x => x.classList.remove('speaking')); } });
        return;
      }
      Sessions.phraseSet(id, mode);
    };
  });

  /* ---------- Czytanki ---------- */
  App.route('/texts', view => {
    view.innerHTML = App.header({ title: 'Czytanki', back: '#/more', sub: `${C.texts.length} tekstów z nagraniem, słowniczkiem i pytaniami` }) +
      C.LEVELS.filter(L => C.texts.some(t => t.level === L.id)).map(L => `
        <section class="level-block">
          <div class="lb-head">${App.levelChip(L.id)}<h2>${L.name}</h2></div>
          <div class="text-list">${C.texts.filter(t => t.level === L.id).map(t => {
            const r = Store.state.texts[t.id];
            const words = t.ru.split(/\s+/).length;
            return `<a class="text-card ${r && r.done ? 'done' : ''}" href="#/text/${t.id}" style="--c:${L.color}">
              <span class="tc-ico">${t.icon}</span>
              <span class="tc-body"><b>${esc(App.stressView(t.title))}</b><span class="muted small">${words} słów · ${t.questions.length} pytań${r ? ` · ${r.best}%` : ''}</span></span>
              ${r && r.done ? U.icon('check') : ''}
            </a>`;
          }).join('')}</div>
        </section>`).join('');
  });

  App.route('/text/:id', (view, id) => {
    const t = C.textById[id]; if (!t) return App.go('#/texts');
    const r = Store.state.texts[id];
    const sentences = t.paras.map(p => p.match(/[^.!?…]+[.!?…»]*\s*/g) || [p]);
    let si = 0;
    view.innerHTML = App.header({ title: `${t.icon} ${esc(App.stressView(t.title))}`, back: '#/texts', sub: `${App.levelChip(t.level)} czytanka` }) + `
      <section class="reader-bar card">
        <button class="btn primary" data-r="play">${U.icon('play')} Czytaj na głos</button>
        <button class="btn ghost" data-r="slow">🐢 Wolno</button>
        <button class="chip" data-r="tr">Transkrypcja</button>
        <button class="chip" data-r="pl">Tłumaczenie</button>
      </section>
      <article class="card reader">
        ${t.paras.map((p, pi) => `<p class="rd-p">${sentences[pi].map(s => `<span class="rd-s" data-si="${si++}" data-say="${esc(U.strip(s))}">${esc(App.stressView(s))}</span>`).join('')}</p>
          <p class="rd-tr" hidden>[${App.trHTML(p)}]</p>
          <p class="rd-pl" hidden>${esc(t.parasPl[pi] || '')}</p>`).join('')}
      </article>
      <section class="card">
        <h3>📒 Słowniczek</h3>
        ${t.gloss.map(([ru, pl]) => `<div class="ex compact" data-say="${esc(U.strip(ru))}"><button class="ic-btn spk">${U.icon('vol')}</button><div><span class="ex-ru">${esc(App.stressView(ru))}</span> <span class="ex-tr">[${App.trHTML(ru)}]</span> <span class="ex-pl">– ${esc(pl)}</span></div></div>`).join('')}
      </section>
      <section class="card center-card">
        <h3>❓ Sprawdź zrozumienie</h3>
        <p class="muted">${t.questions.length} pytań po rosyjsku do tekstu.${r ? ` Najlepszy wynik: <b>${r.best}%</b>` : ''}</p>
        <button class="btn primary big glow" data-r="quiz">Odpowiedz na pytania</button>
      </section>`;
    const spans = U.$$('.rd-s', view);
    view.onclick = async e => {
      const b = e.target.closest('[data-r]');
      if (!b) return;
      const act = b.dataset.r;
      if (act === 'tr' || act === 'pl') { b.classList.toggle('on'); U.$$('.rd-' + act, view).forEach(x => (x.hidden = !b.classList.contains('on'))); return; }
      if (act === 'play' || act === 'slow') {
        const playing = view.dataset.playing;
        TTS.stop(); spans.forEach(s => s.classList.remove('speaking'));
        if (playing) { delete view.dataset.playing; U.$('[data-r="play"]', view).innerHTML = `${U.icon('play')} Czytaj na głos`; return; }
        view.dataset.playing = '1';
        U.$('[data-r="play"]', view).innerHTML = `${U.icon('stop')} Zatrzymaj`;
        TTS.speakList(spans.map(s => s.dataset.say), {
          slow: act === 'slow', gap: 250,
          onItem: i => { spans.forEach(s => s.classList.remove('speaking')); spans[i].classList.add('speaking'); spans[i].scrollIntoView({ block: 'center', behavior: 'smooth' }); },
          onEnd: () => { delete view.dataset.playing; spans.forEach(s => s.classList.remove('speaking')); const pb = U.$('[data-r="play"]', view); if (pb) pb.innerHTML = `${U.icon('play')} Czytaj na głos`; }
        });
        return;
      }
      if (act === 'quiz') {
        const tasks = U.shuffle(t.questions).map(q => {
          const opts = U.shuffle(q.opts);
          return { type: 'mc', key: q.q, label: 'Pytanie do tekstu', prompt: { q: q.q }, options: opts, correct: opts.indexOf(q.correct), reveal: { ru: q.q.replace(/\?$/, '') + ' — ' + q.correct + '.', say: q.q + ' ' + q.correct + '.', pl: '' }, xp: 6 };
        });
        await Ex.run({
          title: `📖 ${U.strip(t.title)}`, tasks, requeue: false,
          onFinish: res => { const rr = Store.result('texts', id, res.score, { pass: 60 }); if (rr.done && rr.tries === 1) Store.addXP(30); App.checkAchievements(); return ''; }
        });
        App.render();
      }
    };
  });
})();
