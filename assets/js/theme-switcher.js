(() => {
  const themeSwitcher = document.querySelector('#theme-switcher');
  const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const selected = localStorage.getItem('preferred-theme') ?? systemMode;

  themeSwitcher.addEventListener('input', (e) => {
    localStorage.setItem('preferred-theme', e.target.value);
    document.documentElement.setAttribute('data-theme-mode', e.target.value === 'system' ? systemMode : e.target.value);
    themeSwitcher.setAttribute('data-theme-mode', e.target.value);
  });

  themeSwitcher.querySelector(`option[value="${selected}"]`).selected = 'selected';
  themeSwitcher.setAttribute('data-theme-mode', selected);
})();
