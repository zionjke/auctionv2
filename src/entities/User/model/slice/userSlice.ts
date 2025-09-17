import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    checkAuthService, loginService, logoutService, loginBySecretKeyService,
} from 'features/Authorization';
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
                state.error = action.payload as string;
            })
            // Check Auth
            .addCase(checkAuthService.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuthService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authData = action.payload;
                state._inited = true;
            })
            .addCase(checkAuthService.rejected, (state) => {
                state.isLoading = false;
                state._inited = true;
            })
            // Logout
            .addCase(logoutService.fulfilled, (state) => {
                state.authData = undefined;
            })
            // Login by Secret Key
            .addCase(loginBySecretKeyService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginBySecretKeyService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authData = action.payload;
                state._inited = true;
            })
            .addCase(loginBySecretKeyService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
                state._inited = true;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
