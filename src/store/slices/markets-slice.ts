import { marketsApi } from '@/api/markets-api';
import { MarketsType } from '@/entities/markets/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    markets: null,
    loading: false,
} as {
    markets: null | MarketsType[];
    loading: boolean;
}

const marketSlice = createSlice({
    name: 'markets',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(
                marketsApi.endpoints.getMarkets.matchPending,
                (state) => {
                    state.loading = true
                }
            )
            .addMatcher(
                marketsApi.endpoints.getMarkets.matchFulfilled,
                (state, action) => {
                    state.markets = action.payload
                    state.loading = false
                }
            )
            .addMatcher(
                marketsApi.endpoints.getMarkets.matchRejected,
                (state) => {
                    state.loading = false
                }
            )
    }
})

export default marketSlice.reducer;