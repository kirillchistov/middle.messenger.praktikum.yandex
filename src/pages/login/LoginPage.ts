// LoginPage.ts
import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
import { attachFormValidation } from '@utils/formValidation';
import template from './login.hbs?raw';

type LoginProps = Record<string, never>;

export class LoginPage extends Block<LoginProps> {
  constructor(props: LoginProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    // дождаться монтажа DOM
    setTimeout(() => {
      const root = this.getContent();
      if (!root) return;

      const form = root.querySelector<HTMLFormElement>('#login-form');
      if (form) {
        attachFormValidation(form, { logOnSuccess: true });
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
