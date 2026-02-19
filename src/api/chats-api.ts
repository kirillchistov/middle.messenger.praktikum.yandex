/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';
import type { ChatDTO } from '@/types/response-data';

// типы по swagger /chats
// export type ChatDTO = {
//   id: number;
//   title: string;
//   avatar: string | null;
//   unread_count: number;
//   created_by: number;
//   last_message: {
//     user: {
//       first_name: string;
//       second_name: string;
//       avatar: string | null;
//       email: string;
//       login: string;
//       phone: string;
//     };
//     time: string;
//     content: string;
//   } | null;
// };

export type GetChatsParams = {
  offset?: number;
  limit?: number;
  title?: string;
};

export type CreateChatRequest = {
  title: string;
};

export type AddUsersToChatRequest = {
  users: number[];
  chatId: number;
};

export type DeleteUsersFromChatRequest = {
  users: number[];
  chatId: number;
};

export type GetChatTokenResponse = {
  token: string;
};

const http = new HTTPTransport('/chats');

class ChatsAPIClass {
  // GET /chats
  async getChats(params: GetChatsParams = {}): Promise<ChatDTO[]> {
    const chats = await http.get<ChatDTO[]>('', { data: params });
    if (!chats || chats.length === 0) {
      const demoChat: ChatDTO = {
        id: -1,
        title: 'Демо-чат с камерой',
        avatar: null,
        last_message: null,
        unread_count: 0,
        created_by: 5616,
      };
      return [demoChat];
    }
    return chats;
  }

  // POST /chats
  createChat(data: CreateChatRequest): Promise<void> {
    return http.post<void>('', { data });
  }

  // DELETE /chats
  deleteChat(chatId: number): Promise<void> {
    return http.delete<void>('', { data: { chatId } });
  }

  // PUT /chats/users
  addUsersToChat(data: AddUsersToChatRequest): Promise<void> {
    return http.put<void>('/users', { data });
  }

  // DELETE /chats/users
  deleteUsersFromChat(data: DeleteUsersFromChatRequest): Promise<void> {
    return http.delete<void>('/users', { data });
  }

  // GET /chats/token/{id}
  getChatToken(chatId: number): Promise<GetChatTokenResponse> {
    return http.post<GetChatTokenResponse>(`/token/${chatId}`);
  }
}

const ChatsAPI = new ChatsAPIClass();

export default ChatsAPI;
export { ChatsAPI };
