// API configuration for different environments
export const API_CONFIG = {
    baseURL: 'https://localhost:5001',
    apiVersion: 'v1',
    endpoints: {
        auth: {
            login: '/api/v1/Auth/login',
            logout: '/api/v1/Auth/logout',
            register: '/api/v1/Auth/register',
            me: '/api/v1/Auth/me',
            checkEmail: '/api/v1/Auth/check-email',
        },
    },
    // Default axios config
    defaultConfig: {
        withCredentials: true, // Always include cookies for authentication
        timeout: 10000, // 10 seconds timeout
        headers: {
            'Content-Type': 'application/json',
        },
    },
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => `${API_CONFIG.baseURL}${endpoint}`;
