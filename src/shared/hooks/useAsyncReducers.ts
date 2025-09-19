import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useAppDispatch } from './redux';

interface ReducerEntry {
    key: StateSchemaKey;
    reducer: Reducer;
}

interface UseAsyncReducerOptions {
    removeOnUnmount?: boolean;
    sendLifecycleEvents?: boolean;
}

/**
 * Хук для динамического управления редюсерами
 * @param reducers - массив редюсеров с их ключами
 * @param options - опции конфигурации
 */
export const useAsyncReducers = (
    reducers: ReducerEntry[],
    options: UseAsyncReducerOptions = {},
) => {
    const {
        removeOnUnmount = true,
        sendLifecycleEvents = true,
    } = options;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const { reducerManager } = store;
        const addedKeys: StateSchemaKey[] = [];

        reducers.forEach(({ key, reducer }) => {
            const existingReducer = reducerManager.getReducerMap()[key];

            if (!existingReducer) {
                reducerManager.add(key, reducer);
                addedKeys.push(key);

                if (sendLifecycleEvents) {
                    dispatch({ type: `${key}/INIT` });
                }
            }
        });

        return () => {
            if (removeOnUnmount) {
                addedKeys.forEach((key) => {
                    reducerManager.remove(key);
                });

                if (sendLifecycleEvents) {
                    addedKeys.forEach((key) => {
                        dispatch({ type: `${key}/DESTROY` });
                    });
                }
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [removeOnUnmount, sendLifecycleEvents]);
};
