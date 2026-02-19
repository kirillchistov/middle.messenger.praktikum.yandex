/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import ChatsAPI from '@/api/chats-api';
import { store } from '@/core/store';
import { Block } from '@/core/block';
import { router } from '@/core/router';
import template from './chats.hbs?raw';
// import { handleLogout } from '@/hoc/withLayout';
import { chatSocket } from '@/api/chat-socket';

type Chat = {
  id: number;
  title: string;
};

type ChatsPageProps = {
  chats: Chat[];
};

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props?: Partial<ChatsPageProps>) {
    const defaultProps: ChatsPageProps = {
      chats: [],
    };

    super('div', { ...defaultProps, ...props } as ChatsPageProps);
  }

  // CHANGED: рендер списка чатов из данных API
  private updateChatsList(chats: Chat[]): void {
    const root = this.getContent();
    if (!root) return;

    const listEl = root.querySelector<HTMLElement>('[data-chats-list]');
    if (!listEl) return;

    listEl.innerHTML = chats
      .map(
        (chat) => `
        <li class="chat-list__item" data-chat-id="${chat.id}">
          <button class="chat-sidebar__item" type="button">
            <div class="chat-sidebar__item-top">
              <div class="chat-sidebar__item-avatar">
                ${chat.title.charAt(0).toUpperCase()}
              </div>
              <span class="chat-sidebar__item-title">${chat.title}</span>
            </div>
            <div class="chat-sidebar__item-bottom">
              <span class="chat-sidebar__item-subtitle">Чат</span>
            </div>
          </button>
        </li>`,
      )
      .join('');

    listEl.querySelectorAll<HTMLElement>('[data-chat-id]').forEach((item) => {
      item.addEventListener('click', async () => {
        const id = Number(item.dataset.chatId);
        store.setState({ activeChatId: id });

        const rootEl = this.getContent();
        if (rootEl) {
          const titleEl = rootEl.querySelector<HTMLElement>('[data-chat-title]');
          const avatarEl = rootEl.querySelector<HTMLElement>('[data-chat-avatar]');
          if (titleEl) titleEl.textContent = chats.find((c) => c.id === id)?.title ?? 'Чат';
          if (avatarEl) {
            avatarEl.textContent = (chats.find((c) => c.id === id)?.title ?? '?')
              .charAt(0)
              .toUpperCase();
          }
        }

        try {
          await chatSocket.connect(id); // CHANGED
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Failed to connect chat socket', e);
        }
      });
    });
  }

  protected async componentDidMount(): Promise<void> {
    const root = this.getContent();
    if (!root) return;

    // Загрузка чатов пользователя
    try {
      const chats = await ChatsAPI.getChats({ limit: 50 });
      store.setState({ chats });
      this.updateChatsList(chats);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('ChatsPage: не удалось загрузить чаты', error);
    }

    // Форма отправки сообщения (пока заглушка)
    const form = root.querySelector<HTMLFormElement>('#chat-message-form');
    if (form) {
      const textarea = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

      this.addDOMListener(form, 'submit', (event) => {
        const e = event as SubmitEvent;
        e.preventDefault();
        if (!textarea) return;

        const value = textarea.value.trim();
        if (!value) {
          // eslint-disable-next-line no-console
          console.warn('[ChatsPage] Пустое сообщение – отправка отменена');
          return;
        }

        const state = store.getState();
        const chatId = state.activeChatId;
        if (!chatId) {
          console.warn('[ChatsPage]: Нет выбранного чата');
          return;
        }

        // Отправка по WebSocket
        chatSocket.sendMessage(value);
        const messagesEl = root.querySelector<HTMLElement>('[data-chat-messages]');
        if (messagesEl) {
          messagesEl.insertAdjacentHTML(
            'beforeend',
            `<div class="chat-message chat-message--outgoing">
              <div class="chat-message__bubble">${value}</div>
            </div>`,
          );
        }
        textarea.value = '';
      });
    }

    // Навигация по data-link
    const links = document.querySelectorAll('[data-link]');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = (event.currentTarget as HTMLAnchorElement).getAttribute(
          'href',
        );
        if (href) {
          router.go(href);
        }
      });
    });

    // Logout
    const logoutButton = document.querySelector('[data-logout]');
    if (logoutButton) {
      logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        router.go('/logout');
      });
    }

    // Обработчик создания нового чата
    const createForm = root.querySelector<HTMLFormElement>('#create-chat-form');
    if (createForm) {
      this.addDOMListener(
        createForm,
        'submit',
        async (event: SubmitEvent) => {
          event.preventDefault();

          const formData = new FormData(createForm);
          const title = String(formData.get('title') ?? '').trim();
          if (!title) return;

          try {
            await ChatsAPI.createChat({ title });
            const chats = await ChatsAPI.getChats({ limit: 50 });
            store.setState({ chats });
            this.updateChatsList(chats);
            createForm.reset();
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('ChatsPage: не удалось создать новый чат', error);
          }
        },
      );
    }

    // Добавление пользователя в активный чат
    const addUserForm = root.querySelector<HTMLFormElement>('#chat-add-user-form');
    if (addUserForm) {
      this.addDOMListener(
        addUserForm,
        'submit',
        async (event: SubmitEvent) => {
          event.preventDefault();

          const state = store.getState();
          const chatId = state.activeChatId;
          if (!chatId) return;

          const formData = new FormData(addUserForm);
          const userId = Number(formData.get('userId') ?? 0);
          if (!userId) return;

          try {
            await ChatsAPI.addUsersToChat({ users: [userId], chatId });
            addUserForm.reset();
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('ChatsPage: не удалось добавить пользователя', error);
          }
        },
      );
    }

    // Удаление пользователя из активного чата
    const removeUserForm = root.querySelector<HTMLFormElement>('#chat-remove-user-form');
    if (removeUserForm) {
      this.addDOMListener(
        removeUserForm,
        'submit',
        async (event: SubmitEvent) => {
          event.preventDefault();

          const state = store.getState();
          const chatId = state.activeChatId;
          if (!chatId) return;

          const formData = new FormData(removeUserForm);
          const userId = Number(formData.get('userId') ?? 0);
          if (!userId) return;

          try {
            await ChatsAPI.deleteUsersFromChat({ users: [userId], chatId });
            removeUserForm.reset();
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('ChatsPage: не удалось удалить пользователя', error);
          }
        },
      );
    }

    // Меню/модалки/вложения в сообщение
    this.setupMenus(root);
  }

  private setupMenus(root: HTMLElement): void {
    // Меню чата
    const chatMenuToggle = root.querySelector<HTMLButtonElement>('#chat-menu-toggle');
    const chatMenu = root.querySelector<HTMLDivElement>('#chat-menu');

    if (chatMenuToggle && chatMenu) {
      this.addDOMListener(chatMenuToggle, 'click', () => {
        chatMenu.classList.toggle('chat-thread__menu-dropdown--open');
      });

      this.addDOMListener(root, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        if (!chatMenu.contains(target) && target !== chatMenuToggle) {
          chatMenu.classList.remove('chat-thread__menu-dropdown--open');
        }
      });

      this.addDOMListener(chatMenu, 'click', (event) => {
        const e = event as MouseEvent;
        const item = (e.target as HTMLElement).closest<HTMLButtonElement>(
          '.chat-thread__menu-item',
        );
        if (!item) return;

        const action = item.dataset.modalOpen;
        const modalId = action === 'add-user' ? '#user-modal-add' : '#user-modal-remove';
        const modal = root.querySelector<HTMLDivElement>(modalId);
        const backdrop = root.querySelector<HTMLDivElement>('#user-modal-backdrop');

        if (!modal || !backdrop) return;

        modal.classList.add('chat-user-modal--open');
        backdrop.classList.add('chat-user-backdrop--open');
      });
    }

    // Модалки добавления/удаления пользователя из чата
    const addModal = root.querySelector<HTMLDivElement>('#user-modal-add');
    const removeModal = root.querySelector<HTMLDivElement>('#user-modal-remove');
    const userBackdrop = root.querySelector<HTMLDivElement>('#user-modal-backdrop');

    if (addModal && removeModal && userBackdrop) {
      const closeAll = () => {
        addModal.classList.remove('chat-user-modal--open');
        removeModal.classList.remove('chat-user-modal--open');
        userBackdrop.classList.remove('chat-user-backdrop--open');
      };

      this.addDOMListener(userBackdrop, 'click', () => {
        closeAll();
      });

      this.addDOMListener(addModal, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        if (!target.closest('.modal')) closeAll();
      });

      this.addDOMListener(removeModal, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        if (!target.closest('.modal')) closeAll();
      });

      this.addDOMListener(root, 'keydown', (event) => {
        const e = event as KeyboardEvent;
        if (e.key === 'Escape') {
          closeAll();
        }
      });
    }

    // меню вложений
    const attachToggle = root.querySelector<HTMLButtonElement>('#attach-toggle');
    const attachMenu = root.querySelector<HTMLDivElement>('#attach-menu');
    const uploadModal = root.querySelector<HTMLDivElement>('#upload-modal');
    const uploadBackdrop = root.querySelector<HTMLDivElement>('#upload-backdrop');
    const uploadClose = root.querySelector<HTMLButtonElement>('#upload-close');

    if (attachToggle && attachMenu) {
      this.addDOMListener(attachToggle, 'click', () => {
        attachMenu.classList.toggle('chat-input__attach-menu--open');
      });

      this.addDOMListener(attachMenu, 'click', (event) => {
        const e = event as MouseEvent;
        const item = (e.target as HTMLElement).closest<HTMLButtonElement>(
          '.chat-input__attach-item',
        );
        if (!item) return;

        const type = item.dataset.type || (item.textContent ?? '').trim().toLowerCase();

        // eslint-disable-next-line no-console
        console.log('[ChatsPage] Выбрано вложение:', type);

        attachMenu.classList.remove('chat-input__attach-menu--open');
        this.openAttachModal(type, root);
      });
    }

    if (uploadModal && uploadBackdrop) {
      const closeUpload = () => {
        uploadModal.classList.remove('chat-upload-modal--open');
        uploadBackdrop.classList.remove('chat-upload-backdrop--open');
      };

      if (uploadClose) {
        this.addDOMListener(uploadClose, 'click', () => {
          closeUpload();
        });
      }

      this.addDOMListener(uploadBackdrop, 'click', () => {
        closeUpload();
      });

      this.addDOMListener(uploadModal, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        if (!target.closest('.modal')) {
          closeUpload();
        }
      });

      this.addDOMListener(root, 'keydown', (event) => {
        const e = event as KeyboardEvent;
        if (e.key === 'Escape') {
          closeUpload();
        }
      });
    }
  }

  private openAttachModal(type: string, root: HTMLElement): void {
    const modal = root.querySelector<HTMLDivElement>('#upload-modal');
    const backdrop = root.querySelector<HTMLDivElement>('#upload-backdrop');
    if (!modal || !backdrop) return;

    const titleEl = modal.querySelector<HTMLElement>('[data-modal-title]');
    if (titleEl) {
      if (type.includes('фото') || type.includes('видео')) {
        titleEl.textContent = 'Прикрепить фото или видео';
      } else if (type.includes('файл')) {
        titleEl.textContent = 'Прикрепить файл';
      } else if (type.includes('локация') || type.includes('локацию')) {
        titleEl.textContent = 'Поделиться локацией';
      } else {
        titleEl.textContent = 'Прикрепить вложение';
      }
    }

    modal.classList.add('chat-upload-modal--open');
    backdrop.classList.add('chat-upload-backdrop--open');
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
