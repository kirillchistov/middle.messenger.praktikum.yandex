/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { BlockProps } from '@/types/block-props';
import { store } from '@/core/store';
import { AuthAPI } from '@/api/auth-api';
import { router } from '@/core/router';
import { LocalAuth } from '@/utils/local-auth';

export type BlockPageClass = new (props?: BlockProps) => Block<BlockProps>;

export function withLayout(Page: BlockPageClass) {
  return class PageWithLayout extends Block<BlockProps> {
    private pageInstance: Block<BlockProps> | null = null;

    constructor(props?: BlockProps) {
      super('div', props);
    }

    protected async componentDidMount(): Promise<void> {
      const state = store.getState();

      if (!state.user) {
        try {
          const user = await AuthAPI.getUser();
          LocalAuth.clear();
          store.setState({ user });
        } catch (e: unknown) {
          const localUser = LocalAuth.getUser();

          if (!localUser) {
            store.setState({ user: null });
            router.go('/login');
            return;
          }

          store.setState({ user: localUser });
        }
      }

      this.pageInstance = new Page({});

      const root = this.getContent();
      if (!root) return;

      const pageRoot = this.pageInstance.getContent();
      if (!pageRoot) return;

      root.innerHTML = `
        <div class="app-layout">
          <aside class="app-layout__sidebar">
            <!-- здесь будет меню -->
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
      return '<div class="app-layout"></div>';
    }
  };
}
