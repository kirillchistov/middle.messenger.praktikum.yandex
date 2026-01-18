/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import template from './chats.hbs?raw';

type Chat = {
  id: number;
  initials: string;
  title: string;
  lastMessage: string;
  time: string;
  unread: number;
};

type Message = {
  id: number;
  type: 'incoming' | 'outgoing';
  text: string;
  time: string;
};

type ChatsPageProps = {
  chats: Chat[];
  messages: Message[];
};

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props?: Partial<ChatsPageProps>) {
    const defaultProps: ChatsPageProps = {
      chats: [
        {
          id: 1,
          initials: 'JD',
          title: 'Иван Лань',
          lastMessage: 'Привет!',
          time: '15:30',
          unread: 2,
        },
        {
          id: 2,
          initials: 'AS',
          title: 'Алиса Чудова',
          lastMessage: 'Перезвоню позже',
          time: '10:05',
          unread: 0,
        },
      ],
      messages: [
        {
          id: 1, type: 'incoming', text: 'Салют!', time: '12:20',
        },
        {
          id: 2, type: 'outgoing', text: 'Привет, как дела?', time: '12:21',
        },
      ],
    };

    super('div', { ...defaultProps, ...props } as ChatsPageProps);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

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

        // eslint-disable-next-line no-console
        console.log('[ChatsPage] Сообщение отправлено:', value);
        textarea.value = '';
      });
    }

    console.log('[ChatsPage] CDM, found:', {
      chatMenuToggle: !!root.querySelector('#chat-menu-toggle'),
      chatMenu: !!root.querySelector('#chat-menu'),
      attachToggle: !!root.querySelector('#attach-toggle'),
      attachMenu: !!root.querySelector('#attach-menu'),
    });

    this.setupMenus(root);
  }

  private setupMenus(root: HTMLElement): void {
    // ----- Контекстное меню чата (Добавить/Удалить пользователя) -----
    const chatMenuToggle = root.querySelector<HTMLButtonElement>('#chat-menu-toggle');
    const chatMenu = root.querySelector<HTMLDivElement>('#chat-menu');

    if (chatMenuToggle && chatMenu) {
      // открыть/закрыть дропдаун
      this.addDOMListener(chatMenuToggle, 'click', () => {
        chatMenu.classList.toggle('chat-thread__menu-dropdown--open');
      });

      // клик вне меню — закрыть
      this.addDOMListener(document, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        if (!chatMenu.contains(target) && target !== chatMenuToggle) {
          chatMenu.classList.remove('chat-thread__menu-dropdown--open');
        }
      });

      // открытие модалок add/remove user
      this.addDOMListener(chatMenu, 'click', (event) => {
        const e = event as MouseEvent;
        const item = (e.target as HTMLElement)
          .closest<HTMLButtonElement>('.chat-thread__menu-item');
        if (!item) return;

        const action = item.dataset.modalOpen; // "add-user" | "remove-user"
        const modalId = action === 'add-user' ? 'user-modal-add' : 'user-modal-remove';
        const modal = document.getElementById(modalId);
        const backdrop = document.getElementById('user-modal-backdrop');

        if (!modal || !backdrop) return;

        modal.classList.add('chat-user-modal--open');
        backdrop.classList.add('chat-user-backdrop--open');
      });

      // закрытие модалок пользователя (по фону/клику вне/Esc)
      const addModal = document.getElementById('user-modal-add');
      const removeModal = document.getElementById('user-modal-remove');
      const userBackdrop = document.getElementById('user-modal-backdrop');

      if (addModal && removeModal && userBackdrop) {
        const closeAll = () => {
          addModal.classList.remove('chat-user-modal--open');
          removeModal.classList.remove('chat-user-modal--open');
          userBackdrop.classList.remove('chat-user-backdrop--open');
        };

        // клик по затемнению
        this.addDOMListener(userBackdrop, 'click', () => {
          closeAll();
        });

        // клик вне .modal
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

        // Esc
        this.addDOMListener(document, 'keydown', (event) => {
          const e = event as KeyboardEvent;
          if (e.key === 'Escape') {
            closeAll();
          }
        });

        this.addDOMListener(userBackdrop, 'click', (event) => {
          console.log('[ChatsPage] backdrop click', event);
          closeAll();
        });
      }
    }

    // ----- Меню вложений + модалка загрузки -----
    const attachToggle = root.querySelector<HTMLButtonElement>('#attach-toggle');
    const attachMenu = root.querySelector<HTMLDivElement>('#attach-menu');
    const uploadModal = document.getElementById('upload-modal');
    const uploadBackdrop = document.getElementById('upload-backdrop');
    const uploadClose = document.getElementById('upload-close');

    if (attachToggle && attachMenu) {
      this.addDOMListener(attachToggle, 'click', () => {
        attachMenu.classList.toggle('chat-input__attach-menu--open');
      });

      this.addDOMListener(attachMenu, 'click', (event) => {
        const e = event as MouseEvent;
        const item = (e.target as HTMLElement)
          .closest<HTMLButtonElement>('.chat-input__attach-item');
        if (!item) return;

        const type = item.dataset.type
          || (item.textContent ?? '').trim().toLowerCase();

        // eslint-disable-next-line no-console
        console.log('[ChatsPage] Выбрано вложение:', type);

        attachMenu.classList.remove('chat-input__attach-menu--open');
        this.openAttachModal(type);
      });
    }

    if (uploadModal && uploadBackdrop) {
      const closeUpload = () => {
        console.log('[ChatsPage] closeUpload()'); // лог
        uploadModal.classList.remove('chat-upload-modal--open');
        uploadBackdrop.classList.remove('chat-upload-backdrop--open');
      };

      if (uploadClose) {
        this.addDOMListener(uploadClose, 'click', () => {
          console.log('[ChatsPage] uploadClose click');
          closeUpload();
        });
      }

      this.addDOMListener(uploadBackdrop, 'click', () => {
        console.log('[ChatsPage] uploadBackdrop click');
        closeUpload();
      });

      this.addDOMListener(uploadModal, 'click', (event) => {
        const e = event as MouseEvent;
        const target = e.target as HTMLElement;
        console.log('[ChatsPage] uploadModal click target', target);
        // если кликнули по «фону» внутри модалки, а не по её содержимому
        if (!target.closest('.modal')) {
          closeUpload();
        }
      });

      this.addDOMListener(document, 'keydown', (event) => {
        const e = event as KeyboardEvent;
        console.log('[ChatsPage] keydown', e.key);
        if (e.key === 'Escape') {
          closeUpload();
        }
      });
    }
  }

  private openAttachModal(type: string): void {
    const modal = document.getElementById('upload-modal');
    const backdrop = document.getElementById('upload-backdrop');
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
