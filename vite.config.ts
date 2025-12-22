import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  preview: {
    port: 3000,
    strictPort: true
  },

  base: '/middle.messenger.praktikum.yandex/',
  root: 'src',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        register: resolve(__dirname, 'register.html'),
        messenger: resolve(__dirname, 'messenger.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  },
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, 'src/pages'),
        resolve(__dirname, 'src/components')
      ],
      context(pagePath: string) {
        if (pagePath.endsWith('messenger.html')) {
          return {
            title: 'Чаты',
            chats: [
              {
                initials: 'JD',
                title: 'John Doe',
                time: '12:30',
                lastMessage: 'Привет!',
                unread: 2
              },
              {
                initials: 'AS',
                title: 'Alice',
                time: '10:05',
                lastMessage: 'Созвонимся позже',
                unread: 0
              }
            ],
            messages: [
              { type: 'incoming', text: 'Привет!', time: '12:20' },
              { type: 'outgoing', text: 'Привет, как дела?', time: '12:21' }
            ]
          };
        }

        if (pagePath.endsWith('register.html')) {
          return {
            title: 'Регистрация'
          };
        }

        return {
          title: 'Messenger'
        };
      }
    })
  ]
});
