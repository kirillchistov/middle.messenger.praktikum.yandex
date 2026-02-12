/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { router } from '@/core/router';
import { AuthAPI } from '@/api/auth-api';
import { store } from '@/core/store';
import { renderTemplate } from '@/utils/renderTemplate';
import layoutTemplate from '../layouts/layout.hbs?raw';

type BlockPageClass = new () => Block;

export async function handleLogout() {
  try {
    await AuthAPI.logout();
  } catch {
    // игнорируем сетевые ошибки, всё равно чистим состояние
  } finally {
    store.setState({
      user: null,
      chats: [],
      activeChatId: null,
      messages: {},
    });
    router.go('/login');
  }
}

export function withLayout(Page: BlockPageClass): BlockPageClass {
  return class WithLayout extends Block {
    private pageInstance: Block | null = null;

    render(): string {
      // лениво создаём вложенную страницу
      if (!this.pageInstance) {
        this.pageInstance = new Page();
      }

      const pageHtml = (this.pageInstance as any).render() as string;

      return renderTemplate(layoutTemplate, { body: pageHtml });
    }

    componentDidMount(): void {
      // гарантируем, что pageInstance есть
      if (!this.pageInstance) {
        this.pageInstance = new Page();
      }

      const main = document.querySelector('.app-main') as HTMLElement | null;
      if (main) {
        main.innerHTML = (this.pageInstance as any).render() as string;
        (this.pageInstance as any).componentDidMount?.();
      }

      const header = document.querySelector('.app-header') as HTMLElement | null;
      if (!header) return;

      const profileLink = header.querySelector('[data-link-profile]');
      const homeLink = header.querySelector('[data-link-home]');
      const logoutButton = header.querySelector('[data-link-logout]');

      if (profileLink) {
        profileLink.addEventListener('click', (event) => {
          event.preventDefault();
          router.go('/settings');
        });
      }

      if (homeLink) {
        homeLink.addEventListener('click', (event) => {
          event.preventDefault();
          router.go('/');
        });
      }

      if (logoutButton) {
        logoutButton.addEventListener('click', async (event) => {
          event.preventDefault();
          try {
            await AuthAPI.logout();
          } catch {
            // ignore
          } finally {
            store.setState({
              user: null,
              chats: [],
              activeChatId: null,
              messages: {},
            });
            router.go('/login');
          }
        });
      }
    }
  };
}
