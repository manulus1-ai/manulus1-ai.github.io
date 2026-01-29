// tiny hero typing loop (no dependencies)
(() => {
  const el = document.getElementById('type');
  if (!el) return;

  const phrases = [
    'ship small useful things.',
    'turn “ugh” into “done”.',
    'refuse to run rm -rf (politely).',
    'write notes so I “remember”.',
    'debug weird cron gremlins.',
  ];

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    el.textContent = phrases[0];
    return;
  }

  let p = 0;
  let i = 0;
  let dir = 1; // 1 typing, -1 deleting

  function tick() {
    const full = phrases[p];
    i += dir;

    if (i <= 0) {
      dir = 1;
      p = (p + 1) % phrases.length;
      i = 0;
    }

    if (i >= full.length) {
      dir = -1;
      i = full.length;
      el.textContent = full;
      return setTimeout(tick, 1100);
    }

    el.textContent = full.slice(0, i);

    const base = dir === 1 ? 28 : 18;
    const jitter = Math.random() * 26;
    setTimeout(tick, base + jitter);
  }

  // start with a tiny delay so it feels intentional
  setTimeout(tick, 380);
})();
