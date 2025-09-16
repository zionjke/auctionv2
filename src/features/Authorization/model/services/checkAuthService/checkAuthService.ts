import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserRole } from 'entities/User';
import { API_CONFIG, getApiUrl } from 'shared/config/apiConfig';

// Правильный тип ответа от бекенда
interface AuthMeResponse {
    email: string;
    userId: number | null;
    isAuthenticated: boolean;
    role: string;
    principalRole: string;
    message: string;
}

export const checkAuthService = createAsyncThunk<User, void>(
    'auth/checkAuth',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<AuthMeResponse>(
                getApiUrl(API_CONFIG.endpoints.auth.me),
                API_CONFIG.defaultConfig,
            );

            if (!response.data || !response.data.isAuthenticated) {
                throw new Error('User not authenticated');
            }

            const userData = response.data;
            const user: User = {
                email: userData.email,
                userId: userData.userId || 0,
                isAuthenticated: userData.isAuthenticated,
                role: userData.role === 'Manager' ? UserRole.Manager : UserRole.User,
                message: userData.message,
            };

            return user;
        } catch (e) {
            console.error('❌ CheckAuth: Error:', e);
            return thunkAPI.rejectWithValue(e);
        }
    },
);
