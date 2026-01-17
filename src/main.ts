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

// export const setupChatMenu = (): void => {
//   const toggle = document.getElementById('chat-menu-toggle');
//   const menu = document.getElementById('chat-menu');

//   if (!toggle || !menu) return;

//   toggle.addEventListener('click', () => {
//     menu.classList.toggle('chat-thread__menu-dropdown--open');
//   });

//   document.addEventListener('click', (e) => {
//     if (!menu.classList.contains('chat-thread__menu-dropdown--open')) return;
//     if (!(e.target instanceof HTMLElement)) return;
//     const target = e.target as HTMLElement;
//     if (!target.closest('.chat-thread__menu')) {
//       menu.classList.remove('chat-thread__menu-dropdown--open');
//     }
//   });
// };

// const setupUserModals = (): void => {
//   const addTrigger = document.querySelector<HTMLElement>('[data-modal-open="add-user"]');
//   const removeTrigger = document.querySelector<HTMLElement>('[data-modal-open="remove-user"]');

//   const addModal = document.getElementById('user-modal-add');
//   const removeModal = document.getElementById('user-modal-remove');
//   const backdrop = document.getElementById('user-modal-backdrop');

//   if (!addTrigger || !removeTrigger || !addModal || !removeModal || !backdrop) return;

//   const open = (modal: HTMLElement) => {
//     modal.classList.add('chat-user-modal--open');
//     backdrop.classList.add('chat-user-backdrop--open');
//   };

//   const closeAll = () => {
//     addModal.classList.remove('chat-user-modal--open');
//     removeModal.classList.remove('chat-user-modal--open');
//     backdrop.classList.remove('chat-user-backdrop--open');
//   };

//   addTrigger.addEventListener('click', () => open(addModal));
//   removeTrigger.addEventListener('click', () => open(removeModal));

//   // клик по затемнению
//   backdrop.addEventListener('click', closeAll);

//   // клик вне «.modal»
//   addModal.addEventListener('click', (e) => {
//     if (!(e.target instanceof HTMLElement)) return;
//     const target = e.target as HTMLElement;
//     if (!target.closest('.modal')) closeAll();
//   });

//   removeModal.addEventListener('click', (e) => {
//     if (!(e.target instanceof HTMLElement)) return;
//     const target = e.target as HTMLElement;
//     if (!target.closest('.modal')) closeAll();
//   });

//   // Esc
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//       closeAll();
//     }
//   });
// };

// export const setupAttachMenu = (): void => {
//   const toggle = document.getElementById('attach-toggle');
//   const menu = document.getElementById('attach-menu');
//   const modal = document.getElementById('upload-modal');
//   const backdrop = document.getElementById('upload-backdrop');
//   const closeBtn = document.getElementById('upload-close');

//   if (!toggle || !menu || !modal || !backdrop) return;

//   const openModal = () => {
//     modal.classList.add('chat-upload-modal--open');
//     backdrop.classList.add('chat-upload-backdrop--open');
//   };

//   const closeModal = () => {
//     modal.classList.remove('chat-upload-modal--open');
//     backdrop.classList.remove('chat-upload-backdrop--open');
//   };

//   toggle.addEventListener('click', () => {
//     menu.classList.toggle('chat-input__attach-menu--open');
//   });

//   menu.addEventListener('click', (e) => {
//     if (!(e.target instanceof HTMLElement)) return;
//     const target = e.target as HTMLElement;
//     if (!target.matches('.chat-input__attach-item')) return;
//     menu.classList.remove('chat-input__attach-menu--open');
//     openModal();
//   });

//   // клик по затемнению
//   backdrop.addEventListener('click', closeModal);

//   // клик по крестику / кнопке
//   closeBtn?.addEventListener('click', closeModal);

//   // клик вне содержимого модалки
//   modal.addEventListener('click', (e) => {
//     if (!(e.target instanceof HTMLElement)) return;
//     const target = e.target as HTMLElement;
//     if (!target.closest('.modal')) {
//       closeModal();
//     }
//   });

//   // Esc
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//       closeModal();
//     }
//   });
// };

const setupModals = (): void => {
  // user-модалки
  const addModal = document.getElementById('user-modal-add');
  const removeModal = document.getElementById('user-modal-remove');
  const userBackdrop = document.getElementById('user-modal-backdrop');

  if (addModal && removeModal && userBackdrop) {
    const closeAllUsers = () => {
      addModal.classList.remove('chat-user-modal--open');
      removeModal.classList.remove('chat-user-modal--open');
      userBackdrop.classList.remove('chat-user-backdrop--open');
    };

    userBackdrop.addEventListener('click', closeAllUsers);

    addModal.addEventListener('click', (e) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (!e.target.closest('.modal')) closeAllUsers();
    });

    removeModal.addEventListener('click', (e) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (!e.target.closest('.modal')) closeAllUsers();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllUsers();
    });
  }

  // upload-модалка
  const uploadModal = document.getElementById('upload-modal');
  const uploadBackdrop = document.getElementById('upload-backdrop');
  const uploadClose = document.getElementById('upload-close');

  if (uploadModal && uploadBackdrop) {
    const closeUpload = () => {
      uploadModal.classList.remove('chat-upload-modal--open');
      uploadBackdrop.classList.remove('chat-upload-backdrop--open');
    };

    uploadClose?.addEventListener('click', closeUpload);
    uploadBackdrop.addEventListener('click', closeUpload);
    uploadModal.addEventListener('click', (e) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (!e.target.closest('.modal')) closeUpload();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeUpload();
    });
  }
};

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

// ---------- Общий футер на всех страницах ----------

const injectFooter = (): void => {
  const existing = document.querySelector('.app-footer');
  if (existing) return;

  const footer = document.createElement('footer');
  footer.className = 'app-footer';
  footer.innerHTML = `
    <nav class="app-footer__inner">
      <a href="/" class="app-footer__link">Лендинг</a>
      <a href="/register" class="app-footer__link">Регистрация</a>
      <a href="/login" class="app-footer__link">Вход</a>
      <a href="/chats" class="app-footer__link">Чаты</a>
      <a href="/profile" class="app-footer__link">Профиль</a>
      <a href="/error-404" class="app-footer__link">404</a>
      <a href="/error-5xx" class="app-footer__link">5xx</a>
    </nav>
  `;

  const appShell = document.querySelector('.app-shell');

  if (appShell?.parentElement) {
    appShell.parentElement.appendChild(footer);
  } else {
    document.body.appendChild(footer);
  }
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

  root.innerHTML = '';
  pageInstance.mount(rootSelector);
  // setupChatMenu();
  // setupAttachMenu();
  // setupUserModals();
  setupModals();

  if (!path.startsWith('/chat')) {
    injectFooter();
  }
};

document.addEventListener('DOMContentLoaded', initApp);
