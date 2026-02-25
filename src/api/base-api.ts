import { HTTPTransport } from '../core/http-transport';

export abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  // Если не переопределить метод и использовать его, - ошибка
  create() { throw new Error('Not implemented'); }

  request() { throw new Error('Not implemented'); }

  update() { throw new Error('Not implemented'); }

  delete() { throw new Error('Not implemented'); }
}
