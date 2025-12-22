document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        const validatePassword = (password) => {
            const minLength = 8;
            const hasLetter = /[a-zA-Z]/.test(password);
            const hasNumber = /\d/.test(password);
            
            return password.length >= minLength && hasLetter && hasNumber;
        };
        
        registrationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(registrationForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate registration data entry
            const errors = [];
            
            if (!data.first_name || !data.second_name) {
                errors.push('Заполните имя и фамилию');
            }
            
            if (!data.login || data.login.length < 3) {
                errors.push('Логин должен быть не менее 3 символов');
            }
            
            if (!data.email || !data.email.includes('@')) {
                errors.push('Введите корректный email');
            }
            
            if (!validatePassword(data.password)) {
                errors.push('Пароль должен содержать минимум 8 символов, буквы и цифры');
            }
            
            if (!data.phone || data.phone.length < 10) {
                errors.push('Введите корректный номер телефона');
            }
            
            if (!data.agreement) {
                errors.push('Необходимо принять условия использования');
            }
            
            if (errors.length > 0) {
                alert(errors.join('\n'));
                return;
            }
            
            // Will call API later
            console.log('Отправка данных для регистрации:', data);
            
            // Once registered will redirect to login
            // window.location.href = '/login?registered=true';
        });
    }
});