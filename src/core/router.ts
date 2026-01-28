// при F5 берётся текущий window.location.pathname
// router ищет соответствующий маршрут и монтирует нужную страницу;
// При popstate (Back/Forth) вызываем _onRoute и страница меняется без перезагрузки

import type { Block } from './block';

type BlockClass = new () => Block;

type Route = {
  path: string;
  BlockClass: BlockClass;
};

export class Router {
  private static __instance: Router | null = null;

  private routes: Route[] = [];

  private currentBlock: Block | null = null;

  private rootQuery: string;

  private constructor(rootQuery: string) {
    this.rootQuery = rootQuery;
  }

  public static getInstance(rootQuery = '#app'): Router {
    if (!Router.__instance) {
      Router.__instance = new Router(rootQuery);
    }
    return Router.__instance;
  }

  public use(path: string, BlockClass: BlockClass): this {
    this.routes.push({ path, BlockClass });
    return this;
  }

  public start(): void {
    window.addEventListener('popstate', () => {
      this.onRoute(window.location.pathname);
    });

    this.onRoute(window.location.pathname);
  }

  public go(path: string): void {
    if (window.location.pathname === path) return;

    window.history.pushState({}, '', path);
    this.onRoute(path);
  }

  public back(): void {
    window.history.back();
  }

  public forward(): void {
    window.history.forward();
  }

  private onRoute(pathname: string): void {
    const route = this.matchRoute(pathname);

    if (!route) {
      const notFoundRoute = this.routes.find((r) => r.path === '/404');
      if (notFoundRoute) {
        this.renderRoute(notFoundRoute);
      }
      return;
    }

    this.renderRoute(route);
  }

  private matchRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.path === pathname);
  }

  private renderRoute(route: Route): void {
    if (this.currentBlock) {
      // this.currentBlock.destroy?.(); // добавишь позже, если будет destroy
    }

    const { BlockClass } = route;
    this.currentBlock = new BlockClass();
    this.currentBlock.mount(this.rootQuery);
  }
}

// единый инстанс роутера
export const router = Router.getInstance('#app');
