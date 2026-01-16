import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
import { createFormValidation } from '@utils/formValidation';
import template from './login.hbs?raw';

type LoginProps = Record<string, never>;

export class LoginPage extends Block<LoginProps> {
  constructor(props: LoginProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#login-form');
    if (!form) {
      // eslint-disable-next-line no-console
      console.warn('[LoginPage] форма потерялась');
      return;
    }

    const { validateField, validateForm } = createFormValidation(form, {
      logOnSuccess: true,
    });

    const inputs = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
    );

    inputs.forEach((input) => {
      this.addDOMListener(input, 'blur', (event: FocusEvent) => {
        const target = event.target;
        if (
          target instanceof HTMLInputElement
          || target instanceof HTMLTextAreaElement
        ) {
          validateField(target);
        }
      });
    });

    this.addDOMListener(form, 'submit', (event: SubmitEvent) => {
      event.preventDefault();

      const { valid } = validateForm();
      if (!valid) {
        // eslint-disable-next-line no-console
        console.warn('[LoginPage] Данные формы невалидны — отправка отменена');
        return;
      }

      // eslint-disable-next-line no-console
      console.log('[LoginPage] Данные успешно отправлены');
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
