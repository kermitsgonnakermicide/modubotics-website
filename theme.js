(() => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem('modubotics-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch {}

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1c1c1a' : '#ece7dd';
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.hidden = false;
      toggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  function syncTheme() {
    applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  }

  syncTheme();
  systemTheme.addEventListener('change', syncTheme);
  document.addEventListener('DOMContentLoaded', () => {
    syncTheme();
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('modubotics-theme', preference); } catch {}
      applyTheme(preference);
    });
  });
})();
