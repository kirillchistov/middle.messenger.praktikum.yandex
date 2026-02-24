/* eslint-disable import/extensions */
import { AuthAPI } from '@/api/auth-api';

(async () => {
  try {
    await AuthAPI.signIn({ login: 'TestUser1', password: 'TestUser1' });
  } catch (e) {
    console.info('SignIn error', e);
  }

  const u = await AuthAPI.getUser();

  console.log('User', u);
})();
