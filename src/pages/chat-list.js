document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.querySelector('[data-testid="message-input"]');
    const sendButton = document.querySelector('[data-testid="send-message-btn"]');
    const addAttachmentBtn = document.querySelector('[data-testid="add-attachment-btn"]');
    const addUserBtn = document.querySelector('[data-testid="add-user-btn"]');
    const removeUserBtn = document.querySelector('[data-testid="remove-user-btn"]');
    
    // Отправка сообщения
    if (sendButton && messageInput) {
        const sendMessage = () => {
            const message = messageInput.value.trim();
            
            if (message) {
                console.log('Отправка сообщения:', {
                    message,
                    timestamp: new Date().toISOString()
                });
                
                // Здесь будет API запрос
                messageInput.value = '';
            }
        };
        
        sendButton.addEventListener('click', sendMessage);
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Добавление вложения
    if (addAttachmentBtn) {
        addAttachmentBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*, .pdf, .doc, .docx';
            
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    console.log('Выбран файл:', file.name, file.type);
                    
                    // Здесь будет логика загрузки файла
                    // Можно отобразить превью или имя файла
                }
            });
            
            input.click();
        });
    }
    
    // Добавление пользователя в чат
    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => {
            const username = prompt('Введите логин пользователя для добавления:');
            if (username) {
                console.log('Добавление пользователя:', username);
                // Здесь будет API запрос
            }
        });
    }
    
    // Удаление пользователя из чата
    if (removeUserBtn) {
        removeUserBtn.addEventListener('click', () => {
            const username = prompt('Введите логин пользователя для удаления:');
            if (username) {
                console.log('Удаление пользователя:', username);
                // Здесь будет API запрос
            }
        });
    }
});