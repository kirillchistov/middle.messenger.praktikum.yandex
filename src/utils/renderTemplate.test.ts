import {
  describe, it, expect, beforeEach,
} from 'vitest';
import { renderTemplate } from './renderTemplate';

describe('renderTemplate', () => {
  beforeEach(() => {
    // мок Handlebars через any, чтобы не конфликтовать с типами
    const w = window as any;

    w.Handlebars = {
      compile: (tpl: string) => (ctx: any) => {
        let html = tpl;

        // {{title}}
        if (tpl.includes('{{title}}')) {
          html = html.replace('{{title}}', String(ctx.title ?? ''));
        }

        // {{#if isAdmin}} ... {{/if}}
        if (tpl.includes('{{#if isAdmin}}')) {
          const cond = !!ctx.isAdmin;
          if (cond) {
            html = html
              .replace('{{#if isAdmin}}', '')
              .replace('{{/if}}', '');
          } else {
            html = '';
          }
        }

        // {{#each items}}<li>{{this}}</li>{{/each}}
        if (tpl.includes('{{#each items}}')) {
          const items = ctx.items ?? [];
          const itemTpl = '<li>{{this}}</li>';
          const renderedItems = items
            .map((i: any) => itemTpl.replace('{{this}}', String(i)))
            .join('');
          html = `<ul>${renderedItems}</ul>`;
        }

        return html;
      },
    };
  });

  it('рендерит простую подстановку', () => {
    const tpl = '<div>{{title}}</div>';
    const html = renderTemplate(tpl, { title: 'Привет' });
    expect(html).toContain('<div>Привет</div>');
  });

  it('рендерит условие', () => {
    const tpl = '{{#if isAdmin}}<span>Admin</span>{{/if}}';

    const html1 = renderTemplate(tpl, { isAdmin: true });
    expect(html1).toContain('<span>Admin</span>');

    const html2 = renderTemplate(tpl, { isAdmin: false });
    expect(html2).toBe('');
  });

  it('рендерит каждый элемент массива', () => {
    const tpl = '<ul>{{#each items}}<li>{{this}}</li>{{/each}}</ul>';
    const html = renderTemplate(tpl, { items: ['a', 'b'] });

    expect(html).toContain('<li>a</li>');
    expect(html).toContain('<li>b</li>');
  });
});
