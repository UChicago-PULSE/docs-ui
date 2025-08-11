/* eslint-env browser */
;(function () {
  'use strict';

  const storage = (typeof window !== 'undefined' && window.localStorage) ? window.localStorage : null;
  const currentTheme = storage ? (storage.getItem('theme') || 'light') : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  function bind () {
    const toggle = document.querySelector('.night-mode-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      if (storage) storage.setItem('theme', next);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
