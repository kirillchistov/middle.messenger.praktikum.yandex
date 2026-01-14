/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { attachFormValidation } from '@/utils/formValidation';
import { renderTemplate } from '@/utils/renderTemplate';
import template from './ProfileEdit.hbs?raw';

type ProfileEditProps = Record<string, never>;

export class ProfileEditPage extends Block<ProfileEditProps> {
  constructor(props: ProfileEditProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const form = root.querySelector<HTMLFormElement>('#profile-edit-form');
    if (form) {
      attachFormValidation(form, { logOnSuccess: true });
    }
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
