/* eslint-disable import/extensions */
// Вынес футер в отдельный компонент
import { renderTemplate } from '@utils/renderTemplate';
import { Block } from '../../core/block';
// import { renderTemplateToFragment } from '@/utils/renderTemplate';
import template from './Footer.hbs?raw';

export class Footer extends Block<Record<string, never>> {
  constructor() {
    super('footer', {});
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }

  // protected render(): DocumentFragment {
  //   return renderTemplateToFragment(template, this.props);
  // }
}
