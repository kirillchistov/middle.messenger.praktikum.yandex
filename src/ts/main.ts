const THEME_KEY = 'chat_saas_theme';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.textContent = theme === 'light' ? 'Ночь' : 'День';
  }
}

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  // if dark not selected, use light
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
  // will add initAuth(), initChat(), initSettings() etc. later
});

function setupChatMenu() {
  const toggle = document.getElementById('chat-menu-toggle');
  const menu = document.getElementById('chat-menu');

  const userModal = document.getElementById('user-modal');
  const userBackdrop = document.getElementById('user-modal-backdrop');
  const userTitle = document.getElementById('user-modal-title');
  const userLoginInput = document.getElementById('user-modal-login') as HTMLInputElement | null;
  const userSubmit = document.getElementById('user-modal-submit');

  if (!toggle || !menu) return;

  const openUserModal = (mode: 'add' | 'remove') => {
    if (!userModal || !userBackdrop || !userTitle || !userLoginInput || !userSubmit) return;

    if (mode === 'add') {
      userTitle.textContent = 'Добавить пользователя';
      userSubmit.textContent = 'Добавить в чат';
    } else {
      userTitle.textContent = 'Удалить пользователя';
      userSubmit.textContent = 'Удалить из чата';
    }

    userLoginInput.value = 'ivanivanov';

    userModal.classList.add('chat-user-modal--open');
    userBackdrop.classList.add('chat-user-backdrop--open');
    userLoginInput.focus();
  };

  const closeUserModal = () => {
    if (!userModal || !userBackdrop) return;
    userModal.classList.remove('chat-user-modal--open');
    userBackdrop.classList.remove('chat-user-backdrop--open');
  };

  // open or close dropdown menu
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('chat-thread__menu-dropdown--open', !expanded);
  });

  // choose menu item
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const action = target.dataset.action;

    if (!action) return;

    menu.classList.remove('chat-thread__menu-dropdown--open');
    toggle.setAttribute('aria-expanded', 'false');

    if (action === 'add-user') {
      openUserModal('add');
    } else if (action === 'remove-user') {
      openUserModal('remove');
    }
  });

  // close menu on click outside
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('chat-thread__menu-dropdown--open')) return;
    const target = e.target as HTMLElement;
    if (!target.closest('.chat-thread__menu')) {
      menu.classList.remove('chat-thread__menu-dropdown--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // close on background click
  if (userBackdrop) {
    userBackdrop.addEventListener('click', () => {
      closeUserModal();
    });
  }

  // close on button click - add API calls later
  if (userSubmit) {
    userSubmit.addEventListener('click', () => {
      closeUserModal();
    });
  }

  // avoid closing on clicks inside
  if (userModal) {
    userModal.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // close on click outside
  document.addEventListener('click', (e) => {
    if (!userModal?.classList.contains('chat-user-modal--open')) return;
    const target = e.target as HTMLElement;
    const insideModal = target.closest('#user-modal');
    const isBackdrop = target.id === 'user-modal-backdrop';
    if (!insideModal && !isBackdrop) {
      closeUserModal();
    }
  });

  // close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && userModal?.classList.contains('chat-user-modal--open')) {
      closeUserModal();
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

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('chat-input__attach-menu--open', !expanded);
  });

  menu.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.matches('.chat-input__attach-item')) return;
    menu.classList.remove('chat-input__attach-menu--open');
    toggle.setAttribute('aria-expanded', 'false');
    openModal();
  });

  backdrop.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('chat-input__attach-menu--open')) return;
    const target = e.target as HTMLElement;
    if (!target.closest('.chat-input__attach-wrapper')) {
      menu.classList.remove('chat-input__attach-menu--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupNavToggle();
  setupChatMenu();
  setupAttachMenu();
});
