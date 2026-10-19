import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./endpoints/authApi";
import {orderApi} from "./endpoints/orderApi";
import authSlice from "./slices/authSlice";
import themeSlice from "./slices/themeSlice";


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        auth: authSlice,
        theme: themeSlice
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(orderApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch