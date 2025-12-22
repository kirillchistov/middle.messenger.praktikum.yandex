document.addEventListener('DOMContentLoaded', () => {
    // Switch between tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all selected tab elements
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to all selected tab elements
            btn.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Upload avatar
    const avatarInput = document.getElementById('avatarInput');
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const removeAvatarBtn = document.getElementById('removeAvatarBtn');
    const avatarPreview = document.getElementById('avatarPreview');
    
    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', () => {
            avatarInput.click();
        });
    }
    
    if (avatarInput) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert('Пожалуйста, выберите изображение');
                    return;
                }
                
                if (file.size > 5 * 1024 * 1024) {
                    alert('Размер файла не должен превышать 5MB');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarPreview.src = e.target.result;
                    console.log('Аватар изменен:', file.name);
                    // Will call API later
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    if (removeAvatarBtn) {
        removeAvatarBtn.addEventListener('click', () => {
            if (confirm('Удалить текущее фото профиля?')) {
                avatarPreview.src = '/assets/default-avatar.png';
                console.log('Аватар удален');
                // Will call API later
            }
        });
    }
    
    // Save profile data
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(profileForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate inputs
            if (!data.first_name || !data.second_name || !data.login || !data.email || !data.phone) {
                alert('Заполните все обязательные поля');
                return;
            }
            
            console.log('Сохранение профиля:', data);
            // Will call API later
        });
    }
    
    // Change password
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(passwordForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate password entry
            const validatePassword = (password) => {
                const minLength = 8;
                const hasLetter = /[a-zA-Z]/.test(password);
                const hasNumber = /\d/.test(password);
                return password.length >= minLength && hasLetter && hasNumber;
            };
            
            if (!data.oldPassword || !data.newPassword) {
                alert('Заполните все поля');
                return;
            }
            
            if (!validatePassword(data.newPassword)) {
                alert('Новый пароль должен содержать минимум 8 символов, буквы и цифры');
                return;
            }
            
            if (data.oldPassword === data.newPassword) {
                alert('Новый пароль должен отличаться от старого');
                return;
            }
            
            console.log('Смена пароля:', {
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
                logoutAll: data.logoutAll === 'on'
            });
            
            // Will call API later
            alert('Пароль успешно изменен!');
            passwordForm.reset();
        });
    }
});