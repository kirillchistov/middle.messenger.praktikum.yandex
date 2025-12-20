import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
// import { resolve } from 'path';


export default defineConfig({
  base: '/middle.messenger.praktikum.yandex/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    handlebars({
      partialDirectory: 'src/partials',
      context(pagePath: string) {
        // Можно подставлять заголовки/мета под конкретные страницы
        const titles: Record<string, string> = {
          '/login.html': 'Вход — Chat App',
          '/register.html': 'Регистрация — Chat App',
          '/chat.html': 'Чаты — Chat App',
          '/settings.html': 'Настройки — Chat App',
          '/error-404.html': 'Страница не найдена',
          '/error-5xx.html': 'Ошибка сервера',
        };
        return {
          title: titles[pagePath] ?? 'Chat App',
        };
      },
    }),
  ],
});