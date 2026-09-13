/* Efekty: dźwięki, konfetti, wibracje, komunikaty */
(function () {
  let ctx;
  function ac() { if (!ctx) { const A = window.AudioContext || window.webkitAudioContext; if (A) ctx = new A(); } if (ctx && ctx.state === 'suspended') ctx.resume(); return ctx; }
  function tone(freq, start, dur, type = 'sine', gain = 0.12) {
    const a = ac(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, a.currentTime + start);
    g.gain.exponentialRampToValueAtTime(gain, a.currentTime + start + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
    o.connect(g).connect(a.destination);
    o.start(a.currentTime + start); o.stop(a.currentTime + start + dur + 0.05);
  }
  const FX = {
    ok() { if (!App.settings().sfx) return; tone(660, 0, 0.12, 'triangle'); tone(990, 0.09, 0.22, 'triangle'); FX.buzz(15); },
    bad() { if (!App.settings().sfx) return; tone(220, 0, 0.18, 'sawtooth', 0.06); tone(170, 0.12, 0.25, 'sawtooth', 0.05); FX.buzz([30, 40, 30]); },
    tap() { if (!App.settings().sfx) return; tone(880, 0, 0.05, 'sine', 0.05); },
    win() { if (!App.settings().sfx) return; [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.11, 0.3, 'triangle', 0.1)); FX.buzz([20, 60, 20, 60, 40]); },
    buzz(p) { if (App.settings().haptics && navigator.vibrate) try { navigator.vibrate(p); } catch (e) {} },

    confetti(amount = 140) {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const cv = document.createElement('canvas');
      cv.className = 'confetti';
      document.body.appendChild(cv);
      const dpr = Math.min(2, devicePixelRatio || 1);
      const W = cv.width = innerWidth * dpr, H = cv.height = innerHeight * dpr;
      const g = cv.getContext('2d');
      const colors = ['#ff4d6d', '#ffb703', '#4cc9f0', '#2ec4b6', '#9b5de5', '#ffffff'];
      const parts = Array.from({ length: amount }, () => ({
        x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35, vx: (Math.random() - 0.5) * 22 * dpr, vy: (-Math.random() * 20 - 6) * dpr,
        r: (4 + Math.random() * 6) * dpr, c: colors[Math.floor(Math.random() * colors.length)], rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, shape: Math.random() < 0.3 ? 'c' : 'r'
      }));
      let frame = 0;
      (function step() {
        g.clearRect(0, 0, W, H);
        for (const p of parts) {
          p.vy += 0.55 * dpr; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
          g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.fillStyle = p.c; g.globalAlpha = Math.max(0, 1 - frame / 160);
          if (p.shape === 'c') { g.beginPath(); g.arc(0, 0, p.r / 2, 0, 7); g.fill(); } else g.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
          g.restore();
        }
        if (++frame < 170) requestAnimationFrame(step); else cv.remove();
      })();
    },

    toast(html, kind = '') {
      let wrap = U.$('.toasts');
      if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toasts'; document.body.appendChild(wrap); }
      const t = document.createElement('div');
      t.className = 'toast ' + kind;
      t.innerHTML = html;
      wrap.appendChild(t);
      setTimeout(() => t.classList.add('out'), 2600);
      setTimeout(() => t.remove(), 3100);
    },
    xp(n, el) {
      const r = el ? el.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0 };
      const f = document.createElement('div');
      f.className = 'xp-float';
      f.textContent = '+' + n + ' XP';
      f.style.left = (r.left + r.width / 2) + 'px';
      f.style.top = r.top + 'px';
      document.body.appendChild(f);
      setTimeout(() => f.remove(), 1100);
    }
  };
  window.FX = FX;
})();
