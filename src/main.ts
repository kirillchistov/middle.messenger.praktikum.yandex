import '@styles/base.pcss';

import { RegisterPage } from '@pages/register';
import { LoginPage } from '@pages/login';
import { ChatsPage } from '@pages/chats';

import {
  ProfileViewPage,
  ProfileEditPage,
  ProfileAvatarPage,
  ProfilePasswordPage,
} from '@pages/profile';

import { LandingPage } from '@pages/landing';

// ---------- Общий UI (тема, меню, модалки) ----------

const setupThemeToggle = (): void => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('theme-dark');
      document.body.classList.toggle('theme-dark', !isDark);
      document.body.classList.toggle('theme-light', isDark);
    });
  });
};

const setupNavToggle = (): void => {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('landing-nav__links--open');
  });
};

const setupChatMenu = (): void => {
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
};

const setupAttachMenu = (): void => {
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
};

const setupCommonUI = (): void => {
  if (
    !document.body.classList.contains('theme-light') &&
    !document.body.classList.contains('theme-dark')
  ) {
    document.body.classList.add('theme-light');
  }

  setupThemeToggle();
  setupNavToggle();
  setupChatMenu();
  setupAttachMenu();
};

// ---------- Общий футер на всех страницах ----------

const injectFooter = (): void => {
  const existing = document.querySelector('.app-footer');
  if (existing) return;

  const footer = document.createElement('footer');
  footer.className = 'app-footer';
  footer.innerHTML = `
    <div class="app-footer__inner">
      <a href="/" class="app-footer__link">Лендинг</a>
      <a href="/chats" class="app-footer__link">Чаты</a>
      <a href="/profile" class="app-footer__link">Профиль</a>
      <a href="/login" class="app-footer__link">Вход</a>
      <a href="/register" class="app-footer__link">Регистрация</a>
    </div>
  `;

  document.body.appendChild(footer);
};

// ---------- Инициализация страницы по pathname ----------

const initApp = (): void => {
  setupCommonUI();

  const rootSelector = '#app';
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const path = window.location.pathname;

  let pageInstance:
    | LandingPage
    | RegisterPage
    | LoginPage
    | ChatsPage
    | ProfileViewPage
    | ProfileEditPage
    | ProfileAvatarPage
    | ProfilePasswordPage;

  if (path === '/' || path === '/index.html') {
    pageInstance = new LandingPage();
  } else if (path.startsWith('/chats')) {
    pageInstance = new ChatsPage();
  } else if (path === '/register' || path === '/register.html') {
    pageInstance = new RegisterPage();
  } else if (path === '/login' || path === '/login.html') {
    pageInstance = new LoginPage();
  } else if (path === '/profile' || path === '/profile-view.html') {
    pageInstance = new ProfileViewPage();
  } else if (path === '/profile/edit' || path === '/profile-edit.html') {
    pageInstance = new ProfileEditPage();
  } else if (path === '/profile/avatar' || path === '/profile-avatar.html') {
    pageInstance = new ProfileAvatarPage();
  } else if (path === '/profile/password' || path === '/profile-password.html') {
    pageInstance = new ProfilePasswordPage();
  } else {
    // fallback — чаты
    pageInstance = new ChatsPage();
  }

  root.innerHTML = '';
  pageInstance.mount(rootSelector);
  injectFooter();
};

document.addEventListener('DOMContentLoaded', initApp);
