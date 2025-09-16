import { StateSchema } from 'app/providers/StoreProvider';

export const getIsUserAuthenticated = (state: StateSchema) => state.user.authData.isAuthenticated;
