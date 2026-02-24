/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';
import type { UserDTO } from '@/api/auth-api';

export type UpdateProfileRequest = {
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  email: string;
  phone: string;
};

export type UpdatePasswordRequest = {
  oldPassword: string;
  newPassword: string;
};

const http = new HTTPTransport('/user');

class UsersAPIClass {
  updateProfile(data: UpdateProfileRequest): Promise<UserDTO> {
    return http.put<UserDTO>('/profile', { data });
  }

  updatePassword(data: UpdatePasswordRequest): Promise<void> {
    return http.put<void>('/password', { data });
  }

  updateAvatar(file: File): Promise<UserDTO> {
    const formData = new FormData();
    formData.append('avatar', file);
    return http.put<UserDTO>('/profile/avatar', { data: formData });
  }
}

export const UsersAPI = new UsersAPIClass();
export default UsersAPI;
