;(function () {
  'use strict'

  var currentTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('data-theme', currentTheme)

  function bind() {
    var toggle = document.querySelector('.night-mode-toggle')
    if (!toggle) return
    toggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('theme', next)
    })
  }

  // Ensure the button exists before binding
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind)
  } else {
    bind()
  }
})()
