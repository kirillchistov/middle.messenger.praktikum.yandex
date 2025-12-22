document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate form data
            if (!data.login || !data.password) {
                alert('Заполните все обязательные поля');
                return;
            }
            
            // Will call API later
            console.log('Отправка данных для входа:', data);
            
            // Once authorized will redirect to chat list
            // window.location.href = '/chat-list';
        });
    }
});