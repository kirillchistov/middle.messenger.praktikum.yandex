/* eslint-disable import/extensions */

import { HTTPTransport } from '@/core/http-transport';
import type { UserDTO } from '@/types/response-data';
import

const API_BASE = 'http://localhost:4000/api';
const http = new HTTPTransport(API_BASE);

export class ProfileAPI {
  public static async getProfile(): Promise<UserDTO> {
    return http.get<UserDTO>('/auth/user');
  }

  public static async updateProfile(
     Partial<UserDTO>, ...
    ): Promise<UserDTO> {
    return http.put<UserDTO>('/user/profile', { data });
  }

  public static async changePassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<void> {
    await http.put('/user/password', {
       { oldPassword, newPassword },
    });
  }

  public static async updateAvatar(
    avatarUrl: string,
  ): Promise<UserDTO> {
    return http.put<UserDTO>('/user/avatar', {
       { avatar_url: avatarUrl },
    });
  }
}
