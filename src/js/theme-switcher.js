(() => {
  const themeSwitcher = document.querySelector('#theme-switcher');
  const preferredTheme = localStorage.getItem('preferred-theme') ?? 'system';

  themeSwitcher.addEventListener('click', (e) => {
    if (!e.target.matches('[data-action]')) {
      return;
    }

    const theme = e.target.getAttribute('data-action');
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    localStorage.setItem('preferred-theme', theme);
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? systemMode : theme);
    themeSwitcher.setAttribute('data-theme-mode', theme);
  });

  themeSwitcher.setAttribute('data-theme-mode', preferredTheme);
})();
