import { Block } from '../../core/block';
import template from './register.hbs?raw';
import { attachFormValidation } from '../../utils/formValidation';
import { renderTemplate } from '../../utils/renderTemplate';

type RegisterProps = Record<string, never>;

export class RegisterPage extends Block<RegisterProps> {
  constructor(props: RegisterProps = {}) {
    super('div', props);
  }

  protected componentDidMount(): void {
    console.log('[RegisterPage] componentDidMount');
    const root = this.getContent();
    console.log('[RegisterPage] content exists?', !!root);
    if (!root) return;
    
    const form = root.querySelector<HTMLFormElement>('#register-form');
    console.log('[RegisterPage] form found?', !!form);
    if (form) {
      attachFormValidation(form, { logOnSuccess: true });
    }
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
