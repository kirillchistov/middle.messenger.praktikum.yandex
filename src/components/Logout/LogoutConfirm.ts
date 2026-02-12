/* eslint-disable import/extensions */
import { Block } from '../../core/block';
import { renderTemplate } from '@/utils/renderTemplate';
import template from './logout-confirm.hbs?raw';

type LogoutConfirmProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export class LogoutConfirm extends Block<LogoutConfirmProps> {
  render(): string {
    return renderTemplate(template, this.props);
  }

  componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const confirmBtn = root.querySelector('[data-logout-confirm]');
    const cancelBtn = root.querySelector('[data-logout-cancel]');

    if (confirmBtn) {
      confirmBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.props.onConfirm();
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.props.onCancel();
      });
    }
  }
}
