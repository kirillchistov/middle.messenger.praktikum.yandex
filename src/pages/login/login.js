document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());
            
            // Валидация
            if (!data.login || !data.password) {
                alert('Заполните все обязательные поля');
                return;
            }
            
            // Здесь будет API запрос
            console.log('Отправка данных для входа:', data);
            
            // Пример перенаправления после успешного входа
            // window.location.href = '/chat-list';
        });
    }
});