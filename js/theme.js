/* Light/dark/system switcher. The choice is stored per browser and, while
   embedded, announced to the host page so both stay in step. */
const themeChoices = document.querySelectorAll('[data-theme-choice]');
const storedTheme = localStorage.getItem('droidtribe-theme') || 'dark';

const setTheme = (choice, announce = true) => {
  const actual =
    choice === 'system'
      ? matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : choice;
  document.documentElement.dataset.theme = actual;
  localStorage.setItem('droidtribe-theme', choice);
  themeChoices.forEach((button) => {
    const selected = String(button.dataset.themeChoice === choice);
    button.setAttribute('aria-pressed', selected);
    button.setAttribute('aria-checked', selected);
  });
  if (embedded && announce) {
    window.parent.postMessage(
      { source: 'droidtribe-static', type: 'theme', theme: actual },
      '*'
    );
  }
};

themeChoices.forEach((button) =>
  button.addEventListener('click', () => setTheme(button.dataset.themeChoice))
);
setTheme(storedTheme);
