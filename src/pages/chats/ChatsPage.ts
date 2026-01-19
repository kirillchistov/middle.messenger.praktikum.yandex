/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import { Block } from '@/core/block';
// import { renderTemplateToFragment } from '@/utils/renderTemplate';
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

    // --- ТЕСТ ДЛЯ ПРОВЕРКИ ОТПИСКИ ---
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log('[ChatsPage] setProps test: triggering re-render');

      this.setProps({
        messages: [
          ...this.props.messages,
          {
            id: this.props.messages.length + 1,
            type: 'incoming',
            text: '[test] сообщение для проверки отписки слушателей',
            time: '23:59',
          },
        ],
      });
    }, 2000);
    // --- КОНЕЦ ТЕСТА ---
  }

  private setupMenus(root: HTMLElement): void {
    // меню чата
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
        const item = (e.target as HTMLElement)
          .closest<HTMLButtonElement>('.chat-thread__menu-item');
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

    // модалки add/remove внутри root
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
        const item = (e.target as HTMLElement)
          .closest<HTMLButtonElement>('.chat-input__attach-item');
        if (!item) return;

        const type = item.dataset.type
          || (item.textContent ?? '').trim().toLowerCase();

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

  // protected render(): DocumentFragment {
  //   return renderTemplateToFragment(template, this.props);
  // }
}
