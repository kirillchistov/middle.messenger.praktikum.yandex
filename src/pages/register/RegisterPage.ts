import { Block } from '@core/block';
import template from './register.hbs?raw';
import { attachFormValidation } from '@utils/formValidation';
import { renderTemplate } from '@utils/renderTemplate';

type RegisterProps = Record<string, never>;

export class RegisterPage extends Block<RegisterProps> {
  constructor(props: RegisterProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    // даём блоку смонтировать шаблон
    setTimeout(() => {
      const root = this.getContent();
      if (!root) return;

      const form = root.querySelector<HTMLFormElement>('#register-form');
      if (form) {
        attachFormValidation(form, { logOnSuccess: true });
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
