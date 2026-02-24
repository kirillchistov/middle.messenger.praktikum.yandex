// src/core/http-transport.jest.test.ts
import {
  describe, it, expect, beforeEach, afterAll,
} from '@jest/globals';
import { HTTPTransport, METHODS } from './http-transport';

class XHRMock {
  static lastInstance: XHRMock | null = null;

  method = '';
  url = '';
  requestBody: unknown = null;
  headers: Record<string, string> = {};

  status = 200;
  response = '{"ok": true}';

  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  onabort: (() => void) | null = null;
  ontimeout: (() => void) | null = null;

  timeout = 0;
  withCredentials = false;

  constructor() {
    XHRMock.lastInstance = this;
  }

  open(method: string, url: string) {
    this.method = method;
    this.url = url;
  }

  setRequestHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  send(body?: unknown) {
    this.requestBody = body;
    if (this.onload) this.onload();
  }

  abort() {
    if (this.onabort) this.onabort();
  }
}

describe('HTTPTransport (Jest)', () => {
  const OriginalXHR = global.XMLHttpRequest;

  beforeEach(() => {
    // @ts-ignore
    (global as any).XMLHttpRequest = XHRMock as any;
  });

  afterAll(() => {
    global.XMLHttpRequest = OriginalXHR;
  });

  it('делает GET запрос с корректным URL', async () => {
    const http = new HTTPTransport('https://api.test');

    const promise = http.get<{ ok: boolean }>('/ping');
    const xhr = XHRMock.lastInstance!;
    xhr.onload!();

    const result = await promise;
    expect(xhr.method).toBe(METHODS.GET);
    expect(xhr.url).toBe('https://api.test/ping');
    expect(result.ok).toBe(true);
  });

  it('отправляет JSON для POST', async () => {
    const http = new HTTPTransport('https://api.test');

    const promise = http.post<{ ok: boolean }>('/login', {
      data: { login: 'user', password: '123' },
    });
    const xhr = XHRMock.lastInstance!;
    xhr.onload!();

    expect(xhr.method).toBe(METHODS.POST);
    expect(xhr.headers['Content-Type']).toBe('application/json');
    expect(xhr.requestBody).toBe(
      JSON.stringify({ login: 'user', password: '123' }),
    );

    const result = await promise;
    expect(result.ok).toBe(true);
  });

  it('не выставляет Content-Type для FormData', async () => {
    const http = new HTTPTransport('https://api.test');
    const formData = new FormData();
    formData.append('file', new Blob(['test']), 'test.txt');

    const promise = http.post('/upload', { data: formData });
    const xhr = XHRMock.lastInstance!;
    xhr.onload!();

    expect(xhr.headers['Content-Type']).toBeUndefined();
    expect(xhr.requestBody).toBe(formData);
    await promise;
  });

  it('отдаёт ошибку при статусе != 2xx', async () => {
    const http = new HTTPTransport('https://api.test');
    const promise = http.get('/error');

    const xhr = XHRMock.lastInstance!;
    xhr.status = 500;
    xhr.response = '{"reason":"Internal error"}';
    xhr.onload!();

    await expect(promise).rejects.toThrow('HTTP error: 500');
  });
});
