/* eslint-disable import/extensions */
import { Block } from '@core/block';
import { createFormValidation } from '@utils/formValidation';
import { renderTemplate } from '@utils/renderTemplate';
import { UsersAPI } from '@/api/users-api';
import template from './ProfilePassword.hbs?raw';
import { ApiError } from '@/api/auth-api';
import type { BlockProps } from '@/types/block-props';

// type ProfilePasswordProps = Record<string, never>;

// export class ProfilePasswordPage extends Block<ProfilePasswordProps> {
export default class ProfilePasswordPage extends Block {
  private handleSubmit: (event: Event) => void;

  constructor(props: BlockProps = {}) {
    super('div', props);

    this.handleSubmit = (event: Event) => {
      this.onSubmit(event as SubmitEvent);
    };
  }

  private async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const errorEl = form.querySelector<HTMLElement>('[data-form-error]');

    const { validateForm } = createFormValidation(form, { logOnSuccess: false });
    const { valid } = validateForm();

    if (!valid) {
      // eslint-disable-next-line no-console
      console.warn(
        '[ProfilePasswordPage] Данные формы невалидны — отправка отменена',
      );
      return;
    }

    const formData = new FormData(form);
    const oldPassword = String(formData.get('oldPassword') ?? '');
    const newPassword = String(formData.get('newPassword') ?? '');
    const newPasswordConfirm = String(formData.get('newPasswordConfirm') ?? '');

    if (newPassword !== newPasswordConfirm) {
      if (errorEl) {
        errorEl.textContent = 'Новый пароль и подтверждение не совпадают';
      }
      return;
    }

    try {
      await UsersAPI.updatePassword({ oldPassword, newPassword });
      // eslint-disable-next-line no-console
      console.log('[ProfilePasswordPage] пароль обновлён');
      if (errorEl) errorEl.textContent = 'Пароль успешно изменён';
    } catch (error: unknown) {
      const apiError = (error && typeof error === 'object' && 'reason' in error)
        ? (error as ApiError)
        : null;

      const reason = apiError?.reason;

      // eslint-disable-next-line no-console
      console.error('[ProfilePasswordPage] ошибка смены пароля', error);
      if (errorEl) {
        errorEl.textContent = reason || 'Не удалось сменить пароль. Попробуйте ещё раз.';
      }
    }
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

    const { validateField } = createFormValidation(form, {
      logOnSuccess: false,
    });

    const inputs = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input, textarea',
      ),
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
