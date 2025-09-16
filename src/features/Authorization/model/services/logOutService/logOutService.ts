import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_CONFIG, getApiUrl } from 'shared/config/apiConfig';

export const logoutService = createAsyncThunk<void, void>(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post(
                getApiUrl(API_CONFIG.endpoints.auth.logout),
                {},
                API_CONFIG.defaultConfig,
            );
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
