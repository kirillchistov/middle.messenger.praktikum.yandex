// Express сервер
// CORS настроен на origin: 'http://localhost:3000' и credentials: true,
// Чтобы работать с куки на фронте.
// Ручки повторяют интерфейс AuthAPI, который на фронте.
import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import { migrate } from './migrate';
import { all, get, run } from './db';

const app = express();
const PORT = 4000;

// CORS: разрешаем доступ фронту на http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

// ---- Подключаем Auth API ----

type UserDTO = {
  id: number;
  login: string;
  password: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name: string | null;
  phone: string;
};

// Поиск юзера по куки-токену
type UserRow = {
  id: number;
  login: string;
  password: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name: string | null;
  phone: string;
  avatar_url: string | null;
};

// type SessionDTO = {
//   id: number;
//   user_id: number;
//   token: string;
//   created_at: string;
// };

type SessionRow = {
  id: number;
  user_id: number;
  token: string;
  created_at: string;
};

type ChatRow = {
  id: number;
  title: string;
  created_by: number;
  created_at: string;
};

type MessageRow = {
  id: number;
  chat_id: number;
  user_id: number;
  content: string;
  created_at: string;
};

const getUserFromRequest = async (req: express.Request): Promise<UserRow | null> => {
  const cookieHeader = req.headers.cookie ?? '';
  const token = cookieHeader
    .split(';')
    .map((s) => s.trim())
    .find((c) => c.startsWith('auth_token='))
    ?.split('=')[1];

  if (!token) return null;

  const session = await get<SessionRow>('SELECT * FROM sessions WHERE token = ?', [token]);
  if (!session) return null;

  const user = await get<UserRow>('SELECT * FROM users WHERE id = ?', [session.user_id]);
  return user ?? null;
};

