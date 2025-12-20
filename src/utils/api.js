const API_BASE_URL = 'https://api.example.com';

export const api = {
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        };
        
        const config = {
            ...defaultOptions,
            ...options,
            headers: {
                ...defaultOptions.headers,
                ...options.headers,
            },
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                const error = await response.json().catch(() => ({
                    message: `HTTP error ${response.status}`,
                }));
                throw new Error(error.message || `HTTP error ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    },
    
    // Аутентификация
    login(data) {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
    
    register(data) {
        return this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
    
    logout() {
        return this.request('/auth/logout', {
            method: 'POST',
        });
    },
    
    // Профиль
    getProfile() {
        return this.request('/profile');
    },
    
    updateProfile(data) {
        return this.request('/profile', {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },
    
    updatePassword(data) {
        return this.request('/profile/password', {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },
    
    updateAvatar(formData) {
        return this.request('/profile/avatar', {
            method: 'POST',
            headers: {},
            body: formData,
        });
    },
    
    // Чаты
    getChats() {
        return this.request('/chats');
    },
    
    getChat(id) {
        return this.request(`/chats/${id}`);
    },
    
    createChat(data) {
        return this.request('/chats', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
    
    sendMessage(chatId, message) {
        return this.request(`/chats/${chatId}/messages`, {
            method: 'POST',
            body: JSON.stringify({ message }),
        });
    },
    
    addUserToChat(chatId, userId) {
        return this.request(`/chats/${chatId}/users`, {
            method: 'POST',
            body: JSON.stringify({ userId }),
        });
    },
    
    removeUserFromChat(chatId, userId) {
        return this.request(`/chats/${chatId}/users/${userId}`, {
            method: 'DELETE',
        });
    },
};