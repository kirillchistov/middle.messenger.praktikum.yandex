import { Block } from '../../core/block';
import template from './error-5xx.hbs?raw';

type ErrorProps = Record<string, never>;

export class Error5xxPage extends Block<ErrorProps> {
  constructor(props: ErrorProps = {}) {
    super('div', props);
  }

  protected render(): string {
    // template — содержимое error-5xx.hbs
    return template;
  }
}
