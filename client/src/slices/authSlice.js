import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = null;
        },
    },
});

export const { setToken, removeToken } =
authSlice.actions;
export default authSlice.reducer;