import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
    error: string | null;
    isLoading: boolean;
}

const initialState: AppState = {
    error: '',
    isLoading: false,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
        clearLoading: (state) => {
            state.isLoading = false;
        }
    },
});

export const { setAppError, clearLoading, setLoading } = appSlice.actions;
export default appSlice.reducer;
