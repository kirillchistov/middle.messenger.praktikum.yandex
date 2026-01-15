// Общие правила для модуля валидации полей форм
export type FieldName =
  | 'first_name'
  | 'second_name'
  | 'login'
  | 'email'
  | 'password'
  | 'phone'
  | 'message';

type ValidationResult = {
  valid: boolean;
  message?: string;
};

// Учитываем букву Ёё вне стандартного набора
const nameRegex = /^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё-]*$/;
const loginRegex = /^(?=[A-Za-z0-9_-]{3,20}$)(?=.*[A-Za-z])[A-Za-z0-9_-]+$/;
const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!#$%&'*+\-./:;<=>?@^_`{|}~]{8,40}$/;
const phoneRegex = /^\+?\d{10,15}$/;

export function validateField(name: FieldName, value: string): ValidationResult {
  switch (name) {
    case 'first_name':
    case 'second_name':
      if (!value) return { valid: false, message: 'Поле обязательно' };
      if (!nameRegex.test(value)) {
        return {
          valid: false,
          message:
            'Первая буква заглавная, только буквы (латиница/кириллица), допустим дефис',
        };
      }
      return { valid: true };

    case 'login':
      if (!value) return { valid: false, message: 'Поле обязательно' };
      if (!loginRegex.test(value)) {
        return {
          valid: false,
          message:
            '3–20 символов, латиница, цифры, - и _, но не только цифры',
        };
      }
      return { valid: true };

    case 'email':
      if (!value) return { valid: false, message: 'Поле обязательно' };
      if (!emailRegex.test(value)) {
        return {
          valid: false,
          message:
            'Пример: example@mail.ru. Латиница, цифры, -, _, точка; @ и точка обязательны',
        };
      }
      return { valid: true };

    case 'password':
      if (!value) return { valid: false, message: 'Поле обязательно' };
      if (!passwordRegex.test(value)) {
        return {
          valid: false,
          message:
            '8–40 символов, минимум одна заглавная буква и одна цифра',
        };
      }
      return { valid: true };

    case 'phone':
      if (!value) return { valid: false, message: 'Поле обязательно' };
      if (!phoneRegex.test(value)) {
        return {
          valid: false,
          message: '10–15 цифр, допускается ведущий +',
        };
      }
      return { valid: true };

    case 'message':
      if (!value.trim()) {
        return { valid: false, message: 'Сообщение не должно быть пустым' };
      }
      return { valid: true };

    default:
      return { valid: true };
  }
}
