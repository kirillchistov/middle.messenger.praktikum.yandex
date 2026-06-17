import type { SignInData, SignUpData, UserDTO } from '@/api/auth-api';

const STORAGE_KEY = 'messenger.localAuth.user';

const buildMockUser = (
  data: Pick<SignUpData, 'login'> & Partial<Omit<SignUpData, 'password'>>,
): UserDTO => ({
  id: Date.now(),
  first_name: data.first_name || data.login,
  second_name: data.second_name || '',
  display_name: data.first_name || data.login,
  login: data.login,
  email: data.email || `${data.login}@local.test`,
  phone: data.phone || '',
  avatar: null,
});

export const LocalAuth = {
  saveFromSignIn(data: SignInData): UserDTO {
    const user = buildMockUser(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  saveFromSignUp(data: SignUpData): UserDTO {
    const user = buildMockUser(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  getUser(): UserDTO | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as UserDTO;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  },

  hasUser(): boolean {
    return this.getUser() !== null;
  },

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
