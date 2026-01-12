export function renderTemplate<TContext extends object>(
  template: string,
  context: TContext,
): string {
  if (window.Handlebars && typeof window.Handlebars.compile === 'function') {
    const compileFn = window.Handlebars.compile<TContext>(template);
    return compileFn(context);
  }

  // fallback, если Handlebars не инициализирован
  return template;
}
