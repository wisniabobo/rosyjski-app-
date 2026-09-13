// Automatyczny tester sesji ćwiczeń (tylko do testów w przeglądarce)
window.__errs = []; window.addEventListener('error', e => window.__errs.push(e.message + ' @' + e.filename + ':' + e.lineno));
window.bot = async function (starter, wrongEvery = 0) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  starter();
  await sleep(450);
  const S = Ex.current; const log = []; let n = 0;
  while (S && !S.finished && n < 300) {
    n++;
    const t = S.cur; const b = S.body;
    const doWrong = wrongEvery && n % wrongEvery === 0;
    try {
      if (t.type === 'intro') { b.querySelector('[data-act="intro-next"]').click(); await sleep(40); continue; }
      if (t.type === 'mc') { const opts = b.querySelectorAll('.opt'); opts[doWrong ? (t.correct + 1) % opts.length : t.correct].click(); }
      else if (t.type === 'type') { const i = b.querySelector('.type-in'); i.value = doWrong ? 'xyz' : U.strip(t.answer.split(' / ')[0]); b.querySelector('[data-act="check"]').click(); }
      else if (t.type === 'dictation') { const i = b.querySelector('.type-in'); i.value = U.strip(t.ru); b.querySelector('[data-act="check"]').click(); }
      else if (t.type === 'build') {
        const words = t.ru.replace(/[.,!?;:«»"—–]/g, ' ').split(/\s+/).filter(Boolean);
        for (const w of words) { const tiles = [...b.querySelectorAll('.build-pool .tile')]; const tile = tiles.find(x => U.norm(t.tiles[+x.dataset.tile]) === U.norm(w)); if (tile) tile.click(); else log.push('no tile ' + w); }
        b.querySelector('[data-act="check"]').click();
      }
      else if (t.type === 'match') { for (const pr of t.pairs) { b.querySelector(`.mt[data-mt="ru"][data-id="${CSS.escape(pr.id)}"]`).click(); b.querySelector(`.mt[data-mt="pl"][data-id="${CSS.escape(pr.id)}"]`).click(); } await sleep(700); }
      else if (t.type === 'flash') { b.querySelector('.flip').click(); await sleep(40); b.querySelector('[data-grade="3"]').click(); await sleep(50); continue; }
    } catch (e) { log.push('ERR ' + t.type + ' ' + e.message); break; }
    await sleep(70);
    const sh = S.sheet;
    if (sh.classList.contains('open')) { log.push((sh.classList.contains('ok') ? '✓ ' : '✗ ') + t.type + ': ' + sh.querySelector('.reveal').innerText.replace(/\s+/g, ' ').slice(0, 120)); sh.querySelector('[data-act="next"]').click(); }
    else if (t.type !== 'match') log.push('no sheet for ' + t.type);
    await sleep(50);
  }
  const fin = S ? S.body.innerText.replace(/\s+/g, ' ').slice(0, 200) : 'no session';
  if (S) { const d = S.body.querySelector('[data-act="done"]'); d && d.click(); }
  await sleep(350);
  return { steps: n, fin, log, errs: window.__errs };
};
