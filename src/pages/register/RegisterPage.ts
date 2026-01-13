import { Block } from '@core/block';
import template from './register.hbs?raw';
import { attachFormValidation } from '@utils/formValidation';
import { renderTemplate } from '@utils/renderTemplate';

type RegisterProps = Record<string, never>;

export class RegisterPage extends Block<RegisterProps> {
  constructor(props: RegisterProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    console.log('[RegisterPage] content exists?', !!root);
    if (!root) return;
    
    const form = document.getElementById('register-form') as HTMLFormElement | null;
    
    if (form) {
      console.log('[RegisterPage] form found?', !!form);
      attachFormValidation(form, { logOnSuccess: true });
      console.log('form data must be here');
    }
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
