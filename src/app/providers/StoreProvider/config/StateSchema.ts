import { UserSchema } from 'entities/User';
import { RegistrationSchema } from 'features/Registration';

export interface StateSchema {
    user: UserSchema,
    registration: RegistrationSchema,
}

export type { AppDispatch, RootState } from './store';
