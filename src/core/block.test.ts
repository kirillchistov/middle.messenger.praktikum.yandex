// Проверяем жизненный цикл: render, setProps, CDM, CDU
import {
  describe,
  it, expect,
} from 'vitest';
import { Block } from './block';
import type { BlockProps } from '@/types/block-props';

class TestBlock extends Block<BlockProps> {
  constructor(tagName: keyof HTMLElementTagNameMap = 'div', props?: BlockProps) {
    super(tagName, props);
  }

  public renderCount = 0;

  protected componentDidUpdate(): boolean {
    this.renderCount += 1;
    return true;
  }

  protected render(): string {
    return `<div class="test">${this.props.text ?? ''}</div>`;
  }
}

describe('Block', () => {
  it('рендерит initial HTML', () => {
    const block = new TestBlock('div', { text: 'hello' });
    const html = block.getContent()?.outerHTML ?? '';
    expect(html).toContain('class="test"');
    expect(html).toContain('hello');
  });

  it('обновляет props и перерисовывает', () => {
    const block = new TestBlock('div', { text: 'first' });

    block.setProps({ text: 'second' });
    const html = block.getContent()?.outerHTML ?? '';

    expect(html).toContain('second');
    expect(block.renderCount).toBe(1);
  });

  it('mount вставляет элемент в DOM', () => {
    const root = document.createElement('div');
    root.id = 'app';
    document.body.appendChild(root);

    const block = new TestBlock('div', { text: 'mounted' });
    block.mount('#app');

    expect(document.querySelector('#app .test')?.textContent).toBe('mounted');
  });
});
