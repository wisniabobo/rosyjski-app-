/* Słówka: tematy, nauka, powtórki SRS + wspólne sesje */
(function () {
  const esc = U.esc;

  const Sessions = {
    // Nauka nowych słów z tematu
    async learnTopic(topicId, size) {
      const t = C.topicById[topicId];
      size = size || App.settings().sessionSize;
      const fresh = t.ids.filter(id => Store.isNew(id)).slice(0, size).map(id => C.wordById[id]);
      if (!fresh.length) { FX.toast('Wszystkie słowa z tego tematu są już w nauce – czas na powtórkę! 🔁'); return Sessions.practiceTopic(topicId); }
      const mistakes = {};
      const mark = id => (ok) => { if (!ok) mistakes[id] = (mistakes[id] || 0) + 1; };
      const tasks = [];
      // blok 1: prezentacja + rozpoznanie parami
      for (let i = 0; i < fresh.length; i += 3) {
        const chunk = fresh.slice(i, i + 3);
        chunk.forEach(w => tasks.push({ type: 'intro', word: w, key: w.id }));
        chunk.forEach(w => tasks.push(Ex.mcRuPl(w, mark(w.id))));
      }
      // blok 2: słuchanie i produkcja
      U.shuffle(fresh).forEach(w => tasks.push(Ex.listen(w, mark(w.id))));
      U.shuffle(fresh).forEach(w => tasks.push(Ex.mcPlRu(w, mark(w.id))));
      if (fresh.length >= 4) tasks.push(Ex.match(U.sample(fresh, Math.min(5, fresh.length)), (id, ok) => { if (!ok) mistakes[id] = (mistakes[id] || 0) + 1; }));
      U.shuffle(fresh).filter(Ex.stressable).slice(0, 3).forEach(w => tasks.push(Ex.stress(w, mark(w.id))));
      U.shuffle(fresh).slice(0, Math.ceil(fresh.length * 0.6)).forEach(w => tasks.push(Ex.typeRu(w, mark(w.id))));
      if (Speech.supported && App.settings().speakTasks) U.sample(fresh, 2).forEach(w => tasks.push(Ex.speak(w, Sessions.speakHook)));
      const res = await Ex.run({
        title: `${t.icon} ${t.title} – nowe słowa`, tasks, requeue: true,
        onFinish: r => {
          fresh.forEach(w => Store.learnFinish(w.id, mistakes[w.id] || 0));
          Store.addXP(20);
          App.checkAchievements();
          return `<div class="fin-note">Nauczone słowa trafiły do powtórek. Wrócą w idealnym momencie, zanim je zapomnisz 🧠</div>`;
        }
      });
      App.render();
      return res;
    },

    // Powtórka zaległych kart (słowa i zdania)
    async review(prefix = 'w:', limit = 30) {
      const ids = Store.due(prefix, limit);
      if (!ids.length) { FX.toast('Brak powtórek na teraz 🎉 Wróć później albo naucz się nowych słów.'); return; }
      const tasks = ids.map(id => {
        const grade = ok => Store.grade(id, ok ? 3 : 1);
        if (id.startsWith('s:')) {
          const s = C.sentenceById[id]; if (!s) return null;
          return U.pick([Ex.sentBuild, Ex.sentListen, Ex.sentChoose, Ex.sentMeaning])(s, grade);
        }
        const w = C.wordById[id]; if (!w) return null;
        const c = Store.card(id);
        const strong = c && c.ivl >= 7;
        const pool = strong ? [Ex.typeRu, Ex.listen, Ex.mcPlRu, Ex.listenType] : [Ex.mcRuPl, Ex.mcPlRu, Ex.listen, Ex.typeRu];
        if (Ex.stressable(w)) pool.push(Ex.stress);
        if (U.strip(w.ru).length > 22) return U.pick([Ex.mcRuPl, Ex.mcPlRu, Ex.listen])(w, grade);
        return U.pick(pool)(w, grade);
      }).filter(Boolean);
      await Ex.run({ title: '🔁 Powtórka', tasks, requeue: false, onFinish: () => { App.checkAchievements(); return ''; } });
      App.render();
    },

    // Ćwiczenie tematu (wybrany tryb)
    async practiceTopic(topicId, mode = 'mix') {
      const t = C.topicById[topicId];
      let words = t.ids.filter(id => !Store.isNew(id)).map(id => C.wordById[id]);
      if (words.length < 4) words = t.ids.map(id => C.wordById[id]);
      words = U.sample(words, Math.min(15, words.length));
      const grade = id => ok => { if (!Store.isNew(id)) Store.grade(id, ok ? 3 : 1); };
      let tasks;
      if (mode === 'flash') tasks = words.map(w => Ex.flash(w, ok => { if (!Store.isNew(w.id)) Store.grade(w.id, ok ? 3 : 1); }, Math.random() < 0.5 ? 'pl' : 'ru'));
      else if (mode === 'match') { tasks = []; for (let i = 0; i + 3 <= words.length; i += 5) tasks.push(Ex.match(words.slice(i, i + 5))); }
      else if (mode === 'type') tasks = words.map(w => Ex.typeRu(w, grade(w.id)));
      else if (mode === 'listen') tasks = words.map(w => U.pick([Ex.listen, Ex.listenType])(w, grade(w.id)));
      else if (mode === 'stress') { const st = t.ids.map(id => C.wordById[id]).filter(Ex.stressable); tasks = U.sample(st, Math.min(15, st.length)).map(w => Ex.stress(w, Sessions.stressHook)); }
      else if (mode === 'speak') tasks = words.slice(0, 8).map(w => Ex.speak(w, Sessions.speakHook));
      else tasks = words.map(w => U.pick([Ex.mcRuPl, Ex.mcPlRu, Ex.listen, Ex.typeRu])(w, grade(w.id)));
      if (!tasks.length) { FX.toast('W tym temacie nie ma słów do tego ćwiczenia.'); return; }
      if (mode === 'flash') {
        await Ex.run({ title: `${t.icon} ${t.title} – karty`, tasks, requeue: false, retryWrong: false });
      } else await Ex.run({ title: `${t.icon} ${t.title}`, tasks, requeue: mode !== 'match' });
      App.render();
    },

    stressHook(ok) { if (!ok) return; const S = Store.state; S.stressHits = (S.stressHits || 0) + 1; if (S.stressHits >= 50) Store.unlock('stress50'); },
    speakHook(ok) { if (!ok) return; const S = Store.state; S.speakOk = (S.speakOk || 0) + 1; Store.unlock('speak1'); },

    // Mówienie: słowa i zdania już poznane (albo z bieżącego poziomu)
    async speaking() {
      if (!Speech.supported) { FX.toast('🎤 Rozpoznawanie mowy działa w Chrome (Android/komputer) i Safari (iPhone).'); return; }
      const next = C.nextUnit();
      const lvl = next && next.level !== 'A0' ? next.level : 'A1';
      let words = C.words.filter(w => !Store.isNew(w.id) && U.strip(w.ru).length < 25);
      if (words.length < 5) words = C.words.filter(w => w.level === lvl);
      let sents = C.sentences.filter(s => Store.card(s.id));
      if (sents.length < 3) sents = C.sentences.filter(s => s.level === lvl);
      const tasks = [...U.sample(words, 5), ...U.sample(sents, 4)].map(x => Ex.speak(x, Sessions.speakHook));
      await Ex.run({ title: '🎤 Trening mówienia', tasks, requeue: false, retryWrong: false, onFinish: () => { App.checkAchievements(); return '<div class="fin-note">Mów codziennie choć kilka zdań – wymowa szybko staje się naturalna.</div>'; } });
      App.render();
    },

    async grammarReview() {
      const S = Store.state;
      let lessons = C.grammar.filter(g => S.grammar[g.id]);
      if (!lessons.length) lessons = C.grammar.slice(0, 4);
      const weak = lessons.filter(g => !S.grammar[g.id] || S.grammar[g.id].best < 90);
      const pool = [...weak, ...weak, ...lessons].flatMap(g => g.questions.map(q => ({ q, g })));
      const picked = [...new Map(U.shuffle(pool).map(x => [x.q.q, x])).values()].slice(0, 15);
      await Ex.run({ title: '🔁 Trening gramatyki', tasks: picked.map(x => { const t = Ex.quiz(x.q); t.label = '📘 ' + x.g.title; return t; }), requeue: true });
      App.render();
    },

    hardWords() {
      return Object.entries(Store.state.cards).filter(([id, c]) => id.startsWith('w:') && C.wordById[id] && ((c.lapses || 0) >= 1 || (c.bad || 0) > (c.ok || 0)))
        .sort((a, b) => ((b[1].lapses || 0) + (b[1].bad || 0)) - ((a[1].lapses || 0) + (a[1].bad || 0))).map(([id]) => C.wordById[id]);
    },

    // Szybka mieszanka: powtórki + kilka nowych
    async quick() {
      const due = Store.due('w:', 12);
      const next = C.nextUnit();
      if (!due.length && (!next || next.kind !== 'vocab')) {
        const topic = C.topics.find(t => t.ids.some(id => Store.isNew(id)));
        if (topic) return Sessions.learnTopic(topic.id, 6);
      }
      if (!due.length && next && next.kind === 'vocab') return Sessions.learnTopic(next.id, 6);
      return Sessions.review('w:', 15);
    },

    // Zdania z zestawu
    async phraseSet(setId, mode = 'mix') {
      const set = C.phraseById[setId];
      const list = U.sample(set.list, Math.min(12, set.list.length));
      const grade = s => ok => Store.grade(s.id, ok ? 3 : 1);
      const makers = { mix: [Ex.sentMeaning, Ex.sentListen, Ex.sentChoose, Ex.sentBuild, Ex.sentBuild], build: [Ex.sentBuild], listen: [Ex.sentListen], dictation: [Ex.sentDictation] }[mode];
      const tasks = list.map((s, i) => (mode === 'mix' && i >= list.length - 2 ? Ex.sentDictation : U.pick(makers))(s, grade(s)));
      await Ex.run({
        title: `${set.icon} ${set.title}`, tasks, requeue: true,
        onFinish: r => { const rr = Store.result('phrases', setId, r.score); if (rr.done) Store.addXP(15); App.checkAchievements(); return ''; }
      });
      App.render();
    },

    // Trening słuchania z losowych zdań z opanowanych poziomów
    async listening() {
      const levels = C.LEVELS.filter(L => L.id !== 'A0' && (L.id === 'A1' || C.units[L.id].some(u => C.unitDone(u)))).map(L => L.id);
      const pool = C.sentences.filter(s => levels.includes(s.level));
      const list = U.sample(pool, 10);
      const tasks = list.map((s, i) => (i % 3 === 2 ? Ex.sentDictation : Ex.sentListen)(s, ok => { if (Store.card(s.id)) Store.grade(s.id, ok ? 3 : 1); }));
      await Ex.run({ title: '🎧 Trening słuchania', tasks, requeue: false });
      App.render();
    }
  };
  window.Sessions = Sessions;

  function wordRow(w) {
    const c = Store.card(w.id);
    const st = !c ? 'new' : c.s === 'review' && c.ivl >= 21 ? 'master' : c.s === 'review' ? 'review' : 'learn';
    const label = { new: 'nowe', learn: 'w nauce', review: 'powtarzane', master: 'opanowane' }[st];
    return `<div class="word-row" data-word="${esc(w.id)}" data-say="${esc(U.strip(w.ru.split(' / ')[0]))}">
      <button class="ic-btn spk" aria-label="Posłuchaj">${U.icon('vol')}</button>
      <div class="wr-main">
        <div class="wr-ru">${esc(App.stressView(w.ru))}</div>
        ${App.settings().showTranscr ? `<div class="wr-tr">[${App.trHTML(w.ru)}]</div>` : ''}
        <div class="wr-pl">${esc(w.pl)}${w.note ? ` <span class="wr-note">· ${esc(w.note)}</span>` : ''}</div>
      </div>
      <span class="dot ${st}" title="${label}"></span>
      <button class="ic-btn fav ${Store.state.fav[w.id] ? 'on' : ''}" data-fav="${esc(w.id)}" aria-label="Ulubione">${U.icon('star')}</button>
    </div>`;
  }
  window.wordRow = wordRow;

  // Lista tematów
  App.route('/vocab', view => {
    const due = Store.dueCount('w:');
    const cnt = Store.counts('w:');
    const favs = Object.keys(Store.state.fav).filter(id => C.wordById[id]);
    view.innerHTML = App.header({ title: 'Słówka', sub: `${C.words.length} słów · ${C.topics.length} tematów` }) + `
      <section class="grid2">
        <button class="action-tile hot" data-go="review">${U.icon('brain')}<b>Powtórki</b><span>${due ? due + ' do powtórzenia' : 'wszystko powtórzone ✓'}</span></button>
        <button class="action-tile" data-go="quick">${U.icon('bolt')}<b>Szybka sesja</b><span>5 minut nauki</span></button>
      </section>
      <section class="card stats-strip">
        <div><b>${cnt.learned}</b><span>w nauce</span></div>
        <div><b>${cnt.mastered}</b><span>opanowane</span></div>
        <div><b>${C.words.length - cnt.learned}</b><span>nowe</span></div>
        ${favs.length ? `<div><a href="#/fav"><b>${favs.length}</b><span>⭐ ulubione</span></a></div>` : ''}
        ${Sessions.hardWords().length ? `<div><a href="#/hard"><b>${Sessions.hardWords().length}</b><span>🧗 trudne</span></a></div>` : ''}
      </section>
      ${C.LEVELS.filter(L => L.id !== 'A0').map(L => {
        const topics = C.topics.filter(t => t.level === L.id);
        const st = C.stats().byLevel[L.id];
        return `<section class="level-block">
          <div class="lb-head">${App.levelChip(L.id)}<div><h2>${L.name}</h2><div class="muted small">${st.learned}/${st.total} słów</div></div></div>
          ${App.bar(st.learned / st.total, L.color)}
          <div class="topic-grid">${topics.map(t => {
            const n = t.ids.filter(id => !Store.isNew(id)).length;
            const pct = n / t.ids.length;
            return `<a class="topic ${pct >= 0.9 ? 'done' : ''}" href="#/topic/${t.id}" style="--c:${L.color}">
              <span class="t-ico">${t.icon}</span><span class="t-title">${esc(t.title)}</span>
              <span class="t-meta">${n}/${t.ids.length}</span>${App.bar(pct, L.color)}</a>`;
          }).join('')}</div>
        </section>`;
      }).join('')}`;
    view.onclick = e => {
      const g = e.target.closest('[data-go]'); if (!g) return;
      if (g.dataset.go === 'review') Sessions.review();
      if (g.dataset.go === 'quick') Sessions.quick();
    };
  });

  // Temat
  App.route('/topic/:id', (view, id) => {
    const t = C.topicById[id]; if (!t) return App.go('#/vocab');
    const words = t.ids.map(i => C.wordById[i]);
    const learned = words.filter(w => !Store.isNew(w.id)).length;
    const L = C.level(t.level);
    view.innerHTML = App.header({ title: `${t.icon} ${esc(t.title)}`, back: '#/vocab', sub: `${App.levelChip(t.level)} ${learned}/${words.length} słów w nauce` }) + `
      <section class="card hero-topic" style="--c:${L.color}">
        ${App.ring(learned / words.length, 84, 9, Math.round(learned / words.length * 100) + '%')}
        <div class="ht-body">
          <button class="btn primary big" data-m="learn">${learned < words.length ? '✨ Ucz się nowych słów' : '🔁 Utrwalaj temat'}</button>
          <div class="muted small">${learned < words.length ? `Sesja: ${Math.min(App.settings().sessionSize, words.length - learned)} nowych słów` : 'Wszystkie słowa są w systemie powtórek'}</div>
        </div>
      </section>
      <section class="mode-row">
        <button class="mode" data-m="flash">🃏<span>Karty</span></button>
        <button class="mode" data-m="match">🧩<span>Pary</span></button>
        <button class="mode" data-m="listen">🎧<span>Słuchanie</span></button>
        <button class="mode" data-m="type">⌨️<span>Pisanie</span></button>
        <button class="mode" data-m="stress">🎯<span>Akcent</span></button>
        ${Speech.supported ? '<button class="mode" data-m="speak">🎤<span>Mówienie</span></button>' : ''}
        <button class="mode" data-m="mix">🎲<span>Mieszane</span></button>
        <button class="mode" data-m="play">▶️<span>Odsłuch listy</span></button>
      </section>
      <section class="card list">${words.map(wordRow).join('')}</section>`;
    view.onclick = e => {
      const f = e.target.closest('[data-fav]');
      if (f) { f.classList.toggle('on', Store.toggleFav(f.dataset.fav)); return; }
      const m = e.target.closest('[data-m]'); if (!m) return;
      const mode = m.dataset.m;
      if (mode === 'learn') return learned < words.length ? Sessions.learnTopic(id) : Sessions.practiceTopic(id, 'mix');
      if (mode === 'play') {
        const rows = U.$$('.word-row', view);
        if (m.classList.contains('playing')) { TTS.stop(); m.classList.remove('playing'); rows.forEach(r => r.classList.remove('speaking')); return; }
        m.classList.add('playing');
        TTS.speakList(words.map(w => w.ru.split(' / ')[0]), { gap: 700, onItem: i => { rows.forEach(r => r.classList.remove('speaking')); rows[i].classList.add('speaking'); rows[i].scrollIntoView({ block: 'center', behavior: 'smooth' }); }, onEnd: () => { m.classList.remove('playing'); rows.forEach(r => r.classList.remove('speaking')); } });
        return;
      }
      Sessions.practiceTopic(id, mode);
    };
  });

  // Ulubione
  App.route('/fav', view => {
    const ids = Object.keys(Store.state.fav).filter(id => C.wordById[id]);
    const words = ids.map(id => C.wordById[id]);
    view.innerHTML = App.header({ title: '⭐ Ulubione słowa', back: '#/vocab', sub: words.length + ' słów' }) +
      (words.length >= 4 ? `<section class="mode-row"><button class="mode" data-m="flash">🃏<span>Karty</span></button><button class="mode" data-m="mix">🎲<span>Ćwicz</span></button></section>` : '') +
      `<section class="card list">${words.map(wordRow).join('') || '<p class="muted pad">Oznacz gwiazdką trudne słowa, aby ćwiczyć je osobno.</p>'}</section>`;
    view.onclick = async e => {
      const f = e.target.closest('[data-fav]'); if (f) { f.classList.toggle('on', Store.toggleFav(f.dataset.fav)); return; }
      const m = e.target.closest('[data-m]'); if (!m) return;
      const sample = U.sample(words, 15);
      const tasks = m.dataset.m === 'flash' ? sample.map(w => Ex.flash(w, ok => Store.grade(w.id, ok ? 3 : 1), 'pl')) : sample.map(w => U.pick([Ex.mcRuPl, Ex.mcPlRu, Ex.typeRu, Ex.listen])(w, ok => Store.grade(w.id, ok ? 3 : 1)));
      await Ex.run({ title: '⭐ Ulubione', tasks, requeue: m.dataset.m !== 'flash' });
      App.render();
    };
  });

  // Trudne słowa (z błędami)
  App.route('/hard', view => {
    const words = Sessions.hardWords();
    view.innerHTML = App.header({ title: '🧗 Trudne słowa', back: '#/vocab', sub: words.length + ' słów, w których robisz błędy' }) +
      (words.length ? `<section class="card hero-topic"><button class="btn primary big glow" data-m="go">Ćwicz trudne słowa</button></section>` : '') +
      `<section class="card list">${words.map(wordRow).join('') || '<p class="muted pad">Brak – świetnie Ci idzie! 🎉</p>'}</section>`;
    view.onclick = async e => {
      const f = e.target.closest('[data-fav]'); if (f) { f.classList.toggle('on', Store.toggleFav(f.dataset.fav)); return; }
      if (!e.target.closest('[data-m="go"]')) return;
      const grade = w => ok => Store.grade(w.id, ok ? 3 : 1);
      const tasks = words.slice(0, 15).flatMap(w => [Ex.typeRu(w, grade(w)), ...(Ex.stressable(w) && Math.random() < 0.4 ? [Ex.stress(w)] : [])]);
      await Ex.run({ title: '🧗 Trudne słowa', tasks: U.shuffle(tasks), requeue: true });
      App.render();
    };
  });
})();
