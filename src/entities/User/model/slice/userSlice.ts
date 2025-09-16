import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuthService, loginService, logoutService } from 'features/Authorization';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: undefined,
    isLoading: false,
    error: undefined,
    _inited: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginService.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authData = action.payload;
            })
            .addCase(loginService.rejected, (state, action) => {
                state.isLoading = false;
            })
            // Check Auth
            .addCase(checkAuthService.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuthService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authData = action.payload;
                state._inited = true; // Отмечаем инициализацию завершенной
            })
            .addCase(checkAuthService.rejected, (state) => {
                state.isLoading = false;
                state._inited = true; // Отмечаем инициализацию завершенной даже при ошибке
            })
            // Logout
            .addCase(logoutService.fulfilled, (state) => {
                state.authData = undefined;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
