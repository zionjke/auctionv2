import { createSlice } from '@reduxjs/toolkit';
import { registrationService } from '../../services/registrationService/registrationService';
import { RegistrationSchema } from '../../types/registrationSchema';

const initialState: RegistrationSchema = {
    isLoading: false,
    error: undefined,
    isSuccess: false,
    message: undefined,
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        clearRegistrationState: (state) => {
            state.isLoading = false;
            state.error = undefined;
            state.isSuccess = false;
            state.message = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.isSuccess = false;
            })
            .addCase(registrationService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
                state.error = undefined;
            })
            .addCase(registrationService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
                state.isSuccess = false;
            });
    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
