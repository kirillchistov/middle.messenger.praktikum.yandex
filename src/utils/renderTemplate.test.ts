// проверяем, что renderTemplate правильно рендерит .hbs с контекстом
import { describe, it, expect } from 'vitest';
import { renderTemplate } from './renderTemplate';

describe('renderTemplate', () => {
  it('проверяем, что рендерит простую подстановку', () => {
    const tpl = '<div>{{title}}</div>';
    const html = renderTemplate(tpl, { title: 'Привет' });
    expect(html).toContain('<div>Привет</div>');
  });

  it('проверяем, что рендерит условие', () => {
    const tpl = '{{#if isAuth}}<span>OK</span>{{else}}<span>NOTOK</span>{{/if}}';

    const html1 = renderTemplate(tpl, { isAuth: true });
    const html2 = renderTemplate(tpl, { isAuth: false });

    expect(html1).toContain('<span>OK</span>');
    expect(html2).toContain('<span>NOTOK</span>');
  });

  it('проверяем, что рендерит каждый элемент массива', () => {
    const tpl = '<ul>{{#each items}}<li>{{this}}</li>{{/each}}</ul>';
    const html = renderTemplate(tpl, { items: ['a', 'b'] });
    expect(html).toContain('<li>a</li>');
    expect(html).toContain('<li>b</li>');
  });
});
