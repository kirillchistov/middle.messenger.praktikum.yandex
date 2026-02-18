/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';

// типы по swagger /chats
export type ChatDTO = {
  id: number;
  title: string;
  avatar: string | null;
  // last_message, unread_count добавлю позже
};

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
  getChats(params: GetChatsParams = {}): Promise<ChatDTO[]> {
    return http.get<ChatDTO[]>('', { data: params });
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
