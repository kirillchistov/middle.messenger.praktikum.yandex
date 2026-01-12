import { Block } from '../../core/block';
import template from './error-404.hbs?raw';

type ErrorProps = Record<string, never>;

export class Error404Page extends Block<ErrorProps> {
  constructor(props: ErrorProps = {}) {
    super('div', props);
  }

  protected render(): string {
    // template — содержимое error-404.hbs
    return template;
  }
}
