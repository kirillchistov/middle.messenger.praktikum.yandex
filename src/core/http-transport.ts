/* eslint-disable import/extensions */
import API_BASE_URL from '@/utils/constants';

type RequestOptions = {
  data?: any;
  headers?: Record<string, string>;
  timeout?: number;
};

export class HTTPTransport {
  private readonly baseUrl: string;

  constructor(basePath: string = '') {
    this.baseUrl = `${API_BASE_URL}${basePath}`;
  }

  get<T = unknown>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, 'GET', options);
  }

  post<T = unknown>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, 'POST', options);
  }

  put<T = unknown>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, 'PUT', options);
  }

  delete<T = unknown>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, 'DELETE', options);
  }

  private request<T>(
    url: string,
    method: string,
    options: RequestOptions,
  ): Promise<T> {
    const { data, headers = {}, timeout = 5000 } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === 'GET';

      let fullUrl = `${this.baseUrl}${url}`;

      if (isGet && data) {
        const query = new URLSearchParams(data).toString();
        fullUrl = `${fullUrl}?${query}`;
      }

      xhr.open(method, fullUrl);
      xhr.withCredentials = true;
      xhr.timeout = timeout;

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        const { status } = xhr;

        const { responseText } = xhr;
        let response: any = responseText;

        try {
          response = responseText ? JSON.parse(responseText) : responseText;
        } catch {
          // текстовый ответ, оставляем как есть
        }

        if (status >= 200 && status < 300) {
          resolve(response as T);
        } else {
          reject({ status, ...(response || {}) });
        }
      };

      xhr.onabort = () => reject(new Error('Request aborted'));
      xhr.ontimeout = () => reject(new Error('Request timeout'));
      xhr.onerror = () => reject(new Error('Network error'));

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
