import {
  describe, it, expect, afterEach, jest,
} from '@jest/globals';
import { renderTemplate } from './renderTemplate';

describe('renderTemplate (Jest)', () => {
  // const template = '<h1>{{title}}</h1>';

  afterEach(() => {
    (window as any).Handlebars = undefined;
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('использует window.Handlebars при наличии', () => {
    const compileSpy = jest.fn((tpl: string) => (
      ctx: any,
    ) => tpl.replace('{{title}}', String(ctx.title ?? '')));

    (window as any).Handlebars = { compile: compileSpy };

    const template = '<h1>{{title}}</h1>';
    const html = renderTemplate(template, { title: 'Hello' });

    expect(compileSpy).toHaveBeenCalledWith(template);
    expect(html).toBe('<h1>Hello</h1>');
  });

  it('возвращает шаблон как есть, если window.Handlebars нет', () => {
    (window as any).Handlebars = undefined;

    const template = '<h1>{{title}}</h1>';
    const html = renderTemplate(template, { title: 'World' });

    expect(html).toBe(template);
  });
});
