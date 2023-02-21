function changeAssets(theme) {
  if (!theme) return;
  const themeAssets = document.querySelectorAll('img[data-theme-mode]');

  themeAssets.forEach((el) => {
    el.src = el.getAttribute(`data-${theme}-asset`);
  });
}

const htmlElement = document.querySelector('html');
changeAssets(htmlElement.getAttribute('data-theme-mode') || null);

const observer = new MutationObserver(() => {
  changeAssets(htmlElement.getAttribute('data-theme-mode') || null);
});
