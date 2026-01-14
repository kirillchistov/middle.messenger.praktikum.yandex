import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { handlebarsPartialsDirectories } from './src/types/vite-plugin-handlebars';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  preview: {
    port: 3000,
    strictPort: true
  },

  base: '/',
  // root: 'src',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // register: resolve(__dirname, 'src/register.html'),
        // messenger: resolve(__dirname, 'messenger.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@components': resolve(__dirname, 'src/components'),
      '@partials': resolve(__dirname, 'src/partials'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@core': resolve(__dirname, 'src/core'),
      '@types': resolve(__dirname, 'src/types'),
      '@ts': resolve(__dirname, 'src/ts'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  plugins: [
    handlebars({
      partialDirectory: handlebarsPartialsDirectories as unknown as string,
      context(pagePath: string) {
        if (pagePath.endsWith('/') || pagePath.endsWith('index.html')) {
          return { title: 'Чаты, в которых вас понимают.' };
        }
        if (pagePath.endsWith('register') || pagePath.endsWith('register.html')) {
          return { title: 'Регистрация' };
        }
        if (pagePath.endsWith('login') || pagePath.endsWith('login.html')) {
          return { title: 'Вход' };
        }
        if (pagePath.endsWith('profile') || pagePath.endsWith('profile.html')) {
          return { title: 'Профиль' };
        }
        if (pagePath.endsWith('error-404') || pagePath.endsWith('error-404.html')) {
          return { title: 'Ошибка: страница не найдена' };
        }
        return { title: 'Диалоги' };
      },
    }),
  ],
});
