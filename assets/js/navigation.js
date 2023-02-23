(() => {
  const button = document.querySelector('[data-action="sidebar-toggle"]');
  const menu = document.querySelector('.sidebar__body');
  const mq = window.matchMedia('(max-width: 64em)');

  if (!menu || typeof button === 'undefined') return;

  function widthChange(query) {
    button.setAttribute('aria-expanded', !query.matches);
  }

  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
      menu.classList.remove('sidebar__body--open');
    } else {
      button.setAttribute('aria-expanded', 'true');
      menu.classList.add('sidebar__body--open');
      menu.querySelector('a').focus();
    }
  });

  mq.addListener(widthChange);
  widthChange(mq);
})();
