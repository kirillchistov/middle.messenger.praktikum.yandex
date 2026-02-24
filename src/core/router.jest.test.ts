import {
  describe, it, expect, beforeEach, jest,
} from '@jest/globals';
import { router } from './router';
import { Block } from './block';

class DummyPage extends Block {
  constructor() {
    super('div', {});
  }

  protected render(): string {
    return '<div data-page="dummy">Dummy</div>';
  }
}

describe('Router (Jest)', () => {
  // let router: router;
  let root: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    root = document.getElementById('app') as HTMLElement;
    // router = new Router('#app'); // подгони под свою сигнатуру
  });

  it('регистрирует маршрут и рендерит страницу', () => {
    router.use('/dummy', DummyPage);
    router.start();
    router.go('/dummy');

    expect(root.innerHTML).toContain('data-page="dummy"');
  });

  it('go меняет URL в history', () => {
    const pushStateSpy = jest.spyOn(window.history, 'pushState');

    router.use('/dummy', DummyPage);
    router.start();
    router.go('/dummy');

    expect(pushStateSpy).toHaveBeenCalled();
    expect(window.location.pathname).toBe('/dummy');
  });

  it('повторный переход на тот же маршрут не ломает рендер', () => {
    router.use('/dummy', DummyPage);
    router.start();

    router.go('/dummy');
    const firstHTML = root.innerHTML;

    router.go('/dummy');
    const secondHTML = root.innerHTML;

    expect(secondHTML).toBe(firstHTML);
  });
});
