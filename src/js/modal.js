(() => {
  const siteWrapper = document.querySelector('.site-wrapper');
  const button = document.querySelector('[data-action="open-search"]');
  const input = document.querySelector('.pagefind-ui__search-input');
  const modal = document.querySelector('.modal-backdrop');

  if (!button || !modal) return;

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      siteWrapper.removeAttribute('inert');
      modal.classList.remove('modal-backdrop--open');
      button.focus();
    }
  }

  button.addEventListener('click', () => {
    siteWrapper.setAttribute('inert', '');
    modal.classList.add('modal-backdrop--open');
    input.focus();
  });

  window.addEventListener('keydown', handleKeyDown);
})();
