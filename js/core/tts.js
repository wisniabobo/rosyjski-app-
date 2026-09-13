/* Synteza mowy ru-RU (Web Speech API) */
(function () {
  const synth = window.speechSynthesis;
  let voices = [], ready = false, keepAlive = null, token = 0;

  function score(v) {
    let s = 0;
    const n = v.name.toLowerCase();
    if (/^ru(-|_)?ru/i.test(v.lang)) s += 10; else if (/^ru/i.test(v.lang)) s += 6;
    if (/(premium|enhanced|natural|neural|online|wavenet)/.test(n)) s += 5;
    if (/google/.test(n)) s += 4;
    if (/(milena|katya|yuri|svetlana|dmitry|pavel|irina)/.test(n)) s += 3;
    if (v.localService) s += 1;
    return s;
  }
  function load() {
    if (!synth) return;
    voices = synth.getVoices().filter(v => /^ru/i.test(v.lang)).sort((a, b) => score(b) - score(a));
    ready = true;
    document.dispatchEvent(new CustomEvent('voices'));
  }
  if (synth) {
    load();
    if ('onvoiceschanged' in synth) synth.onvoiceschanged = load;
    setTimeout(load, 500); setTimeout(load, 2000);
  }

  function voice() {
    const want = App.settings().voice;
    return voices.find(v => v.voiceURI === want) || voices[0] || null;
  }

  function clean(text) {
    return U.strip(text)
      .replace(/\[[^\]]*\]/g, ' ')          // transkrypcje w nawiasach
      .replace(/\([^)]*[a-ząćęłńóśźż][^)]*\)/gi, ' ') // polskie wtrącenia
      .replace(/_{2,}/g, ' ')
      .replace(/[«»„”"]/g, '')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/…/g, '…')
      .replace(/\s+/g, ' ').trim();
  }

  // Dzieli długi tekst na zdania (Chrome ucina długie wypowiedzi)
  function chunks(text) {
    const parts = text.match(/[^.!?…]+[.!?…]*\s*/g) || [text];
    const out = [];
    let cur = '';
    for (const p of parts) { if ((cur + p).length > 180 && cur) { out.push(cur.trim()); cur = p; } else cur += p; }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  function speakOne(text, rate, my) {
    return new Promise(resolve => {
      if (!synth || my !== token) return resolve(false);
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ru-RU';
      const v = voice();
      if (v) u.voice = v;
      u.rate = rate;
      u.pitch = 1;
      u.volume = 1;
      let done = false;
      const fin = ok => { if (!done) { done = true; resolve(ok); } };
      u.onend = () => fin(true);
      u.onerror = () => fin(false);
      synth.speak(u);
      // awaryjny timeout
      setTimeout(() => fin(true), 1500 + text.length * 180 / rate);
    });
  }

  const TTS = {
    supported: !!synth,
    voices: () => voices,
    hasRussian: () => voices.length > 0,
    ready: () => ready,
    clean,
    async speak(text, opts = {}) {
      if (!synth || !text) return;
      const t = clean(text);
      if (!U.hasCyr(t)) return;
      const my = ++token;
      synth.cancel();
      const rate = (opts.slow ? 0.62 : 1) * (App.settings().rate || 0.95);
      clearInterval(keepAlive);
      keepAlive = setInterval(() => { if (synth.speaking && !synth.paused) { synth.pause(); synth.resume(); } }, 10000);
      await U.sleep(40);
      const list = chunks(t);
      for (let i = 0; i < list.length; i++) {
        if (my !== token) break;
        opts.onChunk && opts.onChunk(i, list[i]);
        await speakOne(list[i], rate, my);
      }
      if (my === token) { clearInterval(keepAlive); opts.onEnd && opts.onEnd(); }
    },
    async speakList(items, opts = {}) {
      const my = ++token;
      synth && synth.cancel();
      const rate = (opts.slow ? 0.62 : 1) * (App.settings().rate || 0.95);
      for (let i = 0; i < items.length; i++) {
        if (my !== token) return;
        opts.onItem && opts.onItem(i);
        const t = clean(items[i]);
        if (U.hasCyr(t)) await speakOne(t, rate, my);
        await U.sleep(opts.gap ?? 350);
      }
      if (my === token) opts.onEnd && opts.onEnd();
    },
    stop() { token++; synth && synth.cancel(); clearInterval(keepAlive); }
  };
  window.TTS = TTS;
})();
