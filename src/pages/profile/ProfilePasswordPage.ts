import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
import { createFormValidation } from '@utils/formValidation';
import template from './ProfilePassword.hbs?raw';

type ProfilePasswordProps = Record<string, never>;

export class ProfilePasswordPage extends Block<ProfilePasswordProps> {
  private handleSubmit: (event: Event) => void;

  constructor(props: ProfilePasswordProps = {}) {
    super('div', props);

    // подвязал onSubmit и адаптировал тип
    this.handleSubmit = (event: Event) => {
      this.onSubmit(event as SubmitEvent);
    };
  }

  private onSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const { validateForm } = createFormValidation(form, { logOnSuccess: true });
    const { valid } = validateForm();

    if (!valid) {
      // eslint-disable-next-line no-console
      console.warn('[ProfilePasswordPage] Данные формы невалидны — отправка отменена');
      return;
    }

    // eslint-disable-next-line no-console
    console.log('[ProfilePasswordPage] Данные успешно отправлены');
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#profile-password-form');
    if (!form) {
      // eslint-disable-next-line no-console
      console.warn('[ProfilePasswordPage] форма потерялась');
      return;
    }

    const { validateField } = createFormValidation(form, { logOnSuccess: true });

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

    this.addDOMListener(form, 'submit', this.handleSubmit);
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
