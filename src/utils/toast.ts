// Тостер с показом временных уведомлений действий пользователя
let toastTimeoutId: number | null = null;

type ToastType = 'success' | 'error';

export function showToast(message: string, type: ToastType = 'success'): void {
  const root = document.querySelector<HTMLDivElement>('#toast-root');
  if (!root) return;

  root.innerHTML = '';

  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  el.textContent = message;
  root.appendChild(el);

  // Показываем всплывающее уведомление на 3 сек.
  requestAnimationFrame(() => {
    el.classList.add('toast--visible');
  });

  if (toastTimeoutId !== null) {
    window.clearTimeout(toastTimeoutId);
  }

  toastTimeoutId = window.setTimeout(() => {
    el.classList.remove('toast--visible');
    toastTimeoutId = null;
  }, 3000);
}
