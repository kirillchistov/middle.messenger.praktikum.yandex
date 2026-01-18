import { Block } from '@core/block';
import { createFormValidation } from '@utils/formValidation';
import { renderTemplate } from '@utils/renderTemplate';
import template from './register.hbs?raw';

type RegisterProps = Record<string, never>;

export class RegisterPage extends Block<RegisterProps> {
  constructor(props: RegisterProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#register-form');
    if (!form) {
      // eslint-disable-next-line no-console
      console.warn('[RegisterPage] форма потерялась');
      return;
    }

    const { validateField, validateForm } = createFormValidation(form, {
      logOnSuccess: true,
    });

    const inputs = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
    );

    inputs.forEach((input) => {
      this.addDOMListener(input, 'blur', (event) => {
        const e = event as FocusEvent;
        const { target } = e;
        if (
          target instanceof HTMLInputElement
          || target instanceof HTMLTextAreaElement
        ) {
          validateField(target);
        }
      });
    });

    this.addDOMListener(form, 'submit', (event) => {
      const e = event as SubmitEvent;
      e.preventDefault();

      const result = validateForm();
      console.log('[RegisterPage] validateForm result', result);

      const { valid } = result;
      if (!valid) {
        // eslint-disable-next-line no-console
        console.warn('[RegisterPage] форма невалидна — отправка отменена');
        return;
      }

      // eslint-disable-next-line no-console
      console.log('[RegisterPage] форма успешно отправлена');
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
