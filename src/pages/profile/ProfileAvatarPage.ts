/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import template from './ProfileAvatar.hbs?raw';

type ProfileAvatarProps = {
  avatar: string;
};

export class ProfileAvatarPage extends Block<ProfileAvatarProps> {
  constructor(props?: Partial<ProfileAvatarProps>) {
    const defaults: ProfileAvatarProps = {
      avatar: '/images/avatar-placeholder.png',
    };
    super('div', { ...defaults, ...props } as ProfileAvatarProps);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#profile-avatar-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      console.log('Avatar upload payload:', formData.get('avatar'));
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
