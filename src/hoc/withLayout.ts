/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { store } from '@/core/store';
import { AuthAPI } from '@/api/auth-api';
import { router } from '@/core/router';

type BlockPageClass = new (props?: any) => Block<any>;

export const withLayout = (Page: BlockPageClass) => class WithLayout extends Block {
  private pageInstance: Block | null = null;

  constructor() {
    super('div', {}); // контейнер layout'а
  }

  protected async componentDidMount(): Promise<void> {
    const state = store.getState();

    if (!state.user) {
      try {
        const user = await AuthAPI.getUser();
        store.setState({ user });
      } catch (e) {
        store.setState({ user: null });
        router.go('/login');
        return;
      }
    }

    // создаём страницу
    this.pageInstance = new Page({});

    // ждём, пока у неё появится DOM
    const root = this.getContent();
    if (!root) return;

    const pageRoot = this.pageInstance.getContent();
    if (!pageRoot) return;

    // простой layout без Handlebars
    root.innerHTML = `
      <div class="app-layout">
        <aside class="app-layout__sidebar">
          <!-- здесь можешь вывести меню, логотип и т.п. -->
        </aside>
        <main class="app-layout__main"></main>
      </div>
    `;

    const main = root.querySelector<HTMLElement>('.app-layout__main');
    if (main) {
      main.appendChild(pageRoot);
    }
  }

  protected render(): string {
    // на первый рендер — просто контейнер
    return '<div class="app-layout"></div>';
  }
};
