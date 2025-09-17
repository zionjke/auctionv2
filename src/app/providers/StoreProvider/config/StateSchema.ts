import { UserSchema } from 'entities/User';

export interface StateSchema {
    user: UserSchema
}

export type { AppDispatch, RootState } from './store';
