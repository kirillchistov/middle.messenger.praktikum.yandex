// src/ts/main.ts

const THEME_KEY = 'chat_saas_theme';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.textContent = theme === 'light' ? 'Светлая тема' : 'Тёмная тема';
  }
}

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  // если сохранённого нет — берём светлую
  return 'light';
}

function setupThemeToggle() {
  const current = getInitialTheme();
  applyTheme(current);

  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const html = document.documentElement;
    const next: Theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    window.localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

function setupNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('landing-nav__links--open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupNavToggle();  
  // сюда же потом добавишь initAuth(), initChat(), initSettings() и т.п.
});
