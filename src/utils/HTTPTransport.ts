const enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type HTTPMethod = `${METHOD}`;

export interface HTTPRequestOptions {
  method?: HTTPMethod;
  data?: unknown;
  headers?: Record<string, string>;
  timeout?: number; // мс
}

/**
 * {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * -> "?a=1&b=2&c=%5Bobject%20Object%5D&k=1%2C2%2C3"
 */
export function queryStringify(
  data: Record<string, unknown> | undefined | null
): string {
  if (!data || typeof data !== 'object') {
    return '';
  }

  const keys = Object.keys(data);
  if (keys.length === 0) {
    return '';
  }

  const parts = keys.map((key) => {
    const value = (data as Record<string, unknown>)[key];
    return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
  });

  return `?${parts.join('&')}`;
}

export class HTTPTransport {
  private readonly baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  public get(url: string, options: Omit<HTTPRequestOptions, 'method'> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.GET });
  }

  public post(url: string, options: Omit<HTTPRequestOptions, 'method'> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.POST });
  }

  public put(url: string, options: Omit<HTTPRequestOptions, 'method'> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.PUT });
  }

  public delete(url: string, options: Omit<HTTPRequestOptions, 'method'> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.DELETE });
  }

  /**
   * options:
   *  - method: METHOD.*
   *  - data?: any
   *  - headers?: Record<string,string>
   *  - timeout?: number (мс)
   */
    public request(
        url: string,
        options: HTTPRequestOptions = { method: METHOD.GET }
    ): Promise<XMLHttpRequest> {
        const {
        method = METHOD.GET,
        data,
        headers = {},
        timeout = 5000,
        } = options;

        const fullUrl = `${this.baseUrl}${url}`;

        return new Promise<XMLHttpRequest>((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            let finalUrl = fullUrl;

            if (method === METHOD.GET && data && typeof data === 'object') {
                finalUrl += queryStringify(data as Record<string, unknown>);
            }

            xhr.open(method, finalUrl);
            xhr.timeout = timeout;

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(String(key), String(headers[key]));
            });

            
      // Обработчики
      xhr.onload = function onload() {
        // По ТЗ — просто резолвим XHR (статус можно проверять в вызывающем коде)
        resolve(xhr);
      };

      xhr.onabort = function onabort() {
        reject(new Error('Request aborted'));
      };

      xhr.onerror = function onerror() {
        reject(new Error('Network error'));
      };

      xhr.ontimeout = function ontimeout() {
        reject(new Error('Request timeout'));
      };

      // Отправка данных
      if (method === METHOD.GET || data == null) {
        xhr.send();
        return;
      }

      const isPlainObject =
        typeof data === 'object' &&
        !(data instanceof FormData) &&
        !(data instanceof Blob) &&
        !(data instanceof ArrayBuffer);

      let bodyToSend: Document | XMLHttpRequestBodyInit | null | undefined;

      if (isPlainObject) {
        const hasContentType = Object.keys(headers).some(
          (h) => h.toLowerCase() === 'content-type'
        );

        if (!hasContentType) {
          xhr.setRequestHeader('Content-Type', 'application/json');
        }

        bodyToSend = JSON.stringify(data);
              } else if (
        data instanceof FormData ||
        data instanceof Blob ||
        data instanceof ArrayBuffer ||
        typeof data === 'string'
      ) {
        bodyToSend = data as XMLHttpRequestBodyInit;
      } else {
        // ничего не отправляем, чтобы не ломать типы
        bodyToSend = null;
      }

      xhr.send(bodyToSend);
    });
  }
}
