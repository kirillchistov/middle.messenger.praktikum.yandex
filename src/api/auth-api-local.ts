/* eslint-disable import/extensions */

// import { HTTPTransport } from '../core/http-transport';
// import { API_BASE_URL } from '../utils/constants';
// import { UserDTO, SessionDTO } from '@/types/response-data';

// const CRUDCRUD_BASE_URL = 'https://crudcrud.com/api/XXXXXXXXXXXXXXX';

// const http = new HTTPTransport(API_BASE_URL);

// export class AuthAPI {
//   // регистрация
//   public static async signUp(data: UserDTO): Promise<UserDTO> {
//     const user = await http.post<UserDTO>('/users', { data });

//     // создаём сессию
//     const session: SessionDTO = await http.post<SessionDTO>('/sessions', {
//       data: {
//         userId: user.id,
//         createdAt: new Date().toISOString(),
//       },
//     });

//     this.saveSession(session);
//     return user;
//   }

//   // логин
//   public static async signIn(login: string, password: string): Promise<UserDTO> {
//     const users = await http.get<UserDTO[]>('/users');
//     const user = users.find((u) => u.login === login && u.password === password);

//     if (!user) {
//       throw new Error('Неверный логин или пароль');
//     }

//     const session: SessionDTO = await http.post<SessionDTO>('/sessions', {
//       data: {
//         userId: user.id,
//         createdAt: new Date().toISOString(),
//       },
//     });

//     this.saveSession(session);
//     return user;
//   }

//   public static async getUser(): Promise<UserDTO | null> {
//     const session = this.loadSession();
//     if (!session) return null;

//     const user = await http.get<UserDTO>(`/users/${session.userId}`);
//     return user ?? null;
//   }

//   public static async logout(): Promise<void> {
//     const session = this.loadSession();
//     if (session?._id) {
//       await http.delete(`/sessions/${session._id}`);
//     }
//     this.clearSession();
//   }

//   // --- локальная сессия (упрощённо) ---

//   private static saveSession(session: SessionDTO): void {
//     localStorage.setItem('messenger_session', JSON.stringify(session));
//   }

//   private static loadSession(): SessionDTO | null {
//     const raw = localStorage.getItem('messenger_session');
//     if (!raw) return null;
//     try {
//       return JSON.parse(raw) as SessionDTO;
//     } catch {
//       return null;
//     }
//   }

//   private static clearSession(): void {
//     localStorage.removeItem('messenger_session');
//   }
// }
