/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import { attachFormValidation } from '@/utils/formValidation';
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

    const value = textarea.value.trim();
    if (!value) {
      console.log('[ChatsPage] Пустое сообщение, отправка отменена');
      // здесь можно дополнительно добавить блок для показа ошибки
      return;
    }

    console.log('[ChatsPage] Отправка сообщения:', value);

    //  позже будем добавлять сообщение в список
    const nextId = this.props.messages.length + 1;
    this.setProps({
      messages: [
        ...this.props.messages,
        {
          id: nextId,
          type: 'outgoing',
          text: value,
          time: new Date().toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ],
    });

    textarea.value = '';
  }
  // ---------------------------------------

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    console.log('[ChatsPage] componentDidMount');

    const form = root.querySelector<HTMLFormElement>('#chat-message-form');
    if (form) {
      // Валидация формы через утилиту
      attachFormValidation(form, { logOnSuccess: true });
      console.log('[ChatsPage] Валидация формы инициализирована');

      // Подключаю submit через обработчик в Block
      this.addDOMListener(form, 'submit', this.handleMessageSubmit);
    }

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
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
