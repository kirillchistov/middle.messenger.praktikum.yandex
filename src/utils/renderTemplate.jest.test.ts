import {
  describe, it, expect, afterEach, jest,
} from '@jest/globals';
import { renderTemplate } from './renderTemplate';

describe('renderTemplate (Jest)', () => {
  const template = '<h1>{{title}}</h1>';

  afterEach(() => {
    // аккуратно убираем мок; типы игнорируем, чтобы не пересекаться
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Handlebars = undefined;
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('использует window.Handlebars при наличии', () => {
    const compileSpy = jest.fn(() => (ctx: any) => `<h1>${ctx.title}</h1>`);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Handlebars = { compile: compileSpy };

    const html = renderTemplate(template, { title: 'Hello' });

    expect(compileSpy).toHaveBeenCalledWith();
    expect(html).toBe('<h1>Hello</h1>');
  });

  it('использует импортированный handlebars при отсутствии window.Handlebars', async () => {
    jest.doMock('handlebars', () => ({
      __esModule: true,
      default: {
        compile: () => (ctx: any) => `<h1>${ctx.title}</h1>`,
      },
    }));

    const { renderTemplate: renderTemplateMocked } = await import('./renderTemplate');

    const html = renderTemplateMocked(template, { title: 'World' });
    expect(html).toBe('<h1>World</h1>');
  });
});
