import { api } from '@/app/api/api';
import { MarketsType } from '@/entities/markets/types';

type MarketsResponse = MarketsType[];

export const marketsApi = api.injectEndpoints({
    endpoints: build => ({
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

export const { useGetMarketsQuery } = marketsApi;

export const {
    endpoints: { getMarkets },
} = marketsApi;
