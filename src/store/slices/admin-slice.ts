import { adminApi } from '@/api/admin-api';
import { User } from '@/typesCommon/authTypes';
import { AdminTypeResPersons } from '@/typesCommon/markets/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [] as User[],
    directors: [] as AdminTypeResPersons[],
    engineers: [] as AdminTypeResPersons[],
    loading: false,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // users
            .addMatcher(
                adminApi.endpoints.getAdminDataUsers.matchPending,
                state => {
                    state.loading = true;
                }
            )
            .addMatcher(
                adminApi.endpoints.getAdminDataUsers.matchFulfilled,
                (state, action) => {
                    state.users = action.payload;
                    state.loading = false;
                }
            )
            .addMatcher(
                adminApi.endpoints.getAdminDataUsers.matchRejected,
                state => {
                    state.loading = false;
                }
            )
            // directors
            .addMatcher(
                adminApi.endpoints.getAdminDataDirectors.matchPending,
                state => {
                    state.loading = true;
                }
            )
            .addMatcher(
                adminApi.endpoints.getAdminDataDirectors.matchFulfilled,
                (state, action) => {
                    state.directors = action.payload;
                    state.loading = false;
                }
            )
            .addMatcher(
                adminApi.endpoints.getAdminDataDirectors.matchRejected,
                state => {
                    state.loading = false;
                }
            )
            // engineers
            .addMatcher(
                adminApi.endpoints.getAdminDataEngineers.matchPending,
                state => {
                    state.loading = true;
                }
            )
            .addMatcher(
                adminApi.endpoints.getAdminDataEngineers.matchFulfilled,
                (state, action) => {
                    state.engineers = action.payload;
                    state.loading = false;
                }
            )
            .addMatcher(
                adminApi.endpoints.getAdminDataEngineers.matchRejected,
                state => {
                    state.loading = false;
                }
            );
    },
});

export default adminSlice.reducer;
