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

  protected init(): void {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
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
    console.log('[Block] componentDidMount', this.constructor.name);
    this.componentDidMount();
  }

  protected componentDidMount(): void {}

  public dispatchComponentDidMoun(): void {
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

  private _render(): void {
    const html = this.render();
    if (!this._element) return;
    this._element.innerHTML = html;
    console.log('[Block] rendered', this.constructor.name);
  }

  // protected render(): string {
  //   return '';
  // }

  protected abstract render(): string;

  public mount(rootSelector: string): void {
    const root = document.querySelector(rootSelector);
    if (!root) return;
    root.innerHTML = '';
    const content = this.getContent();
    console.log('[Block] mount', this.constructor.name, 'content:', !!content);
    if (content) {
      root.appendChild(content);
    }
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
}