// ручка регистрация
app.post('/api/auth/signup', async (req, res) => {
  try {
    const {
      login,
      password,
      email,
      first_name,
      second_name,
      display_name,
      phone,
    } = req.body as Partial<UserDTO>;

    if (!login || !password || !email || !first_name || !second_name || !phone) {
      return res.status(400).json({ reason: 'Не все обязательные поля заполнены' });
    }

    const existing = await get<UserDTO>('SELECT * FROM users WHERE login = ?', [login]);
    if (existing) {
      return res.status(409).json({ reason: 'Такой пользователь уже существует' });
    }

    await run(
      `
      INSERT INTO users (login, password, email, first_name, second_name, display_name, phone)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        login,
        password, // пока без хэша
        email,
        first_name,
        second_name,
        display_name ?? null,
        phone,
      ],
    );

    const user = await get<UserDTO>('SELECT * FROM users WHERE login = ?', [login]);
    if (!user) {
      return res.status(500).json({ reason: 'Не удалось создать пользователя' });
    }

    const token = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    await run(
      `
      INSERT INTO sessions (user_id, token, created_at)
      VALUES (?, ?, ?)
      `,
      [user.id, token, createdAt],
    );

    // токен пока храним в httpOnly-cookie
    res
      .cookie('auth_token', token, {
        httpOnly: false, // для простоты
        sameSite: 'lax',
      })
      .json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[POST /api/auth/signup]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// логин
app.post('/api/auth/signin', async (req, res) => {
  try {
    const { login, password } = req.body as Partial<UserDTO>;
    if (!login || !password) {
      return res.status(400).json({ reason: 'Неверный логин или пароль' });
    }

    const user = await get<UserDTO>(
      'SELECT * FROM users WHERE login = ? AND password = ?',
      [login, password],
    );

    if (!user) {
      return res.status(401).json({ reason: 'Неверный логин или пароль' });
    }

    const token = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    await run(
      `
      INSERT INTO sessions (user_id, token, created_at)
      VALUES (?, ?, ?)
      `,
      [user.id, token, createdAt],
    );

    res
      .cookie('auth_token', token, {
        httpOnly: false,
        sameSite: 'lax',
      })
      .json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[POST /api/auth/signin]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// получаем текущего пользователя по токену
// app.get('/api/auth/user', async (req, res) => {
//   try {
//     const token = (req.headers.cookie ?? '')
//       .split(';')
//       .map((s) => s.trim())
//       .find((c) => c.startsWith('auth_token='))
//       ?.split('=')[1];

//     if (!token) {
//       return res.status(401).json({ reason: 'Отсутствует токен авторизации' });
//     }

//     const session = await get<SessionDTO>(
//       'SELECT * FROM sessions WHERE token = ?',
//       [token],
//     );
//     if (!session) {
//       return res.status(401).json({ reason: 'Невалидная сессия' });
//     }

//     const user = await get<UserDTO>('SELECT * FROM users WHERE id = ?', [session.user_id]);
//     if (!user) {
//       return res.status(404).json({ reason: 'Пользователь не найден' });
//     }

//     res.json(user);
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.error('[GET /api/auth/user]', error);
//     res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
//   }
// });

// Получить текущего пользователя (уже был, можно переписать на getUserFromRequest)
app.get('/api/auth/user', async (req, res) => {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }
    res.json(user);
  } catch (error) {
    console.error('[GET /api/auth/user]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Обновление профиля
app.put('/api/user/profile', async (req, res) => {
  try {
    const currentUser = await getUserFromRequest(req);
    if (!currentUser) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const {
      email,
      first_name,
      second_name,
      display_name,
      phone,
    } = req.body as Partial<UserRow>;

    await run(
      `
      UPDATE users
      SET email = ?, first_name = ?, second_name = ?, display_name = ?, phone = ?
      WHERE id = ?
      `,
      [
        email ?? currentUser.email,
        first_name ?? currentUser.first_name,
        second_name ?? currentUser.second_name,
        display_name ?? currentUser.display_name,
        phone ?? currentUser.phone,
        currentUser.id,
      ],
    );

    const updated = await get<UserRow>('SELECT * FROM users WHERE id = ?', [currentUser.id]);
    res.json(updated);
  } catch (error) {
    console.error('[PUT /api/user/profile]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Смена пароля по-простому
// app.put('/api/user/password', async (req, res) => {
//   try {
//     const currentUser = await getUserFromRequest(req);
//     if (!currentUser) {
//       return res.status(401).json({ reason: 'Пользователь не авторизован' });
//     }

//     const { oldPassword, newPassword } = req.body as { oldPassword: string; newPassword: string };
//     if (!oldPassword || !newPassword) {
//       return res.status(400).json({ reason: 'Не указан старый или новый пароль' });
//     }

//     if (currentUser.password !== oldPassword) {
//       return res.status(400).json({ reason: 'Старый пароль указан некорректно' });
//     }

//     await run(
//       'UPDATE users SET password = ? WHERE id = ?',
//       [newPassword, currentUser.id],
//     );

//     res.json({ success: true });
//   } catch (error) {
//     console.error('[PUT /api/user/password]', error);
//     res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
//   }
// });

app.put('/api/user/password', async (req, res) => {
  try {
    const currentUser = await getUserFromRequest(req);
    if (!currentUser) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const { oldPassword, newPassword } = req.body as {
      oldPassword: string;
      newPassword: string;
    };

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ reason: 'Missing oldPassword or newPassword' });
    }

    if (currentUser.password !== oldPassword) {
      return res.status(400).json({ reason: 'Old password is incorrect' });
    }

    await run(
      'UPDATE users SET password = ? WHERE id = ?',
      [newPassword, currentUser.id],
    );

    res.json({ success: true });
  } catch (error) {
    console.error('[PUT /api/user/password]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Обновление аватара (пока просто URL строкой)
// app.put('/api/user/avatar', async (req, res) => {
//   try {
//     const currentUser = await getUserFromRequest(req);
//     if (!currentUser) {
//       return res.status(401).json({ reason: 'Пользователь не авторизован' });
//     }

//     const { avatar_url } = req.body as { avatar_url: string };
//     if (!avatar_url) {
//       return res.status(400).json({ reason: 'Некорректный адрес аватара' });
//     }

//     await run('UPDATE users SET avatar_url = ? WHERE id = ?', [avatar_url, currentUser.id]);

//     const updated = await get<UserRow>('SELECT * FROM users WHERE id = ?', [currentUser.id]);
//     res.json(updated);
//   } catch (error) {
//     console.error('[PUT /api/user/avatar]', error);
//     res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
//   }
// });

app.put('/api/user/avatar', async (req, res) => {
  try {
    const currentUser = await getUserFromRequest(req);
    if (!currentUser) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const { avatar_url } = req.body as { avatar_url: string };

    if (!avatar_url) {
      return res.status(400).json({ reason: 'Некорректный url аватара' });
    }

    await run(
      'UPDATE users SET avatar_url = ? WHERE id = ?',
      [avatar_url, currentUser.id],
    );

    const updated = await get<UserRow>('SELECT * FROM users WHERE id = ?', [currentUser.id]);
    res.json(updated);
  } catch (error) {
    console.error('[PUT /api/user/avatar]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Выход
app.post('/api/auth/logout', async (req, res) => {
  try {
    const token = (req.headers.cookie ?? '')
      .split(';')
      .map((s) => s.trim())
      .find((c) => c.startsWith('auth_token='))
      ?.split('=')[1];

    if (token) {
      await run('DELETE FROM sessions WHERE token = ?', [token]);
    }

    res
      .clearCookie('auth_token')
      .status(200)
      .json({ success: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[POST /api/auth/logout]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// пример endpoint для дебага
app.get('/api/auth/users', async (_req, res) => {
  const users = await all<UserDTO>('SELECT * FROM users');
  res.json(users);
});

// старт
const start = async (): Promise<void> => {
  try {
    await migrate();
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`[Server] listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[Server] не работает', error);
  }
};

// Список чатов текущего пользователя
app.get('/api/chats', async (req, res) => {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const chats = await all<ChatRow>(
      `
      SELECT c.*
      FROM chats c
      JOIN chat_users cu ON cu.chat_id = c.id
      WHERE cu.user_id = ?
      ORDER BY c.created_at DESC
      `,
      [user.id],
    );

    res.json(chats);
  } catch (error) {
    console.error('[GET /api/chats]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Создание чата
app.post('/api/chats', async (req, res) => {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const { title } = req.body as { title: string };
    if (!title) {
      return res.status(400).json({ reason: 'Не указан заголовок' });
    }

    const createdAt = new Date().toISOString();

    await run(
      `
      INSERT INTO chats (title, created_by, created_at)
      VALUES (?, ?, ?)
      `,
      [title, user.id, createdAt],
    );

    const chat = await get<ChatRow>(
      'SELECT * FROM chats WHERE rowid = last_insert_rowid()',
    );

    if (!chat) {
      return res.status(500).json({ reason: 'Не удалось создать чат' });
    }

    // создателя сразу добавляем в участники
    await run(
      'INSERT INTO chat_users (chat_id, user_id, role) VALUES (?, ?, ?)',
      [chat.id, user.id, 'owner'],
    );

    res.json(chat);
  } catch (error) {
    console.error('[POST /api/chats]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Удаление чата
app.delete('/api/chats/:id', async (req, res) => {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const chatId = Number(req.params.id);
    if (!chatId) {
      return res.status(400).json({ reason: 'Некорректный id чата' });
    }

    const chat = await get<ChatRow>('SELECT * FROM chats WHERE id = ?', [chatId]);
    if (!chat) {
      return res.status(404).json({ reason: 'Чат не найден' });
    }

    if (chat.created_by !== user.id) {
      return res.status(403).json({ reason: 'Только владелец может удалить чат' });
    }

    await run('DELETE FROM chats WHERE id = ?', [chatId]);

    res.json({ success: true });
  } catch (error) {
    console.error('[DELETE /api/chats/:id]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Добавление пользователя в чат по login
app.post('/api/chats/:id/users', async (req, res) => {
  try {
    const currentUser = await getUserFromRequest(req);
    if (!currentUser) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const chatId = Number(req.params.id);
    const { login } = req.body as { login: string };

    if (!chatId || !login) {
      return res.status(400).json({ reason: 'Некорректный id чата или логин' });
    }

    const chat = await get<ChatRow>('SELECT * FROM chats WHERE id = ?', [chatId]);
    if (!chat) {
      return res.status(404).json({ reason: 'Чат не найден' });
    }

    // проверим, что текущий user — участник
    const isMember = await get<{ count: number }>(
      'SELECT COUNT(*) as count FROM chat_users WHERE chat_id = ? AND user_id = ?',
      [chatId, currentUser.id],
    );
    if (!isMember || isMember.count === 0) {
      return res.status(403).json({ reason: 'Пользователь не состоит в чате' });
    }

    const userToAdd = await get<UserRow>('SELECT * FROM users WHERE login = ?', [login]);
    if (!userToAdd) {
      return res.status(404).json({ reason: 'Пользователь не найден' });
    }

    await run(
      'INSERT OR IGNORE INTO chat_users (chat_id, user_id, role) VALUES (?, ?, ?)',
      [chatId, userToAdd.id, 'member'],
    );

    res.json({ success: true });
  } catch (error) {
    console.error('[POST /api/chats/:id/users]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Удаление пользователя из чата по login
app.delete('/api/chats/:id/users', async (req, res) => {
  try {
    const currentUser = await getUserFromRequest(req);
    if (!currentUser) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const chatId = Number(req.params.id);
    const { login } = req.body as { login: string };

    if (!chatId || !login) {
      return res.status(400).json({ reason: 'Некорректный id чата или логин' });
    }

    const userToRemove = await get<UserRow>('SELECT * FROM users WHERE login = ?', [login]);
    if (!userToRemove) {
      return res.status(404).json({ reason: 'Пользователь не найден' });
    }

    await run(
      'DELETE FROM chat_users WHERE chat_id = ? AND user_id = ?',
      [chatId, userToRemove.id],
    );

    res.json({ success: true });
  } catch (error) {
    console.error('[DELETE /api/chats/:id/users]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Получить сообщения чата
app.get('/api/chats/:id/messages', async (req, res) => {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const chatId = Number(req.params.id);
    if (!chatId) {
      return res.status(400).json({ reason: 'Некорректный id чата' });
    }

    // опционально можно проверять, что user — участник чата

    const messages = await all<MessageRow>(
      `
      SELECT * FROM messages
      WHERE chat_id = ?
      ORDER BY created_at ASC
      `,
      [chatId],
    );

    res.json(messages);
  } catch (error) {
    console.error('[GET /api/chats/:id/messages]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

// Отправить сообщение
app.post('/api/chats/:id/messages', async (req, res) => {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ reason: 'Пользователь не авторизован' });
    }

    const chatId = Number(req.params.id);
    const { content } = req.body as { content: string };

    if (!chatId || !content) {
      return res.status(400).json({ reason: 'Некорректный id чата или логин' });
    }

    const createdAt = new Date().toISOString();

    await run(
      `
      INSERT INTO messages (chat_id, user_id, content, created_at)
      VALUES (?, ?, ?, ?)
      `,
      [chatId, user.id, content, createdAt],
    );

    const message = await get<MessageRow>(
      'SELECT * FROM messages WHERE rowid = last_insert_rowid()',
    );

    res.json(message);
  } catch (error) {
    console.error('[POST /api/chats/:id/messages]', error);
    res.status(500).json({ reason: 'Внутренняя ошибка сервера' });
  }
});

start();
