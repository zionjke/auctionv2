import { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationIsLoading = (state: StateSchema) => state.registration?.isLoading || false;
export const getRegistrationError = (state: StateSchema) => state.registration?.error;
export const getRegistrationIsSuccess = (state: StateSchema) => state.registration?.isSuccess || false;
export const getRegistrationMessage = (state: StateSchema) => state.registration?.message;
