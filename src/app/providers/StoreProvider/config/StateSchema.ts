import { UserSchema } from 'entities/User';
import { RegistrationSchema } from 'features/Registration';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateSchema {
    user: UserSchema,
    // Async reducers
    registration?: RegistrationSchema,
}

export type { AppDispatch, RootState } from './store';
export type StateSchemaKey = keyof StateSchema;

export interface ReduserManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager:ReduserManager
}
