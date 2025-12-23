declare module 'vite-plugin-handlebars' {
  import type { Plugin } from 'vite';

  export interface HandlebarsOptions {
    // partialDirectory?: string;
    partialDirectory?: string | string[];
    context?: (pagePath: string) => Record<string, unknown>;
  }

  export default function handlebars(options?: HandlebarsOptions): Plugin;
}
