import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/typesCommon/authTypes';
import { authApi } from '@/api/auth-api';
import { RootState } from '@/store/store';


interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    initialized: boolean;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    loading: false,
    initialized: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.accessToken = null
            state.isAuthenticated = false
        },
        refreshTokens: (state, action: PayloadAction<{ accessToken: string; user: User }>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.initialized = true;
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
            state.isAuthenticated = true;
            state.initialized = true;
        },
        setInitialized: (state) => {
            state.initialized = true;
        },
    },
    extraReducers: (builder) => {
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

export const { logout, refreshTokens, setAccessToken, setInitialized } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;
