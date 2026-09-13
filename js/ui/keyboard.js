/* Klawiatura rosyjska na ekranie + transliteracja z polskich liter (np. „sz” → ш, „ja” → я) */
(function () {
  const SINGLE = { a: 'а', b: 'б', c: 'ц', d: 'д', e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', j: 'й', k: 'к', l: 'л', 'ł': 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', t: 'т', u: 'у', w: 'в', v: 'в', y: 'ы', z: 'з', 'ż': 'ж', 'ź': 'з', 'ś': 'с', 'ć': 'ц', 'ó': 'о', 'ą': 'а', 'ę': 'е', 'ń': 'нь', x: 'кс', q: 'я', "'": 'ь', '`': 'ъ', '"': 'ъ' };
  const COMBO = { 'шцz': 'щ', 'сz': 'ш', 'цz': 'ч', 'цh': 'х', 'кh': 'х', 'рz': 'ж', 'зh': 'ж', 'сh': 'ш', 'йa': 'я', 'йu': 'ю', 'йo': 'ё', 'йe': 'е', 'еe': 'э', 'ьa': 'ья', 'ыi': 'ый', 'иe': 'е', 'иa': 'я', 'иu': 'ю', 'иo': 'ё' };
  const CONS = 'бвгдзклмнпрстфхцчшщ';

  function convertTyped(value, caret) {
    // konwertuje tylko znaki łacińskie przed kursorem, patrząc na poprzednie cyrylickie
    let before = value.slice(0, caret), after = value.slice(caret);
    let out = '';
    for (const ch of before) {
      const low = ch.toLowerCase();
      const upper = ch !== low;
      if (!(low in SINGLE)) { out += ch; continue; }
      let done = false;
      for (const len of [2, 1]) {
        const prev = out.slice(-len);
        const key = prev.toLowerCase() + low;
        if (COMBO[key] && !(len === 1 && prev.toLowerCase() === 'и' && !CONS.includes((out.slice(-2, -1) || '').toLowerCase()))) {
          const wasUpper = prev[0] && prev[0] !== prev[0].toLowerCase();
          let rep = COMBO[key];
          if (wasUpper) rep = rep[0].toUpperCase() + rep.slice(1);
          out = out.slice(0, -len) + rep; done = true; break;
        }
      }
      if (!done) { const r = SINGLE[low]; out += upper ? r[0].toUpperCase() + r.slice(1) : r; }
    }
    return { value: out + after, caret: out.length };
  }

  const ROWS = ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'];

  const KB = {
    attach(input, host) {
      const s = App.settings();
      input.setAttribute('autocomplete', 'off'); input.setAttribute('autocorrect', 'off'); input.setAttribute('autocapitalize', 'off'); input.setAttribute('spellcheck', 'false');
      input.addEventListener('input', e => {
        if (!App.settings().translit || e.isComposing) return;
        if (!/[a-ząćęłńóśźż'`"]/i.test(input.value)) return;
        const { value, caret } = convertTyped(input.value, input.selectionStart ?? input.value.length);
        if (value !== input.value) { input.value = value; try { input.setSelectionRange(caret, caret); } catch (err) {} }
      });
      if (!host) return;
      host.innerHTML = `
        <div class="kb-bar">
          <button type="button" class="chip ${s.keyboard ? 'on' : ''}" data-kb="toggle">${U.icon('kbd')} Klawiatura</button>
          <button type="button" class="chip ${s.translit ? 'on' : ''}" data-kb="translit" title="Pisz polskimi literami: sz→ш, cz→ч, ja→я, y→ы, '→ь">PL→Кир</button>
        </div>
        <div class="kb ${s.keyboard ? '' : 'hidden'}">
          ${ROWS.map(r => `<div class="kb-row">${[...r].map(k => `<button type="button" class="kb-key" data-k="${k}">${k}</button>`).join('')}</div>`).join('')}
          <div class="kb-row"><button type="button" class="kb-key wide" data-k="-">-</button><button type="button" class="kb-key space" data-k=" ">spacja</button><button type="button" class="kb-key wide" data-k="⌫">⌫</button></div>
        </div>`;
      let lastPtr = 0;
      host.addEventListener('pointerdown', e => { const k = e.target.closest('.kb-key'); if (!k) return; e.preventDefault(); lastPtr = Date.now(); press(k); });
      const press = key => {
        FX.tap();
        const k = key.dataset.k;
        const st = input.selectionStart ?? input.value.length, en = input.selectionEnd ?? st;
        if (k === '⌫') {
          if (st === en && st > 0) { input.value = input.value.slice(0, st - 1) + input.value.slice(en); input.setSelectionRange(st - 1, st - 1); }
          else { input.value = input.value.slice(0, st) + input.value.slice(en); input.setSelectionRange(st, st); }
        } else {
          input.value = input.value.slice(0, st) + k + input.value.slice(en);
          input.setSelectionRange(st + 1, st + 1);
        }
        key.classList.add('down'); setTimeout(() => key.classList.remove('down'), 120);
        input.dispatchEvent(new Event('kbinput'));
      };
      host.addEventListener('click', e => {
        const key = e.target.closest('[data-k]');
        const b = e.target.closest('[data-kb]');
        if (b && b.dataset.kb === 'toggle') { const v = !App.settings().keyboard; Store.set('keyboard', v); b.classList.toggle('on', v); U.$('.kb', host).classList.toggle('hidden', !v); input.setAttribute('inputmode', v ? 'none' : 'text'); if (!v) input.focus(); return; }
        if (b && b.dataset.kb === 'translit') { const v = !App.settings().translit; Store.set('translit', v); b.classList.toggle('on', v); FX.toast(v ? 'Transliteracja włączona: sz→ш, cz→ч, ja→я, y→ы' : 'Transliteracja wyłączona'); return; }
        if (!key) return;
        if (Date.now() - lastPtr < 600) return;
        press(key);
      });
    },
    convertTyped
  };
  window.KB = KB;
})();
