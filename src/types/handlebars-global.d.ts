import type Handlebars from 'handlebars';

declare global {
  interface Window {
    Handlebars: typeof Handlebars;
  }
}

export {};
