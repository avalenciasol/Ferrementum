import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        isLoggedIn: false,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = !!action.payload;
        },
        setUserData: (state, action) => {
            state.user = action.payload;        
        },
        removeToken: (state) => {
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setToken, setUserData, removeToken } = authSlice.actions;
export default authSlice.reducer;