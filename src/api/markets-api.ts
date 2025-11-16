import { baseApi } from '@/api/base-api';
import { MarketsType } from '@/typesCommon/markets/types';

type MarketsResponse = MarketsType[];

export const marketsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getMarkets: build.query<MarketsResponse, void>({
            query: () => ({ url: 'handbook' }),
            providesTags: (result = []) => [
                ...result.map(
                    ({ marketNumber }) =>
                        ({
                            type: 'Markets',
                            marketNumber,
                        }) as const
                ),
                { type: 'Markets' as const, id: 'LIST' },
            ],
        }),
    }),
});

export const { useGetMarketsQuery } = marketsApi;
