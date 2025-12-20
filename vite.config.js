import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
// import { resolve } from 'path';
export default defineConfig({
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
            context: function (pagePath) {
                var _a;
                // Можно подставлять заголовки/мета под конкретные страницы
                var titles = {
                    '/login.html': 'Вход — Chat SaaS',
                    '/register.html': 'Регистрация — Chat App',
                    '/chat.html': 'Чаты — Chat App',
                    '/settings.html': 'Настройки — Chat App',
                    '/error-404.html': 'Страница не найдена',
                    '/error-5xx.html': 'Ошибка сервера',
                };
                return {
                    title: (_a = titles[pagePath]) !== null && _a !== void 0 ? _a : 'Chat App',
                };
            },
        }),
    ],
});
