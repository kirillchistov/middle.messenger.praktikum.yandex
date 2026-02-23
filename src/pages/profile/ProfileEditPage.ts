/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import { Block } from '@/core/block';
import { createFormValidation } from '@/utils/formValidation';
import { store } from '@/core/store';
import { router } from '@/core/router';
import type { ApiError, UserDTO } from '@/api/auth-api';
import { UsersAPI } from '@/api/users-api';
import { FILES_BASE } from '@/utils/constants';
import template from './ProfileEdit.hbs?raw';

type ProfileEditProps = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  avatar: string;
};

const buildAvatarUrl = (path: string | null | undefined): string => {
  if (path) {
    return `${FILES_BASE}${path}`;
  }
  return '/assets/avatar-transp.png';
};
// export class ProfileEditPage extends Block<ProfileEditProps> {
export default class ProfileEditPage extends Block {
  constructor(props?: Partial<ProfileEditProps>) {
    const state = store.getState();
    console.log('[ProfileEditPage] state.user =', state.user);
    const user = state.user as UserDTO | null;

    const defaults: ProfileEditProps = {
      email: user?.email ?? '',
      login: user?.login ?? '',
      first_name: user?.first_name ?? '',
      second_name: user?.second_name ?? '',
      display_name: user?.display_name ?? user?.first_name ?? '',
      phone: user?.phone ?? '',
      avatar: buildAvatarUrl(user?.avatar),
    };

    super('div', { ...defaults, ...props } as ProfileEditProps);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#profile-edit-form');
    if (!form) {
      // eslint-disable-next-line no-console
      console.warn('[ProfileEditPage] форма потерялась');
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

    this.addDOMListener(form, 'submit', async (event) => {
      const e = event as SubmitEvent;
      e.preventDefault();

      if (errorEl) errorEl.textContent = '';

      const { valid } = validateForm();
      if (!valid) {
        // eslint-disable-next-line no-console
        console.warn('[ProfileEditPage] форма невалидна — отправка отменена');
        return;
      }

      const formData = new FormData(form);

      const payload = {
        first_name: String(formData.get('first_name') ?? ''),
        second_name: String(formData.get('second_name') ?? ''),
        display_name: String(formData.get('display_name') ?? ''),
        login: String(formData.get('login') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
      };

      try {
        const updatedUser = await UsersAPI.updateProfile(payload);
        store.setState({ user: updatedUser as UserDTO });
        // eslint-disable-next-line no-console
        console.log('[ProfileEditPage] профиль обновлён');
        router.go('/profile');
      } catch (error: unknown) {
        const apiError = (error && typeof error === 'object' && 'reason' in error)
          ? (error as ApiError)
          : null;

        const reason = apiError?.reason;

        // eslint-disable-next-line no-console
        console.error('[ProfileEditPage] ошибка обновления профиля', error);
        if (errorEl) {
          errorEl.textContent = reason || 'Не удалось обновить профиль.';
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
