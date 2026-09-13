/* Silnik ćwiczeń – sesja z zadaniami, informacja zwrotna z wymową i nagraniem */
(function () {
  const PRAISE = ['Отли́чно!', 'Молоде́ц!', 'Пра́вильно!', 'Здо́рово!', 'Прекра́сно!', 'Так держа́ть!', 'Супер!', 'Великоле́пно!'];
  const PRAISE_PL = ['Świetnie!', 'Brawo!', 'Dobrze!', 'Super!', 'Pięknie!', 'Tak trzymaj!', 'Ekstra!', 'Wspaniale!'];
  const esc = U.esc;

  // Rosyjski tekst do przeczytania z pytania z luką
  function sayFromQuestion(q, correct) {
    if (q.includes('___')) {
      const filled = q.replace(/_{3}/, correct).replace(/\([^)]*\)/g, ' ').replace(/[„”]/g, '');
      const cyr = filled.match(/[А-Яа-яЁё́][А-Яа-яЁё́\-]*[\s,.!?—–:;]*/g);
      if (cyr) return cyr.join('').trim();
    }
    if (U.hasCyr(correct)) return correct;
    const m = q.match(/[„"«]([^”"»]+)[”"»]/);
    return m && U.hasCyr(m[1]) ? m[1] : '';
  }

  function rulesHTML(ru) {
    if (!ru || !App.settings().showTranscr) return '';
    const list = Phon.explain(ru, 4);
    return list.length ? `<div class="rules"><span class="rules-h">🗣️ Wymowa:</span>${list.map(x => `<span class="rule">${esc(x)}</span>`).join('')}</div>` : '';
  }

  function revealHTML(r) {
    if (!r) return '';
    const s = App.settings();
    const tr = r.ru && s.showTranscr ? `<div class="rv-tr" title="Wymowa zapisana polskimi literami">[${App.trHTML(r.ru)}]</div>` : '';
    return `<div class="reveal">
      ${r.ru ? `<div class="rv-row"><div class="rv-ru">${esc(App.stressView(r.ru))}</div>
        <div class="rv-btns"><button class="ic-btn" data-act="say" aria-label="Posłuchaj">${U.icon('vol')}</button><button class="ic-btn" data-act="say-slow" aria-label="Wolniej">🐢</button></div></div>` : ''}
      ${tr}
      ${rulesHTML(r.ru)}
      ${r.pl ? `<div class="rv-pl">${esc(r.pl)}</div>` : ''}
      ${r.note ? `<div class="rv-note">ℹ️ ${esc(r.note)}</div>` : ''}
      ${r.exp ? `<div class="rv-note">💡 ${esc(r.exp)}</div>` : ''}
      ${r.extra || ''}
    </div>`;
  }

  class Session {
    constructor(o) {
      this.o = o;
      this.queue = o.tasks.slice();
      this.total = o.tasks.length;
      this.doneCount = 0;
      this.correct = 0; this.answered = 0; this.xp = 0; this.combo = 0; this.bestCombo = 0;
      this.log = [];
      this.started = Date.now();
    }
    open() {
      TTS.stop();
      Ex.current = this;
      this.el = document.createElement('div');
      this.el.className = 'session';
      this.el.innerHTML = `
        <div class="ss-top">
          <button class="ic-btn" data-act="quit" aria-label="Zakończ">${U.icon('close')}</button>
          <div class="ss-prog"><div class="ss-bar" style="width:0%"></div></div>
          <div class="ss-combo" hidden>🔥 <b>0</b></div>
        </div>
        <div class="ss-body"></div>
        <div class="ss-sheet"></div>`;
      document.body.appendChild(this.el);
      document.body.classList.add('in-session');
      this.body = U.$('.ss-body', this.el);
      this.sheet = U.$('.ss-sheet', this.el);
      this.el.addEventListener('click', e => this.onClick(e));
      this.keyH = e => this.onKey(e);
      document.addEventListener('keydown', this.keyH);
      this.popH = () => this.close(true);
      window.addEventListener('hashchange', this.popH);
      requestAnimationFrame(() => this.el.classList.add('show'));
      this.next();
      return new Promise(res => (this.resolve = res));
    }
    close(silent) {
      TTS.stop();
      document.removeEventListener('keydown', this.keyH);
      window.removeEventListener('hashchange', this.popH);
      document.body.classList.remove('in-session');
      this.el.classList.remove('show');
      setTimeout(() => this.el.remove(), 250);
      if (!silent || !this.finished) this.resolve && this.resolve(this.result());
    }
    result() { return { correct: this.correct, answered: this.answered, xp: this.xp, score: this.answered ? Math.round(this.correct / this.answered * 100) : 0, log: this.log, finished: !!this.finished, minutes: (Date.now() - this.started) / 60000 }; }
    progress() { U.$('.ss-bar', this.el).style.width = Math.round(this.doneCount / this.total * 100) + '%'; }

    next() {
      this.sheet.className = 'ss-sheet'; this.sheet.innerHTML = '';
      this.locked = false;
      this.progress();
      if (!this.queue.length) return this.finish();
      this.cur = this.queue.shift();
      this.cur.mistakes = this.cur.mistakes || 0;
      this.body.classList.remove('anim'); void this.body.offsetWidth; this.body.classList.add('anim');
      const r = RENDER[this.cur.type];
      this.body.innerHTML = r.html.call(this, this.cur);
      r.mount && r.mount.call(this, this.cur);
    }

    answer(ok, opts = {}) {
      if (this.locked) return;
      this.locked = true;
      const t = this.cur;
      const scored = t.type !== 'intro';
      if (scored) {
        if (!t.retry) { this.answered++; if (ok) this.correct++; }
        Store.answer(ok);
        if (ok) { this.combo++; this.bestCombo = Math.max(this.bestCombo, this.combo); }
        else { this.combo = 0; t.mistakes++; }
        const cb = U.$('.ss-combo', this.el);
        cb.hidden = this.combo < 3; U.$('b', cb).textContent = this.combo;
        if (this.combo >= 3) { cb.classList.remove('pop'); void cb.offsetWidth; cb.classList.add('pop'); }
      }
      if (ok) {
        const gain = (t.xp ?? 4) + (this.combo >= 5 ? 1 : 0);
        if (scored && !t.retry) { this.xp += gain; Store.addXP(gain); FX.xp(gain, U.$('.ss-prog', this.el)); }
        FX.ok();
      } else FX.bad();
      t.onResult && t.onResult(ok, t);
      this.log.push({ task: t, ok });
      if (ok || !this.o.requeue) this.doneCount++;
      else if (!t.noRequeue) this.queue.splice(Math.min(this.queue.length, 2 + Math.floor(Math.random() * 3)), 0, { ...t, retry: true });
      else this.doneCount++;

      const rv = t.reveal || {};
      const title = ok ? (opts.typo ? 'Prawie! Uważaj na literówkę' : PRAISE_PL[Math.floor(Math.random() * PRAISE_PL.length)]) : 'Poprawna odpowiedź:';
      const ruPraise = ok ? PRAISE[Math.floor(Math.random() * PRAISE.length)] : '';
      this.sheet.innerHTML = `
        <div class="sh-in">
          <div class="sh-head">${ok ? '✅' : '❌'} <b>${esc(title)}</b> ${ok ? `<span class="sh-ru">${esc(ruPraise)}</span>` : ''}</div>
          ${opts.typed && !ok ? `<div class="sh-your">Twoja odpowiedź: <s>${esc(opts.typed)}</s></div>` : ''}
          ${opts.diff || ''}
          ${revealHTML(rv)}
          <button class="btn primary big" data-act="next">Dalej <kbd>Enter</kbd></button>
        </div>`;
      this.sheet.className = 'ss-sheet open ' + (ok ? 'ok' : 'bad');
      if (!ok) { this.body.classList.remove('shake'); void this.body.offsetWidth; this.body.classList.add('shake'); }
      const sayText = rv.say ?? rv.ru;
      if (sayText && App.settings().autoSpeak) setTimeout(() => TTS.speak(sayText), ok ? 250 : 450);
      setTimeout(() => { const b = U.$('[data-act="next"]', this.sheet); b && b.focus({ preventScroll: true }); }, 60);
    }

    finish() {
      this.finished = true;
      TTS.stop();
      const res = this.result();
      res.minutes = Math.min(res.minutes, 60);
      Store.addMinutes(Math.round(res.minutes * 10) / 10);
      const extra = this.o.onFinish ? this.o.onFinish(res) : null;
      const score = res.score;
      if (score >= 80 && res.answered >= 3) { FX.win(); FX.confetti(); }
      const wrong = this.log.filter(l => !l.ok && !l.task.retry).map(l => l.task);
      const uniq = [...new Map(wrong.map(t => [t.key || (t.reveal && t.reveal.ru) || Math.random(), t])).values()];
      U.$('.ss-top', this.el).style.visibility = 'hidden';
      this.sheet.className = 'ss-sheet';
      this.body.innerHTML = `
        <div class="finish">
          <div class="fin-emoji">${!res.answered ? '👋' : score >= 90 ? '🏆' : score >= 70 ? '🎉' : score >= 50 ? '💪' : '📚'}</div>
          <h2>${!res.answered ? 'Sesja zakończona' : score >= 90 ? 'Wspaniale!' : score >= 70 ? 'Dobra robota!' : score >= 50 ? 'Nieźle, ćwicz dalej!' : 'Powtórz ten materiał'}</h2>
          <p class="muted">${esc(this.o.title || '')}</p>
          <div class="fin-stats">
            <div class="fs"><b>${score}%</b><span>poprawnie</span></div>
            <div class="fs"><b>+${res.xp}</b><span>XP</span></div>
            <div class="fs"><b>${this.bestCombo}</b><span>najdł. seria</span></div>
            <div class="fs"><b>${Math.max(1, Math.round(res.minutes))}</b><span>min</span></div>
          </div>
          ${extra || ''}
          ${uniq.length ? `<div class="fin-wrong"><h4>Do powtórki</h4>${uniq.slice(0, 12).map(t => t.reveal ? `<div class="fw" data-say="${esc(U.strip(t.reveal.say || t.reveal.ru || ''))}"><span>${esc(App.stressView(t.reveal.ru || ''))}</span><span class="muted">${esc(t.reveal.pl || '')}</span></div>` : '').join('')}</div>` : ''}
          <div class="fin-btns">
            ${uniq.length && this.o.retryWrong !== false ? `<button class="btn" data-act="retry">${U.icon('shuffle')} Powtórz błędy</button>` : ''}
            <button class="btn primary" data-act="done">Gotowe</button>
          </div>
        </div>`;
      this.retryTasks = uniq.map(t => ({ ...t, retry: false, mistakes: 0 }));
    }

    onClick(e) {
      const a = e.target.closest('[data-act],[data-opt],[data-mt],[data-tile],[data-grade]');
      const sayEl = e.target.closest('[data-say]');
      if (!a) { if (sayEl) TTS.speak(sayEl.dataset.say); return; }
      const act = a.dataset.act;
      const rv = this.cur && this.cur.reveal || {};
      if (act === 'quit') {
        if (this.answered > 0 && !this.finished && !confirm('Przerwać sesję? Dotychczasowe postępy zostaną zapisane.')) return;
        this.close();
        return;
      }
      if (act === 'next') { TTS.stop(); return this.next(); }
      if (act === 'say') return TTS.speak(rv.say ?? rv.ru);
      if (act === 'say-slow') return TTS.speak(rv.say ?? rv.ru, { slow: true });
      if (act === 'done') return this.close();
      if (act === 'retry') {
        const s = new Session({ ...this.o, tasks: this.retryTasks, title: 'Powtórka błędów' });
        this.close(); s.open().then(this.o.afterRetry || (() => {}));
        return;
      }
      const r = RENDER[this.cur.type];
      r.click && r.click.call(this, a, e);
    }
    onKey(e) {
      if (e.target.matches('input, textarea') && e.key !== 'Enter') return;
      if (e.key === 'Enter') {
        const nextBtn = U.$('[data-act="next"]', this.sheet);
        if (nextBtn && this.locked) { e.preventDefault(); TTS.stop(); return this.next(); }
        const chk = U.$('[data-act="check"]', this.body) || U.$('[data-act="intro-next"]', this.body) || U.$('[data-act="done"]', this.body);
        if (chk) { e.preventDefault(); chk.click(); }
        return;
      }
      if (/^[1-6]$/.test(e.key) && !this.locked) { const opt = U.$$('[data-opt]', this.body)[+e.key - 1]; opt && opt.click(); }
      if (e.key === ' ' && !e.target.matches('input')) { e.preventDefault(); const p = U.$('[data-act="play"]', this.body); if (p) p.click(); else if (this.locked && this.cur.reveal) TTS.speak(this.cur.reveal.say ?? this.cur.reveal.ru); }
    }
  }

  /* ---------------- rodzaje zadań ---------------- */
  const RENDER = {};

  RENDER.intro = {
    html(t) {
      const w = t.word;
      return `<div class="task intro">
        <div class="t-label">✨ Nowe słowo</div>
        <div class="flash-card static">
          <div class="fc-ru say big" data-say="${esc(U.strip(w.ru))}">${esc(App.stressView(w.ru))}</div>
          ${App.settings().showTranscr ? `<div class="rv-tr">[${App.trHTML(w.ru)}]</div>` : ''}
          ${rulesHTML(w.ru)}
          <div class="fc-pl">${esc(w.pl)}</div>
          ${w.note ? `<div class="rv-note">ℹ️ ${esc(w.note)}</div>` : ''}
          <div class="rv-btns center"><button class="btn ghost" data-act="play">${U.icon('vol')} Posłuchaj</button><button class="btn ghost" data-act="play-slow">🐢 Wolno</button></div>
        </div>
        <p class="hint">Posłuchaj i powtórz na głos 2–3 razy.</p>
        <button class="btn primary big" data-act="intro-next">Zapamiętałem <kbd>Enter</kbd></button>
      </div>`;
    },
    mount(t) { setTimeout(() => TTS.speak(t.word.ru), 300); },
    click(a) {
      if (a.dataset.act === 'play') TTS.speak(this.cur.word.ru);
      if (a.dataset.act === 'play-slow') TTS.speak(this.cur.word.ru, { slow: true });
      if (a.dataset.act === 'intro-next') { TTS.stop(); this.doneCount++; this.next(); }
    }
  };

  RENDER.mc = {
    html(t) {
      const p = t.prompt;
      let promptHTML = '';
      if (p.audio) promptHTML = `<div class="audio-prompt"><button class="play-big" data-act="play" aria-label="Odtwórz">${U.icon('vol')}</button><button class="btn ghost small" data-act="play-slow">🐢 wolniej</button></div>`;
      if (p.ru) promptHTML += `<div class="p-ru say" data-say="${esc(U.strip(p.ru))}">${esc(App.stressView(p.ru))}</div>`;
      if (p.pl) promptHTML += `<div class="p-pl">${esc(p.pl)}</div>`;
      if (p.q) promptHTML += `<div class="p-q">${App.quizQ(p.q)}</div>`;
      return `<div class="task mc">
        <div class="t-label">${esc(t.label || 'Wybierz poprawną odpowiedź')}</div>
        <div class="prompt">${promptHTML}</div>
        <div class="opts ${t.options.some(o => o.length > 28) ? 'long' : ''}">
          ${t.options.map((o, i) => `<button class="opt ${U.hasCyr(o) ? 'cyr' : ''}" data-opt="${i}"><span class="k">${i + 1}</span><span>${esc(U.hasCyr(o) ? App.stressView(o) : o)}</span></button>`).join('')}
        </div>
      </div>`;
    },
    mount(t) { if (t.prompt.audio) setTimeout(() => TTS.speak(t.prompt.audio), 300); },
    click(a) {
      const t = this.cur;
      if (a.dataset.act === 'play') return TTS.speak(t.prompt.audio);
      if (a.dataset.act === 'play-slow') return TTS.speak(t.prompt.audio, { slow: true });
      if (a.dataset.opt === undefined || this.locked) return;
      const i = +a.dataset.opt;
      const ok = i === t.correct;
      U.$$('.opt', this.body).forEach((b, j) => { b.disabled = true; if (j === t.correct) b.classList.add('right'); });
      if (!ok) a.classList.add('wrong');
      this.answer(ok);
    }
  };

  RENDER.type = {
    html(t) {
      return `<div class="task type">
        <div class="t-label">${esc(t.label || 'Napisz po rosyjsku')}</div>
        <div class="prompt">${t.audio ? `<div class="audio-prompt"><button class="play-big" data-act="play">${U.icon('vol')}</button><button class="btn ghost small" data-act="play-slow">🐢 wolniej</button></div>` : ''}${t.promptPl ? `<div class="p-pl">${esc(t.promptPl)}</div>` : ''}${t.hintNote ? `<div class="muted small">${esc(t.hintNote)}</div>` : ''}</div>
        <div class="type-wrap">
          <input class="type-in" type="text" lang="ru" inputmode="${App.settings().keyboard ? 'none' : 'text'}" placeholder="Wpisz odpowiedź…" />
          <button class="ic-btn" data-act="hint" title="Podpowiedź">💡</button>
        </div>
        <div class="kb-host"></div>
        <button class="btn primary big" data-act="check">Sprawdź <kbd>Enter</kbd></button>
      </div>`;
    },
    mount(t) {
      const inp = U.$('.type-in', this.body);
      KB.attach(inp, U.$('.kb-host', this.body));
      t.hints = 0;
      if (t.audio) setTimeout(() => TTS.speak(t.audio), 300);
      if (!App.settings().keyboard) setTimeout(() => inp.focus(), 50);
      document.addEventListener('settings', () => { inp.setAttribute('inputmode', App.settings().keyboard ? 'none' : 'text'); }, { once: true });
    },
    click(a) {
      const t = this.cur, inp = U.$('.type-in', this.body);
      if (a.dataset.act === 'play') return TTS.speak(t.audio);
      if (a.dataset.act === 'play-slow') return TTS.speak(t.audio, { slow: true });
      if (a.dataset.act === 'hint') {
        const target = U.strip(t.answer.split(/\s*[\/;]\s*/)[0]);
        t.hints = Math.min(target.length, (t.hints || 0) + 1);
        inp.value = target.slice(0, t.hints);
        t.xp = Math.max(1, (t.xp ?? 6) - 2);
        inp.focus();
        return;
      }
      if (a.dataset.act === 'check' && !this.locked) {
        const val = inp.value;
        if (!val.trim()) { inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake'); return; }
        const res = t.check ? t.check(val) : U.check(val, t.answer);
        inp.disabled = true;
        inp.classList.add(res === 'bad' ? 'wrong' : 'right');
        this.answer(res !== 'bad', { typo: res === 'typo', typed: val, diff: res === 'bad' && t.diffFn ? t.diffFn(val) : '' });
      }
    }
  };

  RENDER.match = {
    html(t) {
      const L = U.shuffle(t.pairs), R = U.shuffle(t.pairs);
      return `<div class="task match">
        <div class="t-label">${esc(t.label || 'Połącz pary')}</div>
        <div class="match-grid">
          <div class="mcol">${L.map(p => `<button class="mt cyr" data-mt="ru" data-id="${esc(p.id)}">${esc(App.stressView(p.ru))}</button>`).join('')}</div>
          <div class="mcol">${R.map(p => `<button class="mt" data-mt="pl" data-id="${esc(p.id)}">${esc(p.pl)}</button>`).join('')}</div>
        </div>
      </div>`;
    },
    mount(t) { t.sel = null; t.left = t.pairs.length; t.errs = 0; this.answered; },
    click(a) {
      const t = this.cur;
      if (!a.dataset.mt || a.classList.contains('gone')) return;
      if (a.dataset.mt === 'ru') TTS.speak(t.pairs.find(p => p.id === a.dataset.id).ru);
      if (!t.sel || t.sel.dataset.mt === a.dataset.mt) {
        U.$$('.mt.sel', this.body).forEach(b => b.classList.remove('sel'));
        a.classList.add('sel'); t.sel = a; FX.tap(); return;
      }
      if (t.sel.dataset.id === a.dataset.id) {
        [t.sel, a].forEach(b => { b.classList.remove('sel'); b.classList.add('good'); setTimeout(() => b.classList.add('gone'), 350); });
        FX.ok(); t.left--;
        t.onPair && t.onPair(a.dataset.id, true);
        if (t.left === 0) {
          t.reveal = { pl: t.errs ? `Błędów: ${t.errs}` : 'Bez błędów!' };
          setTimeout(() => this.answer(t.errs <= 1), 450);
        }
      } else {
        t.errs++; FX.bad();
        t.onPair && t.onPair(t.sel.dataset.mt === 'ru' ? t.sel.dataset.id : a.dataset.id, false);
        [t.sel, a].forEach(b => { b.classList.add('bad'); setTimeout(() => b.classList.remove('bad', 'sel'), 400); });
      }
      t.sel = null;
    }
  };

  RENDER.build = {
    html(t) {
      return `<div class="task build">
        <div class="t-label">${esc(t.label || 'Ułóż zdanie po rosyjsku')}</div>
        <div class="prompt">${t.audio ? `<div class="audio-prompt"><button class="play-big" data-act="play">${U.icon('vol')}</button></div>` : ''}<div class="p-pl">${esc(t.pl)}</div></div>
        <div class="build-ans"></div>
        <div class="build-pool">${t.tiles.map((w, i) => `<button class="tile cyr" data-tile="${i}">${esc(App.stressView(w))}</button>`).join('')}</div>
        <button class="btn primary big" data-act="check">Sprawdź <kbd>Enter</kbd></button>
      </div>`;
    },
    mount(t) { t.order = []; if (t.audio) setTimeout(() => TTS.speak(t.audio), 300); },
    click(a) {
      const t = this.cur;
      if (a.dataset.act === 'play') return TTS.speak(t.audio);
      if (a.dataset.tile !== undefined && !this.locked) {
        const i = +a.dataset.tile;
        const ans = U.$('.build-ans', this.body), pool = U.$('.build-pool', this.body);
        if (a.parentElement === pool) { ans.appendChild(a); t.order.push(i); TTS.speak(t.tiles[i]); }
        else { pool.appendChild(a); t.order = t.order.filter(x => x !== i); }
        FX.tap();
        return;
      }
      if (a.dataset.act === 'check' && !this.locked) {
        const built = t.order.map(i => t.tiles[i]).join(' ');
        if (!t.order.length) return;
        const ok = U.norm(built) === U.norm(t.ru);
        this.answer(ok, { typed: ok ? '' : U.strip(built) });
      }
    }
  };

  RENDER.flash = {
    html(t) {
      const front = t.front === 'pl' ? `<div class="fc-pl big">${esc(t.word.pl)}</div>` : `<div class="fc-ru big">${esc(App.stressView(t.word.ru))}</div>`;
      return `<div class="task flash">
        <div class="t-label">Przypomnij sobie znaczenie${t.front === 'pl' ? ' po rosyjsku' : ''}</div>
        <div class="flip" data-act="flip">
          <div class="flip-in">
            <div class="face front">${front}<div class="muted small">dotknij, aby odwrócić</div></div>
            <div class="face back">
              <div class="fc-ru">${esc(App.stressView(t.word.ru))}</div>
              ${App.settings().showTranscr ? `<div class="rv-tr">[${App.trHTML(t.word.ru)}]</div>` : ''}
              <div class="fc-pl">${esc(t.word.pl)}</div>
              ${t.word.note ? `<div class="rv-note">ℹ️ ${esc(t.word.note)}</div>` : ''}
            </div>
          </div>
        </div>
        <div class="grades" hidden>
          <button class="gr g1" data-grade="1">Nie pamiętam</button>
          <button class="gr g2" data-grade="2">Trudne</button>
          <button class="gr g3" data-grade="3">Dobrze</button>
          <button class="gr g4" data-grade="4">Łatwe</button>
        </div>
      </div>`;
    },
    mount(t) { if (t.front !== 'pl') setTimeout(() => TTS.speak(t.word.ru), 300); },
    click(a) {
      const t = this.cur;
      if (a.dataset.act === 'flip') {
        const f = U.$('.flip', this.body);
        if (!f.classList.contains('on')) { f.classList.add('on'); U.$('.grades', this.body).hidden = false; TTS.speak(t.word.ru); }
        return;
      }
      if (a.dataset.grade && !this.locked) {
        const g = +a.dataset.grade;
        t.grade = g;
        t.xp = g >= 3 ? 2 : 0;
        this.locked = false;
        // ocena bez arkusza – od razu dalej
        this.answered++; Store.answer(g >= 3);
        if (g >= 3) { this.correct++; this.xp += t.xp; Store.addXP(t.xp); FX.ok(); } else FX.tap();
        t.onResult && t.onResult(g >= 3, t);
        this.log.push({ task: t, ok: g >= 3 });
        this.doneCount++;
        this.next();
      }
    }
  };

  RENDER.dictation = {
    html(t) {
      return `<div class="task type">
        <div class="t-label">✍️ Dyktando – zapisz, co słyszysz</div>
        <div class="prompt"><div class="audio-prompt"><button class="play-big" data-act="play">${U.icon('vol')}</button><button class="btn ghost small" data-act="play-slow">🐢 wolniej</button></div></div>
        <div class="type-wrap"><input class="type-in" type="text" lang="ru" inputmode="${App.settings().keyboard ? 'none' : 'text'}" placeholder="Zapisz zdanie…" /></div>
        <div class="kb-host"></div>
        <button class="btn primary big" data-act="check">Sprawdź <kbd>Enter</kbd></button>
      </div>`;
    },
    mount(t) { KB.attach(U.$('.type-in', this.body), U.$('.kb-host', this.body)); setTimeout(() => TTS.speak(t.ru), 350); },
    click(a) {
      const t = this.cur, inp = U.$('.type-in', this.body);
      if (a.dataset.act === 'play') return TTS.speak(t.ru);
      if (a.dataset.act === 'play-slow') return TTS.speak(t.ru, { slow: true });
      if (a.dataset.act === 'check' && !this.locked) {
        const val = inp.value; if (!val.trim()) return;
        const A = U.norm(val), B = U.norm(t.ru);
        const sim = 1 - U.lev(A, B) / Math.max(A.length, B.length);
        const ok = sim >= 0.9;
        inp.disabled = true;
        const bw = B.split(' '), aw = A.split(' ');
        const diff = `<div class="diff">${bw.map((w, i) => `<span class="${aw.includes(w) ? 'dok' : 'dbad'}">${esc(w)}</span>`).join(' ')} <span class="muted small">(${Math.round(sim * 100)}%)</span></div>`;
        this.answer(ok, { typo: ok && sim < 1, typed: val, diff });
      }
    }
  };

  RENDER.stress = {
    html(t) {
      const plain = U.strip(t.word);
      return `<div class="task stress">
        <div class="t-label">🎯 Gdzie pada akcent?</div>
        <div class="prompt">
          <div class="stress-word">${[...plain].map((ch, i) => 'аеиоуыэюяАЕИОУЫЭЮЯ'.includes(ch) ? `<button class="sv" data-opt="${i}">${esc(ch)}</button>` : `<span>${esc(ch)}</span>`).join('')}</div>
          ${t.pl ? `<div class="p-pl small-pl">${esc(t.pl)}</div>` : ''}
        </div>
        <p class="hint">Dotknij samogłoski, która jest akcentowana. Akcent zmienia wymowę całego słowa!</p>
      </div>`;
    },
    click(a) {
      const t = this.cur;
      if (a.dataset.opt === undefined || this.locked) return;
      const i = +a.dataset.opt;
      const ok = i === t.stressIdx;
      U.$$('.sv', this.body).forEach(b => { b.disabled = true; if (+b.dataset.opt === t.stressIdx) b.classList.add('right'); });
      if (!ok) a.classList.add('wrong');
      this.answer(ok);
    }
  };

  RENDER.speak = {
    html(t) {
      return `<div class="task speak">
        <div class="t-label">🎤 Powiedz na głos</div>
        <div class="prompt">
          <div class="p-ru">${esc(App.stressView(t.ru))}</div>
          ${App.settings().showTranscr ? `<div class="rv-tr">[${App.trHTML(t.ru)}]</div>` : ''}
          ${rulesHTML(t.ru)}
          ${t.pl ? `<div class="p-pl small-pl">${esc(t.pl)}</div>` : ''}
          <div class="rv-btns center"><button class="btn ghost small" data-act="play">${U.icon('vol')} Wzór</button><button class="btn ghost small" data-act="play-slow">🐢 Wolno</button></div>
        </div>
        <div class="mic-wrap">
          <button class="mic-big" data-act="mic" aria-label="Mów">${U.icon('mic')}</button>
          <div class="mic-status muted">Najpierw posłuchaj wzoru, potem dotknij mikrofonu i powiedz.</div>
          <div class="speak-out"></div>
        </div>
        <button class="btn ghost" data-act="skip">Nie mogę teraz mówić – pomiń</button>
      </div>`;
    },
    mount(t) { t.tries = 0; setTimeout(() => TTS.speak(t.ru), 300); },
    async click(a) {
      const t = this.cur;
      const act = a.dataset.act;
      if (act === 'play') return TTS.speak(t.ru);
      if (act === 'play-slow') return TTS.speak(t.ru, { slow: true });
      if (act === 'skip') { Speech.stop(); this.doneCount++; return this.next(); }
      if (act !== 'mic' || this.locked || t.listening) return;
      const status = U.$('.mic-status', this.body), out = U.$('.speak-out', this.body);
      t.listening = true; a.classList.add('listening'); status.textContent = '🎙️ Słucham…'; out.innerHTML = '';
      const r = await Speech.listen({ onInterim: txt => { status.textContent = '🎙️ ' + txt; } });
      t.listening = false; a.classList.remove('listening');
      if (this.cur !== t || this.locked) return;
      if (!r.alts.length) { status.textContent = '⚠️ ' + Speech.errorText(r.error || 'no-speech'); if (r.error === 'not-allowed' || r.error === 'service-not-allowed') { this.doneCount++; setTimeout(() => this.next(), 1800); } return; }
      t.tries++;
      const cmp = Speech.compare(r.alts, t.ru);
      const pct = Math.round(cmp.score * 100);
      const diff = `<div class="diff">${cmp.words.map(x => `<span class="${x.ok ? 'dok' : 'dbad'}">${esc(x.w)}</span>`).join(' ')} <span class="muted small">(${pct}%)</span></div>`;
      if (pct >= 75) return this.answer(true, { diff: `<div class="sh-your">Usłyszałem: „${esc(cmp.heard)}”</div>` + diff });
      if (t.tries >= 3) return this.answer(false, { typed: cmp.heard, diff });
      FX.bad();
      status.textContent = `Usłyszałem: „${cmp.heard}” – posłuchaj wzoru i spróbuj jeszcze raz (${t.tries}/3)`;
      out.innerHTML = diff;
      setTimeout(() => TTS.speak(t.ru), 400);
    }
  };

  // indeks akcentowanej samogłoski w wyrazie bez znaku akcentu
  function stressIndex(ru) {
    let idx = -1, pos = 0;
    for (const ch of ru) { if (ch === '\u0301') { idx = pos - 1; continue; } pos++; }
    return idx;
  }
  const stressable = w => { const r = w.ru.trim(); return !/[\s\/…]/.test(r) && (r.match(/\u0301/g) || []).length === 1 && !/ё/i.test(r) && (U.strip(r).match(/[аеиоуыэюя]/gi) || []).length >= 2; };

  const Ex = {
    Session,
    run: o => new Session(o).open(),
    sayFromQuestion,
    stressable,
    stress(w, onResult) {
      return { type: 'stress', key: w.id + ':st', word: w.ru, pl: w.pl, stressIdx: stressIndex(w.ru), reveal: { ru: w.ru, pl: w.pl, note: w.note }, onResult, xp: 4 };
    },
    speak(item, onResult) {
      const ru = item.ru.split(' / ')[0];
      return { type: 'speak', key: (item.id || ru) + ':sp', ru, pl: item.pl, reveal: { ru, pl: item.pl }, onResult, xp: 6, noRequeue: true };
    },
    rulesHTML,

    /* --- fabryki zadań --- */
    mcRuPl(w, onResult) {
      const ds = C.distractors(w, 3, 'pl');
      const opts = U.shuffle([w, ...ds]);
      return { type: 'mc', key: w.id, label: 'Co to znaczy?', prompt: { ru: w.ru }, options: opts.map(o => o.pl), correct: opts.indexOf(w), reveal: { ru: w.ru, pl: w.pl, note: w.note }, onResult, xp: 3 };
    },
    mcPlRu(w, onResult) {
      const ds = C.distractors(w, 3, 'ru');
      const opts = U.shuffle([w, ...ds]);
      return { type: 'mc', key: w.id, label: 'Jak to powiedzieć po rosyjsku?', prompt: { pl: w.pl }, options: opts.map(o => o.ru), correct: opts.indexOf(w), reveal: { ru: w.ru, pl: w.pl, note: w.note }, onResult, xp: 4 };
    },
    listen(w, onResult) {
      const ds = C.distractors(w, 3, 'pl');
      const opts = U.shuffle([w, ...ds]);
      return { type: 'mc', key: w.id, label: '🎧 Posłuchaj i wybierz znaczenie', prompt: { audio: w.ru }, options: opts.map(o => o.pl), correct: opts.indexOf(w), reveal: { ru: w.ru, pl: w.pl, note: w.note }, onResult, xp: 4 };
    },
    typeRu(w, onResult) {
      const first = w.ru.split(' / ')[0];
      const same = C.words.filter(x => x.id !== w.id && U.normPl(x.pl) === U.normPl(w.pl));
      const check = val => { const r = U.check(val, w.ru); if (r !== 'bad') return r; return same.some(x => U.check(val, x.ru) === 'ok') ? 'ok' : 'bad'; };
      return { type: 'type', key: w.id, check, label: 'Napisz po rosyjsku', promptPl: w.pl, hintNote: w.ru.includes(' / ') ? 'para aspektowa – wystarczy jedna forma' : '', answer: w.ru, reveal: { ru: w.ru, pl: w.pl, note: w.note, say: first }, onResult, xp: 6 };
    },
    listenType(w, onResult) {
      return { type: 'type', key: w.id, label: '🎧 Posłuchaj i napisz słowo', audio: w.ru, answer: w.ru, reveal: { ru: w.ru, pl: w.pl, note: w.note }, onResult, xp: 6 };
    },
    flash(w, onResult, front) { return { type: 'flash', key: w.id, word: w, front, onResult }; },
    match(words, onPair) { return { type: 'match', key: 'match', pairs: words.map(w => ({ id: w.id, ru: w.ru.split(' / ')[0], pl: w.pl.split(/[;]/)[0] })), onPair, xp: 8, noRequeue: true }; },

    sentBuild(s, onResult) {
      const words = U.strip(s.ru).replace(/[.,!?;:«»"—–]/g, ' ').split(/\s+/).filter(Boolean);
      const stressedWords = s.ru.replace(/[.,!?;:«»"—–]/g, ' ').split(/\s+/).filter(Boolean);
      const pool = C.sentences.filter(x => x.level === s.level && x.id !== s.id);
      const extra = [];
      if (words.length < 10) {
        for (const x of U.shuffle(pool)) {
          const cand = x.ru.replace(/[.,!?;:«»"—–]/g, ' ').split(/\s+/).filter(Boolean);
          const c = U.pick(cand);
          if (c && !words.map(U.norm).includes(U.norm(c))) extra.push(c);
          if (extra.length >= (words.length < 6 ? 2 : 1)) break;
        }
      }
      return { type: 'build', key: s.id, pl: s.pl, ru: s.ru, tiles: U.shuffle([...stressedWords, ...extra]), reveal: { ru: s.ru, pl: s.pl }, onResult, xp: 6 };
    },
    sentListen(s, onResult) {
      const ds = U.sample(C.sentences.filter(x => x.id !== s.id && x.level === s.level && x.pl !== s.pl), 3);
      const opts = U.shuffle([s, ...ds]);
      return { type: 'mc', key: s.id, label: '🎧 Posłuchaj i wybierz tłumaczenie', prompt: { audio: s.ru }, options: opts.map(o => o.pl), correct: opts.indexOf(s), reveal: { ru: s.ru, pl: s.pl }, onResult, xp: 5 };
    },
    sentChoose(s, onResult) {
      const ds = U.sample(C.sentences.filter(x => x.id !== s.id && x.level === s.level), 3);
      const opts = U.shuffle([s, ...ds]);
      return { type: 'mc', key: s.id, label: 'Wybierz rosyjskie tłumaczenie', prompt: { pl: s.pl }, options: opts.map(o => o.ru), correct: opts.indexOf(s), reveal: { ru: s.ru, pl: s.pl }, onResult, xp: 4 };
    },
    sentDictation(s, onResult) { return { type: 'dictation', key: s.id, ru: s.ru, reveal: { ru: s.ru, pl: s.pl }, onResult, xp: 8 }; },
    sentMeaning(s, onResult) {
      const ds = U.sample(C.sentences.filter(x => x.id !== s.id && x.level === s.level), 3);
      const opts = U.shuffle([s, ...ds]);
      return { type: 'mc', key: s.id, label: 'Co znaczy to zdanie?', prompt: { ru: s.ru }, options: opts.map(o => o.pl), correct: opts.indexOf(s), reveal: { ru: s.ru, pl: s.pl }, onResult, xp: 4 };
    },

    quiz(q, onResult) {
      const opts = U.shuffle(q.opts);
      const say = sayFromQuestion(q.q, q.correct);
      const filled = q.q.includes('___') ? q.q.replace('___', `<u>${q.correct}</u>`) : '';
      return {
        type: 'mc', key: q.q, label: 'Wybierz poprawną odpowiedź', prompt: { q: q.q }, options: opts, correct: opts.indexOf(q.correct),
        reveal: { ru: say, say, pl: U.hasCyr(q.correct) && say ? '' : 'Odpowiedź: ' + q.correct, exp: q.exp, extra: filled && !U.hasCyr(say) ? `<div class="rv-pl">${filled}</div>` : '' }, onResult, xp: 5
      };
    }
  };
  window.Ex = Ex;
})();
