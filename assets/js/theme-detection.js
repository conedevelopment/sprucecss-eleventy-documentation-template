(() => {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const preferredTheme = localStorage.getItem('preferred-theme');

  console.log('prefered theme', preferredTheme);

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    } else if (theme === 'system' && darkQuery.matches) {
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme-mode');
    }
  }

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
