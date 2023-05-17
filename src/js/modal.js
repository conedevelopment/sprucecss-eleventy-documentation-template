(() => {
  const siteWrapper = document.querySelector('.site-wrapper');
  const button = document.querySelector('[data-action="open-search"]');
  const input = document.querySelector('.pagefind-ui__search-input');
  const modal = document.querySelector('.modal-backdrop');

  if (!button || !modal) return;

  function openModal() {
    siteWrapper.setAttribute('inert', '');
    modal.classList.add('modal-backdrop--open');
    input.focus();
  }

  function closeModal() {
    siteWrapper.removeAttribute('inert');
    modal.classList.remove('modal-backdrop--open');
    button.focus();
  }

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  modal.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });

  button.addEventListener('click', () => {
    openModal();
  });

  window.addEventListener('keydown', handleKeyDown);
})();
