import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_CONFIG, getApiUrl } from 'shared/config/apiConfig';
import { RegistrationData } from '../../types/registrationSchema';

interface RegistrationResponse {
    message: string;
}

export const registrationService = createAsyncThunk<string, RegistrationData>(
    'registration/register',
    async (registrationData, thunkAPI) => {
        try {
            const response = await axios.post<RegistrationResponse>(
                getApiUrl(API_CONFIG.endpoints.auth.register),
                registrationData,
                API_CONFIG.defaultConfig,
            );

            return response.data.message || 'Registration successful! Please login with your credentials.';
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data?.message || 'Registration failed');
        }
    },
);
