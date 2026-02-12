/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';

export type SignInData = {
  login: string;
  password: string;
};

export type SignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type UserDTO = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
};

const authHttp = new HTTPTransport('/auth');

// class AuthAPIClass {
//   public async signIn(data: SignInData): Promise<void> {
//     await authHttp.post('/signin', { data });
//   }

//   public async signUp(data: SignUpData): Promise<void> {
//     await authHttp.post('/signup', { data });
//   }

//   public async getUser(): Promise<unknown> {
//     return authHttp.get('/user');
//   }

//   public async logout(): Promise<void> {
//     await authHttp.post('/logout');
//   }
// }

class AuthAPIClass {
  public signUp(data: SignUpData): Promise<{ id: number }> {
    return authHttp.post<{ id: number }>('/signup', { data });
  }

  public signIn(data: SignInData): Promise<void> {
    return authHttp.post<void>('/signin', { data });
  }

  public getUser(): Promise<UserDTO> {
    return authHttp.get<UserDTO>('/user');
  }

  public logout(): Promise<void> {
    return authHttp.post<void>('/logout');
  }
}

export const AuthAPI = new AuthAPIClass();
