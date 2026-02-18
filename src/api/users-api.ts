/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';
import type { UserDTO } from './auth-api';

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

export type UpdateAvatarResponse = UserDTO;

const http = new HTTPTransport('/user');

class UsersAPIClass {
  // PUT /user/profile
  updateProfile(data: UpdateProfileRequest): Promise<UserDTO> {
    return http.put<UserDTO>('/profile', { data });
  }

  // PUT /user/password
  updatePassword(data: UpdatePasswordRequest): Promise<void> {
    return http.put<void>('/password', { data });
  }

  // PUT /user/profile/avatar
  // отправка multipart/form-data с полем avatar (File)
  // updateAvatar(file: File): Promise<UpdateAvatarResponse> {
  //   const formData = new FormData();
  //   formData.append('avatar', file);

  //   // По мотивам видео "Взаимодействие с сетью"
  //   // Для multipart нельзя принудительно ставить 'Content-Type: application/json'
  //   // поэтому используем прямой XMLHttpRequest через HTTPTransport без JSON.
  //   return http.put<UpdateAvatarResponse>('/profile/avatar', {
  //     // data = formData, headers без Content-Type (XHR сам проставит boundary)
  //     data: formData as unknown as BodyInit,
  //     // headers не указываем
  //   } as any);
  // }

  updateAvatar(file: File): Promise<UpdateAvatarResponse> {
    const formData = new FormData();
    formData.append('avatar', file);

    return http.put<UpdateAvatarResponse>('/profile/avatar', { data: formData });
  }

  // GET /user/{id}
  getUserById(id: number): Promise<UserDTO> {
    return http.get<UserDTO>(`/${id}`);
  }
}

const UsersAPI = new UsersAPIClass();

export default UsersAPI;
export { UsersAPI };
