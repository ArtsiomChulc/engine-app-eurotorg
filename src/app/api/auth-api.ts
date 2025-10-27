import { api } from '@/app/api/api';
import {
    UserResponse,
    LoginCredentials, User,
} from '@/typesCommon/authTypes';
import { retry } from '@reduxjs/toolkit/query/react';

export const authApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<UserResponse, LoginCredentials>({
            query: credentials => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
            extraOptions: {
                backoff: () => {
                    retry.fail({ fake: 'error' });
                },
            },
        }),
        register: build.mutation<UserResponse, User>({
            query: credentials => ({
                url: 'register',
                method: 'POST',
                body: credentials,
            }),
            extraOptions: {
                backoff: () => {
                    retry.fail({ fake: 'error' });
                },
            },
        })
    })
})

export const {useLoginMutation, useRegisterMutation} = authApi;