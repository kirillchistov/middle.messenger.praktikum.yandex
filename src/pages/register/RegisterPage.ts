/* eslint-disable import/extensions */
import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
import { createFormValidation } from '@utils/formValidation';
import template from './register.hbs?raw';
import { AuthAPI } from '@/api/auth-api';
import { store } from '@/core/store';
import { router } from '@/core/router';

type RegisterProps = Record<string, never>;

export class RegisterPage extends Block<RegisterProps> {
  // constructor(props: RegisterProps = {}) {
  //   super('div', props);
  // }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#register-form');
    if (!form) {
      // eslint-disable-next-line no-console
      // console.warn('[RegisterPage] форма потерялась');
      return;
    }

    const errorEl = root.querySelector<HTMLElement>('[data-form-error]');

    // const { validateField, validateForm } = createFormValidation(form, {
    const { validateForm } = createFormValidation(form, {
      logOnSuccess: false,
    });

    // const inputs = Array.from(
    //   form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
    // );

    // inputs.forEach((input) => {
    //   this.addDOMListener(input, 'blur', (event) => {
    //     const e = event as FocusEvent;
    //     const { target } = e;
    //     if (
    //       target instanceof HTMLInputElement
    //       || target instanceof HTMLTextAreaElement
    //     ) {
    //       validateField(target);
    //     }
    //   });
    // });

    this.addDOMListener(form, 'submit', async (event) => {
      const e = event as SubmitEvent;
      e.preventDefault();

      if (errorEl) errorEl.textContent = '';

      const valid = validateForm();
      if (!valid.valid) {
        if (errorEl) {
          errorEl.textContent = 'Исправьте ошибки в форме';
        }
        return;
      }

      const formData = new FormData(form);

      const data = {
        login: String(formData.get('login') ?? ''),
        password: String(formData.get('password') ?? ''),
        email: String(formData.get('email') ?? ''),
        first_name: String(formData.get('first_name') ?? ''),
        second_name: String(formData.get('second_name') ?? ''),
        display_name: String(formData.get('display_name') ?? ''),
        phone: String(formData.get('phone') ?? ''),
      };

      try {
        const user = await AuthAPI.signUp(data);
        store.setState({ user });
        router.go('/messenger');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[RegisterPage] Ошибка регистрации', error);
        if (errorEl) {
          errorEl.textContent = error instanceof Error
            ? error.message
            : 'Ошибка регистрации. Попробуйте ещё раз.';
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
