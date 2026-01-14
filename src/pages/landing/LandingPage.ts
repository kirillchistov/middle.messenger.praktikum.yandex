import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
import template from './landing.hbs?raw';

type LandingProps = Record<string, never>;

export class LandingPage extends Block<LandingProps> {
  constructor(props: LandingProps = {}) {
    super('div', props);
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
