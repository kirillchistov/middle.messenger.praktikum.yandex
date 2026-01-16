export type ValidationResult = {
  valid: boolean;
  errors: Record<string, string>;
};

export type ValidationHandlers = {
  validateField: (input: HTMLInputElement | HTMLTextAreaElement) => void;
  validateForm: () => ValidationResult;
};

const namePattern = /^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё-]*$/; // имя/фамилия
const loginPattern = /^(?!\d+$)[A-Za-z0-9_-]{3,20}$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phonePattern = /^\+?\d{10,15}$/;
const passwordUppercasePattern = /[A-Z]/;
const passwordDigitPattern = /\d/;

const getFieldName = (name: string): string => {
  switch (name) {
    case 'first_name':
      return 'Имя';
    case 'second_name':
      return 'Фамилия';
    case 'display_name':
      return 'Имя в чате';
    case 'login':
      return 'Логин';
    case 'email':
      return 'Почта';
    case 'phone':
      return 'Телефон';
    case 'password':
    case 'oldPassword':
    case 'newPassword':
    case 'repeatPassword':
      return 'Пароль';
    default:
      return 'Поле';
  }
};

export const createFormValidation = (
  formElement: HTMLFormElement,
  options?: { logOnSuccess?: boolean },
): ValidationHandlers => {
  const validateField = (input: HTMLInputElement | HTMLTextAreaElement): void => {
    const { name } = input;
    const value = input.value.trim();
    const fieldLabel = getFieldName(name);

    let error = '';

    // Базовая проверка на пустоту для всех обязательных полей
    if (!value) {
      error = `${fieldLabel} обязательно для заполнения`;
    } else {
      // 2. Специализированные правила по имени поля
      if (['first_name', 'second_name', 'display_name'].includes(name)) {
        if (!namePattern.test(value)) {
          error = `${fieldLabel} должно начинаться с заглавной буквы и содержать только буквы или дефис`;
        }
      }

      if (name === 'login') {
        if (!loginPattern.test(value)) {
          error = 'Логин от 3 до 20 символов, латиница, цифры, "-" и "_", не только цифры';
        }
      }

      if (name === 'email') {
        if (!emailPattern.test(value)) {
          error = 'Некорректный формат почты';
        }
      }

      if (name === 'phone') {
        if (!phonePattern.test(value)) {
          error = 'Телефон должен содержать от 10 до 15 цифр и может начинаться с "+"';
        }
      }

      if (
        name === 'password'
        || name === 'oldPassword'
        || name === 'newPassword'
        || name === 'repeatPassword'
      ) {
        if (value.length < 8 || value.length > 40) {
          error = 'Пароль должен быть от 8 до 40 символов';
        } else if (!passwordUppercasePattern.test(value)) {
          error = 'Пароль должен содержать хотя бы одну заглавную латинскую букву';
        } else if (!passwordDigitPattern.test(value)) {
          error = 'Пароль должен содержать хотя бы одну цифру';
        }
      }

      if (name === 'repeatPassword') {
        const newPasswordInput =
          formElement.querySelector<HTMLInputElement>('input[name="newPassword"]')
          || formElement.querySelector<HTMLInputElement>('input[name="password"]');

        if (newPasswordInput && newPasswordInput.value) {
          if (newPasswordInput.value !== value) {
            error = 'Пароли не совпадают';
          }
        }
      }
    }

    const field = input.closest('.form__field');
    const errorEl = field?.querySelector<HTMLElement>('.form__error');

    if (errorEl) {
      errorEl.textContent = error;
    }

    if (error) {
      // eslint-disable-next-line no-console
      console.error(`[validateField] ${name}: ${error}`);
    }
  };

  const validateForm = (): ValidationResult => {
    const inputs = Array.from(
      formElement.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
    );

    const errors: Record<string, string> = {};

    inputs.forEach((input) => {
      validateField(input);
      const field = input.closest('.form__field');
      const errorEl = field?.querySelector<HTMLElement>('.form__error');
      const message = errorEl?.textContent ?? '';
      if (message) {
        errors[input.name] = message;
      }
    });

    const valid = Object.keys(errors).length === 0;

    if (valid && options?.logOnSuccess) {
      const data = Object.fromEntries(new FormData(formElement).entries());
      // eslint-disable-next-line no-console
      console.log('[formValidation] Данные успешно отправлены', data);
    }

    return { valid, errors };
  };

  return { validateField, validateForm };
};
