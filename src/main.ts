/* eslint-disable import/extensions */
// Импортируем store и API авторизации
// Меняем роутинг по ссылкам на роутинг по путям
import Handlebars from 'handlebars';
import { registerHandlebarsPartials } from './utils/registerPartials';
import { registerHandlebarsHelpers } from './utils/handlebars-helpers';
// import { Block } from './core/block';
import { router } from './core/router';
import { store } from './core/store';
import { AuthAPI } from './api/auth-api';

import { withLayout } from '@/hoc/withLayout';

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
    .use('/logout', LoginPage) // Позже будет LogoutPage
    .use('/sign-in', LoginPage) // дубль на всякий
    .use('/messenger', withLayout(ChatsPage))
    .use('/chat', withLayout(ChatsPage)) // дубль на всякий
    .use('/chats', withLayout(ChatsPage)) // дубль на всякий
    .use('/profile', withLayout(ProfileViewPage))
    .use('/profile/edit', withLayout(ProfileEditPage))
    .use('/profile/avatar', withLayout(ProfileAvatarPage))
    .use('/profile/password', withLayout(ProfilePasswordPage))
    .use('/settings', withLayout(ProfileViewPage)) // дубль на всякий
    .use('/404', Error404Page)
    .use('/5xx', Error5xxPage)
    .use('/500', Error5xxPage); // дубль на всякий

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
