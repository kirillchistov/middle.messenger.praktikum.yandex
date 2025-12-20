export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    return password.length >= minLength && hasLetter && hasNumber;
};

export const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[78][-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
};

export const validateRequired = (value) => {
    return value && value.trim().length > 0;
};

export const validateForm = (formData, rules) => {
    const errors = {};
    
    Object.keys(rules).forEach(field => {
        const value = formData[field];
        const fieldRules = rules[field];
        
        if (fieldRules.required && !validateRequired(value)) {
            errors[field] = 'Это поле обязательно для заполнения';
            return;
        }
        
        if (value) {
            if (fieldRules.email && !validateEmail(value)) {
                errors[field] = 'Введите корректный email';
            } else if (fieldRules.phone && !validatePhone(value)) {
                errors[field] = 'Введите корректный номер телефона';
            } else if (fieldRules.minLength && value.length < fieldRules.minLength) {
                errors[field] = `Минимальная длина: ${fieldRules.minLength} символов`;
            } else if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
                errors[field] = `Максимальная длина: ${fieldRules.maxLength} символов`;
            } else if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
                errors[field] = fieldRules.message || 'Неверный формат';
            }
        }
    });
    
    return errors;
};