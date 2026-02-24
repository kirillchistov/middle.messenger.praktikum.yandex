import {
  describe, it, expect, beforeEach, jest,
} from '@jest/globals';
import { Block } from './block';
// import type { BlockProps } from '@/types/block-props';

type TestProps = { title: string };

class TestBlock extends Block<TestProps> {
  constructor(props: TestProps) {
    super('div', props);
  }

  protected render(): string {
    return `<h1 data-el="title">${this.props.title}</h1>`;
  }

  public getContentPublic() {
    return this.getContent();
  }

  public addDOMListenerPublic<K extends keyof HTMLElementEventMap>(
    element: HTMLElement,
    event: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
  ) {
    this.addDOMListener(element, event, handler);
  }
}

describe('Block (Jest)', () => {
  let block: TestBlock;

  beforeEach(() => {
    block = new TestBlock({ title: 'Hello' });
  });

  it('создаёт корневой элемент и рендерит HTML', () => {
    const el = block.getContentPublic();
    expect(el).toBeInstanceOf(HTMLElement);

    const title = el!.querySelector('[data-el="title"]') as HTMLElement;
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('Hello');
  });

  it('обновляет разметку при setProps', () => {
    const el = block.getContentPublic();
    let title = el!.querySelector('[data-el="title"]') as HTMLElement;
    expect(title.textContent).toBe('Hello');

    block.setProps({ title: 'Updated' });

    const elAfter = block.getContentPublic();
    title = elAfter!.querySelector('[data-el="title"]') as HTMLElement;
    expect(title.textContent).toBe('Updated');
  });

  it('добавляет DOM‑слушатели через addDOMListener', () => {
    const spy = jest.fn();
    const el = block.getContentPublic();
    const button = document.createElement('button');
    el!.appendChild(button);

    block.addDOMListenerPublic(button, 'click', spy);
    button.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
