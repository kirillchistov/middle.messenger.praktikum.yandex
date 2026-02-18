/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import { Block } from '@/core/block';
import { store } from '@/core/store';
import type { UserDTO } from '@/api/auth-api';
import { UsersAPI } from '@/api/users-api';
import template from './ProfileAvatar.hbs?raw';

type ProfileAvatarProps = {
  avatar: string;
};

export class ProfileAvatarPage extends Block<ProfileAvatarProps> {
  constructor(props?: Partial<ProfileAvatarProps>) {
    const state = store.getState();
    const user = state.user as UserDTO | null;

    const defaults: ProfileAvatarProps = {
      avatar: user?.avatar
        ? `https://ya-praktikum.tech${user.avatar}`
        : '/images/avatar-placeholder.png',
    };

    super('div', { ...defaults, ...props } as ProfileAvatarProps);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#profile-avatar-form');
    if (!form) return;

    const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
    const errorEl = root.querySelector<HTMLElement>('[data-form-error]');

    this.addDOMListener(form, 'submit', async (event) => {
      event.preventDefault();

      if (errorEl) errorEl.textContent = '';

      if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        if (errorEl) errorEl.textContent = 'Файл не выбран';
        return;
      }

      const file = fileInput.files[0];

      try {
        const updatedUser = await UsersAPI.updateAvatar(file);
        store.setState({ user: updatedUser as UserDTO });

        const avatarUrl = updatedUser.avatar
          ? `https://ya-praktikum.tech${updatedUser.avatar}`
          : '/images/avatar-placeholder.png';

        this.setProps({ avatar: avatarUrl });

        // eslint-disable-next-line no-console
        console.log('[ProfileAvatarPage] аватар обновлён');
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('[ProfileAvatarPage] ошибка загрузки аватара', error);
        if (errorEl) {
          errorEl.textContent = error?.reason || 'Не удалось загрузить аватар.';
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
