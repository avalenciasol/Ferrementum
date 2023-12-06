import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        isLoggedIn: false,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        removeToken: (state) => {
            state.token = null;
            state.isLoggedIn = false;
        },
        setUserData: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setToken, removeToken, setUserData } =
authSlice.actions;
export default authSlice.reducer;