/* eslint-disable import/extensions */
import { renderTemplate } from '@utils/renderTemplate';
import { Block } from '@/core/block';
import { createFormValidation } from '@/utils/formValidation';
// import { renderTemplateToFragment } from '@/utils/renderTemplate';
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
    if (!form) {
      // eslint-disable-next-line no-console
      console.warn('[ProfileEditPage] форма потерялась');
      return;
    }

    const { validateField, validateForm } = createFormValidation(form, {
      logOnSuccess: true,
    });

    const inputs = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
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

    this.addDOMListener(form, 'submit', (event) => {
      const e = event as SubmitEvent;
      e.preventDefault();
      const { valid } = validateForm();
      if (!valid) {
        // eslint-disable-next-line no-console
        console.warn('[ProfileEditPage] форма невалидна — отправка отменена');
        return;
      }
      // объект с данными логируется внутри createFormValidation
      // eslint-disable-next-line no-console
      console.log('[ProfileEditPage] форма успешно отправлена');
    });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
