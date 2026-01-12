// Работа с валидацией форм: навешивание обработчиков и проверка полей
import { validateField, type FieldName } from './validation';

type AttachOptions = {
  logOnSuccess?: boolean;
};

export function validateInputElement(
  input: HTMLInputElement | HTMLTextAreaElement,
): boolean {
  const name = input.name as FieldName;
  const value = input.value;

  const { valid, message } = validateField(name, value);

  const errorElement = input
    .closest('.form-field, .auth__form')
    ?.querySelector<HTMLElement>(`.error-${name}`);

  if (!valid) {
    input.classList.add('input_error');
    if (errorElement) errorElement.textContent = message ?? 'Некорректное значение';
  } else {
    input.classList.remove('input_error');
    if (errorElement) errorElement.textContent = '';
  }

  return valid;
}

export function attachFormValidation(
  form: HTMLFormElement,
  options: AttachOptions = {},
): void {
  const { logOnSuccess = false } = options;
  console.log('attach register')
  // blur
  form.addEventListener(
    'blur',
    (event) => {
      const target = event.target as HTMLElement;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement
      ) {
        if (target.name) validateInputElement(target);
      }
    },
    true,
  );

  // submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >('input[name], textarea[name]');

    let isFormValid = true;

    inputs.forEach((input) => {
      const ok = validateInputElement(input);
      if (!ok) isFormValid = false;
    });

    if (!isFormValid) return;

    const formData = new FormData(form);
    const raw = Object.fromEntries(
      formData.entries(),
    ) as Record<string, FormDataEntryValue>;

    const data: Record<string, string> = {};
    Object.entries(raw).forEach(([key, value]) => {
      data[key] = typeof value === 'string' ? value : '';
    });

    if (logOnSuccess) {
      // здесь будет реализация отправки даных или disable-eslint
      console.log('Form submit payload:', data);
    }

    // здесь буду вызвать HTTPTransport/AuthService
  });
}
