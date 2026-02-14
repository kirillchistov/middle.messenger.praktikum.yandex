/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';

export type SignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignInData = {
  login: string;
  password: string;
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

const http = new HTTPTransport('/auth');

class AuthAPIClass {
  // ожидаем объект SignUpData
  // public signUp(data: SignUpData): Promise<{ id: number }> {
  //   return http.post<{ id: number }>('/signup', { data });
  // }

  // ожидаем объект SignInData
  //   public async signIn(data: SignInData): Promise<void> {
  //     return http.post<void>('/signin', { data }).catch((error) => {
  //       console.error('AuthAPI.signIn error', error);
  //       throw error;
  //     });
  //   }

  //   public getUser(): Promise<UserDTO> {
  //     return http.get<UserDTO>('/user');
  //   }

  //   public logout(): Promise<void> {
  //     return http.post<void>('/logout');
  //   }
  // }
  public signUp(data:SignUpData): Promise<{ id: number }> {
    return http.post<{ id: number }>('/signup', { data });
  }

  public async signIn(data:SignInData): Promise<void> {
    return http.post<void>('/signin', { data }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('AuthAPI.signIn error', error);
      throw error;
    });
  }

  public getUser(): Promise<UserDTO> {
    return http.get<UserDTO>('/user');
  }

  public logout(): Promise<void> {
    return http.post<void>('/logout');
  }
}

// export default AuthAPI;
// export const AuthAPI = new AuthAPIClass();

const AuthAPI = new AuthAPIClass();

// экспорт по умолчанию + именованный
export default AuthAPI;
export { AuthAPI };
