// Проверяем Router и Route: регистрация маршрутов, навигация, отрисовка верных страниц.
import {
  describe,
  it,
  expect,
  beforeEach,
} from 'vitest';
import { router } from './router';
import { Block } from './block';
import type { BlockProps } from '@/types/block-props';

class DummyPage extends Block<BlockProps> {
  protected render(): string {
    return '<div id="dummy-page">Dummy</div>';
  }
}

describe('Router', () => {
  // let router: Router;

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  it('регистрирует роут и рендерит страницу', () => {
    router.use('/test', DummyPage);
    router.start();

    router.go('/test');

    const el = document.querySelector('#dummy-page');
    expect(el).not.toBeNull();
  });

  it('не ломается при переходе на неизвестный маршрут', () => {
    router.start();
    router.go('/unknown');

    // ожидаем, что не будет ошибок, можно проверить, что app не пустой или содержит layout
    expect(document.querySelector('#app')).not.toBeNull();
  });
});
