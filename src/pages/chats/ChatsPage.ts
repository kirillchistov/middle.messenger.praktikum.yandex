/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import ChatsAPI from '@/api/chats-api';
import { store } from '@/core/store';
import { Block } from '@/core/block';
import { router } from '@/core/router';
import template from './chats.hbs?raw';
// import chatListTemplate from '../../components/chat-list/chat-list.hbs?raw';
import type { ChatDTO, ChatUserDTO } from '@/types/response-data';
import { chatSocket } from '@/api/chat-socket';
import FilesAPI from '@/api/files-api';
import UsersSearchAPI from '@/api/users-search-api';
import { FILES_BASE } from '@/utils/constants';
import { showToast } from '@/utils/toast';

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
          })
          : '';
        const unread = chat.unread_count;

        const initials = chat.title.charAt(0).toUpperCase();
        const avatarContent = chat.avatar
          ? `<div class="chat-sidebar__item-avatar chat-sidebar__item-avatar--image"
              style="background-image: url('${FILES_BASE}${chat.avatar}');">
            </div>`
          : `<div class="chat-sidebar__item-avatar">
              ${initials}
            </div>`;

        return `
          <li class="chat-list__item" data-chat-id="${chat.id}">
            <button class="chat-sidebar__item" type="button">
              <div class="chat-sidebar__item-top">
                ${avatarContent}
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
            if (chat?.avatar) {
              avatarEl.textContent = '';
              avatarEl.setAttribute(
                'style',
                `background-image: url('${FILES_BASE}${chat.avatar}');`,
              );
            } else {
              avatarEl.style.backgroundImage = '';
              avatarEl.textContent = (chat?.title ?? '?').charAt(0).toUpperCase();
            }
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
          const users = await ChatsAPI.getChatUsers(id);
          const stateNow = store.getState();
          store.setState({
            chatUsers: {
              ...(stateNow.chatUsers ?? {}),
              [id]: users,
            },
          });
        } catch (e: unknown) {
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
      const chatAvatar = root.querySelector<HTMLElement>('[data-chat-avatar]');
      if (chatAvatar) {
        this.addDOMListener(chatAvatar, 'click', () => {
          this.handleChatAvatarChange(root);
        });
      }
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

    const avatarChangeBtn = root.querySelector<HTMLButtonElement>('#chat-avatar-change');
    const avatarInput = root.querySelector<HTMLInputElement>('#chat-avatar-input');

    if (avatarChangeBtn && avatarInput) {
      this.addDOMListener(avatarChangeBtn, 'click', () => {
        avatarInput.click();
      });

      this.addDOMListener(avatarInput, 'change', async () => {
        const file = avatarInput.files?.[0];
        if (!file) return;

        const stateNow = store.getState();
        const chatId = stateNow.activeChatId;
        if (!chatId || chatId === -1) {
          // eslint-disable-next-line no-console
          console.warn('[ChatsPage] Нет выбранного чата для смены аватара');
          return;
        }

        try {
          const updatedChat = await ChatsAPI.updateChatAvatar(chatId, file);

          // обновляем список чатов в сторе
          const chats = (stateNow.chats ?? [])
            .map((c) => (c.id === updatedChat.id ? updatedChat : c));
          store.setState({ chats });
          this.updateChatsList(chats);

          // обновляем аватар в шапке
          const avatarEl = root.querySelector<HTMLElement>('[data-chat-avatar]');
          if (avatarEl) {
            if (updatedChat.avatar) {
              avatarEl.innerHTML = '';
              avatarEl.style.backgroundImage = `url("${FILES_BASE}${updatedChat.avatar}")`;
            } else {
              avatarEl.style.backgroundImage = '';
              avatarEl.textContent = updatedChat.title.charAt(0).toUpperCase();
            }
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('[ChatsPage] updateChatAvatar failed', err);
        } finally {
          avatarInput.value = '';
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
          showToast('Пользователь добавлен в чат', 'success');
          addUserForm.reset();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('ChatsPage: не удалось добавить пользователя', error);
          showToast('Не удалось добавить пользователя', 'error');
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
          showToast('Пользователь удалён из чата', 'success');
          removeUserForm.reset();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('ChatsPage: не удалось удалить пользователя', error);
          showToast('Не удалось удалить пользователя', 'error');
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

      const author = chatUsersForActive.find((u: ChatUserDTO) => u.id === message.user_id);
      const displayName = author?.display_name
        || author?.first_name
        || author?.login
        || 'Пользователь';

      const initial = displayName.charAt(0).toUpperCase();

      let contentHtml = '';
      const avatarUrl = author?.avatar ? `${FILES_BASE}${author.avatar}` : '';

      if (message.type === 'file') {
        // контент = path до файла
        const path = message.content;
        const url = `${FILES_BASE}${path}`;

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
    this.setupSearch(root);
    this.setupMenus(root);
  }

  private setupSendMessage(root: HTMLElement): void {
    const form = root.querySelector<HTMLFormElement>('#chat-message-form');
    const textarea = root.querySelector<HTMLTextAreaElement>('#chat-message-input');
    const attachBtn = root.querySelector<HTMLButtonElement>('[data-chat-attach]');
    const fileInput = root.querySelector<HTMLInputElement>('#chat-file-input');
    const attachmentEl = root.querySelector<HTMLElement>('[data-chat-attachment]');
    const attachmentNameEl = root.querySelector<HTMLElement>('[data-chat-attachment-name]');
    const attachmentRemoveBtn = root.querySelector<HTMLButtonElement>('[data-chat-attachment-remove]');

    if (!form || !textarea || !attachBtn || !fileInput || !attachmentEl || !attachmentNameEl || !attachmentRemoveBtn) {
      return;
    }

    let attachedFile: File | null = null;

    // выбор файла
    this.addDOMListener(attachBtn, 'click', () => {
      fileInput.click();
    });

    this.addDOMListener(fileInput, 'change', () => {
      const file = fileInput.files?.[0] ?? null;
      attachedFile = file;

      if (file) {
        const { name } = file;
        const short = name.length > 20 ? `${name.slice(0, 17)}…` : name;

        attachmentNameEl.textContent = short;
        attachmentEl.hidden = false;
      } else {
        attachmentNameEl.textContent = '';
        attachmentEl.hidden = true;
      }
    });

    // удаление вложения
    this.addDOMListener(attachmentRemoveBtn, 'click', () => {
      attachedFile = null;
      fileInput.value = '';
      attachmentNameEl.textContent = '';
      attachmentEl.hidden = true;
    });

    // отправка сообщения
    this.addDOMListener(form, 'submit', async (event) => {
      event.preventDefault();

      const text = textarea.value.trim();
      if (!text && !attachedFile) return;

      const chatId = store.getState().activeChatId;
      if (!chatId || chatId === -1) return;

      try {
        if (attachedFile) {
          // 1) отправляем файл на /resources
          const fileFormData = new FormData();
          fileFormData.append('resource', attachedFile);

          const uploaded = await ChatsAPI.uploadFile(fileFormData);
          // uploaded.file.path — путь до файла, зависит от твоего API
          const filePath = uploaded?.file?.path ?? '';

          if (filePath) {
            chatSocket.sendFile(filePath);
          }
        }

        if (text) {
          chatSocket.sendMessage(text);
        }

        textarea.value = '';
        attachedFile = null;
        fileInput.value = '';
        attachmentNameEl.textContent = '';
        attachmentEl.hidden = true;
      } catch (err: unknown) {
        // eslint-disable-next-line no-console
        console.error('[ChatsPage] send message/file failed', err);
      }
    });
  }
  // Логика поиска по чатам (фильтр по ключевому слову)
  private setupSearch(root: HTMLElement): void {
    const input = root.querySelector<HTMLInputElement>('[data-chats-search]');
    if (!input) return;

    this.addDOMListener(input, 'input', () => {
      const query = input.value.trim().toLowerCase();

      const state = store.getState();
      const allChats = state.chats ?? [];

      const filtered = query
        ? allChats.filter((chat) => chat.title.toLowerCase()
          .includes(query)) : allChats;

      this.updateChatsList(filtered);
    });
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
        const { chatAction } = item.dataset;
        const changeAvatar = item.dataset.chatAction === 'change-avatar';

        if (changeAvatar) {
          this.handleChatAvatarChange(root);
          chatMenu.classList.remove('chat-thread__menu-dropdown--open');
          return;
        }

        if (chatAction === 'leave-chat') {
          this.handleLeaveChat();
          chatMenu.classList.remove('chat-thread__menu-dropdown--open');
          return;
        }

        if (chatAction === 'delete-chat') {
          this.handleDeleteChat();
          chatMenu.classList.remove('chat-thread__menu-dropdown--open');
          return;
        }

        if (!action) return;
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
          const users = await UsersSearchAPI.findUsersByLogin(login);
          const user = users[0];

          if (!user) {
            if (addErrorEl) addErrorEl.textContent = 'Пользователь не найден';
            return;
          }

          await ChatsAPI.addUsersToChat({ users: [user.id], chatId });
          addLoginInput.value = '';
          showToast('Пользователь добавлен в чат', 'success');
          closeAll();
        } catch (err: unknown) {
          // eslint-disable-next-line no-console
          if (err && typeof err === 'object' && 'reason' in err) {
            const { reason } = err as { reason: string };
            console.error('[ChatsPage] пользователи не добавлены', reason);
            showToast(reason, 'error');
          } else {
            console.error('[ChatsPage] пользователи не добавлены', err);
            showToast('Не удалось добавить пользователя', 'error');
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

  private handleChatAvatarChange(root: HTMLElement): void {
    const fileInput = root.querySelector<HTMLInputElement>('#chat-avatar-input');
    if (!fileInput) return;

    fileInput.value = '';

    this.addDOMListener(fileInput, 'change', async () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      const stateNow = store.getState();
      const chatId = stateNow.activeChatId;
      if (!chatId || chatId === -1) {
        // eslint-disable-next-line no-console
        console.warn('[ChatsPage] Нет выбранного чата для смены аватара');
        return;
      }

      try {
        const updatedChat = await ChatsAPI.updateChatAvatar(chatId, file);

        // const filesBase = FILES_BASE;

        // обновляем список чатов в сторе
        const chats = (stateNow.chats ?? []).map((c) => (c.id === updatedChat.id ? updatedChat : c));
        store.setState({ chats });
        this.updateChatsList(chats);

        // обновляем аватар в шапке
        const avatarEl = root.querySelector<HTMLElement>('[data-chat-avatar]');
        if (avatarEl) {
          if (updatedChat.avatar) {
            avatarEl.textContent = '';
            avatarEl.style.backgroundImage = `url("${FILES_BASE}${updatedChat.avatar}")`;
            avatarEl.style.backgroundSize = 'cover';
            avatarEl.style.backgroundPosition = 'center';
          } else {
            avatarEl.style.backgroundImage = '';
            avatarEl.textContent = updatedChat.title.charAt(0).toUpperCase();
          }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[ChatsPage] updateChatAvatar failed', err);
        showToast('Не удалось обновить аватар', 'error');
      } finally {
        fileInput.value = '';
      }
    });

    // запускаем выбор файла
    fileInput.click();
  }

  private async handleDeleteChat(): Promise<void> {
    const stateNow = store.getState();
    const chatId = stateNow.activeChatId;
    const chats = stateNow.chats ?? [];
    const currentUserId = stateNow.user?.id;

    if (!chatId || chatId === -1) {
      // eslint-disable-next-line no-console
      console.warn('[ChatsPage] Нет выбранного чата для удаления');
      return;
    }

    const chat = chats.find((c) => c.id === chatId);
    if (!chat) return;

    // только создатель чата может удалять
    if (chat.created_by !== currentUserId) {
      // eslint-disable-next-line no-console
      console.warn('[ChatsPage] Только создатель чата может его удалить');
      return;
    }

    const confirmDelete = window.confirm('Удалить этот чат? Его нельзя будет восстановить.');
    if (!confirmDelete) return;

    try {
      await ChatsAPI.deleteChat(chatId);
      showToast('Чат удалён', 'success');
      const updatedChats = chats.filter((c) => c.id !== chatId);
      store.setState({
        chats: updatedChats,
        activeChatId: undefined,
      });

      const root = this.getContent();
      if (root) {
        const titleEl = root.querySelector<HTMLElement>('[data-chat-title]');
        const avatarEl = root.querySelector<HTMLElement>('[data-chat-avatar]');
        const messagesEl = root.querySelector<HTMLElement>('[data-chat-messages]');

        if (titleEl) titleEl.textContent = 'Выберите чат';
        if (avatarEl) {
          avatarEl.textContent = '?';
          avatarEl.style.backgroundImage = '';
        }
        if (messagesEl) {
          messagesEl.innerHTML = '<p class="chat-thread__placeholder">Сообщения появятся здесь, после выбора чата</p>';
        }
      }

      this.updateChatsList(updatedChats);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[ChatsPage] чат не удален', err);
      showToast('Не удалось удалить чат', 'error');
    }
  }

  private async handleLeaveChat(): Promise<void> {
    const stateNow = store.getState();
    const chatId = stateNow.activeChatId;
    const chats = stateNow.chats ?? [];
    const currentUserId = stateNow.user?.id;

    if (!chatId || chatId === -1 || !currentUserId) {
      // eslint-disable-next-line no-console
      console.warn('[ChatsPage] Нет выбранного чата или пользователя для выхода');
      return;
    }

    const confirmLeave = window.confirm('Покинуть этот чат?');
    if (!confirmLeave) return;

    try {
      await ChatsAPI.deleteUsersFromChat({
        users: [currentUserId],
        chatId,
      });
      showToast('Вы покинули чат', 'success');

      // убрать чат из списка для текущего пользователя
      const updatedChats = chats.filter((c) => c.id !== chatId);
      store.setState({
        chats: updatedChats,
        activeChatId: undefined,
      });

      const root = this.getContent();
      if (root) {
        const titleEl = root.querySelector<HTMLElement>('[data-chat-title]');
        const avatarEl = root.querySelector<HTMLElement>('[data-chat-avatar]');
        const messagesEl = root.querySelector<HTMLElement>('[data-chat-messages]');

        if (titleEl) titleEl.textContent = 'Выберите чат';
        if (avatarEl) {
          avatarEl.textContent = '?';
          avatarEl.style.backgroundImage = '';
        }
        if (messagesEl) {
          messagesEl.innerHTML = '<p class="chat-thread__placeholder">Сообщения появятся здесь, после выбора чата</p>';
        }
      }

      this.updateChatsList(updatedChats);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[ChatsPage] Не удалось выйти из чата', err);
      showToast('Не удалось покинуть чат', 'error');
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
            showToast('Пользователь удалён из чата', 'success');
          } catch (err: unknown) {
            // eslint-disable-next-line no-console
            if (err && typeof err === 'object' && 'reason' in err) {
              const { reason } = err as { reason: string };
              console.error('[ChatsPage] пользователь не удален', reason);
              showToast(reason, 'error');
            } else {
              console.error('[ChatsPage] пользователь не удален', err);
              showToast('Не удалось удалить пользователя', 'error');
            }
          }
        });
      });
    } catch (err: unknown) {
      // eslint-disable-next-line no-console
      if (err && typeof err === 'object' && 'reason' in err) {
        const { reason } = err as { reason: string };
        console.error('[ChatsPage] список участников не получен', reason);
      } else {
        console.error('[ChatsPage] список участников не получен', err);
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
        showToast('Файл отправлен', 'success');
        closeUpload();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[ChatsPage] upload file failed', err);
        showToast('Не удалось загрузить файл', 'error');
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
