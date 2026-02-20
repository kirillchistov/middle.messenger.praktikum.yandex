/* eslint-disable import/extensions */
import { store } from '@/core/store';
import ChatsAPI from '@/api/chats-api';
import type { UserDTO } from '@/api/auth-api';

export type ChatMessageUser = {
  author: string | undefined;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  avatar?: string | null;
};

export type ChatMessageFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};

export type ChatMessage = {
  id: number;
  user_id: number;
  chat_id: number;
  content: string;
  time: string;
  is_read?: boolean;
  type?: 'message' | 'file' | 'sticker' | 'ping' | 'get old';
  user?: ChatMessageUser;
  file?: ChatMessageFile;
};

type SocketStatus = 'idle' | 'connecting' | 'open' | 'closed';

type ChatSocketListener = (message: ChatMessage) => void;

class ChatSocket {
  private socket: WebSocket | null = null;

  private status: SocketStatus = 'idle';

  private pingIntervalId: number | null = null;

  private activeChatId: number | null = null;

  private listeners: ChatSocketListener[] = [];

  subscribe(listener: ChatSocketListener): void {
    this.listeners.push(listener);
  }

  unsubscribe(listener: ChatSocketListener): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notify(message: ChatMessage): void {
    this.listeners.forEach((l) => l(message));
  }

  async connect(chatId: number): Promise<void> {
    const state = store.getState();
    const user = state.user as UserDTO | null;
    if (!user) {
      throw new Error('User is not authorized');
    }

    if (this.socket && this.activeChatId === chatId && this.status === 'open') {
      return;
    }

    this.disconnect();

    this.status = 'connecting';
    this.activeChatId = chatId;

    const { token } = await ChatsAPI.getChatToken(chatId);

    const url = `wss://ya-praktikum.tech/ws/chats/${user.id}/${chatId}/${token}`;
    this.socket = new WebSocket(url);

    this.socket.addEventListener('open', () => {
      this.status = 'open';
      // eslint-disable-next-line no-console
      console.log('[ChatSocket] open for chat', chatId);

      // запрос старых сообщений
      this.send({ type: 'get old', content: '0' });

      // пинг каждые 10 секунд
      this.pingIntervalId = window.setInterval(() => {
        this.send({ type: 'ping' });
      }, 10000);
    });

    this.socket.addEventListener('close', (event) => {
      this.status = 'closed';
      // eslint-disable-next-line no-console
      console.log('[ChatSocket] closed', event.code, event.reason);

      if (!event.wasClean) {
        setTimeout(() => {
          if (this.activeChatId) {
            this.connect(this.activeChatId).catch((err) => {
              // eslint-disable-next-line no-console
              console.error('[ChatSocket] reconnect failed', err);
            });
          }
        }, 3000);
      }
      this.clearPing();
    });

    this.socket.addEventListener('message', (event) => {
      const parsed = JSON.parse(event.data) as unknown;

      // история сообщений — массив
      if (Array.isArray(parsed)) {
        const messages = [...parsed].sort(
          (a: any, b: any) => new Date(a.time).getTime() - new Date(b.time).getTime(),
        ) as ChatMessage[];

        const stateNow = store.getState();
        const current = stateNow.messages?.[chatId] ?? [];
        const merged = [...current, ...messages];

        store.setState({
          messages: {
            ...stateNow.messages,
            [chatId]: merged,
          },
        });

        merged.forEach((msg) => this.notify(msg));
        return;
      }

      const data = parsed as ChatMessage;

      if (data.type === 'message' || data.type === 'file') {
        const stateNow = store.getState();
        const current = stateNow.messages?.[chatId] ?? [];
        const updated = [...current, data];

        store.setState({
          messages: {
            ...stateNow.messages,
            [chatId]: updated,
          },
        });

        this.notify(data);
      }
    });

    this.socket.addEventListener('error', (event) => {
      // eslint-disable-next-line no-console
      console.error('[ChatSocket] error', event);
    });
  }

  send(payload: unknown): void {
    if (this.status !== 'open' || !this.socket) return;
    this.socket.send(JSON.stringify(payload));
  }

  sendMessage(content: string): void {
    this.send({
      content,
      type: 'message',
    });
  }

  // отправка файла: сначала загружаешь файл через /resources и сюда передаёшь URL/путь
  sendFile(filePath: string): void {
    this.send({
      content: filePath,
      type: 'file',
    });
  }

  disconnect(): void {
    this.clearPing();
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    this.status = 'closed';
    this.activeChatId = null;
  }

  private clearPing(): void {
    if (this.pingIntervalId !== null) {
      window.clearInterval(this.pingIntervalId);
      this.pingIntervalId = null;
    }
  }
}

export const chatSocket = new ChatSocket();
