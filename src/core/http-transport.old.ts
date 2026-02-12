/* eslint-disable import/extensions */
/* eslint-disable max-classes-per-file */
// Транспорт с таймаутом, JSON‑сериализацией
// Детальная обработка исключений, 4xx/5xx и сетевых
import { API_BASE_URL } from "@/utils/constants";

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RequestOptions = {
  method?: HTTPMethod;
  data?: unknown;
  timeout?: number;
  headers?: Record<string, string>;
};

export class HTTPError extends Error {
  public status: number;

  public statusText: string;

  constructor(message: string, status: number, statusText: string) {
    super(message);
    this.name = 'HTTPError';
    this.status = status;
    this.statusText = statusText;
  }
}

export class HTTPTransport {
  private readonly baseUrl: string;

  constructor(basePath: string = '') {
    this.baseUrl = `${API_BASE_URL}${basePath}`;
  }

  public get<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, { ...options, method: 'GET' });
  }

  public post<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, { ...options, method: 'POST' });
  }

  public put<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, { ...options, method: 'PUT' });
  }

  public delete<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }

  private async request<T>(url: string, options: RequestOptions): Promise<T> {
    const {
      method = 'GET',
      data,
      timeout = 5000,
      headers = {},
    } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      signal: controller.signal,
      credentials: 'include',
    };

    if (data !== undefined && method !== 'GET') {
      fetchOptions.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${this.baseUrl}${url}`, fetchOptions);
      clearTimeout(id);

      let responseBody: unknown = null;
      const text = await response.text();
      if (text) {
        try {
          responseBody = JSON.parse(text);
        } catch {
          responseBody = text;
        }
      }

      if (!response.ok) {
        // eslint-disable-next-line no-console
        console.error('[HTTPTransport] error', {
          url,
          method,
          status: response.status,
          statusText: response.statusText,
          body: responseBody,
        });

        throw new HTTPError(
          `Request failed with status ${response.status}`,
          response.status,
          response.statusText,
        );
      }

      return responseBody as T;
    } catch (error) {
      clearTimeout(id);

      if (error instanceof HTTPError) {
        throw error;
      }

      // eslint-disable-next-line no-console
      console.error('[HTTPTransport] network/timeout error', { url, method, error });

      throw new Error('Network error, please try again later');
    }
  }
}
