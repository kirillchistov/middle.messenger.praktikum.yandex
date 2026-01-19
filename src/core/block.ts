import { EventBus } from './event-bus';
import { BLOCK_EVENTS } from '../types/block-events';
import type { BlockEventMap } from '../types/block-event-map';
import type { BlockProps } from '../types/block-props';

export abstract class Block<P extends BlockProps = BlockProps> {
  static EVENTS = BLOCK_EVENTS;

  private eventBus: EventBus<BlockEventMap>;

  private _element: HTMLElement | null = null;

  private _meta: { tagName: keyof HTMLElementTagNameMap; props: P };

  protected props: P;

  // Для отписки от слушателей + EventTarget
  // локальные слушатели (на элементах самого блока)
  private _unsubscribeLocalListeners: Array<() => void> = [];

  // глобальные, живут после локального рендера
  private _unsubscribeGlobalListeners: Array<() => void> = [];

  // Локальный: элемент внутри this._element
  protected addDOMListener<K extends keyof HTMLElementEventMap>(
    element: HTMLElement,
    type: K,
    handler: (event: HTMLElementEventMap[K]) => void,
  ): void {
    element.addEventListener(type, handler as EventListener);
    this._unsubscribeLocalListeners.push(() => {
      element.removeEventListener(type, handler as EventListener);
    });
  }

  // Хелперы для DOM‑слушателей
  // Глобальный: document / window / модалки вне this._element
  protected addGlobalListener(
    target: EventTarget,
    type: string,
    handler: (event: Event) => void,
  ): void {
    target.addEventListener(type, handler as EventListener);
    this._unsubscribeGlobalListeners.push(() => {
      target.removeEventListener(type, handler as EventListener);
    });
  }

  // private _unsubscribeListeners: Array<() => void> = [];

  // protected addDOMListener(
  //   target: EventTarget,
  //   type: string,
  //   handler: (event: Event) => void,
  // ): void {
  //   target.addEventListener(type, handler as EventListener);
  //   this._unsubscribeListeners.push(() => {
  //     target.removeEventListener(type, handler as EventListener);
  //   });
  // }

  constructor(tagName: keyof HTMLElementTagNameMap = 'div', props = {} as P) {
    this.eventBus = new EventBus<BlockEventMap>();

    this._meta = { tagName, props };
    this.props = this._makePropsProxy(props);

    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(): void {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(
      Block.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this),
    );
    this.eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this),
    );
    this.eventBus.on(
      Block.EVENTS.FLOW_RENDER,
      this._render.bind(this),
    );
  }

  // Сначала Render, потом CDM
  protected init(): void {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    // this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  public setProps(nextProps: Partial<P>): void {
    if (!nextProps) return;

    const oldProps: P = { ...this.props };
    let changed = false;

    Object.entries(nextProps).forEach(([key, value]) => {
      if (this.props[key as keyof P] !== value) {
        changed = true;
        this.props[key as keyof P] = value as P[keyof P];
      }
    });

    if (!changed) return;

    const newProps: P = { ...this.props };
    this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, newProps);
  }

  private _makePropsProxy(props: P): P {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = (target as Record<string, unknown>)[prop];

        if (typeof value === 'function') {
          return value.bind(target);
        }

        return value;
      },
      set(target, prop: string, value: unknown) {
        (target as Record<string, unknown>)[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
      defineProperty(target, prop, descriptor) {
        return Reflect.defineProperty(target, prop, descriptor);
      },
    });
  }

  private _componentDidMount(): void {
    // console.log('[Block] componentDidMount', this.constructor.name);
    this.componentDidMount();
  }

  // Для очистки слушателей в Block
  protected componentDidMount(): void {}

  public dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): void {
    const needUpdate = this.componentDidUpdate(oldProps as P, newProps as P);
    const shouldRender = typeof needUpdate === 'boolean' ? needUpdate : true;

    if (shouldRender) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected componentDidUpdate(_oldProps: P, _newProps: P): boolean {
    return true;
  }

  // Заменил innerHTML на fragment как в теории
  private _render(): void {
    const html = this.render();
    if (!this._element) return;

    // До удаления считаю число слушателей
    this.logLocalListeners('listeners before remove');

    // снимаю локальные слушатели
    this.removeLocalDOMListeners();

    // После удаления считаю число слушателей
    this.logLocalListeners('listeners after remove');

    // безопасно создаю DOM из строки во временном контейнере
    const tpl = document.createElement('template');
    tpl.innerHTML = html;

    // очищаю корневой элемент
    while (this._element.firstChild) {
      this._element.removeChild(this._element.firstChild);
    }

    // переношу готовое дерево
    this._element.appendChild(tpl.content);

    // вешаю слушатели заново
    this.componentDidMount();
  }

  protected abstract render(): string;

  public mount(rootSelector: string): void {
    const root = document.querySelector(rootSelector);
    if (!root) return;
    root.innerHTML = '';
    const content = this.getContent();
    if (content) {
      root.appendChild(content);
    }
    // Явно вызываю CDM после монтажа - уже нет
    // this.dispatchComponentDidMount();
  }

  public getContent(): HTMLElement | null {
    return this._element;
  }

  private _createDocumentElement(tagName: keyof HTMLElementTagNameMap): HTMLElement {
    return document.createElement(tagName);
  }

  public show(): void {
    if (this._element) {
      this._element.style.display = 'block';
    }
  }

  public hide(): void {
    if (this._element) {
      this._element.style.display = 'none';
    }
  }

  // Локальное снятие подписки перед ререндером
  protected removeLocalDOMListeners(): void {
    this._unsubscribeLocalListeners.forEach((fn) => fn());
    this._unsubscribeLocalListeners = [];
  }

  // Глобальное снятие подписки - пока не используется, т.к. нужны пока есть app
  protected removeGlobalDOMListeners(): void {
    this._unsubscribeGlobalListeners.forEach((fn) => fn());
    this._unsubscribeGlobalListeners = [];
  }

  protected logLocalListeners(tag: string): void {
    // eslint-disable-next-line no-console
    console.log(`[Block:${this.constructor.name}] ${tag}`, {
      count: this._unsubscribeLocalListeners.length,
      handlers: this._unsubscribeLocalListeners,
    });
  }

  public destroy(): void {
    this.removeLocalDOMListeners();
    this.removeGlobalDOMListeners();
  }
}
