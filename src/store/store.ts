import { authApi } from '@/api/auth-api';
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/api/base-api';
import authReducer from '@/store/slices/auth-slice';
import appReducer from '@/store/slices/app-slice';
import marketsReducer from '@/store/slices/markets-slice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        handbook: marketsReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
