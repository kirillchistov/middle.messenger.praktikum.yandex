/* eslint-disable import/extensions */
import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
// import { renderTemplateToFragment } from '@/utils/renderTemplate';
import template from './landing.hbs?raw';

type LandingProps = Record<string, never>;

export class LandingPage extends Block<LandingProps> {
  // constructor(props: LandingProps = {}) {
  //   super('div', props);
  // }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    console.log('[LandingPage] componentDidMount');

    // Использую Block для навигации
    const nav = root.querySelector<HTMLElement>('nav.landing-nav');
    if (nav) {
      const toggle = nav.querySelector<HTMLButtonElement>('#nav-toggle');
      const links = nav.querySelector<HTMLDivElement>('#nav-links');

      if (toggle && links) {
        this.addDOMListener(toggle, 'click', () => {
          links.classList.toggle('landing-nav__links--open');
          console.log('[LandingPage] Вкл/выкл мобильного меню');
        });
      }
    }
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
