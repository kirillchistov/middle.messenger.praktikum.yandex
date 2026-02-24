import { BlockPageClass, Route } from './route';

export class Router {
  private static __instance: Router | null = null;

  private routes: Route[] = [];
  private currentRoute: Route | null = null;

  private readonly rootQuery!: string;

  private constructor(rootQuery: string) {
    this.rootQuery = rootQuery;
  }

  public static init(rootQuery: string): Router {
    if (!Router.__instance) {
      Router.__instance = new Router(rootQuery);
    }
    return Router.__instance;
  }

  public static getInstance(): Router {
    if (!Router.__instance) {
      throw new Error('Router is not initialized. Call Router.init() first.');
    }
    return Router.__instance;
  }

  // Принимаем BlockPageClass (не общий typeof Block)
  public use(pathname: string, Page: BlockPageClass): Router {
    const route = new Route(pathname, Page, this.rootQuery);
    this.routes.push(route);
    return this;
  }

  public start(): void {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string): void {
    if (window.location.pathname === pathname) return;

    window.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back(): void {
    window.history.back();
  }

  public forward(): void {
    window.history.forward();
  }

  private getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }

  private _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route) return;

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }
}

export const router = Router.init('#app');
