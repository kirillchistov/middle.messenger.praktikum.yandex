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

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props?: Partial<ChatsPageProps>) {
    const defaultProps: ChatsPageProps = {
      chats: [
        {
          id: 1,
          initials: 'JD',
          title: 'John Doe',
          lastMessage: 'Привет!',
          time: '12:30',
          unread: 2,
        },
        {
          id: 2,
          initials: 'AS',
          title: 'Alice',
          lastMessage: 'Созвонимся позже',
          time: '10:05',
          unread: 0,
        },
      ],
      messages: [
        {
          id: 1, type: 'incoming', text: 'Привет!', time: '12:20',
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

    const form = root.querySelector<HTMLFormElement>('#chat-message-form');
    if (form) {
      attachFormValidation(form, { logOnSuccess: true });
    }
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
