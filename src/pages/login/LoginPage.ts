import { Block } from '../../core/block';
import template from './login.hbs?raw';
import { attachFormValidation } from '../../utils/formValidation';

type LoginProps = Record<string, never>;

export class LoginPage extends Block<LoginProps> {
  constructor(props: LoginProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    const form = this.getContent()?.querySelector<HTMLFormElement>('.auth__form');
    if (form) {
      attachFormValidation(form, { logOnSuccess: true });
    }
  }

  protected render(): string {
    // template — содержимое login.hbs
    return template;
  }
}
