/* eslint-disable import/extensions */
import { Block } from '@core/block';
// import { createFormValidation } from '@utils/formValidation';
import { renderTemplate } from '@utils/renderTemplate';
import template from './login.hbs?raw';
import { AuthAPI } from '@/api/auth-api';
import { store } from '@/core/store';
import { router } from '@/core/router';

type LoginProps = Record<string, never>;

export class LoginPage extends Block<LoginProps> {
  // constructor(props?: LoginProps) {
  //   super('div', props);
  // }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#login-form');
    if (!form) {
      // eslint-disable-next-line no-console
      // console.warn('[LoginPage] форма потерялась');
      return;
    }

    // const { validateField, validateForm } = createFormValidation(form, {
    //   logOnSuccess: true,
    // });

    // const inputs = Array.from(
    //   form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
    // );

    // inputs.forEach((input) => {
    //   this.addDOMListener(input, 'blur', (event) => {
    //     const e = event as MouseEvent;
    //     const { target } = e;
    //     if (
    //       target instanceof HTMLInputElement
    //       || target instanceof HTMLTextAreaElement
    //     ) {
    //       validateField(target);
    //     }
    //   });
    // });

    //   this.addDOMListener(form, 'submit', async (event) => {
    //     const e = event as SubmitEvent;
    //     e.preventDefault();

    //     const { valid } = validateForm();
    //     if (!valid) {
    //       // eslint-disable-next-line no-console
    //       console.warn('[LoginPage] Данные формы невалидны — отправка отменена');
    //       return;
    //     }

    //     // eslint-disable-next-line no-console
    //     console.log('[LoginPage] Данные успешно отправлены');
    //   });
    // }

    this.addDOMListener(form, 'submit', async (event) => {
      const e = event as SubmitEvent;
      e.preventDefault();

      const formData = new FormData(form);
      const login = String(formData.get('login') ?? '');
      const password = String(formData.get('password') ?? '');

      const errorEl = root.querySelector<HTMLElement>('[data-form-error]');
      if (errorEl) errorEl.textContent = '';

      try {
        const user = await AuthAPI.signIn(login, password);
        store.setState({ user });
        router.go('/messenger');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[LoginPage] Ошибка авторизации', error);
        if (errorEl) {
          errorEl.textContent = error instanceof Error ? error.message : 'Ошибка входа';
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
