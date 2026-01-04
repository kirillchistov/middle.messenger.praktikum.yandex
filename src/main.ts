import './styles/base.pcss';

function setupThemeToggle() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('theme-dark');
      document.body.classList.toggle('theme-dark', !isDark);
      document.body.classList.toggle('theme-light', isDark);
    });
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
  if (!document.body.classList.contains('theme-light') && !document.body.classList.contains('theme-dark')) {
    document.body.classList.add('theme-light');
  }

  setupThemeToggle();
});

function setupChatMenu() {
  const toggle = document.getElementById('chat-menu-toggle');
  const menu = document.getElementById('chat-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('chat-thread__menu-dropdown--open');
  });

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('chat-thread__menu-dropdown--open')) return;
    const target = e.target as HTMLElement;
    if (!target.closest('.chat-thread__menu')) {
      menu.classList.remove('chat-thread__menu-dropdown--open');
    }
  });
}

function setupAttachMenu() {
  const toggle = document.getElementById('attach-toggle');
  const menu = document.getElementById('attach-menu');
  const modal = document.getElementById('upload-modal');
  const backdrop = document.getElementById('upload-backdrop');

  if (!toggle || !menu || !modal || !backdrop) return;

  const openModal = () => {
    modal.classList.add('chat-upload-modal--open');
    backdrop.classList.add('chat-upload-backdrop--open');
  };

  const closeModal = () => {
    modal.classList.remove('chat-upload-modal--open');
    backdrop.classList.remove('chat-upload-backdrop--open');
  };

  toggle.addEventListener('click', () => {
    menu.classList.toggle('chat-input__attach-menu--open');
  });

  menu.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.matches('.chat-input__attach-item')) return;
    menu.classList.remove('chat-input__attach-menu--open');
    openModal();
  });

  backdrop.addEventListener('click', closeModal);
}

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupNavToggle();
  setupChatMenu();
  setupAttachMenu();
});
