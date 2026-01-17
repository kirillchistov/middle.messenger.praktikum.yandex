// Вынесу модалку загрузки в отдельный компонент
import { Block } from '../../core/block';
import { renderTemplate } from '../../utils/renderTemplate';
import template from './UploadModal.hbs?raw';

type UploadModalProps = {
  title: string;
  isOpen: boolean;
};

export class UploadModal extends Block<UploadModalProps> {
  constructor() {
    super('div', { title: 'Прикрепить файл', isOpen: false });
  }

  protected componentDidMount(): void {
    const root = this.getContent();
    if (!root) return;

    const closeBtn = root.querySelector<HTMLButtonElement>('#upload-close');
    const backdrop = root.querySelector<HTMLDivElement>('#upload-backdrop');
    const modal = root.querySelector<HTMLDivElement>('#upload-modal');

    const close = () => this.setProps({ isOpen: false });

    if (closeBtn) this.addDOMListener(closeBtn, 'click', close);
    if (backdrop) this.addDOMListener(backdrop, 'click', close);
    if (modal) {
      this.addDOMListener(modal, 'click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.modal')) close();
      });
    }

    // Здесь надо будет поправить типизацию, чтобы принимал document.
    // this.addDOMListener(document, 'keydown', (e: KeyboardEvent) => {
    //   if (e.key === 'Escape') close();
    // });
  }

  public open(type: string): void {
    let title = 'Прикрепить вложение';
    if (type.includes('фото') || type.includes('видео')) title = 'Прикрепить фото или видео';
    else if (type.includes('файл')) title = 'Прикрепить файл';
    else if (type.includes('локация')) title = 'Поделиться локацией';

    this.setProps({ title, isOpen: true });
  }

  protected render(): string {
    return renderTemplate(template, this.props);
  }
}
