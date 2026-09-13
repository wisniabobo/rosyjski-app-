/* Rozpoznawanie mowy ru-RU (ćwiczenia wymowy) */
(function () {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let active = null;

  const Speech = {
    supported: !!SR && window.isSecureContext !== false,

    listen(opts = {}) {
      return new Promise(resolve => {
        if (!Speech.supported) return resolve({ alts: [], error: 'unsupported' });
        Speech.stop();
        TTS.stop();
        const rec = new SR();
        active = rec;
        rec.lang = 'ru-RU';
        rec.interimResults = true;
        rec.maxAlternatives = 5;
        rec.continuous = false;
        let alts = [], error = null, done = false;
        const finish = () => { if (done) return; done = true; clearTimeout(timer); if (active === rec) active = null; resolve({ alts, error }); };
        rec.onresult = e => {
          const res = e.results[e.results.length - 1];
          const list = [...res].map(a => a.transcript.trim()).filter(Boolean);
          if (res.isFinal) alts = [...new Set([...list, ...alts])];
          else opts.onInterim && opts.onInterim(list[0] || '');
          if (!alts.length && list.length) alts = list;
        };
        rec.onerror = e => { error = e.error; };
        rec.onend = finish;
        const timer = setTimeout(() => { try { rec.stop(); } catch (err) {} }, opts.timeout || 9000);
        try { rec.start(); } catch (err) { error = 'start'; finish(); }
      });
    },
    stop() { if (active) { try { active.abort(); } catch (e) {} active = null; } },

    // Porównanie wypowiedzi z celem → { score 0–1, words: [{w, ok}], heard }
    compare(alts, target) {
      const T = U.norm(target);
      const tw = T.split(' ');
      let best = { score: 0, heard: alts[0] || '', words: tw.map(w => ({ w, ok: false })) };
      for (const a of alts) {
        const A = U.norm(a);
        if (!A) continue;
        const aw = A.split(' ');
        const words = tw.map(w => ({ w, ok: aw.some(x => x === w || (w.length > 4 && U.lev(x, w) <= 1)) }));
        const wordScore = words.filter(x => x.ok).length / words.length;
        const charScore = 1 - U.lev(A, T) / Math.max(A.length, T.length);
        const score = Math.max(wordScore, charScore);
        if (score > best.score) best = { score, heard: a, words };
      }
      return best;
    },

    errorText(err) {
      return {
        'not-allowed': 'Brak zgody na mikrofon. Zezwól na mikrofon w ustawieniach przeglądarki.',
        'service-not-allowed': 'Rozpoznawanie mowy jest zablokowane w tej przeglądarce.',
        'no-speech': 'Nic nie usłyszałem – spróbuj mówić głośniej i bliżej telefonu.',
        'audio-capture': 'Nie znaleziono mikrofonu.',
        network: 'Rozpoznawanie mowy wymaga internetu.',
        unsupported: 'Ta przeglądarka nie obsługuje rozpoznawania mowy (działa w Chrome i Safari).'
      }[err] || 'Nie udało się rozpoznać mowy – spróbuj jeszcze raz.';
    }
  };
  window.Speech = Speech;
})();
