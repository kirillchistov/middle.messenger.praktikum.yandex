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
  // constructor(props?: LoginProps) {
  //   super('div', props);
  // }

  componentDidMount(): void {
    const form = document.querySelector('#login-form') as HTMLFormElement | null;
    if (!form) {
      return;
    }

    const { validateForm, validateField } = createFormValidation(form, {
      logOnSuccess: false,
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

        // переход в мессенджер
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
