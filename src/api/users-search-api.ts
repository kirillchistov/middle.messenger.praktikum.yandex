/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';

export type UserSearchDTO = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: string | null;
  email: string;
  phone: string;
};

export type FindUsersByLoginRequest = {
  login: string;
};

const http = new HTTPTransport('/user');

class UsersSearchAPIClass {
  findUsersByLogin(login: string): Promise<UserSearchDTO[]> {
    const payload: FindUsersByLoginRequest = { login };

    return http.post<UserSearchDTO[]>('/search', { data: payload });
  }
}

export const UsersSearchAPI = new UsersSearchAPIClass();
export default UsersSearchAPI;
