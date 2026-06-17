import Handlebars from 'handlebars';
import { publicAssetUrl } from './app-path';

const escapeHtml = (value: unknown): string => {
  if (value == null) return '';
  const str = String(value);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export const registerHandlebarsHelpers = (): void => {
  Handlebars.registerHelper('safeText', (value) => escapeHtml(value));
  Handlebars.registerHelper('publicAsset', (path) => publicAssetUrl(String(path)));
};
