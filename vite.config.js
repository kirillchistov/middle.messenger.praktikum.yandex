import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { fileURLToPath } from 'node:url';
import { resolve } from 'path';

var root = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                login: resolve(root, 'login.html'),
                register: resolve(root, 'register.html'),
                chat: resolve(root, 'chat.html'),
                settings: resolve(root, 'settings.html'),
                profileView: resolve(root, 'profile-view.html'),
                profileEdit: resolve(root, 'profile-edit.html'),
                profilePassword: resolve(root, 'profile-password.html'),
                profileAvatar: resolve(root, 'profile-avatar.html'),
                error404: resolve(root, 'error-404.html'),
                error5xx: resolve(root, 'error-5xx.html'),
            }
        }
    },
    server: {
        port: 3000,
    },
    plugins: [
        handlebars({
            partialDirectory: 'src/partials',
            context: function (pagePath) {
                var _a;
                // Add titles, meta-tags for specific pages here
                var titles = {
                    '/login.html': 'Вход — Chat App',
                    '/register.html': 'Регистрация — Chat App',
                    '/chat.html': 'Чаты — Chat App',
                    '/settings.html': 'Настройки — Chat App',
                    '/profile-view.html': 'Просмотр профиля — Chat App',
                    '/profile-edit.html': 'Изменение профиля — Chat App',
                    '/profile-avatar.html': 'Изменение аватара — Chat App',
                    '/profile-password.html': 'Изменение пароля — Chat App',          
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
