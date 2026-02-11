// Импортируем store и API авторизации
// Меняем роутинг по ссылкам на роутинг по путям
import Handlebars from 'handlebars';
import { registerHandlebarsPartials } from './utils/registerPartials';
import { registerHandlebarsHelpers } from './utils/handlebars-helpers';
// import { Block } from './core/block';
import { router } from './core/router';
import { store } from './core/store';
import { AuthAPI } from './api/auth-api';

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

const setupLinkInterception = (): void => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const link = target.closest<HTMLElement>('[data-link]');
    if (!link) return;

    const path = link.getAttribute('data-link');
    if (!path) return;

    event.preventDefault();
    router.go(path);
  });
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
  setupLinkInterception();
};

// ---------- Инициализация страницы по pathname ----------

const initApp = async (): Promise<void> => {
  registerHandlebarsPartials();
  registerHandlebarsHelpers();
  setupCommonUI();

  // регистрируем роуты
  router
    .use('/', LandingPage) // будет перевод на /login
    .use('/sign-up', RegisterPage) // дубль на всякий
    .use('/register', RegisterPage)
    .use('/login', LoginPage)
    .use('/sign-in', LoginPage) // дубль на всякий
    .use('/messenger', ChatsPage)
    .use('/chat', ChatsPage) // дубль на всякий
    .use('/chats', ChatsPage) // дубль на всякий
    .use('/profile', ProfileViewPage)
    .use('/profile/edit', ProfileEditPage)
    .use('/profile/avatar', ProfileAvatarPage)
    .use('/profile/password', ProfilePasswordPage)
    .use('/settings', ProfileViewPage) // дубль на всякий
    .use('/404', Error404Page)
    .use('/5xx', Error5xxPage);

  try {
    const user = await AuthAPI.getUser();
    if (user) {
      store.setState({ user });
      // если пользователь уже авторизован и мы на / или /login — перебросим в /messenger
      const path = window.location.pathname;
      if (path === '/' || path === '/login' || path === '/sign-up') {
        router.go('/messenger');
        return;
      }
    } else {
      store.setState({ user: null });
      const path = window.location.pathname;
      if (path === '/messenger' || path === '/settings') {
        router.go('/');
        return;
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[initApp] getUser error', error);
  }

  router.start();
};

document.addEventListener('DOMContentLoaded', () => {
  initApp().catch((error) => {
    // eslint-disable-next-line no-console
    console.error('[initApp] unhandled error', error);
  });
});
