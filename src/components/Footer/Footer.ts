// Вынес футер в отдельный компонент
import { Block } from '../../core/block';
import { renderTemplate } from '../../utils/renderTemplate';
import template from './Footer.hbs?raw';

export class Footer extends Block<Record<string, never>> {
  constructor() {
    super('footer', {});
  }

  protected render(): string {
    return renderTemplate(template, {});
  }
}
