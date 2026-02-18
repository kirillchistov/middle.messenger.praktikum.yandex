/* eslint-disable import/extensions */
import { store } from '@/core/store';
import ChatsAPI from '@/api/chats-api';
import type { UserDTO } from '@/api/auth-api';

export type ChatMessage = {
  id: number;
  user_id: number;
  chat_id: number;
  content: string;
  time: string;
  is_read?: boolean;
};

type SocketStatus = 'idle' | 'connecting' | 'open' | 'closed';

class ChatSocket {
  private socket: WebSocket | null = null;
  private status: SocketStatus = 'idle';
  private pingIntervalId: number | null = null;
  private activeChatId: number | null = null;

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

      this.send({ type: 'get old', content: '0' });

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

      if (Array.isArray(parsed)) {
        const messages = [...parsed].sort(
          (a: any, b: any) => new Date(a.time).getTime() - new Date(b.time).getTime(),
        );

        const stateNow = store.getState();
        const current = stateNow.messages?.[chatId] ?? [];
        store.setState({
          messages: {
            ...stateNow.messages,
            [chatId]: [...current, ...messages],
          },
        });
        return;
      }

      const data = parsed as { type?: string } & Partial<ChatMessage>;

      if (data.type === 'message') {
        const stateNow = store.getState();
        const current = stateNow.messages?.[chatId] ?? [];
        store.setState({
          messages: {
            ...stateNow.messages,
            [chatId]: [...current, data as ChatMessage],
          },
        });
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
