// src/global.d.ts
declare module 'vite-plugin-handlebars' {
  import type { Plugin } from 'vite';

  interface VitePluginHandlebarsOptions {
    partialDirectory?: string;
    context?:
      | Record<string, unknown>
      | ((pagePath: string) => Record<string, unknown>);
  }

  export default function handlebars(
    options?: VitePluginHandlebarsOptions
  ): Plugin;
}
