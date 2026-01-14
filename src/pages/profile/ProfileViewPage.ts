/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import template from './ProfileView.hbs?raw';
import { renderTemplate } from '@/utils/renderTemplate';

type ProfileViewProps = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  avatar: string;
};

export class ProfileViewPage extends Block<ProfileViewProps> {
  constructor(props?: Partial<ProfileViewProps>) {
    const defaults: ProfileViewProps = {
      email: 'ivan@example.com',
      login: 'ivanivanov',
      first_name: 'Иван',
      second_name: 'Иванов',
      display_name: 'Иван',
      phone: '+79991234567',
      avatar: '/images/avatar-placeholder.png',
    };

    super('div', { ...defaults, ...props } as ProfileViewProps);
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
