/* eslint-disable import/extensions */
import { createFormValidation } from '@/utils/formValidation';
import { router } from '@/core/router';
import { store } from '@/core/store';
import { Block } from '@/core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import template from './login.hbs?raw';
import { AuthAPI } from '@/api/auth-api';

type LoginProps = Record<string, never>;

export class LoginPage extends Block<LoginProps> {
  // используем базовый конструктор Block

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#login-form');
    if (!form) {
      // eslint-disable-next-line no-console
      console.warn('LoginPage: form not found');
      return;
    }

    const { validateField, validateForm } = createFormValidation(form, {
      logOnSuccess: false,
    });

    const inputs = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input, textarea',
      ),
    );

    inputs.forEach((input) => {
      this.addDOMListener(input, 'blur', (event: FocusEvent) => {
        const { target } = event;
        if (
          target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement
        ) {
          validateField(target);
        }
      });
    });

    this.addDOMListener(form, 'submit', async (event: SubmitEvent) => {
      event.preventDefault();

      const errorEl = root.querySelector<HTMLElement>('[data-form-error]');
      if (errorEl) {
        errorEl.textContent = '';
      }

      const valid = validateForm();
      if (!valid) {
        // eslint-disable-next-line no-console
        console.warn('LoginPage: form is not valid');
        return;
      }

      const formData = new FormData(form);
      const login = String(formData.get('login') ?? '');
      const password = String(formData.get('password') ?? '');

      try {
        await AuthAPI.signIn({ login, password }); // 1) login
        // const user = await AuthAPI.getUser(); // 2) getUser
        // console.log(user);
        // store.setState({ user });
        // router.go('/messenger'); // 3) redirect
      } catch (error: any) {
        console.error('LoginPage signIn error', error);
        if (errorEl) {
          errorEl.textContent = error?.reason || 'Не удалось войти. Проверьте логин и пароль.';
        }
      }

      const user = await AuthAPI.getUser(); // 2) getUser
      // console.log(user);
      store.setState({ user });
      router.go('/messenger'); // 3) redirect
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
