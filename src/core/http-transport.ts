/* eslint-disable import/extensions */
import API_BASE_URL from '@/utils/constants';

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type RequestOptions = {
  data?: unknown;
  headers?: Record<string, string>;
  timeout?: number;
};

type HTTPMethod = <R=unknown>(url: string, options?: RequestOptions) => Promise<R>;
export class HTTPTransport {
  private readonly baseUrl: string;

  constructor(basePath: string = '') {
    this.baseUrl = `${API_BASE_URL}${basePath}`;
  }

  // используем тип и удаляем дублирование в аргументах
  get: HTTPMethod = (url, options = {}) => (
    this.request(url, METHODS.GET, options)
  );
  put: HTTPMethod = (url, options = {}) => (
    this.request(url, METHODS.PUT, options)
  );
  post: HTTPMethod = (url, options = {}) => (
    this.request(url, METHODS.POST, options)
  );
  delete: HTTPMethod = (url, options = {}) => (
    this.request(url, METHODS.DELETE, options)
  );

  private request<R>(
    url: string,
    method: string,
    options: RequestOptions,
  ): Promise<R> {
    const { data, headers = {}, timeout = 5000 } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === 'GET';

      let fullUrl = `${this.baseUrl}${url}`;

      if (isGet && data) {
        const query = new URLSearchParams(data as Record<string, string>).toString();
        fullUrl = `${fullUrl}?${query}`;
      }

      // Сначала open, потом withCreds, потом вешаем обработчики
      xhr.open(method, fullUrl);
      xhr.withCredentials = true;
      xhr.timeout = timeout;

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        const { status } = xhr;
        const { responseText } = xhr;
        let response: unknown = responseText;

        try {
          response = responseText ? JSON.parse(responseText) : responseText;
        } catch {
          // текстовый ответ
        }

        if (status >= 200 && status < 300) {
          resolve(response as R);
        } else {
          reject({ status, ...(response || {}) });
        }
      };

      xhr.onabort = () => reject(new Error('Request aborted'));
      xhr.ontimeout = () => reject(new Error('Request timeout'));
      xhr.onerror = () => reject(new Error('Network error'));

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        // не трогаем заголовки, не сериализуем
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
