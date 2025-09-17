import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/Authorization/model/types/loginSchema';

export interface StateSchema {
    user: UserSchema,
    login: LoginSchema
}

export type { AppDispatch, RootState } from './store';
