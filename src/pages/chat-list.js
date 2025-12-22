document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.querySelector('[data-testid="message-input"]');
    const sendButton = document.querySelector('[data-testid="send-message-btn"]');
    const addAttachmentBtn = document.querySelector('[data-testid="add-attachment-btn"]');
    const addUserBtn = document.querySelector('[data-testid="add-user-btn"]');
    const removeUserBtn = document.querySelector('[data-testid="remove-user-btn"]');
    
    // Sending message
    if (sendButton && messageInput) {
        const sendMessage = () => {
            const message = messageInput.value.trim();
            
            if (message) {
                console.log('Отправка сообщения:', {
                    message,
                    timestamp: new Date().toISOString()
                });
                
                // Will make API call here in future sprints
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
    
    // Attach file or location
    if (addAttachmentBtn) {
        addAttachmentBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*, .pdf, .doc, .docx';
            
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    console.log('Выбран файл:', file.name, file.type);
                    
                    // File upload processing later
                    // Show file name or description
                }
            });
            
            input.click();
        });
    }
    
    // Add a user to the chat
    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => {
            const username = prompt('Введите логин пользователя для добавления:');
            if (username) {
                console.log('Добавление пользователя:', username);
                // Will call API later
            }
        });
    }
    
    // Remove a user from the chat
    if (removeUserBtn) {
        removeUserBtn.addEventListener('click', () => {
            const username = prompt('Введите логин пользователя для удаления:');
            if (username) {
                console.log('Удаление пользователя:', username);
                // Will call API later
            }
        });
    }
});