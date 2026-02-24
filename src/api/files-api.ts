/* eslint-disable import/extensions */
import { HTTPTransport } from '@/core/http-transport';

export type UploadFileResponse = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};

const http = new HTTPTransport('/resources');

class FilesAPIClass {
  uploadFile(file: File): Promise<UploadFileResponse> {
    const formData = new FormData();
    formData.append('resource', file);

    // HTTPTransport должен уметь работать с FormData без принудительного JSON
    // headers не указываем, Content-Type выставит браузер
    return http.post<UploadFileResponse>('', { data: formData });
  }
}

export const FilesAPI = new FilesAPIClass();
export default FilesAPI;
