import { HTTPTransport } from '../core/http-transport';

export abstract class BaseAPI {
  protected http: HTTPTransport;

  constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка
  create() { throw new Error('Not implemented'); }

  request() { throw new Error('Not implemented'); }

  update() { throw new Error('Not implemented'); }

  delete() { throw new Error('Not implemented'); }
}
