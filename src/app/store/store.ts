import { api } from '@/app/api/api';
import auth from '@/features/auth';
import markets from '@/features/markets';
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            auth,
            markets
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(),
        ...options,
    })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
