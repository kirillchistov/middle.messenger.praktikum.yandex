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
  responseText: string | null = null;

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
    // onload вызываем вручную из тестов
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
    const http = new HTTPTransport();

    const promise = http.get('/ping');
    const xhr = XHRMock.lastInstance!;
    xhr.responseText = '{"ok": true}';
    xhr.status = 200;
    xhr.onload!();

    await expect(promise).resolves.not.toThrow();

    expect(xhr.method).toBe(METHODS.GET);
    expect(xhr.url).toBe('https://ya-praktikum.tech/api/v2/ping');
  });

  it('отправляет JSON для POST, promise не падает', async () => {
    const http = new HTTPTransport();

    const data = { login: 'user', password: '123' };
    const promise = http.post('/login', { data });
    const xhr = XHRMock.lastInstance!;
    xhr.responseText = '{"ok": true}';
    xhr.status = 200;
    xhr.onload!();

    expect(xhr.method).toBe(METHODS.POST);
    expect(xhr.headers['Content-Type']).toBe('application/json');
    expect(xhr.requestBody).toBe(JSON.stringify(data));

    await expect(promise).resolves.not.toThrow();
  });

  it('не выставляет Content-Type для FormData', async () => {
    const http = new HTTPTransport();
    const formData = new FormData();
    formData.append('file', new Blob(['test']), 'test.txt');

    const promise = http.post('/upload', { data: formData });
    const xhr = XHRMock.lastInstance!;
    xhr.responseText = '{"ok": true}';
    xhr.status = 200;
    xhr.onload!();

    expect(xhr.headers['Content-Type']).toBeUndefined();
    expect(xhr.requestBody).toBe(formData);
    await promise;
  });

  it('отдаёт ошибку при статусе != 2xx', async () => {
    const http = new HTTPTransport();
    const promise = http.get('/error');

    const xhr = XHRMock.lastInstance!;
    xhr.status = 500;
    xhr.responseText = '{"reason":"Internal error"}';
    xhr.onload!();

    await expect(promise).rejects.toThrow('HTTP error: 500');
  });
});
