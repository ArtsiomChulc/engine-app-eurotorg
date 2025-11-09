import { setAppError } from '@/store/slices/app-slice';
import { logout, setAccessToken } from '@/store/slices/auth-slice';
import { RootState } from '@/store/store';
import type { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import {
    createApi,
    fetchBaseQuery,
    BaseQueryApi,
} from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include', // чтобы cookies шли автоматически
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: any
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && (result.error as FetchBaseQueryError).status === 401) {
        const refreshResult = await baseQuery(
            { url: 'auth/refresh', method: 'POST' },
            api,
            extraOptions
        );

        const errorMessage = (result as any).error.data.message;

        console.error(errorMessage);

        if (
            result.error.status === 'FETCH_ERROR' ||
            result.error.status === 'PARSING_ERROR'
        ) {
            api.dispatch(setAppError(result.error.error));
        }

        const data = refreshResult.data as { accessToken: string };

        if (data) {
            const newAccessToken = data.accessToken as string;
            api.dispatch(setAccessToken(newAccessToken));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Markets'],
    endpoints: () => ({}),
});
