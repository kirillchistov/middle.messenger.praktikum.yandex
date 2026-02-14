// Проверка работы API в обход CORS YP
import express, { type Request, type Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = 4000;

// "База" в памяти
type User = {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

const users = new Map<string, User>(); // login -> User
let nextId = 1;

app.use(express.json());
app.use(cookieParser());

// разрешил запросы с фронта Vite
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  }),
);

const AUTH_COOKIE_NAME = 'authMock';

// типизировал Request/Response
function getUserFromRequest(req: Request): User | null {
  const login = req.cookies[AUTH_COOKIE_NAME] as string | undefined;
  if (!login) return null;
  const user = users.get(login);
  return user ?? null;
}

// signup
app.post('/api/v2/auth/signup', (req: Request, res: Response) => {
  const {
    first_name,
    second_name,
    login,
    email,
    password,
    phone,
  } = req.body || {};

  if (!login || !password || !email || !first_name || !second_name || !phone) {
    return res.status(400).json({ reason: 'Missing required fields' });
  }

  if (users.has(login)) {
    return res.status(400).json({ reason: 'User already exists' });
  }

  // без ++, чтобы не ругался eslint
  const user: User = {
    id: nextId,
    first_name,
    second_name,
    login,
    email,
    password,
    phone,
  };
  nextId += 1;

  users.set(login, user);

  return res.status(200).json({ id: user.id });
});

// signin
app.post('/api/v2/auth/signin', (req: Request, res: Response) => {
  const { login, password } = req.body || {};

  if (!login || !password) {
    return res.status(400).json({ reason: 'Login and password are required' });
  }

  const user = users.get(login);
  if (!user || user.password !== password) {
    return res.status(401).json({ reason: 'Login or password is incorrect' });
  }

  res.cookie(AUTH_COOKIE_NAME, login, {
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.status(200).end();
});

// getUser
app.get('/api/v2/auth/user', (req: Request, res: Response) => {
  const user = getUserFromRequest(req);
  if (!user) {
    return res.status(401).json({ reason: 'Cookie is not valid' });
  }

  return res.status(200).json({
    id: user.id,
    first_name: user.first_name,
    second_name: user.second_name,
    display_name: null,
    login: user.login,
    email: user.email,
    phone: user.phone,
    avatar: null,
  });
});

// logout
app.post('/api/v2/auth/logout', (req: Request, res: Response) => {
  res.clearCookie(AUTH_COOKIE_NAME);
  return res.status(200).end();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Mock API server is running at http://localhost:${PORT}`);
});
