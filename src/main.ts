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
import { LogoutPage } from './pages/logout';
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

const protectedPaths = ['/messenger', '/chats', '/chat', '/settings'];

const isProtectedPath = (path: string): boolean => protectedPaths.includes(path)
  || path.startsWith('/profile');

const navigate = (path: string): void => {
  const state = store.getState();

  // авторизованный пользователь не должен на /login /register /sign-up
  if ((path === '/login' || path === '/register' || path === '/sign-up') && state.user) {
    router.go('/messenger');
    return;
  }

  // лендинг '/' доступен всем
  if (path === '/') {
    router.go('/');
    return;
  }

  // защита приватных путей
  if (!state.user && isProtectedPath(path)) {
    router.go('/login');
    return;
  }

  router.go(path);
};

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

    const path = link.getAttribute('data-link') || link.getAttribute('href');
    if (!path) return;

    event.preventDefault();
    navigate(path);
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
    .use('/logout', LogoutPage)
    .use('/messenger', ChatsPage)
    .use('/chat', ChatsPage) // дубль на всякий
    .use('/chats', ChatsPage) // дубль на всякий
    .use('/profile', withLayout(ProfileViewPage))
    .use('/profile/edit', withLayout(ProfileEditPage))
    .use('/profile/avatar', withLayout(ProfileAvatarPage))
    .use('/profile/password', withLayout(ProfilePasswordPage))
    .use('/settings', withLayout(ProfileViewPage))
    .use('/404', Error404Page)
    .use('/5xx', Error5xxPage)
    .use('/500', Error5xxPage); // дубль на всякий

  try {
    const user = await AuthAPI.getUser();

    if (user) {
      store.setState({ user });
      const path = window.location.pathname;

      // авторизованный пользователь не должен сидеть на /login, /register, /sign-up
      if (path === '/login'
        || path === '/sign-in'
        || path === '/register'
        || path === '/sign-up') {
        router.go('/messenger');
        return;
      }
      // лендинг '/' доступен всем — не трогаем
    } else {
      store.setState({ user: null });
      const path = window.location.pathname;

      // гость не может на защищённые роуты
      if (isProtectedPath(path)) {
        router.go('/login');
        return;
      }
    }
  } catch {
    store.setState({ user: null });
    const path = window.location.pathname;
    if (isProtectedPath(path)) {
      router.go('/login');
      return;
    }
  }

  router.start();
};

document.addEventListener('DOMContentLoaded', () => {
  initApp().catch((error) => {
    // eslint-disable-next-line no-console
    console.error('[initApp] unhandled error', error);
  });
});
