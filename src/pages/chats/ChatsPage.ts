/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import { createFormValidation } from '@/utils/formValidation';
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

// Общая типизация метода/функции вместо отдельных свойств
type SubmitHandler = (event: SubmitEvent) => void;

export class ChatsPage extends Block<ChatsPageProps> {
  // Для хранения обработчиков - методов экземпляра
  private handleMessageSubmit: SubmitHandler;

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

    // Подвязываем обработчик в конструкторе
    this.handleMessageSubmit = this.onMessageSubmit.bind(this);
  }

  // Submit с проверкой текста (не пустой)
  private onMessageSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const textarea = form.querySelector<HTMLTextAreaElement>('.chat-input__textarea');
    if (!textarea) return;

    const { validateForm } = createFormValidation(form, { logOnSuccess: true });

    const value = textarea.value.trim();
    if (!value) {
      // eslint-disable-next-line no-console
      console.warn('[ChatsPage] Пустое сообщение — отправка запрещена');
      return;
    }

    const { valid } = validateForm();
    if (!valid) {
      // eslint-disable-next-line no-console
      console.warn('[ChatsPage] ошибка валидации — отправка отменена');
      return;
    }

    // eslint-disable-next-line no-console
    console.log('[ChatsPage] отправка сообщения', value);

    // здесь будем обновлять список сообщений this.props.messages
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#chat-message-form');
    if (!form) {
      // eslint-disable-next-line no-console
      console.warn('[ChatsPage] форма потерялась');
      return;
    }

    const textarea = form.querySelector<HTMLTextAreaElement>('.chat-input__textarea');
    if (!textarea) {
      // eslint-disable-next-line no-console
      console.warn('[ChatsPage] textarea потерялась');
      return;
    }

    const { validateField } = createFormValidation(form, { logOnSuccess: true });

    this.addDOMListener(textarea, 'blur', (e: FocusEvent) => {
      const target = e.target;
      if (
        target instanceof HTMLTextAreaElement
        || target instanceof HTMLInputElement
      ) {
        validateField(target);
      }
    });

    this.addDOMListener(form, 'submit', this.handleMessageSubmit);

    // Инициализирую контекстное меню
    const chatMenuToggle = root.querySelector<HTMLButtonElement>('#chat-menu-toggle');
    const chatMenu = root.querySelector<HTMLDivElement>('#chat-menu');

    if (chatMenuToggle && chatMenu) {
      this.addDOMListener(chatMenuToggle, 'click', () => {
        chatMenu.classList.toggle('chat-thread__menu-dropdown--open');
        console.log('[ChatsPage] Вкл / выкл меню чата работает');
      });

      this.addDOMListener(root, 'click', (event: MouseEvent) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        if (!chatMenu.classList.contains('chat-thread__menu-dropdown--open')) return;
        if (!target.closest('.chat-thread__menu')) {
          chatMenu.classList.remove('chat-thread__menu-dropdown--open');
        }
      });
    }

    // Обработка клика по меню вложений в сообщение
    const attachToggle = root.querySelector<HTMLButtonElement>('#attach-toggle');
    const attachMenu = root.querySelector<HTMLDivElement>('#attach-menu');

    if (attachToggle && attachMenu) {
      this.addDOMListener(attachToggle, 'click', () => {
        attachMenu.classList.toggle('chat-input__attach-menu--open');
      });

      this.addDOMListener(attachMenu, 'click', (event: MouseEvent) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        if (!target.matches('.chat-input__attach-item')) return;

        attachMenu.classList.remove('chat-input__attach-menu--open');
        console.log('[ChatsPage] Клик по пункту меню вложений:', target.textContent);
        // Здесь надо добавить открытие модалки загрузки
      });
    }

    // Гамбургер "Все чаты"
    const hamburger = root.querySelector<HTMLButtonElement>(
      '.chat-thread__hamburger',
    );
    const sidebar = root.querySelector<HTMLElement>('[data-chat-sidebar]');
    const backdrop = root.querySelector<HTMLElement>('[data-chat-sidebar-backdrop]');

    if (hamburger && sidebar && backdrop) {
      const openSidebar = () => {
        sidebar.classList.add('chat-sidebar--open');
        backdrop.classList.add('chat-sidebar-backdrop--open');
        console.log('[ChatsPage] Открыт сайдбар чатов');
      };

      const closeSidebar = () => {
        sidebar.classList.remove('chat-sidebar--open');
        backdrop.classList.remove('chat-sidebar-backdrop--open');
        console.log('[ChatsPage] Закрыт сайдбар чатов');
      };

      this.addDOMListener(hamburger, 'click', openSidebar);
      this.addDOMListener(backdrop, 'click', closeSidebar);

      this.addDOMListener(root, 'keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closeSidebar();
        }
      });
    }
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
