/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import { Block } from '@/core/block';
import { store } from '@/core/store';
import { router } from '@/core/router';
import type { ApiError, UserDTO } from '@/api/auth-api';
import { UsersAPI } from '@/api/users-api';
import { FILES_BASE } from '@/utils/constants';
import template from './ProfileAvatar.hbs?raw';
import { showToast } from '@/utils/toast';

type ProfileAvatarProps = {
  avatar: string;
};

const buildAvatarUrl = (path: string | null | undefined): string => {
  if (path) {
    return `${FILES_BASE}${path}`;
  }
  return '/assets/avatar-transp.png';
};

// export class ProfileAvatarPage extends Block<ProfileAvatarProps> {
export default class ProfileAvatarPage extends Block {
  constructor(props?: Partial<ProfileAvatarProps>) {
    const state = store.getState();
    const user = state.user as UserDTO | null;

    const defaults: ProfileAvatarProps = {
      avatar: buildAvatarUrl(user?.avatar),
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

        const avatarUrl = buildAvatarUrl(updatedUser.avatar);
        this.setProps({ avatar: avatarUrl });

        const avatarEl = root.querySelector<HTMLElement>('.profile-avatar-button');
        if (avatarEl) {
          avatarEl.style.backgroundImage = `url("${avatarUrl}")`;
        }
        showToast('Аватар обновлён', 'success');
        router.go('/profile');
      } catch (error: unknown) {
        const apiError = (error && typeof error === 'object' && 'reason' in error)
          ? (error as ApiError)
          : null;

        const reason = apiError?.reason;

        // eslint-disable-next-line no-console
        console.error('[ProfileAvatarPage] ошибка загрузки аватара', error);
        showToast(reason || 'Не удалось загрузить аватар.', 'error');
        if (errorEl) {
          errorEl.textContent = reason || 'Не удалось загрузить аватар.';
          showToast(reason || 'Не удалось загрузить аватар.', 'error');
        }
      }
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
