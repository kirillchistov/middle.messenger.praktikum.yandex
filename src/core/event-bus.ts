export type EventMap = Record<string, unknown[]>;

type Listener<Args extends unknown[]> = (...args: Args) => void;

export class EventBus<Events extends EventMap> {
  private listeners: {
    [K in keyof Events]?: Listener<Events[K]>[];
  } = {};

  // регистрируем слушателя событий
  public on<K extends keyof Events>(
    event: K,
    callback: Listener<Events[K]>,
  ): void {
    const eventListeners = this.listeners[event] ?? [];
    eventListeners.push(callback);
    this.listeners[event] = eventListeners;
  }

  // удаляем callback из списка слушателей
  public off<K extends keyof Events>(
    event: K,
    callback: Listener<Events[K]>,
  ): void {
    const eventListeners = this.listeners[event];
    if (!eventListeners) return;

    this.listeners[event] = eventListeners.filter(
      (listener) => listener !== callback,
    );
  }

  // вызываем всех слушателей события с аргументами
  public emit<K extends keyof Events>(
    event: K,
    ...args: Events[K]
  ): void {
    const eventListeners = this.listeners[event];
    if (!eventListeners) return;

    eventListeners.forEach((listener) => {
      listener(...args);
    });
  }
}
