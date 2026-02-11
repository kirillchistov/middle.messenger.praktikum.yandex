/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';
// import { API_BASE_URL } from '@/utils/constants';
import type { SignInData, SignUpData } from '@/types/response-data';

const authHttp = new HTTPTransport('/auth');

export class AuthAPI {
  // регистрация
  public static async signUp(data: SignUpData): Promise<SignUpData> {
    return authHttp.post<SignUpData>('/signup', {
      data,
    });
  }

  // логин
  public static async signIn(
    login: string,
    password: string,
  ): Promise<SignInData> {
    return authHttp.post<SignInData>('/signin', { data: { login, password } });
  }

  // текущий пользователь
  public static async getUser(): Promise<SignUpData | null> {
    try {
      const user = await authHttp.get<SignUpData>('/user');
      return user;
    } catch {
      return null;
    }
  }

  // logout
  public static async logout(): Promise<void> {
    await authHttp.post('/logout', { data: {} });
  }
}
