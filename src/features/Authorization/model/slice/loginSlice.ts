import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthData, LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    authData: undefined,
};
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<AuthData>) => {
            state.authData = action.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
