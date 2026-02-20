/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import ChatsAPI from '@/api/chats-api';
import { store } from '@/core/store';
import { Block } from '@/core/block';
import { router } from '@/core/router';
import template from './chats.hbs?raw';
import type { ChatDTO, ChatUserDTO } from '@/types/response-data';
import { chatSocket } from '@/api/chat-socket';
import FilesAPI from '@/api/files-api';

type ChatsPageProps = {
  chats: ChatDTO[];
};

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props?: Partial<ChatsPageProps>) {
    const defaultProps: ChatsPageProps = {
      chats: [],
    };

    super('div', { ...defaultProps, ...props } as ChatsPageProps);
  }

  // рендер списка чатов из данных API
  private updateChatsList(chats: ChatDTO[]): void {
    const root = this.getContent();
    if (!root) return;

    const listEl = root.querySelector<HTMLElement>('[data-chats-list]');
    if (!listEl) return;

    listEl.innerHTML = chats
      .map((chat) => {
        const lastMessage = chat.last_message?.content ?? '';
        const time = chat.last_message?.time
          ? new Date(chat.last_message.time).toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          }) : '';
        const unread = chat.unread_count;

        return `
          <li class="chat-list__item" data-chat-id="${chat.id}">
            <button class="chat-sidebar__item" type="button">
              <div class="chat-sidebar__item-top">
                <div class="chat-sidebar__item-avatar">
                  ${chat.title.charAt(0).toUpperCase()}
                </div>
                <span class="chat-sidebar__item-title">${chat.title}</span>
                <span class="chat-sidebar__item-time">${time}</span>
              </div>
              <div class="chat-sidebar__item-bottom">
                <span class="chat-sidebar__item-subtitle">
                  ${lastMessage}
                </span>
                ${unread > 0 ? `<span class="chat-sidebar__item-unread">${unread}</span>` : ''}
              </div>
            </button>
          </li>`;
      })
      .join('');

    listEl.querySelectorAll<HTMLElement>('[data-chat-id]').forEach((item) => {
      item.addEventListener('click', async () => {
        const id = Number(item.dataset.chatId);
        store.setState({ activeChatId: id });

        const rootEl = this.getContent();
        if (rootEl) {
          const titleEl = rootEl.querySelector<HTMLElement>('[data-chat-title]');
          const avatarEl = rootEl.querySelector<HTMLElement>('[data-chat-avatar]');
          const messagesEl = rootEl.querySelector<HTMLElement>('[data-chat-messages]');

          const chat = chats.find((c) => c.id === id);
          if (titleEl) titleEl.textContent = chat?.title ?? 'Чат';
          if (avatarEl) {
            avatarEl.textContent = (chat?.title ?? '?').charAt(0).toUpperCase();
          }

          if (messagesEl) {
            if (id === -1) {
              messagesEl.innerHTML = this.renderDemoThread();
            } else {
              messagesEl.innerHTML = '<p class="chat-thread__placeholder">Сообщения будут здесь</p>';
            }
          }
        }

        if (id === -1) return;

        try {
          await chatSocket.connect(id);
          // подгружаем участников чата и кладём в store
          const users = await ChatsAPI.getChatUsers(id);
          const stateNow = store.getState();
          store.setState({
            chatUsers: {
              ...(stateNow.chatUsers ?? {}),
              [id]: users,
            },
          });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Не удалось подключить сокет чатов', e);
        }
      });
    });
  }

  private renderDemoThread(): string {
    return `
      <div class="chat-message chat-message--incoming">
        <div class="chat-message__avatar">Н</div>
        <div class="chat-message__content">
          <div class="chat-message__header">
            <span class="chat-message__author">Нил Армстронг</span>
            <span class="chat-message__time">21:56</span>
          </div>
          <div class="chat-message__bubble">
            Хассельблад SWC отлично подходит для съёмки на Луне…
          </div>
        </div>
      </div>
    `;
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

    // Форма отправки сообщения
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

        const stateNow = store.getState();
        const chatId = stateNow.activeChatId;
        if (!chatId || chatId === -1) {
          console.warn('[ChatsPage]: Нет выбранного реального чата');
          return;
        }

        chatSocket.sendMessage(value);
        textarea.value = '';
      });
    }

    // Навигация по data-link
    const links = document.querySelectorAll('[data-link]');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
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

    // Создание нового чата (панель)
    const openCreateBtn = root.querySelector<HTMLButtonElement>('#open-create-chat');
    const createPanel = root.querySelector<HTMLDivElement>('#create-chat-panel');
    const createForm = root.querySelector<HTMLFormElement>('#create-chat-form');

    if (openCreateBtn && createPanel) {
      this.addDOMListener(openCreateBtn, 'click', () => {
        createPanel.classList.toggle('chat-sidebar__create-panel--open');
      });
    }

    if (createForm) {
      this.addDOMListener(createForm, 'submit', async (event: SubmitEvent) => {
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
          createPanel?.classList.remove('chat-sidebar__create-panel--open');

          const messagesEl = root.querySelector<HTMLElement>('[data-chat-messages]');
          if (messagesEl) {
            messagesEl.innerHTML = '<p class="chat-thread__placeholder">Сообщения здесь</p>';
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('ChatsPage: не удалось создать новый чат', error);
        }
      });
    }

    // Добавление пользователя в активный чат
    const addUserForm = root.querySelector<HTMLFormElement>('#chat-add-user-form');
    if (addUserForm) {
      this.addDOMListener(addUserForm, 'submit', async (event: SubmitEvent) => {
        event.preventDefault();

        const stateNow = store.getState();
        const chatId = stateNow.activeChatId;
        if (!chatId || chatId === -1) return;

        const formData = new FormData(addUserForm);
        const userId = Number(formData.get('userId') ?? 0);

        if (!userId) return;

        try {
          // eslint-disable-next-line no-console
          console.log('[ChatsPage:addUser] chatId=', chatId, 'userId=', userId);
          await ChatsAPI.addUsersToChat({ users: [userId], chatId });
          addUserForm.reset();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('ChatsPage: не удалось добавить пользователя', error);
        }
      });
    }

    // Удаление пользователя из активного чата
    const removeUserForm = root.querySelector<HTMLFormElement>('#chat-remove-user-form');
    if (removeUserForm) {
      this.addDOMListener(removeUserForm, 'submit', async (event: SubmitEvent) => {
        event.preventDefault();

        const stateNow = store.getState();
        const chatId = stateNow.activeChatId;
        if (!chatId || chatId === -1) return;

        const formData = new FormData(removeUserForm);
        const userId = Number(formData.get('userId') ?? 0);

        if (!userId) return;

        try {
          console.log('[ChatsPage:removeUser] chatId=', chatId, 'userId=', userId);
          await ChatsAPI.deleteUsersFromChat({ users: [userId], chatId });
          removeUserForm.reset();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('ChatsPage: не удалось удалить пользователя', error);
        }
      });
    }

    // Подписка на сообщения из сокета
    chatSocket.subscribe((message) => {
      if (!root) return;

      const messagesEl = root.querySelector<HTMLElement>('[data-chat-messages]');
      if (!messagesEl) return;

      if (messagesEl.querySelector('.chat-thread__placeholder')) {
        messagesEl.innerHTML = '';
      }

      const stateNow = store.getState();
      const currentUserId = stateNow.user?.id;
      const isOutgoing = message.user_id === currentUserId;
      const { activeChatId, chatUsers } = stateNow;
      const usersByChat = chatUsers ?? {};
      const chatUsersForActive = activeChatId ? usersByChat[activeChatId] ?? [] : [];

      // const { activeChatId } = stateNow;
      // const chatUsers = (stateNow.chatUsers ?? {})[activeChatId as number] ?? [];

      const author = chatUsersForActive.find((u: ChatUserDTO) => u.id === message.user_id);
      const displayName = author?.display_name
        || author?.first_name
        || author?.login
        || 'Пользователь';

      const initial = displayName.charAt(0).toUpperCase();

      const filesBase = 'https://ya-praktikum.tech/api/v2/resources';
      let contentHtml = '';
      const avatarUrl = author?.avatar ? `${filesBase}${author.avatar}` : '';

      // const fileHtml = message.file && message.file.path ? `<div class="chat-message__file">
      //         <a href="${filesBase}${message.file.path}" target="_blank" rel="noopener noreferrer">
      //           ${message.file.content_type?.startsWith('image/') ? `
      //             <img src="${filesBase}${message.file.path}" alt="${message.file.filename}"
      //               class="chat-message__image" />` : message.file.filename || 'Файл'}
      //         </a>
      //       </div>` : '';

      // const textHtml = message.content ? `<div>${message.content}</div>` : '';

      // const filesBase = 'https://ya-praktikum.tech/api/v2/resources';

      // let contentHtml = '';

      if (message.type === 'file') {
        // контент = path до файла
        const path = message.content;
        const url = `${filesBase}${path}`;

        const isImage = path.endsWith('.png')
          || path.endsWith('.jpg')
          || path.endsWith('.jpeg')
          || path.endsWith('.webp')
          || path.endsWith('.gif');

        contentHtml = `
          <div>
            <a href="${url}" target="_blank" rel="noopener noreferrer">
              ${isImage ? `<img src="${url}" alt="file" class="chat-message__image" />` : 'Файл'}
            </a>
          </div>
        `;
      } else {
        // обычное текстовое сообщение
        contentHtml = `<div>${message.content}</div>`;
      }

      const time = new Date(message.time).toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const avatarHtml = avatarUrl
        ? `<img src="${avatarUrl}" alt="${displayName}" class="chat-message__avatar-image" />`
        : `<span class="chat-message__avatar-initial">${initial}</span>`;

      // eslint-disable-next-line no-console
      console.log('[ChatsPage] message raw =', message);

      // eslint-disable-next-line no-console
      console.log(
        '[ChatsPage] content / file',
        {
          content: message.content,
          file: message.file,
          filePath: message.file?.path,
          fileContentType: message.file?.content_type,
        },
      );

      // eslint-disable-next-line no-console
      console.log('[ChatsPage] contentHtml =', contentHtml);

      messagesEl.insertAdjacentHTML(
        'beforeend',
        `
          <div class="chat-message chat-message--${isOutgoing ? 'outgoing' : 'incoming'}">
            <div class="chat-message__avatar">
              ${avatarHtml}
            </div>
            <div class="chat-message__content">
              <div class="chat-message__header">
                <span class="chat-message__author">${displayName}</span>
                <span class="chat-message__time">${time}</span>
              </div>
              <div class="chat-message__bubble">
                ${contentHtml}
              </div>
            </div>
          </div>
        `,
      );

      messagesEl.scrollTop = messagesEl.scrollHeight;
    });

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

        // для удаления сразу подтянем список участников
        if (action === 'remove-user') {
          this.populateChatUsers(modal).catch((err) => {
            // eslint-disable-next-line no-console
            console.error('[ChatsPage] failed to load chat users', err);
          });
        }

        modal.classList.add('chat-user-modal--open');
        backdrop.classList.add('chat-user-backdrop--open');
      });
    }

    // --- логика закрытия модалок ---
    const addModal = root.querySelector<HTMLDivElement>('#user-modal-add');
    const removeModal = root.querySelector<HTMLDivElement>('#user-modal-remove');
    const userBackdrop = root.querySelector<HTMLDivElement>('#user-modal-backdrop');

    const closeAll = () => {
      addModal?.classList.remove('chat-user-modal--open');
      removeModal?.classList.remove('chat-user-modal--open');
      userBackdrop?.classList.remove('chat-user-backdrop--open');
    };

    if (userBackdrop) {
      this.addDOMListener(userBackdrop, 'click', () => {
        closeAll();
      });
    }

    if (addModal) {
      this.addDOMListener(addModal, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        if (!target.closest('.modal')) closeAll();
      });
    }

    if (removeModal) {
      this.addDOMListener(removeModal, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        if (!target.closest('.modal')) closeAll();
      });
    }

    this.addDOMListener(root, 'keydown', (event) => {
      const e = event as KeyboardEvent;
      if (e.key === 'Escape') {
        closeAll();
      }
    });

    // --- обработка кнопок в модалках ---
    const addSubmitBtn = root.querySelector<HTMLButtonElement>('#user-modal-add-submit');
    const addCloseBtn = root.querySelector<HTMLButtonElement>('#user-modal-add-close');
    const addLoginInput = root.querySelector<HTMLInputElement>('#add-login');
    const addErrorEl = root.querySelector<HTMLElement>('[data-user-modal-add-error]');

    if (addSubmitBtn && addLoginInput) {
      this.addDOMListener(addSubmitBtn, 'click', async () => {
        if (addErrorEl) addErrorEl.textContent = '';

        const login = addLoginInput.value.trim();
        if (!login) {
          if (addErrorEl) addErrorEl.textContent = 'Укажите логин пользователя';
          return;
        }

        const stateNow = store.getState();
        const chatId = stateNow.activeChatId;
        if (!chatId || chatId === -1) {
          if (addErrorEl) addErrorEl.textContent = 'Чат не выбран';
          return;
        }

        try {
          // ищем пользователя по логину
          const users = await ChatsAPI.findUsersByLogin(login);
          const user = users[0];
          if (!user) {
            if (addErrorEl) addErrorEl.textContent = 'Пользователь не найден';
            return;
          }

          await ChatsAPI.addUsersToChat({ users: [user.id], chatId });
          addLoginInput.value = '';
          closeAll();
        } catch (err: any) {
          // eslint-disable-next-line no-console
          console.error('[ChatsPage] add user failed', err);
          if (addErrorEl) {
            addErrorEl.textContent = err?.reason || 'Не удалось добавить пользователя';
          }
        }
      });
    }

    if (addCloseBtn) {
      this.addDOMListener(addCloseBtn, 'click', () => {
        closeAll();
      });
    }

    const removeCloseBtn = root.querySelector<HTMLButtonElement>('#user-modal-remove-close');
    if (removeCloseBtn) {
      this.addDOMListener(removeCloseBtn, 'click', () => {
        closeAll();
      });
    }

    const attachToggle = root.querySelector<HTMLButtonElement>('#attach-toggle');
    const attachMenu = root.querySelector<HTMLDivElement>('#attach-menu');
    // const uploadModal = root.querySelector<HTMLDivElement>('#upload-modal');
    // const uploadBackdrop = root.querySelector<HTMLDivElement>('#upload-backdrop');
    // const uploadClose = root.querySelector<HTMLButtonElement>('#upload-close');

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

        attachMenu.classList.remove('chat-input__attach-menu--open');
        this.openAttachModal(type, root); // ← вот этот вызов должен быть
      });
    }
  }

  // заполнение списка участников чата в модалке удаления
  private async populateChatUsers(removeModal: HTMLDivElement): Promise<void> {
    const stateNow = store.getState();
    const chatId = stateNow.activeChatId;
    if (!chatId || chatId === -1) return;

    const listEl = removeModal.querySelector<HTMLElement>('[data-chat-users]');
    const errorEl = removeModal.querySelector<HTMLElement>('[data-user-modal-remove-error]');
    if (!listEl) return;
    if (errorEl) errorEl.textContent = '';

    try {
      const users = await ChatsAPI.getChatUsers(chatId);
      if (!users.length) {
        listEl.innerHTML = '<li>В чате нет других участников</li>';
        return;
      }

      listEl.innerHTML = users
        .map(
          (u) => `
          <li
            class="chat-user-modal__item"
            data-user-id="${u.id}"
          >
            <span class="chat-user-modal__item-name">
              ${u.display_name || u.login}
            </span>
            <button
              class="chat-user-modal__item-remove"
              type="button"
            >
              Удалить
            </button>
          </li>`,
        )
        .join('');

      // навесим обработчики по кнопкам "Удалить"
      listEl.querySelectorAll<HTMLButtonElement>('.chat-user-modal__item-remove').forEach((btn) => {
        this.addDOMListener(btn, 'click', async () => {
          const li = btn.closest<HTMLLIElement>('.chat-user-modal__item');
          if (!li) return;
          const userId = Number(li.dataset.userId ?? 0);
          if (!userId) return;

          try {
            await ChatsAPI.deleteUsersFromChat({ users: [userId], chatId });
            li.remove();
          } catch (err: any) {
            // eslint-disable-next-line no-console
            console.error('[ChatsPage] remove user failed', err);
            if (errorEl) {
              errorEl.textContent = err?.reason || 'Не удалось удалить пользователя';
            }
          }
        });
      });
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error('[ChatsPage] getChatUsers failed', err);
      if (errorEl) {
        errorEl.textContent = err?.reason || 'Не удалось загрузить участников';
      }
    }
  }

  private openAttachModal(type: string, root: HTMLElement): void {
    const modal = root.querySelector<HTMLDivElement>('#upload-modal');
    const backdrop = root.querySelector<HTMLDivElement>('#upload-backdrop');
    const fileInput = modal?.querySelector<HTMLInputElement>('#upload-file');
    if (!modal || !backdrop || !fileInput) return;

    const titleEl = modal.querySelector<HTMLElement>('[data-modal-title]');
    if (titleEl) {
      if (type.includes('фото') || type.includes('видео') || type === 'photo') {
        titleEl.textContent = 'Прикрепить фото или видео';
      } else if (type.includes('файл') || type === 'file') {
        titleEl.textContent = 'Прикрепить файл';
      } else if (type.includes('локация') || type === 'location') {
        titleEl.textContent = 'Поделиться локацией (пока файл)';
      } else {
        titleEl.textContent = 'Прикрепить вложение';
      }
    }

    // очистим прошлый выбор
    fileInput.value = '';

    modal.classList.add('chat-upload-modal--open');
    backdrop.classList.add('chat-upload-backdrop--open');

    const closeUpload = () => {
      modal.classList.remove('chat-upload-modal--open');
      backdrop.classList.remove('chat-upload-backdrop--open');
    };

    const handleChange = async () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      const stateNow = store.getState();
      const chatId = stateNow.activeChatId;
      if (!chatId || chatId === -1) {
        // eslint-disable-next-line no-console
        console.warn('[ChatsPage] Нет выбранного чата для вложения');
        return;
      }

      try {
        const uploaded = await FilesAPI.uploadFile(file);
        // отправляем путь в сокет
        chatSocket.sendFile(uploaded.path);
        closeUpload();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[ChatsPage] upload file failed', err);
      } finally {
        // чтобы повторно можно было выбрать тот же файл
        fileInput.value = '';
      }
    };

    // один раз навешиваем
    this.addDOMListener(fileInput, 'change', handleChange);

    const uploadClose = root.querySelector<HTMLButtonElement>('#upload-close');
    if (uploadClose) {
      this.addDOMListener(uploadClose, 'click', () => {
        closeUpload();
      });
    }

    this.addDOMListener(backdrop, 'click', () => {
      closeUpload();
    });

    this.addDOMListener(modal, 'click', (event) => {
      const e = event as MouseEvent;
      const target = e.target as HTMLElement;
      if (!target.closest('.modal')) {
        closeUpload();
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
