/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';

const authHttp = new HTTPTransport('/auth');

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

class AuthAPIClass {
  public async signIn(data: SignInData): Promise<void> {
    await authHttp.post('/signin', { data });
  }

  public async signUp(data: SignUpData): Promise<void> {
    await authHttp.post('/signup', { data });
  }

  public async getUser(): Promise<unknown> {
    return authHttp.get('/user');
  }

  public async logout(): Promise<void> {
    await authHttp.post('/logout');
  }
}

export const AuthAPI = new AuthAPIClass();
