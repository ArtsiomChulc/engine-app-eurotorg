import { baseApi } from '@/api/base-api';
import { UserResponse, LoginCredentials, User } from '@/typesCommon/authTypes';

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<UserResponse, LoginCredentials>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: build.mutation<UserResponse, User>({
            query: (credentials) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        refresh: build.mutation<UserResponse, void>({
            query: () => ({ url: 'auth/refresh', method: 'POST' }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useRefreshMutation } = authApi;
