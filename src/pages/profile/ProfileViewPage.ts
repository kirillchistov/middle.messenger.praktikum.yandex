/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import { store } from '@/core/store';
import type { UserDTO } from '@/api/auth-api';
import { Block } from '@/core/block';
import template from './ProfileView.hbs?raw';

type ProfileViewProps = {
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
    return `https://ya-praktikum.tech/api/v2/resources${path}`;
  }
  return '/assets/avatar-transp.png';
};
export class ProfileViewPage extends Block<ProfileViewProps> {
  constructor(props?: Partial<ProfileViewProps>) {
    const state = store.getState();
    const user = state.user as UserDTO | null;
    const userAvatar: string = state.user.avatar;
    console.log(userAvatar);
    console.log(buildAvatarUrl(userAvatar));

    const defaults: ProfileViewProps = {
      email: user?.email ?? 'ivan@example.com',
      login: user?.login ?? 'ivanivanov',
      first_name: user?.first_name ?? 'Иван',
      second_name: user?.second_name ?? 'Иванов',
      display_name: user?.display_name ?? user?.first_name ?? '',
      phone: user?.phone ?? '+79991234567',
      avatar: buildAvatarUrl(userAvatar),
    };

    super('div', { ...defaults, ...props } as ProfileViewProps);
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
