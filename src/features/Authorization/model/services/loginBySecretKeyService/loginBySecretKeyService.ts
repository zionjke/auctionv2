import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserRole } from 'entities/User';
import { API_CONFIG, getApiUrl } from 'shared/config/apiConfig';

interface ManagerLoginRequest {
    SecretKey: string;
}

interface ManagerLoginResponse {
    message: string;
    isAuthenticated: boolean;
    user: {
        email: string;
        id: number;
        role: string;
        isActive: boolean;
    };
}

export const loginBySecretKeyService = createAsyncThunk<User, string>(
    'auth/loginBySecretKey',
    async (secretKey, thunkAPI) => {
        try {
            const requestData: ManagerLoginRequest = {
                SecretKey: secretKey,
            };

            const response = await axios.post<ManagerLoginResponse>(
                getApiUrl(API_CONFIG.endpoints.auth.managerLogin),
                requestData,
                API_CONFIG.defaultConfig,
            );

            if (!response.data || !response.data.isAuthenticated) {
                throw new Error('Manager login failed');
            }

            const userData = response.data.user;
            const user: User = {
                email: userData.email,
                userId: userData.id,
                isAuthenticated: response.data.isAuthenticated,
                role: UserRole.Manager, // Всегда менеджер при логине по ключу
                message: response.data.message,
            };

            return user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    },
);
