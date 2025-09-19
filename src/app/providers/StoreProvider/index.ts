import StoreProvider from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type {
    StateSchema, AppDispatch, RootState, ReduxStoreWithManager, StateSchemaKey,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    RootState,
    ReduxStoreWithManager,
    StateSchemaKey,
};
