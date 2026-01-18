import Handlebars from 'handlebars';
import { registerHandlebarsPartials } from './utils/registerPartials';
import { Block } from './core/block';

import { RegisterPage } from './pages/register';
import { LoginPage } from './pages/login';
import { ChatsPage } from './pages/chats';
import { Error404Page } from './pages/error-404';
import { Error5xxPage } from './pages/error-5xx';
import { LandingPage } from './pages/landing';

import {
  ProfileViewPage,
  ProfileEditPage,
  ProfileAvatarPage,
  ProfilePasswordPage,
} from './pages/profile';

import './styles/base.pcss';
import './styles/layout.pcss';
import './styles/forms.pcss';
import './styles/chat.pcss';
import './styles/components/input.pcss';
import './styles/components/button.pcss';

// ---------- Общий UI (тема, меню, модалки) ----------

window.Handlebars = Handlebars;

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

// const setupModals = (): void => {
//   // user-модалки
//   const addModal = document.getElementById('user-modal-add');
//   const removeModal = document.getElementById('user-modal-remove');
//   const userBackdrop = document.getElementById('user-modal-backdrop');

//   if (addModal && removeModal && userBackdrop) {
//     const closeAllUsers = () => {
//       addModal.classList.remove('chat-user-modal--open');
//       removeModal.classList.remove('chat-user-modal--open');
//       userBackdrop.classList.remove('chat-user-backdrop--open');
//     };

//     userBackdrop.addEventListener('click', closeAllUsers);

//     addModal.addEventListener('click', (e) => {
//       if (!(e.target instanceof HTMLElement)) return;
//       if (!e.target.closest('.modal')) closeAllUsers();
//     });

//     removeModal.addEventListener('click', (e) => {
//       if (!(e.target instanceof HTMLElement)) return;
//       if (!e.target.closest('.modal')) closeAllUsers();
//     });

//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape') closeAllUsers();
//     });
//   }

//   // upload-модалка
//   const uploadModal = document.getElementById('upload-modal');
//   const uploadBackdrop = document.getElementById('upload-backdrop');
//   const uploadClose = document.getElementById('upload-close');

//   if (uploadModal && uploadBackdrop) {
//     const closeUpload = () => {
//       uploadModal.classList.remove('chat-upload-modal--open');
//       uploadBackdrop.classList.remove('chat-upload-backdrop--open');
//     };

//     uploadClose?.addEventListener('click', closeUpload);
//     uploadBackdrop.addEventListener('click', closeUpload);
//     uploadModal.addEventListener('click', (e) => {
//       if (!(e.target instanceof HTMLElement)) return;
//       if (!e.target.closest('.modal')) closeUpload();
//     });
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape') closeUpload();
//     });
//   }
// };

const setupCommonUI = (): void => {
  if (
    !document.body.classList.contains('theme-light')
    && !document.body.classList.contains('theme-dark')
  ) {
    document.body.classList.add('theme-light');
  }

  setupThemeToggle();
  setupNavToggle();
};

// ---------- Инициализация страницы по pathname ----------

const initApp = (): void => {
  registerHandlebarsPartials();
  setupCommonUI();

  const rootSelector = '#app';
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const path = window.location.pathname;

  let pageInstance: Block;
  // | LandingPage
  // | RegisterPage
  // | LoginPage
  // | ChatsPage
  // | ProfileViewPage
  // | ProfileEditPage
  // | ProfileAvatarPage
  // | ProfilePasswordPage
  // | Error404Page
  // | Error5xxPage;

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
  } else if (path === '/error-404' || path === '/error-404.html') {
    pageInstance = new Error404Page();
  } else if (path === '/error-5xx' || path === '/error-5xx.html') {
    pageInstance = new Error5xxPage();
  } else {
    pageInstance = new ChatsPage();
  }

  // root.innerHTML = '';
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  pageInstance.mount(rootSelector);
};

document.addEventListener('DOMContentLoaded', initApp);
