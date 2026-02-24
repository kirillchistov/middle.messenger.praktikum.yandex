/* eslint-disable import/extensions */
import { Block } from '@/core/block';
import { router } from '@/core/router';
import { store } from '@/core/store';
import { AuthAPI } from '@/api/auth-api';

type LogoutProps = Record<string, never>;

export class LogoutPage extends Block<LogoutProps> {
  constructor(props: LogoutProps = {}) {
    super('div', props);
  }

  protected async componentDidMount(): Promise<void> {
    try {
      await AuthAPI.logout();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[LogoutPage] logout error', error);
    } finally {
      store.setState({ user: null });
      router.go('/login');
    }
  }

  protected render(): string {
    // пока просто текст-заглушка
    return '<p>Выход из аккаунта…</p>';
  }
}
