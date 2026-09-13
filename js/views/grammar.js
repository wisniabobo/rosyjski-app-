/* Gramatyka: podręcznik z ćwiczeniami */
(function () {
  const esc = U.esc;

  App.route('/grammar', view => {
    const S = Store.state;
    const doneN = C.grammar.filter(g => S.grammar[g.id] && S.grammar[g.id].done).length;
    view.innerHTML = App.header({ title: 'Gramatyka', sub: `${doneN}/${C.grammar.length} lekcji ukończonych` }) +
      `<section class="search-box">${U.icon('search')}<input id="gsearch" placeholder="Szukaj: celownik, aspekt, który…" /></section>` +
      C.LEVELS.map(L => {
        const list = C.grammar.filter(g => g.level === L.id);
        return `<section class="level-block" data-level="${L.id}">
          <div class="lb-head">${App.levelChip(L.id)}<div><h2>${L.name}</h2><div class="muted small">${list.filter(g => S.grammar[g.id] && S.grammar[g.id].done).length}/${list.length} lekcji</div></div></div>
          <div class="g-list">${list.map((g, i) => {
            const r = S.grammar[g.id];
            return `<a class="g-item ${r && r.done ? 'done' : ''}" href="#/grammar/${g.id}" data-text="${esc((g.title + ' ' + g.subtitle).toLowerCase())}" style="--c:${L.color}">
              <span class="g-num">${r && r.done ? U.icon('check') : i + 1}</span>
              <span class="g-txt"><b>${esc(g.title)}</b><span>${esc(App.stressView(g.subtitle))}</span></span>
              ${r ? `<span class="g-score">${r.best}%</span>` : ''}
            </a>`;
          }).join('')}</div>
        </section>`;
      }).join('');
    U.$('#gsearch', view).addEventListener('input', e => {
      const q = U.strip(e.target.value.toLowerCase().trim());
      U.$$('.g-item', view).forEach(a => { a.hidden = q && !U.strip(a.dataset.text).includes(q); });
      U.$$('.level-block', view).forEach(b => { b.hidden = U.$$('.g-item', b).every(a => a.hidden); });
    });
  });

  App.route('/grammar/:id', (view, id) => {
    const g = C.grammarById[id]; if (!g) return App.go('#/grammar');
    const list = C.grammar;
    const idx = list.indexOf(g);
    const prev = list[idx - 1], next = list[idx + 1];
    const r = Store.state.grammar[id];
    view.innerHTML = App.header({ title: esc(g.title), back: '#/grammar', sub: `${App.levelChip(g.level)} ${esc(App.stressView(g.subtitle))}` }) + `
      <article class="card lesson">${U.markup(g.body)}</article>
      <section class="card center-card">
        <h3>🎯 Ćwiczenia do lekcji</h3>
        <p class="muted">${g.questions.length} zadań. Po każdej odpowiedzi usłyszysz całe zdanie i zobaczysz jego wymowę. Zaliczenie od 70%.</p>
        ${r ? `<p>Najlepszy wynik: <b>${r.best}%</b> ${r.done ? '✅' : ''}</p>` : ''}
        <button class="btn primary big glow" data-go="quiz">${r ? 'Ćwicz ponownie' : 'Rozpocznij ćwiczenia'}</button>
      </section>
      <nav class="lesson-nav">
        ${prev ? `<a class="btn ghost" href="#/grammar/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}
        ${next ? `<a class="btn ghost" href="#/grammar/${next.id}">${esc(next.title)} →</a>` : ''}
      </nav>`;
    view.onclick = async e => {
      if (!e.target.closest('[data-go="quiz"]')) return;
      const tasks = U.shuffle(g.questions).map(q => Ex.quiz(q));
      await Ex.run({
        title: `📘 ${g.title}`, tasks, requeue: true,
        onFinish: res => {
          const rr = Store.result('grammar', id, res.score);
          if (rr.done && rr.tries === 1) Store.addXP(30);
          if (res.score === 100) Store.unlock('perfect');
          App.checkAchievements();
          return rr.done ? `<div class="fin-note">Lekcja zaliczona ✅ ${next ? `Następna: <a href="#/grammar/${next.id}">${esc(next.title)}</a>` : ''}</div>` : '<div class="fin-note">Przeczytaj lekcję jeszcze raz i spróbuj ponownie – do zaliczenia potrzeba 70%.</div>';
        }
      });
      App.render();
    };
  });
})();
