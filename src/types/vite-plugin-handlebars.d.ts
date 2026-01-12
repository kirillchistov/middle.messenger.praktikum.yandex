declare module 'vite-plugin-handlebars' {
  import type { Plugin } from 'vite';
  // import { resolve } from 'path';

  export interface HandlebarsOptions {
    partialDirectory?: string | string[];
    context?: (pagePath: string) => Record<string, unknown>;
  }

  export default function handlebars(options?: HandlebarsOptions): Plugin;
}

const projectRoot = resolve(__dirname, '..', '..');

export const handlebarsPartialsDirectories = [
  'src/pages',
  'src/pages/landing',
  'src/pages/register',
  'src/pages/login',
  'src/pages/chats',
  'src/pages/profile',
  'src/components',
  'src/components/Input',
  'src/components/Button',
  'src/components/chat',
  'src/components/message',
] as const;

export type HandlebarsPartialDirectory =
  (typeof handlebarsPartialsDirectories)[number];