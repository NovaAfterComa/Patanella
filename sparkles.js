/* V42 - Stelline ambientali, esclusivamente decorative. */
(() => {
  'use strict';
  const stage = document.getElementById('stage');
  const layer = document.getElementById('ambient-sparks');
  if (!stage || !layer) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const enabledScenes = new Set(['messaggio', 'segreto', 'prove', 'complici', 'epico', 'citazione', 'finale']);
  const active = new Set();
  let nextTimer = null;
  let generation = 0;

  function stopScheduling() {
    generation++;
    if (nextTimer !== null) window.clearTimeout(nextTimer);
    nextTimer = null;
  }
  function removeStar(star) {
    star.remove();
    active.delete(star);
  }
  function softlyRetire() {
    // Le stelle restano visibili durante la transizione e svaniscono
    // progressivamente. Non le cancelliamo al cambio data-scene.
    for (const star of active) {
      if (star.classList.contains('is-retiring')) continue;
      const current = getComputedStyle(star);
      star.style.setProperty('--retire-opacity', current.opacity);
      star.style.setProperty('--retire-transform', current.transform);
      star.classList.add('is-retiring');
      star.addEventListener('animationend', () => removeStar(star), {once:true});
    }
  }

  function allowed() {
    return enabledScenes.has(stage.dataset.scene) &&
      !reduceMotion.matches && !document.hidden &&
      !stage.classList.contains('is-paused') &&
      document.getElementById('moon-secret')?.hidden !== false;
  }

  function exclusions() {
    const root = stage.getBoundingClientRect();
    const panel = stage.querySelector('.panel.active');
    if (!panel) return [];
    const selectors = [
      '.topbar', '.story-footer:not([hidden])',
      '.welcome-copy', '.welcome-action', '#bottle-frame', '#bottle-guide',
      '.opening-copy', '.letter', '.scene-heading', '.pol.visible',
      '.poetic-inner', '.invitation > *', '.moon-hold:not([hidden])'
    ];
    const nodes = stage.querySelectorAll(selectors.join(','));
    const blocked = [];
    nodes.forEach(node => {
      // Only visible objects from the current scene or permanent UI.
      if (!(node.closest('.panel') === panel || !node.closest('.panel'))) return;
      if (node.hidden || node.getClientRects().length === 0) return;
      const rect = node.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      blocked.push({left: rect.left - root.left, top: rect.top - root.top,
        right: rect.right - root.left, bottom: rect.bottom - root.top});
    });
    return blocked;
  }

  function findSpot(size) {
    const bounds = stage.getBoundingClientRect();
    const w = bounds.width;
    const h = bounds.height;
    if (w < 260 || h < 360) return null;
    const pad = Math.max(18, size + 9);
    const ceiling = Math.min(h - 90, Math.max(86, 75 + (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16)));
    const bottom = h - 36;
    if (bottom - ceiling < 80) return null;
    const blocked = exclusions();
    for (let trial = 0; trial < 75; trial++) {
      const x = pad + Math.random() * (w - 2 * pad);
      const y = ceiling + Math.random() * (bottom - ceiling);
      const margin = 17 + size * .75;
      if (blocked.some(r => x >= r.left - margin && x <= r.right + margin && y >= r.top - margin && y <= r.bottom + margin)) continue;
      if ([...active].some(s => Math.hypot(x - Number(s.dataset.x), y - Number(s.dataset.y)) < Math.max(58, size * 2.7))) continue;
      return {x,y};
    }
    return null; // Uno spazio non adatto? Nessuna stella, invece di coprire il contenuto.
  }

  function create() {
    if (!allowed()) return;
    const maximum = stage.clientWidth < 650 ? 4 : 7;
    if (active.size >= maximum) return;
    const size = (stage.clientWidth < 650 ? 16 : 18) + Math.random() * (stage.clientWidth < 650 ? 10 : 13);
    const spot = findSpot(size);
    if (!spot) return;
    const star = document.createElement('span');
    star.className = 'ambient-spark';
    star.textContent = Math.random() > .34 ? '✦' : '✧';
    star.style.left = spot.x + 'px';
    star.style.top = spot.y + 'px';
    star.style.fontSize = size.toFixed(1) + 'px';
    star.style.setProperty('--spark-life', (2.7 + Math.random() * 1.3).toFixed(2) + 's');
    star.dataset.x = String(spot.x);
    star.dataset.y = String(spot.y);
    active.add(star);
    layer.appendChild(star);
    star.addEventListener('animationend', () => removeStar(star), {once:true});
  }

  function schedule() {
    if (!allowed()) return;
    const token = generation;
    nextTimer = window.setTimeout(() => {
      nextTimer = null;
      if (token !== generation || !allowed()) return;
      create();
      schedule();
    }, 440 + Math.random() * 410);
  }

  let lastScene = stage.dataset.scene;
  let lastPaused = stage.classList.contains('is-paused');
  function refresh(reason) {
    stopScheduling();
    const nextScene = stage.dataset.scene;
    const nowPaused = stage.classList.contains('is-paused');
    if (nextScene !== lastScene || nowPaused !== lastPaused || !allowed() || reason === 'resize') {
      softlyRetire();
    }
    lastScene = nextScene;
    lastPaused = nowPaused;
    if (allowed()) {create(); schedule();}
  }
  new MutationObserver(() => refresh('scene')).observe(stage, {attributes:true, attributeFilter:['data-scene', 'class']});
  document.addEventListener('visibilitychange', () => refresh('visibility'));
  window.addEventListener('resize', () => refresh('resize'), {passive:true});
  reduceMotion.addEventListener?.('change', () => refresh('motion'));
  // Sul pannello finale lo scroll non deve cancellare le stelline.
  refresh('init');
})();
