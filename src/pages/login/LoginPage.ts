import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
import { createFormValidation } from '@utils/formValidation';
import template from './login.hbs?raw';

type LoginProps = Record<string, never>;

type SubmitHandler = (event: SubmitEvent) => void;

export class LoginPage extends Block<LoginProps> {
  private handleSubmit: SubmitHandler;

  constructor(props: LoginProps = {}) {
    super('div', props);
    this.handleSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const { validateForm } = createFormValidation(form, { logOnSuccess: true });
    const { valid } = validateForm();

    if (!valid) {
      // eslint-disable-next-line no-console
      console.warn('[LoginPage] данные формы невалидны — отправка отменена');
      return;
    }

    // eslint-disable-next-line no-console
    console.log('[LoginPage] успешно');
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

    const { validateField } = createFormValidation(form, { logOnSuccess: true });

    const inputs = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
    );

    inputs.forEach((input) => {
      this.addDOMListener(input, 'blur', (e: FocusEvent) => {
        const target = e.target;
        if (
          target instanceof HTMLInputElement
          || target instanceof HTMLTextAreaElement
        ) {
          validateField(target);
        }
      });
    });

    this.addDOMListener(form, 'submit', this.handleSubmit);
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
