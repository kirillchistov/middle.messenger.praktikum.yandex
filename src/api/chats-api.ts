/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';
import type {
  ChatDTO,
  ChatUserDTO,
  GetChatsParams,
  CreateChatRequest,
  FindUsersByLoginRequest,
  AddUsersToChatRequest,
  DeleteUsersFromChatRequest,
  GetChatTokenResponse,
} from '@/types/response-data';

export type UpdateChatAvatarResponse = ChatDTO;

const http = new HTTPTransport('/chats');

export type FindUsersRequest = {
  login: string;
};

export type FindUsersResponse = ChatUserDTO[];
class ChatsAPIClass {
  // GET /chats
  async getChats(params: GetChatsParams = {}): Promise<ChatDTO[]> {
    const chats = await http.get<ChatDTO[]>('', { data: params });

    if (!chats || chats.length === 0) {
      // демо‑чат, совместимый с ChatDTO
      const demoChat: ChatDTO = {
        id: -1,
        title: 'Демо-чат с камерой',
        avatar: null,
        unread_count: 0,
        created_by: 0,
        last_message: null,
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

  // GET /chats/{id}/users
  getChatUsers(chatId: number): Promise<ChatUserDTO[]> {
    return http.get<ChatUserDTO[]>(`/${chatId}/users`);
  }

  // POST /user/search — поиск пользователя по логину
  findUsersByLogin(login: string): Promise<ChatUserDTO[]> {
    const payload: FindUsersByLoginRequest = { login };

    return http.post<ChatUserDTO[]>('/user/search', { data: payload });
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

  // PUT /chats/avatar
  updateChatAvatar(chatId: number, file: File): Promise<UpdateChatAvatarResponse> {
    const formData = new FormData();
    formData.append('chatId', String(chatId));
    formData.append('avatar', file);

    return http.put<UpdateChatAvatarResponse>('/avatar', { data: formData });
  }
}

const ChatsAPI = new ChatsAPIClass();

export default ChatsAPI;
export { ChatsAPI };
