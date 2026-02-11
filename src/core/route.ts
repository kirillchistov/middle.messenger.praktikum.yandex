import { Block } from './block';

// Отдельный тип для классов страниц без параметров конструктора
export type BlockPageClass = new () => Block;

export class Route {
  private pathname: string;
  private BlockClass: BlockPageClass;
  private blockInstance: Block | null = null;
  private readonly rootQuery: string;

  constructor(pathname: string, view: BlockPageClass, rootQuery: string) {
    this.pathname = pathname;
    this.BlockClass = view;
    this.rootQuery = rootQuery;
  }

  public navigate(pathname: string): void {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  public leave(): void {
    if (!this.blockInstance) {
      return;
    }
    this.blockInstance.hide();
  }

  public match(pathname: string): boolean {
    return pathname === this.pathname;
  }

  public render(): void {
    if (!this.blockInstance) {
      // BlockPageClass гарантирует конструктор без аргументов,
      // поэтому TS больше не считает, что создаём абстрактный Block
      this.blockInstance = new this.BlockClass();
    }

    if (!this.blockInstance) {
      return;
    }

    this.blockInstance.mount(this.rootQuery);
    this.blockInstance.show();
  }
}
