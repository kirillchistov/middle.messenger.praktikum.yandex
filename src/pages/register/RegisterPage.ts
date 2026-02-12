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

  componentDidMount(): void {
    const form = document.querySelector('#register-form') as HTMLFormElement | null;
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

      const password = (formData.get('password') || '').toString();
      const passwordConfirm = (formData.get('password_confirm') || '').toString();

      // на всякий случай дополнительная проверка совпадения паролей
      if (password !== passwordConfirm) {
        const errorElement = form.querySelector('[data-form-error]');
        if (errorElement) {
          errorElement.textContent = 'Пароли не совпадают';
        }
        return;
      }

      const data = {
        email: (formData.get('email') || '').toString(),
        login: (formData.get('login') || '').toString(),
        first_name: (formData.get('first_name') || '').toString(),
        second_name: (formData.get('second_name') || '').toString(),
        phone: (formData.get('phone') || '').toString(),
        password,
      };

      try {
        await AuthAPI.signUp(data);
        await AuthAPI.signIn({ login: data.login, password: data.password });
        const user = await AuthAPI.getUser();

        store.set('user', user);
        router.go('/messenger');
      } catch (error: any) {
        const errorMessage = error?.reason || 'Не удалось зарегистрироваться. Попробуйте ещё раз.';

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
