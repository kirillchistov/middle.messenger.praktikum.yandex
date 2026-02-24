import { EventBus } from './event-bus';
import type {
  UserDTO, ChatDTO, ChatMessage, ChatUserDTO,
} from '@/types/response-data';

type Indexed<T = unknown> = {
  [key: string]: T;
};

function isIndexed(value: unknown): value is Indexed {
  return typeof value === 'object' && value !== null;
}

function setValue(object: Indexed, path: string, value: unknown): Indexed {
  const keys = path.split('.');
  let current: Indexed = object;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value as unknown;
    } else {
      if (!isIndexed(current[key])) {
        current[key] = {};
      }
      current = current[key] as Indexed;
    }
  });

  return object;
}

export type AppState = {
  user: UserDTO | null;
  chats?: ChatDTO[];
  activeChatId: number | null;
  messages: Record<number, ChatMessage[]>;
  chatUsers?: Record<number, ChatUserDTO[]>;
};

const defaultState: AppState = {
  user: null,
  chats: [],
  activeChatId: null,
  messages: {},
};

const StoreEvents = {
  Updated: 'updated',
} as const;

// EventBus ожидает EventMap с index signature, где значение – массив аргументов.
// Для события updated аргументы: [AppState].
type StoreEventMap = {
  [StoreEvents.Updated]: [AppState];
};

export class Store {
  private static __instance: Store | null = null;

  private state: AppState = { ...defaultState };

  // Инициализируем через definite assertion и конструктор
  private eventBus!: EventBus<StoreEventMap>;

  private constructor() {
    this.eventBus = new EventBus<StoreEventMap>();
  }

  // Синглтон через статический init/getInstance, без return в конструкторе
  public static init(): Store {
    if (!Store.__instance) {
      Store.__instance = new Store();
    }
    return Store.__instance;
  }

  public static getInstance(): Store {
    if (!Store.__instance) {
      throw new Error('Store не инициализирован. Надо вызвать Store.init().');
    }
    return Store.__instance;
  }

  public getState(): AppState {
    return this.state;
  }

  public set(path: string, value: unknown): void {
    setValue(this.state as unknown as Indexed, path, value);
    // Передаем в emit ...args (state как единственный элемент массива)
    this.eventBus.emit(StoreEvents.Updated, this.state);
  }

  public setState(nextState: Partial<AppState>): void {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.eventBus.emit(StoreEvents.Updated, this.state);
  }

  public reset(): void {
    this.state = { ...defaultState };
    this.eventBus.emit(StoreEvents.Updated, this.state);
  }

  // Listener должен принимать (state: AppState), EventBus оборачивает его в args[0]
  public onUpdate(callback: (state: AppState) => void): void {
    this.eventBus.on(StoreEvents.Updated, callback);
  }

  public offUpdate(callback: (state: AppState) => void): void {
    this.eventBus.off(StoreEvents.Updated, callback);
  }
}

export const store = Store.init();
