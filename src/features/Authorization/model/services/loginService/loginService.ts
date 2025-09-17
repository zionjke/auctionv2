import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserRole } from 'entities/User';
import { API_CONFIG, getApiUrl } from 'shared/config/apiConfig';
import { AuthData } from '../../types/loginSchema';

export const loginService = createAsyncThunk<User, AuthData>(
    'auth/login',
    async (authData, thunkAPI) => {
        try {
            const response = await axios
                .post<{message: string, isAuthenticated: boolean, user: any}>(
                    getApiUrl(API_CONFIG.endpoints.auth.login),
                    authData,
                    API_CONFIG.defaultConfig,
                );

            if (!response.data || !response.data.user) {
                throw new Error('Invalid response from server');
            }

            const userData = response.data.user;
            const user: User = {
                email: userData.email,
                userId: userData.id,
                isAuthenticated: response.data.isAuthenticated,
                role: userData.role === 'Manager' ? UserRole.Manager : UserRole.User,
                message: response.data.message,
            };

            return user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    },
);
