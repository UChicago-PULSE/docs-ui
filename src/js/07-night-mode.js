(function () {
  'use strict';

  const storage = (typeof window !== 'undefined' && window.localStorage) ? window.localStorage : null;
  const KEY = 'night-mode';

  function setNightMode (enabled) {
    const root = document.documentElement;
    if (enabled) root.classList.add('night');
    else root.classList.remove('night');
    if (storage) storage.setItem(KEY, enabled ? '1' : '0');
  }

  function init () {
    const saved = storage ? storage.getItem(KEY) : null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = saved === '1' || (saved === null && prefersDark);
    setNightMode(enabled);

    const toggle = document.querySelector('[data-night-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        const isOn = document.documentElement.classList.contains('night');
        setNightMode(!isOn);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
