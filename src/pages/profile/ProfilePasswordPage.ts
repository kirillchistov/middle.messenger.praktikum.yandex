/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import { attachFormValidation } from '@/utils/formValidation';
import template from './ProfilePassword.hbs?raw';

type ProfilePasswordProps = Record<string, never>;

export class ProfilePasswordPage extends Block<ProfilePasswordProps> {
  constructor(props: ProfilePasswordProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#profile-password-form');
    if (form) {
      attachFormValidation(form, { logOnSuccess: true });
    }
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
