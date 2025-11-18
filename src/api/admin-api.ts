import { baseApi } from '@/api/base-api';
import {
    AdminTypeResUsers,
    AdminTypeResPersons,
} from '@/typesCommon/markets/types';

export const adminApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getAdminDataUsers: build.query<AdminTypeResUsers, void>({
            query: () => ({ url: 'admin/users' }),
            providesTags: (result = []) => [
                ...result.map(
                    ({ email }) =>
                        ({
                            type: 'Users',
                            email,
                        }) as const
                ),
                { type: 'Users' as const, id: 'LIST' },
            ],
        }),
        getAdminDataDirectors: build.query<AdminTypeResPersons[], void>({
            query: () => ({ url: 'admin/directors' }),
            providesTags: (result = []) => [
                ...result.map(
                    ({ email }) =>
                        ({
                            type: 'Directors',
                            email,
                        }) as const
                ),
                { type: 'Directors' as const, id: 'LIST' },
            ],
        }),
        getAdminDataEngineers: build.query<AdminTypeResPersons[], void>({
            query: () => ({ url: 'admin/engineers' }),
            providesTags: (result = []) => [
                ...result.map(
                    ({ email }) =>
                        ({
                            type: 'Engineers',
                            email,
                        }) as const
                ),
                { type: 'Engineers' as const, id: 'LIST' },
            ],
        }),
    }),
});

export const { useGetAdminDataUsersQuery, useGetAdminDataDirectorsQuery, useGetAdminDataEngineersQuery  } = adminApi;
