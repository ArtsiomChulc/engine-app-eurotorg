import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/typesCommon/authTypes';
import { authApi } from '@/api/auth-api';
import { RootState } from '@/store/store';

const token = localStorage.getItem('accessToken');

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: !!token,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        refreshTokens: (state, action: PayloadAction<{ accessToken: string; user: User }>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.loading = true;
            state.accessToken = action.payload;
            localStorage.setItem("accessToken", action.payload);
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        // Login
        builder
            .addMatcher(authApi.endpoints.login.matchPending, (state) => {
                state.loading = true;
            })
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addMatcher(authApi.endpoints.login.matchRejected, (state) => {
                state.loading = false;
            });

        // Register
        builder
            .addMatcher(authApi.endpoints.register.matchPending, (state) => {
                state.loading = true;
            })
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addMatcher(authApi.endpoints.register.matchRejected, (state) => {
                state.loading = false;
            });
    },
});

export const { logout, refreshTokens, setAccessToken } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
