import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: loginUser,
        
    },
});