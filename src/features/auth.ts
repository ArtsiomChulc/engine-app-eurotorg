import { RootState } from '@/app/store/store';
import { marketsApi } from '@/features/markets';
import { User } from '@/typesCommon/authTypes';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    isAuthenticated: true,
} as { user: null | User; token: string | null; isAuthenticated: boolean }

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(marketsApi.endpoints.login.matchPending, (state, action) => {
                console.log('pending', action)
            })
            .addMatcher(marketsApi.endpoints.login.matchFulfilled, (state, action) => {
                console.log('fulfilled', action)
                state.user = action.payload.user
                state.token = action.payload.token
                state.isAuthenticated = true
            })
            .addMatcher(marketsApi.endpoints.login.matchRejected, (state, action) => {
                console.log('rejected', action)
            })
    },
})

export const { logout } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated
