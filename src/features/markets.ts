import { api } from '@/app/services/api';
import { MarketsType } from '@/entities/markets/types';
import { LoginCredentials, UserResponse } from '@/typesCommon/authTypes';
import { retry } from '@reduxjs/toolkit/query/react';

type MarketsResponse = MarketsType[];

export const marketsApi = api.injectEndpoints({
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
        getMarkets: build.query<MarketsResponse, void>({
            query: () => ({ url: 'markets' }),
            providesTags: (result = []) => [
                ...result.map(
                    ({ id }) =>
                        ({
                            type: 'Markets',
                            id,
                        }) as const
                ),
                { type: 'Markets' as const, id: 'LIST' },
            ],
        }),
    }),
});

export const { useLoginMutation, useGetMarketsQuery } = marketsApi;

export const {
    endpoints: { login, getMarkets },
} = marketsApi;
