/* eslint-disable import/extensions */
import { Block } from '@core/block';
import { createFormValidation } from '@utils/formValidation';
import { renderTemplate } from '@utils/renderTemplate';
import template from './login.hbs?raw';
import { AuthAPI } from '@/api/auth-api';
import { store } from '@/core/store';
import { router } from '@/core/router';

type LoginProps = Record<string, never>;

export class LoginPage extends Block<LoginProps> {
  constructor(props?: LoginProps) {
    super('div', props);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector('#login-form') as HTMLFormElement | null;
    if (!form) {
      return;
    }

    const { validateForm, validateField } = createFormValidation(form, {
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

    form.addEventListener(
      'blur',
      (event) => {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement | null;
        if (!target) return;
        validateField(target);
      },
      true,
    );

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      const formData = new FormData(form);
      const login = (formData.get('login') || '').toString();
      const password = (formData.get('password') || '').toString();

      try {
        await AuthAPI.signIn({ login, password });
        const user = await AuthAPI.getUser();

        // сохраняем пользователя в глобальный store
        store.set('user', user);

        // переход в мессенджер. Ошибка пока any, чтобы reason не орал
        router.go('/messenger');
      } catch (error: any) {
        const errorMessage = error?.reason || 'Не удалось войти. Попробуйте ещё раз.';

        // элемент для вывода ошибки под формой
        const errorElement = form.querySelector('[data-form-error]');
        if (errorElement) {
          errorElement.textContent = errorMessage;
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
