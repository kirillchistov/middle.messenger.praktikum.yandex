/* eslint-disable import/extensions */
import { Block } from '@core/block';
import { renderTemplate } from '@utils/renderTemplate';
import { createFormValidation } from '@utils/formValidation';
import template from './register.hbs?raw';
import { AuthAPI, SignUpData } from '@/api/auth-api';
import { store } from '@/core/store';
import { router } from '@/core/router';

type RegisterProps = Record<string, never>;

export class RegisterPage extends Block<RegisterProps> {
  // используем базовый конструктор Block

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#register-form');
    if (!form) {
      return;
    }

    const errorEl = root.querySelector<HTMLElement>('[data-form-error]');

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

      if (errorEl) {
        errorEl.textContent = '';
      }

      const valid = validateForm();
      if (!valid) {
        // eslint-disable-next-line no-console
        console.warn('RegisterPage: form is not valid');
        return;
      }

      const formData = new FormData(form);

      const password = String(formData.get('password') ?? '');
      const passwordConfirm = String(formData.get('password_confirm') ?? '');

      if (password !== passwordConfirm) {
        if (errorEl) {
          errorEl.textContent = 'Пароли не совпадают';
        }
        return;
      }

      const payload: SignUpData = {
        email: String(formData.get('email') ?? ''),
        login: String(formData.get('login') ?? ''),
        first_name: String(formData.get('first_name') ?? ''),
        second_name: String(formData.get('second_name') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        password,
      };

      try {
        // Последовательное выполнение: sign-up, sign-in, get-user
        await AuthAPI.signUp(payload);
        await AuthAPI.signIn({
          login: payload.login,
          password: payload.password,
        });
        const user = await AuthAPI.getUser();

        store.setState({ user });
        router.go('/messenger');
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('RegisterPage signUp error', error);
        if (errorEl) {
          errorEl.textContent = error?.reason || 'Не удалось зарегистрироваться. Проверьте данные и попробуйте ещё раз.';
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
