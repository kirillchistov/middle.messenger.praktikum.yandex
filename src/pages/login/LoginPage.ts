/* eslint-disable import/extensions */
import { createFormValidation } from '@/utils/formValidation';
import { router } from '@/core/router';
import { store } from '@/core/store';
import { Block } from '@/core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import template from './login.hbs?raw';
import { AuthAPI } from '@/api/auth-api';
import type { ApiError } from '@/api/auth-api';

type LoginProps = Record<string, never>;

export class LoginPage extends Block<LoginProps> {
  // используем базовый конструктор Block

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#login-form');
    if (!form) {
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
        return;
      }

      const formData = new FormData(form);
      const login = String(formData.get('login') ?? '');
      const password = String(formData.get('password') ?? '');

      try {
        await AuthAPI.signIn({ login, password }); // 1) login
        const user = await AuthAPI.getUser(); // 2) getUser
        store.setState({ user });
        router.go('/messenger'); // 3) redirect
      } catch (error: unknown) {
        const apiError = (error && typeof error === 'object' && 'reason' in error)
          ? (error as ApiError)
          : null;

        const reason = apiError?.reason;

        if (reason === 'User already in system') {
        // пользователь уже авторизован — редиректим в чаты
          try {
            const user = await AuthAPI.getUser();
            store.setState({ user });
            router.go('/messenger');
            return;
          } catch (e: unknown) {
            // eslint-disable-next-line no-console
            console.error('LoginPage getUser пользователь уже авторизован', e);
          }
        }
        console.error('LoginPage signIn error', error);
        if (errorEl) {
          errorEl.textContent = reason || 'Не удалось войти. Проверьте логин и пароль.';
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
