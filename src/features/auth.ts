import { authApi } from '@/app/api/auth-api';
import { RootState } from '@/app/store/store';
import { User } from '@/typesCommon/authTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    loading: false,
    isAuthenticated: false,
} as {
    user: null | User;
    token: string | null;
    loading: boolean;
    isAuthenticated: boolean;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: builder => {
        builder
            .addMatcher(authApi.endpoints.login.matchPending, state => {
                state.loading = true;
            })
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, action) => {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isAuthenticated = true;
                    state.loading = false;
                }
            )
            .addMatcher(authApi.endpoints.login.matchRejected, state => {
                state.loading = false;
            });
        builder
            .addMatcher(authApi.endpoints.register.matchPending, state => {
                state.loading = true;
            })
            .addMatcher(
                authApi.endpoints.register.matchFulfilled,
                (state, action) => {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isAuthenticated = true;
                    state.loading = false;
                }
            )
            .addMatcher(authApi.endpoints.register.matchRejected, state => {
                state.loading = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated;
